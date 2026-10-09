/**
 * Tooltip shape (physical-controls Tier 2, Levi 2026-10-08): the arrow as
 * an SVG path with a rounded tip and concave fillets where it meets the
 * bubble, and the plate's shadow as a drop-shadow filter so it follows the
 * bubble and the arrow as one shape.
 */

/* Pure: the arrow path, base on y = 0, apex at (0, leg), drawn from x = 0
 * to x = width. `overlap` extends it up into the bubble to hide the seam.
 * The sides run at 45deg (the arrow is twice as wide as it is tall). */
export function arrowPath(leg, tip = 0, fillet = 0, overlap = 0) {
  const h = Math.max(0, leg);
  const w = h;
  if (h === 0) return { d: '', width: 0, height: 0 };
  const L = Math.hypot(w, h);
  // Tangent lengths: tip corner (apex angle 2θ, tan θ = w / h); fillet
  // corner (between the base line and the side, 180deg - atan(h / w)).
  const phi = Math.PI - Math.atan2(h, w);
  let r = Math.max(0, tip);
  let f = Math.max(0, fillet);
  let tTip = (r * h) / w;
  let tFil = f / Math.tan(phi / 2);
  // Clamp so the two arcs never pass each other on a side.
  if (tTip + tFil > L) {
    const k = L / (tTip + tFil);
    r *= k; f *= k; tTip *= k; tFil *= k;
  }
  const cx = w + tFil; // centre x in the drawing (left edge at 0)
  const ux = w / L; const uy = h / L; // unit vector, base corner → apex (right side mirrored)
  const n = (v) => Math.round(v * 1000) / 1000;
  const pt = (x, y) => `${n(cx + x)} ${n(y)}`;
  const d = [
    `M ${pt(-(w + tFil), -overlap)}`,
    `L ${pt(-(w + tFil), 0)}`,
    f ? `A ${n(f)} ${n(f)} 0 0 1 ${pt(-w + ux * tFil, uy * tFil)}` : '',
    `L ${pt(-ux * tTip, h - uy * tTip)}`,
    r ? `A ${n(r)} ${n(r)} 0 0 0 ${pt(ux * tTip, h - uy * tTip)}` : '',
    `L ${pt(w - ux * tFil, uy * tFil)}`,
    f ? `A ${n(f)} ${n(f)} 0 0 1 ${pt(w + tFil, 0)}` : '',
    `L ${pt(w + tFil, -overlap)}`,
    'Z',
  ].filter(Boolean).join(' ');
  return { d, width: n(2 * cx), height: n(h + overlap) };
}

/* Split on commas that sit outside parentheses. */
const splitTop = (s) => {
  const out = []; let depth = 0; let cur = '';
  for (const ch of s) {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (ch === ',' && depth === 0) { out.push(cur); cur = ''; } else cur += ch;
  }
  if (cur.trim()) out.push(cur);
  return out.map((x) => x.trim()).filter(Boolean);
};

/* Pure: a box-shadow value → a drop-shadow filter chain. Outer layers only:
 * a drop-shadow has no inset and no spread. One layer converts exactly.
 * Returns 'none' when nothing casts (inset only, or every colour clear). */
export function dropShadowFilter(boxShadow) {
  if (!boxShadow || boxShadow.trim() === 'none') return 'none';
  const parts = [];
  for (const layer of splitTop(boxShadow)) {
    if (/\binset\b/.test(layer)) continue;
    const color = layer.match(/(?:rgba?|hsla?|oklch|oklab|lab|lch|color)\([^()]*(?:\([^()]*\)[^()]*)*\)|#[0-9a-fA-F]{3,8}\b|\b(?:transparent|currentcolor|black|white)\b/i)?.[0];
    const lengths = layer.replace(color || '', ' ').match(/-?\d*\.?\d+(?:px)?/g) || [];
    const [x = '0', y = '0', blur = '0'] = lengths.map((v) => (/px$/.test(v) ? v : `${v}px`));
    if (!color) continue;
    if (/\/\s*0(?:\.0*)?\s*\)$/.test(color) || /^transparent$/i.test(color)) continue;
    parts.push(`drop-shadow(${x} ${y} ${blur} ${color})`);
  }
  return parts.length ? parts.join(' ') : 'none';
}
