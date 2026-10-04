# PlusProgress · token consumption

Brand element 2h. Composes `PlusField art="uprog"`.

| Part | Token | Rationale |
|---|---|---|
| Filled marks | `--sc-color-brand-accent` | `teal('progress')` in the engine. |
| Unfilled marks | `--sc-color-text-primary` at 20% alpha | The track reads as a faint grid, not a second colour. |
| Height, thin | `--sc-space-layout-stack-sm` (16) | One row. |
| Height, band | `--sc-space-layout-stack-md` (24) | Three rows on the 7-unit pitch span about 17. |

## Semantics

Visually hidden `role="progressbar"`, `aria-valuemin=0`, `aria-valuemax=100`, `aria-valuenow` = round(value × 100), `aria-label` = `label`. Always pass a `label`.
