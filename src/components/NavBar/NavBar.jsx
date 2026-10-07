/**
 * NavBar — 3.7 · desktop horizontal, mobile compact.
 *
 * Desktop: brand mark + inline links + trailing action slot.
 * Mobile (`compact` prop): mark + hamburger toggle that reveals a
 * stacked menu below.
 *
 * `underline` (default false) puts a PlusUnderline under each desktop link,
 * drawn on the current one. It carries NavBar's own elastic motion tokens
 * (--sc-motion-nav-bar-*): travel between links, stretch, press lean. Shipped,
 * those are 0 and the underline jumps.
 */

import { useState } from 'react';
import { PlusUnderline } from '../PlusUnderline/PlusUnderline.jsx';
import styles from './NavBar.module.css';

export function NavBar({
  brand,
  links = [],
  trailing,
  compact = false,
  underline = false,
  className = '',
}) {
  const [open, setOpen] = useState(false);

  return (
    <nav className={`${styles.nav} ${compact ? styles.compact : styles.desktop} ${className}`} aria-label="Primary">
      <div className={styles.row}>
        <div className={styles.brand}>{brand}</div>
        {compact ? (
          <button
            type="button"
            className={styles.toggle}
            aria-expanded={open}
            aria-controls="navbar-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        ) : (
          <>
            <ul className={styles.links}>
              {links.map((l) => (
                <li key={l.href} className={styles.linkItem}>
                  <a className={styles.link} href={l.href} aria-current={l.current ? 'page' : undefined}>
                    {l.label}
                    {underline && <PlusUnderline active={!!l.current} motion="nav-bar" />}
                  </a>
                </li>
              ))}
            </ul>
            {trailing && <div className={styles.trailing}>{trailing}</div>}
          </>
        )}
      </div>
      {compact && (
        <div id="navbar-menu" className={`${styles.menu} ${open ? styles.menuOpen : ''}`}>
          <ul className={styles.links}>
            {links.map((l) => (
              <li key={l.href} className={styles.linkItem}>
                <a className={styles.link} href={l.href} aria-current={l.current ? 'page' : undefined}>{l.label}</a>
              </li>
            ))}
          </ul>
          {trailing && <div className={styles.trailing}>{trailing}</div>}
        </div>
      )}
    </nav>
  );
}
