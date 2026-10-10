/**
 * sc-tune controls: one editor per value kind, plus the easing/spring
 * editor shared by easing tokens and motion props.
 *
 * Every control row is one grid (P3.3): [label 7rem] [control 1fr]
 * [readout 4.5rem]. Sliders fill the middle column, readouts sit
 * right-aligned in the last, so the panel reads as a table of values.
 *
 * Every control is memoised (P5.1) and talks to the lab through one stable
 * dispatcher, `onAction(name, action, payload)`, so a drag on one token
 * re-renders that token's card and no other.
 */

import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { curvePath, curvePoints, parseBezier, springToLinear } from './motion.js';
import s from './Tune.module.css';

export const round = (x, d = 2) => +(+x).toFixed(d);
export const short = (name) => name.replace(/^--sc-/, '');
const prim = (name) => name.replace(/^--sc-p-/, '');

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
export const toMs = (v) => (String(v).trim().endsWith('ms') ? parseFloat(v) : parseFloat(v) * 1000);
const prefersReducedMotion = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- the row grid ---------- */

/** One control row. `label` is text or a node; `readout` the last column. */
function Row({ label, children, readout, wide }) {
  return (
    <div className={s.row}>
      <span className={s.rowLabel}>{label}</span>
      <span className={`${s.rowControl} ${wide ? s.rowWide : ''}`}>{children}</span>
      {!wide && <span className={s.rowReadout}>{readout}</span>}
    </div>
  );
}

/* ---------- easing + spring ---------- */

const curveFit = (easing) => {
  const ys = curvePoints(easing).map((p) => p[1]);
  const lo = Math.min(0, ...ys);
  const hi = Math.max(1, ...ys);
  // curvePath fits the curve into the unit box; this undoes the fit so the
  // unit box is 0..1 and overshoot draws outside it (above, or below).
  return `translate(0 ${round(1 - hi, 4)}) scale(1 ${round(hi - lo || 1, 4)})`;
};

/**
 * The easing preview (P3.8): a 48 px unit box, the tuned curve, the
 * shipped curve as a faint second path, overshoot drawn outside the box,
 * and a playhead that runs on Play at the token's duration (slow-mo
 * multiplies it). The playhead's dot rides the easing itself, so its
 * overshoot is the overshoot you will see.
 */
const Curve = memo(function Curve({ value, shipped, durationMs, replay }) {
  const head = useRef(null);
  const dot = useRef(null);
  const seen = useRef(replay);
  useEffect(() => {
    if (replay === seen.current) return;
    seen.current = replay;
    if (prefersReducedMotion() || !head.current?.animate) return;
    const duration = Math.max(1, durationMs || 0);
    // Percentages of the view box: 100% is the unit box's full width or height.
    head.current.animate([{ opacity: 1, transform: 'translateX(0%)' }, { opacity: 1, transform: 'translateX(100%)' }], { duration, easing: 'linear' });
    const keys = [{ transform: 'translateY(100%)' }, { transform: 'translateY(0%)' }];
    try { dot.current.animate(keys, { duration, easing: value }); } catch { dot.current.animate(keys, { duration, easing: 'linear' }); }
  }, [replay, durationMs, value]);
  return (
    <svg className={s.curve} viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true" data-curve="">
      <rect className={s.curveBox} x="0" y="0" width="1" height="1" />
      {shipped && shipped !== value && <path className={s.curveShipped} d={curvePath(shipped)} transform={curveFit(shipped)} />}
      <path className={s.curveTuned} d={curvePath(value)} transform={curveFit(value)} />
      <g ref={head} className={s.playhead} data-playhead="">
        <line x1="0" x2="0" y1="0" y2="1" />
        <circle ref={dot} cx="0" cy="0" r="0.06" />
      </g>
    </svg>
  );
});

/**
 * value: the current easing string. spring: {stiffness, damping, mass} when
 * the easing came from a spring. presets: [{name, value}]. onChange(easing,
 * spring|null, settleMs|null). `asRef` makes a preset write var(--name)
 * (tokens) instead of its literal value (motion props, which WAAPI reads).
 * The mode follows the record: a spring entry means spring mode.
 */
export const EasingEditor = memo(function EasingEditor({ label, value, shipped, spring, presets, asRef, onChange, durationMs, replay }) {
  const mode = spring ? 'spring' : 'bezier';
  const b = parseBezier(value) || [0.25, 0.1, 0.25, 1];
  const sp = spring || { stiffness: 260, damping: 22, mass: 1 };
  const applySpring = (next) => {
    const r = springToLinear(next);
    onChange(r.easing, next, r.settleMs);
  };
  const info = spring ? springToLinear(spring) : null;
  const dur = 2 * Math.PI * Math.sqrt(sp.mass / sp.stiffness);
  const bounce = 1 - (sp.damping * dur) / (4 * Math.PI * sp.mass);
  // Duration and bounce, the way Framer, SwiftUI and the elastic toggles
  // reel set a spring: duration = 2π√(m/k), bounce = 1 − ζ. Each writes
  // stiffness and damping below; mass holds.
  const setDB = (d, bo) => applySpring({
    ...sp,
    stiffness: +((2 * Math.PI / d) ** 2 * sp.mass).toFixed(1),
    damping: +((4 * Math.PI * (1 - bo) * sp.mass) / d).toFixed(2),
  });
  return (
    <div className={s.easing}>
      <div className={s.row}>
        <span className={`${s.rowLabel} ${s.curveCell}`}><Curve value={value} shipped={shipped} durationMs={durationMs} replay={replay} /></span>
        <span className={`${s.rowControl} ${s.rowWide}`}>
          <select aria-label={`${label} mode`} value={mode} onChange={(e) => {
            if (e.target.value === 'spring') applySpring(sp);
            else onChange(`cubic-bezier(${b.join(', ')})`, null, null);
          }}>
            <option value="bezier">bezier</option>
            <option value="spring">spring</option>
          </select>
          {presets?.length > 0 && (
            <select aria-label={`${label} preset`} value="" onChange={(e) => {
              const p = presets.find((x) => x.name === e.target.value);
              if (p) onChange(asRef ? `var(${p.name})` : p.value, null, null);
            }}>
              <option value="">token…</option>
              {presets.map((p) => <option key={p.name} value={p.name}>{p.name.replace('--sc-p-motion-easing-', '')}</option>)}
            </select>
          )}
        </span>
      </div>
      {mode === 'bezier' ? (
        <Row label="bezier" wide>
          {b.map((x, i) => (
            <input key={i} type="number" aria-label={`${label} bezier point ${i + 1}`} className={s.num} step="0.01" value={x}
              onChange={(e) => { const nb = [...b]; nb[i] = +e.target.value; onChange(`cubic-bezier(${nb.join(', ')})`, null, null); }} />
          ))}
        </Row>
      ) : (
        <>
          <Row label="duration" readout={`${Math.round(dur * 1000)}ms`}>
            <input type="range" aria-label={`${label} spring duration`} min={50} max={2000} step={10} value={Math.round(dur * 1000)}
              onChange={(e) => setDB(+e.target.value / 1000, bounce)} />
          </Row>
          <Row label="bounce" readout={(Math.abs(bounce) < 0.005 ? 0 : bounce).toFixed(2)}>
            <input type="range" aria-label={`${label} spring bounce`} min={0} max={0.95} step={0.01} value={Math.max(0, +bounce.toFixed(2))}
              onChange={(e) => setDB(dur, +e.target.value)} />
          </Row>
          {[['stiffness', 10, 1000, 1], ['damping', 1, 100, 0.5], ['mass', 0.1, 5, 0.1]].map(([k, min, max, step]) => (
            <Row key={k} label={k} readout={sp[k]}>
              <input type="range" aria-label={`${label} spring ${k}`} min={min} max={max} step={step} value={sp[k]} onChange={(e) => applySpring({ ...sp, [k]: +e.target.value })} />
            </Row>
          ))}
          {info && <span className={s.readout}>settles {info.settleMs}ms · overshoot {Math.round(info.overshoot * 100)}%</span>}
        </>
      )}
    </div>
  );
});

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

const LAYER_AXES = [['x', -20, 20, 0.5], ['y', -20, 20, 0.5], ['blur', 0, 40, 0.5], ['spread', -10, 10, 0.5]];

// x / y / blur / spread are four rows on the grid, not a wrap (P3.3).
const ShadowLayers = memo(function ShadowLayers({ name, value, onAction }) {
  const layers = parseShadow(value);
  const put = (i, patch) => onAction(name, 'set', formatShadow(layers.map((l, j) => (j === i ? { ...l, ...patch } : l))));
  const n = short(name);
  return (
    <div className={s.layers}>
      {layers.map((l, i) => {
        const c = parseColor(l.color);
        const role = l.inset ? 'inner edge' : (l.x < 0 || l.y < 0) && c.hex.toUpperCase() === '#FFFFFF' ? 'highlight' : 'shade';
        return (
          <div key={i} className={s.layer}>
            <span className={s.layerHead}>layer {i + 1} · {role}</span>
            {LAYER_AXES.map(([k, min, max, step]) => (
              <Row key={k} label={k} readout={
                <input type="number" className={s.num} aria-label={`${n} layer ${i + 1} ${k} value`} min={min} max={max} step={step} value={round(l[k])} onChange={(e) => put(i, { [k]: +e.target.value })} />
              }>
                <input type="range" aria-label={`${n} layer ${i + 1} ${k}`} min={min} max={max} step={step} value={round(l[k])} onChange={(e) => put(i, { [k]: +e.target.value })} />
              </Row>
            ))}
            <Row label="colour">
              <input type="color" aria-label={`${n} layer ${i + 1} colour`} value={c.hex} onChange={(e) => put(i, { color: colorValue(e.target.value, c.a) })} />
            </Row>
            <Row label="opacity" readout={round(c.a)}>
              <input type="range" aria-label={`${n} layer ${i + 1} opacity`} min="0" max="1" step="0.01" value={c.a} onChange={(e) => put(i, { color: colorValue(c.hex, +e.target.value) })} />
            </Row>
          </div>
        );
      })}
    </div>
  );
});

/* ---------- colour field ---------- */

const COLOR_TEXT = /^(#[0-9a-f]{3,8}|rgba?\(.*\))$/i;

/** A typed colour (P3.6): hex or `rgb(r g b / a)`, through parseColor. */
function ColorText({ label, hex, a, onSet }) {
  const [draft, setDraft] = useState(null);
  const shown = draft ?? colorValue(hex, a);
  return (
    <input type="text" className={s.colorText} spellCheck={false} aria-label={label} value={shown}
      onChange={(e) => {
        const v = e.target.value;
        setDraft(v);
        if (COLOR_TEXT.test(v.trim()) && CSS.supports('color', v.trim())) {
          const c = parseColor(v.trim());
          onSet(colorValue(c.hex, c.a));
        }
      }}
      onBlur={() => setDraft(null)}
      onKeyDown={(e) => { if (e.key === 'Enter') e.currentTarget.blur(); }} />
  );
}

/* ---------- token control ---------- */

// Snap steps for sizes that live on a scale: [px, role label, primitive].
// Text steps label the role that already uses them; icon steps name the
// icon size token at that step, or the micro step between them.
const TYPE_STEPS = [11, 12, 13, 14, 16, 20].map((px, i) => [px, ['chrome', 'ui', 'caption', 'dense', 'body', 'lead'][i], `--sc-p-font-size-${px}`]);
const ICON_STEPS = [[10, '', '--sc-p-space-micro-10'], [12, 'xs', '--sc-p-space-12'], [14, '', '--sc-p-space-micro-14'], [16, 'sm', '--sc-p-space-16'], [18, '', '--sc-p-space-micro-18'], [24, 'md', '--sc-p-space-24']];
export const stepsFor = (name) => (/^--sc-font-.*-size$/.test(name) ? TYPE_STEPS : /^--sc-size-.*icon/.test(name) ? ICON_STEPS : null);

const family = (name) => name.match(/^--sc-(?:p-)?(space|size|radius|border-width|border|font-size|font|motion-duration|motion)/)?.[1]?.replace(/^border$/, 'border-width').replace(/^font$/, 'font-size').replace(/^motion$/, 'motion-duration');

/**
 * The nearest primitive on the token's ladder (P4.4), or null when the
 * value is on it. `ladder` is [{ name, v }] in the control's unit (px or
 * ms). A tie goes to the token's own family, then to the smaller step.
 */
export function offLadder(name, value, override, ladder, kind) {
  if (!ladder?.length || typeof override === 'string' && override.startsWith('var(--sc-p-')) return null;
  const v = kind === 'time' ? toMs(value) : parseFloat(value);
  if (!Number.isFinite(v)) return null;
  const fam = family(name);
  let best = null;
  for (const p of ladder) {
    const d = Math.abs(p.v - v);
    if (d < 0.01) return null;
    const key = [round(d, 4), family(p.name) === fam ? 0 : 1, p.v];
    if (!best || key[0] < best.key[0] || (key[0] === best.key[0] && (key[1] < best.key[1] || (key[1] === best.key[1] && key[2] < best.key[2])))) best = { key, p };
  }
  return best.p;
}

/** A fixed action slot (P3.4): sized by its longest label, empty or not. */
function Slot({ sizer, children }) {
  return (
    <span className={s.slot}>
      <span className={s.sizer} aria-hidden="true">{sizer}</span>
      {children}
    </span>
  );
}

export const TokenControl = memo(function TokenControl({ name, kind, shipped, value, override, origin, seeded, scope, adj, spring, pin, refs, ladder, easingPresets, restOf, durationMs, replay, onAction }) {
  // A seed is the registry's lab start, not a decision: it reads `seed`, is
  // not tinted and offers `shipped`. A token with a seed resets to it (`reseed`).
  const overridden = override !== undefined;
  const isSeed = overridden && origin === 'seed';
  const changed = overridden && !isSeed;
  const n = short(name);
  const [pinOpen, setPinOpen] = useState(!!pin);
  useEffect(() => { if (pin) setPinOpen(true); }, [pin]);
  const [rawOpen, setRawOpen] = useState(false);
  const onSet = (v) => onAction(name, 'set', v);
  const onEasing = useCallback((easing, sp, settle) => onAction(name, 'easing', { easing, sp, settle }), [name, onAction]);

  let editor = null;
  let hint = null;
  if (kind === 'color') {
    const c = parseColor(value);
    editor = (
      <>
        <Row label="colour">
          <input type="color" aria-label={`${n} colour`} value={c.hex} onChange={(e) => onSet(colorValue(e.target.value, c.a))} />
          <ColorText label={`${n} colour value`} hex={c.hex} a={c.a} onSet={onSet} />
        </Row>
        <Row label="alpha" readout={round(c.a)}>
          <input type="range" aria-label={`${n} alpha`} min="0" max="1" step="0.01" value={c.a} onChange={(e) => onSet(colorValue(c.hex, +e.target.value))} />
        </Row>
      </>
    );
  } else if (kind === 'length' || kind === 'number') {
    const v = parseFloat(value) || 0;
    const base = Math.abs(parseFloat(shipped) || 1);
    const max = kind === 'length' ? Math.max(64, base * 4) : Math.max(2, base * 2);
    const unit = kind === 'length' ? 'px' : '';
    const step = kind === 'length' ? 0.5 : 0.005;
    const steps = stepsFor(name);
    editor = (
      <>
        <Row label={kind} readout={
          <input type="number" aria-label={`${n} value`} className={s.num} step={step} value={round(v, 3)} onChange={(e) => onSet(`${e.target.value}${unit}`)} />
        }>
          <input type="range" aria-label={n} min="0" max={max} step={step} value={v} onChange={(e) => onSet(`${e.target.value}${unit}`)} />
        </Row>
        {/* Font and icon sizes snap to their scale: one tap per step, recorded
            as the primitive reference so the spec names the step. */}
        {steps && (
          <Row label="scale" wide>
            <span className={s.steps} role="group" aria-label={`${n} scale`}>
              {steps.map(([px, role, p]) => (
                <button key={px} type="button" className={s.step} aria-pressed={v === px}
                  aria-label={`${px}${role ? ` ${role}` : ''} step on ${n}`} onClick={() => onSet(`var(${p})`)}>
                  {px}{role && <span className={s.stepRole}>{role}</span>}
                </button>
              ))}
            </span>
          </Row>
        )}
      </>
    );
    if (kind === 'length') hint = offLadder(name, value, override, ladder, kind);
  } else if (kind === 'time') {
    const ms = toMs(value);
    editor = (
      <Row label="time" readout={`${Math.round(ms)}ms`}>
        <input type="range" aria-label={n} min="0" max="1200" step="10" value={ms} onChange={(e) => onSet(`${e.target.value}ms`)} />
      </Row>
    );
    hint = offLadder(name, value, override, ladder, kind);
  } else if (kind === 'easing') {
    editor = (
      <EasingEditor label={n} value={value} shipped={shipped} spring={spring} presets={easingPresets} asRef
        onChange={onEasing} durationMs={durationMs} replay={replay} />
    );
  } else if (kind === 'shadow') {
    editor = (
      <>
        <Row label="scale all" readout={`${round(adj?.scale ?? 1)}×`}>
          <input type="range" aria-label={`${n} scale all`} min="0" max="3" step="0.05" value={adj?.scale ?? 1} onChange={(e) => onAction(name, 'adj', { ...adj, scale: +e.target.value })} />
        </Row>
        <Row label="strength all" readout={`${round(adj?.strength ?? 1)}×`}>
          <input type="range" aria-label={`${n} strength all`} min="0" max="3" step="0.05" value={adj?.strength ?? 1} onChange={(e) => onAction(name, 'adj', { ...adj, strength: +e.target.value })} />
        </Row>
        <ShadowLayers name={name} value={value} onAction={onAction} />
      </>
    );
  } else {
    editor = (
      <Row label="value" wide>
        <input type="text" aria-label={n} value={value} onChange={(e) => onSet(e.target.value)} />
      </Row>
    );
  }

  const unit = kind === 'time' ? 'ms' : 'px';
  const lines = (
    <>
      <span className={s.shippedValue} title={shipped}>shipped {shipped}</span>
      {overridden && <span className={s.tunedValue} title={value}>{isSeed ? 'seed' : 'tuned'} {value}</span>}
    </>
  );
  return (
    <div className={`${s.token} ${changed ? s.changed : isSeed ? s.seeded : ''}`} data-token={name}>
      <div className={s.tokenHead}>
        <code className={s.tokenName}>{n}</code>
        {/* Four fixed slots: scope, copy rest, note, reset or shipped. An
            absent action keeps its width, so a card never re-flows when it
            becomes changed (P3.4). */}
        <span className={s.tokenActions}>
          <Slot sizer="both modes">{overridden && scope && <span className={s.scope}>{scope === 'all' ? 'both modes' : `${scope} only`}</span>}</Slot>
          <Slot sizer="copy rest">{restOf && <button type="button" className={s.reset} aria-label={`Copy rest into ${n}`} title={`Set to this concept's ${short(restOf)} value`} onClick={() => onAction(name, 'copyRest')}>copy rest</button>}</Slot>
          <Slot sizer="note"><button type="button" className={s.reset} aria-pressed={pinOpen} aria-label={`Note on ${n}`} onClick={() => setPinOpen((o) => !o)}>note</button></Slot>
          <Slot sizer="shipped">
            {isSeed && <button type="button" className={s.reset} onClick={() => onAction(name, 'shipped')} aria-label={`Set shipped value on ${n}`}>shipped</button>}
            {changed && <button type="button" className={`${s.reset} ${s.destructive}`} onClick={() => onAction(name, 'reset')} aria-label={`${seeded ? 'Reseed' : 'Reset'} ${n}`}>{seeded ? 'reseed' : 'reset'}</button>}
          </Slot>
        </span>
      </div>
      {editor}
      {hint && (
        <p className={s.hint}>
          off ladder · nearest{' '}
          <button type="button" className={s.snap} aria-label={`Snap to ${prim(hint.name)} on ${n}`} onClick={() => onSet(`var(${hint.name})`)}>{prim(hint.name)}</button>
          {' '}({round(hint.v)}{unit})
        </p>
      )}
      {refs?.length > 0 && kind !== 'easing' && (
        <Row label="token" wide>
          <select aria-label={`${n} token`} value={override?.startsWith('var(') ? override.slice(4, -1) : ''} onChange={(e) => e.target.value && onSet(`var(${e.target.value})`)}>
            <option value="">token…</option>
            {refs.map((p) => <option key={p} value={p}>{prim(p)}</option>)}
          </select>
        </Row>
      )}
      {pinOpen && (
        <input type="text" className={s.pin} aria-label={`Note text on ${n}`} placeholder="Note on this value…" value={pin || ''} onChange={(e) => onAction(name, 'pin', e.target.value)} />
      )}
      {kind === 'shadow' || /^linear\(/.test(value) || /^linear\(/.test(shipped || '') ? (
        // A raw shadow (P3.7), or a spring's sampled linear(), is kept for
        // copy behind a closed disclosure; the editor above shows it structured.
        <div className={s.values}>
          <button type="button" className={s.disclosure} aria-expanded={rawOpen} aria-label={`Raw values of ${n}`} onClick={() => setRawOpen((o) => !o)}>raw</button>
          {rawOpen && lines}
        </div>
      ) : (
        <div className={s.values}>{lines}</div>
      )}
    </div>
  );
});

/* ---------- prop control ---------- */

export const PropControl = memo(function PropControl({ def, value, spring, easingPresets, onProp, durationMs, replay }) {
  const id = `prop-${def.name}`;
  const onChange = (v) => onProp(def.name, 'set', v);
  const onSpring = useCallback((easing, sp, settle) => onProp(def.name, 'spring', { easing, sp, settle }), [def.name, onProp]);
  const label = <label htmlFor={id} className={s.propName}><code>{def.name}</code></label>;
  if (def.type === 'boolean') {
    // The label wraps the whole row, so the row is the target (P4.1).
    return (
      <label className={`${s.row} ${s.prop} ${s.checkRow}`}>
        <code className={`${s.rowLabel} ${s.propName}`}>{def.name}</code>
        <span className={s.rowControl}><input id={id} type="checkbox" checked={!!value} onChange={(e) => onChange(e.target.checked)} /></span>
        <span className={s.rowReadout}>{value ? 'on' : 'off'}</span>
      </label>
    );
  }
  if (def.type === 'easing') {
    return (
      <div className={`${s.propBlock} ${s.prop}`}>
        <span className={s.propName}><code>{def.name}</code></span>
        <EasingEditor label={def.name} value={value} spring={spring} presets={easingPresets}
          onChange={onSpring} durationMs={durationMs} replay={replay} />
      </div>
    );
  }
  let input = null;
  let readout = null;
  if (def.type === 'enum') input = <select id={id} value={value} onChange={(e) => onChange(e.target.value)}>{def.options.map((o) => <option key={o}>{o}</option>)}</select>;
  else if (def.type === 'number') input = <input id={id} type="number" className={s.num} min={def.min} max={def.max} value={value} onChange={(e) => onChange(+e.target.value)} />;
  else if (def.type === 'range') {
    input = <input id={id} type="range" min={def.min} max={def.max} step={def.step} value={value} onChange={(e) => onChange(+e.target.value)} />;
    readout = `${value}${def.unit || ''}`;
  } else input = <input id={id} type="text" value={value} onChange={(e) => onChange(e.target.value)} />;
  return (
    <div className={`${s.row} ${s.prop}`}>
      <span className={s.rowLabel}>{label}</span>
      <span className={s.rowControl}>{input}</span>
      <span className={s.rowReadout}>{readout}</span>
    </div>
  );
});
