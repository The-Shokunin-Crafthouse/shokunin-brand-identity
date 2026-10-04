A generated thumbnail for an item that has no image yet (brand element 2r). The picture comes only from `seed`.

- The same seed draws the same thumbnail everywhere, at any size. Seed it with a stable id such as the project slug, never a list index.
- Square, fills its container's width. Inverse surface by default; `surface="sunk"` is the quieter alternative. Alternating the two in a grid reads well.
- Decorative unless `label` is set, which announces it as an image.

## Example

```jsx
const { PlusThumbnail } = window.SCDS;
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--sc-space-component-gap-lg)' }}>
  {['atlas', 'kiln', 'ledger'].map((slug, i) => (
    <PlusThumbnail key={slug} seed={slug} surface={i % 2 ? 'sunk' : 'inverse'} />
  ))}
</div>
```
