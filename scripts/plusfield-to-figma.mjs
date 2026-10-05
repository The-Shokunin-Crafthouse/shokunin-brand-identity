#!/usr/bin/env node
/**
 * plusfield-to-figma.mjs — record the PlusField engine's marks as SVG paths for the SCDS
 * Figma library, so Figma draws the same picture as code instead of a hand redraw.
 *
 *   npm run dev                              # the `type` art rasterises its text in the
 *   node scripts/plusfield-to-figma.mjs      # brand-site page, with the brand face loaded
 *   node scripts/plusfield-to-figma.mjs --base http://localhost:5173
 *
 * How it works
 *   drawField() from plusField.engine.js runs against a recording context: a stub
 *   CanvasRenderingContext2D that captures every fillRect and arc+fill with the current
 *   fillStyle and globalAlpha. The colours passed in are role sentinels (ROLE:<semantic var>),
 *   so every captured mark knows which Semantic variable it binds to in Figma.
 *   - Rects drawn in a ROLE:color/surface/* style are grounds → one rectangle each.
 *   - Every other mark lands in a (role, alpha) bucket → one SVG path per bucket.
 *   - The `type` art needs a real canvas for its text, so it runs in Playwright Chromium on the
 *     brand-site dev server (engine imported through Vite, font read from a mounted field).
 *
 * Compositing parity
 *   Canvas composites each fillRect on its own, so the centre of a plus (where its two arms
 *   cross) takes the bucket alpha twice. A Figma path fills its union once. For buckets with
 *   alpha < 1 the crossings go into a second "overlap" path at the same alpha, laid over the
 *   first: a + a(1 − a) is exactly what canvas paints.
 *
 * Output (stages/02-design/figma/plusfield/)
 *   manifest.json   committed: every variant, its params, and its buckets (role, alpha, marks)
 *   svg/*.svg       gitignored: one file per variant, one <path> per bucket, data-role/opacity
 *   transport/*.json gitignored: what the Figma build pastes into use_figma, split ≤ 44 kB
 *
 * Variant params mirror the brand-site states (src/sections/BrandElementSections.jsx) at the
 * sizes measured at a 1440 px viewport. Decision: decisions/decisions.md · plus-field.
 */

import { mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { ARTS, STILL_T, drawField, hash } from '../src/components/PlusField/plusField.engine.js';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'stages/02-design/figma/plusfield');
const BASE = (() => { const i = process.argv.indexOf('--base'); return i > 0 ? process.argv[i + 1] : 'http://localhost:5173'; })();

/** Role sentinels: the keys drawField reads, the Semantic variable each one binds to. */
export const ROLES = {
  inverse: 'ROLE:color/surface/inverse',
  raised: 'ROLE:color/surface/raised',
  page: 'ROLE:color/surface/page',
  sunk: 'ROLE:color/surface/sunk',
  text: 'ROLE:color/text/primary',
  onInverse: 'ROLE:color/text/onInverse',
  accent: 'ROLE:color/brand/accent',
};

/* ---------------- variant matrix (Figma property names mirror the React props) ---------------- */

const TILE = { w: 214.66, h: 160.98 };           // .tile, 4:3, three-up at 1440
const SITE_TILE = {                               // the PlusField page's own states
  ucardhead: {}, ucard: { surface: 'raised' }, ucta: {}, uempty: { surface: 'sunk' },
  umedia: { surface: 'sunk' }, uhero: { surface: 'raised' }, ufooter: {}, uquote: { surface: 'raised' },
  unews: { surface: 'raised' }, type: { opts: { text: '404', textScale: 0.85 } }, usplash: {},
};
/** The nine structural arts have no PlusField tile on the site; they draw in a tile with the
 *  options their wrapper's default state passes. */
const STRUCTURAL = {
  udiv: { surface: 'none', opts: { rows: 3, fade: 'both' } },
  uskel: { surface: 'raised' },
  uprog: { surface: 'none', opts: { rows: 1, progress: 0.64 } },
  uloader: { surface: 'inverse' },
  uline: { surface: 'none' },
  utime: { surface: 'none', opts: { steps: 4, current: 2 } },
  ubullet: { surface: 'none' },
  usep: { surface: 'none' },
  uthumb: { surface: 'inverse', seed: 'kiln' },
};

const v = (component, props, art, w, h, extra = {}) => ({
  component, props, art, w, h,
  surface: extra.surface ?? 'inverse', shape: extra.shape ?? 'plus', density: extra.density ?? 1,
  seed: extra.seed, opts: extra.opts ?? {}, t: STILL_T[art] ?? 0,
});

export const VARIANTS = [
  ...ARTS.map((art) => v('PlusField', { Art: art, Shape: 'plus' }, art, TILE.w, TILE.h, SITE_TILE[art] ?? STRUCTURAL[art])),
  v('PlusField', { Art: 'umedia', Shape: 'square' }, 'umedia', TILE.w, TILE.h, { surface: 'sunk', shape: 'square' }),
  v('PlusField', { Art: 'umedia', Shape: 'round' }, 'umedia', TILE.w, TILE.h, { surface: 'sunk', shape: 'round' }),

  ...[['hairline', 16, 1, 'both'], ['band', 24, 3, 'both'], ['block', 32, 5, 'none']].map(([weight, h, rows, fade]) =>
    v('SectionDivider', { Weight: weight }, 'udiv', 742, h, { surface: 'none', opts: { rows, fade } })),

  v('HeadingRule', { Variant: 'title' }, 'udiv', 503.3, 24, { surface: 'none', opts: { rows: 3, fade: 'end' } }),
  v('HeadingRule', { Variant: 'eyebrow' }, 'udiv', 626.97, 16, { surface: 'none', opts: { rows: 1, fade: 'end' } }),

  v('PlusUnderline', { Active: 'true' }, 'uline', 120, 12, { surface: 'none' }),
  v('PlusUnderline', { Active: 'false' }, null, 120, 12, { surface: 'none' }),

  ...[['thin', 16, 1], ['band', 24, 3]].flatMap(([variant, h, rows]) => [0, 38, 64, 100].map((value) =>
    v('PlusProgress', { Variant: variant, Value: String(value) }, 'uprog', 214.66, h, { surface: 'none', opts: { rows, progress: value / 100 } }))),

  v('PlusLoader', { Frame: 'still' }, 'uloader', 240, 240, { surface: 'inverse' }),
  v('PlusSkeleton', { Frame: 'rest' }, 'uskel', 214.66, 240, { surface: 'raised' }),

  ...[3, 4].flatMap((steps) => Array.from({ length: steps }, (_, current) =>
    v('PlusTimeline', { Steps: String(steps), Current: String(current) }, 'utime', 48, steps * 80, { surface: 'none', opts: { steps, current } }))),

  v('PlusBullet', { Accent: 'false' }, 'ubullet', 16, 16, { surface: 'none', opts: { accent: false } }),
  v('PlusBullet', { Accent: 'true' }, 'ubullet', 16, 16, { surface: 'none', opts: { accent: true } }),

  v('PlusSeparator', {}, 'usep', 12, 12, { surface: 'none' }),

  ...['atlas', 'kiln', 'ledger', 'harbor', 'orbit', 'field'].flatMap((seed) => ['inverse', 'sunk'].map((surface) =>
    v('PlusThumbnail', { Seed: seed, Surface: surface }, 'uthumb', 120, 120, { surface, seed }))),
];

export const variantName = (props) => Object.entries(props).map(([k, val]) => `${k}=${val}`).join(', ');
const slug = (x) => `${x.component}--${Object.values(x.props).join('-') || 'default'}`;

/* ---------------- recording context ---------------- */

/** Self-contained (serialised into the browser for the `type` art): no closure references. */
function makeRecorder() {
  const ops = [];
  let path = [];
  return {
    ops,
    fillStyle: '#000', globalAlpha: 1, font: '', textAlign: 'start', textBaseline: 'alphabetic',
    setTransform() {}, clearRect() {},
    beginPath() { path = []; },
    arc(x, y, r) { path.push({ x, y, r }); },
    fill() { for (const p of path) ops.push({ k: 'c', s: this.fillStyle, a: this.globalAlpha, x: p.x, y: p.y, r: p.r }); },
    fillRect(x, y, w, h) { ops.push({ k: 'r', s: this.fillStyle, a: this.globalAlpha, x, y, w, h }); },
  };
}

function params(x) {
  return {
    art: x.art, w: x.w, h: x.h, dpr: 1, colors: ROLES, surface: x.surface, shape: x.shape,
    density: x.density, seed: hash(x.seed ?? x.art), t: x.t, opts: x.opts,
  };
}

function recordNode(x) {
  const c = makeRecorder();
  drawField(c, params(x));
  return c.ops;
}

async function recordTypeInBrowser(list) {
  if (!list.length) return new Map();
  const { chromium } = await import('playwright');
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(`${BASE}/?plusfield-to-figma#plus-field`, { waitUntil: 'domcontentloaded' });
    await page.waitForSelector('canvas');
    const out = await page.evaluate(async ({ recorderSrc, jobs, roles }) => {
      await document.fonts.ready;
      const { drawField, hash } = await import('/src/components/PlusField/plusField.engine.js');
      const makeRecorder = new Function(`return (${recorderSrc})`)();
      const font = getComputedStyle(document.querySelector('canvas').parentElement).fontFamily;
      await document.fonts.load(`500 100px ${font}`);
      return jobs.map((x) => {
        const c = makeRecorder();
        drawField(c, { art: x.art, w: x.w, h: x.h, dpr: 1, colors: roles, surface: x.surface, shape: x.shape,
          density: x.density, seed: hash(x.seed ?? x.art), t: x.t, opts: x.opts, font });
        return { font, ops: c.ops };
      });
    }, { recorderSrc: makeRecorder.toString(), jobs: list, roles: ROLES });
    return new Map(list.map((x, i) => [slug(x), out[i]]));
  } finally {
    await browser.close();
  }
}

/* ---------------- ops → buckets → SVG ---------------- */

const n = (v) => { const s = (Math.round(v * 100) / 100).toString(); return s.startsWith('0.') ? s.slice(1) : s.startsWith('-0.') ? `-${s.slice(2)}` : s; };
const rectD = (r) => `M${n(r.x)} ${n(r.y)}h${n(r.w)}v${n(r.h)}h${n(-r.w)}z`;
const circD = (c) => `M${n(c.x - c.r)} ${n(c.y)}a${n(c.r)} ${n(c.r)} 0 1 0 ${n(2 * c.r)} 0a${n(c.r)} ${n(c.r)} 0 1 0 ${n(-2 * c.r)} 0z`;
const alphaKey = (a) => Math.round(a * 1000) / 1000;
/** Arts whose alpha is continuous (usplash's travelling wave) would make one node per alpha.
 *  Past this many distinct alphas they snap to a 1/40 step (max error 0.0125). */
const MAX_EXACT_ALPHAS = 16, ALPHA_STEP = 40;
/** A surface-role rect this large is a ground; ufooter's dissolving marks are surface-role too. */
const isGround = (op) => op.w > 24 && op.h > 24;

/** The intersection of two axis-aligned rects, or null. */
function overlap(p, q) {
  const x0 = Math.max(p.x, q.x), y0 = Math.max(p.y, q.y);
  const x1 = Math.min(p.x + p.w, q.x + q.w), y1 = Math.min(p.y + p.h, q.y + q.h);
  return x1 > x0 && y1 > y0 ? { x: x0, y: y0, w: x1 - x0, h: y1 - y0 } : null;
}

export function bucketize(ops, x) {
  const grounds = [], buckets = new Map();
  const distinct = new Set(ops.map((op) => alphaKey(op.a)));
  const snap = distinct.size > MAX_EXACT_ALPHAS ? (a) => Math.round(a * ALPHA_STEP) / ALPHA_STEP : (a) => a;
  ops = ops.map((op) => ({ ...op, a: snap(op.a) }));
  const put = (role, a, d, layer) => {
    const key = `${role}|${alphaKey(a)}|${layer}`;
    if (!buckets.has(key)) buckets.set(key, { role, alpha: alphaKey(a), layer, d: [], marks: 0 });
    const b = buckets.get(key); b.d.push(d); b.marks += layer === 'marks' ? 1 : 0;
  };
  let prev = null;
  for (const op of ops) {
    const role = String(op.s);
    if (!role.startsWith('ROLE:')) throw new Error(`${slug(x)}: unrolled colour ${role}`);
    if (op.a <= 0) { prev = null; continue; }
    if (op.k === 'r' && role.startsWith('ROLE:color/surface/') && isGround(op)) {
      grounds.push({ role: role.slice(5), x: op.x, y: op.y, w: op.w, h: op.h }); prev = null; continue;
    }
    if (op.k === 'c') { put(role, op.a, circD(op), 'marks'); prev = null; continue; }
    // plus() = two consecutive fillRects (horizontal arm, then vertical arm) in one style.
    const ov = prev && prev.s === op.s && prev.a === op.a ? overlap(prev, op) : null;
    if (ov) {
      buckets.get(`${role}|${alphaKey(op.a)}|marks`).marks -= 1;   // same mark, not a new one
      if (op.a < 1) put(role, op.a, rectD(ov), 'overlap');
      put(role, op.a, rectD(op), 'marks');
      prev = null;
    } else {
      put(role, op.a, rectD(op), 'marks');
      prev = op;
    }
  }
  const list = [...buckets.values()].map((b) => ({ role: b.role.slice(5), alpha: b.alpha, layer: b.layer, marks: b.marks, d: b.d.join('') }));
  list.sort((p, q) => (p.layer === q.layer ? 0 : p.layer === 'marks' ? -1 : 1));
  return { grounds, buckets: list };
}

function toSvg(x, g) {
  const w = n(x.w), h = n(x.h);
  const rects = g.grounds.map((r) => `  <rect data-role="${r.role}" x="${n(r.x)}" y="${n(r.y)}" width="${n(r.w)}" height="${n(r.h)}"/>`);
  const paths = g.buckets.map((b) => `  <path data-role="${b.role}" data-layer="${b.layer}" opacity="${b.alpha}" d="${b.d}"/>`);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" data-variant="${variantName(x.props)}">\n${[...rects, ...paths].join('\n')}\n</svg>\n`;
}

/* ---------------- run ---------------- */

async function main() {
  const typeJobs = VARIANTS.filter((x) => x.art === 'type');
  const fromBrowser = await recordTypeInBrowser(typeJobs);
  rmSync(join(OUT, 'svg'), { recursive: true, force: true });
  rmSync(join(OUT, 'transport'), { recursive: true, force: true });
  mkdirSync(join(OUT, 'svg'), { recursive: true });
  mkdirSync(join(OUT, 'transport'), { recursive: true });

  const manifest = { generatedBy: 'scripts/plusfield-to-figma.mjs', engine: 'src/components/PlusField/plusField.engine.js', roles: ROLES, variants: [] };
  for (const x of VARIANTS) {
    let ops = [], font;
    if (x.art === 'type') ({ ops, font } = fromBrowser.get(slug(x)));
    else if (x.art) ops = recordNode(x);
    const g = bucketize(ops, x);
    writeFileSync(join(OUT, 'svg', `${slug(x)}.svg`), toSvg(x, g));
    writeFileSync(join(OUT, 'transport', `${slug(x)}.json`), JSON.stringify({ name: variantName(x.props), w: x.w, h: x.h, grounds: g.grounds, buckets: g.buckets }));
    manifest.variants.push({
      component: x.component, name: variantName(x.props), file: `${slug(x)}.svg`,
      art: x.art, w: x.w, h: x.h, surface: x.surface, shape: x.shape, density: x.density,
      seed: x.seed ?? x.art, opts: x.opts, t: x.t, ...(font ? { font } : {}),
      grounds: g.grounds.map((r) => r.role),
      buckets: g.buckets.map((b) => ({ role: `ROLE:${b.role}`, alpha: b.alpha, layer: b.layer, marks: b.marks, bytes: b.d.length })),
    });
  }
  writeFileSync(join(OUT, 'manifest.json'), `${JSON.stringify(manifest, null, 1)}\n`);
  const accent = manifest.variants.filter((m) => m.buckets.some((b) => b.role === ROLES.accent)).map((m) => `${m.component} · ${m.name}`);
  console.log(`${manifest.variants.length} variants → ${OUT}`);
  console.log(`ROLE:color/brand/accent in: ${accent.join(' | ') || 'none'}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) await main();
