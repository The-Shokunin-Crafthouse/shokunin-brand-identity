# Code Connect — SCDS component library

[Figma Code Connect](https://www.figma.com/code-connect-docs/) links each React
component in `src/components/` to its Figma component, so designers see the real
code snippet (and prop-driven variants) in Figma Dev Mode.

This repo is **upstream** of every Shokunin-branded property — it authors the
shared design system — so the mappings live here, next to the components.

## How it is wired

- `figma.config.json` (repo root) — `parser: "react"`, scans
  `src/components/**/*.figma.tsx`.
- `FIGMA_ACCESS_TOKEN` — read from the environment for publishing. Copy
  `.env.example` → `.env` (gitignored) and paste a token. See "Publishing".
- Each mapping is a co-located `<Component>.figma.tsx` next to the component.

```bash
npm run figma:parse     # local dry check — validates mappings, no token, no network · passes today
npm run figma:publish   # BLOCKED (plan-gated) — needs an Org/Enterprise token. See "Publishing"
```

## ⚠️ Figma side — Button confirmed, the rest are not

**Button is confirmed** (2026-09-11). Its Figma master is in the **SCDS library
file `0zVoxaLJQkjHENYJlQk1VT`**, page `24:3` → component set `9:438`, with
properties `Variant` (Primary | Secondary | Tertiary), `State` (Default | Hover |
Focus | Active | Disabled), `Label`, `Show Icon`, `Icon`. The original mapping
pointed at the wrong file (`ufNlysCwWz7y2FBk61DxbN`, the *brand* file) with a
placeholder `node-id=0-1` and guessed property names — including a `Ghost` enum
value that names a variant on neither side. Corrected in `Button.figma.tsx`.

Two code props have no Figma counterpart: `variant="destructive"` (no Destructive
variant in the set) and `loading` (no Loading state). Both are unmapped and
tracked in "Figma-side drift" below (rows 10-11).

The remaining SCDS React primitives still have **no 1:1 published Figma masters**.
The brand file `ufNlysCwWz7y2FBk61DxbN` holds doc/specimen components and a
portal-kit (`UI/*`, `Portal/*`, `Admin/*`) on **different variant axes** than
these components. So every other mapping needs its Figma side confirmed before
it will resolve on publish:

1. Create (or locate) the matching component in Figma.
2. Right-click it → **Copy link to selection** → paste as the `figma.connect`
   URL (replaces the placeholder `node-id=0-1`).
3. Align the Figma property names + enum values to that component's real variant
   properties.

`npm run figma:parse` validates the **code** side and passes today with the
placeholder URLs; it does not touch Figma. `npm run figma:publish` is the step
that needs the real node URLs.

## Status

| Component | Mapping file | Status |
| --- | --- | --- |
| Button | `Button/Button.figma.tsx` | ✅ code wired 1:1 · ✅ Figma node-id + prop names confirmed (2026-09-11) · publish still plan-gated |
| Toast | `Toast/Toast.figma.tsx` (`9:897`) | ☑ code wired (Tone, Glyph, Placement, Surface) · Figma set 32 variants (2026-10-10) · publish plan-gated |
| Avatar | `556:1738` | ☐ TODO |
| StatusPill | `9:767` | ☐ TODO |
| Card | — | ☐ TODO |
| Divider | — | ☐ TODO |
| Icon | — | ☐ TODO |
| Input | — | ☐ TODO |
| NavBar | — | ☐ TODO |
| ProgressIndicator | — | ☐ TODO |
| Slider | — | ☐ TODO |
| Switch | — | ☐ TODO |
| Tooltip | — | ☐ TODO |
| TypographySpecimen | — | ☐ TODO |
| PlusField | `PlusField/PlusField.figma.tsx` | ✅ code wired · ✅ Figma set `459:2771` built 2026-10-05 from the engine (decisions.md · plus-field) · publish still plan-gated |
| SectionDivider | `SectionDivider/SectionDivider.figma.tsx` | ✅ code wired · ✅ Figma set `459:2172` built 2026-10-05 from the engine (decisions.md · plus-field) · publish still plan-gated |
| HeadingRule | `HeadingRule/HeadingRule.figma.tsx` | ✅ code wired · ✅ Figma set `460:8` built 2026-10-05 from the engine (decisions.md · plus-field) · publish still plan-gated |
| PlusUnderline | `PlusUnderline/PlusUnderline.figma.tsx` | ✅ code wired · ✅ Figma set `459:2206` built 2026-10-05 from the engine (decisions.md · plus-field) · publish still plan-gated |
| PlusProgress | `PlusProgress/PlusProgress.figma.tsx` | ✅ code wired · ✅ Figma set `459:2236` built 2026-10-05 from the engine (decisions.md · plus-field) · publish still plan-gated |
| PlusLoader | `PlusLoader/PlusLoader.figma.tsx` | ✅ code wired · ✅ Figma set `459:2329` built 2026-10-05 from the engine (decisions.md · plus-field) · publish still plan-gated |
| PlusSkeleton | `PlusSkeleton/PlusSkeleton.figma.tsx` | ✅ code wired · ✅ Figma set `459:2350` built 2026-10-05 from the engine (decisions.md · plus-field) · publish still plan-gated |
| PlusTimeline | `PlusTimeline/PlusTimeline.figma.tsx` | ✅ code wired · ✅ Figma set `461:73` built 2026-10-05 from the engine (decisions.md · plus-field) · publish still plan-gated |
| PlusBullet | `PlusBullet/PlusBullet.figma.tsx` | ✅ code wired · ✅ Figma set `459:4` built 2026-10-05 from the engine (decisions.md · plus-field) · publish still plan-gated |
| PlusSeparator | `PlusSeparator/PlusSeparator.figma.tsx` | ✅ code wired · ✅ Figma set `474:56316` (`Tone` Default | Muted; Default is the original `459:2370`) · publish still plan-gated |
| PlusThumbnail | `PlusThumbnail/PlusThumbnail.figma.tsx` | ✅ code wired · ✅ Figma set `459:2400` built 2026-10-05 from the engine (decisions.md · plus-field) · publish still plan-gated |

Author the rest one at a time against confirmed Figma masters — do not bulk-author
blind. Copy the `Button.figma.tsx` shape: map `figma.enum` for variant props,
`figma.boolean` for flags, `figma.string`/`figma.children` for content.

## Figma-side drift — Button (`0zVoxaLJQkjHENYJlQk1VT` → `9:438`)

Found by the 2026-09-11 authenticated compare of the library component against
`Button.tokens.md` / `Button.module.css`. **Code was current; the Figma master was
behind.** Rows 1–9 and 12 were **applied to Figma on 2026-09-11** and verified
15/15 against the spec. Rows 10–11 remain open.

### Applied ✅

| # | Figma was | Now (per `Button.tokens.md`) | Nodes |
| --- | --- | --- | --- |
| 1 | Secondary = ink stroke `color/interactive/default`, no fill | Fill-only chip: `color/surface/sunk` fill, `color/text/primary` label, no stroke | `9:455` + label `9:456` |
| 2 | Secondary Hover/Focus/Active = teal stroke, no fill | `color/surface/hover` fill, no stroke | `9:458`, `9:461`, `9:465` |
| 3 | Secondary Disabled = `color/border/default` stroke, no fill | `color/surface/sunk` fill, no stroke | `9:468` |
| 4 | Primary Disabled = `color/border/default` stroke, no fill | `color/surface/sunk` fill, no stroke | `9:452` |
| 5 | Tertiary Disabled = no fill | `color/surface/sunk` fill (`.button:disabled` is cross-variant) | `9:484` |
| 6 | Primary Focus = `brand/accentFill` fill + white ink | Resting `surface/raised` + `text/primary`; the `focus-ring` child carries the ring | `9:445`, `9:446` |
| 7 | Tertiary Focus ink = `interactive/hover` | Resting `brand/accentDeep` + ring | `9:478` |
| 8 | Label text style = **Cascadia Mono SemiBold 11** (`text/mono/chrome`) | `text/label/chrome` — NHG Text 65 Medium 11. Owner chose NHG over the mock's placeholder mono (decisions, 2026-07-09) | all 15 label nodes |
| 9 | Secondary Default/Disabled bound the **primitive** `space/16` for inline padding | Semantic `space/component/padding-inline/lg` | `9:455`, `9:468` |
| 12 | Arrow bound a **different token from its own label** in 8 states — Secondary Hover/Focus drew `#056268` against a `#038e93` label, and Primary Hover/Active bound the raw primitive `color/warmGray/25` | Arrow binds its label's token everywhere. The code arrow is `currentColor`, so arrow and label can never diverge; Figma could, and did | 16 arrow vectors |

Row 12 was not in the original report — it surfaced only once the arrow instances
were read. Two of its eight states were a visible colour mismatch, not a tiering nit.

### Still open ☐

| # | Gap | Why it is not a correction |
| --- | --- | --- |
| 10 | No `Destructive` variant option; code ships `variant="destructive"` | New component work — a variant that has never existed in Figma, not a drifted one |
| 11 | No `Loading` state option; code ships `loading` (spinner replaces the arrow) | Same — wants its own sprint, including the spinner's motion spec |

### Verification

A read-back asserted each of the 15 variants' fill, stroke, label token, arrow
token, font and focus-ring presence against a table transcribed from
`Button.tokens.md`: **15 PASS / 0 FAIL**.

**The library was not published.** The edits are in the file; consumers keep seeing
the old component until someone publishes the library from the Figma UI. That
step is deliberately left to a human.

## Publishing — BLOCKED (plan-gated)

> **Status (2026-06-24):** Setup is complete and `npm run figma:parse` passes
> (EXIT 0). Publishing is **blocked by Figma plan tier**, not by anything in this repo.

`figma connect publish` requires a Figma personal access token carrying the
**`code_connect:write`** scope. That scope is only offered on Figma
**Organization / Enterprise** plans. This account is on **Professional**, where the
scope **does not appear** in the token-creation UI (Figma → Settings → Security →
Personal access tokens) — confirmed 2026-06-24. No usable token can be minted from
this account, so the mappings cannot be published from this plan regardless of the
Figma-side work below.

The setup is **parked, verified, and ready to publish unchanged** the day the account
is on a qualifying plan. Nothing in this repo needs to change to unblock — only the
plan, then the Figma masters (see "⚠️ Figma side is not confirmed yet" above).

### Unblock recipe (for the day the plan qualifies)

1. Be a **full member of an Organization / Enterprise team** in Figma.
2. Generate a personal access token with the **`code_connect:write`** +
   **`file_content:read`** scopes. `cp .env.example .env` and paste it as
   `FIGMA_ACCESS_TOKEN`.
3. Replace the placeholder Button `node-id` with the real one and align the Figma
   property names (see "⚠️ Figma side is not confirmed yet" above).
4. `npm run figma:publish`.
