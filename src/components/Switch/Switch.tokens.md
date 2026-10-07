# Switch · token consumption

Spec ref: §2 Tier 3 · 3.9 · States: on, off, disabled.

## Tokens

| Token | Use |
|---|---|
| `--sc-size-switch-track-width` | track width |
| `--sc-size-switch-track-height` | track height |
| `--sc-size-switch-thumb` | thumb diameter |
| `--sc-radius-pill` | track + thumb radius (pill / circle) |
| `--sc-color-surface-deep-sunk` | off track ground |
| `--sc-color-brand-accent` | on track ground |
| `--sc-color-surface-page` | thumb fill |
| `--sc-color-surface-sunk` | disabled track ground |
| `--sc-color-border-default` | thumb edge |
| `--sc-color-text-disabled` | disabled thumb edge + label |
| `--sc-color-text-primary` | label |
| `--sc-color-border-focus` | focus ring |
| `--sc-border-width-default` | thumb stroke |
| `--sc-border-width-focus` | focus ring weight |
| `--sc-border-focus-offset` | focus ring offset |
| `--sc-font-text-body-default-*` | label type |
| `--sc-space-component-gap-md` | switch ↔ label gap |
| `--sc-motion-reveal-duration` + `-easing` | thumb slide + track bg |

## States × tokens

| State | Selector | Token shift |
|---|---|---|
| `off` | resting | track: `--sc-color-surface-deep-sunk` · thumb: `--sc-color-surface-page` with `--sc-color-border-default` edge |
| `on` | `:checked ~ .track` | track: `--sc-color-brand-accent` · thumb translates to right edge via `calc()` of track + thumb tokens |
| `disabled` | `:disabled ~ .track` | track: `--sc-color-surface-sunk` · thumb edge: `--sc-color-text-disabled` · cursor not-allowed |
| `focus` | `:focus-visible ~ .track` | outline at `--sc-border-width-focus` weight + `--sc-border-focus-offset` |

## Thumb math

Thumb position derived entirely from semantic tokens:

- Inset (resting `left`): `(track-height − thumb) / 2` — symmetric 2 ring above and below thumb
- Travel destination: `track-width − thumb − inset` — places thumb at the right edge with the same 2 ring

No magic numbers. If track or thumb sizes change in `tokens/semantic.json`, the math stays correct.

## Reduced-motion

Track bg and thumb position transitions suppressed. Switch still flips state instantly.

## Glyphs (optional)

`glyphs` (default `true`) renders the I/O glyph row. `glyphs={false}` leaves a plain recessed track; `--sc-size-switch-glyph` and `--sc-color-switch-glyph-*` are then unread. Knob position still carries on/off without colour (WCAG 1.4.1). Figma: the Toggle set's `Glyphs` boolean property (`Glyphs#498:0`) shows or hides the `Glyphs` layer in both variants.

## Motion (stretch, squash, press lean)

Reference: kabarza's elastic toggles (instagram.com/reel/DeK0AFcIRhf). `switchMotion.js` (on the shared `src/motion/elastic.js`) drives the knob when stretch, squash or lean is above 0. Shipped values are Levi's concept B from record `output/tuning/Switch/2026-10-07-1539/`, applied 2026-10-07.

| Token | Shipped | What it does |
| --- | --- | --- |
| `--sc-motion-switch-travel-duration` / `-easing` | 600ms / spring k146 c17.88 m1 (3% overshoot; settles in 1093ms on its own) | Knob and glyph travel, track ground. The easing is a `spring` token: CSS gets the lab's `linear()`, Swift an `SCDSSpring` time-scaled to the duration. |
| `--sc-motion-switch-stretch` | 1.06 | Extra knob length at peak speed, × knob (1.06 = about twice as long). Length follows speed, so it lands round. Width grows, the pill radius holds: two round ends and a bar, never `scaleX`. |
| `--sc-motion-switch-squash` | 0.15 | Flattening at peak speed, × knob (0.15 = 15% flatter). |
| `--sc-motion-switch-press-lean` | 0.12 | On pointer down the front edge leans toward the target and holds (1 = a quarter of the travel). Release travels from that pose; dragging off springs back. |
| `--sc-motion-switch-press-lean-duration` | = `motion.press.duration` (160ms) | Time to lean. Inert while lean is 0. |
| `--sc-size-switch-label-offset` | 0px | Vertical label nudge, positive moves down. |

Reduced motion skips the engine; disabled ignores it.
