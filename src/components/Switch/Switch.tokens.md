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
