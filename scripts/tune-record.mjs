#!/usr/bin/env node
/**
 * tune-record.mjs — turn an sc-tune export into a permanent tuning record.
 *
 *   node scripts/tune-record.mjs [--force] <spec.json | ->
 *
 * Input: the object `window.scTune.export()` returns in the tuning lab
 * (previews/tune/, spec version 2), as a file or on stdin.
 *
 * Output: output/tuning/<Component>/<YYYY-MM-DD-HHMM>/
 *   spec.json   the export, verbatim
 *   spec.md     the pick and its reason, Levi's notes (as requirements),
 *               then per concept: every tuned token (shipped → tuned,
 *               nearest primitive, pinned note), springs with Framer
 *               Motion params, props or motion spec, sound, and a
 *               paste-ready CSS block
 *   snapshot/   a static build of the lab locked to this spec, with the
 *               chosen sound copied in. Serve it, then open index.html:
 *               npx vite preview --outDir <that folder>
 *
 * Exits non-zero, writing nothing, if the input is not an sc-tune export, or
 * if the record folder already exists. Pass --force to overwrite it.
 */

import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { resolve, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execFileSync } from 'node:child_process';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const force = argv.includes('--force');
const arg = argv.find((a) => a !== '--force');
if (!arg) {
  console.error('usage: node scripts/tune-record.mjs [--force] <spec.json | ->');
  process.exit(2);
}
const raw = arg === '-' ? readFileSync(0, 'utf8') : readFileSync(resolve(arg), 'utf8');
const spec = JSON.parse(raw);
if (spec.tool !== 'sc-tune' || ![2, 3].includes(spec.version) || !spec.component || !Array.isArray(spec.concepts) || !spec.state) {
  console.error('not an sc-tune export (expected tool, version 2 or 3, component, concepts, state)');
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
    // Compare numbers ("08px" is 8px), and prefer the primitive family the
    // token belongs to: a space token matches --sc-p-space-*, not a font size.
    const num = parseFloat(t.tuned);
    const unit = String(t.tuned).replace(/^-?[\d.]+/, '');
    const family = t.name.match(/^--sc-(space|size|font|radius|border|motion)-/)?.[1];
    const pool = (t.kind === 'length' ? lengthPrims : timePrims).filter((p) => parseFloat(p.v) === num && p.v.replace(/^-?[\d.]+/, '') === unit);
    const fam = { space: /-space-/, size: /-space-|-size-/, font: /-font-/, radius: /-radius-/, border: /-border-/, motion: /-motion-|-duration-/ }[family];
    const hit = (fam && pool.find((p) => fam.test(p.n))) || pool[0];
    return hit ? `equals ${hit.n}` : 'raw, off the token ladder';
  }
  return 'raw';
}

/* ---------- record ---------- */

const when = new Date(spec.recorded || Date.now());
const pad = (n) => String(n).padStart(2, '0');
const stamp = `${when.getFullYear()}-${pad(when.getMonth() + 1)}-${pad(when.getDate())}-${pad(when.getHours())}${pad(when.getMinutes())}`;
const outDir = resolve(root, 'output/tuning', spec.component, stamp);
if (existsSync(outDir) && !force) {
  console.error(`record folder already exists: ${relative(root, outDir)} (pass --force to overwrite it)`);
  process.exit(1);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(resolve(outDir, 'spec.json'), JSON.stringify(spec, null, 2) + '\n');

const esc = (v) => String(v ?? '').replace(/\|/g, '\\|');
const quote = (text) => text.split('\n').map((l) => `> ${l}`).join('\n');
const lines = [];
const multi = spec.concepts.length > 1;
lines.push(`# ${spec.component} tuning spec, ${stamp}`, '');
lines.push(`Recorded from the sc-tune lab (\`previews/tune/?c=${spec.component}\`) at ${spec.recorded}. Theme: ${spec.theme}. ${spec.concepts.length} concept${multi ? 's' : ''}.`, '');
if (spec.pick) {
  lines.push('## Pick', '', `**Concept ${spec.pick.concept}.**${spec.pick.reason ? ' Levi\'s reason:' : ' No reason given.'}`, '');
  if (spec.pick.reason) lines.push(quote(spec.pick.reason), '');
} else if (multi) {
  lines.push('## Pick', '', 'No concept picked. Ask Levi before building.', '');
}
lines.push('## Notes for the build', '');
lines.push(spec.notes?.trim() ? quote(spec.notes.trim()) : 'None.', '');
lines.push('Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.', '');

for (const c of spec.concepts) {
  const picked = spec.pick?.concept === c.id;
  lines.push(`## Concept ${c.id}${picked ? ' (picked)' : ''}`, '');
  if (c.notes?.trim()) lines.push(quote(c.notes.trim()), '');
  lines.push('### Tokens', '');
  if (!c.tokens.length) lines.push('No token changed.', '');
  else {
    lines.push('| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |', '| --- | --- | --- | --- | --- | --- | --- | --- |');
    for (const t of c.tokens) {
      const how = t.spring ? `spring k${t.spring.stiffness} c${t.spring.damping} m${t.spring.mass}` : `\`${esc(t.override.length > 80 ? t.override.slice(0, 77) + '…' : t.override)}\``;
      const tunedShown = t.tuned && t.tuned.length > 80 ? t.tuned.slice(0, 77) + '…' : t.tuned;
      lines.push(`| \`${t.name}\` | ${t.mode === 'all' || !t.mode ? 'both' : t.mode} | ${t.kind} | \`${esc(t.shipped)}\` | \`${esc(tunedShown)}\` | ${how}${t.shadowAdjust ? ` (scale ${t.shadowAdjust.scale ?? 1}, strength ${t.shadowAdjust.strength ?? 1})` : ''} | ${esc(nearest(t))} | ${esc(c.pins?.[t.name] || '')} |`);
    }
    lines.push('');
  }
  const loosePins = Object.entries(c.pins || {}).filter(([n]) => !c.tokens.some((t) => t.name === n));
  if (loosePins.length) {
    lines.push('Notes pinned to unchanged tokens:', '');
    for (const [n, v] of loosePins) lines.push(`- \`${n}\`: ${v}`);
    lines.push('');
  }
  const springs = c.tokens.filter((t) => t.spring);
  if (springs.length || c.motion?.spring) {
    lines.push('### Springs', '');
    for (const t of springs) lines.push(`- \`${t.name}\`: Framer Motion \`${JSON.stringify(t.spring.framerMotion)}\`; settles in ${t.spring.settleMs}ms, overshoot ${Math.round(t.spring.overshoot * 100)}%. CSS: the \`linear()\` value in spec.json.`);
    if (c.motion?.spring) lines.push(`- \`easing\`: Framer Motion \`${JSON.stringify(c.motion.spring.framerMotion)}\`; settles in ${c.motion.spring.settleMs}ms, overshoot ${Math.round(c.motion.spring.overshoot * 100)}%.`);
    lines.push('');
  }
  lines.push(`### ${spec.kind === 'motion' ? 'Motion' : 'Props'}`, '', '| Prop | Value |', '| --- | --- |');
  for (const [k, v] of Object.entries(c.props)) lines.push(`| \`${k}\` | \`${esc(JSON.stringify(v).slice(0, 120))}\` |`);
  lines.push('');
  if (c.motion) lines.push(`Last frame at ${c.motion.lastFrameMs}ms (delay + stagger × (count − 1) + duration). An entrance on the LCP element adds this to TTFB; keep the sum inside 2.5 s (learning #203).`, '');
  const snd = c.sound;
  lines.push('### Sound', '');
  lines.push(`- File: ${snd.file ? `\`${snd.file}\`` : 'silent'}${snd.file === snd.shipped ? ' (shipped)' : snd.shipped ? ` (shipped: \`${snd.shipped}\`)` : ' (ships silent)'}`);
  lines.push(`- Volume: ${snd.volume}${snd.volume !== 0.7 ? ' (SoundProvider default is 0.7)' : ''}`);
  lines.push(`- Pitch: ${snd.rate}×${snd.rate !== 1 ? '. Runtime plays at 1×; bake the pitch into the file.' : ''}`);
  lines.push(`- Fires on: ${snd.trigger}`, '');
  if (c.tokens.length) {
    lines.push('### CSS overrides', '', '```css', `/* ${spec.component} · concept ${c.id} · sc-tune ${stamp} */`);
    const block = (sel, list) => { if (!list.length) return; lines.push(`${sel} {`); for (const t of list) lines.push(`  ${t.name}: ${t.override};`); lines.push('}'); };
    block(':root', c.tokens.filter((t) => !t.mode || t.mode === 'all' || t.mode === 'light'));
    block('[data-theme="dark"]', c.tokens.filter((t) => t.mode === 'dark'));
    lines.push('```', '');
  }
}
if (Object.keys(spec.derived || {}).length) {
  lines.push('## Derived geometry (concept being edited)', '');
  for (const [k, v] of Object.entries(spec.derived)) lines.push(`- \`${k}\`: ${v}`);
  lines.push('');
}
lines.push('## Snapshot', '', 'A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:', '', '```bash', `npx vite preview --outDir ${relative(root, resolve(outDir, 'snapshot'))}`, '```', '');
writeFileSync(resolve(outDir, 'spec.md'), lines.join('\n'));

/* ---------- snapshot build ---------- */

const snapDir = resolve(outDir, 'snapshot');
execFileSync('npx', ['vite', 'build', '--config', 'vite.tune.config.js', '--mode', 'snapshot', '--outDir', snapDir, '--logLevel', 'error'], { cwd: root, stdio: 'inherit' });
writeFileSync(resolve(snapDir, 'spec.json'), JSON.stringify(spec, null, 2) + '\n');
const files = [...new Set(spec.concepts.map((c) => c.sound.file).filter(Boolean))];
for (const file of files) {
  const src = resolve(root, 'assets/sounds/drams', file);
  if (!existsSync(src)) {
    console.error(`sound not found: ${relative(root, src)}`);
    process.exit(1);
  }
  mkdirSync(resolve(snapDir, 'sounds'), { recursive: true });
  copyFileSync(src, resolve(snapDir, 'sounds', file));
}

console.log(`recorded ${spec.component} → ${relative(root, outDir)}`);
console.log(`  spec.md · spec.json · snapshot/ (${spec.concepts.length} concept(s)${spec.pick ? `, picked ${spec.pick.concept}` : ''})`);
