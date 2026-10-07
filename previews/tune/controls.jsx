/**
 * sc-tune controls: one editor per value kind, plus the easing/spring
 * editor shared by easing tokens and motion props.
 */

import { useState } from 'react';
import { curvePath, parseBezier, springToLinear } from './motion.js';
import s from './Tune.module.css';

export const round = (x, d = 2) => +(+x).toFixed(d);

const ctx2d = typeof document !== 'undefined' ? document.createElement('canvas').getContext('2d') : null;
export function parseColor(v) {
  ctx2d.fillStyle = '#000';
  ctx2d.fillStyle = v;
  const out = ctx2d.fillStyle;
  if (out.startsWith('#')) return { hex: out, a: 1 };
  const m = out.match(/rgba?\(([\d.]+),\s*([\d.]+),\s*([\d.]+)(?:,\s*([\d.]+))?\)/);
  if (!m) return { hex: '#000000', a: 1 };
  const hex = '#' + [m[1], m[2], m[3]].map((x) => Math.round(+x).toString(16).padStart(2, '0')).join('');
  return { hex, a: m[4] !== undefined ? +m[4] : 1 };
}
export function colorValue(hex, a) {
  if (a >= 1) return hex.toUpperCase();
  const n = parseInt(hex.slice(1), 16);
  return `rgb(${(n >> 16) & 255} ${(n >> 8) & 255} ${n & 255} / ${+a.toFixed(3)})`;
}
const toMs = (v) => (String(v).endsWith('ms') ? parseFloat(v) : parseFloat(v) * 1000);

/* ---------- easing + spring ---------- */

/**
 * value: the current easing string. spring: {stiffness, damping, mass} when
 * the easing came from a spring. presets: [{name, value}]. onChange(easing,
 * spring|null, settleMs|null). `asRef` makes a preset write var(--name)
 * (tokens) instead of its literal value (motion props, which WAAPI reads).
 */
export function EasingEditor({ label, value, spring, presets, asRef, onChange }) {
  const [mode, setMode] = useState(spring ? 'spring' : 'bezier');
  const b = parseBezier(value) || [0.25, 0.1, 0.25, 1];
  const sp = spring || { stiffness: 260, damping: 22, mass: 1 };
  const applySpring = (next) => {
    const r = springToLinear(next);
    onChange(r.easing, next, r.settleMs);
  };
  const info = spring ? springToLinear(spring) : null;
  return (
    <div className={s.easing}>
      <div className={s.editor}>
        <svg className={s.curve} viewBox="-0.05 -0.05 1.1 1.1" aria-hidden="true">
          <path d={curvePath(value)} />
        </svg>
        <select aria-label={`${label} mode`} value={mode} onChange={(e) => {
          setMode(e.target.value);
          if (e.target.value === 'spring') applySpring(sp);
          else onChange(`cubic-bezier(${b.join(', ')})`, null, null);
        }}>
          <option value="bezier">bezier</option>
          <option value="spring">spring</option>
        </select>
        {presets?.length > 0 && (
          <select aria-label={`${label} preset`} value="" onChange={(e) => {
            const p = presets.find((x) => x.name === e.target.value);
            if (!p) return;
            setMode('bezier');
            onChange(asRef ? `var(${p.name})` : p.value, null, null);
          }}>
            <option value="">token…</option>
            {presets.map((p) => <option key={p.name} value={p.name}>{p.name.replace('--sc-p-motion-easing-', '')}</option>)}
          </select>
        )}
      </div>
      {mode === 'bezier' ? (
        <div className={s.editor}>
          {b.map((x, i) => (
            <input key={i} type="number" aria-label={`${label} bezier point ${i + 1}`} className={s.num} step="0.01" value={x}
              onChange={(e) => { const nb = [...b]; nb[i] = +e.target.value; onChange(`cubic-bezier(${nb.join(', ')})`, null, null); }} />
          ))}
        </div>
      ) : (
        <div className={s.springRows}>
          {[['stiffness', 10, 1000, 1], ['damping', 1, 100, 0.5], ['mass', 0.1, 5, 0.1]].map(([k, min, max, step]) => (
            <label key={k} className={s.mini}>
              {k}
              <input type="range" min={min} max={max} step={step} value={sp[k]} onChange={(e) => applySpring({ ...sp, [k]: +e.target.value })} />
              <span className={s.readout}>{sp[k]}</span>
            </label>
          ))}
          {info && <span className={s.readout}>settles {info.settleMs}ms · overshoot {Math.round(info.overshoot * 100)}%</span>}
        </div>
      )}
    </div>
  );
}


/* ---------- shadow layers ---------- */

// Split on top-level commas only: rgb(a, b, c) carries its own commas.
export function parseShadow(value) {
  const parts = [];
  let depth = 0, cur = '';
  for (const ch of value || '') {
    if (ch === '(') depth += 1;
    if (ch === ')') depth -= 1;
    if (ch === ',' && depth === 0) { parts.push(cur.trim()); cur = ''; } else cur += ch;
  }
  if (cur.trim()) parts.push(cur.trim());
  return parts.filter((p) => p && p !== 'none').map((p) => {
    const inset = /\binset\b/.test(p);
    const color = p.match(/(rgba?\([^)]*\)|#[0-9a-f]{3,8}\b|transparent)/i)?.[0] || 'rgb(0 0 0 / 0.2)';
    const nums = p.replace(color, '').replace('inset', '').trim().split(/\s+/).filter(Boolean).map((n) => parseFloat(n) || 0);
    const [x = 0, y = 0, blur = 0, spread = 0] = nums;
    return { inset, x, y, blur, spread, color };
  });
}
export const formatShadow = (layers) =>
  layers.map((l) => `${l.inset ? 'inset ' : ''}${round(l.x)}px ${round(l.y)}px ${round(l.blur)}px ${round(l.spread)}px ${l.color}`).join(', ');

function ShadowLayers({ name, value, onSet }) {
  const layers = parseShadow(value);
  const put = (i, patch) => onSet(formatShadow(layers.map((l, j) => (j === i ? { ...l, ...patch } : l))));
  return (
    <div className={s.layers}>
      {layers.map((l, i) => {
        const c = parseColor(l.color);
        const role = l.inset ? 'inner edge' : (l.x < 0 || l.y < 0) && c.hex.toUpperCase() === '#FFFFFF' ? 'highlight' : 'shade';
        return (
          <div key={i} className={s.layer}>
            <span className={s.layerHead}>layer {i + 1} · {role}</span>
            <div className={s.layerGrid}>
              {[['x', -20, 20, 0.5], ['y', -20, 20, 0.5], ['blur', 0, 40, 0.5], ['spread', -10, 10, 0.5]].map(([k, min, max, step]) => (
                <label key={k} className={s.mini}>
                  {k}
                  <input type="number" className={s.num} aria-label={`${name} layer ${i + 1} ${k}`} min={min} max={max} step={step} value={round(l[k])} onChange={(e) => put(i, { [k]: +e.target.value })} />
                </label>
              ))}
            </div>
            <div className={s.editor}>
              <input type="color" aria-label={`${name} layer ${i + 1} colour`} value={c.hex} onChange={(e) => put(i, { color: colorValue(e.target.value, c.a) })} />
              <label className={s.mini}>
                opacity
                <input type="range" aria-label={`${name} layer ${i + 1} opacity`} min="0" max="1" step="0.01" value={c.a} onChange={(e) => put(i, { color: colorValue(c.hex, +e.target.value) })} />
                <span className={s.readout}>{round(c.a)}</span>
              </label>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/* ---------- token control ---------- */

// Snap steps for sizes that live on a scale: [px, role label, primitive].
// Text steps label the role that already uses them; icon steps name the
// icon size token at that step, or the micro step between them.
const TYPE_STEPS = [11, 12, 13, 14, 16, 20].map((px, i) => [px, ['chrome', 'ui', 'caption', 'dense', 'body', 'lead'][i], `--sc-p-font-size-${px}`]);
const ICON_STEPS = [[10, '', '--sc-p-space-micro-10'], [12, 'xs', '--sc-p-space-12'], [14, '', '--sc-p-space-micro-14'], [16, 'sm', '--sc-p-space-16'], [18, '', '--sc-p-space-micro-18'], [24, 'md', '--sc-p-space-24']];
const stepsFor = (name) => (/^--sc-font-.*-size$/.test(name) ? TYPE_STEPS : /^--sc-size-.*icon/.test(name) ? ICON_STEPS : null);

export function TokenControl({ name, kind, shipped, value, override, scope, adj, spring, pin, refs, easingPresets, onSet, onAdj, onSpring, onReset, onPin }) {
  const changed = override !== undefined;
  const [pinOpen, setPinOpen] = useState(!!pin);
  let editor = null;
  if (kind === 'color') {
    const c = parseColor(value);
    editor = (
      <div className={s.editor}>
        <input type="color" aria-label={`${name} colour`} value={c.hex} onChange={(e) => onSet(colorValue(e.target.value, c.a))} />
        <input type="range" aria-label={`${name} alpha`} min="0" max="1" step="0.01" value={c.a} onChange={(e) => onSet(colorValue(c.hex, +e.target.value))} />
      </div>
    );
  } else if (kind === 'length' || kind === 'number') {
    const n = parseFloat(value) || 0;
    const base = Math.abs(parseFloat(shipped) || 1);
    const max = kind === 'length' ? Math.max(64, base * 4) : Math.max(2, base * 2);
    const unit = kind === 'length' ? 'px' : '';
    const step = kind === 'length' ? 0.5 : 0.005;
    editor = (
      <div className={s.editor}>
        <input type="range" aria-label={name} min="0" max={max} step={step} value={n} onChange={(e) => onSet(`${e.target.value}${unit}`)} />
        <input type="number" aria-label={`${name} value`} className={s.num} step={step} value={round(n, 3)} onChange={(e) => onSet(`${e.target.value}${unit}`)} />
      </div>
    );
    // Font and icon sizes snap to their scale: one tap per step, recorded as
    // the primitive reference so the spec names the step, not a loose px value.
    const steps = stepsFor(name);
    if (steps) {
      editor = (
        <>
          {editor}
          <div className={s.steps} role="group" aria-label={`${name} scale`}>
            {steps.map(([px, role, prim]) => (
              <button key={px} type="button" className={s.step} aria-pressed={n === px}
                onClick={() => onSet(`var(${prim})`)}>
                {px}{role && <span className={s.stepRole}>{role}</span>}
              </button>
            ))}
          </div>
        </>
      );
    }
  } else if (kind === 'time') {
    const ms = toMs(value);
    editor = (
      <div className={s.editor}>
        <input type="range" aria-label={name} min="0" max="1200" step="10" value={ms} onChange={(e) => onSet(`${e.target.value}ms`)} />
        <span className={s.readout}>{Math.round(ms)}ms</span>
      </div>
    );
  } else if (kind === 'easing') {
    editor = (
      <EasingEditor label={name} value={value} spring={spring} presets={easingPresets} asRef
        onChange={(easing, sp, settle) => { onSet(easing); onSpring(sp, settle); }} />
    );
  } else if (kind === 'shadow') {
    editor = (
      <>
        <div className={s.editor}>
          <label className={s.mini}>scale all<input type="range" min="0" max="3" step="0.05" value={adj?.scale ?? 1} onChange={(e) => onAdj({ ...adj, scale: +e.target.value })} /></label>
          <label className={s.mini}>strength all<input type="range" min="0" max="3" step="0.05" value={adj?.strength ?? 1} onChange={(e) => onAdj({ ...adj, strength: +e.target.value })} /></label>
        </div>
        <ShadowLayers name={name} value={value} onSet={onSet} />
      </>
    );
  } else {
    editor = <input type="text" aria-label={name} value={value} onChange={(e) => onSet(e.target.value)} />;
  }
  return (
    <div className={`${s.token} ${changed ? s.changed : ''}`}>
      <div className={s.tokenHead}>
        <code className={s.tokenName}>{name.replace('--sc-', '')}{changed && scope && <span className={s.scope}>{scope === 'all' ? 'both modes' : `${scope} only`}</span>}</code>
        <span className={s.tokenActions}>
          <button type="button" className={s.reset} aria-pressed={pinOpen} onClick={() => setPinOpen((o) => !o)}>note</button>
          {changed && <button type="button" className={s.reset} onClick={onReset} aria-label={`Reset ${name}`}>reset</button>}
        </span>
      </div>
      {editor}
      {refs?.length > 0 && kind !== 'easing' && (
        <select aria-label={`${name} token`} value={override?.startsWith('var(') ? override.slice(4, -1) : ''} onChange={(e) => e.target.value && onSet(`var(${e.target.value})`)}>
          <option value="">token…</option>
          {refs.map((p) => <option key={p} value={p}>{p.replace('--sc-p-', '')}</option>)}
        </select>
      )}
      {pinOpen && (
        <input type="text" className={s.pin} aria-label={`Note on ${name}`} placeholder="Note on this value…" value={pin || ''} onChange={(e) => onPin(e.target.value)} />
      )}
      <div className={s.values}>
        <span title={shipped}>shipped {shipped}</span>
        {changed && <span title={value}>tuned {value}</span>}
      </div>
    </div>
  );
}

/* ---------- prop control ---------- */

export function PropControl({ def, value, spring, easingPresets, onChange, onSpring }) {
  const id = `prop-${def.name}`;
  let input;
  if (def.type === 'boolean') input = <input id={id} type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} />;
  else if (def.type === 'enum') input = <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>{def.options.map((o) => <option key={o}>{o}</option>)}</select>;
  else if (def.type === 'number') input = <input id={id} type="number" className={s.num} min={def.min} max={def.max} value={value} onChange={(e) => onChange(+e.target.value)} />;
  else if (def.type === 'range') {
    input = (
      <>
        <input id={id} type="range" min={def.min} max={def.max} step={def.step} value={value} onChange={(e) => onChange(+e.target.value)} />
        <span className={s.readout}>{value}{def.unit || ''}</span>
      </>
    );
  } else if (def.type === 'easing') {
    return (
      <div className={s.propBlock}>
        <span className={s.propLabel}><code>{def.name}</code></span>
        <EasingEditor label={def.name} value={value} spring={spring} presets={easingPresets}
          onChange={(easing, sp, settle) => onSpring(easing, sp, settle)} />
      </div>
    );
  } else input = <input id={id} type="text" value={value} onChange={(e) => onChange(e.target.value)} />;
  return (
    <div className={s.prop}>
      <label htmlFor={id}><code>{def.name}</code></label>
      {input}
    </div>
  );
}
