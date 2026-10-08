# Input · token consumption

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

## Physical well (physical-controls Tier 1, 2026-10-07)

The Input reads its own role tokens, so a tune in sc-tune never moves cards, the Stepper or the components that share `padding-*-md` and `gap-sm` (CONTEXT finding 5). Every value shipped equal to the flat field; the material reaches SCDS only through an sc-tune record.

| Token | Shipped | Use |
|---|---|---|
| `--sc-color-input-well` / `-well-hover` / `-well-focus` / `-well-disabled` | = surface.sunk / sunk / page / sunk | field fill; hover is new (equal to rest) |
| `--sc-shadow-input-well` | zero alpha | recess of the well (focus and error add their underline on top) |
| `--sc-color-input-rule` / `-rule-hover` / `-rule-filled` / `-rule-focus` | = border.default / default / strong / focus | bottom rule; the hover rule moves only on an empty, valid field |
| `--sc-space-component-padding-inline-input` / `-padding-block-input` | 12 / 8 | field padding |
| `--sc-space-component-gap-input` | 4 | label, field and helper rhythm |

Disabled is flat: no recess. Forced colors: the field keeps a full `CanvasText` edge, focus is a `Highlight` outline, disabled is `GrayText`.
