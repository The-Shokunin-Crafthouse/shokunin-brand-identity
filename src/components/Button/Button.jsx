/**
 * Button — 4.0 · primary, secondary, tertiary, destructive, disabled, loading.
 *
 * Pill-radius control with a monospace-free NHG label and a trailing
 * arrow. Primary rests neutral (neumorphic raise) and turns teal on
 * hover — the accent is a hover state, never a resting one. Secondary is
 * an ink outline that goes teal on hover/focus; tertiary is a teal ghost.
 *
 * `arrow` (default true) toggles the trailing arrow. `disabled` and
 * `loading` are independent of variant; loading suppresses the click
 * handler and renders an inline pulse in place of the arrow.
 */

import { ArrowRight } from '@phosphor-icons/react';
import styles from './Button.module.css';

const VARIANTS = ['primary', 'secondary', 'tertiary', 'destructive'];

// Trailing arrow — Phosphor glyph (scds-v2 default icon family), inherits
// the label colour via currentColor. Sized by .arrow (1.4em).
function Arrow() {
  return <ArrowRight className={styles.arrow} aria-hidden="true" />;
}

export function Button({
  variant = 'primary',
  disabled = false,
  loading = false,
  arrow = true,
  type = 'button',
  children,
  onClick,
  className = '',
  ...rest
}) {
  const v = VARIANTS.includes(variant) ? variant : 'primary';
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[v]} ${loading ? styles.loading : ''} ${className}`}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={isDisabled ? undefined : onClick}
      {...rest}
    >
      <span className={styles.label}>{children}</span>
      {loading ? (
        <span className={styles.spinner} aria-hidden="true" />
      ) : (
        arrow && <Arrow />
      )}
    </button>
  );
}
