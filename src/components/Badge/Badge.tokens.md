# Badge · token consumption

Spec ref: §2 Tier 3 · 3.2 · States: default, success, warning, error, neutral.

## Shared (every variant)

| Token | Use |
|---|---|
| `--sc-space-component-padding-inline-sm` | inline padding · tight chrome |
| `--sc-space-component-padding-block-sm` | block padding · ultra-thin |
| `--sc-radius-control` | radius · inscribed register |
| `--sc-border-width-default` | outline |
| `--sc-font-text-mono-chrome-*` (5 axes) | Cascadia caps · widest tracking |

## Per variant

| Variant | Color token | Border token |
|---|---|---|
| `default` | `--sc-color-brand-accent` | `--sc-color-brand-accent` |
| `success` | `--sc-color-status-success` | `--sc-color-status-success` |
| `warning` | `--sc-color-status-warning` | `--sc-color-status-warning` |
| `error` | `--sc-color-status-error` | `--sc-color-status-error` |
| `neutral` | `--sc-color-text-secondary` | `--sc-color-border-default` |

## Design notes

- Outlined, not filled — fills compete with cards and inputs at this scale. Outline reads as label, not as button.
- `default` uses brand accent (shu) so the badge serves as a brand-signal chip when used to mark studio-specific content.
- `neutral` decouples color from border (text reads quieter than the border) to communicate "categorical, not stateful."
- `error` shares the shu accent — error and brand are the same chromatic signal in this system (see semantic.json `color.status.error`).
