# Brand Elements

Directive rules for the plus-field brand elements: the halftone of plus marks that SCDS ships as `PlusField` and its wrappers. Approved set: Brand Elements prototype, turn 2 (2a–2t). Decision: `decisions/decisions.md` 2026-10-04 · plus-field.

Every mark is a plus. No lockups. Each element is tied to one recurring UI slot, so it is built once and reused across sites and apps.

## Slot → element

| Slot | Element | Kind |
|---|---|---|
| Between paragraphs, sections, chapters | `SectionDivider` (`hairline`, `band`, `block`) | Crisp |
| Section opener | `HeadingRule` (`title`, `eyebrow`) | Crisp |
| Active tab or nav item | `PlusUnderline` | Crisp |
| Upload, reading, task progress | `PlusProgress` (`thin`, `band`) | Crisp |
| Stepper, project timeline | `PlusTimeline` | Crisp |
| List bullet, breadcrumb separator | `PlusBullet`, `PlusSeparator` | Crisp |
| Page loading | `PlusLoader` | Loose, animated |
| Content loading in place | `PlusSkeleton` | Crisp shapes, animated sweep |
| Item with no image | `PlusThumbnail` (seeded) | Loose |
| Card header, card hover, CTA band, empty state, image placeholder, hero, footer edge, pull quote, form corner, 404, app splash | `PlusField art="…"` (compositions in `PlusField.prompt.md`) | Loose |

Use the wrapper when one exists. Reach for `PlusField` directly only for the loose arts that have no wrapper.

## Crisp grids versus loose ribbons

- **Crisp grids go in structural slots.** Dividers, progress, tabs, timelines, bullets. Marks sit on an exact grid: no jitter, no offset rows, square or deliberately faded ends. Structure has to read as structure, at a glance, every time.
- **Loose ribbons go in expressive slots.** Hero, CTA, card header, card hover, placeholders, splash. Marks are offset row to row, jittered, and soft at the band edges. They carry the brand's hand; they never carry information.
- Never swap them. A loose divider reads as decoration and stops dividing. A crisp hero reads as a chart.
- One loose element per view. A hero and a CTA band on the same screen compete; pick the one at the decision point.
- Loose elements sit behind or beside content, never under body text. Headlines sit in the clear half of a hero (`uhero` leaves the left 46% open).

## The teal rule

Teal (`--sc-color-brand-accent`) appears in a brand element only to mark state:

- **Progress fill** (`PlusProgress`, `uprog`).
- **The active item** (`PlusUnderline`, `uline`).
- **The current step** (`PlusTimeline` current node, `PlusBullet` with `accent`).

Nothing else is teal: not a hero, not a CTA, not a thumbnail, not a divider. This is enforced in the engine. A drawer reaches teal only through `teal(role)` with one of the three roles above; any other role throws. Adding a role is a design decision and needs a `decisions.md` entry.

This extends the system rule that teal is a hover and current-state colour, never a resting fill. Progress is current state.

## Surface

- `none` (every crisp wrapper's default): no ground, primary-text marks. The element sits on whatever surface holds it.
- `inverse` (the `PlusField` default, loader, thumbnail): the inverse surface with on-inverse marks. For expressive arts that need their own ground.
- `raised`, `page`, `sunk`: that surface with primary-text marks. Match the container the element sits in, so the field's ground disappears into it.
- Colours are read from the semantic tokens at draw time. Dark mode is automatic; never pass a colour.

## Density

`density` sets the spacing between marks, from 0.6 (open) to 1.6 (packed). Default 1. It does not change the mark size.

- Keep one density per page. Mixed densities read as a rendering fault.
- Raise density for small elements seen at a distance (a 404 on a large screen). Lower it on large expressive fields behind text, to quiet them.
- Crisp wrappers keep their row count at every density; only the pitch along the row changes.

## Shape

`shape` is `plus` (default), `square` or `round`.

- `plus` is the brand. Use it everywhere unless a view already carries several plus fields and needs a quieter one.
- `square` and `round` are that quieter one. Never mix shapes inside one element, and never use them for the crisp structural set on a page that uses plus elsewhere.

## Motion

Three arts animate: `uskel` (sweep), `uloader` (2.8 s draw-hold-fade loop) and `usplash` (travelling wave). They are continuous motion, the one category the motion rules allow to run long and linear: each loop narrates "still working" for as long as the wait lasts.

- All three run on one shared frame loop and pause while offscreen.
- Under `prefers-reduced-motion`, or `animate={false}`, each shows one still frame that reads as the finished element: the loader drawn, the skeleton at rest, the splash mid-wave.
- `ucard` responds to the pointer and is otherwise still. Every other art is static.

## Accessibility

- The canvas is always decorative (`aria-hidden`). Text that matters is DOM.
- `PlusProgress` carries a visually hidden `role="progressbar"`; always pass `label`.
- `PlusLoader` announces its `label` through a visually hidden `role="status"`. `PlusSkeleton` does when given a `label`.
- `PlusTimeline` is an `<ol>` with `aria-current="step"` on the current item. `PlusUnderline`, `PlusBullet` and `PlusSeparator` are decorative; the tab, list item or link carries the state.
- The halftone 404 is not readable by assistive tech. Keep a real heading on the page.

## Do not

- Do not draw plus fields by hand in CSS or SVG. Use `PlusField`, so density, shape, theme and motion stay one system.
- Do not place a loose field behind body copy, form fields or data.
- Do not animate a static art, or loop an animated art faster to "feel alive".
- Do not seed `PlusThumbnail` with a list index. Use a stable id, so an item keeps its picture.
