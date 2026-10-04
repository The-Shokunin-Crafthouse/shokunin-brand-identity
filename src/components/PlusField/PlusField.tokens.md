# PlusField · token consumption

The brand-element primitive. Every wrapper (SectionDivider, HeadingRule, PlusUnderline, PlusProgress, PlusLoader, PlusSkeleton, PlusTimeline, PlusBullet, PlusSeparator, PlusThumbnail) inherits this table.

## Colour, read at draw time

Read with `getComputedStyle` on the field's root, so `[data-theme]` on `<html>` or on any ancestor applies. A `data-theme` change on `<html>` redraws every mounted field.

| Role | Token | Used for |
|---|---|---|
| Ground, `surface="inverse"` (default) | `--sc-color-surface-inverse` | Expressive arts: CTA, loader, splash, 404, thumbnails. |
| Ground, `surface="raised"` | `--sc-color-surface-raised` | Card-coloured fields. |
| Ground, `surface="page"` | `--sc-color-surface-page` | Page-coloured fields. Also the top of `ufooter`. |
| Ground, `surface="sunk"` | `--sc-color-surface-sunk` | Placeholders, quiet thumbnails. |
| Ground, `surface="none"` | none | Fields laid on an existing surface (every wrapper's default except loader, skeleton, thumbnail). |
| Marks on inverse | `--sc-color-text-on-inverse` | |
| Marks on any other surface | `--sc-color-text-primary` | |
| Teal | `--sc-color-brand-accent` | Only through the engine's `teal(role)`, roles `progress`, `active`, `current`. |

`ufooter` paints `--sc-color-surface-page` over `--sc-color-surface-inverse` itself and ignores `surface`.

## Type

`.root` sets `font: var(--sc-font-text-display-md)`. Nothing renders as DOM text; the `type` art reads the computed font family (Neue Haas Grotesk Display) and draws at weight 500.

## Size

None. The root is `width: 100%; height: 100%` of its parent, or `position: absolute; inset: 0` with `backdrop`. The canvas is absolute inside it, so the backing store (CSS size × min(2, devicePixelRatio)) never feeds back into layout.

## No raw values

No hex, no px in `PlusField.module.css` except the 1px visually-hidden idiom. The drawers' geometry (7-unit mark pitch, ribbon widths, path points) is the art, kept literal in `plusField.engine.js` as approved in the prototype.
