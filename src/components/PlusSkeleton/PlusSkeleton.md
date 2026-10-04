A card-shaped skeleton (avatar, two title lines, three body lines, a media block) drawn in faint plus marks, with a highlight sweeping across while content loads (brand element 2g).

- Fills its container's width; 240 tall. Sized for a card, so place it where the card will land.
- Pass `label` to announce the wait. Leave it off when several skeletons load together and one status already speaks for them.
- Under `prefers-reduced-motion`, or with `animate={false}`, the shapes rest at their faint value. It pauses while offscreen.

## Example

```jsx
const { PlusSkeleton } = window.SCDS;
<div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 'var(--sc-space-layout-stack-md)' }}>
  <PlusSkeleton label="Loading projects" />
  <PlusSkeleton />
</div>
```
