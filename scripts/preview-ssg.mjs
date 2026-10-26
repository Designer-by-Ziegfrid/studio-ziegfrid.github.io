import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'ssg');
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.ico': 'image/x-icon',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.map': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
};

async function resolveFile(pathname) {
  const cleanPath = decodeURIComponent(pathname.split('?')[0] || '/');
  const relativePath = cleanPath.replace(/^\/+/, '');
  const candidates = [];

  if (cleanPath.endsWith('/')) {
    candidates.push(path.join(root, relativePath, 'index.html'));
  } else {
    candidates.push(path.join(root, relativePath));
    candidates.push(path.join(root, relativePath, 'index.html'));
  }

  for (const candidate of candidates) {
    if (!candidate.startsWith(root)) continue;
    try {
      const info = await stat(candidate);
      if (info.isFile()) return candidate;
    } catch {
      // try the next candidate
    }
  }

  return path.join(root, '404.html');
}

const server = createServer(async (request, response) => {
  const pathname = request.url || '/';
  const file = await resolveFile(pathname);
  const isFallback = file === path.join(root, '404.html') && pathname !== '/404.html';
  const extension = path.extname(file);

  response.writeHead(isFallback ? 404 : 200, {
    'Content-Type': contentTypes[extension] || 'application/octet-stream',
    'Cache-Control': 'no-cache',
  });

  createReadStream(file)
    .on('error', () => {
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Could not read the requested file.');
    })
    .pipe(response);
});

server.listen(port, () => {
  console.log(`Studio Ziegfrid SSG preview: http://localhost:${port}`);
});
