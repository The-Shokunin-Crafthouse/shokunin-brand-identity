# Avatar · token consumption

Spec ref: §2 Tier 3 · 3.6 · States: 4 sizes (xs/sm/md/lg), image, initials fallback.

## Role tokens (physical-controls Tier 2)

| Token | Use | Shipped |
|---|---|---|
| `--sc-radius-avatar` | full circle | = `radius.pill` |
| `--sc-color-avatar-ground` | initials ground; image ground while it loads | = `surface.sunk` (warmGray.200 light, dark.well dark) |
| `--sc-shadow-avatar-ring` | recessed ring, an inset shadow on a layer above the image | zero alpha (flat) until tuned in sc-tune |

The avatar reads its own ground and corner (CONTEXT finding 5), so a tune never moves the cards and frames on `surface.sunk` or the other pill shapes. The ring is a porthole lit from the top left: an inset shadow on the circle itself would paint under the image, so it sits on `::after`. It snaps; nothing transitions (tokens:verify rule 6).

## Shared

| Token | Use |
|---|---|
| `--sc-color-text-primary` | initials ink |
| `--sc-font-text-label-chrome-*` | initials font family + weight + tracking |
| `--sc-border-width-default` | forced-colors edge (`CanvasText` outline, inset 1px) |

## Sizes

| Variant | Token | Resolved |
|---|---|---|
| `xs` | `--sc-size-avatar-xs` | 24px |
| `sm` | `--sc-size-avatar-sm` | 32px |
| `md` | `--sc-size-avatar-md` | 48px |
| `lg` | `--sc-size-avatar-lg` | 64px |

## Initials font-size derivation

Initials sized at ~40% of avatar diameter via `calc(var(--sc-size-avatar-*) * 0.4)`. The 0.4 ratio is a layout calculation, not a token — keeping initials proportional to the container as sizes scale. Documented here so the convention is visible.

## States × tokens

| State | Tokens |
|---|---|
| `image` | size token + radius-avatar + shadow-avatar-ring (img fills via `object-fit: cover`) |
| `initials fallback` | size token + radius-avatar + color-avatar-ground + shadow-avatar-ring + text-primary + font-text-label-chrome family/weight/tracking |
| `image-load-failure` | identical to initials fallback; React state flips to fallback on `<img onError>` |
| `forced-colors: active` | the ring drops; a 1px `CanvasText` edge draws over the image |
