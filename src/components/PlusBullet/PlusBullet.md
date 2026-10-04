A list bullet: a 3×3 block of plus marks, icon-sized (brand element 2p).

- `accent` turns it teal for the current item only. Never use teal bullets for emphasis.
- Decorative. Use it in a real `<ul>` or `<ol>` with `list-style: none`, and say "current" in the text or with `aria-current`.

## Example

```jsx
const { PlusBullet } = window.SCDS;
<ul style={{ display: 'grid', gap: 'var(--sc-space-layout-stack-sm)', listStyle: 'none', padding: 0 }}>
  {[['Strategy', false], ['Design · current', true], ['Engineering', false]].map(([label, current]) => (
    <li key={label} aria-current={current ? 'step' : undefined}
      style={{ display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)' }}>
      <PlusBullet accent={current} />
      {label}
    </li>
  ))}
</ul>
```
