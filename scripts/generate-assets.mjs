import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const iconsDir = path.join(publicDir, 'icons');
const siteUrl = 'https://studio-ziegfrid.github.io';
const today = new Date().toISOString().slice(0, 10);

const faviconSvg = await readFile(path.join(publicDir, 'favicon.svg'));

await mkdir(iconsDir, { recursive: true });

const faviconSizes = [16, 32, 96, 128];
for (const size of faviconSizes) {
  await sharp(faviconSvg)
    .resize(size, size)
    .png()
    .toFile(path.join(iconsDir, `favicon-${size}x${size}.png`));
}

await sharp(faviconSvg)
  .resize(180, 180)
  .png()
  .toFile(path.join(iconsDir, 'apple-icon-180x180.png'));

const icoSizes = [16, 32, 48, 64, 128, 256];
const icoPngs = await Promise.all(
  icoSizes.map((size) => sharp(faviconSvg).resize(size, size).png().toBuffer()),
);

const headerSize = 6 + 16 * icoPngs.length;
const totalSize = headerSize + icoPngs.reduce((sum, png) => sum + png.length, 0);
const ico = Buffer.alloc(totalSize);

ico.writeUInt16LE(0, 0);
ico.writeUInt16LE(1, 2);
ico.writeUInt16LE(icoPngs.length, 4);

let imageOffset = headerSize;
for (const [index, png] of icoPngs.entries()) {
  const size = icoSizes[index];
  const entryOffset = 6 + index * 16;
  const dimension = size >= 256 ? 0 : size;

  ico.writeUInt8(dimension, entryOffset);
  ico.writeUInt8(dimension, entryOffset + 1);
  ico.writeUInt8(0, entryOffset + 2);
  ico.writeUInt8(0, entryOffset + 3);
  ico.writeUInt16LE(1, entryOffset + 4);
  ico.writeUInt16LE(32, entryOffset + 6);
  ico.writeUInt32LE(png.length, entryOffset + 8);
  ico.writeUInt32LE(imageOffset, entryOffset + 12);

  png.copy(ico, imageOffset);
  imageOffset += png.length;
}

await writeFile(path.join(publicDir, 'favicon.ico'), ico);

const ogSvg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <filter id="grain" x="0" y="0" width="100%" height="100%">
      <feTurbulence type="fractalNoise" baseFrequency=".78" numOctaves="3" stitchTiles="stitch"/>
      <feColorMatrix type="saturate" values="0"/>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="#f4efe6"/>
  <rect width="1200" height="630" filter="url(#grain)" opacity=".22"/>
  <g fill="#161513" font-family="Helvetica, Arial, sans-serif" font-size="13" letter-spacing="3">
    <text x="80" y="52">STUDIO ZIEGFRID</text>
    <text x="1120" y="52" text-anchor="end">MADE TO MEASURE</text>
  </g>
  <g stroke="#161513" opacity=".16">
    <path d="M80 74h1040"/>
    <path d="M80 574h1040"/>
  </g>
  <g fill="#161513" font-family="Georgia, 'Times New Roman', serif" letter-spacing="-2">
    <text x="80" y="244" font-size="108">Websites</text>
    <text x="80" y="354" font-size="108">made to</text>
    <text x="80" y="464" font-size="108" font-style="italic" fill="#b9361b">measure.</text>
  </g>
  <text x="80" y="534" fill="#5e594f" font-family="Helvetica, Arial, sans-serif" font-size="20">
    Bespoke design &amp; build for businesses that don't fit a template.
  </text>
  <g transform="translate(936 304)">
    <circle r="178" fill="none" stroke="#161513" opacity=".18"/>
    <circle r="122" fill="none" stroke="#161513" opacity=".12"/>
    <text x="0" y="100" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="290" fill="#e2492a">Z</text>
    <circle cx="128" cy="-126" r="10" fill="#e2492a"/>
  </g>
  <g opacity=".3" stroke="#161513">
    <path d="M80 596h1040"/>
    <path d="M80 590v12M132 593v6M184 593v6M236 593v6M288 593v6M340 593v6M392 593v6M444 593v6M496 593v6M548 593v6M600 593v6M652 593v6M704 593v6M756 593v6M808 593v6M860 593v6M912 593v6M964 593v6M1016 593v6M1068 593v6M1120 590v12"/>
  </g>
  <text x="1120" y="616" text-anchor="end" fill="#8b857a" font-family="Helvetica, Arial, sans-serif" font-size="11" letter-spacing="2">
    STUDIOZIEGFRID.GITHUB.IO
  </text>
</svg>`;

await sharp(Buffer.from(ogSvg))
  .resize(1200, 630)
  .png()
  .toFile(path.join(publicDir, 'og-cover.png'));

const routes = [
  '/',
  '/work',
  '/work/aster-bay',
  '/work/drift',
  '/work/fold',
  '/work/market-day',
  '/services',
  '/about',
  '/contact',
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${siteUrl}${route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.7'}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`;

await writeFile(path.join(publicDir, 'sitemap.xml'), sitemap);
await writeFile(
  path.join(publicDir, 'robots.txt'),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
);
await writeFile(path.join(publicDir, '.nojekyll'), '');

console.log('Generated favicon, app icons, OG cover, sitemap, robots.txt, and .nojekyll.');
