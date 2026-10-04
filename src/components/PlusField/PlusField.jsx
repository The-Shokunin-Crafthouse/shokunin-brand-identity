/**
 * PlusField — the plus-sign halftone field. The primitive behind every brand element.
 *
 * One <canvas> that fills its parent box and draws one art from plusField.engine.js.
 * Structural slots get crisp grids (udiv, uline, uprog, utime, ubullet); expressive slots get
 * loose ribbons (uhero, ucta, ucardhead, umedia, …). See PlusField.md and
 * _config/design-system/brand-elements.md for which art goes where.
 *
 *   <PlusField art="udiv" surface="none" rows={3} />          // inside a box with a height
 *   <PlusField art="uhero" surface="raised" backdrop />        // fills a position:relative host
 *   <PlusField art="uprog" progress={0.64} label="Upload" />   // + hidden role=progressbar
 *
 * Runtime contract:
 *   - Size: a ResizeObserver on the root. Backing store = CSS size × min(2, devicePixelRatio).
 *     A 0×0 box draws nothing; the first real size draws.
 *   - Colour: semantic tokens read with getComputedStyle on the root at draw time, so a
 *     [data-theme] on <html> or on any ancestor applies. A change of data-theme on <html> redraws
 *     every field (one shared MutationObserver).
 *   - Motion: uskel, uloader and usplash animate on ONE shared requestAnimationFrame loop. A field
 *     joins the loop only while it is on screen (one shared IntersectionObserver), animate is
 *     true, and prefers-reduced-motion is not reduce. Otherwise it shows one still frame.
 *   - The canvas is decorative (aria-hidden). uprog adds a visually hidden role="progressbar"
 *     named by `label`; uloader and uskel add a visually hidden role="status" when `label` is set.
 *
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { useEffect, useRef } from 'react';
import { ANIMATED_ARTS, HOVER_ARTS, STILL_T, drawField, hash } from './plusField.engine.js';
import styles from './PlusField.module.css';

const TOKENS = {
  inverse: '--sc-color-surface-inverse',
  raised: '--sc-color-surface-raised',
  page: '--sc-color-surface-page',
  sunk: '--sc-color-surface-sunk',
  text: '--sc-color-text-primary',
  onInverse: '--sc-color-text-on-inverse',
  accent: '--sc-color-brand-accent',
};

/* ---------- shared runtime: one loop, one theme watcher, one viewport watcher ---------- */

const mounted = new Set();
const running = new Set();
let frame = 0;
let themeWatch = null;
let viewWatch = null;
let motionQuery = null;

const hasWindow = () => typeof window !== 'undefined';
const prefersReduced = () => !!motionQuery?.matches;

function tick(ts) {
  const t = ts / 1000;
  running.forEach((f) => f.paint(t));
  frame = running.size ? requestAnimationFrame(tick) : 0;
}

function wake() {
  if (!frame && running.size) frame = requestAnimationFrame(tick);
}

function attachShared() {
  if (!hasWindow()) return;
  if (!themeWatch && typeof MutationObserver !== 'undefined') {
    themeWatch = new MutationObserver(() => mounted.forEach((f) => f.refresh()));
    themeWatch.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  }
  if (!viewWatch && typeof IntersectionObserver !== 'undefined') {
    viewWatch = new IntersectionObserver((entries) => entries.forEach((e) => {
      const f = e.target.__plusField;
      if (f) { f.visible = e.isIntersecting; f.syncMotion(); }
    }));
  }
  if (!motionQuery && window.matchMedia) {
    motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    motionQuery.addEventListener?.('change', () => mounted.forEach((f) => f.syncMotion()));
  }
  if (document.fonts && !attachShared.fonts) {
    attachShared.fonts = true;
    document.fonts.addEventListener?.('loadingdone', () => mounted.forEach((f) => f.refresh()));
  }
}

function detachShared() {
  if (mounted.size) return;
  themeWatch?.disconnect(); themeWatch = null;
  viewWatch?.disconnect(); viewWatch = null;
  if (frame) cancelAnimationFrame(frame);
  frame = 0;
}

/** One mounted field: owns its size, cached colours and pointer; paints through the engine. */
function createField(root, canvas) {
  const f = {
    root, canvas, ctx: canvas.getContext('2d'),
    w: 0, h: 0, dpr: 1, props: null, colors: null, font: '',
    visible: true, t: 0, pointer: { hover: false, x: 0, y: 0 },

    readTokens() {
      const cs = getComputedStyle(root);
      const fallback = cs.color;
      const colors = {};
      for (const [k, name] of Object.entries(TOKENS)) colors[k] = cs.getPropertyValue(name).trim() || fallback;
      f.colors = colors;
      f.font = cs.fontFamily;
    },

    resize(w, h) {
      f.w = w; f.h = h;
      f.dpr = Math.min(2, window.devicePixelRatio || 1);
      const bw = Math.round(w * f.dpr), bh = Math.round(h * f.dpr);
      if (canvas.width !== bw) canvas.width = bw;
      if (canvas.height !== bh) canvas.height = bh;
      f.refresh();
    },

    animated() {
      const p = f.props;
      return !!p && ANIMATED_ARTS.has(p.art) && p.animate !== false && !prefersReduced();
    },

    syncMotion() {
      if (f.animated() && f.visible && f.w && f.h) { running.add(f); wake(); return; }
      running.delete(f);
      f.paint(f.animated() ? f.t : (STILL_T[f.props?.art] ?? 0));
    },

    /** Re-read tokens (theme, fonts, props changed) and paint at the current time. */
    refresh() {
      if (!f.props || !f.w || !f.h) return;
      f.readTokens();
      f.syncMotion();
      if (running.has(f)) f.paint(f.t);
    },

    paint(t) {
      const p = f.props;
      if (!p || !f.w || !f.h) return;
      if (!f.colors) f.readTokens();
      f.t = t;
      drawField(f.ctx, {
        art: p.art, w: f.w, h: f.h, dpr: f.dpr, colors: f.colors, surface: p.surface, shape: p.shape,
        density: p.density, seed: hash(p.seed ?? p.art), t, opts: p.opts, font: f.font, pointer: f.pointer,
      });
    },
  };
  return f;
}

/* ---------- component ---------- */

const SURFACE = new Set(['inverse', 'raised', 'page', 'sunk', 'none']);
const SHAPE = new Set(['plus', 'square', 'round']);

export function PlusField({
  art,
  surface = 'inverse',
  shape = 'plus',
  density = 1,
  animate = true,
  seed,
  rows,
  fade,
  text,
  progress,
  accent = false,
  steps,
  current,
  textScale,
  backdrop = false,
  label,
  className = '',
  ...rest
}) {
  const rootRef = useRef(null);
  const canvasRef = useRef(null);
  const fieldRef = useRef(null);

  const props = {
    art,
    surface: SURFACE.has(surface) ? surface : 'inverse',
    shape: SHAPE.has(shape) ? shape : 'plus',
    density,
    animate,
    seed,
    opts: { rows, fade, text, progress, accent, steps, current, textScale },
  };

  // Mount: wire the observers once per element.
  useEffect(() => {
    const root = rootRef.current, canvas = canvasRef.current;
    if (!root || !canvas || !canvas.getContext) return undefined;
    attachShared();
    const f = createField(root, canvas);
    f.props = props;
    fieldRef.current = f;
    root.__plusField = f;
    mounted.add(f);

    const ro = typeof ResizeObserver !== 'undefined'
      ? new ResizeObserver(([entry]) => {
        const { width, height } = entry.contentRect;
        if (width !== f.w || height !== f.h) f.resize(width, height);
      })
      : null;
    ro?.observe(root);
    viewWatch?.observe(root);

    // Hover arts listen on the host box, so content laid over the field still drives it.
    const host = HOVER_ARTS.has(art) ? (root.parentElement || root) : null;
    const move = (e) => {
      const b = root.getBoundingClientRect();
      f.pointer = { hover: true, x: e.clientX - b.left, y: e.clientY - b.top };
      f.paint(f.t);
    };
    const leave = () => { f.pointer = { hover: false, x: 0, y: 0 }; f.paint(f.t); };
    host?.addEventListener('pointermove', move);
    host?.addEventListener('pointerleave', leave);

    return () => {
      ro?.disconnect();
      viewWatch?.unobserve(root);
      host?.removeEventListener('pointermove', move);
      host?.removeEventListener('pointerleave', leave);
      running.delete(f);
      mounted.delete(f);
      delete root.__plusField;
      fieldRef.current = null;
      detachShared();
    };
    // Only the art decides the wiring (it picks the hover host). Every other prop reaches the
    // field through the effect below, so it is deliberately absent from this list.
  }, [art]);

  // Any prop change: hand the field its new props and repaint.
  useEffect(() => {
    const f = fieldRef.current;
    if (!f) return;
    f.props = props;
    f.refresh();
  });

  const classes = [styles.root, backdrop ? styles.backdrop : '', className].filter(Boolean).join(' ');
  const pct = Math.round(Math.max(0, Math.min(1, Number(progress) || 0)) * 100);

  return (
    <div ref={rootRef} className={classes} {...rest}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      {label && (art === 'uloader' || art === 'uskel') && (
        <span role="status" className={styles.srOnly}>{label}</span>
      )}
      {art === 'uprog' && (
        <div
          role="progressbar"
          className={styles.srOnly}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={pct}
          aria-label={label}
        />
      )}
    </div>
  );
}
