/**
 * ProgressIndicator — 3.10 · bar, circular, step.
 *
 * `bar`     — linear track with fill (value 0..1). `interactive` adds
 *              pointer-drag + click-to-seek scrubbing and keyboard
 *              support (role="slider"); non-interactive stays
 *              role="progressbar".
 * `circular` — SVG ring with stroke-dasharray fill (value 0..1)
 * `step`    — discrete numbered dots with connector lines
 *              (steps: total count · current: index, 0-based)
 *
 * `tone` (bar only): `accent` (default), `progress` (signal chartreuse) or
 * `warning` (status warning), for meters that rank several windows side by
 * side. `track` (bar only): `deepSunk` (default) or `sunk`, the deeper well a
 * meter on a raised tile needs. Both added 2026-10-05 (Studio PM Tokens tile).
 *
 * Bar fill (both variants) never fully disappears at low values — width
 * is `max(pct%, track-height)`, so at value=0 the fill still reads as a
 * small pill/circle the same diameter as the track (Drams #3/#4 "Line
 * Volume" / "Volume Visible Track" — see ProgressIndicator.tokens.md for
 * why this reuses the track-height token instead of a dedicated one).
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  readElastic, isActive, prefersReducedMotion, travelFrames, run, cssRect, poseOf,
} from '../../motion/elastic.js';
import styles from './ProgressIndicator.module.css';

export function ProgressIndicator({
  variant = 'bar',
  value = 0.5,
  steps = 4,
  current = 1,
  label,
  className = '',
  interactive = false,
  onChange,
  min = 0,
  max = 1,
  step = 0.01,
  bigStep = 0.05,
  disabled = false,
  tone = 'accent',
  track = 'deepSunk',
}) {
  if (variant === 'circular') return <CircularProgress value={value} label={label} className={className} />;
  if (variant === 'step') return <StepProgress steps={steps} current={current} className={className} />;
  if (interactive) {
    return (
      <InteractiveBar
        value={value}
        label={label}
        className={className}
        onChange={onChange}
        min={min}
        max={max}
        step={step}
        bigStep={bigStep}
        disabled={disabled}
      />
    );
  }
  return <BarProgress value={value} label={label} className={className} tone={tone} track={track} />;
}

const TONES = { accent: '', progress: styles.toneProgress, warning: styles.toneWarning };

function BarProgress({ value, label, className, tone = 'accent', track = 'deepSunk' }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div
      className={`${styles.bar} ${TONES[tone] ?? ''} ${track === 'sunk' ? styles.trackSunk : ''} ${className}`}
      role="progressbar"
      aria-valuenow={Math.round(pct)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <span className={styles.barFill} style={{ width: `max(${pct}%, var(--sc-size-progress-bar-height))` }} />
    </div>
  );
}

/**
 * InteractiveBar — Drams #4/#5 (Standard Volume / Volume Visible Track).
 * Scrubbable bar: pointer-drag + click-to-seek via Pointer Events
 * (setPointerCapture keeps the drag live outside the track), plus a
 * keyboard slider (arrow ± step, Shift ± bigStep, Home/End).
 *
 * Physical thumb (physical-controls Tier 1, tokens --sc-*-progress-slider-*):
 * a knob that rides inside the recessed track, its centre running from
 * thumb/2 to width − thumb/2 over min..max, with the fill ending under it.
 * A seek (click, key) travels along the travel curve and, through
 * src/motion/elastic.js, stretches the thumb with speed; a drag trails the
 * pointer by the drag curve. Shipped, the thumb is 0px and flat, stretch and
 * squash are 0, and travel = drag = motion.reveal: the bar renders and moves
 * exactly as the thumbless bar did.
 */
function InteractiveBar({ value, label, className, onChange, min, max, step, bigStep, disabled }) {
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [moving, setMoving] = useState(false);
  const seekFrom = useRef(null);
  const clamp = useCallback((v) => Math.max(min, Math.min(max, v)), [min, max]);
  const ratio = (clamp(value) - min) / (max - min || 1);
  const pct = ratio * 100;

  // The thumb's diameter in CSS px (0 while the bar ships thumbless).
  const thumbSize = () => parseFloat(getComputedStyle(trackRef.current).getPropertyValue('--sc-size-progress-slider-thumb')) || 0;

  const valueFromClientX = useCallback((clientX) => {
    const track = trackRef.current;
    if (!track) return value;
    const rect = cssRect(track);
    const cap = thumbSize();
    const span = rect.width - cap;
    const x = clientX / (track.currentCSSZoom || 1);
    const r = span <= 0 ? 0 : (x - rect.left - cap / 2) / span;
    return clamp(min + r * (max - min));
  }, [clamp, min, max, value]);

  // A seek remembers where the thumb is (in flight included), so the travel
  // starts from what is on screen.
  const markSeek = () => {
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (track && thumb) seekFrom.current = poseOf(thumb, cssRect(track));
  };

  const stopEngine = () => {
    thumbRef.current?.getAnimations().forEach((a) => a.cancel());
    trackRef.current?.removeAttribute('data-driven');
  };

  useLayoutEffect(() => {
    const from = seekFrom.current;
    seekFrom.current = null;
    const track = trackRef.current;
    const thumb = thumbRef.current;
    if (!from || !track || !thumb || prefersReducedMotion()) return;
    const m = readElastic(thumb, 'progress-slider');
    if (!isActive(m)) return;
    const cap = thumbSize();
    const to = ((cssRect(track).width - cap) * ratio);
    if (Math.abs(from.l - to) < 0.5) return;
    // The thumb already sits at its new rest (CSS left); frames are offsets from it.
    track.setAttribute('data-driven', '');
    const frames = travelFrames(m, { l: from.l - to, r: from.r - to }, { l: 0, r: cap }, cap);
    run(thumb, frames, m.travelDur, 'linear', { onDone: () => track.removeAttribute('data-driven') });
  }, [ratio]);

  useEffect(() => stopEngine, []);

  const handlePointerDown = (e) => {
    if (disabled) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    const next = valueFromClientX(e.clientX);
    if (next !== clamp(value)) markSeek();
    onChange?.(next);
  };
  const handlePointerMove = (e) => {
    if (disabled || !dragging) return;
    if (!moving) {
      stopEngine();
      setMoving(true);
    }
    onChange?.(valueFromClientX(e.clientX));
  };
  const endDrag = () => {
    setDragging(false);
    setMoving(false);
  };

  const handleKeyDown = (e) => {
    if (disabled) return;
    let next;
    switch (e.key) {
      case 'ArrowRight':
      case 'ArrowUp':
        next = value + (e.shiftKey ? bigStep : step);
        break;
      case 'ArrowLeft':
      case 'ArrowDown':
        next = value - (e.shiftKey ? bigStep : step);
        break;
      case 'Home':
        next = min;
        break;
      case 'End':
        next = max;
        break;
      default:
        return;
    }
    e.preventDefault();
    if (clamp(next) !== clamp(value)) markSeek();
    onChange?.(clamp(next));
  };

  return (
    <div
      className={`${styles.barInteractiveWrapper} ${className}`}
      role="slider"
      tabIndex={disabled ? -1 : 0}
      aria-valuemin={Math.round(min * 100)}
      aria-valuemax={Math.round(max * 100)}
      aria-valuenow={Math.round(pct)}
      aria-label={label}
      aria-disabled={disabled || undefined}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
      onKeyDown={handleKeyDown}
    >
      <span
        ref={trackRef}
        className={`${styles.barInteractiveTrack} ${dragging ? styles.dragging : ''} ${moving ? styles.moving : ''}`}
        style={{ '--value': ratio }}
        aria-hidden="true"
      >
        <span className={styles.barInteractiveFill} />
        <span ref={thumbRef} className={styles.barInteractiveThumb} />
      </span>
    </div>
  );
}

function CircularProgress({ value, label, className }) {
  const pct = Math.max(0, Math.min(1, value));
  // Circle math · 50% center · 40 radius · circumference = 2πr ≈ 251.327
  const r = 40;
  const c = 2 * Math.PI * r;
  const offset = c - pct * c;
  return (
    <svg
      className={`${styles.circular} ${className}`}
      viewBox="0 0 100 100"
      role="progressbar"
      aria-valuenow={Math.round(pct * 100)}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={label}
    >
      <circle className={styles.circularTrack} cx="50" cy="50" r={r} />
      <circle
        className={styles.circularFill}
        cx="50" cy="50" r={r}
        strokeDasharray={c}
        strokeDashoffset={offset}
        transform="rotate(-90 50 50)"
      />
    </svg>
  );
}

function StepProgress({ steps, current, className }) {
  return (
    <ol className={`${styles.step} ${className}`} aria-label="Progress steps">
      {Array.from({ length: steps }).map((_, i) => {
        const isCurrent = i === current;
        const isDone = i < current;
        return (
          <li
            key={i}
            className={`${styles.stepItem} ${isDone ? styles.stepDone : ''} ${isCurrent ? styles.stepCurrent : ''}`}
            aria-current={isCurrent ? 'step' : undefined}
          >
            <span className={styles.stepDot}>{i + 1}</span>
            {i < steps - 1 && <span className={styles.stepConnector} />}
          </li>
        );
      })}
    </ol>
  );
}
