const sharp = require('sharp');
const pngToIco = require('png-to-ico');
const fs = require('fs');
const path = require('path');

const logoDir = __dirname;

async function generatePNGs() {
  console.log('Generating PNG files from SVG...\n');

  try {
    // Favicon 16x16
    await sharp(path.join(logoDir, 'zylch-mark.svg'))
      .resize(16, 16)
      .png()
      .toFile(path.join(logoDir, 'favicon-16.png'));
    console.log('Created: favicon-16.png');

    // Favicon 32x32
    await sharp(path.join(logoDir, 'zylch-mark.svg'))
      .resize(32, 32)
      .png()
      .toFile(path.join(logoDir, 'favicon-32.png'));
    console.log('Created: favicon-32.png');

    // App icon 512x512 (using mark, not stacked, for better clarity at small sizes)
    await sharp(path.join(logoDir, 'zylch-mark.svg'))
      .resize(512, 512)
      .png()
      .toFile(path.join(logoDir, 'app-icon-512.png'));
    console.log('Created: app-icon-512.png');

    // Generate favicon.ico from 16 and 32 PNGs
    const icoBuffer = await pngToIco([
      path.join(logoDir, 'favicon-16.png'),
      path.join(logoDir, 'favicon-32.png')
    ]);
    fs.writeFileSync(path.join(logoDir, 'favicon.ico'), icoBuffer);
    console.log('Created: favicon.ico');

    console.log('\nAll PNG files generated successfully!');
  } catch (error) {
    console.error('Error generating PNGs:', error);
    process.exit(1);
  }
}

generatePNGs();
