// Before/after captures for the deepest slate dark grounds (decisions.md 2026-10-18).
// Build the site into a folder, then shoot it in light and dark:
//   npx vite build --outDir /tmp/after-dist
//   node output/proofs/2026-10-18-deepest-slate-dark/shoot.mjs /tmp/after-dist output/proofs/2026-10-18-deepest-slate-dark/after
// "before" was shot the same way from main at 2c6bdb7.
import { createRequire } from 'node:module';
import { createServer } from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join, resolve } from 'node:path';

const require = createRequire(new URL('../../../package.json', import.meta.url));
const { chromium } = require('playwright');

const [dist, out] = process.argv.slice(2).map((p) => resolve(p));
await mkdir(out, { recursive: true });
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.png': 'image/png', '.json': 'application/json', '.mp3': 'audio/mpeg', '.wav': 'audio/wav' };
const server = createServer(async (req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  try {
    const body = await readFile(join(dist, p));
    res.writeHead(200, { 'content-type': types[extname(p)] ?? 'application/octet-stream' });
    res.end(body);
  } catch { res.writeHead(404); res.end(); }
}).listen(0);
const port = server.address().port;

const ROUTES = [['color', 0], ['status-pill', 0], ['status-pill', 880], ['card', 880], ['switch', 880], ['segmented-control', 880]];
const browser = await chromium.launch();
for (const theme of ['light', 'dark']) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 1000 }, colorScheme: theme, reducedMotion: 'reduce' });
  await ctx.addInitScript((t) => localStorage.setItem('sc-theme', t), theme);
  const page = await ctx.newPage();
  for (const [r, y] of ROUTES) {
    await page.goto(`http://localhost:${port}/#${r}`);
    await page.waitForTimeout(700);
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(500);
    await page.screenshot({ path: join(out, `${r}${y ? '-below' : ''}-${theme}.png`) });
  }
  await ctx.close();
}
await browser.close();
server.close();
console.log('shot', ROUTES.length * 2, 'to', out);
