#!/usr/bin/env node
/**
 * tokens-to-css.mjs — DTCG → CSS custom properties.
 *
 * Reads tokens/primitives.json + tokens/semantic.json and emits
 * src/styles/tokens.css with:
 *   :root { /* primitive + light-semantic vars *​/ }
 *   [data-theme="dark"] { /* dark-mode semantic overrides *​/ }
 *
 * Conventions:
 * - CSS var prefix: --sc-
 * - Path segments are joined with `-`. CamelCase segments are
 *   converted to kebab-case (warmGray → warm-gray, surfacePage →
 *   surface-page).
 * - Composite typography tokens explode into per-axis subkeys:
 *     --sc-font-text-16 (shorthand: font property)
 *     --sc-font-text-16-family / -size / -weight /
 *     --sc-font-text-16-line-height / -letter-spacing
 * - DTCG aliases ({group.sub.name}) are emitted as var() refs so
 *   the cascade resolves the actual value at use site.
 *
 * Sprint 4 deliverable. Run `npm run tokens:build` before Vite.
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, '..');

const PRIMITIVES_PATH = resolve(repoRoot, 'tokens/primitives.json');
const SEMANTIC_PATH = resolve(repoRoot, 'tokens/semantic.json');
const OUT_PATH = resolve(repoRoot, 'src/styles/tokens.css');

const primitives = JSON.parse(readFileSync(PRIMITIVES_PATH, 'utf8'));
const semantic = JSON.parse(readFileSync(SEMANTIC_PATH, 'utf8'));

// camelCase → kebab-case for a single path segment.
function kebab(segment) {
  return segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
}

// Path array → CSS var name. ['color','warmGray','100'] → --sc-color-warm-gray-100
function varName(path) {
  return '--sc-' + path.map(kebab).join('-');
}

// DTCG alias `{a.b.c}` → CSS var reference. Returns null if not an alias.
function aliasToVar(value) {
  if (typeof value !== 'string') return null;
  const m = /^\{([^}]+)\}$/.exec(value);
  if (!m) return null;
  const path = m[1].split('.');
  return `var(${varName(path)})`;
}

// Format a DTCG dimension { value, unit } or a plain number-with-unit
// into a CSS length token. Numbers without unit are emitted as-is.
function formatDimension(value) {
  if (value && typeof value === 'object' && 'value' in value) {
    return `${value.value}${value.unit ?? ''}`;
  }
  if (typeof value === 'number') return String(value);
  return String(value);
}

// Format primitive token $value by $type.
function formatPrimitive(token) {
  const v = token.$value;
  switch (token.$type) {
    case 'color':
      return v; // hex string
    case 'dimension':
      return formatDimension(v);
    case 'fontWeight':
    case 'number':
      return String(v);
    case 'fontFamily': {
      const list = Array.isArray(v) ? v : [v];
      return list
        .map((f) => (/\s/.test(f) ? `'${f}'` : f))
        .join(', ');
    }
    case 'duration':
      return formatDimension(v);
    case 'cubicBezier':
      return `cubic-bezier(${v.join(', ')})`;
    default:
      return null;
  }
}

// Format a value that may be an alias or a literal subvalue inside a
// composite typography token.
function formatComposite(value) {
  const aliased = aliasToVar(value);
  if (aliased) return aliased;
  return formatDimension(value);
}

// Emit a typography composite as multiple --sc-font-text-N-* vars.
function emitTypography(path, token, lines) {
  const root = varName(path);
  const v = token.$value;
  const family = formatComposite(v.fontFamily);
  const size = formatComposite(v.fontSize);
  const weight = formatComposite(v.fontWeight);
  const lh = formatComposite(v.lineHeight);
  const tracking = formatComposite(v.letterSpacing);
  lines.push(`  ${root}-family: ${family};`);
  lines.push(`  ${root}-size: ${size};`);
  lines.push(`  ${root}-weight: ${weight};`);
  lines.push(`  ${root}-line-height: ${lh};`);
  lines.push(`  ${root}-letter-spacing: ${tracking};`);
  // CSS `font` shorthand for the composite (style/variant default,
  // weight + size/line-height + family). letter-spacing is set via
  // a sibling rule by consumers.
  lines.push(
    `  ${root}: ${weight} ${size}/${lh} ${family};`,
  );
}

// Walk an object tree and emit one CSS declaration per leaf $value.
function walk(node, path, lines, opts = { mode: null }) {
  for (const key of Object.keys(node)) {
    if (key.startsWith('$')) continue;
    const child = node[key];
    if (!child || typeof child !== 'object') continue;
    const nextPath = [...path, key];
    if ('$value' in child) {
      emitLeaf(child, nextPath, lines, opts);
    } else {
      walk(child, nextPath, lines, opts);
    }
  }
}

function emitLeaf(token, path, lines, opts) {
  // For semantic tokens we honour $extensions.modes.{light,dark}.
  if (opts.mode && token.$extensions?.modes?.[opts.mode] !== undefined) {
    const aliasOrValue = token.$extensions.modes[opts.mode];
    const aliased = aliasToVar(aliasOrValue);
    if (aliased) {
      lines.push(`  ${varName(path)}: ${aliased};`);
      return;
    }
    // Literal in mode override — emit as a primitive of token.$type.
    const literal = formatPrimitive({ $type: token.$type, $value: aliasOrValue });
    if (literal !== null) lines.push(`  ${varName(path)}: ${literal};`);
    return;
  }

  // Typography composites get exploded.
  if (token.$type === 'typography') {
    emitTypography(path, token, lines);
    return;
  }

  // Alias values resolve via var().
  const aliased = aliasToVar(token.$value);
  if (aliased) {
    lines.push(`  ${varName(path)}: ${aliased};`);
    return;
  }

  // Plain primitive literal.
  const literal = formatPrimitive(token);
  if (literal !== null) lines.push(`  ${varName(path)}: ${literal};`);
}

// Build the CSS document.
const header = `/* ============================================================
 * tokens.css — GENERATED · do not edit by hand.
 *
 * Generated by scripts/tokens-to-css.mjs from:
 *   - tokens/primitives.json
 *   - tokens/semantic.json
 *
 * Run \`npm run tokens:build\` to regenerate.
 *
 * Layer order:
 *   1. :root { primitives + light-mode semantic }
 *   2. [data-theme="dark"] { dark-mode semantic overrides }
 *
 * Every component CSS module references --sc-* semantic vars
 * (Sprint 4 contract resolution 1). Primitive vars are present
 * to satisfy alias resolution; component code that references
 * them directly is a bug.
 * ============================================================ */
`;

const rootLines = [':root {'];
rootLines.push('  /* --- Primitives ---------------------------------------- */');
walk(primitives, [], rootLines);
rootLines.push('');
rootLines.push('  /* --- Semantic · light mode (default) ------------------ */');
walk(semantic, [], rootLines, { mode: 'light' });
rootLines.push('}');

const darkLines = ['[data-theme="dark"] {'];
darkLines.push('  /* --- Semantic · dark mode overrides ------------------- */');
walk(semantic, [], darkLines, { mode: 'dark' });
darkLines.push('}');

const out = [header, '', rootLines.join('\n'), '', darkLines.join('\n'), ''].join('\n');

mkdirSync(dirname(OUT_PATH), { recursive: true });
writeFileSync(OUT_PATH, out, 'utf8');

const stats = {
  root: rootLines.filter((l) => l.includes('--sc-')).length,
  dark: darkLines.filter((l) => l.includes('--sc-')).length,
};
console.log(`tokens.css written: ${OUT_PATH}`);
console.log(`  root declarations: ${stats.root}`);
console.log(`  dark declarations: ${stats.dark}`);
