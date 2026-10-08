/**
 * Tooltip — 3.8 · single-line, multi-line.
 *
 * Hover- and focus-triggered. `content` shows on pointer enter / focus
 * of the wrapped child; `open` forces it open or shut. Positioning: top-center, with arrow.
 *
 * Multi-line: pass any `content` that wraps. CSS clamps single-line by
 * default; pass `multiline` prop to allow wrapping.
 *
 * Elastic motion (src/motion/elastic.js, tokens --sc-motion-tooltip-*): on
 * open the bubble lifts along its travel curve and, while it moves fast,
 * stretches up and squeezes in from its arrow. It scales rather than
 * growing as two ends and a bar, because it carries text. Shipped, stretch
 * and squash are 0 and the CSS transition lifts it as before.
 *
 * variant: `solid` (default, the shipped tooltip) or `glass` (concept B in
 * sc-tune: liquid glass over whatever sits behind it, the Card's refraction
 * from Card/glass.js, Chromium only; an opaque solid fallback elsewhere).
 */

import { useId, useLayoutEffect, useRef, useState } from 'react';
import { useGlassRefraction } from '../Card/glass.js';
import { readElastic, isActive, prefersReducedMotion, sampleEasing, speeds } from '../../motion/elastic.js';
import styles from './Tooltip.module.css';

export function Tooltip({ content, multiline = false, open: forced, variant = 'solid', children }) {
  const glass = variant === 'glass';
  const id = useId();
  const [hovered, setOpen] = useState(false);
  // `open` forces it (docs, the tuning lab); left undefined, hover and focus decide.
  const open = forced ?? hovered;
  const wrapRef = useRef(null);
  const tipRef = useRef(null);
  const { id: filterId, filter } = useGlassRefraction(tipRef, glass, 'frosted');

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const tip = tipRef.current;
    if (!open || !wrap || !tip || prefersReducedMotion()) return;
    const m = readElastic(tip, 'tooltip');
    if (!isActive(m)) return;
    const lift = parseFloat(getComputedStyle(tip).getPropertyValue('--sc-size-tooltip-lift')) || 0;
    const p = sampleEasing(m.travelEasing);
    const v = speeds(p);
    // 1 = 20% taller (stretch) or narrower (squash) at peak speed.
    const frames = p.map((y, i) => ({
      transform: `translate(-50%, ${-lift * (1 - y)}px) scale(${1 - 0.2 * m.squash * v[i]}, ${1 + 0.2 * m.stretch * v[i]})`,
      opacity: Math.min(1, Math.max(0, y)),
    }));
    tip.getAnimations().forEach((a) => a.cancel());
    wrap.setAttribute('data-driven', '');
    const a = tip.animate(frames, { duration: m.travelDur, easing: 'linear' });
    a.onfinish = () => wrap.removeAttribute('data-driven');
    a.oncancel = () => wrap.removeAttribute('data-driven');
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <span ref={wrapRef} className={styles.wrapper}
      onMouseEnter={handleOpen}
      onMouseLeave={handleClose}
      onFocus={handleOpen}
      onBlur={handleClose}
    >
      <span aria-describedby={open ? id : undefined}>{children}</span>
      <span
        ref={tipRef}
        role="tooltip"
        id={id}
        className={`${styles.tooltip} ${glass ? styles.glass : ''} ${open ? styles.open : ''} ${multiline ? styles.multiline : styles.singleline}`}
        style={filter ? { '--glass-refract': `url(#${filterId})` } : undefined}
      >
        {filter && (
          <svg className={styles.defs} aria-hidden="true" focusable="false" width="0" height="0">
            <filter id={filterId} x="0" y="0" width={filter.w} height={filter.h} filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feImage href={filter.href} x="0" y="0" width={filter.w} height={filter.h} preserveAspectRatio="none" result="map" />
              <feDisplacementMap in="SourceGraphic" in2="map" scale={filter.scale} xChannelSelector="R" yChannelSelector="G" />
            </filter>
          </svg>
        )}
        {content}
      </span>
    </span>
  );
}
