A heading followed by a plus-grid rule that fills the rest of the line and fades out (brand element 2b). Use it to open a page section.

- `variant="title"`: title-section heading with a 3-row band. Renders an `h2` unless `as` says otherwise.
- `variant="eyebrow"`: mono-caption label (for example "02 / Services") with a 1-row hairline. Renders a `p`.
- Set `as` to keep the document outline right (`h1` to `h6`). The rule is decorative.

## Example

```jsx
const { HeadingRule } = window.SCDS;
<section style={{ display: 'grid', gap: 'var(--sc-space-layout-stack-md)' }}>
  <HeadingRule variant="eyebrow">02 / Services</HeadingRule>
  <HeadingRule as="h2">Selected work</HeadingRule>
</section>
```
