const fs = require('fs');
const path = require('path');

const templeDataPath = path.join(__dirname, '..', 'db', 'templeData.js');
let content = fs.readFileSync(templeDataPath, 'utf8');

const updatedGalleryItems = {
  meenakshi: `galleryItems: [
      { label: 'South Gopuram', image: '/img/meenakshi_gopuram.png', gradient: 'linear-gradient(160deg, #3a2a1c, #C1442E 140%)' },
      { label: 'Porthamarai Kulam', image: '/img/meenakshi_temple_tank.png', gradient: 'linear-gradient(160deg, #0d2137, #1a5276 140%)' },
      { label: 'Thousand Pillars Hall', image: '/img/meenakshi_pillared_hall.png', gradient: 'linear-gradient(160deg, #2C2015, #D4A017 160%)' },
      { label: 'Inner Sanctum', image: '/img/meenakshi_inner_sanctum.png', gradient: 'linear-gradient(160deg, #1A0A03, #E8B84B 180%)' },
    ],`,
  brihadeeswarar: `galleryItems: [
      { label: 'Vimana (66m Main Tower)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Brihadeeswarar_Temple_Thanjavur.jpg/800px-Brihadeeswarar_Temple_Thanjavur.jpg', gradient: 'linear-gradient(160deg, #1a0808, #8F3122 140%)' },
      { label: 'Monolithic Nandi Mandapam', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Big_Temple_Nandi_Thanjavur.jpg/800px-Big_Temple_Nandi_Thanjavur.jpg', gradient: 'linear-gradient(160deg, #231a11, #D4A017 140%)' },
      { label: 'Peruvudaiyar Shivalingam', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Brihadeeswarar_Temple%2C_Thanjavur_16.jpg/800px-Brihadeeswarar_Temple%2C_Thanjavur_16.jpg', gradient: 'linear-gradient(160deg, #0d0d1a, #4A235A 140%)' },
      { label: 'Chola Granite Temple Compound', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Thanjavur_Periya_Kovil_Front_View.jpg/800px-Thanjavur_Periya_Kovil_Front_View.jpg', gradient: 'linear-gradient(160deg, #111a0d, #4A8F3F 140%)' },
    ],`,
  ranganathaswamy: `galleryItems: [
      { label: '73m High Rajagopuram', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Srirangam_temple_tower.jpg/800px-Srirangam_temple_tower.jpg', gradient: 'linear-gradient(160deg, #0a1a05, #1a5276 140%)' },
      { label: 'Reclining Ranganatha Sanctum', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Ranganathaswamy_temple_tiruchirappalli.jpg/800px-Ranganathaswamy_temple_tiruchirappalli.jpg', gradient: 'linear-gradient(160deg, #1A0A03, #E8732A 160%)' },
      { label: 'Srirangam Pillared Mandapam', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Sri_Ranganathaswamy_Temple_Srirangam.jpg/800px-Sri_Ranganathaswamy_Temple_Srirangam.jpg', gradient: 'linear-gradient(160deg, #230d0d, #8F3122 150%)' },
      { label: 'Sacred Temple Tank (Chandra Pushkarani)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Srirangam_temple_hall.jpg/800px-Srirangam_temple_hall.jpg', gradient: 'linear-gradient(160deg, #0d1a23, #2980B9 140%)' },
    ],`,
  murugan_palani: `galleryItems: [
      { label: 'Palani Hilltop Temple View', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Palanihills.JPG/800px-Palanihills.JPG', gradient: 'linear-gradient(160deg, #051a05, #1E8449 140%)' },
      { label: 'Dhandayuthapani Murugan Sanctum', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Palani_Murugan_temple_hill.jpg/800px-Palani_Murugan_temple_hill.jpg', gradient: 'linear-gradient(160deg, #1a0a23, #7D3C98 140%)' },
      { label: '693 Sacred Hill Steps', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Palani_temple_steps.jpg/800px-Palani_temple_steps.jpg', gradient: 'linear-gradient(160deg, #1a1005, #D4A017 140%)' },
      { label: 'GI-Tagged Panjamirtham Offering', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Palani_Murugan_temple.jpg/800px-Palani_Murugan_temple.jpg', gradient: 'linear-gradient(160deg, #1a0a05, #E8732A 140%)' },
    ],`,
  ramanathaswamy: `galleryItems: [
      { label: '1,212m World\'s Longest Temple Corridor', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Rameswaram_Corridor.jpg/800px-Rameswaram_Corridor.jpg', gradient: 'linear-gradient(160deg, #051020, #154360 140%)' },
      { label: '22 Sacred Theerthams (Holy Wells)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ramanathaswamy_temple7.JPG/800px-Ramanathaswamy_temple7.JPG', gradient: 'linear-gradient(160deg, #0d2137, #2980B9 140%)' },
      { label: 'Seashore Bay of Bengal Temple View', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Rameswaram_Temple_East_Gopuram.jpg/800px-Rameswaram_Temple_East_Gopuram.jpg', gradient: 'linear-gradient(160deg, #052020, #1E8449 140%)' },
      { label: 'Illuminated Evening Darshan', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Rameswaram_seashore_temple.jpg/800px-Rameswaram_seashore_temple.jpg', gradient: 'linear-gradient(160deg, #1a1005, #E8B84B 140%)' },
    ],`,
  nataraja_chidambaram: `galleryItems: [
      { label: 'Nataraja Ananda Tandava Sanctum', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Le_temple_de_Shiva_Nataraja_%28Chidambaram%2C_Inde%29_%2814037020332%29.jpg/800px-Le_temple_de_Shiva_Nataraja_%28Chidambaram%2C_Inde%29_%2814037020332%29.jpg', gradient: 'linear-gradient(160deg, #10052a, #6C3483 140%)' },
      { label: 'Chidambaram Eastern Rajagopuram', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Chidambaram_Nataraja_Temple_Eastern_Gopuram.jpg/800px-Chidambaram_Nataraja_Temple_Eastern_Gopuram.jpg', gradient: 'linear-gradient(160deg, #1a1005, #D4A017 140%)' },
      { label: 'Sivaganga Sacred Temple Tank', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Chidambaram_temple_tank.jpg/800px-Chidambaram_temple_tank.jpg', gradient: 'linear-gradient(160deg, #1a0523, #C1442E 140%)' },
      { label: 'Kanaka Sabha Golden Roof', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Chidambaram_gopuram.jpg/800px-Chidambaram_gopuram.jpg', gradient: 'linear-gradient(160deg, #231a05, #E8B84B 140%)' },
    ],`,
  arunachaleswarar: `galleryItems: [
      { label: 'Karthigai Deepam Beacon of Light', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Arunachalam_temple_from_a_nearby_hill.jpg/800px-Arunachalam_temple_from_a_nearby_hill.jpg', gradient: 'linear-gradient(160deg, #1a0505, #E74C3C 140%)' },
      { label: 'Arunachala Hill Fire Lingam View', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Tiruvannamalai_Temple_aerial.jpg/800px-Tiruvannamalai_Temple_aerial.jpg', gradient: 'linear-gradient(160deg, #1a1005, #E8732A 140%)' },
      { label: 'Raja Gopuram (Eastern Tower)', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Thiruvannamalai_Temple_Gopuram.jpg/800px-Thiruvannamalai_Temple_Gopuram.jpg', gradient: 'linear-gradient(160deg, #0d1a0d, #1E8449 140%)' },
      { label: '14km Girivalam Path', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Arunachaleswara_Temple_Tiruvannamalai.jpg/800px-Arunachaleswara_Temple_Tiruvannamalai.jpg', gradient: 'linear-gradient(160deg, #231a05, #D4A017 160%)' },
    ],`,
  kapaleeshwarar: `galleryItems: [
      { label: 'Mylapore 37m Dravidian Rajagopuram', image: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Kapaleeswarar1.jpg', gradient: 'linear-gradient(160deg, #0d1a1a, #148F77 140%)' },
      { label: 'Mylapore Sacred Temple Tank', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Kapaleeshwarar_Temple_Gopuram.jpg/800px-Kapaleeshwarar_Temple_Gopuram.jpg', gradient: 'linear-gradient(160deg, #0d2137, #2980B9 140%)' },
      { label: 'Arubathimoovar Festival Procession', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Mylapore_Kapaleeshwarar_temple_tank.jpg/800px-Mylapore_Kapaleeshwarar_temple_tank.jpg', gradient: 'linear-gradient(160deg, #1a0523, #C1442E 140%)' },
      { label: 'Karpagambal Ambal Inner Shrine', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Kapaleeshwarar_temple_side_view.jpg/800px-Kapaleeshwarar_temple_side_view.jpg', gradient: 'linear-gradient(160deg, #231a05, #E8B84B 140%)' },
    ],`,
  ekambareswarar: `galleryItems: [
      { label: '58m Towering Southern Gopuram', image: 'https://upload.wikimedia.org/wikipedia/commons/0/06/Ekambareswarar5.jpg', gradient: 'linear-gradient(160deg, #051a05, #196F3D 140%)' },
      { label: '3500-Year Sacred Mango Tree', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Ekambareswarar_Temple_Kanchipuram.jpg/800px-Ekambareswarar_Temple_Kanchipuram.jpg', gradient: 'linear-gradient(160deg, #0d1a05, #27AE60 140%)' },
      { label: '1000-Pillar Sculptured Hall', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Ekambareswarar_Temple_gopuram_view.jpg/800px-Ekambareswarar_Temple_gopuram_view.jpg', gradient: 'linear-gradient(160deg, #1a1005, #D4A017 140%)' },
      { label: 'Prithvi (Earth) Lingam Sanctum', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Ekambaranathar_temple_hall.jpg/800px-Ekambaranathar_temple_hall.jpg', gradient: 'linear-gradient(160deg, #0d0a05, #7D6608 140%)' },
    ],`,
  tiruchendur_murugan: `galleryItems: [
      { label: 'Seashore Rajagopuram at Bay of Bengal', image: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Thiruchendur11.jpg', gradient: 'linear-gradient(160deg, #051020, #1A5276 140%)' },
      { label: 'Tiruchendur Ocean Waves & Temple', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Thiruchendur_Temple_Tower.jpg/800px-Thiruchendur_Temple_Tower.jpg', gradient: 'linear-gradient(160deg, #051a1a, #0E6251 140%)' },
      { label: 'Skanda Shasti Soorasamharam Enactment', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Tiruchendur_Murugan_Temple_Seashore.jpg/800px-Tiruchendur_Murugan_Temple_Seashore.jpg', gradient: 'linear-gradient(160deg, #1a0505, #E74C3C 140%)' },
      { label: 'Sunset Ocean Pooja Rituals', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Tiruchendur_temple_beach.jpg/800px-Tiruchendur_temple_beach.jpg', gradient: 'linear-gradient(160deg, #1a1005, #E8732A 140%)' },
    ],`,
  nellaiappar: `galleryItems: [
      { label: '48 Musical Stone Pillars Hall', image: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Nellaiappar_temple_tower.jpg', gradient: 'linear-gradient(160deg, #1a1005, #D4A017 140%)' },
      { label: 'Gandhimathi Ambal Sacred Shrine', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Nellaiappar_Temple_Gopuram.jpg/800px-Nellaiappar_Temple_Gopuram.jpg', gradient: 'linear-gradient(160deg, #1a0523, #C1442E 140%)' },
      { label: 'Twin Temple Rajagopurams', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Nellaiappar_temple_car.jpg/800px-Nellaiappar_temple_car.jpg', gradient: 'linear-gradient(160deg, #051a05, #196F3D 140%)' },
      { label: 'Panguni Car Festival Procession', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Nellaiappar_Kovil_Tirunelveli.jpg/800px-Nellaiappar_Kovil_Tirunelveli.jpg', gradient: 'linear-gradient(160deg, #0d1a23, #2980B9 140%)' },
    ],`,
  kasi_viswanathar: `galleryItems: [
      { label: 'Rajagopuram & Western Ghats Peak', image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/The_magnificent_Kasi_Vishwanathat_Temple_Rajagopuram.jpg', gradient: 'linear-gradient(160deg, #0d1a23, #2980B9 140%)' },
      { label: 'Courtallam Waterfalls Bathing Spot', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Tenkasi_Kasi_Viswanathar_Temple.jpg/800px-Tenkasi_Kasi_Viswanathar_Temple.jpg', gradient: 'linear-gradient(160deg, #051a0d, #1E8449 140%)' },
      { label: 'Sacred Chittar River Bathing Ghat', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Courtallam_main_falls.jpg/800px-Courtallam_main_falls.jpg', gradient: 'linear-gradient(160deg, #051020, #154360 140%)' },
    ],`
};

// Replace each temple's galleryItems block in content
for (const [id, newGallery] of Object.entries(updatedGalleryItems)) {
  const idRegex = new RegExp(`id:\\s*'${id}'[\\s\\S]*?galleryItems:\\s*\\[[\\s\\S]*?\\],`, 'm');
  content = content.replace(idRegex, (match) => {
    return match.replace(/galleryItems:\s*\[[\s\S]*?\],/, newGallery);
  });
}

fs.writeFileSync(templeDataPath, content, 'utf8');
console.log('Successfully updated db/templeData.js with accurate gallery items!');
