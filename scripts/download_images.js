const fs = require('fs');
const path = require('path');
const https = require('https');

const imgDir = path.join(__dirname, '..', 'public', 'img');
if (!fs.existsSync(imgDir)) {
  fs.mkdirSync(imgDir, { recursive: true });
}

// Clean up any broken query param files
fs.readdirSync(imgDir).forEach(f => {
  if (f.includes('org&') || f.includes('utm_')) {
    fs.unlinkSync(path.join(imgDir, f));
  }
});

const templeImages = {
  brihadeeswarar: [
    { key: 'vimana', label: 'Vimana (Main Tower)', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Brihadeeswarar_Temple_Thanjavur.jpg/800px-Brihadeeswarar_Temple_Thanjavur.jpg' },
    { key: 'nandi', label: 'Nandi Mandapam', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Big_Temple_Nandi_Thanjavur.jpg/800px-Big_Temple_Nandi_Thanjavur.jpg' },
    { key: 'shrine', label: 'Shivalingam Sanctum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Brihadeeswarar_Temple%2C_Thanjavur_16.jpg/800px-Brihadeeswarar_Temple%2C_Thanjavur_16.jpg' },
    { key: 'compound', label: 'Temple Compound', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Thanjavur_Periya_Kovil_Front_View.jpg/800px-Thanjavur_Periya_Kovil_Front_View.jpg' }
  ],
  ranganathaswamy: [
    { key: 'gopuram', label: '21 Gopurams Rajagopuram', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Srirangam_temple_tower.jpg/800px-Srirangam_temple_tower.jpg' },
    { key: 'reclining', label: 'Reclining Ranganatha Shrine', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ranganathaswamy_temple_tiruchirappalli.jpg/800px-Ranganathaswamy_temple_tiruchirappalli.jpg' },
    { key: 'hall', label: 'Pillared Mandapam', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sri_Ranganathaswamy_Temple_Srirangam.jpg/800px-Sri_Ranganathaswamy_Temple_Srirangam.jpg' },
    { key: 'tank', label: 'Temple Tank', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Srirangam_temple_hall.jpg/800px-Srirangam_temple_hall.jpg' }
  ],
  murugan_palani: [
    { key: 'hill', label: 'Hilltop Temple View', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Palanihills.JPG/800px-Palanihills.JPG' },
    { key: 'shrine', label: 'Palani Shrine', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Palani_Murugan_temple_hill.jpg/800px-Palani_Murugan_temple_hill.jpg' },
    { key: 'steps', label: 'Temple Steps', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Palani_temple_steps.jpg/800px-Palani_temple_steps.jpg' },
    { key: 'prasadam', label: 'Panjamirtham Prasadam', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Palani_Murugan_temple.jpg/800px-Palani_Murugan_temple.jpg' }
  ],
  ramanathaswamy: [
    { key: 'corridor', label: '1212m Longest Corridor', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Rameswaram_Corridor.jpg/800px-Rameswaram_Corridor.jpg' },
    { key: 'theertham', label: '22 Sacred Theerthams', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ramanathaswamy_temple7.JPG/800px-Ramanathaswamy_temple7.JPG' },
    { key: 'seashore', label: 'Seashore View', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Rameswaram_Temple_East_Gopuram.jpg/800px-Rameswaram_Temple_East_Gopuram.jpg' },
    { key: 'pooja', label: 'Evening Sanctum Pooja', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rameswaram_seashore_temple.jpg/800px-Rameswaram_seashore_temple.jpg' }
  ],
  nataraja_chidambaram: [
    { key: 'shrine', label: 'Nataraja Shrine', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Le_temple_de_Shiva_Nataraja_%28Chidambaram%2C_Inde%29_%2814037020332%29.jpg/800px-Le_temple_de_Shiva_Nataraja_%28Chidambaram%2C_Inde%29_%2814037020332%29.jpg' },
    { key: 'gopuram', label: 'Eastern Gopuram', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Chidambaram_Nataraja_Temple_Eastern_Gopuram.jpg/800px-Chidambaram_Nataraja_Temple_Eastern_Gopuram.jpg' },
    { key: 'tank', label: 'Temple Tank', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Chidambaram_temple_tank.jpg/800px-Chidambaram_temple_tank.jpg' },
    { key: 'roof', label: 'Golden Roof Sabhai', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Chidambaram_gopuram.jpg/800px-Chidambaram_gopuram.jpg' }
  ],
  arunachaleswarar: [
    { key: 'deepam', label: 'Karthigai Deepam Beacon', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Arunachalam_temple_from_a_nearby_hill.jpg/800px-Arunachalam_temple_from_a_nearby_hill.jpg' },
    { key: 'hill', label: 'Arunachala Hill View', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tiruvannamalai_Temple_aerial.jpg/800px-Tiruvannamalai_Temple_aerial.jpg' },
    { key: 'gopuram', label: 'East Gopuram', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Thiruvannamalai_Temple_Gopuram.jpg/800px-Thiruvannamalai_Temple_Gopuram.jpg' },
    { key: 'path', label: 'Girivalam Path', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Arunachaleswara_Temple_Tiruvannamalai.jpg/800px-Arunachaleswara_Temple_Tiruvannamalai.jpg' }
  ],
  kapaleeshwarar: [
    { key: 'gopuram', label: 'Mylapore Gopuram', url: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Kapaleeswarar1.jpg' },
    { key: 'tank', label: 'Temple Tank', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kapaleeshwarar_Temple_Gopuram.jpg/800px-Kapaleeshwarar_Temple_Gopuram.jpg' },
    { key: 'festival', label: 'Arubathimoovar Festival', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mylapore_Kapaleeshwarar_temple_tank.jpg/800px-Mylapore_Kapaleeshwarar_temple_tank.jpg' },
    { key: 'shrine', label: 'Inner Shrine', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kapaleeshwarar_temple_side_view.jpg/800px-Kapaleeshwarar_temple_side_view.jpg' }
  ],
  ekambareswarar: [
    { key: 'gopuram', label: '58m Gopuram', url: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Ekambareswarar5.jpg' },
    { key: 'tree', label: '3500-year Mango Tree', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ekambareswarar_Temple_Kanchipuram.jpg/800px-Ekambareswarar_Temple_Kanchipuram.jpg' },
    { key: 'corridor', label: 'Temple Corridor', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ekambareswarar_Temple_gopuram_view.jpg/800px-Ekambareswarar_Temple_gopuram_view.jpg' },
    { key: 'shrine', label: 'Earth Lingam Shrine', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Ekambaranathar_temple_hall.jpg/800px-Ekambaranathar_temple_hall.jpg' }
  ],
  tiruchendur_murugan: [
    { key: 'gopuram', label: 'Seashore Gopuram', url: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Thiruchendur11.jpg' },
    { key: 'beach', label: 'Bay of Bengal View', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Thiruchendur_Temple_Tower.jpg/800px-Thiruchendur_Temple_Tower.jpg' },
    { key: 'soorasamharam', label: 'Soorasamharam Festival', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tiruchendur_Murugan_Temple_Seashore.jpg/800px-Tiruchendur_Murugan_Temple_Seashore.jpg' },
    { key: 'pooja', label: 'Sunset Ocean Pooja', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Tiruchendur_temple_beach.jpg/800px-Tiruchendur_temple_beach.jpg' }
  ],
  nellaiappar: [
    { key: 'pillars', label: 'Musical Pillars Hall', url: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Nellaiappar_temple_tower.jpg' },
    { key: 'shrine', label: 'Gandhimathi Shrine', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Nellaiappar_Temple_Gopuram.jpg/800px-Nellaiappar_Temple_Gopuram.jpg' },
    { key: 'gopuram', label: 'Twin Gopurams', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nellaiappar_temple_car.jpg/800px-Nellaiappar_temple_car.jpg' },
    { key: 'procession', label: 'Festival Procession', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Nellaiappar_Kovil_Tirunelveli.jpg/800px-Nellaiappar_Kovil_Tirunelveli.jpg' }
  ],
  kasi_viswanathar: [
    { key: 'gopuram', label: 'Gopuram & Western Ghats', url: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/The_magnificent_Kasi_Vishwanathat_Temple_Rajagopuram.jpg' },
    { key: 'waterfalls', label: 'Courtallam Waterfalls', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Tenkasi_Kasi_Viswanathar_Temple.jpg/800px-Tenkasi_Kasi_Viswanathar_Temple.jpg' },
    { key: 'ghat', label: 'Chittar River Ghat', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Courtallam_main_falls.jpg/800px-Courtallam_main_falls.jpg' },
    { key: 'shrine', label: 'Inner Sanctum', url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/The_magnificent_Kasi_Vishwanathat_Temple_Rajagopuram.jpg/800px-The_magnificent_Kasi_Vishwanathat_Temple_Rajagopuram.jpg' }
  ]
};

function download(url, filePath) {
  return new Promise(resolve => {
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, filePath).then(resolve);
      }
      if (res.statusCode !== 200) {
        console.log(`Failed HTTP ${res.statusCode} for ${filePath}`);
        return resolve(false);
      }
      const file = fs.createWriteStream(filePath);
      res.pipe(file);
      file.on('finish', () => file.close(() => resolve(true)));
    });
    req.on('error', (err) => {
      console.log(`Err downloading ${filePath}: ${err.message}`);
      resolve(false);
    });
  });
}

(async () => {
  const mapping = {};
  for (const [id, items] of Object.entries(templeImages)) {
    mapping[id] = [];
    for (const item of items) {
      const filename = `${id}_${item.key}.jpg`;
      const dest = path.join(imgDir, filename);
      console.log(`Downloading ${filename}...`);
      const ok = await download(item.url, dest);
      if (ok && fs.existsSync(dest) && fs.statSync(dest).size > 1000) {
        console.log(`✓ Saved ${filename}`);
        mapping[id].push({ label: item.label, image: `/img/${filename}` });
      } else {
        // Fallback to direct URL if local download failed
        mapping[id].push({ label: item.label, image: item.url });
      }
      await new Promise(r => setTimeout(r, 200));
    }
  }
  fs.writeFileSync(path.join(__dirname, '..', 'scratch_final_mapping.json'), JSON.stringify(mapping, null, 2));
  console.log('Finished downloading all temple images.');
})();
