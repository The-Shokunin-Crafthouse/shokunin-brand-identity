Progress as a row of plus marks, filled in teal from the left (brand element 2h).

- `value` from 0 to 1. `variant="thin"` (1 row) for an upload or scroll indicator, `variant="band"` (3 rows) for page-level reading or task progress.
- Always pass `label`. A visually hidden `role="progressbar"` carries the value (0 to 100) and the label.
- Display only. For a draggable or keyboard-adjustable bar use `ProgressIndicator` with `interactive`.
- Put the visible percentage in your own text beside it, as in the example.

## Example

```jsx
const { PlusProgress } = window.SCDS;
<div style={{ width: 296, display: 'grid', gap: 'var(--sc-space-component-gap-lg)' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between', font: 'var(--sc-font-text-mono-caption)' }}>
    <span style={{ color: 'var(--sc-color-text-secondary)' }}>Upload</span><span>64%</span>
  </div>
  <PlusProgress value={0.64} label="Upload" />
  <PlusProgress variant="band" value={0.38} label="Reading progress" />
</div>
```
