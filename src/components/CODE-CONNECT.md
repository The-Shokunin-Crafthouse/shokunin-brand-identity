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
npm run figma:parse     # local dry check — validates mappings, no token, no network
npm run figma:publish   # writes mappings into Figma — needs FIGMA_ACCESS_TOKEN
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

## Publishing (manual — Levi)

1. Generate a Figma personal access token: **Figma → Settings → Security →
   Personal access tokens**. Scopes: **Code Connect — Write**, **File content — Read**.
2. `cp .env.example .env` and paste the token as `FIGMA_ACCESS_TOKEN`.
3. Confirm each mapping's Figma URL points at a real component (see above).
4. `npm run figma:publish`.
