/**
 * Slider — a value the user sets by dragging or by keys (Drams #5
 * Standard Volume, #12 Dynamic Slider).
 *
 * Split from ProgressIndicator's `interactive` bar (Levi, 2026-10-07): a
 * progress indicator is read, a slider is moved. ProgressIndicator stays a
 * flat meter; `<ProgressIndicator interactive>` still renders this
 * component for one release.
 *
 * API: value, onChange, min (0), max (1), step (0.01), bigStep (0.05),
 * label, disabled, sound (default true; SoundProvider can silence it
 * app-wide), className.
 *
 * A keyboard step that changes the value plays the `slide` role sound
 * (Drams 009, record Slider 2026-10-07-2207). A drag is silent.
 *
 * Pointer: pointerdown seeks to the click and starts a drag
 * (setPointerCapture keeps it live outside the track). Keyboard
 * (role="slider"): arrows ± step, Shift ± bigStep, Home/End. aria values
 * are percent-space (0–100), the ProgressIndicator contract.
 *
 * Physical thumb (physical-controls Tier 1, tokens --sc-*-slider-*): a knob
 * that rides inside the recessed track, its centre running from thumb/2 to
 * width − thumb/2 over min..max, with the fill ending under it. A seek
 * (click, key) travels along the travel curve and, through
 * src/motion/elastic.js, stretches the thumb with speed; a drag trails the
 * pointer by the drag curve.
 */

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import {
  readElastic, isActive, prefersReducedMotion, travelFrames, run, cssRect, poseOf,
} from '../../motion/elastic.js';
import { useUISound } from '../../sound/SoundProvider.jsx';
import styles from './Slider.module.css';

export function Slider({
  value = 0.5,
  onChange,
  min = 0,
  max = 1,
  step = 0.01,
  bigStep = 0.05,
  label,
  disabled = false,
  sound = true,
  className = '',
}) {
  const playSlide = useUISound('slide', sound);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [moving, setMoving] = useState(false);
  const seekFrom = useRef(null);
  const clamp = useCallback((v) => Math.max(min, Math.min(max, v)), [min, max]);
  const ratio = (clamp(value) - min) / (max - min || 1);
  const pct = ratio * 100;

  // The thumb's diameter in CSS px.
  const thumbSize = () => parseFloat(getComputedStyle(trackRef.current).getPropertyValue('--sc-size-slider-thumb')) || 0;

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
    const m = readElastic(thumb, 'slider');
    if (!isActive(m)) return;
    const cap = thumbSize();
    const to = (cssRect(track).width - cap) * ratio;
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
    if (clamp(next) !== clamp(value)) {
      markSeek();
      playSlide();
    }
    onChange?.(clamp(next));
  };

  return (
    <div
      className={`${styles.slider} ${className}`}
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
        className={`${styles.track} ${dragging ? styles.dragging : ''} ${moving ? styles.moving : ''}`}
        style={{ '--value': ratio }}
        aria-hidden="true"
      >
        <span className={styles.fill} />
        <span ref={thumbRef} className={styles.thumb} />
      </span>
    </div>
  );
}
