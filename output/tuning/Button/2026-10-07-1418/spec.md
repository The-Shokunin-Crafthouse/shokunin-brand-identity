# Button tuning spec, 2026-10-07-1418

Recorded from the sc-tune lab (`previews/tune/?c=Button`) at 2026-10-07T20:18:30.006Z. Theme: light. 4 concepts.

## Pick

No concept picked. Ask Levi before building.

## Notes for the build

> Dark mode: the top-left edge of the key disappears. Fix the halo, the edge, or both?

Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.

## Concept A

> Recommended: halo 9% (matches light-mode visibility, +8 L*) plus a lit top-left edge only. No dark edge: the outer shade already darkens the bottom-right.

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-shadow-control-key` | dark | shadow | `` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(255 255 255 / 0.09), i…` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(255 255 255 / 0.09), i…` | raw |  |

### Props

| Prop | Value |
| --- | --- |
| `variant` | `"primary"` |
| `size` | `"lg"` |
| `disabled` | `false` |
| `loading` | `false` |
| `arrow` | `true` |
| `children` | `"Start a project"` |

### Sound

- File: silent (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: click (audition only; Button ships silent)

### CSS overrides

```css
/* Button · concept A · sc-tune 2026-10-07-1418 */
[data-theme="dark"] {
  --sc-shadow-control-key: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(255 255 255 / 0.09), inset 1px 1px 0 rgb(255 255 255 / 0.08);
}
```

## Concept B

> Brighter halo: white 9%, so the highlight is as visible as in light mode (+8 L*).

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-font-text-label-button-lg-letter-spacing` | both | text | `0.08em` | `0.02em` | `0.02em` | raw |  |
| `--sc-font-text-label-button-lg-size` | both | length | `11px` | `14px` | `var(--sc-p-font-size-14)` | token --sc-p-font-size-14 |  |
| `--sc-font-text-label-button-sm-size` | both | length | `11px` | `12px` | `var(--sc-p-font-size-12)` | token --sc-p-font-size-12 |  |
| `--sc-font-text-label-button-lg-line-height` | both | number | `1.5` | `2` | `2` | raw |  |
| `--sc-font-text-label-button-sm-line-height` | both | number | `1.5` | `2` | `2` | raw |  |
| `--sc-size-button-icon-lg` | both | length | `12px` | `14px` | `var(--sc-p-space-micro-14)` | token --sc-p-space-micro-14 |  |
| `--sc-space-component-padding-block-md` | both | length | `8px` | `8px` | `8px` | equals --sc-p-space-8 |  |
| `--sc-space-component-padding-block-button-sm` | both | length | `4px` | `4px` | `4px` | equals --sc-p-space-4 |  |
| `--sc-space-component-padding-inline-lg` | both | length | `16px` | `24px` | `24px` | equals --sc-p-space-24 |  |
| `--sc-space-component-gap-md` | both | length | `8px` | `8px` | `8px` | equals --sc-p-space-8 |  |
| `--sc-space-component-padding-block-sm` | both | length | `2px` | `08px` | `08px` | equals --sc-p-space-8 |  |
| `--sc-space-component-padding-inline-md` | both | length | `12px` | `16px` | `16px` | equals --sc-p-space-16 |  |
| `--sc-font-text-label-button-sm-letter-spacing` | both | text | `0.08em` | `0.02em` | `0.02em` | raw |  |
| `--sc-shadow-control-key` | light | shadow | `3px 3px 7px 0 rgb(26 24 21 / 0.39), -3px -3px 4px 1px rgb(255 255 255 / 1)` | `2px 2px 6px 0px rgb(100 91 79 / 0.5), -1px -1px 1px 1px #FDFAF6` | `2px 2px 6px 0px rgb(100 91 79 / 0.5), -1px -1px 1px 1px #FDFAF6` | raw |  |
| `--sc-shadow-control-key` | dark | shadow | `` | `3px 3px 7px 0px rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)` | `3px 3px 7px 0px rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17)` | raw |  |

### Props

| Prop | Value |
| --- | --- |
| `variant` | `"primary"` |
| `size` | `"lg"` |
| `disabled` | `false` |
| `loading` | `false` |
| `arrow` | `true` |
| `children` | `"Continue"` |

### Sound

- File: `drams-029-01.wav` (ships silent)
- Volume: 0.7
- Pitch: 1×
- Fires on: click (audition only; Button ships silent)

### CSS overrides

```css
/* Button · concept B · sc-tune 2026-10-07-1418 */
:root {
  --sc-font-text-label-button-lg-letter-spacing: 0.02em;
  --sc-font-text-label-button-lg-size: var(--sc-p-font-size-14);
  --sc-font-text-label-button-sm-size: var(--sc-p-font-size-12);
  --sc-font-text-label-button-lg-line-height: 2;
  --sc-font-text-label-button-sm-line-height: 2;
  --sc-size-button-icon-lg: var(--sc-p-space-micro-14);
  --sc-space-component-padding-block-md: 8px;
  --sc-space-component-padding-block-button-sm: 4px;
  --sc-space-component-padding-inline-lg: 24px;
  --sc-space-component-gap-md: 8px;
  --sc-space-component-padding-block-sm: 08px;
  --sc-space-component-padding-inline-md: 16px;
  --sc-font-text-label-button-sm-letter-spacing: 0.02em;
  --sc-shadow-control-key: 2px 2px 6px 0px rgb(100 91 79 / 0.5), -1px -1px 1px 1px #FDFAF6;
}
[data-theme="dark"] {
  --sc-shadow-control-key: 3px 3px 7px 0px rgb(0 0 0 / 0.50), -1px -1px 1px 1px rgb(219 235 255 / 0.17);
}
```

## Concept C

> Levi's idea: dark inset ring around the key, halo unchanged.

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-shadow-control-key` | dark | shadow | `` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(255 255 255 / 0.06), i…` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(255 255 255 / 0.06), i…` | raw |  |

### Props

| Prop | Value |
| --- | --- |
| `variant` | `"primary"` |
| `size` | `"lg"` |
| `disabled` | `false` |
| `loading` | `false` |
| `arrow` | `true` |
| `children` | `"Start a project"` |

### Sound

- File: silent (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: click (audition only; Button ships silent)

### CSS overrides

```css
/* Button · concept C · sc-tune 2026-10-07-1418 */
[data-theme="dark"] {
  --sc-shadow-control-key: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(255 255 255 / 0.06), inset 0 0 0 1px rgb(0 0 0 / 0.30);
}
```

## Concept D

> Lit edge: bright inner edge top-left, dark inner edge bottom-right (the Switch rim idea), halo unchanged.

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-shadow-control-key` | dark | shadow | `` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(255 255 255 / 0.06), i…` | `3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(255 255 255 / 0.06), i…` | raw |  |

### Props

| Prop | Value |
| --- | --- |
| `variant` | `"primary"` |
| `size` | `"lg"` |
| `disabled` | `false` |
| `loading` | `false` |
| `arrow` | `true` |
| `children` | `"Start a project"` |

### Sound

- File: silent (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: click (audition only; Button ships silent)

### CSS overrides

```css
/* Button · concept D · sc-tune 2026-10-07-1418 */
[data-theme="dark"] {
  --sc-shadow-control-key: 3px 3px 7px 0 rgb(0 0 0 / 0.50), -3px -3px 4px 1px rgb(255 255 255 / 0.06), inset 1px 1px 0 rgb(255 255 255 / 0.08), inset -1px -1px 0 rgb(0 0 0 / 0.25);
}
```

## Snapshot

A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:

```bash
npx vite preview --outDir output/tuning/Button/2026-10-07-1418/snapshot
```
