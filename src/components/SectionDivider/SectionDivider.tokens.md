# SectionDivider · token consumption

Brand element 2a. Composes `PlusField art="udiv"`; colour comes from PlusField (see `PlusField.tokens.md`).

## Weights × tokens

| Weight | Rows | Ends | Height token | Rationale |
|---|---|---|---|---|
| `hairline` | 1 | fade both | `--sc-space-layout-stack-sm` (16) | One row of marks (about 4 tall) with room either side. Prototype drew it in 20; 16 holds it on the 8pt grid. |
| `band` | 3 | fade both | `--sc-space-layout-stack-md` (24) | Three rows on the 7-unit art pitch span about 17. |
| `block` | 5 | square | `calc(--sc-space-layout-stack-sm × 2)` (32) | Five rows span about 31. Square ends mark it as a chapter break, not a pause. |

## Semantics

`role="separator"` + `aria-orientation="horizontal"` on the wrapper. The canvas is `aria-hidden`.

## Mode behavior

The marks are `--sc-color-text-primary`, read at draw time; a theme change redraws. No mode-aware CSS here.
