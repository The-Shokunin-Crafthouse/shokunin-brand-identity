/**
 * sc-tune — the SCDS tuning lab. Dev-only.
 *
 *   npm run dev → http://localhost:5173/previews/tune/?c=Switch
 *
 * Mounts the real component as Shipped and as one or more concepts (A–D).
 * Every token the component's CSS consumes gets a typed control: colour,
 * length, time, easing (bezier or spring), shadow (scale + strength),
 * number. Props, sound (any Drams sound, volume, pitch), theme, ground and
 * zoom are tunable per concept. Motion: Play, Loop and slow-mo on every
 * stage; a spring compiles to a CSS linear() easing and sets its paired
 * duration to the settle time. The Motion entry tunes choreography
 * (staggered entrance) rather than a component.
 *
 * Concepts are A vs B: duplicate, compare side by side, blind shuffle,
 * pick one with a reason. Notes: one for the session, one per concept, and
 * a pin on any token. Overrides are CSS custom properties on a concept's
 * stage only, so the cascade does the work and nothing is forked.
 *
 * State autosaves to localStorage (`sc-tune:v2:<Component>`) and is read
 * back with `window.scTune.export()`; `scripts/tune-record.mjs` turns that
 * into spec.json + spec.md + a snapshot build. Built with
 * `--mode snapshot`, the page renders ./spec.json read-only.
 * Procedure: skills/sc-tune/SKILL.md.
 */

import React, { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SoundProvider } from '../../src/sound/SoundProvider.jsx';
import tokensCss from '../../src/styles/tokens.css?raw';
import '../../src/styles/fonts.css';
import '../../src/styles/tokens.css';
import '../../src/styles/reset.css';
import { REGISTRY, lastFrameMs } from './registry.jsx';
import { TokenControl, PropControl, round } from './controls.jsx';
import { springToLinear } from './motion.js';
import s from './Tune.module.css';

const SNAPSHOT = import.meta.env.MODE === 'snapshot';
const SOUND_BASE = SNAPSHOT ? './sounds/' : '/assets/sounds/drams/';
const SPEC_VERSION = 3;
const storageKey = (c) => `sc-tune:v2:${c}`; // v3 state migrates in place (see loadState)
const MODES = ['all', 'light', 'dark'];
// Colour and shadow tokens carry a light and a dark value, so an edit lands
// on the mode being viewed. Everything else (size, type, motion) is one
// value for both modes.
const isModal = (name) => /^--sc-(color|shadow)-/.test(name);
const scopeOf = (name, theme) => (isModal(name) ? theme : 'all');
const scoped = () => ({ all: {}, light: {}, dark: {} });
const effective = (c, theme) => ({ ...c.overrides.all, ...c.overrides[theme] });
const IDS = ['A', 'B', 'C', 'D'];

/* ---------- token discovery ---------- */

const uniq = (a) => [...new Set(a)];
const PRIMITIVES = uniq(tokensCss.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g) || []);
const PRIM = {
  color: PRIMITIVES.filter((n) => n.startsWith('--sc-p-color-') && !n.endsWith('-rgb')),
  length: PRIMITIVES.filter((n) => /^--sc-p-(space|size|radius|border-width)-/.test(n)),
  time: PRIMITIVES.filter((n) => n.startsWith('--sc-p-motion-duration-')),
};
const EASING_NAMES = PRIMITIVES.filter((n) => n.startsWith('--sc-p-motion-easing-'));

function discover(cssList) {
  const css = cssList.join('\n');
  const tokens = uniq(css.match(/var\((--sc-[a-z0-9-]+)/g)?.map((m) => m.slice(4)) || []);
  const derived = uniq(css.match(/(?<![\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\s*:)/g) || []);
  return { tokens: tokens.sort(), derived };
}

const category = (name) => name.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/)?.[1] || 'other';

function classify(v) {
  if (!v) return 'text';
  if (/^(cubic-bezier|ease|linear|steps)/.test(v)) return 'easing';
  if (/^-?[\d.]+m?s$/.test(v)) return 'time';
  if (/px/.test(v) && /(rgb|#|hsl|color\(|inset)/.test(v)) return 'shadow';
  // A flat shadow shipped as zeros (0 0 0 0 rgb(… / 0)) has no px but is still a shadow.
  if (/(rgb|#|hsl|color\()/.test(v) && /^(inset\s+)?-?[\d.]+(px)?\s+-?[\d.]+(px)?\s/.test(v.trim())) return 'shadow';
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

// A derived var is a calc() string until laid out; a probe's width turns it into px.
const resolveLengths = (el, names) => {
  if (!el) return {};
  const probe = document.createElement('span');
  probe.style.cssText = 'position:absolute;visibility:hidden;height:0;';
  el.appendChild(probe);
  const out = Object.fromEntries(names.map((n) => { probe.style.width = `var(${n})`; return [n, getComputedStyle(probe).width]; }));
  probe.remove();
  return out;
};

// Resolve a concept's overrides (which may be var() refs) to final values.
const resolveOverrides = (host, overrides) => {
  if (!host) return {};
  const probe = document.createElement('div');
  probe.style.display = 'none';
  for (const [k, v] of Object.entries(overrides)) probe.style.setProperty(k, v);
  host.appendChild(probe);
  const out = readVars(probe, Object.keys(overrides));
  probe.remove();
  return out;
};

function adjustShadow(base, scale, strength) {
  return base
    .replace(/(-?[\d.]+)px/g, (_, n) => `${round(n * scale)}px`)
    .replace(/rgba\(([^)]*?),\s*([\d.]+)\)/g, (_, c, a) => `rgba(${c}, ${round(Math.min(1, a * strength), 3)})`)
    .replace(/\/\s*([\d.]+)\s*\)/g, (_, a) => `/ ${round(Math.min(1, a * strength), 3)})`);
}

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

/* ---------- forced interaction state ----------
   A pseudo-class cannot be set from script, so each :hover, :active or
   :focus-visible rule in the page's stylesheets is mirrored once as a rule
   keyed on a stage attribute: `.primary:hover:not(:disabled)` also lands as
   `[data-force='hover'] .primary:not(:disabled)`. Only stages carry the
   attribute, so the lab's own chrome never matches. Rebuilt on each change of
   state so hot-reloaded CSS is picked up. */
const FORCE_STATES = ['rest', 'hover', 'focus', 'active'];
const PSEUDO = { hover: ':hover', focus: ':focus-visible', active: ':active' };
function forceStateCss(state) {
  const pseudo = PSEUDO[state];
  if (!pseudo) return '';
  const out = [];
  const visit = (rules, wrap) => {
    for (const r of rules) {
      if (r.cssRules && r.media) { visit(r.cssRules, (css) => wrap(`@media ${r.media.mediaText}{${css}}`)); continue; }
      if (!r.selectorText || !r.selectorText.includes(pseudo)) continue;
      const sel = r.selectorText.split(',').map((x) => x.trim()).filter((x) => x.includes(pseudo))
        .map((x) => `[data-force='${state}'] ${x.split(pseudo).join('')}`).join(', ');
      out.push(wrap(`${sel}{${r.style.cssText}}`));
    }
  };
  for (const sheet of document.styleSheets) {
    if (sheet.ownerNode?.id === 'sc-tune-force') continue;
    try { visit(sheet.cssRules, (css) => css); } catch { /* cross-origin sheet */ }
  }
  return out.join('\n');
}

/* ---------- state ---------- */

const defaults = (entry) => Object.fromEntries(entry.props.map((p) => [p.name, p.default]));

// A registry `seed` is where a new setting starts in the lab when its shipped
// value is deliberately inert (the Switch's reel motion ships at 0, so the
// component is unchanged until Levi records a concept). It fills only tokens
// the concept has not touched; a spring seeds its easing and paired duration.
function seedConcept(entry, c) {
  for (const [name, value] of Object.entries(entry.seed?.overrides || {})) {
    if (!Object.values(c.overrides).some((m) => name in m)) c.overrides.all[name] = value;
  }
  // Per-mode seeds (a shadow or colour whose start differs in light and dark).
  for (const [mode, map] of Object.entries(entry.seed?.scoped || {})) {
    for (const [name, value] of Object.entries(map)) {
      if (!(name in c.overrides[mode]) && !(name in c.overrides.all)) c.overrides[mode][name] = value;
    }
  }
  for (const [name, sp] of Object.entries(entry.seed?.springs || {})) {
    if (c.springs[name] || Object.values(c.overrides).some((m) => name in m)) continue;
    const r = springToLinear(sp);
    c.springs[name] = sp;
    c.overrides.all[name] = r.easing;
    c.overrides.all[name.replace(/-easing$/, '-duration')] = `${r.settleMs}ms`;
  }
  return c;
}
const blankConcept = (entry, id) => seedConcept(entry, {
  id, overrides: scoped(), shadowAdj: scoped(), springs: {}, pins: {}, notes: '',
  props: defaults(entry),
  sound: { file: entry.shippedSound, volume: 0.7, rate: 1 },
});
function freshState(component) {
  const entry = REGISTRY[component];
  return {
    component,
    notes: '',
    active: 'A',
    concepts: [blankConcept(entry, 'A')],
    pick: { id: null, reason: '' },
    view: { theme: 'light', zoom: entry.kind === 'motion' ? 1 : 2, ground: '--sc-color-surface-page', compare: false, blind: false, order: null, slow: 1 },
  };
}
function loadState(component) {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey(component)) || 'null');
    if (saved?.component === component && Array.isArray(saved.concepts)) {
      // Spec v2 kept one flat override map per concept. Colour and shadow
      // edits from that era were dark-mode experiments; the rest apply to both.
      for (const c of saved.concepts) {
        // A prop added to the registry after the session was saved starts at
        // its default, so the control and the stage agree.
        c.props = { ...defaults(REGISTRY[component]), ...c.props };
        c.springs ||= {};
        if (!c.overrides.all) {
          const o = scoped();
          for (const [k, v] of Object.entries(c.overrides)) o[isModal(k) ? 'dark' : 'all'][k] = v;
          const a = scoped();
          for (const [k, v] of Object.entries(c.shadowAdj || {})) a.dark[k] = v;
          c.overrides = o;
          c.shadowAdj = a;
        }
        // 2026-10-07: the large Button label moved off the shared chrome
        // label onto its own role token; carry edits made before the move.
        if (component === 'Button') {
          for (const map of Object.values(c.overrides)) {
            for (const k of Object.keys(map)) {
              if (!k.startsWith('--sc-font-text-label-chrome-')) continue;
              const to = k.replace('label-chrome-', 'label-button-lg-');
              if (!(to in map)) map[to] = map[k];
              delete map[k];
            }
          }
        }
      }
      // #E3DFD8 was a raw candidate ground; it ships as the light
      // surface.page since 2026-10-07, so the token (which flips) replaces it.
      if (saved.view?.ground === '#E3DFD8') saved.view.ground = '--sc-color-surface-page';
      for (const c of saved.concepts) seedConcept(REGISTRY[component], c);
      return saved;
    }
  } catch { /* blocked storage: start fresh */ }
  return freshState(component);
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
  const [replay, setReplay] = useState(0);
  const [loop, setLoop] = useState(false);
  const [copied, setCopied] = useState(false);
  const shippedRef = useRef(null);
  const shippedByMode = useRef({});
  const activeRef = useRef(null);

  const entry = REGISTRY[component];
  const isMotion = entry.kind === 'motion';
  // Tokens a component reads in JS (not var() in its CSS) are listed in the
  // registry, or the lab could neither show nor override them.
  const { tokens, derived: derivedNames } = useMemo(() => {
    const d = discover(entry.css);
    return { ...d, tokens: [...new Set([...d.tokens, ...(entry.jsTokens || [])])].sort() };
  }, [entry]);
  const concept = state.concepts.find((c) => c.id === state.active) || state.concepts[0];
  const easingPresets = useMemo(() => {
    const cs = getComputedStyle(document.documentElement);
    return EASING_NAMES.map((name) => ({ name, value: cs.getPropertyValue(name).trim() }));
  }, []);

  useEffect(() => {
    if (!SNAPSHOT) return;
    fetch('./spec.json').then((r) => r.json()).then((spec) => {
      setComponent(spec.component);
      setState(spec.state);
      setSnapshotMeta({ recorded: spec.recorded });
    });
  }, []);

  useEffect(() => {
    if (SNAPSHOT) return;
    fetch('/assets/sounds/drams/manifest.json').then((r) => r.json()).then((m) => setManifest(m.sounds)).catch(() => {});
  }, []);

  const switchTo = (c) => {
    setComponent(c);
    setState(loadState(c));
    history.replaceState(null, '', `?c=${c}`);
  };

  useEffect(() => { document.documentElement.setAttribute('data-theme', state.view.theme); }, [state.view.theme]);
  const force = state.view.force || 'rest';
  useEffect(() => {
    let el = document.getElementById('sc-tune-force');
    if (!el) { el = document.createElement('style'); el.id = 'sc-tune-force'; document.head.appendChild(el); }
    el.textContent = forceStateCss(force);
  }, [force]);

  useLayoutEffect(() => {
    setShipped(readVars(shippedRef.current, tokens));
    const base = readVars(shippedRef.current, tokens);
    shippedByMode.current[state.view.theme] = base;
    setTuned({ ...base, ...resolveOverrides(shippedRef.current, effective(concept, state.view.theme)) });
    const node = activeRef.current?.querySelector('[class]');
    setDerived(resolveLengths(node ? (node.closest('label') || node) : null, derivedNames));
  }, [tokens, derivedNames, concept.overrides, state.view.theme, concept.props]);

  useEffect(() => {
    if (SNAPSHOT) return;
    const t = setTimeout(() => {
      try { localStorage.setItem(storageKey(component), JSON.stringify({ ...state, updated: new Date().toISOString() })); } catch { /* storage blocked */ }
    }, 150);
    return () => clearTimeout(t);
  }, [state, component]);

  /* ----- state updates ----- */
  const mutate = useCallback((fn) => setState((prev) => (SNAPSHOT ? prev : fn(prev))), []);
  const updConcept = useCallback((id, fn) => setState((prev) => ({ ...prev, concepts: prev.concepts.map((c) => (c.id === id ? fn(c) : c)) })), []);
  const setPropFor = useCallback((id) => (name, value) => updConcept(id, (c) => ({ ...c, props: { ...c.props, [name]: value } })), [updConcept]);
  const editActive = (fn) => mutate((prev) => ({ ...prev, concepts: prev.concepts.map((c) => (c.id === prev.active ? fn(c) : c)) }));
  const theme = state.view.theme;
  const putScoped = (map, name, value) => {
    const sc = scopeOf(name, theme);
    const next = { ...map, [sc]: { ...map[sc] } };
    if (value === undefined) delete next[sc][name]; else next[sc][name] = value;
    return next;
  };
  const setOverride = (name, value) => editActive((c) => ({ ...c, overrides: putScoped(c.overrides, name, value) }));
  const resetOverride = (name) => editActive((c) => {
    const sp = { ...c.springs }; delete sp[name];
    return { ...c, overrides: putScoped(c.overrides, name, undefined), shadowAdj: putScoped(c.shadowAdj, name, undefined), springs: sp };
  });
  const setSpring = (name, sp, settle) => editActive((c) => {
    const springs = { ...c.springs };
    let overrides = c.overrides;
    if (sp) {
      springs[name] = sp;
      const pair = name.replace(/-easing$/, '-duration');
      if (pair !== name && tokens.includes(pair)) overrides = putScoped(overrides, pair, `${settle}ms`);
    } else delete springs[name];
    return { ...c, springs, overrides };
  });
  const setShadowAdj = (name, adj) => editActive((c) => ({
    ...c, shadowAdj: putScoped(c.shadowAdj, name, adj),
    overrides: putScoped(c.overrides, name, adjustShadow(shipped[name], adj.scale ?? 1, adj.strength ?? 1)),
  }));
  const setPin = (name, text) => editActive((c) => ({ ...c, pins: { ...c.pins, [name]: text } }));
  const setSound = (k, v) => editActive((c) => ({ ...c, sound: { ...c.sound, [k]: v } }));
  const setView = (k, v) => setState((p) => ({ ...p, view: { ...p.view, [k]: v } }));
  // One state for every stage. hover/focus/active are forced (see
  // forceStateCss); disabled is the component's own prop, set on every
  // concept so all stages show it, and cleared when another state is picked.
  const hasDisabled = entry.props.some((d) => d.name === 'disabled');
  const setStageState = (v) => setState((p) => ({
    ...p,
    view: { ...p.view, force: v === 'disabled' ? 'rest' : v },
    concepts: hasDisabled ? p.concepts.map((c) => ({ ...c, props: { ...c.props, disabled: v === 'disabled' } })) : p.concepts,
  }));

  const addConcept = (fromActive) => mutate((prev) => {
    const id = IDS.find((x) => !prev.concepts.some((c) => c.id === x));
    if (!id) return prev;
    const src = prev.concepts.find((c) => c.id === prev.active);
    const next = fromActive ? { ...structuredClone(src), id, notes: '' } : blankConcept(entry, id);
    return { ...prev, concepts: [...prev.concepts, next], active: id };
  });
  const removeConcept = (id) => mutate((prev) => {
    if (prev.concepts.length < 2) return prev;
    const concepts = prev.concepts.filter((c) => c.id !== id);
    return { ...prev, concepts, active: concepts[0].id, pick: prev.pick.id === id ? { id: null, reason: prev.pick.reason } : prev.pick };
  });
  const toggleBlind = () => setState((p) => {
    const blind = !p.view.blind;
    const order = blind ? [...p.concepts.map((c) => c.id)].sort(() => Math.random() - 0.5) : null;
    return { ...p, view: { ...p.view, blind, order, compare: blind ? true : p.view.compare } };
  });

  /* ----- motion ----- */
  const play = useCallback(() => {
    setReplay((r) => r + 1);
    if (entry.play) state.concepts.forEach((c) => entry.play(c.props, setPropFor(c.id)));
    const active = state.concepts.find((c) => c.id === state.active);
    if (active?.sound.file) playFile(active.sound.file, active.sound.volume, active.sound.rate);
  }, [entry, state.concepts, state.active, setPropFor]);

  const cycleMs = isMotion ? Math.max(1200, lastFrameMs(concept.props) * state.view.slow + 900) : 1400 * state.view.slow;
  useEffect(() => {
    if (!loop) return;
    const t = setInterval(play, cycleMs);
    return () => clearInterval(t);
  }, [loop, play, cycleMs]);

  // Slow-mo multiplies every time token on every stage; it never reaches the spec.
  const timeTokens = tokens.filter((t) => classify(shipped[t]) === 'time');
  const stageStyle = (overrides) => {
    // A ground is a surface token, so it follows the theme. A raw colour
    // (a candidate page, previewed as surface.page inside the stage) is a
    // light-mode candidate: in dark the stage falls back to the dark page.
    const g = state.view.ground;
    const ground = g.startsWith('--') ? { background: `var(${g})` }
      : state.view.theme === 'dark' ? { background: 'var(--sc-color-surface-page)' }
      : { background: g, '--sc-color-surface-page': g };
    const style = { zoom: state.view.zoom, ...ground, ...overrides };
    if (state.view.slow !== 1) for (const t of timeTokens) style[t] = `calc(${overrides[t] ?? shipped[t]} * ${state.view.slow})`;
    return style;
  };

  // A component that reads tokens in JS once per layout (Card's glass map)
  // rebuilds on this event; CSS-only components never hear it.
  useEffect(() => { window.dispatchEvent(new Event('sc-tokens-change')); }, [state.concepts, state.view.theme]);

  /* ----- export ----- */
  const exportSpec = useCallback(() => {
    const host = shippedRef.current;
    const label = (c) => c.id;
    return {
      tool: 'sc-tune',
      version: SPEC_VERSION,
      component,
      kind: entry.kind || 'component',
      recorded: new Date().toISOString(),
      theme: state.view.theme,
      notes: state.notes,
      pick: state.pick.id ? { concept: state.pick.id, reason: state.pick.reason } : null,
      concepts: state.concepts.map((c) => {
        const resolved = resolveOverrides(host, effective(c, state.view.theme));
        return {
          id: label(c),
          notes: c.notes,
          props: c.props,
          sound: { ...c.sound, shipped: entry.shippedSound, trigger: entry.trigger },
          tokens: MODES.flatMap((mode) => Object.keys(c.overrides[mode]).map((name) => {
            const base = mode === 'all' ? shipped : (shippedByMode.current[mode] || {});
            const override = c.overrides[mode][name];
            const viewable = mode === 'all' || mode === state.view.theme;
            return {
              name, mode, category: category(name), kind: classify(base[name] || shipped[name]),
              shipped: base[name] ?? null,
              // A var() ref resolves only in the mode on screen; elsewhere the ref itself is the record.
              tuned: viewable ? (resolved[name] ?? override) : override,
              override,
              ...(c.shadowAdj[mode]?.[name] ? { shadowAdjust: c.shadowAdj[mode][name] } : {}),
              ...(c.springs[name] ? { spring: { ...c.springs[name], ...springToLinearMeta(c.springs[name]) } } : {}),
            };
          })),
          pins: Object.fromEntries(Object.entries(c.pins).filter(([, v]) => v)),
          ...(isMotion ? { motion: { lastFrameMs: lastFrameMs(c.props), ...(c.springs['prop:easing'] ? { spring: { ...c.springs['prop:easing'], ...springToLinearMeta(c.springs['prop:easing']) } } : {}) } } : {}),
        };
      }),
      derived,
      tokenCount: tokens.length,
      state,
    };
  }, [component, entry, isMotion, state, shipped, derived, tokens]);

  useEffect(() => { window.scTune = { export: exportSpec, component }; }, [exportSpec, component]);

  const groups = useMemo(() => {
    const g = {};
    for (const t of tokens) (g[category(t)] ||= []).push(t);
    return g;
  }, [tokens]);

  /* ----- stages ----- */
  const stageConcepts = state.view.compare
    ? (state.view.blind && state.view.order ? state.view.order.map((id) => state.concepts.find((c) => c.id === id)).filter(Boolean) : state.concepts)
    : [concept];
  const ctx = { replay, slow: state.view.slow };
  const sounds = manifest.filter((m) => !shortOnly || m.seconds <= 1);
  const conceptEff = effective(concept, state.view.theme);
  const changedCount = Object.keys(conceptEff).length;

  return (
    <div className={s.app}>
      <header className={s.bar}>
        <span className={s.brand}>sc-tune</span>
        <select aria-label="Subject" value={component} disabled={SNAPSHOT} onChange={(e) => switchTo(e.target.value)}>
          {Object.keys(REGISTRY).map((c) => <option key={c}>{c}</option>)}
        </select>
        <span className={s.meta}>{isMotion ? 'choreography' : `${tokens.length} tokens`} · {state.concepts.length} concept{state.concepts.length > 1 ? 's' : ''}</span>
        {snapshotMeta && <span className={s.meta}>snapshot · recorded {snapshotMeta.recorded}</span>}
        <span className={s.spacer} />
        <button type="button" onClick={play}>Play</button>
        <button type="button" aria-pressed={loop} onClick={() => setLoop((l) => !l)}>{loop ? 'Stop loop' : 'Loop'}</button>
        <select aria-label="Slow motion" value={state.view.slow} onChange={(e) => setView('slow', +e.target.value)}>
          <option value={1}>1×</option><option value={2}>½×</option><option value={4}>¼×</option><option value={10}>⅒×</option>
        </select>
        <button type="button" aria-pressed={state.view.compare} disabled={state.concepts.length < 2} onClick={() => setView('compare', !state.view.compare)}>Compare</button>
        <button type="button" aria-pressed={state.view.blind} disabled={state.concepts.length < 2} onClick={toggleBlind}>{state.view.blind ? 'Reveal' : 'Blind'}</button>
        {!SNAPSHOT && (
          <>
            <button type="button" onClick={() => { navigator.clipboard?.writeText(JSON.stringify(exportSpec(), null, 2)).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }}>{copied ? 'Copied' : 'Copy spec'}</button>
            <button type="button" onClick={() => mutate(() => freshState(component))}>Reset all</button>
          </>
        )}
      </header>

      <main className={s.stages}>
        <SoundProvider enabled={false}>
          {!state.view.blind && (
            <section className={s.stageWrap} aria-label={isMotion ? 'Default' : 'Shipped'}>
              <h2 className={s.stageLabel}>{isMotion ? 'Default' : 'Shipped'}</h2>
              <div className={s.stage} style={stageStyle({})} ref={shippedRef} inert="" data-force={force}>
                {entry.render(isMotion ? defaults(entry) : concept.props, () => {}, () => {}, ctx)}
              </div>
            </section>
          )}
          {state.view.blind && <div ref={shippedRef} hidden />}
          {stageConcepts.map((c, i) => {
            const label = state.view.blind ? `Concept ${i + 1}` : `${c.id}${c.id === state.active ? ' · editing' : ''}${state.pick.id === c.id ? ' · picked' : ''}`;
            return (
              <section key={c.id} className={`${s.stageWrap} ${c.id === state.active && !state.view.blind ? s.activeStage : ''}`} aria-label={label}>
                <h2 className={s.stageLabel}>
                  {state.view.compare && !state.view.blind
                    ? <button type="button" className={s.stageSelect} onClick={() => setState((p) => ({ ...p, active: c.id }))}>{label}</button>
                    : label}
                  {isMotion && <span className={s.readout}> · last frame {lastFrameMs(c.props)}ms</span>}
                </h2>
                <div className={s.stage} style={stageStyle(effective(c, theme))} ref={c.id === state.active ? activeRef : undefined} data-force={force}>
                  {entry.render(c.props, setPropFor(c.id), () => playFile(c.sound.file, c.sound.volume, c.sound.rate), ctx)}
                </div>
              </section>
            );
          })}
        </SoundProvider>
      </main>

      <aside className={s.panel}>
        <fieldset className={s.group} disabled={SNAPSHOT}>
          <legend>Notes for the build</legend>
          <textarea className={s.notes} aria-label="Session notes" placeholder="Context, intent, constraints. Recorded word for word and treated as requirements." value={state.notes} onChange={(e) => setState((p) => ({ ...p, notes: e.target.value }))} />
        </fieldset>

        <fieldset className={s.group} disabled={SNAPSHOT}>
          <legend>Concepts</legend>
          <div className={s.tabs} role="tablist" aria-label="Concepts">
            {state.concepts.map((c) => (
              <button key={c.id} type="button" role="tab" aria-selected={c.id === state.active} className={s.tab} onClick={() => setState((p) => ({ ...p, active: c.id }))}>{c.id}</button>
            ))}
            <button type="button" className={s.tab} disabled={state.concepts.length >= IDS.length} onClick={() => addConcept(true)}>duplicate</button>
            <button type="button" className={s.tab} disabled={state.concepts.length >= IDS.length} onClick={() => addConcept(false)}>new</button>
            <button type="button" className={s.tab} disabled={state.concepts.length < 2} onClick={() => removeConcept(concept.id)}>remove {concept.id}</button>
          </div>
          <textarea className={s.notes} aria-label={`Notes on concept ${concept.id}`} placeholder={`What concept ${concept.id} is trying…`} value={concept.notes} onChange={(e) => editActive((c) => ({ ...c, notes: e.target.value }))} />
          {state.concepts.length > 1 && (
            <div className={s.pick}>
              <span className={s.propLabel}><code>pick</code></span>
              {state.concepts.map((c) => (
                <label key={c.id} className={s.mini}>
                  <input type="radio" name="pick" checked={state.pick.id === c.id} onChange={() => setState((p) => ({ ...p, pick: { ...p.pick, id: c.id } }))} /> {c.id}
                </label>
              ))}
              <textarea className={s.notes} aria-label="Why this pick" placeholder="Why this one wins…" value={state.pick.reason} onChange={(e) => setState((p) => ({ ...p, pick: { ...p.pick, reason: e.target.value } }))} />
            </div>
          )}
        </fieldset>

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
          <legend>{isMotion ? 'Motion' : 'Props'} · concept {concept.id}</legend>
          {(() => {
            const rows = entry.props.map((d) => (
              <PropControl key={d.name} def={d} value={concept.props[d.name]} spring={concept.springs[`prop:${d.name}`]} easingPresets={easingPresets}
                onChange={(v) => setPropFor(concept.id)(d.name, v)}
                onSpring={(easing, sp, settle) => editActive((c) => {
                  const springs = { ...c.springs };
                  const props = { ...c.props, [d.name]: easing };
                  if (sp) { springs[`prop:${d.name}`] = sp; if (d.durationProp) props[d.durationProp] = settle; } else delete springs[`prop:${d.name}`];
                  return { ...c, springs, props };
                })} />
            ));
            // state sits fourth (Levi, 2026-10-07), or last on a shorter list
            if (!isMotion) rows.splice(Math.min(3, rows.length), 0, (
              <div key="state" className={s.prop}><label htmlFor="p-state"><code>state</code></label>
                <select id="p-state" value={hasDisabled && concept.props.disabled ? 'disabled' : force} onChange={(e) => setStageState(e.target.value)}>
                  {FORCE_STATES.map((f) => <option key={f} value={f}>{f === 'rest' ? 'default' : f}</option>)}
                  {hasDisabled && <option value="disabled">disabled</option>}
                </select></div>
            ));
            return rows;
          })()}
        </fieldset>

        <fieldset className={s.group} disabled={SNAPSHOT}>
          <legend>Sound · {entry.trigger}</legend>
          <div className={s.prop}><label htmlFor="s-vol"><code>volume</code></label>
            <input id="s-vol" type="range" min="0" max="1" step="0.05" value={concept.sound.volume} onChange={(e) => setSound('volume', +e.target.value)} /><span className={s.readout}>{concept.sound.volume}</span></div>
          <div className={s.prop}><label htmlFor="s-rate"><code>pitch</code></label>
            <input id="s-rate" type="range" min="0.5" max="2" step="0.05" value={concept.sound.rate} onChange={(e) => setSound('rate', +e.target.value)} /><span className={s.readout}>{concept.sound.rate}×</span></div>
          <div className={s.prop}><label htmlFor="s-short"><code>under 1 s only</code></label>
            <input id="s-short" type="checkbox" checked={shortOnly} onChange={(e) => setShortOnly(e.target.checked)} /></div>
          <ul className={s.sounds} aria-label="Sound candidates">
            <li className={s.sound}><label><input type="radio" name="sound" checked={!concept.sound.file} onChange={() => setSound('file', null)} /> silent</label></li>
            {(SNAPSHOT ? (concept.sound.file ? [{ file: concept.sound.file, seconds: '' }] : []) : sounds).map((m) => (
              <li key={m.file} className={`${s.sound} ${m.file === entry.shippedSound ? s.shippedSound : ''}`}>
                <label>
                  <input type="radio" name="sound" checked={concept.sound.file === m.file} onChange={() => { setSound('file', m.file); playFile(m.file, concept.sound.volume, concept.sound.rate); }} />
                  {m.file.replace(/\.(wav|mp3)$/, '')}
                </label>
                <span className={s.readout}>{m.seconds && `${m.seconds}s`}{m.file === entry.shippedSound ? ' · shipped' : ''}</span>
                <button type="button" aria-label={`Play ${m.file}`} onClick={() => playFile(m.file, concept.sound.volume, concept.sound.rate)}>play</button>
              </li>
            ))}
          </ul>
        </fieldset>

        {!isMotion && <p className={s.meta}>{changedCount} of {tokens.length} tokens tuned in concept {concept.id}, {theme} mode. Colour and shadow edits apply to {theme} only; size, type and motion apply to both modes.</p>}
        {Object.entries(groups).map(([cat, names]) => (
          <fieldset key={cat} className={s.group} disabled={SNAPSHOT}>
            <legend>{cat} · {names.length}</legend>
            {names.map((n) => (
              <TokenControl
                key={`${concept.id}${theme}${n}`}
                name={n}
                kind={classify(shipped[n])}
                shipped={shipped[n]}
                value={tuned[n] || shipped[n] || ''}
                override={conceptEff[n]}
                scope={concept.overrides[scopeOf(n, theme)][n] !== undefined ? scopeOf(n, theme) : (concept.overrides.all[n] !== undefined ? 'all' : null)}
                adj={concept.shadowAdj[scopeOf(n, theme)]?.[n]}
                spring={concept.springs[n]}
                pin={concept.pins[n]}
                refs={PRIM[classify(shipped[n])]}
                easingPresets={easingPresets}
                onSet={(v) => setOverride(n, v)}
                onAdj={(a) => setShadowAdj(n, a)}
                onSpring={(sp, settle) => setSpring(n, sp, settle)}
                onReset={() => resetOverride(n)}
                restOf={n.endsWith('-hover') && tokens.includes(n.slice(0, -6)) ? n.slice(0, -6) : null}
                onCopyRest={() => setOverride(n, tuned[n.slice(0, -6)] || shipped[n.slice(0, -6)])}
                onPin={(t) => setPin(n, t)}
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

function springToLinearMeta(sp) {
  const r = springToLinear(sp);
  return { settleMs: r.settleMs, overshoot: round(r.overshoot, 3), framerMotion: { type: 'spring', stiffness: sp.stiffness, damping: sp.damping, mass: sp.mass } };
}

/* An unregistered ?c= name says so. It used to fall back to the Switch,
   so a mistyped or missing entry silently opened (and saved into) the
   Switch session. */
function NoEntry({ name }) {
  return (
    <div className={s.app}>
      <header className={s.bar}>
        <span className={s.brand}>sc-tune</span>
        <select aria-label="Subject" value="" onChange={(e) => { location.search = `?c=${e.target.value}`; }}>
          <option value="" disabled>choose a subject</option>
          {Object.keys(REGISTRY).map((c) => <option key={c}>{c}</option>)}
        </select>
      </header>
      <main className={s.stages}>
        <p className={s.meta} role="alert">no lab entry for {name}</p>
      </main>
    </div>
  );
}

function Lab() {
  const asked = new URLSearchParams(location.search).get('c');
  if (!SNAPSHOT && asked !== null && !Object.hasOwn(REGISTRY, asked)) return <NoEntry name={asked} />;
  return <Tune />;
}

// Guard: a snapshot served through the dev server can evaluate twice.
const host = document.getElementById('root');
if (!host.dataset.mounted) {
  host.dataset.mounted = 'true';
  ReactDOM.createRoot(host).render(<Lab />);
}
