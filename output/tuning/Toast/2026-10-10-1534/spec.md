# Toast tuning spec, 2026-10-10-1534

Recorded from the sc-tune lab (`previews/tune/?c=Toast`) at 2026-10-10T21:34:04.181Z. Theme: dark. 1 concept.

## Notes for the build

None.

Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.

## Concept A

### Tokens

| Token | Mode | Kind | Shipped | Tuned | Set as | Token match | Note |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `--sc-shadow-toast-plate` | light | shadow | `` | `2px 2px 6px 0 rgb(100 91 79 / 0.50)` | `2px 2px 6px 0 rgb(100 91 79 / 0.50)` | raw |  |
| `--sc-shadow-toast-plate` | dark | shadow | `0 2px 8px 0 rgb(26 24 21 / 0.10), 0 1px 0 0 rgb(26 24 21 / 0.04)` | `3px 3px 7px 0 rgb(0 0 0 / 0.50)` | `3px 3px 7px 0 rgb(0 0 0 / 0.50)` | raw |  |

### Props

| Prop | Value |
| --- | --- |
| `show` | `"all"` |
| `placement` | `"floating"` |
| `surface` | `"flat"` |
| `glyph` | `"outline"` |
| `backdrop` | `"none"` |
| `autoDismiss` | `false` |
| `dismissDisabled` | `false` |
| `message` | `"Changes saved."` |

### Sound

- File: silent (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: ships silent

### CSS overrides

```css
/* Toast · concept A · sc-tune 2026-10-10-1534 */
:root {
  --sc-shadow-toast-plate: 2px 2px 6px 0 rgb(100 91 79 / 0.50);
}
[data-theme="dark"] {
  --sc-shadow-toast-plate: 3px 3px 7px 0 rgb(0 0 0 / 0.50);
}
```

## Derived geometry (concept being edited)

- `--badge-fill`: 0px

## Snapshot

A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:

```bash
npx vite preview --outDir output/tuning/Toast/2026-10-10-1534/snapshot
```
