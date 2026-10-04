The breadcrumb separator: three plus marks on a rising diagonal (brand element 2p).

- Decorative. Mark the current page with `aria-current="page"` and name the nav "Breadcrumb".
- Sized below the label's cap height, so it reads as punctuation.

## Example

```jsx
const { PlusSeparator } = window.SCDS;
<nav aria-label="Breadcrumb">
  <ol style={{ display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)', listStyle: 'none', padding: 0, font: 'var(--sc-font-text-label-ui)' }}>
    <li><a href="/">Home</a></li>
    <li aria-hidden="true"><PlusSeparator /></li>
    <li><a href="/work">Work</a></li>
    <li aria-hidden="true"><PlusSeparator /></li>
    <li aria-current="page">Case study</li>
  </ol>
</nav>
```
