The active-tab indicator: two crisp rows of teal plus marks under the current tab (brand element 2j).

- Put one under every tab label and set `active` on the current tab only. An inactive underline keeps its height and draws nothing, so labels stay level as the selection moves.
- Use it under `NavBar`-style links or in your own `SegmentedControl`-style tab row. It does not change either component; compose it beside the label.
- Decorative. Announce the state on the tab: `aria-current="page"` on a link, `aria-selected` on a `role="tab"`.
- Teal here is allowed: it marks the active item.

## Example

```jsx
const { PlusUnderline } = window.SCDS;
const tabs = ['Overview', 'Work', 'Studio', 'Contact'];
<nav aria-label="Sections">
  <ul style={{ display: 'flex', gap: 'var(--sc-space-layout-stack-md)', listStyle: 'none', padding: 0 }}>
    {tabs.map((t) => (
      <li key={t}>
        <a href={`#${t}`} aria-current={t === 'Work' ? 'page' : undefined}
          style={{ display: 'grid', gap: 'var(--sc-space-component-gap-md)', font: 'var(--sc-font-text-label-ui)', textDecoration: 'none',
                   color: t === 'Work' ? 'var(--sc-color-text-primary)' : 'var(--sc-color-text-secondary)' }}>
          {t}
          <PlusUnderline active={t === 'Work'} />
        </a>
      </li>
    ))}
  </ul>
</nav>
```
