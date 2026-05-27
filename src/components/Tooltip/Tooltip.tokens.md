# Tooltip · token consumption

Spec ref: §2 Tier 3 · 3.8 · States: single-line, multi-line.

## Tokens

| Token | Use |
|---|---|
| `--sc-color-surface-inverse` | tooltip ground (ink in light / near-white in dark) |
| `--sc-color-text-on-inverse` | tooltip text (mode-inverted vs page) |
| `--sc-space-component-padding-inline-md` | inline padding |
| `--sc-space-component-padding-block-md` | block padding |
| `--sc-space-component-gap-md` | arrow offset below trigger |
| `--sc-space-component-gap-sm` | arrow leg length |
| `--sc-radius-control` | corner |
| `--sc-font-text-caption-*` | body type |
| `--sc-motion-reveal-duration` + `-easing` | fade + slide-in |
| `--sc-space-layout-stack-xl` | multi-line max-width derivation (`calc(* 3)`) |

## States × tokens

| State | Selector | Token shift |
|---|---|---|
| `single-line` | `.singleline` | `white-space: nowrap` |
| `multi-line` | `.multiline` | `white-space: normal` · `max-width: calc(--sc-space-layout-stack-xl * 3)` (240) for readability cap |
| `open` | `.open` (React state) | `opacity: 1`, transform origin clears |
| `closed` | default | `opacity: 0`, slightly translated down for slide-in feel |

## Mode behavior

`surface-inverse` and `text-on-inverse` are the two new color semantic tokens added in Sprint 4. They swap mode roles — in light mode tooltip is dark, in dark mode tooltip is light. Always reads as inverted from the surrounding surface.

## Reduced-motion

Transition suppressed. Open/closed state still flips via opacity 0/1 (instant) — no functional regression.
