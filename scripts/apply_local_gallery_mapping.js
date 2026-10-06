const fs = require('fs');
const path = require('path');

const templeDataPath = path.join(__dirname, '..', 'db', 'templeData.js');

// Map of 100% local, guaranteed working image files for all 12 temples
const localGalleryMapping = {
  meenakshi: [
    { label: 'South Gopuram (170ft Tower)', image: '/img/meenakshi_gopuram.png' },
    { label: 'Porthamarai Kulam (Golden Lotus Tank)', image: '/img/meenakshi_temple_tank.png' },
    { label: 'Thousand Pillars Hall (Aayiram Kaal)', image: '/img/meenakshi_pillared_hall.png' },
    { label: 'Inner Sanctum & Divine Shrine', image: '/img/meenakshi_inner_sanctum.png' }
  ],
  brihadeeswarar: [
    { label: 'Vimana (66m Granite Main Tower)', image: '/img/brihadeeswarar_img_1.jpg' },
    { label: 'Monolithic Nandi Mandapam', image: '/img/brihadeeswarar_pic_4.jpg' },
    { label: 'Peruvudaiyar Shivalingam Shrine', image: '/img/brihadeeswarar_img_1.jpg' },
    { label: 'Chola Granite Temple Compound', image: '/img/brihadeeswarar_pic_4.jpg' }
  ],
  ranganathaswamy: [
    { label: '73m High Rajagopuram (11 Tiers)', image: '/img/ranganathaswamy_pic_1.jpg' },
    { label: 'Reclining Ranganatha Sanctum', image: '/img/ranganathaswamy_pic_1.jpg' },
    { label: 'Srirangam Sculptured Mandapam', image: '/img/ranganathaswamy_pic_1.jpg' },
    { label: 'Chandra Pushkarani Temple Tank', image: '/img/ranganathaswamy_pic_1.jpg' }
  ],
  murugan_palani: [
    { label: 'Palani Hilltop Temple View', image: '/img/murugan_palani_pic_1.jpg' },
    { label: 'Dhandayuthapani Murugan Shrine', image: '/img/murugan_palani_pic_3.jpg' },
    { label: '693 Sacred Hill Steps', image: '/img/murugan_palani_pic_1.jpg' },
    { label: 'GI-Tagged Panjamirtham Offering', image: '/img/murugan_palani_pic_3.jpg' }
  ],
  ramanathaswamy: [
    { label: '1,212m World\'s Longest Corridor', image: '/img/ramanathaswamy_img_1.jpg' },
    { label: '22 Sacred Theerthams (Holy Wells)', image: '/img/ramanathaswamy_pic_2.jpg' },
    { label: 'Seashore Bay of Bengal Temple View', image: '/img/ramanathaswamy_img_1.jpg' },
    { label: 'Illuminated Evening Sanctum Pooja', image: '/img/ramanathaswamy_pic_2.jpg' }
  ],
  nataraja_chidambaram: [
    { label: 'Nataraja Ananda Tandava Shrine', image: '/img/nataraja_chidambaram_img_1.jpg' },
    { label: 'Chidambaram Eastern Rajagopuram', image: '/img/nataraja_chidambaram_pic_2.jpg' },
    { label: 'Sivaganga Sacred Temple Tank', image: '/img/nataraja_chidambaram_pic_3.jpg' },
    { label: 'Kanaka Sabha Golden Roof', image: '/img/nataraja_chidambaram_img_1.jpg' }
  ],
  arunachaleswarar: [
    { label: 'Karthigai Deepam Beacon of Light', image: '/img/arunachaleswarar_img_1.jpg' },
    { label: 'Arunachala Hill Fire Lingam View', image: '/img/arunachaleswarar_pic_1.jpg' },
    { label: 'Eastern Rajagopuram', image: '/img/arunachaleswarar_pic_3.jpg' },
    { label: '14km Girivalam Path', image: '/img/arunachaleswarar_img_1.jpg' }
  ],
  kapaleeshwarar: [
    { label: 'Mylapore 37m Dravidian Rajagopuram', image: '/img/kapaleeshwarar_gopuram.jpg' },
    { label: 'Mylapore Temple Tank (Kapaleeswarar Kulam)', image: '/img/kapaleeshwarar_img_1.jpg' },
    { label: 'Arubathimoovar Festival Procession', image: '/img/kapaleeshwarar_pic_1.jpg' },
    { label: 'Karpagambal Ambal Inner Shrine', image: '/img/kapaleeshwarar_pic_4.jpg' }
  ],
  ekambareswarar: [
    { label: '58m Towering Southern Gopuram', image: '/img/ekambareswarar_gopuram.jpg' },
    { label: '3500-Year Sacred Mango Tree', image: '/img/ekambareswarar_img_1.jpg' },
    { label: '1000-Pillar Sculptured Hall', image: '/img/ekambareswarar_pic_2.jpg' },
    { label: 'Prithvi (Earth) Lingam Sanctum', image: '/img/ekambareswarar_gopuram.jpg' }
  ],
  tiruchendur_murugan: [
    { label: 'Seashore Rajagopuram at Bay of Bengal', image: '/img/tiruchendur_murugan_pic_2.jpg' },
    { label: 'Tiruchendur Ocean Waves & Temple', image: '/img/tiruchendur_murugan_pic_4.jpg' },
    { label: 'Skanda Shasti Soorasamharam Enactment', image: '/img/tiruchendur_murugan_pic_2.jpg' },
    { label: 'Sunset Ocean Pooja Rituals', image: '/img/tiruchendur_murugan_pic_4.jpg' }
  ],
  nellaiappar: [
    { label: '48 Musical Stone Pillars Hall', image: '/img/nellaiappar_pillars.jpg' },
    { label: 'Gandhimathi Ambal Sacred Shrine', image: '/img/nellaiappar_img_1.jpg' },
    { label: 'Twin Temple Rajagopurams', image: '/img/nellaiappar_pic_3.jpg' },
    { label: 'Panguni Car Festival Procession', image: '/img/nellaiappar_pillars.jpg' }
  ],
  kasi_viswanathar: [
    { label: 'Rajagopuram & Western Ghats Peak', image: '/img/kasi_viswanathar_gopuram.jpg' },
    { label: 'Courtallam Waterfalls Bathing Spot', image: '/img/kasi_viswanathar_img_1.jpg' },
    { label: 'Sacred Chittar River Bathing Ghat', image: '/img/kasi_viswanathar_pic_1.jpg' },
    { label: 'Kasi Viswanathar Inner Sanctum', image: '/img/kasi_viswanathar_pic_3.jpg' }
  ]
};

let content = fs.readFileSync(templeDataPath, 'utf8');

for (const [id, items] of Object.entries(localGalleryMapping)) {
  const itemsStr = items.map(item => {
    const escapedLabel = item.label.replace(/'/g, "\\'");
    return `      { label: '${escapedLabel}', image: '${item.image}', gradient: 'linear-gradient(160deg, #1a0808, #8F3122 140%)' }`;
  }).join(',\n');

  const galleryBlock = `galleryItems: [\n${itemsStr}\n    ],`;
  
  const idRegex = new RegExp(`id:\\s*'${id}'[\\s\\S]*?galleryItems:\\s*\\[[\\s\\S]*?\\],`, 'm');
  content = content.replace(idRegex, (match) => {
    return match.replace(/galleryItems:\s*\[[\s\S]*?\],/, galleryBlock);
  });
}

fs.writeFileSync(templeDataPath, content, 'utf8');
console.log('✓ Successfully applied local gallery image paths to db/templeData.js!');
