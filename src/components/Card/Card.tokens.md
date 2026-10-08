# Card · token consumption

Spec ref: §2 Tier 3 · 3.3. Two styles (Levi, 2026-10-08): `flat` and `glass` (`level`: subtle, regular, heavy). `interactive` renders a button: hover, focus, press, disabled. The old variants map to `flat` for one release (`default`, `elevated`, `interactive`).

## Flat

| Token | Value | Use |
|---|---|---|
| `--sc-color-card-flat` | surface.floating | ground; no border, no shadow |
| `--sc-color-card-flat-hover` | surface.raised | interactive hover ground |

## Glass

`level` names the surface: `clear` (thin frost, light bend), `frosted` (Levi's Figma Glass: light -45deg 30%, refraction 65, depth 68, dispersion 0, frost 9, splay 57), `thick` (heavy frost, strongest bend and tint). `tone`: `light` lightens what is behind it, `dark` darkens it. 7 cards, each in light and dark mode: 14. Values from record `output/tuning/Card/2026-10-08-0921/` (A = light tone, B = dark tone).

| Token | clear | frosted | thick | Use |
|---|---|---|---|---|
| `--sc-color-card-glass-{level}-light` | white 16% / 5% | white 24% / 8% | white 36% / 12% | light tone tint, light / dark mode |
| `--sc-color-card-glass-{level}-dark` | ink 6% / black 20% | ink 10% / black 32% | ink 16% / black 45% | dark tone tint, light / dark mode |
| `--sc-shadow-card-glass-{level}` | rim 20%, float 4/16 | rim 30%, float 6/24 | rim 45%, float 10/32 | 1px lit edge top left (half on the far wall) + floating shade on the 135deg diagonal |
| `--sc-size-card-glass-{level}-frost` | 4px | 9px | 16px | backdrop blur radius; CSS blur() takes half |
| `--sc-size-card-glass-{level}-saturation` | 140 | 160 | 180 | backdrop saturation, percent |
| `--sc-size-card-glass-{level}-refraction` | 40 | 65 | 85 | edge shift = refraction/100 x band/2 |
| `--sc-size-card-glass-{level}-depth` | 40 | 68 | 85 | band = depth/100 of the half short side |
| `--sc-size-card-glass-{level}-splay` | 57 | 57 | 57 | falloff (1 - t)^p, p = 1 + 3 x (1 - splay/100) |

| Token | light tone | dark tone | Use |
|---|---|---|---|
| `--sc-shadow-card-glass-text-{tone}` | white 60% / black 60% | white 50% / black 70% | text halo, light / dark mode |
| `--sc-color-card-glass-hover-{tone}` | white 8% / 5% | ink 6% / black 12% | interactive hover veil |

The refraction numbers are read by `glass.js`, which builds a displacement map for each card's size and corner and applies it as `backdrop-filter: url(#…)` (Chromium only). Safari and Firefox keep frost, saturation, tint, rim and halo.

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
- Glass becomes the opaque flat card under reduced transparency, more contrast, and on an engine with no backdrop-filter. Forced colors: an inset edge, no filter.
- One glass layer: never nest glass or stack glass cards.
- Glass text contrast depends on the backdrop; measure over the real one.

## Figma

Page `Card` (`535:2`), set `Card` (`535:43`): `Surface` (Flat, Clear light, Frosted light, Thick light, Clear dark, Frosted dark, Thick dark) x `Theme` (Light, Dark), 14 variants. Glass variants carry Figma's native Glass effect with the record's values; splay and saturation are code-only. Text property `Content`.
