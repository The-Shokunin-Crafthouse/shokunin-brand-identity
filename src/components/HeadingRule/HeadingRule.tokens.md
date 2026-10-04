# HeadingRule · token consumption

Brand element 2b. Composes `PlusField art="udiv" fade="end"`.

## Variants × tokens

| Variant | Heading | Rule | Gap | Rule height |
|---|---|---|---|---|
| `title` | `--sc-font-text-title-section`, `--sc-color-text-primary` | 3 rows | `--sc-space-layout-stack-md` | `--sc-space-layout-stack-md` |
| `eyebrow` | `--sc-font-text-mono-caption`, `--sc-color-text-secondary` | 1 row | `--sc-space-layout-stack-sm` | `--sc-space-layout-stack-sm` |

The rule is `flex: 1; min-width: 0`, so it takes whatever the heading leaves and never pushes the row wider.

## Semantics

The heading is real text in `as` (default `h2` for title, `p` for eyebrow). The rule is decorative.
