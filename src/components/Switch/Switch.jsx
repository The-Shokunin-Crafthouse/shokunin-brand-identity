/**
 * Switch — 3.9 · on, off, disabled.
 *
 * Native checkbox under a styled track + thumb. Click target is the
 * full label area; switch state drives both visual position and ARIA.
 */

import { useId } from 'react';
import styles from './Switch.module.css';

export function Switch({
  checked = false,
  disabled = false,
  onChange,
  label,
  className = '',
}) {
  const id = useId();
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
          onChange={onChange}
        />
        <span className={styles.track} aria-hidden="true">
          <span className={styles.thumb} />
        </span>
      </span>
      {label && <span className={styles.label}>{label}</span>}
    </label>
  );
}
