# WorkflowBoard tuning spec, 2026-10-10-2136

Recorded from the sc-tune lab (`previews/tune/?c=WorkflowBoard`) at 2026-10-11T03:36:22.177Z. Theme: dark. 3 concepts.

## Pick

**Concept C.** Levi's reason:

> Levi, 2026-10-10: "go with C, add an cinematic entrance animation that makes sense from left to right, record my settings". Recorded as it is: no token changed.

## Notes for the build

None.

Treat every note as a requirement. A note the build cannot meet goes back to Levi as an open question, not a guess.

## Concept A

> Pipeline (reference 1, the CI graph): status chips with a glyph, rounded connectors, the travelled path lit in signal yellow, branch labels as pills on the line, return paths dashed.

### Tokens

No token changed.

### Props

| Prop | Value |
| --- | --- |
| `look` | `"A · Pipeline"` |
| `workflow` | `"Sprint unit"` |
| `run` | `"sample"` |
| `hover` | `"none"` |

### Sound

- File: silent (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: ships silent

## Concept B

> Swimlane (reference 3, the ride flow): each actor a band with its name turned, a faint grid, handoffs between lanes dashed with an event chip, arrowheads, the step now in the accent.

### Tokens

No token changed.

### Props

| Prop | Value |
| --- | --- |
| `look` | `"B · Swimlane"` |
| `workflow` | `"Sprint unit"` |
| `run` | `"sample"` |
| `hover` | `"none"` |

### Sound

- File: silent (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: ships silent

## Concept C (picked)

> Signal (reference 4): one line of round nodes, the actor as the glyph, the flow as a chevron trail lit up to the step now, branches as dashed arcs above, the title as a chip under each node.

### Tokens

No token changed.

### Props

| Prop | Value |
| --- | --- |
| `look` | `"C · Signal"` |
| `workflow` | `"Sprint unit"` |
| `run` | `"sample"` |
| `hover` | `"none"` |

### Sound

- File: silent (shipped)
- Volume: 0.7
- Pitch: 1×
- Fires on: ships silent

## Derived geometry (concept being edited)

- `--wm-beat`: 0px
- `--wm-loops`: 0px
- `--wm-pulse-floor`: 0px
- `--wm-shimmer`: 0px

## Snapshot

A static build of the lab locked to this spec is in `snapshot/`. Serve it and open it:

```bash
npx vite preview --outDir output/tuning/WorkflowBoard/2026-10-10-2136/snapshot
```
