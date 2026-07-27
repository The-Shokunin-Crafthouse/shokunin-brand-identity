# SCDS Audit — Shokunin Design System Library

**File:** `SCDS — Shokunin Design System Library` (`0zVoxaLJQkjHENYJlQk1VT`)
**Date:** 2026-07-25
**Auditor:** Claude (Opus 5), Cowork session
**Scope:** Figma file + `shokunin-brand-identity` repo tokens + three live consumer sites
**Declared source of truth:** **Figma.** Every Figma↔code mismatch below is logged as a *code* defect unless the Figma side is itself internally broken.

---

## 0. Verdict

**SCDS cannot be published as-is.** Not because it is thin — it is substantial: 207 variables, 26 text styles, ~52 component sets, and a genuinely disciplined colour layer (**zero unbound fills, zero unbound strokes across every non-archive component**). It cannot be published because five things are true at once:

1. The library has **never been published** — nothing is consumable by any other file.
2. Publishing it today would also publish **`_Archive`** (5 component sets + 51 components, including a competing `Button`, `Field`, and `StatusPill`).
3. Every variable and all 26 text styles are bound to **trial-licensed fonts**.
4. `color/status/error` in dark mode renders at **1.79:1** — effectively invisible.
5. Only **one of the three sites** actually consumes the shared token file, and the flagship site is on a **different brand hue** (red, not teal).

Items 1–4 are mechanical and closable inside one sprint. Item 5 is a directional call that needs your sign-off before any code is written (§6).

**Counts.** 44 pages · 124 primitives + 83 semantic variables · 26 text styles · 2 effect styles · 0 paint styles · 0 grid styles · 0 component descriptions.

---

## 1. P0 — Blocks publish

### P0-1 · The library has never been published
`get_libraries` returns `libraries_added_to_file: []` and a design-system search scoped to this file returns zero components, zero variables, zero styles. Nothing in SCDS is reachable from another Figma file or from Code Connect. This is the root blocker, and it is also the last step — everything else in this report should land *before* the publish, because the first publish sets the baseline consumers diff against.

### P0-2 · `_Archive` will publish along with everything else
`_Archive` holds **5 component sets and 51 standalone components**, including `Button` (10 variants), `Field` (4), `StatusPill` (4), `MilestoneStatusPill` (5), `InvoiceStatusPill` (5), and 23 legacy `Type/*` components that predate the text-style system.

Live SCDS already has `Button` (15 variants), 5 field sets, and `StatusPill` (12). On publish, consumers get **two `Button`s, two `StatusPill`s, and two field families in one picker**, distinguishable only by which page they came from. Figma has no "exclude this page from publish" control — components are published or deleted.

**Fix:** move `_Archive` to a separate file (`SCDS Archive`) before first publish. Do not delete — it is the only record of the pre-system portal work.

### P0-3 · The entire type system is bound to trial fonts
```
font/family/sans    = Haas Grot Disp Trial
font/family/display = Haas Grot Disp Trial
font/family/text    = Haas Grot Text Trial
font/family/mono    = Cascadia Mono
```
All 26 text styles bind `fontFamily` to these variables. Meanwhile **production already ships the licensed cut**: `shokunincrafthouse.com` and `clients.shokunincrafthouse.com` both self-host `Neue Haas Grotesk Display Pro` and `Neue Haas Grotesk Text Pro` (no trial paths anywhere in either bundle).

So the design system is on a trial licence while the products are correctly licensed — the inverse of the safe failure mode. Publishing a library on trial fonts distributes the trial dependency to every consumer.

Two further consequences:
- `font/family/sans` and `font/family/display` hold **the same value**. One of them is redundant, or `sans` was meant to be the Text cut.
- `brand.shokunincrafthouse.com` serves **no `@font-face` and no webfont link at all** — Neue Haas resolves there only if the visitor happens to have it installed locally.

**Fix:** rebind all four family variables to the Pro family names, resolve the sans/display collision, and add `@font-face` to the brand site.

### P0-4 · `color/status/error` was unreadable in dark mode — ✅ FIXED 2026-07-25

| Token | Mode | Value | On surface | Ratio | AA body | AA large |
|---|---|---|---|---|---|---|
| `color/status/error` | Dark | ~~`#732020`~~ → **`#dd4c4c`** | `#0f0f0f` | ~~1.79~~ → **4.76** | ✗ → **✓** | ✗ → **✓** |
| `color/status/success` | Dark | `#388f63` | `#0f0f0f` | 4.82 | ✓ | ✓ |
| `color/status/warning` | Dark | `#c94e28` | `#0f0f0f` | 4.20 | ✗ | ✓ |
| `color/status/info` | Dark | `#3866e8` | `#0f0f0f` | 3.86 | ✗ | ✓ |

The other three status hues follow the correct rule — the dark-mode value is *lighter* than the light-mode one. Error alone inverted it: `error/light` `#7f1d1d` → `error/dark` `#732020`, **darker**. It read as a typo that propagated.

**Applied:** `color/status/error/dark` (`VariableID:2:52`) set to `#dd4c4c`. The semantic `color/status/error` Dark alias was already correct and now resolves through it.

**Why not the literal "same shift" as the peers.** The mean light→dark shift across success/warning/info is ΔH −1.2°, ΔS −5.0, ΔL **+5.3**. Applied verbatim to `#7f1d1d` that yields `#902729` — **2.29:1**, still failing. The reason is that `error/light` is *itself* the outlier: at HSL lightness **30.6** it sits well below its peers (success 35.3, warning 40.4, info 51.2), and measures 8.15:1 on the light surface where its peers sit at 3.69–4.79. A peer-sized nudge from an off-peer base lands nowhere near the peer band. Red also carries intrinsically low relative luminance, so it needs more lightness than green or blue to reach the same ratio.

So the *intent* was applied rather than the arithmetic: land `error/dark` in the same contrast band its peers occupy in dark mode (3.86–4.82). `#dd4c4c` measures **4.76** — alongside `success/dark`'s 4.82, the best-performing peer — and clears AA body, which the peer mean (4.29) would not have.

Hue was held at **0°**, preserving the full **14.2° separation from `warning/dark`** (14.2°). Red/orange status confusion is the classic failure here, and 0° is the maximum separation available. Saturation 68.1% sits between `error/light`'s 62.8% and the peer dark mean of 63.3%.

**Still open in this family:** `warning/dark` (4.20) and `info/dark` (3.86) fail AA body — covered by the `-ink` tier in 2.1. And **`error/light` remains the outlier at 8.15:1** against peers at 3.69–4.79; normalising it is a separate change, not made here because it was not authorised.

⚠️ **Not yet propagated to code.** `tokens/primitives.json` still carries `#732020`, so `brand.../tokens.css` and therefore the client portal still ship the 1.79:1 value in production. See 8.8.

---

## 2. P1 — Ships broken to users

### P1-1 · Six status/interactive colours fail AA for body text
Measured against the token pairings SCDS itself declares:

| Foreground | Background | Ratio | Verdict |
|---|---|---|---|
| `text/onAccent` `#ffffff` on `brand/accent` `#038e93` | — | **3.97** | ✗ AA body |
| `text/onAccent` `#ffffff` on `brand/accentFill` `#04797d` | — | 5.20 | ✓ |
| `interactive/hover` `#038e93` (L) | `surface/page` `#ebe7e4` | **3.23** | ✗ AA body |
| `status/success` (L) `#2f855a` | `#ebe7e4` | **3.69** | ✗ AA body |
| `status/warning` (L) `#c2410c` | `#ebe7e4` | **4.21** | ✗ AA body |
| `status/info` (L) `#2d5ad8` | `#ebe7e4` | 4.79 | ✓ |

Two specific notes:

**`text/onAccent` is the dangerous one.** White on `brand/accent` = 3.97, white on `brand/accentFill` = 5.20. There are two accent tokens and *the primary one fails*. Any primary button filled with `brand/accent` and labelled `text/onAccent` ships sub-AA. Either retire `brand/accent` as a fill or repoint `text/onAccent` per surface.

**Learning #67 is stale.** Studio memory records the brand ink→accent hover as "~3.8:1 (sub-AA)". Measured on the current tokens it is **3.23:1**. The recorded figure understates the gap; the learning file should be corrected to match.

**Learning #56 was never applied here.** The studio already knows the fix — a separate `-ink` token for text, keeping the base hue for fills/borders/dots. SCDS has no `-ink` tier at all. This is the single highest-leverage colour change in the report: four failures close with one additive pattern and zero cascade.

### P1-2 · `color/border/subtle` is more prominent than `color/border/default` in light mode

| Token | Light alias | Value | Contrast vs `surface/page` |
|---|---|---|---|
| `border/default` | `warmGray/250` | `#d5d2cf` | 1.22 |
| `border/subtle` | `warmGray/350` | `#c5c2bf` | **1.44** |

"Subtle" is the *stronger* line. Dark mode gets it right (`border` `#2a2a2a` / `borderSubtle` `#1a1a1a` — subtle is closer to the ground). **Light mode is inverted relative to dark mode**, so any surface using both reverses its hierarchy when you flip themes.

### P1-3 · `color/divider/*` are raw hex, identical to each other, and unaliased

```
color/divider/subtle   Light: RAW #1a1815   Dark: RAW #ffffff
color/divider/default  Light: RAW #1a1815   Dark: RAW #ffffff
color/divider/strong   Light: RAW #1a1815   Dark: RAW #ffffff
```

Three defects in three tokens:
1. **Raw values in the semantic layer.** Every other one of the 83 semantic variables aliases a primitive. These three break the chain — they cannot be retargeted by changing a primitive.
2. **All three are identical**, so subtle/default/strong is a naming fiction. There is no divider hierarchy.
3. The values aren't even off-palette-adjacent: `#1a1815` *is* `warmGray/800` and `#ffffff` *is* `utility/white` — the correct primitives exist and are simply not referenced.

### P1-4 · `--sc-p-font-size-18` is referenced and undefined on the live studio site
`shokunincrafthouse.com/assets/css/components.css` sets `font-size: var(--sc-p-font-size-18)` on `.nav__brand` with **no fallback**. The token file defines no `18`. Figma has the value as `font/size/offscale/18`, which the generator emits as `--sc-p-font-size-offscale-18`. The nav brand is currently rendering at the inherited size, not the intended 18px, on the flagship site.

### P1-5 · `brand.shokunincrafthouse.com/tokens.css` returned 404 on the bare URL
The bare URL 404'd on three consecutive attempts while `?cb=2`, `?cb=3` and `?zz=9` all served the file correctly. This is *most likely* a fetch-layer error cache — but the bare, query-less URL is **exactly what `clients.shokunincrafthouse.com` requests**, so if it is an edge-cache 404 the client portal is silently loading zero shared tokens in production.

**This is unverified and must be checked first thing** — a hard-refresh on the portal with the network tab open settles it in ten seconds. If it 404s, this jumps to P0.

---

## 3. P2 — System integrity

### P2-1 · Line-height and letter-spacing are hardcoded in all 26 text styles
Every text style binds `fontFamily`, `fontSize` and `fontWeight` to variables — and hardcodes `lineHeight` and `letterSpacing`. Meanwhile `font/lineHeight/*` (5 tokens) and `font/tracking/*` (9 tokens) are defined and **consumed by nothing**. Fourteen primitives exist purely as documentation. Line-height and tracking cannot be retargeted system-wide.

`text/body/nav/header` and `text/body/nav/node` are worse — they also hardcode `fontSize`, and set `lineHeight: AUTO`, which violates the studio rule that every text run sets line-height, tracking and measure.

### P2-2 · Three pairs of duplicate text styles
| Style A | Style B | Difference |
|---|---|---|
| `text/body/dense/regular` | `text/body/dense/light` | **none** — both Haas Grot Text 55 Roman, 14px, 150%, 0% |
| `text/body/default/regular` | `text/body/default/light` | **none** — both 55 Roman, 16px |
| `text/body/lead/regular` | `text/body/lead/light` | **none** — both 55 Roman, 20px |

The `light` variants were created and never given a light weight. `font/weight/light` (300) exists and no text style uses it — along with `thin` (250), `regular` (400) and `semibold` (600). Four of seven weight primitives are orphaned.

### P2-3 · Tracking is inconsistent across the display ramp
| Style | Size | Tracking |
|---|---|---|
| `text/display/sm` | 44px | **0%** |
| `text/display/md` | 60px | −2.5% |
| `text/display/lg` | 84px | **0%** |
| `text/display/xl` | 120px | **0%** |

Optical tracking should tighten as size grows. Here only the 60px step is tuned; 44, 84 and 120 are untouched. Also `text/display/xsm-32` and `text/title/section` are both 32px Haas Grot Disp 95 Black, differing only in line-height and tracking — and `xsm-32` is the only style in the file that embeds a pixel value in its name.

### P2-4 · Component state vocabulary is inconsistent, and `state` ≠ `State`

| Set | Property | Values |
|---|---|---|
| `Button`, `IconButton`, `TextField`, `Textarea`, `Segment`, `Link` | `State` | Default / Hover / Focus / Active / Disabled |
| `SearchInput` | `State` | Default / Hover / Focus / **Filled** / Disabled |
| `Select` | `State` | …/ Disabled / **Open** |
| `FileUpload` | `State` | Default / **DragActive** / **Error** / Disabled |
| `Tab` | `State` | …/ Disabled / **Selected** |
| `NavItem` | `State` | Default / Hover / Active / Focus — **no Disabled** |
| `Stepper` | `State` | Default / Disabled / MinReached / MaxReached — **no Hover/Focus/Active** |
| `Toggle` | `State` | **Off / On only** |
| `Badge` | **`state`** | pass / fail |
| `Pulse` | **`state`** | off / on |
| `NavLink` | **`state`** | default / current |
| `Pill` | `Status` | progress / success / warning / info / planned / live |

Three separate problems:
- **`state` and `State` are different properties in Figma.** Four components use the lowercase form. Any cross-component workflow, and any Code Connect prop mapping, breaks on the boundary.
- **`Toggle` has two variants where the studio's five-state rule demands five per position.** No hover, focus, or disabled. `Stepper` and `NavItem` are also short.
- **`Selected` is modelled two ways in one file.** `Tab` puts `Selected` on the same axis as `Default/Hover/Focus`, so you cannot express "selected *and* hovered". `Segment` solves the identical problem correctly with a separate `Selected` boolean. One of them is wrong; `Segment` is the right pattern.

### P2-5 · Zero component descriptions
All 23 audited sets and standalone components return `description = NO`. On a published library that is the text consumers read in the assets panel. Right now they get nothing.

### P2-6 · Unbound geometry
Fills and strokes are perfect. Geometry is not:

| Property | Unbound instances | Worst offenders |
|---|---|---|
| Corner radius | **~85** | Stepper 13, Badge 9, Tab 7, Row (portal) 7, Field 6 |
| Padding / gap | **~98** | Row (portal) 17, SegmentedControl 14, Nav (portal) 12, Badge 8 |
| Text without a style | **25** | SegmentedControl 10, Badge 6, Stepper 4, Progress 4 |

`radius/*` and the full `space/*` scale exist — these nodes just aren't using them. Every unbound value is a spacing or radius change that won't propagate.

### P2-7 · The `space/micro/*` tier is not on a 4pt grid
`space/micro/{2,6,10,14,18,22}` are 2pt-grid values. The studio rule is "all spacing from an 8pt scale (4pt for dense surfaces); arbitrary px values are a bug." These are used for real things (`switch/thumb`, `progress/hit-slop`, `padding-block/sm`), so this is a rule-vs-reality conflict, not sloppiness — but it needs an ADR that either widens the rule or retires the tier. Right now the system quietly violates its own stated standard.

Likewise `radius/input = 3` sits on no scale.

### P2-8 · The neutral ramp has four near-identical steps and then a cliff
```
200 #d9d6d2 → 250 #d5d2cf → 300 #cdcac7 → 350 #c5c2bf → 400 #9a9388
```
The 200→350 span covers about as much perceptual distance as a single step, then 350→400 jumps a chasm. That is why `border/default` and `border/subtle` (P1-2) are almost indistinguishable while every mid-tone decision feels forced.

### P2-9 · Dark mode contradicts studio learning #11
Learning #11 says: *anchor the dark base warmer (e.g. `#0D0C0B`)*, because near-black values drift on wide-gamut Chrome. SCDS dark surfaces are **pure neutral**: `#080807`, `#0a0a0a`, `#0f0f0f`, `#141414`, `#1a1a1a`, `#212121`, `#2a2a2a`, `#333333`.

The light ramp is warm (`#ebe7e4`, `#f4f1ed`). So the system is warm in light mode and cold in dark mode — the brand temperature changes when you flip the theme. And `color/warmGray/900 = #0d0c0b` — **the exact value the learning prescribes** — already exists in the file and is used by nothing except `signal/onProgress`.

There are effectively **two competing neutral systems**: `warmGray/*` (14 steps) and `dark/*` (13 tokens), with internal duplicates (`dark/border` = `dark/raised4` = `#2a2a2a`; `dark/borderSubtle` = `dark/raised2` = `#1a1a1a`).

### P2-10 · The focus-ring primitives are orphaned
`color/focusRing/light` (`#1f2024`) and `color/focusRing/dark` (`#e8e8ea`) exist — learning #32, correctly applied. But `color/border/focus` aliases **`color/teal/500` in both modes**, not the focus-ring tokens. So the file has two competing focus mechanisms and ships the weaker one.

Measured: `border/focus` teal on light page = **3.23:1** (scrapes past the 3:1 non-text minimum). The unused `focusRing/light` = **13.24:1**. The right token is sitting there.

Separately, `#1f2024` is a *cool* grey in an otherwise warm system.

### P2-11 · Naming conventions are mixed within a single collection
- Slash-nesting vs kebab leaf: `color/text/primary` but `color/text-on-inverse` and `color/surface-inverse`.
- camelCase vs kebab-case: `color/dark/borderSubtle`, `surfacePage`, `textPrimary` alongside `size/switch/track-width`, `size/progress/hit-slop`, `space/component/padding-inline/sm`.
- **A real collision:** Figma has `motion/press/release-duration`; the repo has `motion/press/release/duration`. This is the *only* name in either system where Figma and code genuinely disagree, and it is precisely the kind of thing a generated export drops silently.

### P2-12 · `Badge`, `StatusPill` and `Pill` are three overlapping components
`Badge` (pass/fail), `StatusPill` (12 statuses: Upcoming/Active/Complete/Open/Resolved/Paused/Archived/Pending/Accepted/Expired/Draft/Published), `Pill` (6: progress/success/warning/info/planned/live). Three vocabularies for one concept, with `Active`/`live`/`progress` overlapping semantically. Consumers will pick wrong.

### P2-13 · The `Mark` page is 10 flat components instead of one variant set
`Mark`, `Logo`, `MarkCompact-Dark`, `MarkCompact-Light`, `MarkIcon-Dark`, `MarkIcon-Light`, `MarkIcon-Filled`, `MarkIcon-Accent`, `MarkPrimary-Dark`, `MarkPrimary-Light`. This is a `Type × Theme` variant set expressed as ten separate assets. `Mark` and `Logo` are also two undifferentiated names for the top-level asset.

### P2-14 · Foundations documentation pages are empty
`Principles`, `Color`, `Type`, `Space`, `Motion` contain **no components and no content**. They exist as empty shells. Gate 2 requires "type system resolved, tokens defined, responsive behavior specified, interaction patterns documented, motion principles stated" — the pages were created for exactly that and never filled.

### P2-15 · No layout grids, no breakpoint representation
`gridStyles: []`. The studio verifies at 390 / 768 / 1024 / 1440 / 1920, and none of those exist anywhere in SCDS. Responsive behaviour is unspecified at the system level, so every consumer re-derives it.

### P2-16 · Effect styles are unbound and don't match the code
`shadow/raised` and `shadow/inset` each stack 4 shadow layers, **none bound to variables**. The repo defines `shadow/control/raised` built from `--sc-p-color-ink-rgb` / `--sc-p-color-white-rgb` (studio learning #15, the channel-triplet pattern). Figma has neither those primitives nor that name, and has a `shadow/inset` the repo doesn't carry.

---

## 4. Figma ↔ repo token diff

Exact set comparison of `tokens/primitives.json` + `tokens/semantic.json` against the two Figma collections:

| | Repo | Figma | In repo, not Figma | In Figma, not repo |
|---|---|---|---|---|
| Primitives | 151 | 124 | **27** | 0 |
| Semantic | 104 | 83 | **22** | 1 |

**Figma is a strict subset of the repo.** With Figma as declared truth this reads as *Figma is missing 49 tokens*, but the picture is more useful than that — the 49 fall into three groups:

**(a) Genuine Figma platform limits — 11 tokens, keep code-only.**
`motion/easing/*` (5 cubic-beziers) and their 6 semantic aliases. Figma variables have no bezier type. These should stay code-only, be documented on the (currently empty) `Motion` page, and be locked with an ADR so a future sync doesn't try to "fix" them.

**(b) Represented differently in Figma, name-mismatched — 33 tokens, reconcile.**
The repo's `font/text/*` composite tier (18 primitives) and `font/text/{label,body,title,display,mono}/*` semantic aliases (15) *are* Figma's Text Styles. They map **1:1 by name minus the `font/` prefix** — repo `font/text/label/chrome` ↔ Figma `text/label/chrome`. The generator just doesn't know that.

The reverse gap matters more: **Figma has 11 text styles with no repo token** — `body/{dense,default,lead}/{light,bold}` (6), `body/nav/header`, `body/nav/node`, `label/ui-tight`, `mono/flow`, `display/xsm-32`. Figma is truth, so these must be added to the export. (Note that 3 of the 6 are the duplicates from P2-2 — fix those first, or you export three redundant tokens.)

Similarly `shadow/control/raised` (repo) ↔ `shadow/raised` (Figma) is a name mismatch, and Figma's `shadow/inset` has no repo token.

**(c) Real Figma gaps — 3 tokens, add to Figma.**
`color/inkRgb` (`26 24 21`) and `color/whiteRgb` (`255 255 255`) — the channel-triplet pattern from learning #15, needed by `shadow/control/raised`. Figma STRING variables can hold these; it just doesn't. Plus the `motion/press/release-duration` ↔ `release/duration` naming collision from P2-11.

---

## 5. What the three sites actually consume

| | shokunincrafthouse.com | clients.shokunincrafthouse.com | brand.shokunincrafthouse.com |
|---|---|---|---|
| Loads shared `brand.../tokens.css` | **No** | **Yes** (linked twice) | **No** |
| Token source | self-hosted **fork** | shared host | none in served HTML |
| Brand ramp | **`--sc-p-color-shu-*` (red)** | `teal-*` | `teal-*` |
| Defines custom properties | ~300 | ~14 local + shared | **zero** |
| Fonts | Neue Haas Display Pro, self-hosted | Display Pro + Text Pro + Cascadia, self-hosted | **none — no `@font-face` at all** |
| Dark mode | `[data-theme=dark]` | `[data-theme=dark]` | in `tokens.css` |
| Hardcoded values | 0 hex, ~12 px | **~50 hex, ~80 px** | ~3 hex |

**Only one of three sites is on the system.** The headline finding:

**The flagship studio site is on a different brand hue.** It defines a full `--sc-p-color-shu-50…900` red ramp; SCDS and the shared token file use **teal**. This is not drift you patch — it is an unresolved brand decision sitting in production. Nothing else in this report matters as much, because "publish SCDS so my 3 sites can use it" is not achievable while the flagship site's accent colour contradicts the system's.

Supporting findings:
- The studio site's `tokens.css` is a **fork, not a stale copy** — genuinely different content, same naming convention. It cannot express the shared system's later additions (composite type tier, `dark/well…raised5` elevation ramp, `divider/*`, `text/tertiary`, `shadow`, `size/icon/*`).
- It also declares five font families (`serif-display`, `sans-reading`, `condensed`, `serif-text`, `mono`) with **no `@font-face` and no webfont link** — all five silently fall back to system fonts.
- `clients` links `tokens.css` **twice** (once `media="print"`, once unconditioned) — a FOUC guard, worth confirming it's deliberate.
- `clients` carries by far the most hardcoded values (~50 hex including `#226244`, `#ebe7e4`, `#fbff00`, `#1a1815`, `#0f0f0f`, `#da5c4d`, `#c8281c` — several of which *are* token values, typed by hand).
- `clients` references `--status-error-ink` while defining only `--status-error`. Probably dangling; **not conclusively verified**.
- `brand` hosts the shared file but doesn't link it, and its bundle defines zero custom properties while consuming `--sc-*` throughout. Presumably runtime-injected by its JS bundle — **unverified**, the bundle was unreadable. Per learning #34 the brand site is meant to be the canonical source; it is currently the least verifiable of the three.

---

## 6. Theming recommendation — needs your decision

You asked me to recommend rather than assume. Here it is.

**What exists:** `Semantic` has exactly two modes, `Light` and `Dark`. There is no per-site theming of any kind — yet the file's own page structure already separates `— BRAND SITE —`, `— AGENCY SITE —`, `— CLIENT PORTAL —`.

**What actually differs between the three sites** (from §5, not from assumption): the brand hue (red vs teal), a handful of extra display font families on the studio site, and portal-specific layout variables on `clients`. That is a *small* divergence surface — roughly a dozen tokens, not a theme.

**Recommendation: a third collection, not more modes on `Semantic`.**

```
Primitives   modes: [Value]                     — all raw ramps (warmGray, teal, shu, dark, status)
Brand        modes: [Studio | Clients | Docs]   — ~12 aliases: brand ramp 50–900, font families
Semantic     modes: [Light | Dark]              — 83 aliases, pointing at Brand + Primitives
```

Why this and not per-site modes on `Semantic`: adding three site modes to a collection that already has Light/Dark forces **every one of the 83 semantic tokens to carry six values**, of which ~71 would be identical across all three sites. That is 500 values to maintain to express a dozen real differences, and every one is a place for drift. Isolating the divergence in its own thin collection means a site switches brand by setting **one mode on one collection**, and Light/Dark stays orthogonal.

**Constraint you need to check before committing:** you are on a Figma **Professional** plan (confirmed: team "Studio", tier `pro`, Full seat). Professional caps modes per collection — 4 at time of writing. A 3-mode `Brand` collection fits with one to spare; a 6-mode `Semantic` would not. **Verify the current cap in your plan's billing page before the sprint starts** — if it has changed, this recommendation still holds but the margin does not.

**The prerequisite question, which is yours alone:** *is the studio site's red the brand, or is teal the brand?* Everything above assumes you'll answer it. If red wins, `color/teal/*` gets demoted to a `Clients`/`Docs` accent and the whole semantic accent chain repoints. If teal wins, `shokunincrafthouse.com` needs a re-skin. Either way it is a Gate-1 brand decision, it needs an ADR, and **no token work should start before it is logged.**

---

## 7. Ranked fix backlog

Dependency-ordered. Each block should be its own commit; blocks marked ⛔ gate everything below them.

### Block 0 — Decisions and verification (no code)
| # | Item | Type |
|---|---|---|
| 0.1 | ⛔ **Verify `brand.shokunincrafthouse.com/tokens.css` on the bare URL.** If it 404s, `clients` is loading zero shared tokens in production → promotes to P0. | Verify (10 min) |
| 0.2 | ⛔ **Decide the brand hue: `shu` red or `teal`.** Log as ADR. Blocks all colour work. | Gate 1 — Levi |
| 0.3 | ⛔ **Approve the theming architecture** (§6) and confirm the Professional mode cap. Log as ADR. | Gate 1 — Levi |
| 0.4 | Decide `space/micro/*`: widen the 4pt rule or retire the tier. Log as ADR. | Gate 1 — Levi |
| 0.5 | Confirm the `clients` double `tokens.css` link is a deliberate FOUC guard. | Verify |
| 0.6 | Confirm whether `--status-error-ink` on `clients` is genuinely dangling. | Verify |
| 0.7 | Confirm how `brand` obtains its token definitions (JS bundle unreadable). | Verify |

### Block 1 — Publish blockers (Figma)
| # | Item | Fixes |
|---|---|---|
| 1.1 | Move `_Archive` to a separate `SCDS Archive` file. Do not delete. | P0-2 |
| 1.2 | Rebind `font/family/*` from Trial → Neue Haas Grotesk **Pro**; resolve the `sans`/`display` duplicate value. | P0-3 |
| ~~1.3~~ | ~~Fix `color/status/error/dark`~~ — ✅ **DONE 2026-07-25**, `#732020` → `#dd4c4c` (4.76:1). Code sync outstanding, see 8.8. | P0-4 |
| 1.4 | Add `@font-face` to `brand.shokunincrafthouse.com`. | P0-3 |

### Block 2 — Colour correctness (Figma) — *needs 0.2*
| # | Item | Fixes |
|---|---|---|
| 2.1 | Add the `-ink` tier (learning #56) for `status/{success,warning,error,info}` + `interactive/hover`. Base hues stay for fills/borders/dots. | P1-1 |
| 2.2 | Resolve `text/onAccent`: retire `brand/accent` as a fill surface or repoint per surface. | P1-1 |
| 2.3 | Swap `border/subtle` ↔ `border/default` light-mode aliases. | P1-2 |
| 2.4 | Re-alias `color/divider/{subtle,default,strong}` to real primitives with genuine hierarchy; delete the raw values. | P1-3 |
| 2.5 | Repoint `color/border/focus` → `color/focusRing/*`; re-tone `#1f2024` warm. | P2-10 |
| 2.6 | Rebuild the `warmGray` 200–400 span; collapse `dark/*` into the warm ramp per learning #11; remove `dark/border`≡`raised4` and `dark/borderSubtle`≡`raised2` duplicates. | P2-8, P2-9 |
| 2.7 | Correct learning #67's recorded ratio from ~3.8 to 3.23. | P1-1 |

### Block 3 — Typography (Figma) — *needs 1.2*
| # | Item | Fixes |
|---|---|---|
| 3.1 | Bind `lineHeight` + `letterSpacing` to variables across all 26 text styles. | P2-1 |
| 3.2 | Give the three `*/light` styles an actual light weight, or delete them. | P2-2 |
| 3.3 | Fix `nav/header` + `nav/node`: bind `fontSize`, replace `lineHeight: AUTO`. | P2-1 |
| 3.4 | Tune tracking on `display/sm`, `display/lg`, `display/xl`. | P2-3 |
| 3.5 | Merge or rename `display/xsm-32` vs `title/section`. | P2-3 |
| 3.6 | Declare the type-scale ratio, or log an ADR accepting a hybrid scale. Sizes 11→120 currently span ratios 1.077–1.428 with no single ratio held. | Studio §3 |

### Block 4 — Components (Figma)
| # | Item | Fixes |
|---|---|---|
| 4.1 | Normalise `state` → `State` and capitalise all values on `Badge`, `Pulse`, `NavLink`, `Pill`. | P2-4 |
| 4.2 | Bring `Toggle`, `Stepper`, `NavItem` to the five-state rule. | P2-4 |
| 4.3 | Re-model `Tab` with a separate `Selected` boolean (match `Segment`). | P2-4 |
| 4.4 | Align field vocabulary: `SearchInput` `Filled`→`Active`, consistent state ordering. | P2-4 |
| 4.5 | Bind ~85 corner radii and ~98 padding/gap values. | P2-6 |
| 4.6 | Apply text styles to the 25 unstyled text nodes. | P2-6 |
| 4.7 | Consolidate `Badge`/`StatusPill`/`Pill` into one component with one status vocabulary. | P2-12 |
| 4.8 | Rebuild `Mark` as a single `Type × Theme` variant set; resolve `Mark` vs `Logo`. | P2-13 |
| 4.9 | Move `Progress`'s `BarActive` off the `Variant` axis. | P2-4 |
| 4.10 | Write descriptions for all 23 sets/components. | P2-5 |

### Block 5 — Foundations (Figma)
| # | Item | Fixes |
|---|---|---|
| 5.1 | Fill `Principles`, `Color`, `Type`, `Space`, `Motion`. | P2-14 |
| 5.2 | Add grid styles for 390 / 768 / 1024 / 1440 / 1920. | P2-15 |
| 5.3 | Bind effect-style shadows to variables; reconcile `shadow/raised` ↔ `shadow/control/raised`. | P2-16 |
| 5.4 | Add `color/inkRgb` + `color/whiteRgb` as STRING primitives. | §4(c) |
| 5.5 | Normalise naming: `text-on-inverse`→`text/onInverse`, `surface-inverse`→`surface/inverse`, pick camelCase or kebab and hold it. | P2-11 |
| 5.6 | Fix `motion/press/release-duration` ↔ `release/duration`. | P2-11 |

### Block 6 — Theming (Figma) — *needs 0.2, 0.3*
| # | Item |
|---|---|
| 6.1 | Create the `Brand` collection with `Studio`/`Clients`/`Docs` modes. |
| 6.2 | Move the brand ramp + font families into it. |
| 6.3 | Repoint `Semantic`'s brand-dependent aliases at `Brand`. |

### Block 7 — Publish
| # | Item |
|---|---|
| 7.1 | ⛔ **Publish SCDS as a library.** Everything above lands first. |
| 7.2 | Record the published library key; add SCDS to each consumer file. |

### Block 8 — Code sync (repo + sites) — *needs 7.1*
| # | Item | Fixes |
|---|---|---|
| 8.1 | Teach the generator the `font/text/*` ↔ Text Style mapping; export the 11 Figma-only text styles. | §4(b) |
| 8.2 | Add `--sc-p-font-size-offscale-18` — or fix `.nav__brand` to use the emitted name. | P1-4 |
| 8.3 | Retire `shokunincrafthouse.com`'s forked `tokens.css`; consume the shared host. | §5 |
| 8.4 | Add `@font-face` for the studio site's 5 undeclared families, or delete those tokens. | §5 |
| 8.5 | Replace ~50 hardcoded hex + ~80 px on `clients` with tokens. | §5 |
| 8.6 | Document `motion/easing/*` as a permanent code-only tier; log an ADR. | §4(a) |
| 8.7 | Re-run `sc-content-sync` and update `LEARNINGS.md` (#67 ratio, new SCDS learnings). | — |
| 8.8 | ⚠️ **Propagate `color/status/error/dark` `#732020`→`#dd4c4c` to `tokens/primitives.json`.** Figma is fixed; code is not. Until this lands, `clients` still renders error at 1.79:1 in dark mode. Can be pulled forward ahead of Block 7 — it is a one-value change with no dependency on publish. | P0-4 |

---

## 8. Node-ID reference

Deep links: `https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/?node-id=<id with ':' → '-'>`

| Page | ID | Component sets / components | ID |
|---|---|---|---|
| Mark | `18:7` | Mark `9:343` · Logo `54:192` · MarkCompact-Dark `9:1530` · MarkCompact-Light `9:1517` · MarkIcon-Dark `9:1479` · MarkIcon-Light `9:1467` · MarkIcon-Filled `9:1555` · MarkIcon-Accent `9:1543` · MarkPrimary-Dark `9:1504` · MarkPrimary-Light `9:1491` | *(P2-13)* |
| Button | `24:3` | Button `9:438` · IconButton `9:977` | |
| Field | `24:4` | TextField `9:487` · SearchInput `9:935` · Select `9:863` · FileUpload `9:715` · Textarea `9:603` | |
| Badge | `24:5` | Badge `9:404` · StatusPill `9:767` · Pill `140:2176` | *(P2-12)* |
| Toggle | `24:6` | Toggle `9:858` | *(P2-4)* |
| Toast | `24:7` | Toast `9:897` | |
| Pulse | `24:8` | Pulse `9:389` | *(P2-4)* |
| SegmentedControl | `85:2` | SegmentedControl `85:3` · Segment `137:35` | |
| Stepper | `139:5` | Stepper `139:51` | *(P2-4)* |
| Progress | `139:52` | Progress `140:26` | *(P2-4)* |
| Navigation | `29:1905` | NavLink `9:396` | *(P2-4)* |
| Tab | `29:2081` | Tab `9:3547` | *(P2-4)* |
| Link | `29:2082` | Link `9:3590` | |
| Nav (portal) | `29:2096` | NavItem `9:1071` | *(P2-4)* |

Empty foundations pages *(P2-14)*: Principles `18:3` · Color `18:4` · Type `18:5` · Space `18:6` · Motion `18:8`
Archive to relocate *(P0-2)*: `_Archive` `1:7`
Variable collections: Primitives `VariableCollectionId:2:2` (mode `Value` `2:0`) · Semantic `VariableCollectionId:4:2` (modes `Light` `4:0`, `Dark` `4:1`)

---

## 9. Method and confidence

**How this was produced.** Figma read directly through the Plugin API (`use_figma`) — all 44 pages enumerated, all 207 variables dumped with resolved values, all 26 text styles and 2 effect styles read with their binding state, and every component subtree on all 31 non-archive component pages walked node-by-node for unbound properties. Contrast ratios computed from the actual token hex values using the WCAG 2.x relative-luminance formula. Repo tokens diffed as exact set operations against the Figma name lists, not eyeballed. Live sites fetched and their stylesheets parsed.

**High confidence** — anything with a number attached: variable and style counts, the contrast table, the 27/22 token diff, the unbound-property counts, the variant property listings, the absence of component descriptions, the trial font names.

**Explicitly unverified — do not put these in a contract without checking first:**
1. Whether `brand.../tokens.css` genuinely 404s on the bare URL (0.1). Most likely a fetch-cache artifact; consequences are severe if not.
2. How the `brand` SPA obtains its token definitions — its JS bundle could not be read.
3. Whether `--status-error-ink` on `clients` is truly dangling.
4. The exact property membership of the shared file's `[data-theme="dark"]` block.
5. The current Figma Professional mode-per-collection cap.

**One thing worth saying plainly:** the colour *binding* discipline in this file is genuinely good — zero unbound fills and zero unbound strokes across ~1,400 nodes in 31 pages of components is not common, and it means the hard part is already done. The defects above are concentrated in geometry, typography plumbing, state modelling, and the last mile of publishing. This is a system that got 80% built correctly and then stopped short of the finish line, not one that needs rebuilding.
