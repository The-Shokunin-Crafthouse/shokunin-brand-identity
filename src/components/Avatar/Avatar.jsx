/**
 * Avatar — 3.6 · 4 sizes, image, initials fallback.
 *
 * Sizes: xs (24), sm (32), md (48), lg (64). Image takes precedence;
 * if no src or load failure, initials derived from `name` render
 * against the sunk surface ground.
 */

import { useState } from 'react';
import styles from './Avatar.module.css';

const SIZES = ['xs', 'sm', 'md', 'lg'];

function initialsFrom(name) {
  if (!name) return '?';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export function Avatar({ size = 'md', src, name = '', className = '' }) {
  const s = SIZES.includes(size) ? size : 'md';
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = src && !imageFailed;

  return (
    <span className={`${styles.avatar} ${styles[s]} ${className}`} role="img" aria-label={name || 'Avatar'}>
      {showImage ? (
        <img className={styles.image} src={src} alt="" onError={() => setImageFailed(true)} />
      ) : (
        <span className={styles.initials} aria-hidden="true">{initialsFrom(name)}</span>
      )}
    </span>
  );
}
