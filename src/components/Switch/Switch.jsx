/**
 * Switch — 3.9 · on, off, disabled.
 *
 * Native checkbox under a styled track + thumb. Click target is the
 * full label area; switch state drives both visual position and ARIA.
 *
 * 2026-10-07 · restyled to the Drams Standard Switch (drams/001) at the
 * SCDS size (40 × 22 since record Switch 2026-10-07-1539 B): recessed track, a 3D knob (gradient rim over a
 * gradient face, six-layer lift), and an I/O glyph row that slides with
 * the knob so on/off reads without colour. Each change plays the `toggle`
 * role sound (Drams 004); `sound={false}` opts one instance out and
 * SoundProvider silences it app-wide.
 *
 * `glyphs={false}` drops the I/O glyph row for a plain track (Levi,
 * 2026-10-07). Knob position still carries state without colour
 * (WCAG 1.4.1), so the glyphs are an extra cue, not the only one.
 *
 * Knob motion beyond the slide (stretch, squash, press lean) lives in
 * switchMotion.js and runs only when its tokens are above 0; shipped, they
 * are 0 and the CSS transition moves the knob as before.
 */

import { useId, useRef } from 'react';
import { useUISound } from '../../sound/SoundProvider.jsx';
import {
  readMotion, isActive, restPose, leanPose, travelFrames, leanFrames, prefersReducedMotion,
} from './switchMotion.js';
import styles from './Switch.module.css';

export function Switch({
  checked = false,
  disabled = false,
  onChange,
  label,
  sound = true,
  glyphs = true,
  className = '',
}) {
  const id = useId();
  const playToggle = useUISound('toggle', sound);
  const inputRef = useRef(null);
  const trackRef = useRef(null);
  const thumbRef = useRef(null);
  const anim = useRef(null);
  const pose = useRef(null); // the knob's held pose while leaning, else null
  const changed = useRef(false);

  const motion = () => {
    if (disabled || prefersReducedMotion() || !trackRef.current || !thumbRef.current) return null;
    const m = readMotion(trackRef.current, thumbRef.current);
    return isActive(m) ? m : null;
  };
  const settle = () => {
    anim.current?.cancel();
    anim.current = null;
    pose.current = null;
    trackRef.current?.removeAttribute('data-driven');
  };
  const play = (frames, duration, easing, hold) => {
    anim.current?.cancel();
    trackRef.current.setAttribute('data-driven', '');
    const a = thumbRef.current.animate(frames, { duration, easing, fill: 'forwards' });
    anim.current = a;
    if (!hold) a.onfinish = () => { if (anim.current === a) settle(); };
  };
  const travel = (m, from, on) => play(travelFrames(m, from, restPose(m, on)), m.travelDur, 'linear', false);

  // Press feedback: on pointer down the knob leans toward where it will go
  // and holds; release travels from that pose, dragging off springs it back.
  const onPointerDown = () => {
    const m = motion();
    if (!m || m.lean <= 0) return;
    const on = inputRef.current.checked;
    const from = pose.current || restPose(m, on);
    pose.current = leanPose(m, on);
    changed.current = false;
    play(leanFrames(m, from, pose.current), m.leanDur, m.leanEasing, true);
  };
  const springBack = () => {
    if (!pose.current) return;
    const m = motion();
    if (!m) { settle(); return; }
    const from = pose.current;
    pose.current = null;
    travel(m, from, inputRef.current.checked);
  };
  const onPointerUp = () => setTimeout(() => { if (!changed.current) springBack(); }, 0);

  return (
    <label
      htmlFor={id}
      className={`${styles.field} ${disabled ? styles.disabled : ''} ${className}`}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerLeave={springBack}
      onPointerCancel={springBack}
    >
      <span className={styles.controlWrapper}>
        <input
          ref={inputRef}
          id={id}
          type="checkbox"
          role="switch"
          className={styles.input}
          checked={checked}
          disabled={disabled}
          onChange={(e) => {
            playToggle();
            changed.current = true;
            const m = motion();
            if (m) {
              const from = pose.current || restPose(m, !e.target.checked);
              pose.current = null;
              travel(m, from, e.target.checked);
            } else settle();
            onChange?.(e);
          }}
        />
        <span ref={trackRef} className={styles.track} aria-hidden="true">
          {glyphs && (
            <span className={styles.glyphs}>
              <span className={styles.glyphOn} />
              <span className={styles.glyphOff} />
            </span>
          )}
          <span ref={thumbRef} className={styles.thumb} />
        </span>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
