/**
 * Icon — studio wrapper around @phosphor-icons/react (scds-v2 default icon family).
 *
 * Establishes the default weight (regular) and a token-driven size convention.
 * `bold` + `fill` are exposed per scds-v2. By default the glyph follows font-size
 * (size="1em"); a named size ('sm' | 'md' | 'lg') resolves to --sc-size-icon-* via
 * the wrapper's font-size (a CSS var cannot live in the SVG size attribute).
 *
 * Inline SVG → Phosphor swap-out lands in Phase 2 — this file only establishes the
 * wrapper + token contract.
 *
 * Usage:
 *   import { Gear } from '@phosphor-icons/react';
 *   <Icon glyph={Gear} />                          // regular · 1em (inherits font-size)
 *   <Icon glyph={Gear} weight="bold" size="md" />  // 24px via --sc-size-icon-md
 *   <Icon glyph={Gear} label="Settings" />         // announced; otherwise aria-hidden
 */

import { IconContext } from '@phosphor-icons/react';
import styles from './Icon.module.css';

const TOKEN_SIZE = {
  sm: 'var(--sc-size-icon-sm)',
  md: 'var(--sc-size-icon-md)',
  lg: 'var(--sc-size-icon-lg)',
};

export function Icon({ glyph: Glyph, weight = 'regular', size = '1em', label, className = '', ...rest }) {
  if (!Glyph) return null;
  const a11y = label ? { 'aria-label': label, role: 'img' } : { 'aria-hidden': true };
  const tokenSize = TOKEN_SIZE[size];

  // Named token size → render at 1em inside a wrapper whose font-size is the token.
  if (tokenSize) {
    return (
      <span className={`${styles.icon} ${className}`.trim()} style={{ fontSize: tokenSize }}>
        <Glyph weight={weight} size="1em" {...a11y} {...rest} />
      </span>
    );
  }

  // Numeric px or em string → pass straight to Phosphor.
  return <Glyph weight={weight} size={size} className={className} {...a11y} {...rest} />;
}

/**
 * IconProvider — applies the studio Phosphor defaults to a subtree
 * (weight regular, color follows currentColor). Wrap a region rather than
 * repeating weight on every Icon.
 */
export function IconProvider({ children, weight = 'regular' }) {
  return (
    <IconContext.Provider value={{ weight, color: 'currentColor' }}>
      {children}
    </IconContext.Provider>
  );
}
