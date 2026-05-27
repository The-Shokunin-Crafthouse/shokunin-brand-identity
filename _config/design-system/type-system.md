# Type System — The Shokunin Crafthouse · Brand Identity
# Source of truth for weight-per-step, optical compensation, and pairing logic
# Last updated: 2026-05-26 (Sprint 2)
# Resolves: sc-brand-system-spec.md §6 success criteria 2a, 2d

Primary face: **Neue Haas Grotesk Display Pro** (self-hosted woff2 when shipped; Helvetica Neue → Inter → system-ui fallback chain until the `/fonts` directory lands).
Secondary face: **Cascadia Mono** (loaded via Google Fonts CDN; see `decisions/decisions.md` Sprint 2 entry for full evaluation).

Type scale: 12 steps · modular ratio 1.25 · 11 / 12 / 13 / 14 / 16 / 20 / 24 / 32 / 44 / 60 / 84 / 120 px.

Both faces share the active weight set 300 / 400 / 500. Weight 600 is reserved exclusively for the secondary-button hover bump — no other approved use, no scale step uses it.

---

## 1. Weight assignment per scale step

Single table. Locked. Every shipped surface resolves through this map; deviations require a logged ADR.

| Step | Default weight | Family default | Use case | Rationale |
|---|---|---|---|---|
| 11px | 500 medium | sans + mono | Eyebrows, badges, button labels, mono caps in chrome | Chrome tier. NHG at 11px loses stem density under sub-pixel rendering; medium restores optical presence without breaking the weight rhythm. Mono runs the same weight so caps eyebrows and sans eyebrows hold equal colour. |
| 12px | 500 medium | sans + mono | UI labels, dense table headers, badge text | Same chrome compensation as 11px. The 11/12 step is one optical band — both compensate together. |
| 13px | 400 regular | sans + mono | Captions, muted secondary copy, metadata | Transition out of chrome register into body register. Regular reads as "this is text" not "this is a label." Below 13px, the eye reads structure; from 13px up it reads prose. |
| 14px | 400 regular | sans + mono | Secondary body, dense table cells, form helper text | Regular. Within reading-text register. |
| 16px | 400 regular | sans | Body default | Anchor of the weight rhythm. Every other step calibrates against 16/400. If 16/400 is wrong, the whole system is wrong. |
| 20px | 400 regular | sans | Lead paragraph, intro body, large body | Regular preserves reading-text register at one step above body. Bumping to medium here reads as quasi-bold and breaks the body-to-headline gradient. |
| 24px | 500 medium | sans | Card titles, mid-headlines | First step into headline register. Medium asserts headline weight without entering display register. Tightens letter-spacing per token (`tracking.snug` -0.012em). |
| 32px | 500 medium | sans | Section titles, page headers | Section-marker weight. Distinct from running prose by mass and tracking (`tracking.tight` -0.018em). |
| 44px | 300 light | sans | Premise statements, hero subhead | Crosses into display register. NHG Light at this scale carries open counters and breathing room — visual *ma*. Negative tracking (`tracking.tighter` -0.025em) closes the rhythm so light doesn't read loose. |
| 60px | 300 light | sans | Mid display, hero alt | Light. `tracking.tighter` -0.025em. |
| 84px | 300 light | sans | Large display, hero primary | At this size, regular reads as bold. Light is the considered weight. `tracking.tightest` -0.04em. |
| 120px | 300 light | sans | Maximum display, hero monumental | Light. `tracking.tightest` -0.04em. Line-height pulled to `flat` 1.0 for vertical alignment. |

**Pattern.** Chrome (11–12) = medium. Body and reading (13–20) = regular. Mid-headline (24–32) = medium. Display (44–120) = light. The system reads as three weight zones in a five-step rhythm: chrome up, body neutral, headline up, display down.

**Why not bold (700+).** NHG bold exists but is not in this system. Body-to-display contrast comes from size and tracking, not from weight maxima. Reserving bold means it carries signal when introduced — which is not yet.

---

## 2. Screen optical size behavior — NHG specifically

NHG is a digital cut tuned for screen use; it has no print optical sizes. The compensation it needs is at the small end, not the large end.

### 2.1 At 11px and 12px (chrome tier)

The defining issue is sub-pixel rendering on retina and CSS pixel snapping on non-retina. NHG's stem widths at 11–12px regular fall below the threshold where the antialiased grayscale grid can render them evenly — half-strokes alias to the row above or below, producing visual flicker and uneven colour across a line of caps eyebrows.

**Compensation applied (locked):**

1. **Weight bump to 500 medium** — the primary intervention. Documented in §1.
2. **Forced antialiasing** — apply globally:
   ```css
   -webkit-font-smoothing: antialiased;
   -moz-osx-font-smoothing: grayscale;
   text-rendering: geometricPrecision;
   ```
   `geometricPrecision` over `optimizeLegibility` at this tier — kerning gain from `optimizeLegibility` is invisible at 11px; precision in stem placement matters more.
3. **Tracking widen for caps** — eyebrows and badges set in mono caps at 11px use `tracking.wider` (0.06em) instead of `tracking.widest` (0.08em); the latter loosens NHG and Cascadia caps inconsistently at this scale. For non-caps chrome at 11/12px, default `tracking.widest` (0.08em) holds.
4. **No italic at 11px** — NHG italic at 11px on retina loses stroke modulation; the angled forms blur into the row beneath. If italic chrome is required, use mono italic (Cascadia italic holds at 11px because its higher x-height and humanist forms survive the sub-pixel pass).

### 2.2 At 13–20px (body tier)

NHG regular reads at its calibrated weight. No compensation. Body styles get:
```css
text-rendering: optimizeLegibility;
font-feature-settings: "ss01", "cv11", "kern";
```
`ss01` is the stylistic alternate for the single-storey 'a' (matches Cascadia's 'a' tone in mixed body+mono blocks). `cv11` selects the alternate 'g' double-bowl form for headline consistency.

### 2.3 At 24–32px (mid-headline tier)

NHG medium. Letter-spacing tightening per `tracking.tight` / `tracking.snug` tokens. No further optical compensation.

### 2.4 At 44–120px (display tier)

NHG light. Three things matter:

1. **Tracking is non-optional.** Light weight at large sizes reads loose unless closed by negative tracking. Tokens already handle this (`tracking.tighter` -0.025em at 44/60, `tracking.tightest` -0.04em at 84/120) — apply, do not override.
2. **Line-height flattens.** At 120px, the cap-to-baseline distance dominates; line-height `flat` 1.0 prevents visual gaps in two-line display. At 84px, `tight` 1.1. At 44/60, `tight` 1.1.
3. **Display Pro vs Text Pro.** When the woff2 ships, route 44+ to **Neue Haas Grotesk Display Pro** explicitly; route 13–24 to **Neue Haas Grotesk Text Pro**. The 16/20 body tier sits on the Text cut. The 11/12 chrome tier also sits on Text — Display Pro at chrome sizes reads thin even at medium weight. Until woff2 lands, the fallback chain (Helvetica Neue → Inter) carries all sizes uniformly; the optical split activates when the self-hosted faces resolve.

### 2.5 Cascadia at 11–12px (mono chrome)

Cascadia Mono was tuned for Windows Terminal at 11–14px. No compensation needed at the small end. The humanist details that read busy at 24+ work in its favour at 11–12 — characters disambiguate by shape, not just by spacing. Weight matching at 500 holds against NHG 500 without colour tension.

---

## 3. Composition tokens

The composed `font.text.{step}` tokens in `tokens/primitives.json` bind every step to its size + weight + line-height + tracking + family default. Surfaces SHOULD reach for the composition token, not the underlying primitives, unless the surface deliberately overrides one axis (e.g. a 32px headline set in mono — overrides family but keeps the rest).

Composition map (resolved):

| Token | size | weight | lineHeight | tracking | family |
|---|---|---|---|---|---|
| `font.text.11` | 11 | 500 | base 1.5 | widest 0.08em | sans |
| `font.text.12` | 12 | 500 | base 1.5 | wide 0.04em | sans |
| `font.text.13` | 13 | 400 | relaxed 1.55 | normal 0 | sans |
| `font.text.14` | 14 | 400 | base 1.5 | normal 0 | sans |
| `font.text.16` | 16 | 400 | base 1.5 | normal 0 | sans |
| `font.text.20` | 20 | 400 | relaxed 1.55 | normal 0 | sans |
| `font.text.24` | 24 | 500 | snug 1.2 | snug -0.012em | sans |
| `font.text.32` | 32 | 500 | snug 1.2 | tight -0.018em | sans |
| `font.text.44` | 44 | 300 | tight 1.1 | tighter -0.025em | sans |
| `font.text.60` | 60 | 300 | tight 1.1 | tighter -0.025em | sans |
| `font.text.84` | 84 | 300 | tight 1.1 | tightest -0.04em | sans |
| `font.text.120` | 120 | 300 | flat 1.0 | tightest -0.04em | sans |

Mono variants exist only at the chrome tier (`font.text.mono.11`, `.12`, `.13`, `.14`) — the larger sizes use mono only as an override, never as a default.

---

## 4. Pairing logic — sans + mono

The two faces are not equal partners. Sans is the voice; mono is the apparatus.

- **Sans carries:** running prose, headlines, body copy, display, button labels (when non-chrome), table cell content, form input values.
- **Mono carries:** eyebrows, badges, button labels (chrome register), timestamps, token references, code blocks, status dots' adjacent labels, breadcrumbs, dashboard metric chrome.

When both appear in the same block (e.g. an eyebrow above a 60px display headline), the mono caps and the NHG light track in opposite directions: mono opens (`tracking.wider`), NHG closes (`tracking.tighter`). The opposition is intentional — it separates the registers visually.

---

## 5. Loading + fallback

```html
<!-- Cascadia: Google Fonts CDN -->
<link href="https://fonts.googleapis.com/css2?family=Cascadia+Mono:wght@300;400;500;600&display=swap" rel="stylesheet">

<!-- NHG: self-hosted woff2 once /fonts directory ships -->
<style>
@font-face {
  font-family: "Neue Haas Grotesk Display Pro";
  font-weight: 300 500;
  font-display: optional;  /* avoids FOUT; falls back if not cached in ~100ms */
  src: url("/fonts/NeueHaasGroteskDisplayPro.woff2") format("woff2");
}
@font-face {
  font-family: "Neue Haas Grotesk Text Pro";
  font-weight: 400 500;
  font-display: optional;
  src: url("/fonts/NeueHaasGroteskTextPro.woff2") format("woff2");
}
</style>
```

Fallback stack: `"Neue Haas Grotesk Display Pro", "Neue Haas Grotesk Text Pro", "Helvetica Neue", Inter, system-ui, sans-serif`. Until the woff2 ships, Helvetica Neue carries macOS; Inter carries the rest. Both fallbacks are visually closer to NHG Text Pro than to Display Pro — accept the loss of the display optical tier in the fallback case and design specimens to be robust to it.

---

## 6. Sources

- Scale and ratio: `sc-brand-system-spec.md` §6, §9.4
- Weight set: `tokens/primitives.json` `font.weight`, lock confirmed Sprint 1
- Mono selection: `decisions/decisions.md` Sprint 2 entry (supersedes 2026-05-26 entry)
- Pairing logic: derived from `stages/02-design/design-system-preview.html` working pattern
- Optical compensation: studio observation on retina sub-pixel rendering of NHG at 11–12px; verified against the Direction 01 preview
