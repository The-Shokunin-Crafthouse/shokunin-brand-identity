/**
 * StatusPill — the one SCDS status component (2026-10-08: Badge and Pill fold
 * into it). A tone and an emphasis carry the meaning; the label is always the
 * consumer's own word, so the colour never speaks alone.
 *
 *   tone      progress · success · warning · error · info · neutral · live
 *   emphasis  filled (default) · outline
 *   glow      the whole pill glows in its hue and the glow breathes; on by
 *             default for progress and live, `glow={false}` turns it off,
 *             `glow` turns it on for any tone
 *   icon      an optional leading Phosphor glyph (bold)
 *
 * The live tone sets its label in capitals (LIVE). The neutral tone (planned)
 * has no fill: a dashed edge in its text colour, either emphasis. CSS cannot
 * set a dash length, so the edge is an SVG capsule sized to the pill.
 */

import { useLayoutEffect, useRef, useState } from 'react';
import styles from './StatusPill.module.css';

const TONES = ['progress', 'success', 'warning', 'error', 'info', 'neutral', 'live'];
const EMPHASES = ['filled', 'outline'];

/* The dashed capsule, inset by half its stroke so the stroke sits inside the
 * pill. It measures its own parent (a parent ref is not attached yet when a
 * child's layout effect runs). */
function DashedEdge() {
  const svg = useRef(null);
  const [box, setBox] = useState({ w: 0, h: 0, sw: 0 });
  useLayoutEffect(() => {
    const el = svg.current && svg.current.parentElement;
    if (!el) return undefined;
    const read = () => {
      const sw = parseFloat(getComputedStyle(el).getPropertyValue('--sc-size-status-pill-dash-width')) || 0;
      setBox({ w: el.offsetWidth, h: el.offsetHeight, sw });
    };
    read();
    const ro = new ResizeObserver(read);
    ro.observe(el);
    // A token change (the tuning lab fires this) can move the stroke without resizing the pill.
    window.addEventListener('sc-tokens-change', read);
    return () => {
      ro.disconnect();
      window.removeEventListener('sc-tokens-change', read);
    };
  }, []);
  const { w, h, sw } = box;
  const r = Math.max(0, h / 2 - sw / 2);
  return (
    <svg ref={svg} className={styles.dash} width={w} height={h} viewBox={`0 0 ${w} ${h}`} aria-hidden="true" focusable="false">
      {w > 0 ? <rect x={sw / 2} y={sw / 2} width={Math.max(0, w - sw)} height={Math.max(0, h - sw)} rx={r} ry={r} /> : null}
    </svg>
  );
}

export function StatusPill({ tone = 'neutral', emphasis = 'filled', glow, icon: Glyph, children, className = '' }) {
  const t = TONES.includes(tone) ? tone : 'neutral';
  const e = EMPHASES.includes(emphasis) ? emphasis : 'filled';
  const glowing = glow ?? (t === 'progress' || t === 'live');
  return (
    <span className={`${styles.pill} ${styles[e]} ${styles[t]} ${glowing ? styles.glow : ''} ${className}`}>
      {t === 'neutral' ? <DashedEdge /> : null}
      {Glyph ? <Glyph className={styles.icon} weight="bold" aria-hidden="true" /> : null}
      {children}
    </span>
  );
}
