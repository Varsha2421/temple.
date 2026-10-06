const fs = require('fs');
const path = require('path');
const https = require('https');

const imgDir = path.join(__dirname, '..', 'public', 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// 12 Temples with titles on English Wikipedia
const templePages = [
  { id: 'meenakshi', page: 'Meenakshi_Temple' },
  { id: 'brihadeeswarar', page: 'Brihadisvara_Temple,_Thanjavur' },
  { id: 'ranganathaswamy', page: 'Sri_Ranganathaswamy_Temple' },
  { id: 'murugan_palani', page: 'Palani_Murugan_temple' },
  { id: 'ramanathaswamy', page: 'Ramanathaswamy_Temple' },
  { id: 'nataraja_chidambaram', page: 'Nataraja_Temple,_Chidambaram' },
  { id: 'arunachaleswarar', page: 'Annamalaiyar_Temple' },
  { id: 'kapaleeshwarar', page: 'Kapaleeshwarar_Temple' },
  { id: 'ekambareswarar', page: 'Ekambareswarar_Temple_(Kanchipuram)' },
  { id: 'tiruchendur_murugan', page: 'Thiruchendur_Murugan_Temple' },
  { id: 'nellaiappar', page: 'Nellaiappar_Temple' },
  { id: 'kasi_viswanathar', page: 'Kasi_Viswanathar_Temple,_Tenkasi' }
];

function fetchJson(url) {
  return new Promise(resolve => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'application/json'
      }
    }, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch(e) { resolve(null); }
      });
    });
    req.on('error', () => resolve(null));
  });
}

function downloadImage(url, destPath) {
  return new Promise(resolve => {
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Referer': 'https://en.wikipedia.org/'
      }
    }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadImage(res.headers.location, destPath).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`HTTP ${res.statusCode} for ${url}`);
        return resolve(false);
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stat = fs.statSync(destPath);
          resolve(stat.size > 5000);
        });
      });
    });
    req.on('error', (err) => {
      console.log('Err:', err.message);
      resolve(false);
    });
  });
}

(async () => {
  console.log('Starting Wikipedia image download...');
  const mapping = {};

  for (const t of templePages) {
    mapping[t.id] = [];
    console.log(`Processing ${t.id} (${t.page})...`);

    // Get page images list from MediaWiki API
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(t.page)}&generator=images&gimlimit=10&prop=imageinfo&iiprop=url&format=json&redirects=1`;
    const data = await fetchJson(apiUrl);

    let urls = [];
    if (data && data.query && data.query.pages) {
      urls = Object.values(data.query.pages)
        .map(p => p.imageinfo && p.imageinfo[0] ? p.imageinfo[0].url : null)
        .filter(Boolean)
        .filter(u => {
          const l = u.toLowerCase();
          return (l.endsWith('.jpg') || l.endsWith('.jpeg') || l.endsWith('.png')) &&
            !l.includes('flag') && !l.includes('icon') && !l.includes('symbol') &&
            !l.includes('map') && !l.includes('logo') && !l.includes('wiki') && !l.includes('commons');
        });
    }

    // Also fetch the main summary image as priority 1
    const summaryUrl = `https://en.wikipedia.org/api/rest_v1/page/summary/${encodeURIComponent(t.page)}`;
    const summaryData = await fetchJson(summaryUrl);
    if (summaryData && summaryData.originalimage && summaryData.originalimage.source) {
      urls.unshift(summaryData.originalimage.source);
    }

    // Download top 4 unique working images
    let count = 0;
    const seen = new Set();

    for (const u of urls) {
      if (seen.has(u)) continue;
      seen.add(u);

      const filename = `${t.id}_img_${count + 1}.jpg`;
      const destPath = path.join(imgDir, filename);

      process.stdout.write(`  Downloading #${count + 1}... `);
      const success = await downloadImage(u, destPath);

      if (success) {
        console.log(`✓ Saved /img/${filename}`);
        mapping[t.id].push(`/img/${filename}`);
        count++;
        if (count >= 4) break;
      } else {
        console.log(`✗ Failed`);
      }
      await new Promise(r => setTimeout(r, 300));
    }
  }

  fs.writeFileSync(path.join(__dirname, '..', 'scratch_local_images_map.json'), JSON.stringify(mapping, null, 2));
  console.log('✓ All temple images processing completed!');
})();
