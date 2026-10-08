# Stepper · token consumption

Spec ref: Drams-component-mapping #8 (Plus Minus Knob → new component). Numeric increment/decrement, bordered-free control on the sunk ground.

Physical since record Stepper 2026-10-07-1847 concept A (Levi), applied 2026-10-07: ± keys are the Button key on a recessed pill, lit from the top left; hover and press are the Button primary's.

## Tokens

| Token | Use |
|---|---|
| `--sc-color-stepper-track` | pill ground (= surface.sunk) |
| `--sc-shadow-stepper-track` | pill recess, top left |
| `--sc-color-stepper-key` / `-key-shade` | key face fill and its 135deg shade (= surface.raised, control.keyShade) |
| `--sc-shadow-stepper-key` | key lift at rest (= shadow.control.key) |
| `--sc-color-stepper-key-hover` / `-key-hover-ink` | hover face and glyph (= control.keyHoverFill / keyHoverInk) |
| `--sc-shadow-stepper-key-hover` | hover lift (= shadow.control.keyHover) |
| `--sc-color-stepper-key-pressed` / `-key-pressed-ink` | pressed face and glyph (= brand.accentDeep / text.onAccent) |
| `--sc-shadow-stepper-key-pressed` | pressed (= shadow.control.keyPressed) |
| `--sc-color-text-primary` | glyph + readout numeral at rest |
| `--sc-color-text-disabled` | disabled glyph + readout numeral |
| `--sc-color-border-focus` / `--sc-border-width-focus` / `--sc-border-focus-offset` | focus ring (keys + readout) |
| `--sc-radius-pill` / `--sc-radius-control` | control + key radius / readout radius |
| `--sc-size-icon-md` | key hit-area is `calc(icon-md + 2 × padding-sm)` = 40 |
| `--sc-space-component-gap-stepper` | key → readout gaps, readout inline padding (8; role token) |
| `--sc-space-component-padding-sm` | control inset; also the padding half of each key's hit-area calc |
| `--sc-font-text-mono-body-*` | numeral readout, fixed to two digits (`2ch` + tracking + padding) |
| `--sc-motion-stepper-travel-*`, `-roll`, `-stretch`, `-squash` | readout roll: 1 height, stretch 0.45, 1062ms spring (Stepper.jsx, src/motion/elastic.js) |
| `--sc-motion-stepper-glyph-press-scale` | glyph's own press scale, 0.85, on top of the key's |
| `--sc-motion-hover-*` | key colour transition (the glyph fades to white); shadows snap |
| `--sc-motion-press-*` | key press: 0.985 scale, 160ms outStrong |

## States × tokens (each ± key)

| State | Selector | Token shift |
|---|---|---|
| Default | resting | key face + shade + lift; glyph `text-primary` |
| Hover | `:hover:not(:disabled)` | face `key-hover`, glyph `key-hover-ink`, lift `key-hover` |
| Focus | `:focus-visible` | ring: `--sc-color-border-focus` |
| Active / pressed (incl. held-repeat) | `:active:not(:disabled)` | face `key-pressed`, glyph `key-pressed-ink`, shadow `key-pressed`, key 0.985, glyph 0.85 |
| Disabled (at bound) | native `:disabled` | flat: no face, shade or lift; glyph `text-disabled` |
| Disabled (control) | `disabled` prop | whole control at 0.6; pill recess off |

## Hold-to-repeat

Pointerdown on a ± button steps once immediately (so a quick tap always registers), then arms a 400ms timeout; if the pointer is still down when that fires, it starts an 80ms-interval repeat. `pointerup`, `pointerleave`, and `pointercancel` all clear both the timeout and the interval — releasing off the button, not just off the page, stops the repeat. Reads `value` via a ref on every tick so the interval always steps from the latest committed value rather than a stale closure.

## Keyboard

The numeral readout is `role="spinbutton"` with `aria-valuenow`/`-valuemin`/`-valuemax` — Up/Down step it directly by `step` without needing to tab to the ± buttons. Home/End jump to `min`/`max` when they're finite (an unbounded Stepper — the default — has no Home/End target, so those keys no-op rather than jumping to `±Infinity`).

## Reduced-motion

Button background/color transition and the press scale are both suppressed; stepping and the disabled-at-bounds state remain fully functional.
