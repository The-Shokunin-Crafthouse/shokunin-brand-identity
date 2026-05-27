# Alert · token consumption

Spec ref: §2 Tier 3 · 3.11 · States: info, warning, error, success.

## Shared

| Token | Use |
|---|---|
| `--sc-space-component-padding-lg` | internal padding |
| `--sc-space-component-gap-md` | title ↔ body |
| `--sc-space-component-gap-sm` | inside body stack |
| `--sc-radius-surface` | corner |
| `--sc-border-width-default` | top/right/bottom hairline frame |
| `--sc-border-width-accent` | left-rule weight (carries status signal) |
| `--sc-color-surface-sunk` | banner ground |
| `--sc-color-border-default` | frame color (non-left edges) |
| `--sc-color-text-primary` | title |
| `--sc-color-text-secondary` | body |
| `--sc-font-text-title-card-*` | title type |
| `--sc-font-text-body-dense-*` | body type |

## Per variant — left rule

| Variant | Left-rule token | Role |
|---|---|---|
| `info` | `--sc-color-status-info` | warm slate |
| `warning` | `--sc-color-status-warning` | deep ochre |
| `error` | `--sc-color-status-error` | shu (brand/error share signal) |
| `success` | `--sc-color-status-success` | warm olive |

## Why left rule, not full tint

Full tinted alerts read as decoration in this system's register (Rams austerity · monochrome-with-accent). A 3 left rule carries the status signal at the same visual weight as the rest of the chrome rules in the brand. Banner ground remains sunk surface — predictable and unobtrusive. Status colour does the work of category-marking, not the work of attention-grabbing.

## ARIA

`role="alert"` for warning + error (assertive live region · interrupts AT). `role="status"` for info + success (polite live region · waits for next idle). Both surface via `role` on the wrapper.
