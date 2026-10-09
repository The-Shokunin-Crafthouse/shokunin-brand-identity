# StatusPill tuning spec, 2026-10-08-2239

Recorded from the sc-tune lab (`previews/tune/?c=StatusPill`) at 2026-10-09T04:39:58.160Z. Theme: dark. 1 concept.

## Notes for the build

None.

Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.

## Concept A

### Tokens

No token changed.

### Props

| Prop | Value |
| --- | --- |
| `show` | `"all"` |
| `emphasis` | `"filled"` |
| `glow` | `"by tone"` |
| `icon` | `"none"` |
| `content` | `"In progress"` |
| `live` | `"by tone"` |

### Sound

- File: silent (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: ships silent

## Derived geometry (concept being edited)

- `--pill-fill`: 0px
- `--pill-ink`: 0px
- `--pill-edge`: 0px
- `--pill-hue`: 0px

## Snapshot

A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:

```bash
npx vite preview --outDir output/tuning/StatusPill/2026-10-08-2239/snapshot
```
