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
| `multi-line` | `.multiline` | `white-space: normal` · `width: max-content` so the box grows to the cap (an absolute box at `left: 50%` otherwise shrinks to half the trigger) · `max-width: calc(--sc-space-layout-stack-xl * 3)` (240) for readability cap |
| `open` | `.open` (React state) | `opacity: 1`, transform origin clears |
| `closed` | default | `opacity: 0`, slightly translated down for slide-in feel |

## Mode behavior

`surface-inverse` and `text-on-inverse` are the two new color semantic tokens added in Sprint 4. They swap mode roles — in light mode tooltip is dark, in dark mode tooltip is light. Always reads as inverted from the surrounding surface.

## Reduced-motion

Transition suppressed. Open/closed state still flips via opacity 0/1 (instant) — no functional regression.

## Elastic motion

Engine `src/motion/elastic.js` (reference: kabarza's elastic toggles, instagram.com/reel/DeK0AFcIRhf). Applies to the bubble on open (scales from the arrow, since it carries text. Shipped, stretch, squash and lean are 0, so it moves exactly as before; tune it in sc-tune (`previews/tune/?c=Tooltip`), where concepts start at the reel's Balanced preset.

| Token | Shipped | Role |
| --- | --- | --- |
| `--sc-motion-tooltip-travel-duration` / `-easing` | = `motion.reveal` (200ms, quint-out) | Travel time and curve; a spring set in the lab writes its settle time to the duration |
| `--sc-motion-tooltip-stretch` | 0 | Extra length at peak speed |
| `--sc-motion-tooltip-squash` | 0 | Flattening at peak speed |

Reduced motion skips the engine.
