# Card · token consumption

Spec ref: §2 Tier 3 · 3.3 · States: default, interactive (hover + focus), elevated.
scds-v2 Phase 2: fill-only elevation — no resting stroke frame.

## Shared

| Token | Use |
|---|---|
| `--sc-space-component-padding-lg` | internal padding |
| `--sc-radius-surface` | corner radius |
| `--sc-shadow-control-inset` | interactive hover/focus feedback (inset ring) |
| `--sc-color-border-focus` + `--sc-border-width-focus` + `--sc-border-focus-offset` | interactive focus ring |
| `--sc-color-text-primary` | text color |
| `--sc-motion-hover-duration` + `-easing` | bg/box-shadow transition |

## Per variant

| Variant | bg | elevation cue | Notes |
|---|---|---|---|
| `default` | `--sc-color-surface-sunk` | fill only | Plain set-in tile against page. No border. |
| `interactive` | resting: `--sc-color-surface-sunk`; hover: `--sc-color-surface-deep-sunk` | `--sc-shadow-control-inset` on hover/focus | Renders as `<button>`. Cursor pointer. Explicit `:focus-visible` ring + inset shadow. |
| `elevated` | `--sc-color-surface-page` | fill only | Lifts perceptually against sibling sunk cards — the step up in fill weight reads as "lifted." No resting frame. |

## Elevation model

scds-v2 Phase 2 replaced the resting hairline frame with fill-only elevation: surface weight (sunk → page) separates the variants, and the only shadow is `--sc-shadow-control-inset`, applied to the interactive variant on hover/focus to narrate interactivity without an outline. The `--sc-shadow-control-*` tokens are semantic to controls, composed from the channel-triplet ink/white primitives (see `tokens/semantic.json`).
