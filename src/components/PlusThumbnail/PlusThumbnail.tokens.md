# PlusThumbnail · token consumption

Brand element 2r. Composes `PlusField art="uthumb"`.

| Part | Token | Rationale |
|---|---|---|
| Ground | `--sc-color-surface-inverse` (default) or `--sc-color-surface-sunk` | |
| Marks | `--sc-color-text-on-inverse` on inverse, `--sc-color-text-primary` otherwise | |
| Corners | `--sc-radius-control` | As in the prototype. |
| Size | 100% of the container, `aspect-ratio: 1` | |

## Determinism

The seed string is hashed (FNV-1a) into the PRNG. Every random choice (segment count, points, width, orientation) comes from that PRNG, so a seed is one picture.
