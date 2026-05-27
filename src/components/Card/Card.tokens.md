# Card · token consumption

Spec ref: §2 Tier 3 · 3.3 · States: default, interactive (hover), elevated.

## Shared

| Token | Use |
|---|---|
| `--sc-space-component-padding-lg` | internal padding |
| `--sc-radius-surface` | corner radius |
| `--sc-border-width-default` | hairline frame |
| `--sc-color-text-primary` | text color |
| `--sc-motion-hover-duration` + `-easing` | bg/border transition |

## Per variant

| Variant | bg | border | Notes |
|---|---|---|---|
| `default` | `--sc-color-surface-sunk` | `--sc-color-border-default` | Plain set-in tile against page. |
| `interactive` | resting: `--sc-color-surface-sunk`; hover: `--sc-color-surface-deep-sunk` | `--sc-color-border-default` | Renders as `<button>`. Cursor pointer. Inherits `:focus-visible` from reset. |
| `elevated` | `--sc-color-surface-page` | `--sc-color-border-strong` | Lifts perceptually against sibling sunk cards — page-ground bg + strong frame reads as "asserted." No shadow tokens in the system (deliberate — see decisions log). |

## Why no shadow

Shadow tokens are not defined in `tokens/semantic.json` for Sprint 4. `_config/design-system/token-map.md` mentions `elevation/{1,2,3}` as Figma Effect Styles, but no DTCG primitives exist. Card's `elevated` variant uses bg + border contrast to read as lifted — consistent with the system's "Rams austerity" register (shadows belong to a different visual idiom).
