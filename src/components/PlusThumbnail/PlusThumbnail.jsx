/**
 * PlusThumbnail — brand element 2r · a generated thumbnail for an item with no image yet.
 *
 * The art comes only from `seed`: the same seed always draws the same thumbnail, on any page,
 * at any size. Seed it with something stable (a project slug), never an index.
 * Square, on the inverse surface by default (`sunk` is the quieter alternative).
 * Decorative unless `label` is set, which announces it as an image.
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { PlusField } from '../PlusField/PlusField.jsx';
import styles from './PlusThumbnail.module.css';

export function PlusThumbnail({ seed, label, surface = 'inverse', shape, density, className = '', ...rest }) {
  const a11y = label ? { role: 'img', 'aria-label': label } : { 'aria-hidden': true };
  return (
    <div className={`${styles.thumbnail} ${className}`} {...a11y} {...rest}>
      <PlusField art="uthumb" seed={seed} surface={surface} shape={shape} density={density} />
    </div>
  );
}
