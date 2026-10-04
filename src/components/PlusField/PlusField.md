The plus-sign halftone field: one `<canvas>` that fills its parent box and draws one brand art in plus marks. It is the primitive behind `SectionDivider`, `HeadingRule`, `PlusUnderline`, `PlusProgress`, `PlusLoader`, `PlusSkeleton`, `PlusTimeline`, `PlusBullet`, `PlusSeparator` and `PlusThumbnail`. Reach for those first. Use `PlusField` directly for the expressive arts below, which have no wrapper.

## Rules

- **The field has no size of its own.** Give its parent a height (or the field a `className` with one), or pass `backdrop` to fill the nearest positioned ancestor. A 0×0 box draws nothing.
- **Backdrop layering.** With `backdrop`, the field is `position: absolute; inset: 0`. Put the content over it in an element with `position: relative` (or absolute), or the field paints over it.
- **Crisp grids for structure, loose ribbons for expression.** Dividers, progress, tabs, timelines and bullets are crisp. Hero, CTA, card and placeholder arts are loose. Do not swap them.
- **Teal is reserved.** The engine paints `--sc-color-brand-accent` only for progress fill (`uprog`), the active tab (`uline`), the current timeline node (`utime`) and the current bullet (`ubullet` with `accent`). No other art can reach it.
- **Surface sets the ground and the ink.** `inverse` (default) paints the inverse surface with on-inverse marks. `raised`, `page`, `sunk` paint that surface with primary-text marks. `none` paints no ground and uses primary-text marks, for fields that sit on an existing surface.
- **Colour follows the theme.** Tokens are read at draw time, so `data-theme="dark"` on `<html>` (or any ancestor) applies. Never pass colours.
- **Motion.** `uskel`, `uloader` and `usplash` animate on one shared frame loop, pause offscreen, and show a still frame under `prefers-reduced-motion` or `animate={false}`.
- **Decorative.** The canvas is `aria-hidden`. Real text goes in the DOM over or beside it.

## Arts without a wrapper

Each composition below matches the approved prototype (Brand Elements, turn 2). Widths are the prototype's; the field scales to any box.

### Card header (2c): `ucardhead`

Two crossing ribbons across the top of a card.

```jsx
const { PlusField } = window.SCDS;
<div style={{ width: 360, background: 'var(--sc-color-surface-raised)', borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
  <div style={{ height: 150 }}><PlusField art="ucardhead" /></div>
  <div style={{ padding: 'var(--sc-space-layout-inset-md)', display: 'grid', gap: 'var(--sc-space-component-gap-sm)' }}>
    <p style={{ font: 'var(--sc-font-text-title-card)' }}>Card title</p>
    <p style={{ font: 'var(--sc-font-text-mono-caption)', color: 'var(--sc-color-text-secondary)' }}>Category · 2026</p>
  </div>
</div>
```

### Card hover (2d): `ucard`

A faint grid that brightens under the pointer. It listens on its parent, so the whole card drives it.

```jsx
<a href="/work/atlas" style={{ position: 'relative', display: 'block', width: 360, height: 220, borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
  <PlusField art="ucard" surface="raised" backdrop />
  <div style={{ position: 'absolute', left: 'var(--sc-space-layout-inset-md)', bottom: 'var(--sc-space-layout-inset-md)', display: 'grid', gap: 'var(--sc-space-component-gap-sm)' }}>
    <p style={{ font: 'var(--sc-font-text-title-card)' }}>Atlas</p>
    <p style={{ font: 'var(--sc-font-text-mono-caption)', color: 'var(--sc-color-text-secondary)' }}>Feature grid · link card</p>
  </div>
</a>
```

### CTA band (2e): `ucta`

Two chevrons on the inverse surface framing centred copy and one secondary button.

```jsx
const { PlusField, Button } = window.SCDS;
<div style={{ position: 'relative', height: 260, borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
  <PlusField art="ucta" backdrop />
  <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--sc-space-layout-stack-md)' }}>
    <p style={{ font: 'var(--sc-font-text-title-section)', color: 'var(--sc-color-text-on-inverse)' }}>Start a project</p>
    <Button variant="secondary">Get in touch</Button>
  </div>
</div>
```

### Empty state (2f): `uempty`

A small zigzag glyph above the message, on no ground of its own.

```jsx
<div style={{ background: 'var(--sc-color-surface-sunk)', padding: 'var(--sc-space-layout-inset-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--sc-space-layout-stack-sm)' }}>
  <div style={{ width: 160, height: 120 }}><PlusField art="uempty" surface="none" /></div>
  <p style={{ font: 'var(--sc-font-text-title-card)' }}>No projects yet</p>
  <Button variant="secondary">New project</Button>
</div>
```

### Image placeholder (2k): `umedia`

A faint grid crossed by one ribbon, on the sunk surface, with the pending ratio as a caption.

```jsx
<div style={{ position: 'relative', aspectRatio: '16 / 9' }}>
  <PlusField art="umedia" surface="sunk" backdrop />
  <p style={{ position: 'absolute', left: 'var(--sc-space-layout-inset-sm)', bottom: 'var(--sc-space-component-gap-lg)', font: 'var(--sc-font-text-mono-caption)', color: 'var(--sc-color-text-secondary)' }}>16:9 · image pending</p>
</div>
```

### Hero background (2l): `uhero`

A wide zigzag that bleeds off the right edge. The headline sits on the left, in the clear half.

```jsx
<section style={{ position: 'relative', height: 400 }}>
  <PlusField art="uhero" surface="raised" backdrop />
  <div style={{ position: 'relative', height: '100%', maxWidth: '46%', paddingLeft: 'var(--sc-space-layout-inset-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--sc-space-layout-stack-md)' }}>
    <h1 style={{ font: 'var(--sc-font-text-display-md)' }}>Page headline sits here</h1>
    <Button>View work</Button>
  </div>
</section>
```

### Footer edge (2m): `ufooter`

The page ground dissolves into the inverse footer over the top 90 units. It paints both grounds itself, so `surface` does not apply. Footer content sits on the inverse part.

```jsx
<footer style={{ position: 'relative', height: 220 }}>
  <PlusField art="ufooter" backdrop />
  <div style={{ position: 'absolute', left: 'var(--sc-space-layout-inset-lg)', right: 'var(--sc-space-layout-inset-lg)', bottom: 'var(--sc-space-layout-stack-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', color: 'var(--sc-color-text-on-inverse)' }}>
    <nav style={{ display: 'flex', gap: 'var(--sc-space-layout-stack-md)', font: 'var(--sc-font-text-label-ui)' }}><a href="/work">Work</a><a href="/studio">Studio</a><a href="/contact">Contact</a></nav>
    <p style={{ font: 'var(--sc-font-text-mono-caption)' }}>© 2026</p>
  </div>
</footer>
```

### Pull-quote bracket (2n): `uquote`

Two crisp corners whose arms fade. The quote sits inside, set in body-lead.

```jsx
<figure style={{ position: 'relative', width: 360, height: 300, margin: 0 }}>
  <PlusField art="uquote" surface="raised" backdrop />
  <div style={{ position: 'relative', height: '100%', padding: 'var(--sc-space-layout-stack-xl) var(--sc-space-layout-stack-lg)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--sc-space-layout-stack-sm)' }}>
    <blockquote style={{ margin: 0, font: 'var(--sc-font-text-body-lead)' }}>Pull quotes sit inside the bracket, set in the lead style.</blockquote>
    <figcaption style={{ font: 'var(--sc-font-text-mono-caption)', color: 'var(--sc-color-text-secondary)' }}>Name, role</figcaption>
  </div>
</figure>
```

### Signup / form card corner (2s): `unews`

Two ribbons in the top-right corner of a form card. The form starts below them.

```jsx
const { PlusField, Input, Button } = window.SCDS;
<div style={{ position: 'relative', width: 360, background: 'var(--sc-color-surface-raised)', borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
  <PlusField art="unews" surface="raised" backdrop />
  <form style={{ position: 'relative', padding: 'var(--sc-space-layout-stack-xl) var(--sc-space-layout-inset-md) var(--sc-space-layout-inset-md)', display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
    <p style={{ font: 'var(--sc-font-text-title-card)' }}>Newsletter</p>
    <Input label="Email" placeholder="you@studio.com" />
    <Button type="submit">Subscribe</Button>
  </form>
</div>
```

### 404 / error page (2q): `type`

Halftone text on the inverse surface. `text` sets the string; `textScale` (default 0.62, the 404 uses 0.85) sets the glyph height as a share of the box height. Pitch and mark size follow the glyph size.

```jsx
<div style={{ background: 'var(--sc-color-surface-inverse)', display: 'grid', justifyItems: 'center', gap: 'var(--sc-space-layout-stack-sm)', paddingBottom: 'var(--sc-space-layout-stack-lg)' }}>
  <div style={{ width: '100%', height: 280 }}><PlusField art="type" text="404" textScale={0.85} /></div>
  <p style={{ font: 'var(--sc-font-text-body-lead)', color: 'var(--sc-color-text-on-inverse)' }}>Page not found</p>
  <Button variant="secondary">Back home</Button>
</div>
```

The visible "404" is decorative to assistive tech. Keep a real heading on the page (it can be visually hidden).

### App splash (2t): `usplash`

A slow wave travelling down a zigzag on the inverse surface (animated). Phone-shaped box, one caption at the bottom.

```jsx
<div style={{ position: 'relative', width: 270, height: 560, borderRadius: 'var(--sc-radius-surface-large)', overflow: 'hidden' }}>
  <PlusField art="usplash" backdrop label="Loading" />
  <p style={{ position: 'absolute', left: 0, right: 0, bottom: 'var(--sc-space-layout-stack-md)', textAlign: 'center', font: 'var(--sc-font-text-mono-caption)', color: 'var(--sc-color-text-on-inverse)' }}>Loading</p>
</div>
```

## Arts with a wrapper

| Art | Use | Prototype |
|---|---|---|
| `udiv` | `SectionDivider`, `HeadingRule` | 2a, 2b |
| `uline` | `PlusUnderline` | 2j |
| `uprog` | `PlusProgress` | 2h |
| `uloader` | `PlusLoader` | 2i |
| `uskel` | `PlusSkeleton` | 2g |
| `utime` | `PlusTimeline` | 2o |
| `ubullet` | `PlusBullet` | 2p |
| `usep` | `PlusSeparator` | 2p |
| `uthumb` | `PlusThumbnail` | 2r |

## Density and shape

- `density` (0.6 to 1.6, default 1) scales the spacing between marks, not the marks. Below 1 the field opens up; above 1 it packs tighter. Keep one density per page.
- `shape` is `plus` (default, the brand mark), `square`, or `round`. Square and round are for a surface that already carries several plus fields and needs a quieter one; never mix shapes inside one element.
- `seed` (string) fixes every random choice. Fields with the same art and seed draw the same picture. The default seed is the art name.
