/**
 * Switch — 3.9 · on, off, disabled.
 *
 * Native checkbox under a styled track + thumb. Click target is the
 * full label area; switch state drives both visual position and ARIA.
 *
 * 2026-10-07 · restyled to the Drams Standard Switch (drams/001) at the
 * SCDS 32 × 18 size: recessed track, a 3D knob (gradient rim over a
 * gradient face, six-layer lift), and an I/O glyph row that slides with
 * the knob so on/off reads without colour. Each change plays the `toggle`
 * role sound (Drams 004); `sound={false}` opts one instance out and
 * SoundProvider silences it app-wide.
 */

import { useId } from 'react';
import { useUISound } from '../../sound/SoundProvider.jsx';
import styles from './Switch.module.css';

export function Switch({
  checked = false,
  disabled = false,
  onChange,
  label,
  sound = true,
  className = '',
}) {
  const id = useId();
  const playToggle = useUISound('toggle', sound);
  return (
    <label htmlFor={id} className={`${styles.field} ${disabled ? styles.disabled : ''} ${className}`}>
      <span className={styles.controlWrapper}>
        <input
          id={id}
          type="checkbox"
          role="switch"
          className={styles.input}
          checked={checked}
          disabled={disabled}
          onChange={(e) => {
            playToggle();
            onChange?.(e);
          }}
        />
        <span className={styles.track} aria-hidden="true">
          <span className={styles.glyphs}>
            <span className={styles.glyphOn} />
            <span className={styles.glyphOff} />
          </span>
          <span className={styles.thumb} />
        </span>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
