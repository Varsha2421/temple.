const fs = require('fs');
const path = require('path');
const https = require('https');

const imgDir = path.join(__dirname, '..', 'public', 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Curated high quality image sources for all 12 temples
const templeImageSources = {
  meenakshi: [
    '/img/meenakshi_gopuram.png',
    '/img/meenakshi_temple_tank.png',
    '/img/meenakshi_pillared_hall.png',
    '/img/meenakshi_inner_sanctum.png'
  ],
  brihadeeswarar: [
    'https://images.unsplash.com/photo-1621831814631-f18b5b290940?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600100397608-f090742f40cb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1627894006066-b45786537104?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
  ],
  ranganathaswamy: [
    'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590076215667-873d6600ca1b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621831814631-f18b5b290940?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600100397608-f090742f40cb?auto=format&fit=crop&w=800&q=80'
  ],
  murugan_palani: [
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1627894006066-b45786537104?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590076215667-873d6600ca1b?auto=format&fit=crop&w=800&q=80'
  ],
  ramanathaswamy: [
    'https://images.unsplash.com/photo-1600100397608-f090742f40cb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621831814631-f18b5b290940?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1627894006066-b45786537104?auto=format&fit=crop&w=800&q=80'
  ],
  nataraja_chidambaram: [
    'https://images.unsplash.com/photo-1627894006066-b45786537104?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600100397608-f090742f40cb?auto=format&fit=crop&w=800&q=80'
  ],
  arunachaleswarar: [
    'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621831814631-f18b5b290940?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1627894006066-b45786537104?auto=format&fit=crop&w=800&q=80'
  ],
  kapaleeshwarar: [
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600100397608-f090742f40cb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621831814631-f18b5b290940?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80'
  ],
  ekambareswarar: [
    'https://images.unsplash.com/photo-1621831814631-f18b5b290940?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600100397608-f090742f40cb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1627894006066-b45786537104?auto=format&fit=crop&w=800&q=80'
  ],
  tiruchendur_murugan: [
    'https://images.unsplash.com/photo-1590076215667-873d6600ca1b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621831814631-f18b5b290940?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80'
  ],
  nellaiappar: [
    'https://images.unsplash.com/photo-1600100397608-f090742f40cb?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1627894006066-b45786537104?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1621831814631-f18b5b290940?auto=format&fit=crop&w=800&q=80'
  ],
  kasi_viswanathar: [
    'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590076215667-873d6600ca1b?auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=800&q=80'
  ]
};

function downloadUrl(url, destPath) {
  return new Promise(resolve => {
    if (url.startsWith('/img/')) {
      return resolve(true); // already local
    }
    const req = https.get(url, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return downloadUrl(res.headers.location, destPath).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`Failed status ${res.statusCode} for ${url}`);
        return resolve(false);
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(true));
      });
    });
    req.on('error', () => resolve(false));
  });
}

(async () => {
  console.log('Downloading local temple images...');
  const localMap = {};

  for (const [id, urls] of Object.entries(templeImageSources)) {
    localMap[id] = [];
    for (let i = 0; i < urls.length; i++) {
      const src = urls[i];
      if (src.startsWith('/img/')) {
        localMap[id].push(src);
      } else {
        const filename = `${id}_pic_${i + 1}.jpg`;
        const destPath = path.join(imgDir, filename);
        process.stdout.write(`Downloading ${filename}... `);
        const ok = await downloadUrl(src, destPath);
        if (ok && fs.existsSync(destPath) && fs.statSync(destPath).size > 1000) {
          console.log(`✓ Saved /img/${filename}`);
          localMap[id].push(`/img/${filename}`);
        } else {
          console.log(`✗ Failed`);
        }
      }
    }
  }

  fs.writeFileSync(path.join(__dirname, '..', 'scratch_local_map.json'), JSON.stringify(localMap, null, 2));
  console.log('Finished downloading all local images.');
})();
