/**
 * StatusPill — the one SCDS status component (2026-10-08: Badge and Pill fold
 * into it). A tone and an emphasis carry the meaning; the label is always the
 * consumer's own word, so the colour never speaks alone.
 *
 *   tone      progress · success · warning · error · info · neutral · live
 *   emphasis  filled (default) · outline
 *   live      an LED whose glow breathes; on by default for progress and live,
 *             `live={false}` turns it off, `live` turns it on for any tone
 *   icon      an optional leading Phosphor glyph (bold); the LED takes its place
 *   liveLabel spoken after the label when the LED is lit and the label alone
 *             does not say the thing is live
 */

import styles from './StatusPill.module.css';

const TONES = ['progress', 'success', 'warning', 'error', 'info', 'neutral', 'live'];
const EMPHASES = ['filled', 'outline'];

export function StatusPill({ tone = 'neutral', emphasis = 'filled', live, liveLabel, icon: Glyph, children, className = '' }) {
  const t = TONES.includes(tone) ? tone : 'neutral';
  const e = EMPHASES.includes(emphasis) ? emphasis : 'filled';
  const lit = live ?? (t === 'progress' || t === 'live');
  const lead = lit || Boolean(Glyph);
  return (
    <span className={`${styles.pill} ${styles[e]} ${styles[t]} ${lead ? styles.lead : ''} ${className}`}>
      {lit ? <span className={styles.led} aria-hidden="true" /> : Glyph ? <Glyph className={styles.icon} weight="bold" aria-hidden="true" /> : null}
      {children}
      {lit && liveLabel ? <span className={styles.srOnly}>, {liveLabel}</span> : null}
    </span>
  );
}
