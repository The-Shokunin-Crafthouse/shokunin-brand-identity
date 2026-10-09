/**
 * Badge — 3.2 · default, success, warning, error, neutral.
 *
 * Outlined chrome label. Color carries semantic — accent for default,
 * status hues for success/warning/error, muted for neutral.
 *
 * `live` adds an LED (Drams LED Switch, mapping #9): `true` lights it,
 * `false` shows it unlit. Left out, the badge has no LED. A lit LED also
 * announces `liveLabel`, so the state is never carried by light alone.
 */

import styles from './Badge.module.css';

const VARIANTS = ['default', 'success', 'warning', 'error', 'neutral'];

export function Badge({ variant = 'default', live, liveLabel = 'live', children, className = '' }) {
  const v = VARIANTS.includes(variant) ? variant : 'default';
  return (
    <span className={`${styles.badge} ${styles[v]} ${className}`}>
      {live === undefined ? null : <span className={`${styles.led} ${live ? styles.lit : ''}`} aria-hidden="true" />}
      {children}
      {live ? <span className={styles.srOnly}>, {liveLabel}</span> : null}
    </span>
  );
}
