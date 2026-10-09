# Tooltip · token consumption

Spec ref: §2 Tier 3 · 3.8 · States: single-line, multi-line.

Physical-controls Tier 2: a raised plate that grows out of the trigger point. Record `output/tuning/Tooltip/2026-10-08-2007/`, concept A (Levi), applied 2026-10-08.

## Tokens

| Token | Use |
|---|---|
| `--sc-color-tooltip-surface` | plate ground: white (`utility.white`) in light, the dark key (`dark.raised1`) in dark |
| `--sc-color-tooltip-text` | text: `text.primary` values (`warmGray.800` / `dark.textPrimary`) |
| `--sc-shadow-tooltip-plate` | drop shadow, lit from the top left: 2px 2px 6px warm gray 50% in light, 3px 3px 7px black 50% in dark. Tooltip.jsx turns its outer layers into a `drop-shadow()` filter so it falls under the bubble and the arrow as one shape; spread and inset layers do not render. Snaps, never transitions |
| `--sc-space-component-padding-inline-tooltip` | inline padding (12) |
| `--sc-space-component-padding-block-tooltip` | block padding (8) |
| `--sc-space-component-gap-tooltip` | offset between the trigger and the arrow tip (24) |
| `--sc-size-tooltip-arrow` | arrow leg (8; 0 drops the arrow) |
| `--sc-size-tooltip-arrow-tip` / `-fillet` | arrow tip radius and the concave fillet where the arrow meets the bubble (2 / 2). The arrow is an SVG path built in `shape.js` |
| `--sc-size-tooltip-lift` | travel of the open: starts this far above rest (4) |
| `--sc-radius-tooltip` | corner (4) |
| `--sc-font-text-caption-*` | body type |
| `--sc-motion-tooltip-*` | open and close motion (see Elastic motion) |
| `--sc-border-width-default` | forced-colors edge |
| `--sc-space-layout-stack-xl` | multi-line max-width derivation (`calc(* 3)`) |

Every token is the tooltip's own role token (CONTEXT finding 5), so a tune in sc-tune never moves a sibling.

## States × tokens

| State | Selector | Token shift |
|---|---|---|
| `single-line` | `.singleline` | `white-space: nowrap` |
| `multi-line` | `.multiline` | `white-space: normal` · `width: max-content` so the box grows to the cap (an absolute box at `left: 50%` otherwise shrinks to half the trigger) · `max-width: calc(--sc-space-layout-stack-xl * 3)` (240) for readability cap |
| `open` | `.open` (React state) | `opacity: 1`, at rest |
| `closed` | default | `opacity: 0`, lifted by `--sc-size-tooltip-lift` |

## Mode behavior

Light mode: a white plate with a warm-gray drop shadow. Dark mode: the dark key with a black drop shadow (Gate 1 pick 3, dark keys). The plate is no longer the inverse of the page: it reads as a layer because it is raised, not because it is inverted.

## Sound

The `reveal` role sound (`src/sound/assets/reveal.wav`, Drams 031 pitched to 0.65x at volume 0.2, baked in) plays as hover or focus opens the tooltip, not when the `open` prop forces it. `sound={false}` opts one instance out; `SoundProvider` can silence every sound.

## Forced colors

The ground and the shadow filter drop; an inset `CanvasText` outline keeps the bubble's edge and the arrow path fills `CanvasText`.

## Reduced-motion

The engine is skipped and the transition suppressed. Open/closed state still flips via opacity 0/1 (instant); no functional regression.

## Elastic motion

Engine `src/motion/elastic.js` via Tooltip.jsx (reference: kabarza's elastic toggles, instagram.com/reel/DeK0AFcIRhf). On open the plate grows from a point at the arrow tip to full size, overshoots 3% and settles; on close it shrinks back into the same point. A run cut short hands its pose to the next, so leaving mid-grow shrinks from the size it reached.

| Token | Shipped | Role |
| --- | --- | --- |
| `--sc-motion-tooltip-travel-duration` / `-easing` | 720ms (`motion.duration.orchestrated`), spring 146 / 17.88 / 1 (the Switch spring, 3% overshoot) | Travel time and curve. The spring alone settles in 1093ms; it plays over 720ms |
| `--sc-motion-tooltip-stretch` | 2 | Taller at peak speed: 1 = 20% |
| `--sc-motion-tooltip-squash` | 2 | Narrower at peak speed: 1 = 20% |
| `--sc-motion-tooltip-grow-from` | 0 | Start scale about the arrow tip; the curve carries it to 1. On close the curve runs back and is cut where it first reaches 1, so an overshoot never flashes the plate back. 1 = no grow |
