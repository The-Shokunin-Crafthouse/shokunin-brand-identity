// Contrast table for the deepest slate dark grounds PR (decisions.md 2026-10-18).
// Resolves every pair through scripts/verify-contrast.mjs, the same resolver the gate uses.
//   node output/proofs/2026-10-18-deepest-slate-dark/contrast-table.mjs > output/proofs/2026-10-18-deepest-slate-dark/contrast.md
import { semanticHex } from '../../../scripts/verify-contrast.mjs';

const lin = (c) => { c /= 255; return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; };
const lum = (h) => { const x = h.replace('#', ''); const [r, g, b] = [0, 2, 4].map((i) => lin(parseInt(x.slice(i, i + 2), 16))); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
const ratio = (a, b) => { const [hi, lo] = [lum(a), lum(b)].sort((p, q) => q - p); return (hi + 0.05) / (lo + 0.05); };

let failures = 0;
const cell = (fg, bg, floor) => { const r = ratio(fg, bg); if (r < floor) failures++; return `${r.toFixed(2)}${r < floor ? ' ✗' : ''}`; };

const GROUNDS = ['page', 'raised', 'floating', 'sunk'];
const INKS = [
  'color.text.primary', 'color.text.secondary', 'color.text.tertiary', 'color.brand.accentInk',
  'color.interactive.hover-ink', 'color.interactive.active-ink',
  'color.status.success-ink', 'color.status.warning-ink', 'color.status.info-ink', 'color.status.error-ink',
];
const out = [];
out.push('### Dark inks on the deepest grounds (AA 4.5:1)', '');
out.push(`| Ink | Hex | ${GROUNDS.map((g) => `${g} ${semanticHex(`color.surface.${g}`, 'dark')}`).join(' | ')} |`);
out.push(`|---|---|${GROUNDS.map(() => '---:').join('|')}|`);
for (const ink of INKS) {
  const fg = semanticHex(ink, 'dark');
  out.push(`| \`${ink.replace('color.', '')}\` | ${fg} | ${GROUNDS.map((g) => cell(fg, semanticHex(`color.surface.${g}`, 'dark'), 4.5)).join(' | ')} |`);
}

out.push('', '### StatusPill fill and ink pairs (AA 4.5:1)', '');
out.push('| Pill | Light ink / fill | Light | Dark ink / fill | Dark |', '|---|---|---:|---|---:|');
for (const tone of ['progress', 'success', 'warning', 'error', 'info', 'live']) {
  const row = [`\`${tone}\``];
  for (const mode of ['light', 'dark']) {
    const fg = semanticHex(`color.statusPill.${tone}.ink`, mode);
    const bg = semanticHex(`color.statusPill.${tone}.fill`, mode);
    row.push(`${fg} / ${bg}`, cell(fg, bg, 4.5));
  }
  out.push(`| ${row.join(' | ')} |`);
}

out.push('', '### Light success ink (AA 4.5:1)', '');
out.push('| Ink | page | sunk |', '|---|---:|---:|');
const si = semanticHex('color.status.success-ink', 'light');
out.push(`| \`status.success-ink\` ${si} | ${cell(si, semanticHex('color.surface.page', 'light'), 4.5)} | ${cell(si, semanticHex('color.surface.sunk', 'light'), 4.5)} |`);

out.push('', `**Failures: ${failures}.**`);
console.log(out.join('\n'));
process.exitCode = failures ? 1 : 0;
