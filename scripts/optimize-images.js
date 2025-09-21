const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const optimizedDir = path.join(publicDir, 'optimized');

// Create optimized directory
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir);
}

// Image optimization configurations
const imageConfigs = {
  'profileimage.png': { width: 400, height: 400, quality: 90 },
  'avatar.png': { width: 64, height: 64, quality: 90 },
  'chris.png': { width: 64, height: 64, quality: 90 },
  'employee.png': { width: 64, height: 64, quality: 90 },
  'johnsmith.png': { width: 64, height: 64, quality: 90 },
  'oliver.png': { width: 64, height: 64, quality: 90 },
  'macbookpro.jpg': { width: 200, height: 200, quality: 85 },
  'iphone.jpg': { width: 100, height: 100, quality: 85 },
  'chickenwings.jpg': { width: 300, height: 200, quality: 85 },
  'alfredo.webp': { width: 300, height: 200, quality: 85 },
  'pizza.webp': { width: 300, height: 200, quality: 85 },
  'springlogo.png': { width: 64, height: 64, quality: 90 },
  'hiemoji.jpeg': { width: 160, height: 160, quality: 85 },
  'blownemeoji.jpeg': { width: 160, height: 160, quality: 85 },
  'partymemoji.jpeg': { width: 160, height: 160, quality: 85 },
  'pcmemoji.jpeg': { width: 160, height: 160, quality: 85 },
  'pcmemoji.png': { width: 160, height: 160, quality: 90 },
  'MertPicture.jpg': { width: 200, height: 200, quality: 85 },
  'kebirasim.jpg': { width: 200, height: 200, quality: 85 },
  'preview.png': { width: 200, height: 200, quality: 90 }
};

async function optimizeImage(filename, config) {
  const inputPath = path.join(publicDir, filename);
  const outputPath = path.join(optimizedDir, filename.replace(/\.(png|jpg|jpeg)$/, '.webp'));
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  ${filename} not found, skipping...`);
    return;
  }

  try {
    const originalSize = fs.statSync(inputPath).size;
    
    await sharp(inputPath)
      .resize(config.width, config.height, { 
        fit: 'cover',
        position: 'center'
      })
      .webp({ 
        quality: config.quality,
        effort: 6
      })
      .toFile(outputPath);
    
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`✅ ${filename}: ${(originalSize/1024).toFixed(1)}KB → ${(optimizedSize/1024).toFixed(1)}KB (${savings}% saved)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${filename}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('🚀 Starting image optimization...\n');
  
  for (const [filename, config] of Object.entries(imageConfigs)) {
    await optimizeImage(filename, config);
  }
  
  console.log('\n✨ Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${optimizedDir}`);
}

optimizeAllImages().catch(console.error);
