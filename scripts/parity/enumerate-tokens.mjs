// Enumerate EVERY leaf token in tokens/*.json, both modes. Identifier-driven (#173).
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';

const read = (p) => JSON.parse(readFileSync(new URL(`../../tokens/${p}`, import.meta.url), 'utf8'));
const prim = read('primitives.json');
const sem  = read('semantic.json');

const hash = (p) => createHash('sha256')
  .update(readFileSync(new URL(`../../tokens/${p}`, import.meta.url)))
  .digest('hex').slice(0, 16);

function walk(node, path, out, file) {
  if (node === null || typeof node !== 'object') return;
  if ('$value' in node) {
    const modes = node.$extensions?.modes;
    if (modes && typeof modes === 'object') {
      for (const [mode, v] of Object.entries(modes)) {
        out.push({ file, token: path.join('.'), mode, type: node.$type ?? '', value: v });
      }
    } else {
      out.push({ file, token: path.join('.'), mode: 'Value', type: node.$type ?? '', value: node.$value });
    }
    return;
  }
  for (const [k, v] of Object.entries(node)) {
    if (k.startsWith('$')) continue;
    walk(v, [...path, k], out, file);
  }
}

const rows = [];
walk(prim, [], rows, 'primitives');
walk(sem, [], rows, 'semantic');

const uniqTokens = (f) => new Set(rows.filter(r => r.file === f).map(r => r.token)).size;

if (process.argv[2] === '--json') {
  console.log(JSON.stringify({
    stamp: { primitives: hash('primitives.json'), semantic: hash('semantic.json') },
    counts: {
      primitiveTokens: uniqTokens('primitives'),
      semanticTokens: uniqTokens('semantic'),
      rows: rows.length,
    },
    rows,
  }, null, 2));
} else {
  console.log(`stamp: primitives ${hash('primitives.json')} · semantic ${hash('semantic.json')}`);
  console.log(`primitive tokens ${uniqTokens('primitives')} · semantic tokens ${uniqTokens('semantic')}`);
  console.log(`rows (token × mode) ${rows.length}`);
  const byType = {};
  for (const r of rows) byType[`${r.file}/${r.type || 'untyped'}`] = (byType[`${r.file}/${r.type || 'untyped'}`] ?? 0) + 1;
  for (const [k, v] of Object.entries(byType).sort()) console.log(`  ${k}: ${v}`);
}
