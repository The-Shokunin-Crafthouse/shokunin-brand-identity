The plus-sign halftone field: one `<canvas>` that fills its parent box and draws one brand art in plus marks. Wrappers cover udiv (`SectionDivider`, `HeadingRule`), uline (`PlusUnderline`), uprog (`PlusProgress`), uloader (`PlusLoader`), uskel (`PlusSkeleton`), utime (`PlusTimeline`), ubullet (`PlusBullet`), usep (`PlusSeparator`) and uthumb (`PlusThumbnail`); use them first. Use `PlusField` for the arts below.

## Rules

- **No size of its own.** Give the parent a height, or pass `backdrop` (absolute, `inset: 0`) inside a positioned host and put content over it in a positioned element. A 0×0 box draws nothing.
- **Crisp grids for structure, loose ribbons for expression.** One loose field per view.
- **Teal only** for progress fill, the active tab, the current timeline node and the current bullet. The engine refuses it elsewhere.
- **Surface sets ground and ink.** `inverse` (default): on-inverse marks. `raised`, `page`, `sunk`: primary-text marks. `none`: no ground. Theme is automatic; never pass colours.
- **Motion.** `uskel`, `uloader`, `usplash` animate, pause offscreen, and hold still under reduced motion or `animate={false}`. The canvas is `aria-hidden`.
- `density` (0.6 to 1.6), `shape` (`plus`, `square`, `round`), `seed`: see `guidelines/_config/design-system/brand-elements.md`.

## Arts without a wrapper

Compositions from the approved prototype (Brand Elements, turn 2). The field scales to any box. Card hosts also take `borderRadius` + `overflow: 'hidden'`; captions take `--sc-color-text-secondary` (omitted below). `const { PlusField, Button, TextField } = window.SCDS;`

### Card header (2c): `ucardhead`

Two crossing ribbons across the top of a card.

```jsx
<div style={{ width: 360, background: 'var(--sc-color-surface-raised)' }}>
  <div style={{ height: 150 }}><PlusField art="ucardhead" /></div>
  <div style={{ padding: 'var(--sc-space-layout-inset-md)' }}>
    <p style={{ font: 'var(--sc-font-text-title-card)' }}>Card title</p>
    <p style={{ font: 'var(--sc-font-text-mono-caption)' }}>Category · 2026</p>
  </div>
</div>
```

### Card hover (2d): `ucard`

A faint grid that brightens under the pointer anywhere on its parent.

```jsx
<a href="/work/atlas" style={{ position: 'relative', display: 'block', width: 360, height: 220 }}>
  <PlusField art="ucard" surface="raised" backdrop />
  <p style={{ position: 'absolute', left: 'var(--sc-space-layout-inset-md)', bottom: 'var(--sc-space-layout-inset-md)', font: 'var(--sc-font-text-title-card)' }}>Atlas</p>
</a>
```

### CTA band (2e): `ucta`

Two chevrons on the inverse surface framing centred copy and one secondary button.

```jsx
<div style={{ position: 'relative', height: 260 }}>
  <PlusField art="ucta" backdrop />
  <div style={{ position: 'relative', height: '100%', display: 'grid', placeContent: 'center', justifyItems: 'center', gap: 'var(--sc-space-layout-stack-md)' }}>
    <p style={{ font: 'var(--sc-font-text-title-section)', color: 'var(--sc-color-text-on-inverse)' }}>Start a project</p>
    <Button variant="secondary">Get in touch</Button>
  </div>
</div>
```

### Empty state (2f): `uempty`

A small zigzag glyph above the message, on no ground of its own.

```jsx
<div style={{ background: 'var(--sc-color-surface-sunk)', padding: 'var(--sc-space-layout-inset-md)', display: 'grid', justifyItems: 'center', gap: 'var(--sc-space-layout-stack-sm)' }}>
  <div style={{ width: 160, height: 120 }}><PlusField art="uempty" surface="none" /></div>
  <p style={{ font: 'var(--sc-font-text-title-card)' }}>No projects yet</p>
  <Button variant="secondary">New project</Button>
</div>
```

### Image placeholder (2k): `umedia`

A faint grid crossed by one ribbon, on the sunk surface, captioned with the pending ratio.

```jsx
<div style={{ position: 'relative', aspectRatio: '16 / 9' }}>
  <PlusField art="umedia" surface="sunk" backdrop />
  <p style={{ position: 'absolute', left: 'var(--sc-space-layout-inset-sm)', bottom: 'var(--sc-space-component-gap-lg)', font: 'var(--sc-font-text-mono-caption)' }}>16:9 · image pending</p>
</div>
```

### Hero background (2l): `uhero`

A wide zigzag that bleeds off the right edge. The headline sits in the clear left 46%.

```jsx
<section style={{ position: 'relative', height: 400 }}>
  <PlusField art="uhero" surface="raised" backdrop />
  <div style={{ position: 'relative', height: '100%', maxWidth: '46%', paddingLeft: 'var(--sc-space-layout-inset-lg)', display: 'grid', alignContent: 'center', justifyItems: 'start', gap: 'var(--sc-space-layout-stack-md)' }}>
    <h1 style={{ font: 'var(--sc-font-text-display-md)' }}>Page headline sits here</h1>
    <Button>View work</Button>
  </div>
</section>
```

### Footer edge (2m): `ufooter`

The page ground dissolves into the inverse footer over the top 90 units. It paints both grounds itself, so `surface` does not apply. Content sits on the inverse part.

```jsx
<footer style={{ position: 'relative', height: 220, color: 'var(--sc-color-text-on-inverse)' }}>
  <PlusField art="ufooter" backdrop />
  <nav style={{ position: 'absolute', left: 'var(--sc-space-layout-inset-lg)', bottom: 'var(--sc-space-layout-stack-md)', display: 'flex', gap: 'var(--sc-space-layout-stack-md)', font: 'var(--sc-font-text-label-ui)' }}>
    <a href="/work">Work</a><a href="/studio">Studio</a><a href="/contact">Contact</a>
  </nav>
</footer>
```

### Pull-quote bracket (2n): `uquote`

Two crisp corners whose arms fade. The quote sits inside, in body-lead.

```jsx
<figure style={{ position: 'relative', width: 360, height: 300, margin: 0 }}>
  <PlusField art="uquote" surface="raised" backdrop />
  <div style={{ position: 'relative', height: '100%', boxSizing: 'border-box', padding: 'var(--sc-space-layout-stack-xl) var(--sc-space-layout-stack-lg)', display: 'grid', alignContent: 'center', gap: 'var(--sc-space-layout-stack-sm)' }}>
    <blockquote style={{ margin: 0, font: 'var(--sc-font-text-body-lead)' }}>Pull quotes sit inside the bracket.</blockquote>
    <figcaption style={{ font: 'var(--sc-font-text-mono-caption)' }}>Name, role</figcaption>
  </div>
</figure>
```

### Signup / form card corner (2s): `unews`

Two ribbons in the top-right corner; the form starts below them.

```jsx
<div style={{ position: 'relative', width: 360, background: 'var(--sc-color-surface-raised)' }}>
  <PlusField art="unews" surface="raised" backdrop />
  <form style={{ position: 'relative', padding: 'var(--sc-space-layout-stack-xl) var(--sc-space-layout-inset-md) var(--sc-space-layout-inset-md)', display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
    <TextField label="Email" placeholder="you@studio.com" />
    <Button type="submit">Subscribe</Button>
  </form>
</div>
```

### 404 / error page (2q): `type`

Halftone text on the inverse surface. `text` sets the string; `textScale` (default 0.62; the 404 uses 0.85) sets glyph height as a share of the box. Pitch and mark size follow the glyph size. The "404" is invisible to assistive tech, so keep a real heading on the page.

```jsx
<div style={{ background: 'var(--sc-color-surface-inverse)', display: 'grid', justifyItems: 'center', gap: 'var(--sc-space-layout-stack-sm)', paddingBottom: 'var(--sc-space-layout-stack-lg)' }}>
  <div style={{ width: '100%', height: 280 }}><PlusField art="type" text="404" textScale={0.85} /></div>
  <p style={{ color: 'var(--sc-color-text-on-inverse)' }}>Page not found</p>
  <Button variant="secondary">Back home</Button>
</div>
```

### App splash (2t): `usplash`

A slow wave down a zigzag (animated). Phone-shaped box, one caption.

```jsx
<div style={{ position: 'relative', width: 270, height: 560, borderRadius: 'var(--sc-radius-surface-large)', overflow: 'hidden' }}>
  <PlusField art="usplash" backdrop label="Loading" />
  <p aria-hidden="true" style={{ position: 'absolute', insetInline: 0, bottom: 'var(--sc-space-layout-stack-md)', textAlign: 'center', font: 'var(--sc-font-text-mono-caption)', color: 'var(--sc-color-text-on-inverse)' }}>Loading</p>
</div>
```
