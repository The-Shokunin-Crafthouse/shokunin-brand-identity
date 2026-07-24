# Stepper · token consumption

Spec ref: Drams-component-mapping #8 (Plus Minus Knob → new component). Numeric increment/decrement, bordered-free control on the sunk ground.

New component — every token below already existed in the semantic layer; no new tokens were added.

## Tokens

| Token | Use |
|---|---|
| `--sc-color-surface-sunk` | control ground |
| `--sc-color-surface-deep-sunk` | ± button hover/active ground |
| `--sc-color-text-primary` | button ink (glyph) + readout numeral |
| `--sc-color-text-disabled` | disabled button glyph + readout numeral |
| `--sc-color-border-focus` | focus ring (buttons + readout) |
| `--sc-border-width-focus` | focus ring weight |
| `--sc-border-focus-offset` | focus ring offset |
| `--sc-radius-pill` | control + button radius |
| `--sc-radius-control` | readout's own focus-ring radius (smaller control-grade radius) |
| `--sc-size-icon-md` | glyph box — button hit-area is `calc(icon-md + 2 × padding-sm)`, not a fixed pixel value |
| `--sc-space-component-gap-sm` | control → readout gaps, readout inline padding |
| `--sc-space-component-padding-sm` | control inset; also the padding half of each button's hit-area calc |
| `--sc-font-text-mono-body-*` | numeral readout — mono, per the spec ("mono numeral readout") |
| `--sc-motion-hover-duration` + `-easing` | button bg/color transition |
| `--sc-motion-press-duration` + `-easing` + `-scale` | button press feedback — reuses the same press pair `Button` uses (0.985 scale, 160ms outStrong); the Stepper's ± buttons get the studio press affordance for free rather than inventing a second one |

## States × tokens (each ± button)

| State | Selector | Token shift |
|---|---|---|
| Default | resting | glyph: `--sc-color-text-primary` · ground transparent |
| Hover | `:hover:not(:disabled)` | ground → `--sc-color-surface-deep-sunk` |
| Focus | `:focus-visible` | ring: `--sc-color-border-focus` at `--sc-border-width-focus` / `--sc-border-focus-offset` |
| Active / pressed (incl. held-repeat) | `:active:not(:disabled)` | ground stays `--sc-color-surface-deep-sunk` + `transform: scale(--sc-motion-press-scale)` |
| Disabled (at bound) | native `:disabled` (`aria-disabled` mirrors it via `disabled` prop) | glyph: `--sc-color-text-disabled` · `cursor: not-allowed` — computed automatically from `value <= min` / `value >= max`, not a separate flag callers must track |

## Hold-to-repeat

Pointerdown on a ± button steps once immediately (so a quick tap always registers), then arms a 400ms timeout; if the pointer is still down when that fires, it starts an 80ms-interval repeat. `pointerup`, `pointerleave`, and `pointercancel` all clear both the timeout and the interval — releasing off the button, not just off the page, stops the repeat. Reads `value` via a ref on every tick so the interval always steps from the latest committed value rather than a stale closure.

## Keyboard

The numeral readout is `role="spinbutton"` with `aria-valuenow`/`-valuemin`/`-valuemax` — Up/Down step it directly by `step` without needing to tab to the ± buttons. Home/End jump to `min`/`max` when they're finite (an unbounded Stepper — the default — has no Home/End target, so those keys no-op rather than jumping to `±Infinity`).

## Reduced-motion

Button background/color transition and the press scale are both suppressed; stepping and the disabled-at-bounds state remain fully functional.
