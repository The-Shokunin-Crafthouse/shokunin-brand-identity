# Building with SCDS (Shokunin Crafthouse Design System)

## Setup

No provider is required. Load `styles.css` and `_ds_bundle.js`; every component then styles itself from CSS custom properties declared on `:root`.

- `styles.css` also applies the system reset: `body` takes the page surface, primary text colour and the brand sans; `button` is unstyled; `p`, `h1`-`h6`, `ul` have no margin. Do not add another reset.
- Dark mode: set `data-theme="dark"` on `<html>`. Every `--sc-*` token re-resolves. `SCDS.ThemeProvider` does this for you (it reads the OS preference, persists the choice) and `SCDS.useTheme()` returns `{ theme, toggle, setTheme }`. Never hard-code a colour per mode.
- Icons are Phosphor. Every glyph is on the same global: `<SCDS.Icon glyph={SCDS.Gear} size="md" />`. A glyph name that does not exist renders nothing, so use real Phosphor names (`MagnifyingGlass`, `ArrowRight`, `Bell`, `CheckCircle`, `Plus`, `Minus`).
- `Switch`, `SegmentedControl`, `Stepper` and `Slider` are controlled. Hold their value in `useState` and pass `onChange`, or they will not move. `Progress` is a read-only meter; a value the user sets is a `Slider`.

## Styling your own layout

There are no utility classes and no style props. Components take `className` only. For layout glue, write inline styles or your own CSS using the semantic tokens. Raw hex, raw px spacing, and primitive tokens (`--sc-p-*`) are bugs here; use `--sc-*` only.

| Need | Tokens |
|---|---|
| Surfaces | `--sc-color-surface-page`, `-sunk`, `-deep-sunk`, `-raised`, `-floating`, `-hover`, `-inverse` |
| Text | `--sc-color-text-primary`, `-secondary`, `-tertiary`, `-disabled`, `-on-accent`, `-on-inverse` |
| Accent, status | `--sc-color-brand-accent`, `--sc-color-brand-accent-deep`, `--sc-color-status-info`, `-success`, `-warning`, `-error` |
| Lines | `--sc-color-border-default`, `-strong`, `-subtle`, `-focus`; `--sc-border-width-default` |
| Gaps inside a group | `--sc-space-component-gap-sm`, `-md`, `-lg`; `--sc-space-component-padding-sm`, `-md`, `-lg` |
| Page rhythm | `--sc-space-layout-stack-sm`, `-md`, `-lg`, `-xl`; `--sc-space-layout-inset-sm`, `-md`, `-lg` |
| Radius | `--sc-radius-control`, `--sc-radius-surface`, `--sc-radius-surface-large`, `--sc-radius-pill` |
| Motion | `--sc-motion-hover-duration` + `--sc-motion-hover-easing`, `--sc-motion-reveal-*`, `--sc-motion-entrance-*` |

Type is one composite token per role, set with the `font` shorthand: `font: var(--sc-font-text-body-default)`. Roles: `display-xl`, `display-lg`, `display-md`, `display-sm`, `title-section`, `title-card`, `body-lead`, `body-default`, `body-dense`, `caption`, `label-ui`, `label-chrome`, `mono-body`, `mono-caption`, `mono-chrome` (all prefixed `--sc-font-text-`). Never set a bare font-size. Render `<SCDS.TypographySpecimen />` to see every role.

## House rules the components assume

- Teal (`brand-accent`) is a hover and current-state colour, not a resting fill. One primary `Button` per view; the rest are `secondary` or `tertiary`.
- Elevation is fill, not stroke or shadow. Separate regions by stepping surfaces (`page` to `sunk` to `deep-sunk`), or with `Card`. Only controls carry a shadow. Do not add borders or `box-shadow` to your own containers.
- Copy is short and specific: button labels of two or three words, sentence case, no filler text.
- Brand graphics are plus fields. Use `SectionDivider`, `HeadingRule`, `PlusUnderline`, `PlusProgress`, `PlusLoader`, `PlusSkeleton`, `PlusTimeline`, `PlusBullet`, `PlusSeparator`, `PlusThumbnail`, or `PlusField art="…"` for the expressive arts. Crisp grids in structural slots, loose ribbons in expressive ones, at most one loose field per view. In a brand element teal marks only progress, the active item and the current step. A field has no size of its own: give its box a height, or pass `backdrop` inside a `position: relative` host.

## Where the truth lives

- `_ds_bundle.css`: every token, light under `:root` and dark under `[data-theme="dark"]`, then the reset and component styles. Read it before inventing a value.
- `components/general/<Name>/<Name>.prompt.md` and `<Name>.d.ts`: props and examples per component.
- `guidelines/_config/design-system/ui-rules.md`, `type-system.md`, `brand-elements.md`, and `guidelines/_config/voice/brand-voice.md`: the studio's UI rules, type logic, brand-element rules, and copy voice.

## Example

```jsx
const { Card, TextField, Button, StatusPill, Divider } = window.SCDS;

function InviteCard() {
  return (
    <div style={{ maxWidth: 360 }}>
      <Card>
        <div style={{ display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)' }}>
            <p style={{ font: 'var(--sc-font-text-title-card)' }}>Invite a collaborator</p>
            <StatusPill tone="neutral" emphasis="outline">Draft</StatusPill>
          </div>
          <p style={{ font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)' }}>
            They get read access to the project binder.
          </p>
          <TextField label="Email" placeholder="you@studio.com" />
          <Divider />
          <div style={{ display: 'flex', gap: 'var(--sc-space-component-gap-md)' }}>
            <Button variant="primary">Send invite</Button>
            <Button variant="tertiary" arrow={false}>Cancel</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
```
