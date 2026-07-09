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

import styles from './Button.module.css';

const VARIANTS = ['primary', 'secondary', 'tertiary', 'destructive'];

// Trailing arrow — inherits the label colour via currentColor.
function Arrow() {
  return (
    <svg
      className={styles.arrow}
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
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
