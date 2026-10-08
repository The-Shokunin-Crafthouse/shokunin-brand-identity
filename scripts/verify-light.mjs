#!/usr/bin/env node
/**
 * verify-light.mjs — one light source for every material (physical-controls
 * directive 2; Gate 1 pick 1, top left; decisions 2026-10-07).
 *
 * Why this exists
 * ---------------
 * The re-audit found four light directions shipping in tokens at once (top,
 * top left, top right). The rule that replaced them lived only as a sentence
 * in decisions.md, so nothing stopped a fifth. A shared offset token is not
 * possible yet (each shadow is one composite string; tokens-to-swift and the
 * Figma sync do not parse calc() inside it), so the rule is graded here.
 *
 * The rule, in CSS gradient angles (0deg = up, 135deg = toward the bottom
 * right, 315deg = toward the top left):
 *
 *   1. Every shadow layer's offset is zero or on the 135/315 diagonal (x = y).
 *   2. A cast shade (outer, dark) falls toward 135deg: x > 0, y > 0.
 *   3. A cast highlight (outer, light) sits toward 315deg: x < 0, y < 0.
 *   4. Inset layers obey 1 only: a recess darkens its top-left wall (+,+) and
 *      a convex face may light it (+,+); both are the same light.
 *   5. Every face gradient in a component's CSS is linear-gradient(135deg, …).
 *   6. No component transitions box-shadow (or `all`): Button, Card, Input
 *      and the rest repeat 10+ times on a page, and a shadow transition
 *      repaints every frame. Press motion stays on transform.
 *
 * A layer with zero alpha is inert (role tokens ship that way until a tuning
 * record is applied) and is not graded. A mode that aliases an exempt token
 * inherits the exemption (the light is graded once, at the target); a copy
 * by value is graded. Exemptions name their decision and
 * must still exist, so the list cannot outlive what it excuses.
 *
 * Exits non-zero on any failure. Runs inside `npm run tokens:verify`.
 */

import { readFileSync, readdirSync } from 'node:fs';
import { dirname, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const EXEMPT = [
  { path: 'shadow.switch', why: 'the Switch stays the Drams repaint, lit from the top (decisions 2026-10-07, "the Switch re-light is reverted")' },
  { path: 'shadow.control.raised', why: 'superseded, held for Studio PM RunButton.swift (decisions 2026-10-07, "shadow.control.bevel retired")' },
  { path: 'shadow.control.inset', why: 'the Card hover inset, lit from the top; Card moves to its own plate and well tokens in Tier 2' },
];
const EXEMPT_CSS = [
  { file: 'src/components/Switch/Switch.module.css', why: 'the Switch knob gradients run top to bottom (same decision as shadow.switch)' },
];

const EPS = 0.02;

/* Split on commas outside parentheses. */
function layers(str) {
  const out = []; let depth = 0; let cur = '';
  for (const ch of str) {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (ch === ',' && depth === 0) { out.push(cur.trim()); cur = ''; } else cur += ch;
  }
  if (cur.trim()) out.push(cur.trim());
  return out;
}

const LEN = /^-?(\d*\.)?\d+(px)?$/;

export function parseLayer(src) {
  const parts = []; let depth = 0; let cur = '';
  for (const ch of src) {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (/\s/.test(ch) && depth === 0) { if (cur) parts.push(cur); cur = ''; } else cur += ch;
  }
  if (cur) parts.push(cur);
  const inset = parts.includes('inset');
  const rest = parts.filter((p) => p !== 'inset');
  const lens = rest.filter((p) => LEN.test(p)).map((p) => parseFloat(p));
  const color = rest.filter((p) => !LEN.test(p)).join(' ');
  return { inset, x: lens[0] ?? 0, y: lens[1] ?? 0, color };
}

const lum = (r, g, b) => {
  const c = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * c(r) + 0.7152 * c(g) + 0.0722 * c(b);
};

/* → { tone: 'shade' | 'highlight' | null, alpha } */
export function classify(color) {
  if (color === 'transparent') return { tone: null, alpha: 0 };
  const a = color.match(/\/\s*([\d.]+)\s*\)\s*$/);
  const alpha = a ? parseFloat(a[1]) : 1;
  if (/ink-rgb|black-rgb/.test(color)) return { tone: 'shade', alpha };
  if (/white-rgb/.test(color)) return { tone: 'highlight', alpha };
  const rgb = color.match(/^rgba?\(\s*(\d+)[\s,]+(\d+)[\s,]+(\d+)/);
  if (rgb) return { tone: lum(+rgb[1], +rgb[2], +rgb[3]) > 0.5 ? 'highlight' : 'shade', alpha };
  return { tone: null, alpha };
}

function walk(node, path, out) {
  if (!node || typeof node !== 'object') return;
  if ('$value' in node) { out.push({ path: path.join('.'), node }); return; }
  for (const [k, v] of Object.entries(node)) if (!k.startsWith('$')) walk(v, [...path, k], out);
}

function resolveAlias(value, all) {
  const m = typeof value === 'string' && value.match(/^\{(.+)\}$/);
  if (!m) return value;
  const hit = all.find((t) => t.path === m[1]);
  return hit ? resolveAlias(hit.node.$value, all) : value;
}

/* Every token path an alias passes through on the way to its value. */
function aliasChain(value, all, seen = []) {
  const m = typeof value === 'string' && value.match(/^\{(.+)\}$/);
  if (!m || seen.includes(m[1])) return seen;
  const hit = all.find((t) => t.path === m[1]);
  return hit ? aliasChain(hit.node.$value, all, [...seen, m[1]]) : [...seen, m[1]];
}

export function checkLight({ semantic, css, exempt = EXEMPT, exemptCss = EXEMPT_CSS }) {
  const failures = [];
  const all = []; walk(semantic, [], all);
  const shadows = all.filter((t) => t.node.$type === 'shadow' || t.path.startsWith('shadow.'));
  const isExempt = (p) => exempt.some((e) => p === e.path || p.startsWith(`${e.path}.`));

  for (const e of exempt) {
    if (!all.some((t) => t.path === e.path || t.path.startsWith(`${e.path}.`))) {
      failures.push(`${e.path}: exempt from the light rule, but the token no longer exists; remove the exemption`);
    }
  }

  for (const { path, node } of shadows) {
    if (isExempt(path)) continue;
    const modes = node.$extensions?.modes ?? { value: node.$value };
    for (const [mode, raw] of Object.entries(modes)) {
      // An alias to an exempt token inherits the exemption: graded once, at the target.
      if (aliasChain(raw, all).some(isExempt)) continue;
      const value = resolveAlias(raw, all);
      if (typeof value !== 'string' || value === 'none') continue;
      for (const src of layers(value)) {
        const l = parseLayer(src);
        const { tone, alpha } = classify(l.color);
        if (alpha === 0) continue;
        const where = `${path} (${mode}) "${src}"`;
        if (!tone) { failures.push(`${where}: colour not classifiable as shade or highlight`); continue; }
        if (l.x === 0 && l.y === 0) continue;
        if (Math.abs(l.x - l.y) > EPS) { failures.push(`${where}: offset is off the 135/315 diagonal (x must equal y)`); continue; }
        if (l.inset) continue;
        if (tone === 'shade' && l.x < 0) failures.push(`${where}: a cast shade must fall toward 135deg (bottom right)`);
        if (tone === 'highlight' && l.x > 0) failures.push(`${where}: a cast highlight must sit toward 315deg (top left)`);
      }
    }
  }

  for (const { file, text } of css) {
    const clean = text.replace(/\/\*[\s\S]*?\*\//g, '');
    for (const m of clean.matchAll(/transition(?:-property)?\s*:([^;}]*)/g)) {
      if (/\bbox-shadow\b|\ball\b/.test(m[1])) failures.push(`${file}: transitions box-shadow; shadow changes snap on controls that repeat (press stays on transform)`);
    }
    if (exemptCss.some((e) => e.file === file)) continue;
    for (const m of clean.matchAll(/linear-gradient\(\s*([^,]+),/g)) {
      if (m[1].trim() !== '135deg') failures.push(`${file}: face gradient "${m[0]}…" must run at 135deg`);
    }
  }
  return failures;
}

/* ------------------------------------------------------------------ CLI */
const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
  const semantic = JSON.parse(readFileSync(resolve(root, 'tokens/semantic.json'), 'utf8'));
  const css = [];
  const dir = resolve(root, 'src/components');
  for (const c of readdirSync(dir, { withFileTypes: true })) {
    if (!c.isDirectory()) continue;
    for (const f of readdirSync(resolve(dir, c.name))) {
      if (f.endsWith('.module.css')) {
        const abs = resolve(dir, c.name, f);
        css.push({ file: relative(root, abs), text: readFileSync(abs, 'utf8') });
      }
    }
  }
  const failures = checkLight({ semantic, css });
  if (failures.length) {
    console.error(`Light source: ${failures.length} failure(s)\n  ${failures.join('\n  ')}`);
    process.exit(1);
  }
  console.log(`Light source: one light (shade 135deg, highlight 315deg, faces 135deg); ${css.length} component stylesheets, ${EXEMPT.length + EXEMPT_CSS.length} named exemptions.`);
}
