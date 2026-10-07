/**
 * sc-tune — the SCDS component tuning lab. Dev-only.
 *
 *   npm run dev → http://localhost:5173/previews/tune/?c=Switch
 *
 * Mounts the real component twice: Shipped (tokens as built) and Tuned
 * (your overrides). Every token the component's CSS consumes gets a typed
 * control: colour, length, time, easing, shadow (scale + strength), number.
 * Props, the interaction sound (any Drams sound, volume, pitch), theme and
 * zoom are tunable too. Overrides are CSS custom properties set on the
 * Tuned stage only, so the cascade does the work and nothing is forked.
 *
 * State autosaves to localStorage (`sc-tune:v1:<Component>`) and is exposed
 * as `window.scTune.export()`, which returns the spec that
 * `scripts/tune-record.mjs` turns into spec.json + spec.md + a snapshot
 * build. Built with `--mode snapshot`, the page loads ./spec.json and
 * renders that state read-only. Procedure: skills/sc-tune/SKILL.md.
 */

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SoundProvider } from '../../src/sound/SoundProvider.jsx';
import tokensCss from '../../src/styles/tokens.css?raw';
import '../../src/styles/fonts.css';
import '../../src/styles/tokens.css';
import '../../src/styles/reset.css';
import { REGISTRY } from './registry.jsx';
import s from './Tune.module.css';

const SNAPSHOT = import.meta.env.MODE === 'snapshot';
const SOUND_BASE = SNAPSHOT ? './sounds/' : '/assets/sounds/drams/';
const SPEC_VERSION = 1;
const storageKey = (c) => `sc-tune:v${SPEC_VERSION}:${c}`;

/* ---------- token discovery ---------- */

const uniq = (a) => [...new Set(a)];
const PRIMITIVES = uniq(tokensCss.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g) || []);
const PRIM = {
  color: PRIMITIVES.filter((n) => n.startsWith('--sc-p-color-') && !n.endsWith('-rgb')),
  length: PRIMITIVES.filter((n) => /^--sc-p-(space|size|radius|border-width)-/.test(n)),
  time: PRIMITIVES.filter((n) => n.startsWith('--sc-p-motion-duration-')),
  easing: PRIMITIVES.filter((n) => n.startsWith('--sc-p-motion-easing-')),
};

function discover(cssList) {
  const css = cssList.join('\n');
  const tokens = uniq(css.match(/var\((--sc-[a-z0-9-]+)/g)?.map((m) => m.slice(4)) || []);
  const derived = uniq(css.match(/(?<![\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\s*:)/g) || []);
  return { tokens: tokens.sort(), derived };
}

function category(name) {
  const m = name.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/);
  return m ? m[1] : 'other';
}

function classify(v) {
  if (!v) return 'text';
  if (/^(cubic-bezier|ease|linear|steps)/.test(v)) return 'easing';
  if (/^-?[\d.]+m?s$/.test(v)) return 'time';
  if (/px/.test(v) && /(rgb|#|hsl|color\(|inset)/.test(v)) return 'shadow';
  if (CSS.supports('color', v)) return 'color';
  if (/^-?[\d.]+px$/.test(v)) return 'length';
  if (/^-?[\d.]+$/.test(v)) return 'number';
  return 'text';
}

const readVars = (el, names) => {
  if (!el) return {};
  const cs = getComputedStyle(el);
  return Object.fromEntries(names.map((n) => [n, cs.getPropertyValue(n).trim()]));
};

// A derived var is a calc() string until something lays it out. Resolve
// each through a probe's width so the spec records pixels, not formulas.
const resolveLengths = (el, names) => {
  if (!el) return {};
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;height:0;';
  el.appendChild(probe);
  const out = Object.fromEntries(names.map((n) => {
    probe.style.width = `var(${n})`;
    return [n, getComputedStyle(probe).width];
  }));
  probe.remove();
  return out;
};

/* ---------- value helpers ---------- */

const ctx2d = typeof document !== 'undefined' ? document.createElement('canvas').getContext('2d') : null;
function parseColor(v) {
  ctx2d.fillStyle = '#000';
  ctx2d.fillStyle = v;
  const out = ctx2d.fillStyle;
  if (out.startsWith('#')) return { hex: out, a: 1 };
  const m = out.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
  if (!m) return { hex: '#000000', a: 1 };
  const hex = '#' + [m[1], m[2], m[3]].map((x) => Math.round(+x).toString(16).padStart(2, '0')).join('');
  return { hex, a: m[4] !== undefined ? +m[4] : 1 };
}
function colorValue(hex, a) {
  if (a >= 1) return hex.toUpperCase();
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255} / ${+a.toFixed(3)})`;
}
const toMs = (v) => (v.endsWith('ms') ? parseFloat(v) : parseFloat(v) * 1000);
const round = (x, d = 2) => +(+x).toFixed(d);
function adjustShadow(base, scale, strength) {
  return base
    .replace(/(-?[\d.]+)px/g, (_, n) => `${round(n * scale)}px`)
    .replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g, (_, c, a) => `rgba(${c}, ${round(Math.min(1, a * strength), 3)})`)
    .replace(/\/\s*([\d.]+)\s*\)/g, (_, a) => `/ ${round(Math.min(1, a * strength), 3)})`);
}
const parseBezier = (v) => (v.match(/cubic-bezier\(([^)]+)\)/)?.[1].split(',').map(Number)) || [0.25, 0.1, 0.25, 1];

/* ---------- sound ---------- */

let audio = null;
const buffers = new Map();
async function playFile(file, volume, rate) {
  if (!file) return;
  audio = audio || new (window.AudioContext || window.webkitAudioContext)();
  if (audio.state === 'suspended') await audio.resume();
  let buf = buffers.get(file);
  if (!buf) {
    const data = await (await fetch(SOUND_BASE + file)).arrayBuffer();
    buf = await audio.decodeAudioData(data);
    buffers.set(file, buf);
  }
  const src = audio.createBufferSource();
  const gain = audio.createGain();
  gain.gain.value = volume;
  src.buffer = buf;
  src.playbackRate.value = rate;
  src.connect(gain).connect(audio.destination);
  src.start();
}

/* ---------- state ---------- */

function freshState(component) {
  const entry = REGISTRY[component];
  return {
    component,
    props: Object.fromEntries(entry.props.map((p) => [p.name, p.default])),
    overrides: {},
    shadowAdj: {},
    sound: { file: entry.shippedSound, volume: 0.7, rate: 1 },
    view: { theme: 'light', zoom: 3, ground: '--sc-color-surface-page' },
  };
}
function loadState(component) {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey(component)) || 'null');
    if (saved?.component === component) return { ...freshState(component), ...saved };
  } catch {
    /* blocked storage: start fresh */
  }
  return freshState(component);
}

/* ---------- controls ---------- */

function TokenControl({ name, kind, shipped, value, override, adj, onSet, onAdj, onReset }) {
  const changed = override !== undefined;
  const refList = PRIM[kind === 'number' ? 'none' : kind] || [];
  let editor = null;
  if (kind === 'color') {
    const c = parseColor(value);
    editor = (
      <>
        <input type="color" aria-label={`${name} colour`} value={c.hex} onChange={(e) => onSet(colorValue(e.target.value, c.a))} />
        <input type="range" aria-label={`${name} alpha`} min="0" max="1" step="0.01" value={c.a} onChange={(e) => onSet(colorValue(c.hex, +e.target.value))} />
      </>
    );
  } else if (kind === 'length' || kind === 'number') {
    const n = parseFloat(value) || 0;
    const base = Math.abs(parseFloat(shipped) || 1);
    const max = kind === 'length' ? Math.max(64, base * 4) : Math.max(2, base * 2);
    const unit = kind === 'length' ? 'px' : '';
    editor = (
      <>
        <input type="range" aria-label={name} min={kind === 'length' ? 0 : 0} max={max} step={kind === 'length' ? 0.5 : 0.005} value={n} onChange={(e) => onSet(`${e.target.value}${unit}`)} />
        <input type="number" aria-label={`${name} value`} className={s.num} step={kind === 'length' ? 0.5 : 0.005} value={round(n, 3)} onChange={(e) => onSet(`${e.target.value}${unit}`)} />
      </>
    );
  } else if (kind === 'time') {
    const ms = toMs(value);
    editor = (
      <>
        <input type="range" aria-label={name} min="0" max="1200" step="10" value={ms} onChange={(e) => onSet(`${e.target.value}ms`)} />
        <span className={s.readout}>{Math.round(ms)}ms</span>
      </>
    );
  } else if (kind === 'easing') {
    const b = parseBezier(value);
    editor = (
      <>
        <svg className={s.curve} viewBox="0 0 1 1" aria-hidden="true">
          <path d={`M0 1 C${b[0]} ${1 - b[1]} ${b[2]} ${1 - b[3]} 1 0`} />
        </svg>
        {b.map((x, i) => (
          <input key={i} type="number" aria-label={`${name} point ${i + 1}`} className={s.num} step="0.01" value={x} onChange={(e) => {
            const nb = [...b]; nb[i] = +e.target.value; onSet(`cubic-bezier(${nb.join(', ')})`);
          }} />
        ))}
      </>
    );
  } else if (kind === 'shadow') {
    editor = (
      <>
        <label className={s.mini}>scale<input type="range" min="0" max="3" step="0.05" value={adj?.scale ?? 1} onChange={(e) => onAdj({ ...adj, scale: +e.target.value })} /></label>
        <label className={s.mini}>strength<input type="range" min="0" max="3" step="0.05" value={adj?.strength ?? 1} onChange={(e) => onAdj({ ...adj, strength: +e.target.value })} /></label>
      </>
    );
  } else {
    editor = <input type="text" aria-label={name} value={value} onChange={(e) => onSet(e.target.value)} />;
  }
  return (
    <div className={`${s.token} ${changed ? s.changed : ''}`}>
      <div className={s.tokenHead}>
        <code className={s.tokenName}>{name.replace('--sc-', '')}</code>
        {changed && <button type="button" className={s.reset} onClick={onReset} aria-label={`Reset ${name}`}>reset</button>}
      </div>
      <div className={s.editor}>
        {editor}
        {refList.length > 0 && (
          <select aria-label={`${name} token`} value={override?.startsWith('var(') ? override.slice(4, -1) : ''} onChange={(e) => e.target.value && onSet(`var(${e.target.value})`)}>
            <option value="">token…</option>
            {refList.map((p) => <option key={p} value={p}>{p.replace('--sc-p-', '')}</option>)}
          </select>
        )}
      </div>
      <div className={s.values}>
        <span title={shipped}>shipped {shipped}</span>
        {changed && <span title={value}>tuned {value}</span>}
      </div>
    </div>
  );
}

function PropControl({ def, value, onChange }) {
  const id = `prop-${def.name}`;
  let input;
  if (def.type === 'boolean') input = <input id={id} type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} />;
  else if (def.type === 'enum') input = <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>{def.options.map((o) => <option key={o}>{o}</option>)}</select>;
  else if (def.type === 'number') input = <input id={id} type="number" className={s.num} min={def.min} max={def.max} value={value} onChange={(e) => onChange(+e.target.value)} />;
  else input = <input id={id} type="text" value={value} onChange={(e) => onChange(e.target.value)} />;
  return (
    <div className={s.prop}>
      <label htmlFor={id}><code>{def.name}</code></label>
      {input}
    </div>
  );
}

/* ---------- app ---------- */

function Tune() {
  const initial = new URLSearchParams(location.search).get('c');
  const [component, setComponent] = useState(REGISTRY[initial] ? initial : 'Switch');
  const [state, setState] = useState(() => loadState(component));
  const [snapshotMeta, setSnapshotMeta] = useState(null);
  const [manifest, setManifest] = useState([]);
  const [shortOnly, setShortOnly] = useState(true);
  const [shipped, setShipped] = useState({});
  const [tuned, setTuned] = useState({});
  const [derived, setDerived] = useState({});
  const baseRef = useRef(null);
  const tunedRef = useRef(null);
  const entry = REGISTRY[component];
  const { tokens, derived: derivedNames } = useMemo(() => discover(entry.css), [entry]);

  // Snapshot build: load the recorded spec and lock the panel.
  useEffect(() => {
    if (!SNAPSHOT) return;
    fetch('./spec.json').then((r) => r.json()).then((spec) => {
      setComponent(spec.component);
      setState(spec.state);
      setSnapshotMeta({ recorded: spec.recorded, changed: spec.tokens.length });
    });
  }, []);

  useEffect(() => {
    if (SNAPSHOT) return;
    fetch('/assets/sounds/drams/manifest.json').then((r) => r.json()).then((m) => setManifest(m.sounds)).catch(() => {});
  }, []);

  // Switching component: load its saved state and reflect it in the URL.
  const switchTo = (c) => {
    setComponent(c);
    setState(loadState(c));
    history.replaceState(null, '', `?c=${c}`);
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', state.view.theme);
  }, [state.view.theme]);

  // Read resolved values after every render that can change them.
  useLayoutEffect(() => {
    setShipped(readVars(baseRef.current, tokens));
    setTuned(readVars(tunedRef.current, tokens));
    const node = tunedRef.current?.querySelector('[class]');
    const host = node ? (node.closest('label') || node) : null;
    setDerived(resolveLengths(host, derivedNames));
  }, [tokens, derivedNames, state.overrides, state.view.theme, state.props]);

  useEffect(() => {
    if (SNAPSHOT) return;
    const t = setTimeout(() => {
      try { localStorage.setItem(storageKey(component), JSON.stringify({ ...state, updated: new Date().toISOString() })); } catch { /* storage blocked */ }
    }, 150);
    return () => clearTimeout(t);
  }, [state, component]);

  const update = useCallback((fn) => setState((prev) => (SNAPSHOT ? prev : fn(prev))), []);
  const setProp = useCallback((name, value) => setState((prev) => ({ ...prev, props: { ...prev.props, [name]: value } })), []);
  const setOverride = (name, value) => update((p) => ({ ...p, overrides: { ...p.overrides, [name]: value } }));
  const resetOverride = (name) => update((p) => {
    const o = { ...p.overrides }; delete o[name];
    const a = { ...p.shadowAdj }; delete a[name];
    return { ...p, overrides: o, shadowAdj: a };
  });
  const setShadowAdj = (name, adj) => update((p) => ({
    ...p,
    shadowAdj: { ...p.shadowAdj, [name]: adj },
    overrides: { ...p.overrides, [name]: adjustShadow(shipped[name], adj.scale ?? 1, adj.strength ?? 1) },
  }));
  const setView = (k, v) => setState((p) => ({ ...p, view: { ...p.view, [k]: v } }));
  const setSound = (k, v) => update((p) => ({ ...p, sound: { ...p.sound, [k]: v } }));
  const sound = useCallback(() => playFile(state.sound.file, state.sound.volume, state.sound.rate), [state.sound]);

  const exportSpec = useCallback(() => ({
    tool: 'sc-tune',
    version: SPEC_VERSION,
    component,
    recorded: new Date().toISOString(),
    theme: state.view.theme,
    props: state.props,
    sound: { ...state.sound, shipped: entry.shippedSound, trigger: entry.trigger },
    tokens: Object.keys(state.overrides).map((name) => ({
      name, category: category(name), kind: classify(shipped[name]),
      shipped: shipped[name], tuned: tuned[name], override: state.overrides[name],
      ...(state.shadowAdj[name] ? { shadowAdjust: state.shadowAdj[name] } : {}),
    })),
    derived,
    tokenCount: tokens.length,
    state,
  }), [component, state, entry, shipped, tuned, derived, tokens]);

  useEffect(() => { window.scTune = { export: exportSpec, component }; }, [exportSpec, component]);

  const groups = useMemo(() => {
    const g = {};
    for (const t of tokens) (g[category(t)] ||= []).push(t);
    return g;
  }, [tokens]);

  const sounds = manifest.filter((m) => !shortOnly || m.seconds <= 1);
  const changedCount = Object.keys(state.overrides).length;
  const stageStyle = { zoom: state.view.zoom, background: `var(${state.view.ground})` };
  const render = entry.render(state.props, SNAPSHOT ? setProp : (n, v) => setProp(n, v), sound);
  const [copied, setCopied] = useState(false);

  return (
    <div className={s.app}>
      <header className={s.bar}>
        <span className={s.brand}>sc-tune</span>
        <select aria-label="Component" value={component} disabled={SNAPSHOT} onChange={(e) => switchTo(e.target.value)}>
          {Object.keys(REGISTRY).map((c) => <option key={c}>{c}</option>)}
        </select>
        <span className={s.meta}>{tokens.length} tokens · {changedCount} tuned</span>
        {snapshotMeta && <span className={s.meta}>snapshot · recorded {snapshotMeta.recorded}</span>}
        <span className={s.spacer} />
        {!SNAPSHOT && (
          <>
            <button type="button" onClick={() => { navigator.clipboard?.writeText(JSON.stringify(exportSpec(), null, 2)).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }}>{copied ? 'Copied' : 'Copy spec'}</button>
            <button type="button" onClick={() => update(() => freshState(component))}>Reset all</button>
          </>
        )}
      </header>

      <main className={s.stages}>
        <SoundProvider enabled={false}>
          <section className={s.stageWrap} aria-label="Shipped">
            <h2 className={s.stageLabel}>Shipped</h2>
            <div className={s.stage} style={stageStyle} ref={baseRef} inert="">
              {entry.render(state.props, () => {}, () => {})}
            </div>
          </section>
          <section className={s.stageWrap} aria-label="Tuned">
            <h2 className={s.stageLabel}>Tuned · interact here</h2>
            <div className={s.stage} style={{ ...stageStyle, ...state.overrides }} ref={tunedRef}>
              {render}
            </div>
          </section>
        </SoundProvider>
      </main>

      <aside className={s.panel}>
        <fieldset className={s.group} disabled={SNAPSHOT}>
          <legend>View</legend>
          <div className={s.prop}><label htmlFor="v-theme"><code>theme</code></label>
            <select id="v-theme" value={state.view.theme} onChange={(e) => setView('theme', e.target.value)}><option>light</option><option>dark</option></select></div>
          <div className={s.prop}><label htmlFor="v-zoom"><code>zoom</code></label>
            <input id="v-zoom" type="range" min="1" max="8" step="0.5" value={state.view.zoom} onChange={(e) => setView('zoom', +e.target.value)} /><span className={s.readout}>{state.view.zoom}×</span></div>
          <div className={s.prop}><label htmlFor="v-ground"><code>ground</code></label>
            <select id="v-ground" value={state.view.ground} onChange={(e) => setView('ground', e.target.value)}>
              {['--sc-color-surface-page', '--sc-color-surface-raised', '--sc-color-surface-sunk', '--sc-color-surface-floating'].map((g) => <option key={g} value={g}>{g.replace('--sc-color-', '')}</option>)}
            </select></div>
        </fieldset>

        <fieldset className={s.group} disabled={SNAPSHOT}>
          <legend>Props</legend>
          {entry.props.map((d) => <PropControl key={d.name} def={d} value={state.props[d.name]} onChange={(v) => setProp(d.name, v)} />)}
        </fieldset>

        <fieldset className={s.group} disabled={SNAPSHOT}>
          <legend>Sound · {entry.trigger}</legend>
          <div className={s.prop}><label htmlFor="s-vol"><code>volume</code></label>
            <input id="s-vol" type="range" min="0" max="1" step="0.05" value={state.sound.volume} onChange={(e) => setSound('volume', +e.target.value)} /><span className={s.readout}>{state.sound.volume}</span></div>
          <div className={s.prop}><label htmlFor="s-rate"><code>pitch</code></label>
            <input id="s-rate" type="range" min="0.5" max="2" step="0.05" value={state.sound.rate} onChange={(e) => setSound('rate', +e.target.value)} /><span className={s.readout}>{state.sound.rate}×</span></div>
          <div className={s.prop}><label htmlFor="s-short"><code>under 1 s only</code></label>
            <input id="s-short" type="checkbox" checked={shortOnly} onChange={(e) => setShortOnly(e.target.checked)} /></div>
          <ul className={s.sounds} aria-label="Sound candidates">
            <li className={s.sound}>
              <label><input type="radio" name="sound" checked={!state.sound.file} onChange={() => setSound('file', null)} /> silent</label>
            </li>
            {(SNAPSHOT ? [{ file: state.sound.file, seconds: '' }] : sounds).filter((m) => m.file).map((m) => (
              <li key={m.file} className={`${s.sound} ${m.file === entry.shippedSound ? s.shippedSound : ''}`}>
                <label>
                  <input type="radio" name="sound" checked={state.sound.file === m.file} onChange={() => { setSound('file', m.file); playFile(m.file, state.sound.volume, state.sound.rate); }} />
                  {m.file.replace(/\.(wav|mp3)$/, '')}
                </label>
                <span className={s.readout}>{m.seconds && `${m.seconds}s`}{m.file === entry.shippedSound ? ' · shipped' : ''}</span>
                <button type="button" aria-label={`Play ${m.file}`} onClick={() => playFile(m.file, state.sound.volume, state.sound.rate)}>play</button>
              </li>
            ))}
          </ul>
        </fieldset>

        {Object.entries(groups).map(([cat, names]) => (
          <fieldset key={cat} className={s.group} disabled={SNAPSHOT}>
            <legend>{cat} · {names.length}</legend>
            {names.map((n) => (
              <TokenControl
                key={n}
                name={n}
                kind={classify(shipped[n])}
                shipped={shipped[n]}
                value={tuned[n] || shipped[n] || ''}
                override={state.overrides[n]}
                adj={state.shadowAdj[n]}
                onSet={(v) => setOverride(n, v)}
                onAdj={(a) => setShadowAdj(n, a)}
                onReset={() => resetOverride(n)}
              />
            ))}
          </fieldset>
        ))}

        {derivedNames.length > 0 && (
          <fieldset className={s.group}>
            <legend>derived · read-only</legend>
            {derivedNames.map((n) => <div key={n} className={s.values}><code>{n}</code> {derived[n]}</div>)}
          </fieldset>
        )}
      </aside>
    </div>
  );
}

// Guard: a snapshot served through the dev server can evaluate twice.
const host = document.getElementById('root');
if (!host.dataset.mounted) {
  host.dataset.mounted = 'true';
  ReactDOM.createRoot(host).render(<Tune />);
}
