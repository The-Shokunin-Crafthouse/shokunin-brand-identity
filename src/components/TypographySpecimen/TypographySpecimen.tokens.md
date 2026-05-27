# TypographySpecimen · token consumption

Spec ref: §2 Tier 3 · 3.12 · State: all scale steps in-use.

## Tokens — every semantic typography role

| Role | Token shorthand |
|---|---|
| display / xl | `--sc-font-text-display-xl` |
| display / lg | `--sc-font-text-display-lg` |
| display / md | `--sc-font-text-display-md` |
| display / sm | `--sc-font-text-display-sm` |
| title / section | `--sc-font-text-title-section` |
| title / card | `--sc-font-text-title-card` |
| body / lead | `--sc-font-text-body-lead` |
| body / default | `--sc-font-text-body-default` |
| body / dense | `--sc-font-text-body-dense` |
| caption | `--sc-font-text-caption` |
| label / ui | `--sc-font-text-label-ui` |
| label / chrome | `--sc-font-text-label-chrome` |
| mono / body | `--sc-font-text-mono-body` |
| mono / caption | `--sc-font-text-mono-caption` |
| mono / chrome | `--sc-font-text-mono-chrome` |

Each role consumes the CSS `font` shorthand (`--sc-font-text-…`) for family/size/weight/line-height plus a sibling `--sc-font-text-…-letter-spacing` declaration because `font` shorthand cannot carry `letter-spacing`.

## Support tokens

| Token | Use |
|---|---|
| `--sc-color-text-primary` | sample ink |
| `--sc-color-text-secondary` | meta column |
| `--sc-color-border-default` | row dividers |
| `--sc-border-width-default` | divider weight |
| `--sc-space-layout-stack-md` | row block padding + meta ↔ sample gap |
| `--sc-space-component-gap-sm` | meta-row inner gap |

## Copy

Every sample is real copy in studio-marketing register — no Lorem, no placeholder. Includes one git-style timestamp + commit-sha line in the mono caption row so the typeface is shown doing the job it was selected for.
