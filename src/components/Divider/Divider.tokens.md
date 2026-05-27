# Divider · token consumption

Spec ref: §2 Tier 3 · 3.5 · States: horizontal, vertical, with label.

## States × tokens

| State | Tokens consumed | Rationale |
|---|---|---|
| `horizontal` | `--sc-color-border-default`, `--sc-border-width-default` | Plain hairline. Mode-aware via `border-default` (warmGray.250 light / warmGray dark equivalent). |
| `vertical` | same as horizontal + `--sc-space-component-gap-sm` | inline margin so vertical dividers between inline content don't kiss the neighbors. |
| `with label` | horizontal tokens + `--sc-font-text-mono-chrome-*` (5 axes) + `--sc-color-text-secondary` + `--sc-space-component-gap-md` | Mono caps at sit between two rules. Mono register matches the chrome typography of the rest of the system. |

## No raw values

All sizes, weights, colors flow from `--sc-*` semantic tokens. No `px`, no hex, no magic numbers in `Divider.module.css`.

## Mode behavior

`border-default` and `text-secondary` both flip on `[data-theme="dark"]` via tokens.css cascade — the component does no mode-aware work itself.
