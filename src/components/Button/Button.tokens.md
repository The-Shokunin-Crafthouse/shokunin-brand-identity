# Button · token consumption

Spec ref: §2 Tier 3 · 3.1 · States: primary, secondary, ghost, destructive, disabled, loading.

## Shared (every variant)

| Token | Use |
|---|---|
| `--sc-space-component-padding-inline-md` | inline padding |
| `--sc-space-component-padding-block-md` | block padding |
| `--sc-space-component-gap-md` | label ↔ spinner gap |
| `--sc-radius-surface` | corner radius |
| `--sc-border-width-default` | border weight |
| `--sc-font-text-label-chrome-*` | medium widest mono-caps register |
| `--sc-motion-hover-duration` + `-easing` | bg/border/color transition |
| `--sc-motion-press-duration` + `-easing` + `-scale` (0.985) | press feedback |

## Per variant

| Variant | Resting | Hover | Active |
|---|---|---|---|
| `primary` | bg + border = `brand-accent`, text = `text-on-accent` | bg + border → `brand-accent-deep` | + transform scale press |
| `secondary` | border + text = `interactive-default` | → `interactive-hover` (shu) | text + border → `interactive-active` (shu deep) + scale |
| `ghost` | text = `interactive-default`, no border | bg → `surface-deep-sunk`, text → `interactive-hover` | + scale press |
| `destructive` | bg + border = `status-error`, text = `text-on-accent` | bg + border → `brand-accent-deep` | + scale press |

## State-only

| State | Tokens |
|---|---|
| `disabled` | `--sc-color-text-disabled`, `--sc-color-border-default`, `cursor: not-allowed`. Cross-variant — disables fill/hover/press. |
| `loading` | label opacity 0.6, spinner ring built from `currentColor` + `--sc-border-width-default` + `--sc-radius-pill` + `--sc-motion-mode-duration` (380ms linear loop). |
| `focus` | inherits `:focus-visible` from `reset.css` · `--sc-color-border-focus` ring at `--sc-border-width-focus` thickness, `--sc-border-focus-offset` offset. |

## Reduced-motion

`@media (prefers-reduced-motion: reduce)` kills the transition, the press-scale transform, and the spinner rotation. Functional path remains — the button still responds to hover/active visually via color, just without animation.

## Spinner-duration note

The spinner rotation uses `--sc-motion-mode-duration` (380ms) — the only semantic motion duration in the "spin-readable" register. 720ms (orchestrated, primitive only) would be the aesthetic match. Adding a `motion/continuous/duration` semantic alias was considered and deferred — single-component need, low marginal value vs. a Sprint 5+ revisit when the brand site introduces other continuous-motion surfaces.
