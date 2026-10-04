# PlusUnderline · token consumption

Brand element 2j. Composes `PlusField art="uline"`.

| Part | Token | Rationale |
|---|---|---|
| Height | `--sc-space-component-gap-lg` (12) | Two rows on a 5-unit pitch span about 8; 12 leaves the marks clear of the box edge. Inactive underlines keep this height so labels never jump. |
| Marks | `--sc-color-brand-accent` | The engine paints `uline` with `teal('active')`. Active state is one of the three teal roles. |
| Width | 100% of the tab | Sits under its own label. |

## Semantics

`aria-hidden`. The tab carries `aria-current` or `aria-selected`.
