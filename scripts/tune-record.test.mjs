/**
 * tune-record must refuse to overwrite a record that already exists.
 *
 * The bug (WQ-103): the record folder is output/tuning/<Component>/<stamp>,
 * with the stamp taken from the export's `recorded` time to the minute. The
 * script ran mkdirSync({ recursive: true }) and rewrote spec.json, spec.md
 * and snapshot/, so re-recording an export rewrote a committed record, and
 * two exports recorded in the same minute collided.
 *
 * The test pre-creates a throwaway record under a probe component, runs the
 * script on a matching export, and removes the probe in `after`. It never
 * touches a real record and never takes the --force path (that runs a vite
 * build).
 *
 *   node --test scripts/tune-record.test.mjs
 */
import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, writeFileSync, readFileSync, readdirSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const probeRoot = resolve(root, 'output/tuning/WQ103Probe');
const recorded = '2026-01-02T03:04:00'; // local time, so the stamp below holds in any zone
const stamp = '2026-01-02-0304';
const recordDir = join(probeRoot, stamp);
const KNOWN = 'known bytes, do not overwrite\n';

const exportJson = JSON.stringify({ tool: 'sc-tune', version: 3, component: 'WQ103Probe', recorded, theme: 'light', concepts: [], state: {} });
const run = (...args) => spawnSync('node', ['scripts/tune-record.mjs', ...args], { cwd: root, encoding: 'utf8' });

let exportFile;
before(() => {
  rmSync(probeRoot, { recursive: true, force: true });
  mkdirSync(recordDir, { recursive: true });
  writeFileSync(join(recordDir, 'spec.json'), KNOWN);
  exportFile = join(mkdtempSync(join(tmpdir(), 'tune-record-')), 'WQ103Probe.json');
  writeFileSync(exportFile, exportJson);
});
after(() => {
  rmSync(probeRoot, { recursive: true, force: true });
});

test('refuses to write into a record folder that already exists', () => {
  const r = run(exportFile);
  assert.equal(r.status, 1, `expected exit 1, got ${r.status}\n${r.stderr}`);
  assert.match(r.stderr, /WQ103Probe\/2026-01-02-0304/, 'error names the folder');
  assert.match(r.stderr, /--force/, 'error says to pass --force');
  assert.equal(readFileSync(join(recordDir, 'spec.json'), 'utf8'), KNOWN, 'spec.json untouched');
  assert.deepEqual(readdirSync(recordDir), ['spec.json'], 'nothing else written');
  assert.equal(existsSync(join(recordDir, 'snapshot')), false, 'no snapshot build');
});

test('--force is accepted before the input argument and still refuses nothing else (usage path only)', () => {
  const r = run('--force');
  assert.equal(r.status, 2, 'only a flag, no input: usage error');
  assert.match(r.stderr, /usage:.*--force/);
});

test('usage line documents --force', () => {
  const r = run();
  assert.equal(r.status, 2);
  assert.match(r.stderr, /usage:.*--force/);
});
