The page loader: a zigzag of plus marks that draws itself, holds, fades and repeats every 2.8 seconds (brand element 2i).

- Square, 240 wide by default, on the inverse surface. Resize it with `className` (`width`); it stays square.
- `label` (default "Loading") is announced once through a visually hidden `role="status"`.
- Under `prefers-reduced-motion`, or with `animate={false}`, it shows the drawn zigzag still. It pauses while offscreen.
- One loader per view. For content that is loading in place, use `PlusSkeleton`.

## Example

```jsx
const { PlusLoader } = window.SCDS;
<div style={{ display: 'grid', placeItems: 'center', minHeight: '60vh' }}>
  <PlusLoader label="Loading the project" />
</div>
```
