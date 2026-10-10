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

import React, { Profiler, useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { SoundProvider } from '../../src/sound/SoundProvider.jsx';
import tokensCss from '../../src/styles/tokens.css?raw';
import '../../src/styles/fonts.css';
import '../../src/styles/tokens.css';
import '../../src/styles/reset.css';
import { REGISTRY, GROUP_ORDER, lastFrameMs } from './registry.jsx';
import { TokenControl, PropControl, round, short, stepsFor, toMs } from './controls.jsx';
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
// Undo covers the document (concepts, notes, pick), never the view (theme,
// zoom, compare, blind, collapsed, panel width), so ⌘Z never flips the theme.
const HISTORY = 50;
const docOf = (st) => ({ notes: st.notes, concepts: st.concepts, pick: st.pick });
const sameDoc = (a, b) => a.notes === b.notes && a.concepts === b.concepts && a.pick === b.pick;
const ARM_MS = 3000;
// An easing token with no paired -duration previews at this length.
const EASING_PREVIEW_MS = 600;

/* ---------- token discovery ---------- */

const uniq = (a) => [...new Set(a)];
const PRIMITIVES = uniq(tokensCss.match(/--sc-p-[a-z0-9-]+(?=\s*:)/g) || []);
const PRIM = {
  color: PRIMITIVES.filter((n) => n.startsWith('--sc-p-color-') && !n.endsWith('-rgb')),
  length: PRIMITIVES.filter((n) => /^--sc-p-(space|size|radius|border-width)-/.test(n)),
  time: PRIMITIVES.filter((n) => n.startsWith('--sc-p-motion-duration-')),
};
const EASING_NAMES = PRIMITIVES.filter((n) => n.startsWith('--sc-p-motion-easing-'));
const FONT_SIZES = PRIMITIVES.filter((n) => n.startsWith('--sc-p-font-size-'));
// The ladder each length or time control is checked against (P4.4): the
// same primitives its `token…` select offers, resolved once to px or ms.
// Font sizes check against the type scale, icon sizes against their steps.
let LADDERS = null;
function laddersOf() {
  if (LADDERS) return LADDERS;
  const cs = getComputedStyle(document.documentElement);
  const read = (names, unit) => names.map((name) => {
    const raw = cs.getPropertyValue(name).trim();
    return { name, v: unit === 'ms' ? toMs(raw) : parseFloat(raw) };
  }).filter((p) => Number.isFinite(p.v) && (unit === 'ms' || /px$/.test(cs.getPropertyValue(p.name).trim())));
  LADDERS = { length: read(PRIM.length, 'px'), time: read(PRIM.time, 'ms'), font: read(FONT_SIZES, 'px') };
  return LADDERS;
}
const ladderFor = (name, kind) => {
  if (kind === 'time') return laddersOf().time;
  if (kind !== 'length') return null;
  const steps = stepsFor(name);
  if (!steps) return laddersOf().length;
  if (/^--sc-font-/.test(name)) return laddersOf().font;
  return laddersOf().length.filter((p) => steps.some(([, , prim]) => prim === p.name));
};

function discover(cssList) {
  const css = cssList.join('\n');
  const tokens = uniq(css.match(/var\((--sc-[a-z0-9-]+)/g)?.map((m) => m.slice(4)) || []);
  const derived = uniq(css.match(/(?<![\w-])--(?!sc-)[a-z][a-z0-9-]*(?=\s*:)/g) || []);
  return { tokens: tokens.sort(), derived };
}

const category = (name) => name.match(/^--sc-(color|size|space|radius|border|shadow|motion|font)/)?.[1] || 'other';
const GROUND_OPTIONS = ['--sc-color-surface-page', '--sc-color-surface-raised', '--sc-color-surface-sunk', '--sc-color-surface-floating'];
// A key typed into a field belongs to the field, not to a lab shortcut.
const typingIn = (el) => el?.closest?.('input:not([type=range]):not([type=checkbox]):not([type=radio]), textarea, select, [contenteditable="true"]');
const prefersReducedMotion = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
// Panel width (P1.6), in rem: default 34, never under 26 or over half the window.
const PANEL_DEFAULT = 34;
const PANEL_MIN = 26;
const remPx = () => parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
const panelMax = () => Math.max(PANEL_MIN, (window.innerWidth * 0.5) / remPx());
const clampPanel = (w) => Math.min(panelMax(), Math.max(PANEL_MIN, w));
// The keyboard step is space-16, read from the token so it moves with the scale.
const panelStep = () => (parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--sc-p-space-16')) || 16) / remPx();

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

const sameMap = (a, b) => {
  const ka = Object.keys(a);
  return ka.length === Object.keys(b).length && ka.every((k) => a[k] === b[k]);
};

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
// Memoised per (state, stylesheet count) (P5.3, A-20): a slider drag while
// `hover` is forced never re-walks the sheets; a hot reload adds a sheet.
const forceCache = new Map();
function forceStateCss(state) {
  const key = `${state}:${document.styleSheets.length}`;
  if (!forceCache.has(key)) forceCache.set(key, walkForceState(state));
  return forceCache.get(key);
}
function walkForceState(state) {
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

/* Every override carries where it came from (P2.3): `user` (a control),
   `seed` (the registry's lab start), `spring` (a spring wrote its paired
   duration) or `copy` (`copy rest` took a sibling's value). It lives beside
   the override as c.origin[mode][name] and is written to the export per
   token. Only non-seed overrides count as changes. */
const originOf = (c, name, theme) =>
  (c.overrides[theme]?.[name] !== undefined ? c.origin?.[theme]?.[name] : c.origin?.all?.[name]) || 'user';

// The registry seed per mode, as the values seedConcept writes.
function seedValues(entry) {
  const v = scoped();
  const springs = {};
  for (const [name, value] of Object.entries(entry.seed?.overrides || {})) v.all[name] = value;
  for (const [mode, map] of Object.entries(entry.seed?.scoped || {})) Object.assign(v[mode], map);
  for (const [name, sp] of Object.entries(entry.seed?.springs || {})) {
    const r = springToLinear(sp);
    springs[name] = sp;
    v.all[name] = r.easing;
    v.all[name.replace(/-easing$/, '-duration')] = `${r.settleMs}ms`;
  }
  return { values: v, springs };
}

// A registry `seed` is where a new setting starts in the lab when its shipped
// value is deliberately inert (the Switch's reel motion ships at 0, so the
// component is unchanged until Levi records a concept). It fills only tokens
// the concept has not touched; a spring seeds its easing and paired duration.
function seedConcept(entry, c) {
  c.origin ||= scoped();
  const put = (mode, name, value) => { c.overrides[mode][name] = value; c.origin[mode][name] = 'seed'; };
  for (const [name, value] of Object.entries(entry.seed?.overrides || {})) {
    if (!Object.values(c.overrides).some((m) => name in m)) put('all', name, value);
  }
  // Per-mode seeds (a shadow or colour whose start differs in light and dark).
  for (const [mode, map] of Object.entries(entry.seed?.scoped || {})) {
    for (const [name, value] of Object.entries(map)) {
      if (!(name in c.overrides[mode]) && !(name in c.overrides.all)) put(mode, name, value);
    }
  }
  for (const [name, sp] of Object.entries(entry.seed?.springs || {})) {
    if (c.springs[name] || Object.values(c.overrides).some((m) => name in m)) continue;
    const r = springToLinear(sp);
    c.springs[name] = sp;
    put('all', name, r.easing);
    put('all', name.replace(/-easing$/, '-duration'), `${r.settleMs}ms`);
  }
  return c;
}

// Sessions saved before origin existed: a value equal to the registry seed is
// `seed`, a value with a springs entry (or the duration paired to one) is
// `spring`, anything else is `user`.
function backfillOrigin(entry, c) {
  if (c.origin) { for (const m of MODES) c.origin[m] ||= {}; return c; }
  const seeds = seedValues(entry).values;
  c.origin = scoped();
  for (const mode of MODES) {
    for (const [name, value] of Object.entries(c.overrides[mode] || {})) {
      const springPair = name.endsWith('-duration') && c.springs[name.replace(/-duration$/, '-easing')];
      c.origin[mode][name] = seeds[mode][name] === value ? 'seed' : (c.springs[name] || springPair) ? 'spring' : 'user';
    }
  }
  return c;
}
const blankConcept = (entry, id) => seedConcept(entry, {
  id, overrides: scoped(), origin: scoped(), shadowAdj: scoped(), springs: {}, pins: {}, notes: '',
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
    view: { theme: 'light', zoom: entry.kind === 'motion' ? 1 : 2, ground: '--sc-color-surface-page', compare: false, blind: false, order: null, slow: 1, collapsed: {}, panelWidth: PANEL_DEFAULT },
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
      for (const c of saved.concepts) seedConcept(REGISTRY[component], backfillOrigin(REGISTRY[component], c));
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
  const [filter, setFilter] = useState('');
  const [changedOnly, setChangedOnly] = useState(false);
  const filterRef = useRef(null);
  const panelRef = useRef(null);
  const appRef = useRef(null);
  const railRef = useRef(null);
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
    const next = loadState(c);
    setComponent(c);
    setState(next);
    resetHistory(next);
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
    const base = readVars(shippedRef.current, tokens);
    // Shipped moves only with the theme or the subject; keeping the old
    // object when nothing moved spares every card a re-render (P5.1).
    setShipped((prev) => (sameMap(prev, base) ? prev : base));
    shippedByMode.current[state.view.theme] = base;
    const next = { ...base, ...resolveOverrides(shippedRef.current, effective(concept, state.view.theme)) };
    setTuned((prev) => (sameMap(prev, next) ? prev : next));
    const node = activeRef.current?.querySelector('[class]');
    setDerived(resolveLengths(node ? (node.closest('label') || node) : null, derivedNames));
  }, [tokens, derivedNames, concept.overrides, state.view.theme, concept.props]);

  // Autosave, and say so (P2.4): `saving…` for the debounce window, `saved`
  // after the write, `storage blocked` when the write throws.
  const [save, setSave] = useState('saved');
  useEffect(() => {
    if (SNAPSHOT) return;
    setSave('saving');
    const t = setTimeout(() => {
      try {
        localStorage.setItem(storageKey(component), JSON.stringify({ ...state, updated: new Date().toISOString() }));
        setSave('saved');
      } catch { setSave('blocked'); }
    }, 150);
    return () => clearTimeout(t);
  }, [state, component]);

  /* ----- undo / redo (P2.1) -----
     A ring of the last 50 documents, captured on the autosave's 150 ms
     debounce. `head` is the document on screen; a change the staged
     component makes itself (a click on the Switch, Play) folds into the head
     rather than becoming a step. */
  const stateRef = useRef(state);
  stateRef.current = state;
  const hist = useRef(null);
  if (!hist.current) hist.current = { past: [], future: [], head: docOf(state), transient: false };
  const [histCounts, setHistCounts] = useState({ undo: 0, redo: 0 });
  const syncCounts = () => setHistCounts({ undo: hist.current.past.length, redo: hist.current.future.length });
  const resetHistory = (st) => { hist.current = { past: [], future: [], head: docOf(st), transient: false }; syncCounts(); };
  const commitHistory = () => {
    const h = hist.current;
    const cur = docOf(stateRef.current);
    if (sameDoc(cur, h.head)) { h.transient = false; return; }
    if (!h.transient) {
      h.past.push(h.head);
      if (h.past.length > HISTORY) h.past.shift();
      h.future = [];
    }
    h.head = cur;
    h.transient = false;
    syncCounts();
  };
  useEffect(() => {
    if (SNAPSHOT) return;
    const t = setTimeout(commitHistory, 150);
    return () => clearTimeout(t);
  }, [state.notes, state.concepts, state.pick]); // eslint-disable-line react-hooks/exhaustive-deps
  const applyDoc = (doc) => setState((p) => ({ ...p, ...doc, active: doc.concepts.some((c) => c.id === p.active) ? p.active : doc.concepts[0].id }));
  const undo = () => {
    if (SNAPSHOT) return;
    commitHistory();
    const h = hist.current;
    if (!h.past.length) return;
    h.future.push(h.head);
    h.head = h.past.pop();
    applyDoc(h.head);
    syncCounts();
  };
  const redo = () => {
    if (SNAPSHOT) return;
    commitHistory();
    const h = hist.current;
    if (!h.future.length) return;
    h.past.push(h.head);
    h.head = h.future.pop();
    applyDoc(h.head);
    syncCounts();
  };
  const undoRef = useRef(null);
  undoRef.current = { undo, redo };
  useEffect(() => {
    const onKey = (e) => {
      if (!(e.metaKey || e.ctrlKey) || e.altKey) return;
      const k = e.key.toLowerCase();
      const isRedo = (k === 'z' && e.shiftKey) || (k === 'y' && !e.shiftKey);
      if (k !== 'z' && !isRedo) return;
      // The filter's text is not part of the document; let it keep its own undo.
      if (e.target?.matches?.('input[type=search]')) return;
      e.preventDefault();
      if (isRedo) undoRef.current.redo(); else undoRef.current.undo();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* ----- arming (P2.2) -----
     `Reset all` and `remove X` arm on the first click (`Reset all?`) and act
     on the second within 3 s; a click anywhere else, or Esc, disarms. No
     dialogs. */
  const [armed, setArmed] = useState(null);
  useEffect(() => {
    if (!armed) return;
    const t = setTimeout(() => setArmed(null), ARM_MS);
    const away = (e) => { if (!e.target.closest?.(`[data-arm="${armed}"]`)) setArmed(null); };
    const esc = (e) => { if (e.key === 'Escape') setArmed(null); };
    document.addEventListener('pointerdown', away, true);
    document.addEventListener('keydown', esc);
    return () => { clearTimeout(t); document.removeEventListener('pointerdown', away, true); document.removeEventListener('keydown', esc); };
  }, [armed]);
  const armed2 = (key, act) => () => { if (armed === key) { setArmed(null); act(); } else setArmed(key); };

  /* ----- state updates ----- */
  const mutate = useCallback((fn) => setState((prev) => (SNAPSHOT ? prev : fn(prev))), []);
  const updConcept = useCallback((id, fn) => setState((prev) => ({ ...prev, concepts: prev.concepts.map((c) => (c.id === id ? fn(c) : c)) })), []);
  const setPropFor = useCallback((id) => (name, value) => updConcept(id, (c) => ({ ...c, props: { ...c.props, [name]: value } })), [updConcept]);
  // A prop the staged component sets itself (a click on it, Play) is not an
  // edit: it folds into the current undo step.
  const stagePropFor = useCallback((id) => (name, value) => { hist.current.transient = true; setPropFor(id)(name, value); }, [setPropFor]);
  const editActive = (fn) => mutate((prev) => ({ ...prev, concepts: prev.concepts.map((c) => (c.id === prev.active ? fn(c) : c)) }));
  const theme = state.view.theme;
  const putScoped = (map, name, value) => {
    const sc = scopeOf(name, theme);
    const next = { ...map, [sc]: { ...map[sc] } };
    if (value === undefined) delete next[sc][name]; else next[sc][name] = value;
    return next;
  };
  const seeds = useMemo(() => seedValues(entry), [entry]);
  const setOverride = (name, value, origin = 'user') => editActive((c) => ({
    ...c, overrides: putScoped(c.overrides, name, value), origin: putScoped(c.origin || scoped(), name, origin),
  }));
  // `reset` returns a token to where it started: the registry seed when it
  // has one (as a reload would), else the shipped value.
  const resetOverride = (name) => editActive((c) => {
    const sc = scopeOf(name, theme);
    const seed = seeds.values[sc][name];
    const sp = { ...c.springs }; delete sp[name];
    if (seed !== undefined && seeds.springs[name]) sp[name] = seeds.springs[name];
    return {
      ...c,
      overrides: putScoped(c.overrides, name, seed),
      origin: putScoped(c.origin || scoped(), name, seed === undefined ? undefined : 'seed'),
      shadowAdj: putScoped(c.shadowAdj, name, undefined),
      springs: sp,
    };
  });
  // On a seeded card: `shipped` sets the shipped value (a decision, so `user`).
  const shipToken = (name) => editActive((c) => {
    const sp = { ...c.springs }; delete sp[name];
    return { ...c, overrides: putScoped(c.overrides, name, shipped[name]), origin: putScoped(c.origin || scoped(), name, 'user'), shadowAdj: putScoped(c.shadowAdj, name, undefined), springs: sp };
  });
  const setSpring = (name, sp, settle) => editActive((c) => {
    const springs = { ...c.springs };
    let overrides = c.overrides;
    let origin = c.origin || scoped();
    if (sp) {
      springs[name] = sp;
      const pair = name.replace(/-easing$/, '-duration');
      if (pair !== name && tokens.includes(pair)) { overrides = putScoped(overrides, pair, `${settle}ms`); origin = putScoped(origin, pair, 'spring'); }
    } else delete springs[name];
    return { ...c, springs, overrides, origin };
  });
  const setShadowAdj = (name, adj) => editActive((c) => ({
    ...c, shadowAdj: putScoped(c.shadowAdj, name, adj),
    overrides: putScoped(c.overrides, name, adjustShadow(shipped[name], adj.scale ?? 1, adj.strength ?? 1)),
    origin: putScoped(c.origin || scoped(), name, 'user'),
  }));
  const setPin = (name, text) => editActive((c) => ({ ...c, pins: { ...c.pins, [name]: text } }));
  const setSound = (k, v) => editActive((c) => ({ ...c, sound: { ...c.sound, [k]: v } }));

  /* One stable dispatcher per control kind (P5.1, A-18): a card calls
     onToken(name, action, payload) and the lab routes it to this render's
     handlers, so memoised cards never see a new callback. */
  const tokenHandlers = {
    set: (n, v) => setOverride(n, v),
    adj: (n, a) => setShadowAdj(n, a),
    easing: (n, { easing, sp, settle }) => { setOverride(n, easing); setSpring(n, sp, settle); },
    reset: (n) => resetOverride(n),
    shipped: (n) => shipToken(n),
    copyRest: (n) => setOverride(n, tuned[n.slice(0, -6)] || shipped[n.slice(0, -6)], 'copy'),
    pin: (n, t) => setPin(n, t),
  };
  const propHandlers = {
    set: (n, v) => setPropFor(concept.id)(n, v),
    spring: (n, { easing, sp, settle }) => editActive((c) => {
      const d = entry.props.find((x) => x.name === n);
      const springs = { ...c.springs };
      const props = { ...c.props, [n]: easing };
      if (sp) { springs[`prop:${n}`] = sp; if (d?.durationProp) props[d.durationProp] = settle; } else delete springs[`prop:${n}`];
      return { ...c, springs, props };
    }),
  };
  const handlersRef = useRef(null);
  handlersRef.current = { token: tokenHandlers, prop: propHandlers };
  const onToken = useCallback((n, action, payload) => { if (!SNAPSHOT) handlersRef.current.token[action](n, payload); }, []);
  const onProp = useCallback((n, action, payload) => { if (!SNAPSHOT) handlersRef.current.prop[action](n, payload); }, []);
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
  const selectConcept = (id) => setState((p) => ({ ...p, active: id }));
  const toggleBlind = () => setState((p) => {
    const blind = !p.view.blind;
    const order = blind ? [...p.concepts.map((c) => c.id)].sort(() => Math.random() - 0.5) : null;
    return { ...p, view: { ...p.view, blind, order, compare: blind ? true : p.view.compare } };
  });

  /* ----- motion ----- */
  const play = useCallback(() => {
    setReplay((r) => r + 1);
    if (entry.play) state.concepts.forEach((c) => entry.play(c.props, stagePropFor(c.id)));
    const active = state.concepts.find((c) => c.id === state.active);
    if (active?.sound.file) playFile(active.sound.file, active.sound.volume, active.sound.rate);
  }, [entry, state.concepts, state.active, stagePropFor]);

  const cycleMs = isMotion ? Math.max(1200, lastFrameMs(concept.props) * state.view.slow + 900) : 1400 * state.view.slow;
  useEffect(() => {
    if (!loop) return;
    const t = setInterval(play, cycleMs);
    return () => clearInterval(t);
  }, [loop, play, cycleMs]);

  // Slow-mo multiplies every time token on every stage; it never reaches the spec.
  const timeTokens = tokens.filter((t) => classify(shipped[t]) === 'time');
  // One ground for every stage (P1.5). A ground is a surface token, so it
  // follows the theme. A raw colour (a candidate page, previewed as
  // surface.page inside the stage) is a light-mode candidate: in dark the
  // stages fall back to the dark page.
  const g = state.view.ground;
  const rawGround = !g.startsWith('--') && state.view.theme !== 'dark';
  const groundStyle = g.startsWith('--') ? { background: `var(${g})` }
    : rawGround ? { background: g } : { background: 'var(--sc-color-surface-page)' };
  const stageStyle = (overrides) => {
    const style = { zoom: state.view.zoom, ...(rawGround ? { '--sc-color-surface-page': g } : {}), ...overrides };
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
              name, mode, origin: c.origin?.[mode]?.[name] || 'user', category: category(name), kind: classify(base[name] || shipped[name]),
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
    return GROUP_ORDER.filter((cat) => g[cat]).map((cat) => [cat, g[cat]]);
  }, [tokens]);

  /* ----- panel width (P1.6) ----- */
  const panelWidth = clampPanel(state.view.panelWidth ?? PANEL_DEFAULT);
  const dragPanel = (e) => {
    if (e.button !== 0) return;
    e.preventDefault();
    const handle = e.currentTarget;
    handle.setPointerCapture(e.pointerId);
    let w = panelWidth;
    // While dragging, only the CSS variable moves; the state (and autosave)
    // takes the final width on release.
    const move = (ev) => {
      w = clampPanel((appRef.current.getBoundingClientRect().right - ev.clientX) / remPx());
      appRef.current.style.setProperty('--panel-w', `${w}rem`);
    };
    const up = () => {
      handle.removeEventListener('pointermove', move);
      handle.removeEventListener('pointerup', up);
      handle.removeEventListener('pointercancel', up);
      setView('panelWidth', +w.toFixed(3));
    };
    handle.addEventListener('pointermove', move);
    handle.addEventListener('pointerup', up);
    handle.addEventListener('pointercancel', up);
  };
  const keyPanel = (e) => {
    const step = panelStep();
    const next = { ArrowLeft: panelWidth + step, ArrowRight: panelWidth - step, Home: PANEL_MIN, End: panelMax() }[e.key];
    if (next === undefined) return;
    e.preventDefault();
    setView('panelWidth', +clampPanel(next).toFixed(3));
  };

  /* ----- panel map: rail, filter, collapse ----- */
  // Collapse lives in view state, so it persists with the session and is
  // never undone. Every group opens by default except Sound (F-08).
  const collapsed = state.view.collapsed || {};
  const isOpen = (g) => !(collapsed[g] ?? g === 'sound');
  const setOpen = (g, open) => setState((p) => ({ ...p, view: { ...p.view, collapsed: { ...(p.view.collapsed || {}), [g]: !open } } }));
  const jumpTo = (g) => {
    setOpen(g, true);
    requestAnimationFrame(() => requestAnimationFrame(() => {
      const panel = panelRef.current;
      const el = panel?.querySelector(`[data-group="${g}"]`);
      if (!el) return;
      const behavior = prefersReducedMotion() ? 'auto' : 'smooth';
      const rail = railRef.current?.offsetHeight || 0;
      // Under 900 px the page scrolls beneath a sticky stage (P5.4); above
      // it, the panel scrolls on its own.
      if (getComputedStyle(panel).overflowY === 'visible') {
        const stage = appRef.current?.querySelector('main')?.offsetHeight || 0;
        window.scrollTo({ top: window.scrollY + el.getBoundingClientRect().top - stage - rail, behavior });
        return;
      }
      const top = panel.scrollTop + el.getBoundingClientRect().top - panel.getBoundingClientRect().top - rail;
      panel.scrollTo({ top, behavior });
    }));
  };
  const [keysOpen, setKeysOpen] = useState(false);
  const playRef = useRef(null);
  playRef.current = play;
  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey || typingIn(e.target)) return;
      if (e.key === 'Escape') { setKeysOpen(false); return; }
      if (e.key === 'p' || e.key === 'P') { e.preventDefault(); playRef.current(); return; }
      if (e.key !== '/') return;
      e.preventDefault();
      filterRef.current?.focus();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  /* ----- stages ----- */
  const stageConcepts = state.view.compare
    ? (state.view.blind && state.view.order ? state.view.order.map((id) => state.concepts.find((c) => c.id === id)).filter(Boolean) : state.concepts)
    : [concept];
  const ctx = { replay, slow: state.view.slow };
  const sounds = manifest.filter((m) => !shortOnly || m.seconds <= 1);
  const conceptEff = effective(concept, state.view.theme);
  // Seeds are the lab's start, not decisions: never counted as changes.
  const isChanged = (n) => conceptEff[n] !== undefined && originOf(concept, n, theme) !== 'seed';
  const changedCount = Object.keys(conceptEff).filter(isChanged).length;
  const q = filter.trim().toLowerCase();
  const filtering = !!q || changedOnly;
  const matches = (n) => !q || n.replace(/^--(sc-)?/, '').toLowerCase().includes(q);
  const shows = (n) => matches(n) && (!changedOnly || isChanged(n));
  const soundSeconds = manifest.find((m) => m.file === concept.sound.file)?.seconds;

  return (
    <div className={s.app} ref={appRef} style={{ '--panel-w': `${panelWidth}rem` }}>
      {/* Header = session and view; panel = the active concept (P1.1).
          Row one is the session, row two the view of every stage. Clusters
          wrap as units, never mid-cluster. */}
      <header className={s.bar}>
        <div className={s.barRow}>
        <span className={s.cluster}>
          <h1 className={s.brand}>sc-tune</h1>
          <select aria-label="Subject" value={component} disabled={SNAPSHOT} onChange={(e) => switchTo(e.target.value)}>
            {Object.keys(REGISTRY).map((c) => <option key={c}>{c}</option>)}
          </select>
          <span className={s.meta}>{isMotion ? 'choreography' : `${tokens.length} tokens`} · {state.concepts.length} concept{state.concepts.length > 1 ? 's' : ''}</span>
          {snapshotMeta && <span className={s.meta}>snapshot · recorded {snapshotMeta.recorded}</span>}
          {!SNAPSHOT && <span className={s.meta} role={save === 'blocked' ? 'alert' : undefined}>· {{ saved: 'saved', saving: 'saving…', blocked: 'storage blocked' }[save]}</span>}
        </span>
        <span className={s.spacer} />
        {!SNAPSHOT && (
          <span className={s.cluster}>
            <button type="button" aria-label={`Undo, ${histCounts.undo} step${histCounts.undo === 1 ? '' : 's'}`} disabled={!histCounts.undo} onClick={undo}>undo · {histCounts.undo}</button>
            <button type="button" aria-label={`Redo, ${histCounts.redo} step${histCounts.redo === 1 ? '' : 's'}`} disabled={!histCounts.redo} onClick={redo}>redo · {histCounts.redo}</button>
            <button type="button" onClick={() => { navigator.clipboard?.writeText(JSON.stringify(exportSpec(), null, 2)).then(() => { setCopied(true); setTimeout(() => setCopied(false), 1500); }); }}>{copied ? 'Copied' : 'Copy spec'}</button>
            <button type="button" data-arm="reset" data-armed={armed === 'reset' || undefined} onClick={armed2('reset', () => mutate(() => freshState(component)))}>{armed === 'reset' ? 'Reset all?' : 'Reset all'}</button>
          </span>
        )}
        {/* The shortcuts, one line each (P4.5, A-16). */}
        <span className={s.keysWrap}>
          <button type="button" className={s.keysButton} aria-expanded={keysOpen} aria-controls="sc-tune-keys" aria-label="Keyboard shortcuts" onClick={() => setKeysOpen((o) => !o)}>?</button>
          <dl id="sc-tune-keys" className={s.keys} hidden={!keysOpen}>
            <div><dt><kbd>/</kbd></dt><dd>filter tokens</dd></div>
            <div><dt><kbd>⌘Z</kbd> · <kbd>⇧⌘Z</kbd></dt><dd>undo · redo</dd></div>
            <div><dt><kbd>P</kbd></dt><dd>play</dd></div>
          </dl>
        </span>
        </div>
        <div className={s.barRow}>
        <span className={s.cluster}>
          <button type="button" onClick={play}>Play</button>
          <button type="button" aria-pressed={loop} onClick={() => setLoop((l) => !l)}>{loop ? 'Stop loop' : 'Loop'}</button>
          <select aria-label="Slow motion" value={state.view.slow} onChange={(e) => setView('slow', +e.target.value)}>
            <option value={1}>1×</option><option value={2}>½×</option><option value={4}>¼×</option><option value={10}>⅒×</option>
          </select>
        </span>
        <span className={s.cluster}>
          <span className={s.themeCtl}>
            <select aria-label="Theme" disabled={SNAPSHOT} value={state.view.theme} onChange={(e) => setView('theme', e.target.value)}><option>light</option><option>dark</option></select>
            {!isMotion && <span className={s.note}>colour, shadow: {theme} only · size, type, motion: both</span>}
          </span>
          <label className={s.mini}>zoom
            <input type="range" className={s.zoom} min="1" max="8" step="0.5" disabled={SNAPSHOT} value={state.view.zoom} onChange={(e) => setView('zoom', +e.target.value)} />
            <span className={s.readout}>{state.view.zoom}×</span>
          </label>
          <label className={s.mini}>ground
            <select disabled={SNAPSHOT} value={state.view.ground} onChange={(e) => setView('ground', e.target.value)}>
              {!GROUND_OPTIONS.includes(state.view.ground) && <option value={state.view.ground}>{state.view.ground}</option>}
              {GROUND_OPTIONS.map((g) => <option key={g} value={g}>{g.replace('--sc-color-', '')}</option>)}
            </select>
          </label>
          <button type="button" aria-pressed={state.view.compare} disabled={state.concepts.length < 2} onClick={() => setView('compare', !state.view.compare)}>Compare</button>
          <button type="button" aria-pressed={state.view.blind} disabled={state.concepts.length < 2} onClick={toggleBlind}>{state.view.blind ? 'Reveal' : 'Blind'}</button>
        </span>
        </div>
      </header>

      <main className={s.main}>
        {/* The stage strip mirrors the panel's concept tabs (P1.7): same
            component, same state. Hidden in blind mode, which hides names. */}
        {!state.view.blind && (
          <div className={s.strip}>
            <span className={s.stripShipped}>{isMotion ? 'Default' : 'Shipped'}</span>
            <ConceptTabs label="Concept on stage" concepts={state.concepts} active={state.active} pickId={state.pick.id} onSelect={selectConcept} />
          </div>
        )}
        {/* Stages size to their component at the current zoom, plus one
            layout-inset-sm on every side, and wrap on one shared ground (P1.5). */}
        <div className={s.stages} style={groundStyle}>
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
              <section key={c.id} className={`${s.stageWrap} ${c.id === state.active && !state.view.blind && stageConcepts.length > 1 ? s.activeStage : ''}`} aria-label={label}>
                <h2 className={s.stageLabel}>
                  {label}
                  {isMotion && <span className={s.readout}> · last frame {lastFrameMs(c.props)}ms</span>}
                </h2>
                <div className={s.stage} style={stageStyle(effective(c, theme))} ref={c.id === state.active ? activeRef : undefined} data-force={force}>
                  {entry.render(c.props, stagePropFor(c.id), () => playFile(c.sound.file, c.sound.volume, c.sound.rate), ctx)}
                </div>
              </section>
            );
          })}
        </SoundProvider>
        </div>
      </main>

      <div className={s.handle} role="separator" tabIndex={0} aria-orientation="vertical" aria-label="Panel width"
        aria-valuemin={PANEL_MIN} aria-valuemax={Math.round(panelMax())} aria-valuenow={Math.round(panelWidth)} aria-valuetext={`${+panelWidth.toFixed(1)} rem`}
        onPointerDown={dragPanel} onKeyDown={keyPanel} />

      <aside className={s.panel} ref={panelRef}>
        {(groups.length > 0 || derivedNames.length > 0) && (
          <div className={s.rail} ref={railRef}>
            <nav className={s.railChips} aria-label="Token groups">
              {groups.map(([cat, names]) => {
                const ch = names.filter(isChanged).length;
                return (
                  <button key={cat} type="button" className={s.chip} disabled={!names.some(shows)}
                    aria-label={`${cat}, ${names.length} tokens${ch ? `, ${ch} changed` : ''}`} onClick={() => jumpTo(cat)}>
                    {cat} · {names.length}{ch > 0 && <span className={s.chipChanged}> · {ch}</span>}
                  </button>
                );
              })}
              {derivedNames.length > 0 && (
                <button type="button" className={s.chip} disabled={changedOnly || !derivedNames.some(matches)}
                  aria-label={`derived, ${derivedNames.length} read-only`} onClick={() => jumpTo('derived')}>derived · {derivedNames.length}</button>
              )}
            </nav>
            <div className={s.filters}>
              <input ref={filterRef} type="search" className={s.filter} aria-label="Filter tokens by name" placeholder="filter tokens  /" value={filter}
                onChange={(e) => setFilter(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Escape') { e.preventDefault(); setFilter(''); } }} />
              <Chip pressed={changedOnly} onClick={() => setChangedOnly((v) => !v)}>changed · {changedCount}</Chip>
            </div>
          </div>
        )}

        <fieldset className={s.group} disabled={SNAPSHOT}>
          <legend>Notes for the build</legend>
          <textarea className={s.notes} aria-label="Session notes" placeholder="Context, intent, constraints. Recorded word for word and treated as requirements." value={state.notes} onChange={(e) => setState((p) => ({ ...p, notes: e.target.value }))} />
        </fieldset>

        <fieldset className={s.group} disabled={SNAPSHOT}>
          <legend>Concepts</legend>
          <div className={s.tabs}>
            <ConceptTabs label="Concepts" concepts={state.concepts} active={state.active} pickId={state.pick.id} onSelect={selectConcept} />
            <button type="button" className={s.tab} disabled={state.concepts.length >= IDS.length} onClick={() => addConcept(true)}>duplicate</button>
            <button type="button" className={s.tab} disabled={state.concepts.length >= IDS.length} onClick={() => addConcept(false)}>new</button>
            <button type="button" className={s.tab} data-arm={`remove-${concept.id}`} data-armed={armed === `remove-${concept.id}` || undefined} disabled={state.concepts.length < 2}
              onClick={armed2(`remove-${concept.id}`, () => removeConcept(concept.id))}>{armed === `remove-${concept.id}` ? `Remove ${concept.id}?` : `remove ${concept.id}`}</button>
          </div>
          <textarea className={s.notes} aria-label={`Notes on concept ${concept.id}`} placeholder={`What concept ${concept.id} is trying…`} value={concept.notes} onChange={(e) => editActive((c) => ({ ...c, notes: e.target.value }))} />
          {state.concepts.length > 1 && (
            <div className={s.pick}>
              <span className={s.propName}><code>pick</code></span>
              {state.concepts.map((c) => (
                <label key={c.id} className={`${s.mini} ${s.checkRow}`}>
                  <input type="radio" name="pick" checked={state.pick.id === c.id} onChange={() => setState((p) => ({ ...p, pick: { ...p.pick, id: c.id } }))} /> {c.id}
                </label>
              ))}
              <textarea className={s.notes} aria-label="Why this pick" placeholder="Why this one wins…" value={state.pick.reason} onChange={(e) => setState((p) => ({ ...p, pick: { ...p.pick, reason: e.target.value } }))} />
            </div>
          )}
        </fieldset>


        <fieldset className={s.group} disabled={SNAPSHOT}>
          <legend>{isMotion ? 'Motion' : 'Props'} · concept {concept.id}</legend>
          {(() => {
            const rows = entry.props.map((d) => (
              <PropControl key={d.name} def={d} value={concept.props[d.name]} spring={concept.springs[`prop:${d.name}`]} easingPresets={easingPresets}
                onProp={onProp}
                {...(d.type === 'easing' ? { replay, durationMs: (+concept.props[d.durationProp] || 0) * state.view.slow } : {})} />
            ));
            // state sits fourth (Levi, 2026-10-07), or last on a shorter list
            if (!isMotion) rows.splice(Math.min(3, rows.length), 0, (
              <div key="state" className={`${s.row} ${s.prop}`}>
                <span className={s.rowLabel}><label htmlFor="p-state" className={s.propName}><code>state</code></label></span>
                <span className={s.rowControl}>
                  <select id="p-state" value={hasDisabled && concept.props.disabled ? 'disabled' : force} onChange={(e) => setStageState(e.target.value)}>
                    {FORCE_STATES.map((f) => <option key={f} value={f}>{f === 'rest' ? 'default' : f}</option>)}
                    {hasDisabled && <option value="disabled">disabled</option>}
                  </select>
                </span>
                <span className={s.rowReadout} />
              </div>
            ));
            return rows;
          })()}
        </fieldset>

        <fieldset className={s.group} disabled={SNAPSHOT} data-group="sound">
          {/* Collapsed by default to one summary row (F-08); `change` opens the list. */}
          <legend className={s.legendRow}>
            <button type="button" className={s.disclosure} aria-expanded={isOpen('sound')} aria-controls="gb-sound" onClick={() => setOpen('sound', !isOpen('sound'))}>sound</button>
            {isOpen('sound') ? <span className={s.summary}>· {entry.trigger}</span> : (
              <>
                <span className={s.summary}>· {concept.sound.file ? concept.sound.file.replace(/\.(wav|mp3)$/, '') : 'silent'}{soundSeconds ? ` · ${soundSeconds} s` : ''} ·</span>
                <button type="button" className={s.reset} aria-label="Change sound" onClick={() => setOpen('sound', true)}>change</button>
              </>
            )}
          </legend>
          <div id="gb-sound" className={s.groupBody} hidden={!isOpen('sound')}>
            {isOpen('sound') && (
              <>
                <div className={`${s.row} ${s.prop}`}><span className={s.rowLabel}><label htmlFor="s-vol" className={s.propName}><code>volume</code></label></span>
                  <span className={s.rowControl}><input id="s-vol" type="range" min="0" max="1" step="0.05" value={concept.sound.volume} onChange={(e) => setSound('volume', +e.target.value)} /></span><span className={s.rowReadout}>{concept.sound.volume}</span></div>
                <div className={`${s.row} ${s.prop}`}><span className={s.rowLabel}><label htmlFor="s-rate" className={s.propName}><code>pitch</code></label></span>
                  <span className={s.rowControl}><input id="s-rate" type="range" min="0.5" max="2" step="0.05" value={concept.sound.rate} onChange={(e) => setSound('rate', +e.target.value)} /></span><span className={s.rowReadout}>{concept.sound.rate}×</span></div>
                <div className={s.listHead}>
                  <span className={s.summary}>{SNAPSHOT ? 'recorded sound' : `${sounds.length} of ${manifest.length} sounds`}</span>
                  {!SNAPSHOT && <Chip pressed={shortOnly} onClick={() => setShortOnly((v) => !v)}>under 1 s only</Chip>}
                </div>
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
              </>
            )}
          </div>
        </fieldset>

        {groups.map(([cat, names]) => {
          const visible = names.filter(shows);
          if (!visible.length && filtering) return null;
          const open = isOpen(cat);
          return (
          <fieldset key={cat} className={s.group} disabled={SNAPSHOT} data-group={cat}>
            <legend>
              <button type="button" className={s.disclosure} aria-expanded={open} aria-controls={`gb-${cat}`} onClick={() => setOpen(cat, !open)}>
                {cat} · {filtering ? `${visible.length} of ${names.length}` : names.length}
              </button>
            </legend>
            <div id={`gb-${cat}`} className={s.groupBody} hidden={!open}>
            {open && visible.map((n) => {
              const kind = classify(shipped[n]);
              const pair = n.replace(/-easing$/, '-duration');
              return (
                // Keyed on the name alone (P5.2, A-19): a theme flip or a
                // concept switch updates the card in place, never remounts it.
                <TokenControl
                  key={n}
                  name={n}
                  kind={kind}
                  shipped={shipped[n]}
                  value={tuned[n] || shipped[n] || ''}
                  override={conceptEff[n]}
                  scope={concept.overrides[scopeOf(n, theme)][n] !== undefined ? scopeOf(n, theme) : (concept.overrides.all[n] !== undefined ? 'all' : null)}
                  adj={concept.shadowAdj[scopeOf(n, theme)]?.[n]}
                  spring={concept.springs[n]}
                  pin={concept.pins[n]}
                  refs={PRIM[kind]}
                  ladder={ladderFor(n, kind)}
                  easingPresets={easingPresets}
                  origin={conceptEff[n] !== undefined ? originOf(concept, n, theme) : null}
                  seed={seeds.values[scopeOf(n, theme)][n]}
                  restOf={n.endsWith('-hover') && tokens.includes(n.slice(0, -6)) ? n.slice(0, -6) : null}
                  {...(kind === 'easing' ? { replay, durationMs: (pair !== n && (tuned[pair] || shipped[pair]) ? toMs(tuned[pair] || shipped[pair]) : EASING_PREVIEW_MS) * state.view.slow } : {})}
                  onAction={onToken}
                />
              );
            })}
            </div>
          </fieldset>
          );
        })}

        {derivedNames.length > 0 && !(filtering && (changedOnly || !derivedNames.some(matches))) && (
          <fieldset className={s.group} data-group="derived">
            <legend>
              <button type="button" className={s.disclosure} aria-expanded={isOpen('derived')} aria-controls="gb-derived" onClick={() => setOpen('derived', !isOpen('derived'))}>derived · read-only</button>
            </legend>
            <div id="gb-derived" className={s.groupBody} hidden={!isOpen('derived')}>
              {isOpen('derived') && derivedNames.filter(matches).map((n) => (
                <div key={n} className={`${s.row} ${s.prop}`}><code className={`${s.rowLabel} ${s.derivedName}`}>{n}</code><span className={`${s.rowControl} ${s.rowWide} ${s.readout}`}>{derived[n]}</span></div>
              ))}
            </div>
          </fieldset>
        )}
      </aside>
    </div>
  );
}

/* The concept tabs: one component in the panel and in the strip above the
   stages, so the two can never disagree (P1.7). Pressed buttons, not an ARIA
   tab pattern, in both places (P4.3). */
function ConceptTabs({ label, concepts, active, pickId, onSelect }) {
  return (
    <span className={s.tabs} role="group" aria-label={label}>
      {concepts.map((c) => (
        <button key={c.id} type="button" aria-pressed={c.id === active} className={s.tab} onClick={() => onSelect(c.id)}>
          {c.id}{pickId === c.id && ' · picked'}
        </button>
      ))}
    </span>
  );
}

/* One filter chip for every filtered list: `changed only`, `under 1 s only`. */
function Chip({ pressed, onClick, children }) {
  return <button type="button" className={s.chip} aria-pressed={pressed} onClick={onClick}>{children}</button>;
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

/* The perf bar's instrument (P5.1): every commit's render time, read with
   window.scTuneProfile.read() after window.scTuneProfile.reset(). */
const COMMITS = [];
window.scTuneProfile = {
  reset: () => { COMMITS.length = 0; },
  read: () => COMMITS.slice(),
  p95: () => {
    const d = COMMITS.map((c) => c.actualDuration).sort((a, b) => a - b);
    return d.length ? d[Math.min(d.length - 1, Math.floor(d.length * 0.95))] : null;
  },
};
const onCommit = (id, phase, actualDuration, baseDuration, startTime, commitTime) => {
  if (COMMITS.length > 5000) COMMITS.shift();
  COMMITS.push({ phase, actualDuration, commitTime });
};

function Lab() {
  const asked = new URLSearchParams(location.search).get('c');
  if (!SNAPSHOT && asked !== null && !Object.hasOwn(REGISTRY, asked)) return <NoEntry name={asked} />;
  return <Profiler id="sc-tune" onRender={onCommit}><Tune /></Profiler>;
}

// Guard: a snapshot served through the dev server can evaluate twice.
const host = document.getElementById('root');
if (!host.dataset.mounted) {
  host.dataset.mounted = 'true';
  ReactDOM.createRoot(host).render(<Lab />);
}
