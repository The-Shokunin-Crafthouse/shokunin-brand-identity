# Slider · token consumption

A value the user sets by dragging or by keys. Drams #5 Standard Volume, #12 Dynamic Slider. Split from ProgressIndicator's interactive bar on 2026-10-07 (Levi): a progress indicator is read, a slider is moved. Physical-controls Tier 1: a recessed track and a physical thumb lit from the top left.

The Slider reads only its own role tokens (`--sc-*-slider-*`), so a tune in sc-tune never moves ProgressIndicator, the Switch or other sunk surfaces. The tokens shipped equal to the thumbless interactive bar; the material reaches SCDS only through an sc-tune record.

## Tokens

| Token | Use |
|---|---|
| `--sc-color-slider-track` / `-track-disabled` | track ground |
| `--sc-color-slider-fill` / `-fill-hover` / `-fill-disabled` | fill; the disabled thumb is a flat `fill-disabled` disc |
| `--sc-shadow-slider-track` | recess of the track |
| `--sc-size-slider-track` / `-track-active` | track height at rest / while dragged |
| `--sc-size-slider-hit-slop` | invisible block padding (48px hit height with the 4px track) |
| `--sc-size-slider-thumb` | thumb diameter |
| `--sc-color-slider-thumb-rim-top` / `-rim-bottom` / `-face-top` / `-face-bottom` | thumb rim and face, both at 135deg (the system light) |
| `--sc-shadow-slider-thumb` / `-thumb-pressed` | thumb lift at rest / while dragged |
| `--sc-motion-slider-travel-duration` / `-easing` | fill and thumb on a seek (click, key) |
| `--sc-motion-slider-drag-duration` / `-easing` | fill and thumb trailing the pointer |
| `--sc-motion-slider-stretch` / `-squash` | thumb stretch with speed on a seek (`src/motion/elastic.js`) |
| `--sc-motion-slider-thumb-press-scale` | thumb scale while dragged |

Shared: `--sc-radius-pill`, `--sc-border-width-default` (thumb rim hairline, forced-colors edge), the focus ring (`--sc-color-border-focus`, `--sc-border-width-focus`, `--sc-border-focus-offset`), `--sc-motion-reveal-*` (track thickening), `--sc-motion-hover-*` (fill colour), `--sc-motion-press-*` (thumb scale timing).

## Geometry

The thumb rides inside the track: its centre runs from thumb/2 to width − thumb/2 over min..max, and the fill ends under it (`width = max(thumb/2 + (100% − thumb) × value, track)`). A pointer maps through the same inset. With a 0px thumb both reduce to the thumbless bar.

## States

| State | Trigger | Tokens |
|---|---|---|
| Default | resting | track, fill, thumb lift |
| Hover | `:hover` on the wrapper | `fill-hover` |
| Focus | `:focus-visible` | ring on the visual track, not the hit-slop box |
| Active | pointer captured | track → `track-active`, thumb `thumb-press-scale` and `thumb-pressed`; once the pointer moves, the drag curve |
| Disabled | `disabled` | flat: `track-disabled`, no recess, no lift, no face, `fill-disabled` fill and thumb, not focusable |

Forced colors: the track keeps a `CanvasText` edge, the fill is `Highlight`, the thumb a solid `ButtonText` disc (`GrayText` when disabled). Reduced motion drops every transition and the press scale.

## Interaction

- Pointer: pointerdown seeks to the click and starts a drag (`setPointerCapture`); pointermove continues; pointerup/cancel ends it.
- Keyboard: `role="slider"`, arrows step by `step` (0.01), Shift by `bigStep` (0.05), Home/End to `min`/`max`.
- `aria-valuemin` / `-max` / `-now` are percent-space (0–100), the contract the interactive bar had.

## Sound

None shipped. The lab plays the concept's sound on a keyboard step that changes the value.
