/**
 * Button — 4.0 · primary, secondary, tertiary, destructive, disabled, loading.
 *
 * Pill-radius control with a monospace-free NHG label and a trailing
 * arrow. Primary rests neutral and turns teal on hover — the accent is
 * a hover state, never a resting one. Filled variants (primary,
 * destructive) are keys (2026-10-07): the Drams OP-1 Keys face and
 * shadows, horizontal, lit from the top left, softening on press. Secondary is
 * a fill-only chip on surface-sunk whose label goes teal on hover/focus
 * (the ink outline was retired in scds-v2 Phase 2, 2026-07-27); tertiary
 * is a teal ghost.
 *
 * `arrow` (default true) toggles the trailing arrow. `disabled` and
 * `loading` are independent of variant; loading suppresses the click
 * handler and renders the studio's WorkingMark in place of the arrow.
 *
 * `size` is `lg` (default: 11/medium label, 16 × 8 padding, 12px icon) or
 * `sm` (11/medium label, 12 × 4 padding, 2px gap, 12px icon). Every variant and state
 * exists at both sizes (ADR scds-button-size-small, 2026-10-05, amended 2026-10-06).
 */

import { ArrowRight } from '@phosphor-icons/react';
import { WorkingMark } from '../WorkingMark/WorkingMark.jsx';
import styles from './Button.module.css';

const VARIANTS = ['primary', 'secondary', 'tertiary', 'destructive'];
const SIZES = ['lg', 'sm'];

// Trailing arrow — Phosphor glyph (scds-v2 default icon family), inherits
// the label colour via currentColor. Sized by .arrow (1.4em).
function Arrow() {
  return <ArrowRight className={styles.arrow} aria-hidden="true" />;
}

export function Button({
  variant = 'primary',
  size = 'lg',
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
  const sz = SIZES.includes(size) ? size : 'lg';
  const isDisabled = disabled || loading;

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[v]} ${sz === 'sm' ? styles.sm : ''} ${loading ? styles.loading : ''} ${className}`}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={isDisabled ? undefined : onClick}
      {...rest}
    >
      <span className={styles.label}>{children}</span>
      {loading ? (
        <WorkingMark className={styles.working} />
      ) : (
        arrow && <Arrow />
      )}
    </button>
  );
}
