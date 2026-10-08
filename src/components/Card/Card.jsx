/**
 * Card — 3.3 · two styles (Levi, 2026-10-08).
 *
 * flat:  surface.floating, no border, no shadow.
 * glass: liquid glass over whatever sits behind it. `level` names the
 *        surface: clear (thin frost, light bend), frosted (Levi's Figma
 *        Glass setting), thick (heavy frost, strongest bend). `tone`: light
 *        glass lightens what is behind it, dark glass darkens it.
 *        Frost, tint and a lit rim are CSS; the refraction is an SVG
 *        displacement filter on the backdrop (glass.js, Chromium only).
 *
 * interactive renders a <button>: focus ring, hover, press, disabled (flat).
 * The old variants map for one release: default and elevated → flat,
 * 'interactive' → flat + interactive. Drop the mapping next release.
 */

import { useRef } from 'react';
import { useGlassRefraction } from './glass.js';
import styles from './Card.module.css';

const LEGACY = { default: 'flat', elevated: 'flat', interactive: 'flat' };
const LEVELS = ['clear', 'frosted', 'thick'];
const TONES = { light: 'toneLight', dark: 'toneDark' };

export function Card({
  variant = 'flat',
  level = 'frosted',
  tone = 'light',
  interactive = variant === 'interactive',
  as: As = 'div',
  onClick,
  children,
  className = '',
  style,
  ...rest
}) {
  const v = variant === 'glass' ? 'glass' : (LEGACY[variant] ?? 'flat');
  const lv = LEVELS.includes(level) ? level : 'frosted';
  const tn = TONES[tone] ?? TONES.light;
  const glass = v === 'glass';
  const ref = useRef(null);
  const { id, filter } = useGlassRefraction(ref, glass, lv);
  const Tag = interactive ? 'button' : As;
  const classes = [styles.card, styles[v], glass ? `${styles[lv]} ${styles[tn]}` : '', interactive ? styles.interactive : '', className].filter(Boolean).join(' ');
  return (
    <Tag
      ref={ref}
      type={interactive ? 'button' : undefined}
      className={classes}
      onClick={interactive ? onClick : undefined}
      style={filter ? { ...style, '--glass-refract': `url(#${id})` } : style}
      {...rest}
    >
      {filter && (
        <svg className={styles.defs} aria-hidden="true" focusable="false" width="0" height="0">
          <filter id={id} x="0" y="0" width={filter.w} height={filter.h} filterUnits="userSpaceOnUse" primitiveUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feImage href={filter.href} x="0" y="0" width={filter.w} height={filter.h} preserveAspectRatio="none" result="map" />
            <feDisplacementMap in="SourceGraphic" in2="map" scale={filter.scale} xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </svg>
      )}
      {children}
    </Tag>
  );
}
