# Input · token consumption

Spec ref: §2 Tier 3 · 3.4 · States: default, focus, filled, error, disabled.

## Tokens

| Token | Use |
|---|---|
| `--sc-space-component-padding-inline-md` | inline padding inside input |
| `--sc-space-component-padding-block-md` | block padding inside input |
| `--sc-space-component-gap-sm` | label ↔ input ↔ helper rhythm |
| `--sc-radius-control` | corner radius |
| `--sc-border-width-default` | border weight |
| `--sc-font-text-body-default-*` | input value |
| `--sc-font-text-label-ui-*` | field label |
| `--sc-font-text-caption-*` | helper / error |
| `--sc-color-surface-page` | input bg |
| `--sc-color-surface-sunk` | disabled bg |
| `--sc-color-border-default` | resting border |
| `--sc-color-border-strong` | filled-state border (`:not(:placeholder-shown)`) |
| `--sc-color-border-focus` | focused border |
| `--sc-color-status-error` | error border + error helper |
| `--sc-color-text-primary` | value ink |
| `--sc-color-text-secondary` | label + helper |
| `--sc-color-text-disabled` | placeholder + disabled value |
| `--sc-motion-hover-duration` + `-easing` | border-color transition |

## States × tokens

| State | Selector | Token shift |
|---|---|---|
| `default` | resting | `border-color: --sc-color-border-default` |
| `focus` | `:focus` | `border-color: --sc-color-border-focus` · outline suppressed (border carries it) |
| `filled` | `:not(:placeholder-shown):not(:disabled)` | `border-color: --sc-color-border-strong` — content earns a darker frame |
| `error` | `.errored` (prop) | `border-color: --sc-color-status-error` resting + on focus · helper color flips to error |
| `disabled` | `:disabled` | `bg: --sc-color-surface-sunk` · `color: --sc-color-text-disabled` · cursor not-allowed |

## Why border-strong for filled

Empty inputs sit at the same visual weight as their containing card surface. Once content lands the field has earned a stronger frame — `border-strong` (ink in light / near-white in dark) asserts the active control without changing color. Matches the "considered, not decorative" register of the system.
