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
| `default` | `--sc-color-brand-accent-ink` | `--sc-color-brand-accent-ink` |
| `success` | `--sc-color-status-success-ink` | `--sc-color-status-success-ink` |
| `warning` | `--sc-color-status-warning-ink` | `--sc-color-status-warning-ink` |
| `error` | `--sc-color-status-error` | `--sc-color-status-error` |
| `neutral` | `--sc-color-text-secondary` | `--sc-color-border-default` |

## Design notes

- Outlined, not filled — fills compete with cards and inputs at this scale. Outline reads as label, not as button.
- `default` uses brand accent (shu) so the badge serves as a brand-signal chip when used to mark studio-specific content.
- `neutral` decouples color from border (text reads quieter than the border) to communicate "categorical, not stateful."
- `error` shares the shu accent — error and brand are the same chromatic signal in this system (see semantic.json `color.status.error`).

2026-10-07 (physical-controls audit): text was a fill colour and failed AA on `surface.page` (default teal.500 2.99:1, success 3.42:1, warning 3.90:1). Text and border now read the `-ink` tokens: accentInk 5.35:1 / 7.61:1, success-ink 4.64:1 / 5.89:1, warning-ink 4.63:1 / 5.94:1 (light / dark, on page). Open: on `surface.sunk` in light mode success-ink and warning-ink read 4.1:1.
