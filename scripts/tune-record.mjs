#!/usr/bin/env node
/**
 * tune-record.mjs — turn an sc-tune export into a permanent tuning record.
 *
 *   node scripts/tune-record.mjs <spec.json | ->
 *
 * Input: the object `window.scTune.export()` returns in the tuning lab
 * (previews/tune/), as a file or on stdin.
 *
 * Output: output/tuning/<Component>/<YYYY-MM-DD-HHMM>/
 *   spec.json   the export, verbatim
 *   spec.md     exact values: every tuned token (shipped → tuned, with the
 *               nearest primitive for raw colours and lengths), props,
 *               sound, derived geometry, and a paste-ready CSS block
 *   snapshot/   a static build of the lab locked to this spec, with the
 *               chosen sound copied in. Serve it, then open index.html:
 *               npx vite preview --outDir <that folder>
 *
 * Exits non-zero, writing nothing, if the input is not an sc-tune export.
 */

import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const arg = process.argv[2];
if (!arg) {
  console.error('usage: node scripts/tune-record.mjs <spec.json | ->');
  process.exit(2);
}
const raw = arg === '-' ? readFileSync(0, 'utf8') : readFileSync(resolve(arg), 'utf8');
const spec = JSON.parse(raw);
if (spec.tool !== 'sc-tune' || !spec.component || !Array.isArray(spec.tokens) || !spec.state) {
  console.error('not an sc-tune export (expected tool, component, tokens, state)');
  process.exit(1);
}

/* ---------- primitives, for nearest-token hints ---------- */

const tokensCss = readFileSync(resolve(root, 'src/styles/tokens.css'), 'utf8');
// Primitives are mode-invariant and declared once (in :root), so the first
// declaration of each name is its value.
const prims = [];
for (const [, n, v] of tokensCss.matchAll(/(--sc-p-[a-z0-9-]+):\s*([^;]+);/g)) {
  if (!prims.some((p) => p.n === n)) prims.push({ n, v: v.trim() });
}
const hexToRgb = (h) => {
  const x = h.replace('#', '');
  const f = x.length === 3 ? x.split('').map((c) => c + c).join('') : x.slice(0, 6);
  const n = parseInt(f, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
};
const colorPrims = prims.filter((p) => /^#[0-9a-f]{3,8}$/i.test(p.v) && !p.n.endsWith('-rgb'));
const lengthPrims = prims.filter((p) => /^-?[\d.]+px$/.test(p.v));
const timePrims = prims.filter((p) => /^[\d.]+m?s$/.test(p.v));

function nearest(t) {
  if (t.override.startsWith('var(')) return `token ${t.override.slice(4, -1)}`;
  if (t.kind === 'color' && /^#[0-9a-f]{6}$/i.test(t.tuned)) {
    const [r, g, b] = hexToRgb(t.tuned);
    let best = null;
    for (const p of colorPrims) {
      const [pr, pg, pb] = hexToRgb(p.v);
      const d = Math.hypot(r - pr, g - pg, b - pb);
      if (!best || d < best.d) best = { ...p, d };
    }
    return best ? `${best.d === 0 ? 'equals' : 'nearest'} ${best.n} (${best.v}${best.d ? `, Δ${best.d.toFixed(1)}` : ''})` : 'raw';
  }
  if (t.kind === 'length' || t.kind === 'time') {
    const hit = (t.kind === 'length' ? lengthPrims : timePrims).find((p) => p.v === t.tuned);
    return hit ? `equals ${hit.n}` : 'raw, off the token ladder';
  }
  return 'raw';
}

/* ---------- record ---------- */

const when = new Date(spec.recorded || Date.now());
const pad = (n) => String(n).padStart(2, '0');
const stamp = `${when.getFullYear()}-${pad(when.getMonth() + 1)}-${pad(when.getDate())}-${pad(when.getHours())}${pad(when.getMinutes())}`;
const outDir = resolve(root, 'output/tuning', spec.component, stamp);
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'spec.json'), JSON.stringify(spec, null, 2) + '\n');

const esc = (v) => String(v ?? '').replace(/\|/g, '\\|');
const lines = [];
lines.push(`# ${spec.component} tuning spec, ${stamp}`, '');
lines.push(`Recorded from the sc-tune lab (\`previews/tune/?c=${spec.component}\`) at ${spec.recorded}. Theme: ${spec.theme}. ${spec.tokens.length} of ${spec.tokenCount} tokens tuned.`, '');
lines.push('## Tokens', '');
if (spec.tokens.length === 0) lines.push('No token changed. The shipped values stand.', '');
else {
  lines.push('| Token | Kind | Shipped | Tuned | Set as | Token match |', '| --- | --- | --- | --- | --- | --- |');
  for (const t of spec.tokens) {
    lines.push(`| \`${t.name}\` | ${t.kind} | \`${esc(t.shipped)}\` | \`${esc(t.tuned)}\` | \`${esc(t.override)}\`${t.shadowAdjust ? ` (scale ${t.shadowAdjust.scale ?? 1}, strength ${t.shadowAdjust.strength ?? 1})` : ''} | ${esc(nearest(t))} |`);
  }
  lines.push('');
}
lines.push('## Props', '', '| Prop | Value |', '| --- | --- |');
for (const [k, v] of Object.entries(spec.props)) lines.push(`| \`${k}\` | \`${esc(JSON.stringify(v))}\` |`);
lines.push('');
lines.push('## Sound', '');
const snd = spec.sound;
lines.push(`- File: ${snd.file ? `\`${snd.file}\`` : 'silent'}${snd.file === snd.shipped ? ' (shipped)' : snd.shipped ? ` (shipped: \`${snd.shipped}\`)` : ' (component ships silent)'}`);
lines.push(`- Volume: ${snd.volume}${snd.volume !== 0.7 ? ' (SoundProvider default is 0.7)' : ''}`);
lines.push(`- Pitch (playback rate): ${snd.rate}${snd.rate !== 1 ? '. The engine plays at 1×; ship this by re-encoding the file, not by a runtime rate.' : ''}`);
lines.push(`- Fires on: ${snd.trigger}`, '');
if (Object.keys(spec.derived || {}).length) {
  lines.push('## Derived geometry (tuned stage)', '');
  for (const [k, v] of Object.entries(spec.derived)) lines.push(`- \`${k}\`: ${v}`);
  lines.push('');
}
if (spec.tokens.length) {
  lines.push('## CSS overrides', '', 'Paste-ready. Applying a change means editing `tokens/semantic.json` (or the component CSS), then `npm run tokens:build`; this block is the reference, not the fix.', '', '```css');
  lines.push(`/* ${spec.component} · sc-tune ${stamp} · ${spec.theme} */`);
  for (const t of spec.tokens) lines.push(`${t.name}: ${t.override};`);
  lines.push('```', '');
}
lines.push('## Snapshot', '', 'A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:', '', '```bash', `npx vite preview --outDir ${relative(root, resolve(outDir, 'snapshot'))}`, '```', '');
writeFileSync(resolve(outDir, 'spec.md'), lines.join('\n'));

/* ---------- snapshot build ---------- */

const snapDir = resolve(outDir, 'snapshot');
execFileSync('npx', ['vite', 'build', '--config', 'vite.tune.config.js', '--mode', 'snapshot', '--outDir', snapDir, '--logLevel', 'error'], { cwd: root, stdio: 'inherit' });
writeFileSync(resolve(snapDir, 'spec.json'), JSON.stringify(spec, null, 2) + '\n');
if (snd.file) {
  const src = resolve(root, 'assets/sounds/drams', snd.file);
  if (!existsSync(src)) {
    console.error(`sound not found: ${relative(root, src)}`);
    process.exit(1);
  }
  mkdirSync(resolve(snapDir, 'sounds'), { recursive: true });
  copyFileSync(src, resolve(snapDir, 'sounds', snd.file));
}

console.log(`recorded ${spec.component} → ${relative(root, outDir)}`);
console.log(`  spec.md · spec.json · snapshot/ (${spec.tokens.length} tokens tuned)`);
