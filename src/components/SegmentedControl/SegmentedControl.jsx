/**
 * SegmentedControl — NEW · Drams #7 (3-Way Switch reference).
 *
 * One-of-N selection. `radiogroup` + `radio` semantics with roving
 * tabindex and arrow-key navigation (WAI-ARIA radio-group pattern) — an
 * arrow key both moves focus AND selects, matching native radio-group
 * behaviour. A sliding indicator (fill-only elevation — no border, no
 * shadow) tracks the selected segment via measured layout, not a fixed
 * per-option width.
 *
 * API: options: [{ value, label, count? }], value, onChange, disabled, label
 * (aria-label for the group), size ('sm' | 'md' | 'lg', default 'md').
 * `count` renders a number after the label in the label's own ink; `lg` is
 * the 16 × 8 chrome-label segment of a tab header (Studio PM, 2026-10-05).
 *
 * A change of selection plays the `select` role sound (Drams 001), pointer
 * or arrow keys. Re-selecting the current segment is silent. `sound`
 * (default true) opts one instance out; SoundProvider silences app-wide.
 *
 * Elastic motion (src/motion/elastic.js, tokens --sc-motion-segmented-control-*):
 * the indicator stretches with speed and leans toward a pressed segment.
 * Shipped, those tokens are 0 and the CSS transition slides it as before.
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useUISound } from '../../sound/SoundProvider.jsx';
import {
  readElastic, isActive, prefersReducedMotion, travelFrames, leanToward, pillFrame, run, cssRect, poseOf,
} from '../../motion/elastic.js';
import styles from './SegmentedControl.module.css';

export function SegmentedControl({
  options = [],
  value,
  onChange,
  disabled = false,
  label,
  size = 'md',
  sound = true,
  className = '',
}) {
  const playSelect = useUISound('select', sound);
  const choose = (next) => {
    if (next !== value) playSelect();
    onChange?.(next);
  };
  const trackRef = useRef(null);
  const itemRefs = useRef({});
  const indicatorRef = useRef(null);
  const [indicator, setIndicator] = useState(null);
  const shown = useRef(null); // the indicator's last resting pose { l, r }
  const leaning = useRef(null); // the pose it holds while a segment is pressed
  const valueRef = useRef(value);
  valueRef.current = value;

  // CSS px (cssRect), so a zoomed ancestor (the sc-tune stage) cannot skew it.
  const segmentPose = (v) => {
    const track = trackRef.current;
    const node = itemRefs.current[v];
    if (!track || !node) return null;
    const t = cssRect(track);
    const n = cssRect(node);
    return { l: n.left - t.left - track.clientLeft, r: n.right - t.left - track.clientLeft };
  };

  const measure = useCallback(() => {
    const p = segmentPose(value);
    setIndicator(p ? { left: p.l, width: p.r - p.l } : null);
  }, [value]);

  useLayoutEffect(() => { measure(); }, [measure, options.length, size]);

  const elastic = () => {
    if (disabled || prefersReducedMotion() || !trackRef.current || !indicatorRef.current) return null;
    const m = readElastic(trackRef.current, 'segmented-control');
    return isActive(m) ? { ...m, cap: parseFloat(getComputedStyle(indicatorRef.current).height) } : null;
  };
  const drive = (frames, duration, easing, hold) => {
    trackRef.current.setAttribute('data-driven', '');
    run(indicatorRef.current, frames, duration, easing, {
      hold, onDone: () => trackRef.current?.removeAttribute('data-driven'),
    });
  };

  // A new selection travels from where the indicator was (or its lean).
  useLayoutEffect(() => {
    if (!indicator) return;
    const to = { l: indicator.left, r: indicator.left + indicator.width };
    const from = leaning.current || shown.current;
    shown.current = to;
    leaning.current = null;
    const m = elastic();
    if (!m || !from || (from.l === to.l && from.r === to.r)) return;
    drive(travelFrames(m, from, to, m.cap), m.travelDur, 'linear', false);
  }, [indicator?.left, indicator?.width]);

  const springBack = () => {
    if (!leaning.current) return;
    const m = elastic();
    const from = leaning.current;
    leaning.current = null;
    if (m && shown.current) drive(travelFrames(m, from, shown.current, m.cap), m.travelDur, 'linear', false);
  };
  // Press feedback: the indicator leans toward the pressed segment and holds.
  const onPressSegment = (v) => {
    if (v === value || !shown.current) return;
    const m = elastic();
    const target = segmentPose(v);
    if (!m || m.lean <= 0 || !target) return;
    const from = indicatorRef.current.getAnimations().length
      ? poseOf(indicatorRef.current, { left: cssRect(trackRef.current).left + trackRef.current.clientLeft })
      : shown.current;
    leaning.current = leanToward(m, shown.current, target);
    const pressedAt = value;
    const release = () => setTimeout(() => { if (valueRef.current === pressedAt) springBack(); }, 0);
    window.addEventListener('pointerup', release, { once: true });
    drive([pillFrame({ ...from, h: m.cap }, m.cap), pillFrame({ ...leaning.current, h: m.cap }, m.cap)], m.leanDur, m.leanEasing, true);
  };
  useEffect(() => {
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const focusValue = (v) => { itemRefs.current[v]?.focus(); };

  const selectAt = (index) => {
    if (disabled || options.length === 0) return;
    const wrapped = (index + options.length) % options.length;
    const opt = options[wrapped];
    if (!opt) return;
    choose(opt.value);
    focusValue(opt.value);
  };

  const handleKeyDown = (e, index) => {
    if (disabled) return;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        selectAt(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        selectAt(index - 1);
        break;
      case 'Home':
        e.preventDefault();
        selectAt(0);
        break;
      case 'End':
        e.preventDefault();
        selectAt(options.length - 1);
        break;
      default:
        break;
    }
  };

  const selectedIndex = options.findIndex((o) => o.value === value);

  return (
    <div
      ref={trackRef}
      className={`${styles.track} ${styles[size] || styles.md} ${disabled ? styles.disabled : ''} ${className}`}
      role="radiogroup"
      aria-label={label}
      aria-disabled={disabled || undefined}
    >
      {indicator && (
        <span
          ref={indicatorRef}
          className={styles.indicator}
          aria-hidden="true"
          style={{ transform: `translateX(${indicator.left}px)`, width: `${indicator.width}px`, '--segment-indicator-x': `${indicator.left}px` }}
        />
      )}
      {options.map((opt, i) => {
        const selected = opt.value === value;
        const tabbable = selected || (selectedIndex === -1 && i === 0);
        return (
          <button
            key={opt.value}
            type="button"
            ref={(node) => { itemRefs.current[opt.value] = node; }}
            role="radio"
            aria-checked={selected}
            tabIndex={disabled ? -1 : tabbable ? 0 : -1}
            disabled={disabled}
            className={`${styles.segment} ${selected ? styles.segmentSelected : ''}`}
            onClick={() => choose(opt.value)}
            onPointerDown={() => onPressSegment(opt.value)}
            onPointerLeave={springBack}
            onKeyDown={(e) => handleKeyDown(e, i)}
          >
            {opt.label}
            {opt.count !== undefined && <span className={styles.count}>{opt.count}</span>}
          </button>
        );
      })}
    </div>
  );
}
