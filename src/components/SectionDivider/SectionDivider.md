A crisp plus-grid rule between blocks of content (brand element 2a). The structural divider of the plus-field system; `Divider` stays the plain hairline for dense UI.

- `hairline` (1 row) between paragraphs, `band` (3 rows) between sections, `block` (5 rows, square ends) for a chapter break. One weight per boundary type across a page.
- Draws in primary-text marks on whatever surface it sits on. Pass `surface` only when the rule should paint its own ground.
- Announced as a separator. It fills its container's width; the height comes from the weight.

## Example

```jsx
const { SectionDivider } = window.SCDS;
<article style={{ display: 'grid', gap: 'var(--sc-space-layout-stack-md)' }}>
  <p>Tokens, type, colour.</p>
  <SectionDivider weight="hairline" />
  <p>Components, motion, voice.</p>
  <SectionDivider weight="band" />
  <h2>Chapter two</h2>
</article>
```
