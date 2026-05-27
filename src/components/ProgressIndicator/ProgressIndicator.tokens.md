# ProgressIndicator · token consumption

Spec ref: §2 Tier 3 · 3.10 · States: bar, circular, step.

## Tokens

| Token | Use |
|---|---|
| `--sc-size-progress-bar-height` | bar height |
| `--sc-size-progress-circular` | circle diameter |
| `--sc-size-progress-circular-stroke` | ring stroke |
| `--sc-radius-pill` | bar fill caps |
| `--sc-color-surface-deep-sunk` | bar + ring track + step dot ground |
| `--sc-color-brand-accent` | fill |
| `--sc-color-text-on-accent` | done-step numeral |
| `--sc-color-text-secondary` | resting step numeral |
| `--sc-color-text-primary` | current step numeral |
| `--sc-color-border-default` | resting step dot border + connector |
| `--sc-color-border-strong` | current step dot border |
| `--sc-border-width-default` | step dot border + connector height |
| `--sc-space-component-gap-md` | step item gap |
| `--sc-space-layout-stack-sm` | step dot diameter (reuses 16 space) |
| `--sc-space-layout-stack-md` | step connector min-width |
| `--sc-font-text-mono-chrome-*` | step numerals (chrome mono caps) |
| `--sc-motion-reveal-duration` + `-easing` | fill + transition |

## Variants × states

| Variant | States | Token notes |
|---|---|---|
| `bar` | value 0..1 | width animates via reveal duration · fill is brand accent |
| `circular` | value 0..1 | SVG stroke-dasharray with calc'd stroke ratio so the SVG viewBox decouples from the semantic size token |
| `step` | resting / done / current | dots pull color from semantic; connectors fill green-light-on-done |

## SVG ratio math

Circular indicator uses an SVG `viewBox` of `0 0 100 100` — a viewBox is unitless and not a `px` value. Real-world size flows from the container `width`/`height` (`--sc-size-progress-circular`). Stroke width is mapped from the semantic stroke token via `calc(stroke / diameter * 100)` so the ratio stays correct as either token moves.

## Reduced-motion

All progress transitions suppressed.
