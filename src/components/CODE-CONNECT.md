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

## ⚠️ Figma side is not confirmed yet

The SCDS React primitives currently have **no 1:1 published Figma masters**. The
SCDS Figma file (`ufNlysCwWz7y2FBk61DxbN`) holds doc/specimen components and a
portal-kit (`UI/*`, `Portal/*`, `Admin/*`) on **different variant axes** than
these components. So every mapping below needs its Figma side confirmed before
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
| Button | `Button/Button.figma.tsx` | ✅ code wired 1:1 · ⚠️ Figma node-id + prop names TODO |
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
