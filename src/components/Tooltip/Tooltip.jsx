/**
 * Tooltip — 3.8 · single-line, multi-line.
 *
 * Hover- and focus-triggered. `content` shows on pointer enter / focus
 * of the wrapped child; `open` forces it open or shut. Positioning: top-center, with arrow.
 *
 * Multi-line: pass any `content` that wraps. CSS clamps single-line by
 * default; pass `multiline` prop to allow wrapping.
 *
 * Elastic motion (src/motion/elastic.js, tokens --sc-motion-tooltip-*): on
 * open the bubble grows from --sc-motion-tooltip-grow-from to full size about
 * the arrow tip (the trigger point), lifts along its travel curve and, while
 * it moves fast, stretches up and squeezes in. A spring with bounce
 * overshoots the full size and settles. On close it shrinks back into the
 * trigger point along the same curve. A run cut short hands its pose to the
 * next: leave mid-grow and it shrinks from the size it reached. It scales
 * rather than growing as two ends and a bar, because it carries text.
 * Shipped (record Tooltip 2026-10-08-2007 A): grow from 0, stretch and
 * squash 2, a 720ms spring with a 3% overshoot. With grow at 1 and stretch
 * and squash at 0 the engine stays off and the CSS transition fades it.
 *
 * Sound: the `reveal` role sound plays as hover or focus opens it (not when
 * `open` forces it). `sound={false}` opts one instance out; SoundProvider
 * can silence every sound.
 */

import { useId, useLayoutEffect, useRef, useState } from 'react';
import { useUISound } from '../../sound/SoundProvider.jsx';
import { arrowPath, dropShadowFilter } from './shape.js';
import { readElastic, isActive, prefersReducedMotion, sampleEasing, speeds } from '../../motion/elastic.js';
import styles from './Tooltip.module.css';

export function Tooltip({ content, multiline = false, open: forced, sound = true, children }) {
  const id = useId();
  const [hovered, setOpen] = useState(false);
  // `open` forces it (docs, the tuning lab); left undefined, hover and focus decide.
  const open = forced ?? hovered;
  const wrapRef = useRef(null);
  const tipRef = useRef(null);
  const shape = useTipShape(tipRef, open);
  const playReveal = useUISound('reveal', sound);

  const wasOpen = useRef(open);
  const runId = useRef(0);
  // The run in flight: its animation and the progress (0 = gone, 1 = full
  // size) at each frame, so an interrupted run hands its pose to the next.
  const run = useRef(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const tip = tipRef.current;
    const closing = wasOpen.current && !open;
    wasOpen.current = open;
    if ((!open && !closing) || !wrap || !tip || prefersReducedMotion()) return;
    const m = readElastic(tip, 'tooltip');
    const cs = getComputedStyle(tip);
    const g = parseFloat(cs.getPropertyValue('--sc-motion-tooltip-grow-from'));
    const grow = Number.isFinite(g) ? Math.min(1, Math.max(0, g)) : 1;
    if (!isActive(m) && grow === 1) return;
    const lift = parseFloat(cs.getPropertyValue('--sc-size-tooltip-lift')) || 0;
    // Where the bubble is now: mid-run, the progress at the run's current
    // frame; otherwise fully shut (opening) or fully open (closing).
    let from = closing ? 1 : 0;
    const prev = run.current;
    if (prev && prev.anim.playState === 'running') {
      const f = Math.min(1, Math.max(0, (prev.anim.currentTime || 0) / prev.duration));
      from = prev.ys[Math.round(f * (prev.ys.length - 1))];
    }
    const to = closing ? 0 : 1;
    let p = sampleEasing(m.travelEasing);
    let duration = m.travelDur;
    if (closing) {
      // Close runs the same curve back toward grow at the trigger point. It
      // ends where the curve first reaches 1 (the bubble is gone there), so
      // an overshoot never flashes it back.
      const end = p.findIndex((y) => y >= 1);
      if (end > 0) { duration = Math.round((duration * end) / (p.length - 1)); p = p.slice(0, end + 1).map((y) => Math.min(1, y)); }
    }
    const span = Math.abs(to - from);
    const v = speeds(p).map((x) => x * span);
    const ys = p.map((c) => from + (to - from) * c);
    // Size runs grow → 1 with the progress (past 1 on an overshoot); stretch
    // and squash ride on it: 1 = 20% taller or narrower at peak speed.
    const frames = ys.map((y, i) => {
      const s = Math.max(0, grow + (1 - grow) * y);
      return {
        transform: `translate(-50%, ${-lift * (1 - y)}px) scale(${s * (1 - 0.2 * m.squash * v[i])}, ${s * (1 + 0.2 * m.stretch * v[i])})`,
        opacity: Math.min(1, Math.max(0, y)),
      };
    });
    tip.getAnimations().forEach((a) => a.cancel());
    const id = ++runId.current;
    const done = () => { if (runId.current === id) wrap.removeAttribute('data-driven'); };
    wrap.setAttribute('data-driven', '');
    const anim = tip.animate(frames, { duration, easing: 'linear' });
    anim.onfinish = done;
    anim.oncancel = done;
    run.current = { anim, ys, duration };
  }, [open]);

  const handleOpen = () => {
    if (forced === undefined && !hovered) playReveal();
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <span ref={wrapRef} className={styles.wrapper}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      <span aria-describedby={open ? id : undefined}>{children}</span>
      <span
        ref={tipRef}
        role="tooltip"
        id={id}
        className={`${styles.tooltip} ${open ? styles.open : ''} ${multiline ? styles.multiline : styles.singleline}`}
        style={shape.drop !== 'none' ? { '--tip-drop': shape.drop } : undefined}
      >
        {content}
        {shape.d && (
          <svg className={styles.arrow} aria-hidden="true" focusable="false" width={shape.width} height={shape.height}
            viewBox={`0 ${-shape.overlap} ${shape.width} ${shape.height}`} style={{ top: `calc(100% - ${shape.overlap}px)` }}>
            <path d={shape.d} />
          </svg>
        )}
      </span>
    </span>
  );
}

/*
 * The arrow and the plate's shadow, read from the role tokens: the arrow
 * leg, tip radius and fillet radius build the SVG path; the plate shadow's
 * outer layers become a drop-shadow filter on the whole tooltip, so the
 * shadow follows the bubble and the arrow as one shape. Rebuilt on open and
 * when the tuning lab changes a token.
 */
function useTipShape(ref, open) {
  const [shape, setShape] = useState({ d: '', width: 0, height: 0, overlap: 0, drop: 'none' });
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const build = () => {
      const cs = getComputedStyle(el);
      const px = (n) => parseFloat(cs.getPropertyValue(n)) || 0;
      // The arrow runs 1px up into the bubble to hide the seam.
      const overlap = 1;
      const a = arrowPath(px('--sc-size-tooltip-arrow'), px('--sc-size-tooltip-arrow-tip'), px('--sc-size-tooltip-arrow-fillet'), overlap);
      const drop = dropShadowFilter(cs.getPropertyValue('--sc-shadow-tooltip-plate'));
      setShape((s) => (s.d === a.d && s.drop === drop && s.overlap === overlap ? s : { ...a, overlap, drop }));
    };
    build();
    window.addEventListener('sc-tokens-change', build);
    return () => window.removeEventListener('sc-tokens-change', build);
  }, [ref, open]);
  return shape;
}
