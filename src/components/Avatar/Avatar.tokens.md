# Avatar · token consumption

Spec ref: §2 Tier 3 · 3.6 · States: 4 sizes (xs/sm/md/lg), image, initials fallback.

## Shared

| Token | Use |
|---|---|
| `--sc-radius-pill` | full circle |
| `--sc-color-surface-sunk` | initials fallback ground |
| `--sc-color-text-primary` | initials ink |
| `--sc-font-text-label-chrome-*` | initials font family + weight + tracking |

scds-v2 Phase 2: fill-only — the resting outline was removed. The sunk fill seats the avatar against the page; the image or initials carry the shape.

## Sizes

| Variant | Token | Resolved |
|---|---|---|
| `xs` | `--sc-size-avatar-xs` | |
| `sm` | `--sc-size-avatar-sm` | |
| `md` | `--sc-size-avatar-md` | |
| `lg` | `--sc-size-avatar-lg` | |

## Initials font-size derivation

Initials sized at ~40% of avatar diameter via `calc(var(--sc-size-avatar-*) * 0.4)`. The 0.4 ratio is a layout calculation, not a token — keeping initials proportional to the container as sizes scale. Documented here so the convention is visible.

## States × tokens

| State | Tokens |
|---|---|
| `image` | size token + radius-pill (img fills via `object-fit: cover`) |
| `initials fallback` | size token + radius-pill + surface-sunk + text-primary + font-text-label-chrome family/weight/tracking |
| `image-load-failure` | identical to initials fallback; React state flips to fallback on `<img onError>` |
