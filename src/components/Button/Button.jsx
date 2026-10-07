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
 * `size` is `lg` (default: 14/medium label, 24 × 8 padding, 14px icon,
 * 46px tall) or `sm` (12/medium label, 16 × 4 padding, 12px icon, 34px
 * tall); 8px label-to-arrow gap at both. Every variant and state exists at
 * both sizes (ADR scds-button-size-small; sc-tune record Button
 * 2026-10-07-1418).
 *
 * Plays the `press` role sound (Drams 029) on every click that reaches
 * onClick; `sound={false}` opts one instance out, and a SoundProvider
 * silences or levels every sound.
 */

import { ArrowRight } from '@phosphor-icons/react';
import { WorkingMark } from '../WorkingMark/WorkingMark.jsx';
import { useUISound } from '../../sound/SoundProvider.jsx';
import styles from './Button.module.css';

const VARIANTS = ['primary', 'secondary', 'tertiary', 'destructive'];
const SIZES = ['lg', 'sm'];

// Trailing arrow — Phosphor glyph, bold weight (Levi, 2026-10-07). Inherits
// the label colour via currentColor; sized by .arrow (size.button.icon.*).
function Arrow() {
  return <ArrowRight weight="bold" className={styles.arrow} aria-hidden="true" />;
}

export function Button({
  variant = 'primary',
  size = 'lg',
  disabled = false,
  loading = false,
  arrow = true,
  type = 'button',
  sound = true,
  children,
  onClick,
  className = '',
  ...rest
}) {
  const v = VARIANTS.includes(variant) ? variant : 'primary';
  const sz = SIZES.includes(size) ? size : 'lg';
  const isDisabled = disabled || loading;
  const playPress = useUISound('press', sound);

  return (
    <button
      type={type}
      className={`${styles.button} ${styles[v]} ${sz === 'sm' ? styles.sm : ''} ${loading ? styles.loading : ''} ${className}`}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      onClick={isDisabled ? undefined : (e) => { playPress(); onClick?.(e); }}
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
