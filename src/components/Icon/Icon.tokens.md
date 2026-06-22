# Icon — tokens

scds-v2 · Phosphor (`@phosphor-icons/react`) is the studio default icon family.

| Token | Value | Use |
|-------|-------|-----|
| `--sc-size-icon-sm` | 16px (`space.16`) | Inline icons in dense chrome |
| `--sc-size-icon-md` | 24px (`space.24`) | Default icon size |
| `--sc-size-icon-lg` | 32px (`space.32`) | Prominent / standalone icons |

**Weight.** Default `regular`. `bold` and `fill` exposed (`<Icon weight="bold" />`).
No `thin`/`light` in the studio set — they read as the retired thin-header register.

**Color.** Follows `currentColor` — set the parent's `color` (a `--sc-color-*` token),
never a raw value on the icon.

**Sizing.** Glyph defaults to `1em` (inherits font-size). A named `size` ('sm'|'md'|'lg')
sets the wrapper `font-size` to the token; pass a number for an explicit px size.

**Phase 2.** The 3 remaining inline `<svg>` marks in `src/components` / `src/sections`
swap to `<Icon glyph={…} />`. No structural icon containers (stroked circles/squares are
a slop-blocklist match) — fill + currentColor only.
