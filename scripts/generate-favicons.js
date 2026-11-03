const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateFavicons() {
  const source = path.join(__dirname, "../public/images/banner/editorial-banner.jpg");
  if (!fs.existsSync(source)) {
    console.error("Banner image not found at:", source);
    process.exit(1);
  }

  // Crop centered around the iconic tree and hill
  // Tree canopy is located around x=560..1020, y=200..440.
  // We extract a generous 470x470 region and extend slightly to center the tree perfectly.
  const cropped = await sharp(source)
    .extract({ left: 540, top: 70, width: 470, height: 470 })
    .extend({
      right: 30,
      background: { r: 178, g: 182, b: 131 }, // Olive-green sky tone
    })
    .resize(512, 512, { fit: "cover" })
    .sharpen({ sigma: 1.4 }) // Enhance crispness for small favicon displays
    .toBuffer();

  // Create a refined circular badge mask
  const size = 512;
  const circleMask = Buffer.from(`
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}" fill="#fff" />
    </svg>
  `);

  // Mask the image into a circular badge
  const masterIconBuffer = await sharp(cropped)
    .composite([
      {
        input: circleMask,
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer();

  // Generate resolutions
  const sizes = [16, 32, 48, 64, 180, 192, 512];
  const pngBuffers = {};

  for (const s of sizes) {
    pngBuffers[s] = await sharp(masterIconBuffer)
      .resize(s, s)
      .png()
      .toBuffer();
  }

  // 1. Write PNG icons to public/ and src/app/
  fs.writeFileSync(path.join(__dirname, "../public/icon.png"), pngBuffers[32]);
  fs.writeFileSync(path.join(__dirname, "../public/icon-192.png"), pngBuffers[192]);
  fs.writeFileSync(path.join(__dirname, "../public/icon-512.png"), pngBuffers[512]);
  fs.writeFileSync(path.join(__dirname, "../public/apple-icon.png"), pngBuffers[180]);
  fs.writeFileSync(path.join(__dirname, "../public/apple-touch-icon.png"), pngBuffers[180]);

  fs.writeFileSync(path.join(__dirname, "../src/app/icon.png"), pngBuffers[32]);
  fs.writeFileSync(path.join(__dirname, "../src/app/apple-icon.png"), pngBuffers[180]);

  // 2. Build multi-resolution .ico file containing 16x16, 32x32, 48x48 PNG streams
  const icoSizes = [16, 32, 48];
  const count = icoSizes.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  let offset = headerSize + count * dirEntrySize;

  const entries = [];
  const imageBuffers = [];

  for (const s of icoSizes) {
    const buf = pngBuffers[s];
    imageBuffers.push(buf);

    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(s === 256 ? 0 : s, 0); // width
    entry.writeUInt8(s === 256 ? 0 : s, 1); // height
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bit count
    entry.writeUInt32LE(buf.length, 8); // image size
    entry.writeUInt32LE(offset, 12); // image offset

    entries.push(entry);
    offset += buf.length;
  }

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: 1 = ICO
  header.writeUInt16LE(count, 4); // number of images

  const icoBuffer = Buffer.concat([header, ...entries, ...imageBuffers]);

  fs.writeFileSync(path.join(__dirname, "../src/app/favicon.ico"), icoBuffer);
  fs.writeFileSync(path.join(__dirname, "../public/favicon.ico"), icoBuffer);

  // 3. Create SVG favicon with the circular badge and embedded high-res tree
  const base64Png = pngBuffers[192].toString("base64");
  const svgFavicon = `<?xml version="1.0" encoding="utf-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 192" width="100%" height="100%">
  <defs>
    <clipPath id="circleClip">
      <circle cx="96" cy="96" r="94" />
    </clipPath>
  </defs>
  <circle cx="96" cy="96" r="95" fill="#E3EBD8" stroke="#778A43" stroke-width="2" />
  <g clip-path="url(#circleClip)">
    <image href="data:image/png;base64,${base64Png}" x="0" y="0" width="192" height="192" />
  </g>
</svg>`;

  fs.writeFileSync(path.join(__dirname, "../src/app/icon.svg"), svgFavicon);
  fs.writeFileSync(path.join(__dirname, "../public/icon.svg"), svgFavicon);

  console.log("Successfully generated all tree favicon assets in olive green theme!");
}

generateFavicons().catch((err) => {
  console.error(err);
  process.exit(1);
});
