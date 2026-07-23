# SegmentedControl · token consumption

Spec ref: Drams-component-mapping #7 (3-Way Switch → new component). One-of-N selection, `radiogroup` pattern.

New component — no existing size/color/motion tokens were missing. Every value below is an existing semantic token; no new tokens were added for this component.

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
| `--sc-space-component-padding-inline-md` / `-sm` | segment inline padding, `size="md"` / `size="sm"` |
| `--sc-space-component-padding-block-md` / `-sm` | segment block padding, `size="md"` / `size="sm"` |
| `--sc-font-text-body-dense-*` | segment label type, `size="md"` (14/regular) |
| `--sc-font-text-label-ui-*` | segment label type, `size="sm"` (12/medium) |
| `--sc-motion-reveal-duration` + `-easing` | indicator slide (transform + width) |
| `--sc-motion-hover-duration` + `-easing` | label color transition |

## States × tokens

| State | Selector | Token shift |
|---|---|---|
| Unselected (default) | resting | text: `--sc-color-text-secondary` |
| Unselected · hover | `.segment:hover:not(:disabled)` | text → `--sc-color-text-primary` |
| Selected | `aria-checked="true"` (`.segmentSelected`) | text: `--sc-color-text-primary` · indicator (raised fill `--sc-color-surface-floating`) slides under it |
| Focus | `.segment:focus-visible` | ring: `--sc-color-border-focus` at `--sc-border-width-focus` / `--sc-border-focus-offset` |
| Disabled | `disabled` prop → native `:disabled` | text: `--sc-color-text-disabled` · `cursor: not-allowed` on every segment and the track |

## The sliding indicator

The indicator is not a fixed `100% / N` width — each option can carry a different label length. Its `left`/`width` are measured live via `getBoundingClientRect()` against the selected segment's actual rendered box (re-measured on selection change, option-count change, `size` change, and window resize), then applied as an inline `transform: translateX()` + `width`. The CSS-level slide is a `transform`/`width` transition on `--sc-motion-reveal-duration` / `-easing` — the same reveal pair `Switch` uses for its thumb.

## Semantics

`role="radiogroup"` on the track, `role="radio"` + `aria-checked` on each segment button — the WAI-ARIA radio-group pattern, not native `<input type="radio">`, because the visual affordance (sliding fill) doesn't map to native radio rendering. Roving tabindex: only the selected segment (or the first segment, if nothing is selected yet) is in the tab sequence; arrow keys move focus *and* select in the same action, matching native radio-group behaviour — Tab does not need to be pressed again per segment.

## Reduced-motion

Indicator slide and label color transition are both suppressed; selection still updates instantly.
