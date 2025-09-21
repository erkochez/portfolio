const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
const iconsDir = path.join(publicDir, 'icons');

// Icon optimization configurations
const iconConfigs = {
  'react.svg': { width: 64, height: 64, quality: 90 },
  'postgresql.png': { width: 64, height: 64, quality: 90 },
  'redis.png': { width: 64, height: 64, quality: 90 }
};

async function optimizeIcon(filename, config) {
  const inputPath = path.join(iconsDir, filename);
  const outputPath = path.join(publicDir, filename.replace(/\.(png|svg)$/, '.webp'));
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  ${filename} not found, skipping...`);
    return;
  }

  try {
    const originalSize = fs.statSync(inputPath).size;
    
    await sharp(inputPath)
      .resize(config.width, config.height, { 
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
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

async function optimizeAllIcons() {
  console.log('🚀 Starting icon optimization...\n');
  
  for (const [filename, config] of Object.entries(iconConfigs)) {
    await optimizeIcon(filename, config);
  }
  
  console.log('\n✨ Icon optimization complete!');
}

optimizeAllIcons().catch(console.error);
