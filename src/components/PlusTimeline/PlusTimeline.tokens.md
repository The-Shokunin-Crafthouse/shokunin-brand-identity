# PlusTimeline · token consumption

Brand element 2o. Composes `PlusField art="utime"` (rail) with an `<ol>` of DOM labels.

| Part | Token | Rationale |
|---|---|---|
| Rail width | `--sc-space-layout-stack-lg` (48) | The 3×3 node and the connector, centred. |
| Row pitch | `--sc-space-layout-stack-xl` (80) | Prototype pitch was 84. The canvas draws one node per row at the row's centre, so the list's `grid-auto-rows` and the canvas agree by construction. |
| Rail-to-label gap | `--sc-space-layout-stack-sm` | |
| Label | `--sc-font-text-label-ui`, `--sc-color-text-primary` | |
| Upcoming label | `--sc-color-text-tertiary` | Faint marks, faint label. |
| Current node | `--sc-color-brand-accent` | `teal('current')` in the engine. |
| Done connector | `--sc-color-text-primary` at 75% | Upcoming connector at 18%. |

## Semantics

`<ol>`; the current item carries `aria-current="step"`. `label` names the list. The rail is decorative.
