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
 * Bar fill (both variants) never fully disappears at low values — width
 * is `max(pct%, track-height)`, so at value=0 the fill still reads as a
 * small pill/circle the same diameter as the track (Drams #3/#4 "Line
 * Volume" / "Volume Visible Track" — see ProgressIndicator.tokens.md for
 * why this reuses the track-height token instead of a dedicated one).
 */

import { useCallback, useRef, useState } from 'react';
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
  return <BarProgress value={value} label={label} className={className} />;
}

function BarProgress({ value, label, className }) {
  const pct = Math.max(0, Math.min(1, value)) * 100;
  return (
    <div
      className={`${styles.bar} ${className}`}
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
 * Thumbless scrubbable bar: pointer-drag + click-to-seek via Pointer
 * Events (setPointerCapture keeps the drag live outside the track), plus
 * a keyboard slider (arrow ± step, Shift ± bigStep, Home/End).
 */
function InteractiveBar({ value, label, className, onChange, min, max, step, bigStep, disabled }) {
  const trackRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const clamp = useCallback((v) => Math.max(min, Math.min(max, v)), [min, max]);
  const pct = ((clamp(value) - min) / (max - min || 1)) * 100;

  const valueFromClientX = useCallback((clientX) => {
    const track = trackRef.current;
    if (!track) return value;
    const rect = track.getBoundingClientRect();
    const ratio = rect.width === 0 ? 0 : (clientX - rect.left) / rect.width;
    return clamp(min + ratio * (max - min));
  }, [clamp, min, max, value]);

  const handlePointerDown = (e) => {
    if (disabled) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    setDragging(true);
    onChange?.(valueFromClientX(e.clientX));
  };
  const handlePointerMove = (e) => {
    if (disabled || !dragging) return;
    onChange?.(valueFromClientX(e.clientX));
  };
  const endDrag = () => setDragging(false);

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
        className={`${styles.barInteractiveTrack} ${dragging ? styles.dragging : ''}`}
        aria-hidden="true"
      >
        <span
          className={styles.barInteractiveFill}
          style={{ width: `max(${pct}%, var(--sc-size-progress-bar-height))` }}
        />
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
