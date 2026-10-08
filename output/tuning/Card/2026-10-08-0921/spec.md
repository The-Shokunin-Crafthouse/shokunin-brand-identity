# Card tuning spec, 2026-10-08-0921

Recorded from the sc-tune lab (`previews/tune/?c=Card`) at 2026-10-08T15:21:50.502Z. Theme: dark. 2 concepts.

## Pick

No concept picked. Ask Levi before building.

## Notes for the build

None.

Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.

## Concept A

> Glass lightens (Claude, from Levi's best practices). Tint white 16/24/36% light, 5/8/12% dark; saturation 140/160/180%; rim = Figma light plus a subtle floating shade cast down-right on the 135deg diagonal (4/6/10px offset, 16/24/32px blur; warm gray 12/14/18% light, black 24/30/38% dark; Levi: a subtle shadow so it floats); text halo white 60% light, black 60% dark; hover veil lightens.

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-size-card-glass-subtle-saturation` | both | number | `100` | `140` | `140` | raw |  |
| `--sc-size-card-glass-regular-saturation` | both | number | `100` | `160` | `160` | raw |  |
| `--sc-size-card-glass-heavy-saturation` | both | number | `100` | `180` | `180` | raw |  |
| `--sc-color-card-glass-subtle` | light | color | `` | `rgb(255 255 255 / 0.16)` | `rgb(255 255 255 / 0.16)` | raw |  |
| `--sc-shadow-card-glass-subtle` | light | shadow | `` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-color-card-glass-regular` | light | color | `` | `rgb(255 255 255 / 0.24)` | `rgb(255 255 255 / 0.24)` | raw |  |
| `--sc-shadow-card-glass-regular` | light | shadow | `` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-color-card-glass-heavy` | light | color | `` | `rgb(255 255 255 / 0.36)` | `rgb(255 255 255 / 0.36)` | raw |  |
| `--sc-shadow-card-glass-heavy` | light | shadow | `` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-shadow-card-glass-text` | light | shadow | `` | `0 0 2px rgb(255 255 255 / 0.60)` | `0 0 2px rgb(255 255 255 / 0.60)` | raw |  |
| `--sc-color-card-glass-hover` | light | color | `` | `rgb(255 255 255 / 0.08)` | `rgb(255 255 255 / 0.08)` | raw |  |
| `--sc-color-card-glass-subtle` | dark | color | `rgb(255 255 255 / 0.12)` | `rgb(255 255 255 / 0.05)` | `rgb(255 255 255 / 0.05)` | raw |  |
| `--sc-shadow-card-glass-subtle` | dark | shadow | `inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 255 / 0.1)` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-color-card-glass-regular` | dark | color | `rgb(255 255 255 / 0.20)` | `rgb(255 255 255 / 0.08)` | `rgb(255 255 255 / 0.08)` | raw |  |
| `--sc-shadow-card-glass-regular` | dark | shadow | `inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 255 / 0.15)` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-color-card-glass-heavy` | dark | color | `rgb(255 255 255 / 0.30)` | `rgb(255 255 255 / 0.12)` | `rgb(255 255 255 / 0.12)` | raw |  |
| `--sc-shadow-card-glass-heavy` | dark | shadow | `inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 255 / 0.225)` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-shadow-card-glass-text` | dark | shadow | `0 0 0 rgb(26 24 21 / 0)` | `0 0 2px rgb(0 0 0 / 0.60)` | `0 0 2px rgb(0 0 0 / 0.60)` | raw |  |
| `--sc-color-card-glass-hover` | dark | color | `rgb(255 255 255 / 0.08)` | `rgb(255 255 255 / 0.05)` | `rgb(255 255 255 / 0.05)` | raw |  |

### Props

| Prop | Value |
| --- | --- |
| `show` | `"all"` |
| `backdrop` | `"page (follows theme)"` |
| `interactive` | `false` |
| `disabled` | `false` |
| `title` | `"Studio journal"` |
| `body` | `"Notes from the bench."` |

### Sound

- File: silent (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: ships silent

### CSS overrides

```css
/* Card · concept A · sc-tune 2026-10-08-0921 */
:root {
  --sc-size-card-glass-subtle-saturation: 140;
  --sc-size-card-glass-regular-saturation: 160;
  --sc-size-card-glass-heavy-saturation: 180;
  --sc-color-card-glass-subtle: rgb(255 255 255 / 0.16);
  --sc-shadow-card-glass-subtle: inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 255 / 0.1), 4px 4px 16px 0 rgb(100 91 79 / 0.12);
  --sc-color-card-glass-regular: rgb(255 255 255 / 0.24);
  --sc-shadow-card-glass-regular: inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 255 / 0.15), 6px 6px 24px 0 rgb(100 91 79 / 0.14);
  --sc-color-card-glass-heavy: rgb(255 255 255 / 0.36);
  --sc-shadow-card-glass-heavy: inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 255 / 0.225), 10px 10px 32px 0 rgb(100 91 79 / 0.18);
  --sc-shadow-card-glass-text: 0 0 2px rgb(255 255 255 / 0.60);
  --sc-color-card-glass-hover: rgb(255 255 255 / 0.08);
}
[data-theme="dark"] {
  --sc-color-card-glass-subtle: rgb(255 255 255 / 0.05);
  --sc-shadow-card-glass-subtle: inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 255 / 0.1), 4px 4px 16px 0 rgb(0 0 0 / 0.24);
  --sc-color-card-glass-regular: rgb(255 255 255 / 0.08);
  --sc-shadow-card-glass-regular: inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 255 / 0.15), 6px 6px 24px 0 rgb(0 0 0 / 0.30);
  --sc-color-card-glass-heavy: rgb(255 255 255 / 0.12);
  --sc-shadow-card-glass-heavy: inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 255 / 0.225), 10px 10px 32px 0 rgb(0 0 0 / 0.38);
  --sc-shadow-card-glass-text: 0 0 2px rgb(0 0 0 / 0.60);
  --sc-color-card-glass-hover: rgb(255 255 255 / 0.05);
}
```

## Concept B

> Glass darkens (Levi's option B). Tint ink 6/10/16% light, black 20/32/45% dark; saturation 140/160/180%; same rim and outer shade as A; text halo white 50% light, black 70% dark; hover veil darkens.

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-size-card-glass-subtle-saturation` | both | number | `100` | `140` | `140` | raw |  |
| `--sc-size-card-glass-regular-saturation` | both | number | `100` | `160` | `160` | raw |  |
| `--sc-size-card-glass-heavy-saturation` | both | number | `100` | `180` | `180` | raw |  |
| `--sc-color-card-glass-subtle` | light | color | `` | `rgb(26 24 21 / 0.06)` | `rgb(26 24 21 / 0.06)` | raw |  |
| `--sc-shadow-card-glass-subtle` | light | shadow | `` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-color-card-glass-regular` | light | color | `` | `rgb(26 24 21 / 0.10)` | `rgb(26 24 21 / 0.10)` | raw |  |
| `--sc-shadow-card-glass-regular` | light | shadow | `` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-color-card-glass-heavy` | light | color | `` | `rgb(26 24 21 / 0.16)` | `rgb(26 24 21 / 0.16)` | raw |  |
| `--sc-shadow-card-glass-heavy` | light | shadow | `` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-shadow-card-glass-text` | light | shadow | `` | `0 0 2px rgb(255 255 255 / 0.50)` | `0 0 2px rgb(255 255 255 / 0.50)` | raw |  |
| `--sc-color-card-glass-hover` | light | color | `` | `rgb(26 24 21 / 0.06)` | `rgb(26 24 21 / 0.06)` | raw |  |
| `--sc-color-card-glass-subtle` | dark | color | `rgb(255 255 255 / 0.12)` | `rgb(0 0 0 / 0.20)` | `rgb(0 0 0 / 0.20)` | raw |  |
| `--sc-shadow-card-glass-subtle` | dark | shadow | `inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 255 / 0.1)` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-color-card-glass-regular` | dark | color | `rgb(255 255 255 / 0.20)` | `rgb(0 0 0 / 0.32)` | `rgb(0 0 0 / 0.32)` | raw |  |
| `--sc-shadow-card-glass-regular` | dark | shadow | `inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 255 / 0.15)` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-color-card-glass-heavy` | dark | color | `rgb(255 255 255 / 0.30)` | `rgb(0 0 0 / 0.45)` | `rgb(0 0 0 / 0.45)` | raw |  |
| `--sc-shadow-card-glass-heavy` | dark | shadow | `inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 255 / 0.225)` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 25…` | `inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 25…` | raw |  |
| `--sc-shadow-card-glass-text` | dark | shadow | `0 0 0 rgb(26 24 21 / 0)` | `0 0 2px rgb(0 0 0 / 0.70)` | `0 0 2px rgb(0 0 0 / 0.70)` | raw |  |
| `--sc-color-card-glass-hover` | dark | color | `rgb(255 255 255 / 0.08)` | `rgb(0 0 0 / 0.12)` | `rgb(0 0 0 / 0.12)` | raw |  |

### Props

| Prop | Value |
| --- | --- |
| `show` | `"all"` |
| `backdrop` | `"page (follows theme)"` |
| `interactive` | `false` |
| `disabled` | `false` |
| `title` | `"Studio journal"` |
| `body` | `"Notes from the bench."` |

### Sound

- File: silent (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: ships silent

### CSS overrides

```css
/* Card · concept B · sc-tune 2026-10-08-0921 */
:root {
  --sc-size-card-glass-subtle-saturation: 140;
  --sc-size-card-glass-regular-saturation: 160;
  --sc-size-card-glass-heavy-saturation: 180;
  --sc-color-card-glass-subtle: rgb(26 24 21 / 0.06);
  --sc-shadow-card-glass-subtle: inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 255 / 0.1), 4px 4px 16px 0 rgb(100 91 79 / 0.12);
  --sc-color-card-glass-regular: rgb(26 24 21 / 0.10);
  --sc-shadow-card-glass-regular: inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 255 / 0.15), 6px 6px 24px 0 rgb(100 91 79 / 0.14);
  --sc-color-card-glass-heavy: rgb(26 24 21 / 0.16);
  --sc-shadow-card-glass-heavy: inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 255 / 0.225), 10px 10px 32px 0 rgb(100 91 79 / 0.18);
  --sc-shadow-card-glass-text: 0 0 2px rgb(255 255 255 / 0.50);
  --sc-color-card-glass-hover: rgb(26 24 21 / 0.06);
}
[data-theme="dark"] {
  --sc-color-card-glass-subtle: rgb(0 0 0 / 0.20);
  --sc-shadow-card-glass-subtle: inset 1px 1px 0 0 rgb(255 255 255 / 0.20), inset -1px -1px 0 0 rgb(255 255 255 / 0.1), 4px 4px 16px 0 rgb(0 0 0 / 0.24);
  --sc-color-card-glass-regular: rgb(0 0 0 / 0.32);
  --sc-shadow-card-glass-regular: inset 1px 1px 0 0 rgb(255 255 255 / 0.30), inset -1px -1px 0 0 rgb(255 255 255 / 0.15), 6px 6px 24px 0 rgb(0 0 0 / 0.30);
  --sc-color-card-glass-heavy: rgb(0 0 0 / 0.45);
  --sc-shadow-card-glass-heavy: inset 1px 1px 0 0 rgb(255 255 255 / 0.45), inset -1px -1px 0 0 rgb(255 255 255 / 0.225), 10px 10px 32px 0 rgb(0 0 0 / 0.38);
  --sc-shadow-card-glass-text: 0 0 2px rgb(0 0 0 / 0.70);
  --sc-color-card-glass-hover: rgb(0 0 0 / 0.12);
}
```

## Derived geometry (concept being edited)

- `--glass-tint`: 0px
- `--glass-rim`: 0px
- `--glass-frost`: 0px
- `--glass-refraction`: 0px
- `--glass-depth`: 0px
- `--glass-splay`: 0px
- `--glass-saturation`: 0px

## Snapshot

A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:

```bash
npx vite preview --outDir output/tuning/Card/2026-10-08-0921/snapshot
```
