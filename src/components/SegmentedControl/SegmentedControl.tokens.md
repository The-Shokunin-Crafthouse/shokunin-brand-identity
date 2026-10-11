# SegmentedControl · token consumption

Spec ref: Drams-component-mapping #7 (3-Way Switch → new component). One-of-N selection, `radiogroup` pattern.

Role tokens: `color.segmentedControl.*`, `shadow.segmentedControl.*` and `motion.segmentedControl.*` (2026-10-07), `space.component.padding-{inline,block}.segmented-control(-sm, -lg)` (2026-10-10). The tables below the first one keep the history.

## Tokens

| Token | Use |
|---|---|
| `--sc-color-surface-sunk` | track ground |
| `--sc-color-surface-floating` | selected-segment fill — the "raised" surface, used here for **fill-only elevation** (no border, no shadow, per the spec) |
| `--sc-color-text-secondary` | unselected segment label |
| `--sc-color-text-primary` | selected segment label (ink) |
| `--sc-color-text-disabled` | disabled segment label |
| `--sc-color-border-focus` | focus ring |
| `--sc-border-width-focus` | focus ring weight |
| `--sc-border-focus-offset` | focus ring offset |
| `--sc-radius-pill` | track, indicator, and segment radius |
| `--sc-space-component-gap-sm` | gap between segments |
| `--sc-space-component-padding-sm` | track inset — also sets the indicator's `top`/`bottom` inset so it aligns with the segment row |
| `--sc-space-component-padding-inline-segmented-control` / `-sm` / `-lg` | segment inline padding, `size="md"` / `"sm"` / `"lg"` (role tokens, = shared `padding-inline.md` / `.sm` / `.lg`: 12 / 6 / 16px) |
| `--sc-space-component-padding-block-segmented-control` / `-sm` / `-lg` | segment block padding, `size="md"` / `"sm"` / `"lg"` (role tokens, = shared `padding-block.md` / `.sm` / `.md`: 8 / 2 / 8px) |
| `--sc-font-text-body-dense-*` | segment label type, `size="md"` (14/regular) |
| `--sc-font-text-label-ui-*` | segment label type, `size="sm"` (12/medium) |
| `--sc-motion-reveal-duration` + `-easing` | indicator slide (transform + width) |
| `--sc-motion-hover-duration` + `-easing` | label color transition |
| `--sc-motion-press-scale` / `-duration` / `-easing` | segment press (0.985, 160ms out-strong), the shared press |
| `--sc-motion-press-release-duration` / `-easing` | press release (220ms spring-out) |
| `--sc-border-width-default` | forced-colors track edge |

## States × tokens

| State | Selector | Token shift |
|---|---|---|
| Unselected (default) | resting | text: `--sc-color-text-secondary` |
| Unselected · hover | `.segment:hover:not(:disabled)` | text → `--sc-color-text-primary` |
| Selected | `aria-checked="true"` (`.segmentSelected`) | text: `--sc-color-text-primary` · indicator (raised fill `--sc-color-surface-floating`) slides under it |
| Focus | `.segment:focus-visible` | ring: `--sc-color-border-focus` at `--sc-border-width-focus` / `--sc-border-focus-offset` |
| Active (pressed) | `.segment:active:not(:disabled)` | label `scale(--sc-motion-press-scale)` on the press pair, released on the spring-out pair. Selected segment: the indicator presses with it (`scale`). Unselected: the indicator leans toward it and does not scale |
| Disabled | `disabled` prop → native `:disabled` | text: `--sc-color-text-disabled` · `cursor: not-allowed` on every segment and the track |

## The sliding indicator

The indicator is not a fixed `100% / N` width — each option can carry a different label length. Its `left`/`width` are measured live via `getBoundingClientRect()` against the selected segment's actual rendered box (re-measured on selection change, option-count change, `size` change, and window resize), then applied as an inline `transform: translateX()` + `width`. The CSS-level slide is a `transform`/`width` transition on `--sc-motion-reveal-duration` / `-easing` — the same reveal pair `Switch` uses for its thumb.

## Semantics

`role="radiogroup"` on the track, `role="radio"` + `aria-checked` on each segment button — the WAI-ARIA radio-group pattern, not native `<input type="radio">`, because the visual affordance (sliding fill) doesn't map to native radio rendering. Roving tabindex: only the selected segment (or the first segment, if nothing is selected yet) is in the tab sequence; arrow keys move focus *and* select in the same action, matching native radio-group behaviour — Tab does not need to be pressed again per segment.

## Press

Added 2026-10-10 (CONTEXT finding 8). The pressed segment's label takes the shared press scale, as the Button does: the fast press pair while `:active`, the spring-out release pair once it drops. The indicator agrees with the lean and never scales twice:

- **Unselected segment:** the label presses; the indicator leans toward it (elastic engine, record 1645 lean 0.15) and keeps its size.
- **Selected segment:** no lean, so the label and the indicator under it press together as one key. The indicator uses the individual `scale` property, because its inline `transform` carries the travel; `transform-origin` is pinned to its own centre through `--segment-indicator-x` (set inline), so it presses in place.

Disabled segments never match `:active` and stay flat (directive 5).

## Forced colors

The recess, the key lift and the face gradient drop, and the indicator's fill is forced to the track's. The track keeps a `CanvasText` edge (`GrayText` disabled), the indicator a 2px `Highlight` frame inside it (`GrayText` disabled), and the focus ring takes `Highlight`, because the token colour would be forced to `CanvasText` and read as a second track edge. The edge is the one stroke the fills rule (2026-10-09) allows.

## Reduced-motion

Indicator slide, label color transition and both press scales are suppressed; selection still updates instantly and reads by the indicator's place and the label ink.

## Elastic motion

Engine `src/motion/elastic.js` (reference: kabarza's elastic toggles, instagram.com/reel/DeK0AFcIRhf). Applies to the sliding indicator. Shipped, stretch, squash and lean are 0, so it moves exactly as before; tune it in sc-tune (`previews/tune/?c=SegmentedControl`), where concepts start at the reel's Balanced preset.

| Token | Shipped | Role |
| --- | --- | --- |
| `--sc-motion-segmented-control-travel-duration` / `-easing` | = `motion.reveal` (200ms, quint-out) | Travel time and curve; a spring set in the lab writes its settle time to the duration |
| `--sc-motion-segmented-control-stretch` | 0 | Extra length at peak speed |
| `--sc-motion-segmented-control-squash` | 0 | Flattening at peak speed |
| `--sc-motion-segmented-control-press-lean` / `-lean-duration` | 0 / = `motion.press.duration` | On pointer down it leans toward the pressed item and holds; release travels from that pose, dragging off springs back |

Reduced motion skips the engine.

### Applied 2026-10-07 (record `output/tuning/SegmentedControl/2026-10-07-1645/`, concept A)

| Token | Ships |
| --- | --- |
| `--sc-motion-segmented-control-travel-duration` / `-easing` | 600ms / spring k146 c17.88 m1 (the Switch's; 3% overshoot) |
| `--sc-motion-segmented-control-stretch` / `-squash` / `-press-lean` | 0.45 / 0.2 / 0.15 |
| `--sc-shadow-segmented-control-track` | `inset 0.71px 0.71px 2px` ink .25 (dark black .45): the Drams recess turned to the top left |
| `--sc-shadow-segmented-control-indicator` | the Button key lift (`shadow.control.key` values), per mode |
| `--sc-color-segmented-control-indicator-shade` | ink .05 (dark .25), the 135deg face shade |

Track and indicator fills keep `surface.sunk` and `surface.floating` values through their role tokens. Disabled is flat.
