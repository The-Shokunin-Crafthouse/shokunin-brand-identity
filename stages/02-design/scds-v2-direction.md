# SCDS-01 — v2 Redesign Direction (Levi, 2026-06-21)

Captured from this session. Settled items become ADRs in `decisions/decisions.md` via the CC prompt; two forks are open pending Levi. Items marked **→ studio-wide** are candidates to propagate to `studio-memory` (slop-blocklist / creative-defaults) via `sc-content-sync`, not just this repo.

## Settled decisions

1. **Elevation model → fill, no shadow, no lift.** Components differentiate from the page by **fill value only**: lighter than page in light mode, darker than page in dark mode. No box-shadow for resting elevation (inset box-shadow remains allowed for hover/focus rings — functional, blocklist-exempt). Replaces the current "ground-shift + 1px structural frame" model and removes the outline-stroke slop match.
   - Light: page `warmGray.100` → components `warmGray.50/25` (lighter). Already have `surface-raised = warmGray.50`.
   - Dark: **OPEN — see Fork A** (page is already on the floor `#0D0C0B`).

2. **No eyebrows. Ever.** Remove the `01 FOUNDATIONS / COLOR` and `I · THE ROOM` eyebrow labels across every section. Kills the blocklist "spec-page editorial: eyebrow / oversized headline / gray body" match. **→ studio-wide** (add "eyebrow kicker labels" to slop-blocklist).

3. **No dots before status pills.** Drop the leading colored dot on pills/section markers. A pill carries **an icon or no icon — never a decorative dot.** **→ studio-wide.**

4. **Phosphor is the default icon set.** Default weight **regular**; **bold** and **fill** weights available for emphasis/active states. (Not currently a dep — add `@phosphor-icons/react`.) **→ studio-wide** (set Phosphor as studio default icon family in stack).

5. **Motion vocabulary lift — flagship surface must be alive.** Per `creative-defaults.md`: GSAP + Three.js are first-class; ambient motion at rest is the baseline; a fully static flagship is a logged decision. The site is static today (predates the 2026-06-11 rule). Reskin adds: scroll-driven scenes (GSAP), ambient "default-is-alive" motion, and WebGL atmosphere (Three.js/R3F) where it earns its place. Also retune motion tokens to core spec (120/220/450ms; >600 needs written justification) and resolve springs-vs-curves.

6. **Divider hierarchy.** Dividers get a **color scale** (e.g. `divider-subtle / divider-default / divider-strong`) so weight communicates hierarchy. Today there is a single `border-default` rule color. (Dividers are content separators, not element edges — not an outline-stroke violation.)

7. **Site reskin is IN**, including a new navigation (see #8). The token system stays; this is the microsite's art direction + nav.

8. **Navigation + scroll paradigm → segmented chapters, not a long page.** (Refs: Levi's Frame 5/6 + Haulix.)
   - **Floating left icon rail** — slim, detached from edges, persists across sections; active item filled (black) vs outline at rest. Top-left lockup (mark + "Shokunin Crafthouse").
   - **Full-viewport chapters** — content is broken into segments (Type / Space / Color / Motion / Mark …) that **animate vertically over ONE shared page background**. No visual card chrome — the "card" feeling comes from motion + full-bleed segmentation, not borders/fills. Each chapter is entered and exited (Rally: "scenes, never scrolled past"), not a continuous marketing scroll.
   - **Transition** — progressive blur + depth between chapters (Apple interactions overlay: continuity, blur-to-manage-attention), GSAP-driven. Pairs with the "default is alive" ambient-motion baseline.
   - Replaces the current flush left sidebar + long single-scroll spec page (which is itself a killed slop pattern).

9. **Hover states (Levi refs).**
   - **Type / chapter-list hover** (ref: PP Neue Montreal navigation) — vertical type-set list (chapter names); hovering an item steps it forward (slide-right + weight to Black + vermilion), siblings dim/recede. Attention reflows to the hovered entry. Pairs with the black-weight headers.
   - **Internal-page / nav hover** (ref: Studio Namma menu) — hovering a nav/section label floats a small media-thumbnail **preview of the destination** beside the cursor, with a small accent cursor-dot. Hover reveals a peek, not just a color change (kills the slop "hover = opacity only").
   - Both sit on the off-white light ground + black display type + single vermilion — the Namma/PP Neue Montreal register is already aligned with SCDS v2.

## Open forks (need Levi)

**Fork A — RESOLVED into a full dark-palette overhaul.** Levi: the warm/brown dark theme is out; wants a modern studio dark, referencing Rally Interactive (canonical default PRIMARY) + others.

### Research (sampled live, 2026-06-21)
- **Rally Interactive** — ink `#1B1B1B` (neutral charcoal, not warm), single amber accent `#F3A748`. Register: alive/immersive (matches `reference-studios.md` Rally moves).
- **Linear** (named studio; benchmark modern product dark) — full ladder, live-extracted:
  - ground `#08090a` · levels `#0f1011 / #141516 / #191a1b` · secondary/tertiary/quaternary `#1c1c1f / #232326 / #28282c`
  - text `#f7f8f8 / #d0d6e0 / #8a8f98` · borders `#23252a / #34343a` · translucent border `#ffffff0d`
  - **Key tells:** ground is neutral with a *faint cool* cast (blue ≥ red); borders are translucent white, not solid hex.

### REVISED per Levi — no cool cast. Dark = TRUE NEUTRAL; light = warm but heavily desaturated.
Rationale: desaturated/neutral grounds let the vermilion read as luxurious/respectable, not loud. References: Coinstax + crypto-app mocks — pure neutral charcoal grounds, single bright accent, heavy display headlines (Levi uses shu where they use lime).

**Dark — true neutral (equal RGB) ladder, floor→raised:**
`#0A0A0A · #0F0F0F · #141414 · #1A1A1A · #212121 · #2A2A2A · #333333`
- Text: primary `#F5F5F5` · secondary `#B9B9B7` · tertiary `#7C7C7A` · disabled `#565654`
- Dividers (white-alpha): subtle `rgba(255,255,255,.05)` · default `.09` · strong `.15`

**Light — warm hue 30°, saturation ~3, off-white (Levi's HSB spec):**
- page = **HSB(30,3,92) ≈ `#EBE7E4`** · component (lighter) ≈ `#F4F1ED` · raised/floating ≈ `#FBF9F6`
- ink stays warm near-black (`#1A1815`); dividers as dark-alpha: `.06 / .10 / .16`

**Brand accent unchanged:** shu `#C8281C / #DA5C4D`. **Focus ring:** dedicated AA token, off-brand (`focus-ring-token`) — TBD.

### Elevation assignment — LOCKED (Levi, this session)
- **Dark:** page `#0F0F0F` · component `#080807` (sunk, darker than page) · **hover = page `#0F0F0F`** (component rises flush on hover). Fill-only, no border, no shadow.
  - ⚠ Rest-state page↔component contrast is ~1.05:1 (very subtle by design); hover carries the separation. Verify it reads on Levi's display (compounds with the P3 near-black caveat).
  - Note `#080807` carries a 1-pt warm bias (R=G>B) — incidentally hedges the P3 drift.
- **Light:** page `#EBE7E4` · component `#F4F1ED` (lighter) · raised/floating `#FBF9F6`.

### ⚠ P3 near-black caveat (`p3-near-black-drift-chrome`)
Pure-neutral near-blacks are exactly the values that drift (often green) on wide-gamut Chrome — the reason the old base was warm. Verify the dark ground on Levi's P3 display; may need a +1 red whisper at the darkest steps to *read* neutral. Never approve dark on an sRGB-only display.

**Studio-wide implication:** overrides `creative-defaults.md` "warm-ground palette over neutral gray." Needs override-with-reason + `sc-content-sync` propagation.

## Typography update (Levi, this session)
- **Neue Haas Grotesk Display used in more places** — extend Display beyond the top headline to subheads/section heads.
- **Title/header weights: thin → BLACK** (the 95 Black face, ~900). Heavy headlines, matching the reference mocks.
- **Body stays Neue Haas Grotesk Text Regular (400).**
- **Cascadia Mono cut to ~10%** — reserve for genuine code/data only (hex values, token names), not chrome labels/eyebrows (eyebrows are being removed anyway).

**Fork B — video (mostly resolved).** Source = **Pexels** (free stock video). Aspect ratio = a 70mm cinematic ratio:
- **2.76:1 (recommended)** — Ultra Panavision 70, the *widest* common movie ratio; matches Levi's "widest common" phrasing. Implies full-bleed cinematic showcase bands.
- **2.20:1** — standard 70mm roadshow (Todd-AO), if that's the intended look.
- *Confirm which.* Role assumed: cinematic showcase / ambient wide bands (the ultra-wide crop suits banners, not square demos).

## Sequencing (3 tracks, deliberately separate)
1. **Design-language compliance** (elevation, eyebrows, pills, dividers, icons, motion retune) — changes visual language → ADR + sign-off.
2. **Site reskin** (nav floating-frame, GSAP/Three.js/ambient motion, video) — art direction.
3. **Gate-3 hardening** (`retroactive-gate3-six-movements`) — runs *after* language settles; it preserves visual language so it can't carry tracks 1–2.

## Next step
On Fork A + Fork B answers: read `WORKSPACE.md` + full `decisions/decisions.md`, then produce the scoped Claude Code prompt with matching superseding ADR entries and the `sc-content-sync` items flagged for studio-wide propagation.
