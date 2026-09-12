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
tracked in "Known Figma-side gaps" below.

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
| Alert | — | ☐ TODO |
| Avatar | — | ☐ TODO |
| Badge | — | ☐ TODO |
| Card | — | ☐ TODO |
| Divider | — | ☐ TODO |
| Icon | — | ☐ TODO |
| Input | — | ☐ TODO |
| NavBar | — | ☐ TODO |
| ProgressIndicator | — | ☐ TODO |
| Switch | — | ☐ TODO |
| Tooltip | — | ☐ TODO |
| TypographySpecimen | — | ☐ TODO |

Author the rest one at a time against confirmed Figma masters — do not bulk-author
blind. Copy the `Button.figma.tsx` shape: map `figma.enum` for variant props,
`figma.boolean` for flags, `figma.string`/`figma.children` for content.

## Known Figma-side gaps — Button (`0zVoxaLJQkjHENYJlQk1VT` → `9:438`)

Found by the 2026-09-11 authenticated compare of the library component against
`Button.tokens.md` / `Button.module.css`. **Code is current; the Figma master is
behind.** Each row is a Figma-side edit, not a code change.

| # | Figma today | Should be (per `Button.tokens.md`) | Nodes |
| --- | --- | --- | --- |
| 1 | Secondary = ink stroke `color/interactive/default`, no fill | Fill-only chip: `color/surface/sunk` fill, `color/text/primary` label, **no stroke** | `9:455` + label `9:456` |
| 2 | Secondary Hover/Focus/Active = teal stroke, no fill | `color/surface/hover` fill, no stroke (labels already correct) | `9:458`, `9:461`, `9:465` |
| 3 | Secondary Disabled = `color/border/default` stroke, no fill | `color/surface/sunk` fill, transparent border | `9:468` |
| 4 | Primary Disabled = `color/border/default` stroke, no fill | `color/surface/sunk` fill, transparent border | `9:452` |
| 5 | Tertiary Disabled = no fill | `color/surface/sunk` fill (`.button:disabled` is cross-variant) | `9:484` |
| 6 | Primary Focus = `brand/accentFill` (hover) fill | Resting `surface/raised` + focus ring only — the accent is a hover state | `9:445` |
| 7 | Tertiary Focus label = `interactive/hover` | Resting `brand/accentDeep` + focus ring only | `9:478` |
| 8 | Label text style = **Cascadia Mono SemiBold 11** (`S:09dbbe27…`) | `font.text.label.chrome` — NHG Text medium 11/500. Owner chose NHG over the mock's placeholder mono (decisions, 2026-07-09) | every `Button` TEXT child |
| 9 | Secondary Default/Disabled bind the **primitive** `space/16` for inline padding | Semantic `space/component/padding-inline/lg` (same value, wrong tier) | `9:455`, `9:468` |
| 10 | No `Destructive` variant option | Code ships `variant="destructive"` | set `9:438` |
| 11 | No `Loading` state option | Code ships `loading` (spinner replaces the arrow) | set `9:438` |

Rows 1–7 and 9 are **corrections** — transcriptions of an already-approved
decision (scds-v2 Phase 2, `decisions/decisions.md` 2026-07-27) into Figma.
Row 8 needs NHG Text loadable by the Figma MCP (`loadFontAsync` has failed for
the brand faces before — see `LEARNINGS.md`). Rows 10–11 are **new component
work**, not corrections, and want their own sprint.

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
