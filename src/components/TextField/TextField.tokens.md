# TextField · token consumption

Spec ref: §2 Tier 3 · 3.4 · States: default, focus, filled, error, disabled.
scds-v2 Phase 2: filled field — no box frame; a single bottom rule + fill-shift carry every state.

## Tokens

| Token | Use |
|---|---|
| `--sc-space-component-padding-inline-md` | inline padding inside input |
| `--sc-space-component-padding-block-md` | block padding inside input |
| `--sc-space-component-gap-sm` | label ↔ input ↔ helper rhythm |
| `--sc-radius-control` | corner radius (on the fill) |
| `--sc-border-width-default` | bottom-rule weight |
| `--sc-font-text-body-default-*` | input value |
| `--sc-font-text-label-ui-*` | field label |
| `--sc-font-text-caption-*` | helper / error |
| `--sc-color-surface-sunk` | resting + disabled fill (inset well) |
| `--sc-color-surface-page` | focus fill-shift (lifts on focus) |
| `--sc-color-border-default` | resting bottom rule |
| `--sc-color-border-strong` | filled-state bottom rule (`:not(:placeholder-shown)`) |
| `--sc-color-border-focus` | focus bottom rule (doubled to 2px via inset shadow) |
| `--sc-color-status-error` | error bottom rule + error helper |
| `--sc-color-text-primary` | value ink |
| `--sc-color-text-secondary` | label + helper |
| `--sc-color-text-disabled` | placeholder + disabled value |
| `--sc-motion-hover-duration` + `-easing` | bg / border-bottom / box-shadow transition |

## States × tokens

| State | Selector | Token shift |
|---|---|---|
| `default` | resting | fill `--sc-color-surface-sunk` · bottom rule `--sc-color-border-default` |
| `focus` | `:focus` | fill lifts to `--sc-color-surface-page` · bottom rule `--sc-color-border-focus`, doubled to 2px via `box-shadow: inset 0 -1px` (no reflow) · UA outline suppressed |
| `filled` | `:not(:placeholder-shown):not(:disabled)` | bottom rule → `--sc-color-border-strong` — content earns a darker rule |
| `error` | `.errored` (prop) | bottom rule → `--sc-color-status-error` resting + on focus · helper color flips to error |
| `disabled` | `:disabled` | fill `--sc-color-surface-sunk` · bottom rule transparent · `color: --sc-color-text-disabled` · cursor not-allowed |

## Fill-shift + bottom-border model

scds-v2 Phase 2 removed the box frame. The input is an inset fill (`surface-sunk`) with a single bottom rule. Focus is the loudest state: the fill lifts to `surface-page` and the bottom rule goes to the high-contrast focus colour, doubled to an effective 2px with an inset shadow so it reads at AA without shifting layout. Content (filled) darkens the rule to `border-strong`; error recolours it. Depth and state are carried by fill and one rule — never a stroke around the field.

## Filled field (Levi's reference, 2026-10-07)

Superseded the bottom-rule field above. Levi's reference is a filled-field set; one change: the label (form title) stays above the field, left-aligned, with optional subcopy (`description`) between the title and the field. Icons are Phosphor, bold. Values are the reference scaled x0.8 from its 20px value to the 16px body.

| Token | Value | Use |
|---|---|---|
| `--sc-color-input-well` (`-hover`, `-focus`, `-disabled` = well) | white 46% / white 15% | field fill; light is lighter than the page at the reference's contrast (Levi) |
| `--sc-color-input-well-raised` | ink 7% / white 15% | field fill with `surface="raised"` (on surface.raised, surface.floating or a flat Card), every state; keeps the page field's contrast (Levi 2026-10-08) |
| `--sc-shadow-input-well` | zero alpha | recess (the reference is flat) |
| `--sc-radius-field` | 8px (= radius.default, Levi) | field corner |
| `--sc-space-component-padding-inline-input` / `-padding-block-input` | 16 / 12 | box padding; the field is 48px tall |
| `--sc-space-component-gap-input-inline` | 16 | between prefix, icon, value, suffix, clear, trailing |
| `--sc-space-component-gap-input` | 4 | title, subcopy, field, helper |
| `--sc-size-input-icon` | 20 | leading and trailing icons (Phosphor bold) |
| `--sc-size-input-clear` / `-clear-target` | 16 / 32 | clear mark and its button |
| `--sc-color-input-adornment` | = text.secondary | icons, suffix, clear |
| `--sc-color-input-divider` | warmGray.300 / dark.raised2 | rule after a prefix segment |

**Slots:** `icon`, `prefix`, `suffix`, `trailing` (a Phosphor component renders bold; a node renders as given), `clearable` + `onClear` (the button shows while the field holds a value and is named "Clear <label>").

**States:** hover and focus keep the fill (the reference shows neither); focus is the system ring on the box; error is a hairline `status.error` edge, a 2px ring when focused, and the error text under the field. Disabled is flat with disabled ink. Forced colors: a full `CanvasText` edge, a `Highlight` focus ring, `GrayText` when disabled.

Figma: `TextField` set `9:487` (variants Default, Hover, Focus, Active, Disabled, Error `528:95`; boolean props Leading icon, Clear, Subcopy), icons `Icon/envelope-simple-bold` `527:8`, `Icon/x-bold` `527:4`. Record `output/tuning/TextField/2026-10-07-2237/`, applied 2026-10-07.
