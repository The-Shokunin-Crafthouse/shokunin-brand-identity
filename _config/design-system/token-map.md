# Design Token Map — The Shokunin Crafthouse · Brand Identity
# Source: Figma Variables collections (Primitives + Semantic) on the Brand System page
# Last synced: 2026-05-26 (drift re-sync · breakpoints added)
# Synced by: sync-figma-token skill (workflow/sync-figma-token.md)

> **CSS var namespacing:** primitives → `--sc-p-*` · semantic → `--sc-*` · component code references `--sc-*` only, never `--sc-p-*`.

---

## Sync notes (skill deviation flagged)

The canonical skill targets **Color / Text / Spacing Styles on the Sandbox page**. This file does not use legacy Figma Styles — the entire token system is captured as **Variables** in two collections (`Primitives`, `Semantic`) browsable from the Brand System page (node `1:4`). The Sandbox page contains no token data.

Read targets adapted accordingly:
- **Primitives** collection · 100 variables · 1 mode (`Value`)
- **Semantic** collection · 23 variables · 2 modes (`Light` + `Dark`)
- **Breakpoints** collection · 4 variables · 1 mode (`Value`) · added 2026-05-26
- **Effect Styles** · 3 (`elevation/1`, `elevation/2`, `elevation/3`) — shadows cannot be variables in Figma

Names below match Figma variable names exactly (slash notation). CSS variable form lives in the `Code syntax` field per token in Figma; mirrored values exported to `tokens/primitives.json` + `tokens/semantic.json` (W3C DTCG format) where the CSS names live as `$extensions`.

This is a **clean first extraction** — the prior `_config/design-system/token-map.md` was an unpopulated scaffold (all cells empty). Drift detection skipped per skill invocation. Scaffold sections that don't yet map to Figma data are marked `MISSING — verify in Figma`.

---

## Color Tokens · Primitives (single mode)

Raw color values. Semantic tokens below alias these — designers and developers should not reach for primitives directly. Surfaced here for traceability.

### color/warmGray · single warm hue ladder · 12 steps

| Token Name | Hex | Opacity | Notes |
|---|---|---|---|
| `color/warmGray/50` | `#F1EFEB` | 100% | Lightest cream · derived 50% toward white from step 100. |
| `color/warmGray/100` | `#E3DFD8` | 100% | Oatmeal page ground · anchor from HTML --bg. |
| `color/warmGray/200` | `#D9D5CE` | 100% | Set-in component surface · anchor from HTML --surface. |
| `color/warmGray/250` | `#D5D1CA` | 100% | Default hairline rule · anchor from HTML --hairline. |
| `color/warmGray/300` | `#CDC9C2` | 100% | Sunk surface · anchor from HTML --surface-deep. |
| `color/warmGray/350` | `#C5C0B8` | 100% | Subtle hairline · anchor from HTML --hairline-2. |
| `color/warmGray/400` | `#9A9388` | 100% | Faint warm gray · anchor from HTML --ink-faint. Fails AA by spec (disabled use). |
| `color/warmGray/500` | `#5F5C55` | 100% | Muted warm gray · anchor from HTML --ink-muted. |
| `color/warmGray/600` | `#484640` | 100% | Mid-deep · derived between 500 and 800. |
| `color/warmGray/700` | `#312F2A` | 100% | Near-ink · derived between 500 and 800. |
| `color/warmGray/800` | `#1A1815` | 100% | Ink · anchor from HTML --ink. |
| `color/warmGray/900` | `#0D0C0B` | 100% | Bar deep · anchor from HTML --bg-deep. |

### color/shu · vermilion 朱 · single chromatic accent · 10 steps

| Token Name | Hex | Opacity | Notes |
|---|---|---|---|
| `color/shu/50` | `#FCEFEC` | 100% | Lightest vermilion wash · derived. |
| `color/shu/100` | `#F7D9D4` | 100% | Pale vermilion · derived. |
| `color/shu/200` | `#F0B5AC` | 100% | Light vermilion · derived. |
| `color/shu/300` | `#E68B7F` | 100% | Mid-light · derived. Used in dark-mode interactive states. |
| `color/shu/400` | `#DA5C4D` | 100% | Mid vermilion · derived. Dark-mode hover/active. |
| `color/shu/500` | `#C8281C` | 100% | Vermilion · 朱 · anchor from HTML --shu. The chromatic accent. |
| `color/shu/600` | `#B22318` | 100% | Mid-deep · derived between 500 and 700. |
| `color/shu/700` | `#9E1F15` | 100% | Deep vermilion · anchor from HTML --shu-deep. AA-passing accent text on light. |
| `color/shu/800` | `#771A11` | 100% | Deeper vermilion · derived. |
| `color/shu/900` | `#4F100B` | 100% | Darkest vermilion · derived. Reserved. |

### color/status · semantic states · light + dark variants

| Token Name | Hex | Opacity | Notes |
|---|---|---|---|
| `color/status/success/light` | `#4F5C2A` | 100% | Warm olive · AA on warmGray.100 (~4.7:1). |
| `color/status/success/dark` | `#A8BE6E` | 100% | Lifted olive · dark-mode success. |
| `color/status/warning/light` | `#8A5E10` | 100% | Deep ochre · AA on warmGray.100 (~4.5:1). |
| `color/status/warning/dark` | `#D9B265` | 100% | Lifted ochre · dark-mode warning. |
| `color/status/info/light` | `#3B5C7A` | 100% | Warm slate · AA on warmGray.100 (~5.1:1). |
| `color/status/info/dark` | `#8FB1D0` | 100% | Lifted slate · dark-mode info. |

### color/dark · dark-mode-only anchors · from site canonical

These primitives are mode-specific values aliased by semantic dark-mode resolutions. Not for direct use.

| Token Name | Hex | Opacity | Notes |
|---|---|---|---|
| `color/dark/surfacePage` | `#0D0C0B` | 100% | Dark-mode page ground · from site --ground. |
| `color/dark/surfaceSunk` | `#181512` | 100% | Dark-mode set-in surface · from site --tile-filled. |
| `color/dark/surfaceDeepSunk` | `#221F1B` | 100% | Dark-mode deeper surface · derived. |
| `color/dark/border` | `#201E1A` | 100% | Dark-mode hairline · from site --border. |
| `color/dark/borderSubtle` | `#2F2B26` | 100% | Dark-mode subtle hairline · derived. |
| `color/dark/textPrimary` | `#E2DDD6` | 100% | Dark-mode primary text · from site --text-primary. |
| `color/dark/textDisabled` | `#6B655C` | 100% | Dark-mode disabled · derived. Fails AA by spec. |

### color/utility · base hexes

| Token Name | Hex | Opacity | Notes |
|---|---|---|---|
| `color/utility/white` | `#FFFFFF` | 100% | Pure white · utility primitive. Used by text-on-accent. |
| `color/utility/black` | `#000000` | 100% | Pure black · reserved for shadow alpha bases. |

---

## Color Tokens · Semantic (light + dark modes)

Every value below is an alias to a primitive. No raw hex appears in this layer.

### color/surface · backgrounds

| Token Name | Light alias | Light hex | Dark alias | Dark hex | Notes |
|---|---|---|---|---|---|
| `color/surface/page` | `color/warmGray/100` | `#E3DFD8` | `color/dark/surfacePage` | `#0D0C0B` | Page ground · foundation surface. |
| `color/surface/sunk` | `color/warmGray/200` | `#D9D5CE` | `color/dark/surfaceSunk` | `#181512` | Set-in component surface · cards, frames. Role-named for light; perceptual direction inverts in dark. |
| `color/surface/deepSunk` | `color/warmGray/300` | `#CDC9C2` | `color/dark/surfaceDeepSunk` | `#221F1B` | Deeper-step surface · form inputs, card hover, nested states. |

### color/text · foreground

| Token Name | Light alias | Light hex | Dark alias | Dark hex | Notes |
|---|---|---|---|---|---|
| `color/text/primary` | `color/warmGray/800` | `#1A1815` | `color/dark/textPrimary` | `#E2DDD6` | Body, headlines, strong rules. AAA on every surface. |
| `color/text/secondary` | `color/warmGray/500` | `#5F5C55` | `color/warmGray/400` | `#9A9388` | Secondary copy. **RESTRICTION: must not render on `color/surface/deepSunk` in light mode (4.04:1 fails AA). Use `color/text/primary` on deepest light surface.** Dark mode passes AA on all surfaces. |
| `color/text/disabled` | `color/warmGray/400` | `#9A9388` | `color/dark/textDisabled` | `#6B655C` | Disabled / placeholder. Documented exception: fails AA by spec. |
| `color/text/onAccent` | `color/utility/white` | `#FFFFFF` | `color/utility/white` | `#FFFFFF` | Text on shu/brand fills. |

### color/border · strokes

| Token Name | Light alias | Light hex | Dark alias | Dark hex | Notes |
|---|---|---|---|---|---|
| `color/border/default` | `color/warmGray/250` | `#D5D1CA` | `color/dark/border` | `#201E1A` | Default 1px solid hairline · structural dividers. |
| `color/border/subtle` | `color/warmGray/350` | `#C5C0B8` | `color/dark/borderSubtle` | `#2F2B26` | Dashed inner divisions · secondary structural rules. |
| `color/border/strong` | `color/warmGray/800` | `#1A1815` | `color/warmGray/50` | `#F1EFEB` | Strong frame border · title block, masthead. |
| `color/border/focus` | `color/shu/500` | `#C8281C` | `color/shu/400` | `#DA5C4D` | Focus ring · lifted to shu/400 in dark for visibility. |

### color/interactive · element states

| Token Name | Light alias | Light hex | Dark alias | Dark hex | Notes |
|---|---|---|---|---|---|
| `color/interactive/default` | `color/warmGray/800` | `#1A1815` | `color/warmGray/50` | `#F1EFEB` | Resting state · button text + border. |
| `color/interactive/hover` | `color/shu/500` | `#C8281C` | `color/shu/400` | `#DA5C4D` | Hover · text/icon/border turn shu. AA exception at 11px (3.8:1) — documented brand-signal use. |
| `color/interactive/active` | `color/shu/700` | `#9E1F15` | `color/shu/500` | `#C8281C` | Pressed · one step deeper than hover. Paired with motion.scale.pressButton (0.985). |

### color/status · semantic signaling

| Token Name | Light alias | Light hex | Dark alias | Dark hex | Notes |
|---|---|---|---|---|---|
| `color/status/success` | `color/status/success/light` | `#4F5C2A` | `color/status/success/dark` | `#A8BE6E` | AA on respective grounds. |
| `color/status/warning` | `color/status/warning/light` | `#8A5E10` | `color/status/warning/dark` | `#D9B265` | AA on respective grounds. |
| `color/status/error` | `color/shu/500` | `#C8281C` | `color/shu/400` | `#DA5C4D` | Error shares the brand chromatic signal. |
| `color/status/info` | `color/status/info/light` | `#3B5C7A` | `color/status/info/dark` | `#8FB1D0` | AA on respective grounds. |

### color/brand · brand-mark accents

| Token Name | Light alias | Light hex | Dark alias | Dark hex | Notes |
|---|---|---|---|---|---|
| `color/brand/accent` | `color/shu/500` | `#C8281C` | `color/shu/500` | `#C8281C` | Mark continuity · same value in both modes. |
| `color/brand/accentDeep` | `color/shu/700` | `#9E1F15` | `color/shu/700` | `#9E1F15` | Pressed accent · AA-passing accent text on light (5.3:1). |

---

## Typography Tokens

Type primitives map to family / size / weight / line height / tracking. Composition tokens (`text.display.lg`, `text.body.md`, etc.) do not yet exist as Figma variables — Sprint 2 work.

- **Modular ratio:** 1.25
- **Base size:** 16px

### font/family

| Token Name | Value | Notes |
|---|---|---|
| `font/family/sans` | `Neue Haas Grotesk Display Pro` (fallback: Neue Haas Grotesk Text Pro → Helvetica Neue → Inter → system-ui → sans-serif) | Primary display + body. Self-host woff2 from `/fonts/` when available; falls back via stack until then. |
| `font/family/mono` | `Cascadia Mono` (fallback: Cascadia Code → ui-monospace → SF Mono → Menlo → monospace) | Chrome + code. Google Fonts CDN. See `decisions/decisions.md` 2026-05-26 (mono evaluation closed). |

**Loading**
- `font-display: optional` for self-hosted NHG (avoids late-render flash; falls back if not cached in first ~100ms)
- `font-display: swap` for Cascadia Mono via Google Fonts
- Self-hosted faces subset to Latin + common punctuation
- Variable axes preferred where available (NHG via Monotype; Cascadia Mono variable wght 200–700)

### font/size · 12 steps · modular ratio 1.25

| Token Name | Value | Notes |
|---|---|---|
| `font/size/11` | 11px | Eyebrows, badges, buttons. |
| `font/size/12` | 12px | UI labels. |
| `font/size/13` | 13px | Captions, muted secondary. |
| `font/size/14` | 14px | Secondary body. |
| `font/size/16` | 16px | Body default. |
| `font/size/20` | 20px | |
| `font/size/24` | 24px | Card titles. |
| `font/size/32` | 32px | Section titles. |
| `font/size/44` | 44px | Premise statements. |
| `font/size/60` | 60px | Mid display. |
| `font/size/84` | 84px | Large display. |
| `font/size/120` | 120px | Maximum display. |

### font/weight

| Token Name | Value | Notes |
|---|---|---|
| `font/weight/light` | 300 | Display weight. |
| `font/weight/regular` | 400 | Body default. |
| `font/weight/medium` | 500 | UI labels, button text, eyebrows. |
| `font/weight/semibold` | 600 | Mono chrome labels (mono/11) + secondary-button hover bump. Widened 2026-05-28. |

### font/lineHeight · unitless multiplier

| Token Name | Value | Notes |
|---|---|---|
| `font/lineHeight/flat` | 1.0 | 120px display. |
| `font/lineHeight/tight` | 1.1 | 44–84px display. |
| `font/lineHeight/snug` | 1.2 | 24–32px headlines. |
| `font/lineHeight/base` | 1.5 | Body + UI default. |
| `font/lineHeight/relaxed` | 1.55 | Long-read prose, captions. |

### font/tracking · em

| Token Name | Value | Notes |
|---|---|---|
| `font/tracking/tightest` | -0.04em | 84/120px display. |
| `font/tracking/tighter` | -0.025em | 60px display. |
| `font/tracking/tight` | -0.018em | Section titles 32px. |
| `font/tracking/snug` | -0.012em | Card titles 24px. |
| `font/tracking/normal` | 0 | Body default. |
| `font/tracking/wide` | 0.04em | UI labels 12px. |
| `font/tracking/wider` | 0.06em | Mono caps 11px. |
| `font/tracking/widest` | 0.08em | Eyebrows, buttons, badges. |
| `font/tracking/caps` | 0.10em | Small caps treatment. |

### font/text · composition tokens · one per scale step · Sprint 2

Composed `typography` tokens that resolve family + size + weight + lineHeight + tracking together. Surfaces SHOULD reach for these instead of the underlying axes; override one axis only when deliberate (e.g. set a 32px headline in mono). Full weight rationale + screen optical compensation in `_config/design-system/type-system.md`.

| Token Name | Family | Size | Weight | Line-height | Tracking | Use case |
|---|---|---|---|---|---|---|
| `font/text/11`  | sans | 11  | 500 | 1.5  | 0.08em   | Eyebrows, badges, button labels. |
| `font/text/12`  | sans | 12  | 500 | 1.5  | 0.04em   | UI labels, dense table headers. |
| `font/text/13`  | sans | 13  | 400 | 1.55 | 0        | Captions, muted secondary copy. |
| `font/text/14`  | sans | 14  | 400 | 1.5  | 0        | Secondary body, helper text. |
| `font/text/16`  | sans | 16  | 400 | 1.5  | 0        | Body default · anchor of system. |
| `font/text/20`  | sans | 20  | 400 | 1.55 | 0        | Lead paragraph, intro body. |
| `font/text/24`  | sans | 24  | 500 | 1.2  | -0.012em | Card titles, mid-headlines. |
| `font/text/32`  | sans | 32  | 500 | 1.2  | -0.018em | Section titles, page headers. |
| `font/text/44`  | sans | 44  | 300 | 1.1  | -0.025em | Premise statements, hero subhead. |
| `font/text/60`  | sans | 60  | 300 | 1.1  | -0.025em | Mid display, hero alt. |
| `font/text/84`  | sans | 84  | 300 | 1.1  | -0.04em  | Large display, hero primary. |
| `font/text/120` | sans | 120 | 300 | 1.0  | -0.04em  | Maximum display, hero monumental. |
| `font/text/mono/11` | mono | 11 | 600 | 1.5  | 0      | Mono caps in chrome at 11px · semibold · tracking 0 per Figma (weight widened 2026-05-28; tracking aligned 2026-05-31). |
| `font/text/mono/12` | mono | 12 | 500 | 1.5  | 0.04em | Mono labels at 12px. |
| `font/text/mono/13` | mono | 13 | 400 | 1.55 | 0      | Mono captions, token references, timestamps. |
| `font/text/mono/14` | mono | 14 | 400 | 1.5  | 0      | Mono inline code, dense mono cells. |
| `font/text/mono/16` | mono | 16 | 400 | 1.55 | 0      | Mono code block body (use Cascadia Code for ligatures inside `<code>`/`<pre>`). |

**Weight zone summary.** Mono chrome (11) = semibold (600) · other chrome (12) = medium · Body and reading (13–20) = regular · Mid-headline (24–32) = medium · Display 44 = thin (250) · Display 60–120 = light (300). Weight 600 carries mono chrome (11) and the secondary-button hover bump. (250 added 2026-05-31 to match Figma display/sm; 600 widened 2026-05-28 — see decisions/decisions.md.)

---

## Spacing Tokens

### space · layout ladder (4/8pt) · primitive

| Token Name | Value |
|---|---|
| `space/4` | 4px |
| `space/8` | 8px |
| `space/12` | 12px |
| `space/16` | 16px |
| `space/24` | 24px |
| `space/32` | 32px |
| `space/48` | 48px |
| `space/64` | 64px |
| `space/80` | 80px |
| `space/96` | 96px |
| `space/120` | 120px |

### space/micro · chrome ladder (2pt) · primitive · component padding only

| Token Name | Value |
|---|---|
| `space/micro/2` | 2px |
| `space/micro/6` | 6px |
| `space/micro/10` | 10px |
| `space/micro/14` | 14px |
| `space/micro/18` | 18px |
| `space/micro/22` | 22px |

### space/component/padding · semantic (mode-invariant)

| Token Name | Alias | Resolved | Notes |
|---|---|---|---|
| `space/component/padding/sm` | `space/8` | 8px | Tight chrome paddings, dense surfaces. |
| `space/component/padding/md` | `space/16` | 16px | Default card and frame padding. |
| `space/component/padding/lg` | `space/24` | 24px | Section padding, generous cards. |

Component-internal spacing uses `space/micro/*`. Layout spacing uses `space/*`. Tokens are not interchangeable across the two.

---

## Radius Tokens

| Token Name | Value | Notes |
|---|---|---|
| `radius/none` | 0px | Special structural rectangles. |
| `radius/input` | 3px | Form inputs + badges. |
| `radius/default` | 8px | Cards, buttons, frames, stamps. |
| `radius/circle` | 9999px | Status dots, brand stamp. |

---

## Motion Tokens

The current system uses cubic-bezier easing across the board (no spring physics in Figma). Springs are reserved for future high-tactility primitives at code-time; the studio standard for springs lives in `studio-memory.md` § 3 and is not yet captured as Figma variables.

### motion/duration

| Token Name | Value | Notes |
|---|---|---|
| `motion/duration/micro` | 200ms | Hover, tap, press. |
| `motion/duration/press` | 160ms | Press/release scale. levibahn.com convention. |
| `motion/duration/standard` | 380ms | State change, cross-fade. |
| `motion/duration/orchestrated` | 720ms | Page, route, choreographed reveal. |

### motion/easing · cubic-bezier strings

| Token Name | Value | Notes |
|---|---|---|
| `motion/easing/out` | `cubic-bezier(0.22, 1, 0.36, 1)` | Quint-out · primary. |
| `motion/easing/outStrong` | `cubic-bezier(0.23, 1, 0.32, 1)` | Press/release · from levibahn.com. |
| `motion/easing/inOut` | `cubic-bezier(0.65, 0, 0.35, 1)` | Symmetric · crossfades. |
| `motion/easing/cinematic` | `cubic-bezier(0.32, 0.08, 0.12, 1)` | Long deliberate · orchestrated only. |

### motion/scale

| Token Name | Value | Notes |
|---|---|---|
| `motion/scale/pressButton` | 0.985 | Button press scale. |
| `motion/scale/pressTap` | 0.92 | Tap target press scale. |

**Reduced-motion** — every duration token maps to `0.001ms` under `prefers-reduced-motion: reduce`. Easings unchanged (a 0.001ms transition is effectively instant). Scale transforms (`pressButton`, `pressTap`) suppressed via `transform: none` in the same media query. The functional path is preserved — only the motion is removed.

---

## Shadow / Elevation (Effect Styles)

Shadows cannot be Figma Variables — stored as Effect Styles. Reference by style name when applying.

| Style Name | Composition | Use |
|---|---|---|
| `elevation/1` | `0 1px 2px rgba(26, 24, 21, 0.08)` | Subtle hover lift. |
| `elevation/2` | `0 2px 8px rgba(26, 24, 21, 0.10), 0 1px 0 rgba(26, 24, 21, 0.04)` | Card lift. |
| `elevation/3` | `0 8px 24px rgba(26, 24, 21, 0.16), 0 2px 6px rgba(26, 24, 21, 0.08)` | Dialog / modal. |

Shadow color is anchored on ink (`#1A1815`) at varying alpha for warm-ground consistency.

---

## Breakpoints

Codified in Figma as the `Breakpoints` variable collection (single mode, NUMBER / FLOAT). The set below supersedes the studio-memory.md § 3 defaults (360 / 768 / 1024 / 1440 / 1920) **for this project only** — a 4-tier set with a modern-mobile baseline (390) and a consolidated desktop tier (1280) instead of the studio's 5-tier 1024+1440 split. Other projects continue to honor studio defaults until they override explicitly.

| Token Name | Value | Notes |
|---|---|---|
| `breakpoint/xs` | 390px | Mobile baseline. |
| `breakpoint/sm` | 768px | Tablet. |
| `breakpoint/md` | 1280px | Desktop. |
| `breakpoint/lg` | 1920px | Wide desktop. |

---

## Component Variants

No components have been defined in Figma yet. Component tier work is Sprint 2+ and will be appended here when it lands.

| Component | Variant Property | Values |
|---|---|---|
| _(none)_ | _(none)_ | _(none)_ |

---

## Removed Tokens (kept for reference)

Tokens that were in a previous sync but no longer exist in Figma. Do not use these in code.

| Token Name | Last Known Value | Removed Date |
|---|---|---|
| _(none — clean first extraction)_ | | |

---

## Export

Tokens export to:
- `tokens/primitives.json` + `tokens/semantic.json` (W3C DTCG format) — consumed by build / Style Dictionary / sync-figma-token
- Figma Variables (Primitives + Semantic collections) — consumed by designers

Both are downstream of this file. This file is the source of truth.

---

## Sprint 4 — Component-layer semantic expansion (2026-05-27)

Added during Sprint 4 to support the 12 component primitives without raw values at the component callsite. One ADR — see `decisions/decisions.md` 2026-05-27. 3 new primitives, 65 new semantic aliases. Generated CSS uses namespace `--sc-p-*` for primitives and `--sc-*` for semantic so a primitive and a same-named semantic alias cannot collide.

### Primitive additions

#### border/width · stroke ladder · primitive

| Token Name | Value | Notes |
|---|---|---|
| `border/width/hairline` | 1px | Default rule weight. Card, Input, Divider, NavBar. |
| `border/width/focus` | 2px | Focus-ring outline weight. |
| `border/width/accent` | 3px | Alert left-rule, ProgressIndicator bar. |

### Semantic additions

#### color/surface · inverse ground

| Token Name | Alias (light → dark) | Notes |
|---|---|---|
| `color/surface-inverse` | `warmGray/800` → `warmGray/50` | Inverted surface. Tooltip ground. |
| `color/text-on-inverse` | `warmGray/50` → `warmGray/800` | Text on inverse surface. |

#### border/width · semantic

| Token Name | Alias | Notes |
|---|---|---|
| `border/width/default` | `border/width/hairline` | 1px default rule. |
| `border/width/focus` | `border/width/focus` | 2px focus ring. |
| `border/width/accent` | `border/width/accent` | 3px accent rule. |
| `border/focus/offset` | `space/micro/2` | 2px focus-ring offset. |

#### radius · role aliases

| Token Name | Alias | Notes |
|---|---|---|
| `radius/control` | `radius/input` (3px) | Inscribed controls. Input, Badge, Tooltip. |
| `radius/surface` | `radius/default` (8px) | Raised surfaces. Card, Button, Alert. |
| `radius/pill` | `radius/circle` (9999px) | Avatar, Switch, ProgressIndicator bar. |
| `radius/none` | `radius/none` (0) | Structural rectangles. |

#### motion · role aliases · pair-tokens

| Token Name | Alias | Notes |
|---|---|---|
| `motion/hover/duration` | `motion/duration/micro` (200ms) | Hover state-change duration. |
| `motion/hover/easing` | `motion/easing/out` | Quint-out · hover entrance. |
| `motion/press/duration` | `motion/duration/press` (160ms) | Press/release scale. |
| `motion/press/easing` | `motion/easing/outStrong` | Strong quint-out · press feedback. |
| `motion/press/scale` | `motion/scale/pressButton` (0.985) | Button press scale. |
| `motion/mode/duration` | `motion/duration/standard` (380ms) | Theme switch cross-fade. |
| `motion/mode/easing` | `motion/easing/inOut` | Symmetric · mode switches. |
| `motion/reveal/duration` | `motion/duration/micro` (200ms) | Tooltip, Alert, Switch thumb. |
| `motion/reveal/easing` | `motion/easing/out` | Quint-out · reveal entrance. |

#### font/text · role aliases · per-surface composition

| Token Name | Alias | Notes |
|---|---|---|
| `font/text/label/chrome` | `font/text/11` (11/medium/widest) | Button labels, Badge, eyebrows. |
| `font/text/label/ui` | `font/text/12` (12/medium/wide) | Form labels, table headers. |
| `font/text/caption` | `font/text/13` (13/regular/relaxed) | Helper text, Tooltip, timestamps. |
| `font/text/body/dense` | `font/text/14` (14/regular/base) | NavBar links, Alert body. |
| `font/text/body/default` | `font/text/16` (16/regular/base) | Input value, Card body. |
| `font/text/body/lead` | `font/text/20` (20/regular/relaxed) | Intro paragraphs. |
| `font/text/title/card` | `font/text/24` (24/medium/snug) | Card titles, Alert title. |
| `font/text/title/section` | `font/text/32` (32/medium/snug) | Section headers. |
| `font/text/display/sm` | `font/text/44` (44/light/tight) | Premise statements. |
| `font/text/display/md` | `font/text/60` (60/light/tight) | |
| `font/text/display/lg` | `font/text/84` (84/light/tight) | |
| `font/text/display/xl` | `font/text/120` (120/light/flat) | Maximum display. |
| `font/text/mono/chrome` | `font/text/mono/11` | Token references, mono badges. |
| `font/text/mono/caption` | `font/text/mono/13` | Timestamps, token names. |
| `font/text/mono/body` | `font/text/mono/16` | Inline code, code blocks. |

#### size · component dimensions · semantic

| Token Name | Alias | Notes |
|---|---|---|
| `size/avatar/xs` | `space/24` | Table-row avatar. |
| `size/avatar/sm` | `space/32` | Default avatar. |
| `size/avatar/md` | `space/48` | Prominent avatar. |
| `size/avatar/lg` | `space/64` | Feature avatar. |
| `size/switch/track-width` | `space/32` | |
| `size/switch/track-height` | `space/micro/18` | |
| `size/switch/thumb` | `space/micro/14` | 2px inset inside 18px track. |
| `size/progress/bar-height` | `space/4` | |
| `size/progress/circular` | `space/48` | |
| `size/progress/circular-stroke` | `space/4` | |

#### space/component · directional padding + gap · semantic

| Token Name | Alias | Notes |
|---|---|---|
| `space/component/padding-inline/sm` | `space/micro/6` | Badge. |
| `space/component/padding-inline/md` | `space/12` | Button, Input, NavBar link. |
| `space/component/padding-inline/lg` | `space/16` | Card, Alert. |
| `space/component/padding-block/sm` | `space/micro/2` | Badge. |
| `space/component/padding-block/md` | `space/8` | Button, Input. |
| `space/component/padding-block/lg` | `space/12` | Card header, Alert. |
| `space/component/gap/sm` | `space/4` | Compact icon + label. |
| `space/component/gap/md` | `space/8` | Default icon + label. |
| `space/component/gap/lg` | `space/12` | Card header → body. |

#### space/layout · page rhythm · semantic

| Token Name | Alias | Notes |
|---|---|---|
| `space/layout/stack/sm` | `space/16` | Tightest sibling-block rhythm. |
| `space/layout/stack/md` | `space/24` | Default block rhythm. |
| `space/layout/stack/lg` | `space/48` | Between major page sections. |
| `space/layout/stack/xl` | `space/80` | Between top-level showcase sections. |
| `space/layout/inset/sm` | `space/16` | Mobile page edge inset. |
| `space/layout/inset/md` | `space/24` | Default page inset. |
| `space/layout/inset/lg` | `space/48` | Wide-layout page inset. |

