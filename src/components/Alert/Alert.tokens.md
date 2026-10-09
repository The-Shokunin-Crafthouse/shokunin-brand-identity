# Alert · token consumption

Spec ref: §2 Tier 3 · 3.11 · States: info, warning, error, success.

## Role tokens (physical-controls Tier 2: a plate with a status LED)

Each shipped equal to today (CONTEXT finding 5), so a tune never moves the siblings that share the old values.

| Token | Use | Shipped |
|---|---|---|
| `--sc-space-component-padding-alert` | internal padding | = `padding.lg` (24px) |
| `--sc-space-component-gap-alert` | LED to text | 0 (the row held one child, so `gap.md` was inert) |
| `--sc-space-component-gap-alert-body` | title to message | = `gap.sm` (4px) |
| `--sc-radius-alert` | corner | = `radius.surface` (8px) |
| `--sc-size-alert-rule` | left-rule width (carries the status signal) | = `border-width.accent` (3px) |
| `--sc-size-alert-led` | LED diameter | 0 (no LED) |
| `--sc-color-alert-ground` | plate ground | = `surface.sunk` |
| `--sc-color-alert-frame` | frame colour (top, right, bottom) | = `border.default` |
| `--sc-shadow-alert-plate` | plate lift | zero alpha (flat) |
| `--sc-color-alert-rule-{info,warning,error,success}` | left rule per variant | = `status.*` |
| `--sc-color-alert-led-{variant}` / `--sc-shadow-alert-led-{variant}` | lit LED and its glow | transparent / zero alpha |

The LED is centred on the first line (the title, or the message when there is no title) and hidden from assistive tech: the role and the text carry the status. Nothing transitions (tokens:verify rule 6).

## Shared

| Token | Use |
|---|---|
| `--sc-border-width-default` | top/right/bottom hairline frame |
| `--sc-color-text-primary` | title |
| `--sc-color-text-secondary` | body |
| `--sc-font-text-title-card-*` | title type |
| `--sc-font-text-body-dense-*` | body type |

## Why left rule, not full tint

Full tinted alerts read as decoration in this system's register (Rams austerity · monochrome-with-accent). A 3 left rule carries the status signal at the same visual weight as the rest of the chrome rules in the brand. Status colour does the work of category-marking, not the work of attention-grabbing.

## Forced colors

The frame and the rule survive as borders; the plate shadow and the glow drop; a lit LED fills `CanvasText`.

## ARIA

`role="alert"` for warning + error (assertive live region · interrupts AT). `role="status"` for info + success (polite live region · waits for next idle). Both surface via `role` on the wrapper.
