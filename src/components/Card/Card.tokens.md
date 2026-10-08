# Card · token consumption

Spec ref: §2 Tier 3 · 3.3. Two styles (Levi, 2026-10-08): `flat` and `glass` (`level`: subtle, regular, heavy). `interactive` renders a button: hover, focus, press, disabled. The old variants map to `flat` for one release (`default`, `elevated`, `interactive`).

## Flat

| Token | Value | Use |
|---|---|---|
| `--sc-color-card-flat` | surface.floating | ground; no border, no shadow |
| `--sc-color-card-flat-hover` | surface.raised | interactive hover ground |

## Glass

Regular is Levi's Figma Glass effect: light -45deg 30%, refraction 65, depth 68, dispersion 0, frost 9, splay 57. Subtle and heavy, and the tints, are Claude's start for the lab.

| Token (per level) | subtle | regular | heavy | Use |
|---|---|---|---|---|
| `--sc-color-card-glass-{level}` | white 12% / 4% | white 20% / 6% | white 30% / 10% | tint, light / dark |
| `--sc-shadow-card-glass-{level}` | rim 20% | rim 30% | rim 45% | 1px lit edge top left, half on the far wall |
| `--sc-size-card-glass-{level}-frost` | 4px | 9px | 16px | backdrop blur radius; CSS blur() takes half |
| `--sc-size-card-glass-{level}-refraction` | 40 | 65 | 85 | edge shift = refraction/100 x band/2 |
| `--sc-size-card-glass-{level}-depth` | 40 | 68 | 85 | band = depth/100 of the half short side |
| `--sc-size-card-glass-{level}-splay` | 57 | 57 | 57 | falloff (1 - t)^p, p = 1 + 3 x (1 - splay/100) |
| `--sc-color-card-glass-hover` | | | | interactive hover veil (white 8% / 5%) |

The refraction numbers are read by `glass.js`, which builds a displacement map for each card's size and corner and applies it as `backdrop-filter: url(#…)` (Chromium only). Safari and Firefox keep frost, tint and rim.

## Shared

| Token | Use |
|---|---|
| `--sc-space-component-padding-card`, `--sc-radius-card` | padding, corner (role tokens) |
| `--sc-motion-card-press-scale` + `--sc-motion-press-duration` / `-easing` | press (shipped 1) |
| `--sc-color-border-focus` + `--sc-border-width-focus` + `--sc-border-focus-offset` | focus ring |
| `--sc-color-text-primary` | text |
| `--sc-motion-hover-duration` + `-easing` | ground transition |

## Rules

- Shadow and filter changes snap; only the ground and the press scale transition.
- Disabled glass loses its rim and refraction and keeps its frost.
- Reduced transparency: glass becomes the flat card. Forced colors: an inset edge, no filter.
- Glass text contrast depends on the backdrop; measure over the real one.
