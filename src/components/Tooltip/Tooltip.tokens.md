# Tooltip · token consumption

Spec ref: §2 Tier 3 · 3.8 · States: single-line, multi-line.

## Tokens

| Token | Use |
|---|---|
| `--sc-color-tooltip-surface` | tooltip ground (role token; shipped = `surface.inverse`: ink in light / near-white in dark) |
| `--sc-color-tooltip-text` | tooltip text (role token; shipped = `text-on-inverse`) |
| `--sc-shadow-tooltip-plate` | lift of the plate (role token; shipped zero alpha, flat). Snaps, never transitions |
| `--sc-space-component-padding-inline-tooltip` | inline padding (role token, 12) |
| `--sc-space-component-padding-block-tooltip` | block padding (role token, 8) |
| `--sc-space-component-gap-tooltip` | offset between the trigger and the arrow tip (role token, 8) |
| `--sc-size-tooltip-arrow` | arrow leg (role token, 4; 0 drops the arrow) |
| `--sc-size-tooltip-lift` | travel of the open: starts this far above rest (role token, 4) |
| `--sc-radius-tooltip` | corner (role token, 3) |
| `--sc-font-text-caption-*` | body type |
| `--sc-motion-tooltip-travel-duration` + `-easing` | fade + slide-in (role tokens, = `motion.reveal`) |
| `--sc-border-width-default` | forced-colors edge |
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

## Role tokens

Physical-controls Tier 2 (CONTEXT finding 5): the tooltip reads its own role tokens instead of the shared padding, gap, radius and inverse tokens, so a tune in sc-tune never moves a sibling. Each shipped equal to today (2026-10-08).

## Glass variant (concept B in sc-tune)

`variant="glass"` makes the bubble liquid glass, because a tooltip is a floating layer. The shipped tooltip stays `solid`; the glass ships only if Levi picks it. Claude's start is the Card's frosted glass in its auto tone, copied by value into the tooltip's own tokens: `--sc-color-tooltip-glass-tint` / `-text`, `--sc-shadow-tooltip-glass-rim` / `-text`, `--sc-size-tooltip-glass-frosted-{frost,refraction,depth,splay,saturation,light}`. The refraction is `Card/glass.js` (Chromium only). The arrow takes the tint. Glass becomes the solid tooltip under `prefers-reduced-transparency`, `prefers-contrast: more` and on an engine with no `backdrop-filter`; forced colors drop the filter.

## Forced colors

The ground and the shadow drop; an inset `CanvasText` outline keeps the bubble's edge and the arrow is drawn in `CanvasText`.

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
