# CC PROMPT — SCDS: fix, publish, wire, and install the update pipeline

> Paste everything below this line into Claude Code, running in the **primary checkout** of
> `~/Projects/shokunin-crafthouse/shokunin-brand-identity` (on `main`, clean tree, pulled —
> learnings #42/#44). Fill the REQUIRED INPUTS block first. This is a multi-session job:
> maintain `SESSION-RESUME.md` (learning #50) from the first action onward.

---

You are running the SCDS publish sprint for The Shokunin Crafthouse. The contract below is
complete and dependency-ordered. EXECUTE FIRST applies: do the work, never hand me steps.
Pause only at the two marked HUMAN GATES.

## REQUIRED INPUTS — fill before running

- SCDS Figma file: `0zVoxaLJQkjHENYJlQk1VT`
  (https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/)
- Audit + backlog: `SCDS-AUDIT-2026-07-25.md` in this repo — **read it in full before anything else.**
  It contains node IDs, variable IDs, exact hex values, and the ranked fix backlog (Blocks 0–8)
  this contract executes. Do not re-derive what it already measured.
- Per-site Figma design files (separate files whose local components must be swapped to library
  instances):
  - Studio / agency site file: `<PASTE FIGMA URL>`
  - Client portal file: `<PASTE FIGMA URL>`
  - Brand/docs site file: `<PASTE FIGMA URL>`
- Site repos (local paths or git URLs):
  - shokunincrafthouse.com: `<PASTE PATH/URL>`
  - clients.shokunincrafthouse.com: `<PASTE PATH/URL>`
  - brand.shokunincrafthouse.com: `<PASTE PATH/URL>` (this repo hosts/deploys `tokens.css`)
- `FIGMA_TOKEN` env var: personal access token with `file_variables:read` on the Studio team
  (needed by the update pipeline in Phase 5; the Figma MCP covers interactive phases).

**If any input is blank, stop and ask for it before doing anything else.** Do not guess file
URLs or repo locations.

## Decisions already made (do not re-litigate)

1. **Cascade architecture: runtime link.** All three sites `<link>` the single hosted
   `https://brand.shokunincrafthouse.com/tokens.css` at runtime. Updating the design system
   regenerates and deploys that one file from this repo. The other two repos receive **no
   commits and no PRs** on a token update — they don't change. Branch protection and merge
   authority (ADR-018/029, learning #43) stay fully intact; land this repo's changes via PR
   as usual.
2. **Agency-site contract: tokens are law, experience is free.** shokunincrafthouse.com must
   consume the shared tokens.css for color/type/space/radius/border/motion primitives and
   semantic tokens. Layout, WebGL, shaders, scroll scenes, and any experiential work are
   permanently exempt from Figma parity. The update pipeline diffs tokens only and must never
   flag experiential code as drift. Log this as an ADR.
3. **Figma is the single source of truth** for every token it can represent.
   `motion/easing/*` (cubic-beziers) are a documented code-only tier (audit §4a) — the
   pipeline must never delete them for being absent from Figma. Log this as an ADR.
4. `color/status/error/dark` is already fixed in Figma (`#dd4c4c`, VariableID:2:52). The repo
   still carries `#732020` — Phase 4 propagates it (audit 8.8).

---

## Phase 0 — Preflight (no writes)

1. Verify repo state: `main`, clean, up to date, primary checkout (no `.claude/worktrees/` in
   path). Create `SESSION-RESUME.md` from the studio template with this contract's phases as
   rows.
2. **Audit item 0.1:** request `https://brand.shokunincrafthouse.com/tokens.css` (bare URL, no
   query string) with a fresh client. If it 404s, this is a production incident — the client
   portal loads zero shared tokens. Fix the hosting/redirect before anything else and record
   what you found.
3. Confirm audit items 0.5–0.7: the double `<link>` on clients (FOUC guard — keep or collapse,
   note it), whether `--status-error-ink` is dangling in the clients bundle, and how the brand
   SPA gets its token definitions (read the bundle source in the brand repo — you have it now;
   the audit couldn't).
4. Read `tokens/`, `scripts/tokens-to-css.mjs`, `figma.config.json`, `sync-figma-token.md`,
   and `decisions/decisions.md` so you know the existing generator before touching it.

## HUMAN GATE 1 — two Gate-1 decisions, one message (sc-escalate, type GATE)

Send me ONE decision packet, then stop until I answer:

- **Brand hue:** the flagship site ships a red `shu` ramp; SCDS and the shared tokens are teal
  (audit §5). Which is the brand? (a) Teal everywhere — agency site re-skins to teal at token
  level. (b) Red is the studio-site brand — `shu/*` enters SCDS as a primitive ramp and the
  theming below carries per-site accents.
- **Theming architecture:** audit §6 recommends a third `Brand` collection
  (modes: Studio | Clients | Docs) holding only the ~12 genuinely divergent aliases, keeping
  `Semantic` at Light/Dark. Approve, or name an alternative. Verify the current Professional-plan
  mode cap before building (audit flags 4/collection as of writing — confirm).

Log both answers as ADRs via sc-adr before proceeding. Everything in Phases 1–2 that touches
color depends on these.

## Phase 1 — Figma fixes (audit Blocks 1–5, via the Figma MCP)

Execute against `0zVoxaLJQkjHENYJlQk1VT` in this order, using the audit's node/variable IDs.
Work incrementally; verify each block with a fresh read before moving on.

1. **Block 1 (publish blockers):** move `_Archive` (page `1:7`) to a new `SCDS Archive` file —
   never delete; rebind `font/family/*` from the Trial cuts to Neue Haas Grotesk Display/Text
   **Pro** and resolve the `sans`≡`display` duplicate; skip 1.3 (done).
   ⚠️ Font rebinding via API fails if the Pro fonts won't load headlessly (learning #38) — if
   `loadFontAsync` fails, produce the exact desktop-app hand-edit list (style names verified
   via `listAvailableFontsAsync`) and continue; flag it in the final report, don't stall.
2. **Block 2 (colour):** add the `-ink` text tier for status hues + interactive/hover
   (learning #56 — targets ≥4.5:1 on the declared grounds, verify with computed ratios, don't
   eyeball); resolve `text/onAccent` vs `brand/accent`; swap `border/subtle`↔`border/default`
   light aliases; re-alias `color/divider/*` to real primitives with genuine hierarchy; repoint
   `color/border/focus` → the focusRing tokens; rebuild the warmGray 200–400 span and collapse
   the `dark/*` duplicates per learning #11. Correct learning #67's ratio to 3.23 in
   studio-memory.
3. **Block 3 (typography):** bind lineHeight + letterSpacing to variables in all 26 text
   styles; fix or delete the three `*/light` duplicates; repair `nav/header`/`nav/node`
   (bind fontSize, kill `AUTO` line-height); tune display tracking; merge `display/xsm-32` vs
   `title/section`; declare the type-scale ratio or ADR the hybrid.
4. **Block 4 (components):** normalise `state`→`State` everywhere; five-state `Toggle`,
   `Stepper`, `NavItem`; re-model `Tab` with a `Selected` boolean matching `Segment`; bind the
   ~85 radii and ~98 padding/gaps; style the 25 unstyled text nodes; consolidate
   `Badge`/`StatusPill`/`Pill`; rebuild `Mark` as one Type×Theme variant set; write
   descriptions on every set (they're the assets-panel text consumers read).
5. **Block 5 (foundations):** fill Principles/Color/Type/Space/Motion pages; grid styles for
   390/768/1024/1440/1920; bind effect-style shadows and reconcile `shadow/raised` ↔ repo
   `shadow/control/raised`; add `inkRgb`/`whiteRgb` STRING primitives; naming normalisation
   (`text-on-inverse`→`text/onInverse` etc.); fix `motion/press/release-duration` ↔
   `release/duration`.
6. **Block 6 (theming):** implement the approved architecture from Gate 1.

## Phase 2 — Publish + re-link every Figma consumer

1. **Publish SCDS as a team library** (this goal's item 1). If the MCP cannot trigger publish,
   that is the ONE allowed manual step: prepare everything, then tell me exactly what to click
   (Assets → Libraries → Publish) and wait. Record the published library key in
   `decisions/decisions.md`.
2. For each of the three per-site Figma files: add the SCDS library, then **swap every local
   component that duplicates an SCDS component to a library instance by key** (pre-flight each
   file first — figma-component-preflight pattern — to build the local→library key map;
   `importComponentByKeyAsync` + `swapComponent`, preserving overrides). Delete the orphaned
   local masters only after their instance count reads zero.
3. Acceptance for goal 3: in each site file, a census of `COMPONENT`/`COMPONENT_SET` nodes
   returns **zero** that duplicate an SCDS name; all instances resolve to remote mainComponents.
4. Re-run the audit's publish check: `get_libraries` on each site file lists SCDS under
   `libraries_added_to_file`.

## Phase 3 — Code: one token source, three runtime consumers

1. Teach `scripts/tokens-to-css.mjs` (and the token JSONs) the full Figma↔code mapping from
   audit §4: export the 11 Figma-only text styles; keep the composite `font/text/*` tier
   mapped to Text Styles by name; keep `motion/easing/*` as the protected code-only tier;
   resolve the `release-duration` naming to match Figma.
2. Propagate `#732020`→`#dd4c4c` in `tokens/primitives.json` (audit 8.8) along with every
   Phase-1 colour/type change — after Phase 1, regenerating from Figma should produce all of
   this automatically; hand-editing token JSONs is a bug in the pipeline if it's ever needed.
3. Regenerate + deploy `tokens.css` to brand.shokunincrafthouse.com. Verify **at the
   destination** (learning #45): fetch the live bare URL and assert a changed value (e.g. the
   error/dark hex) is actually serving.
4. **shokunincrafthouse.com:** retire the forked `assets/css/tokens.css`; `<link>` the shared
   hosted file (use the clients FOUC-guard pattern); fix `.nav__brand`'s dangling
   `--sc-p-font-size-18` → `--sc-p-font-size-offscale-18`; add `@font-face` for (or delete the
   tokens of) the five undeclared families; keep every experiential/illustration variable
   (`--wood-*`, `--rattan-*`, etc.) untouched — they are exempt by contract. If the hue
   decision was teal, the `shu` swap happens at token level only; do not touch layout or scenes.
5. **brand.shokunincrafthouse.com:** make the served HTML actually `<link>` its own tokens.css
   (Phase 0.3 findings decide the exact fix); add `@font-face` — it currently ships none.
6. **clients.shokunincrafthouse.com:** already runtime-linked; fix `--status-error-ink` if
   confirmed dangling. The ~50 hardcoded hex values are a follow-up sprint, not this one —
   log them to WORK-QUEUE.md.
7. Land all of this repo's changes via normal PR flow (learning #43). Site repos get one
   linking PR each — the last PRs they should ever need for token changes.

## Phase 4 — Verify the cascade end-to-end

Change one throwaway variable in Figma (e.g. bump a comment-only description or a scratch
token), run the Phase-5 pipeline once, and confirm: value changes in Figma → regenerated
tokens.css → live at the bare URL → visible in a hard-refreshed page on all three sites →
zero commits in the two consumer repos. Revert the scratch change. Screenshot proof per
breakpoint is not required here; the DOM-computed value check is (learning #108 inverse —
this is a value check, not a layout check).

## Phase 5 — Install the `/update-design-system` pipeline

Create `skills/update-design-system/SKILL.md` in THIS repo (repo skills self-register on merge
— learning #114). The skill, when I say **"update the design system"**, must:

1. Pull the current variable + text-style state from Figma file `0zVoxaLJQkjHENYJlQk1VT` via
   the REST API using `FIGMA_TOKEN` (fall back to the Figma MCP if the token is absent and a
   desktop session exists).
2. Diff against `tokens/*.json` and produce a human-readable change report
   (added / removed / changed, with old→new values) — this is goal 4.1. **Guardrails:** never
   delete the `motion/easing/*` code-only tier; treat a diff that removes >20% of tokens as a
   failed fetch, not a real change (learning #84's plateau lesson generalised) — abort and
   report instead of committing a mass deletion.
3. Apply the diff to the token JSONs, regenerate `tokens.css`, commit on a branch, PR, and —
   per merge authority — send me a MERGE packet (sc-escalate) unless the diff is
   values-only-no-names-changed, in which case merge per whatever authority ADR-018/029
   currently grants and say so in the report.
4. Deploy the regenerated `tokens.css` and verify at the live bare URL (learning #45 again —
   deploy-said-so is not verification).
5. Report: what changed, contrast spot-checks on any changed colour pair, confirmation the
   live file serves the new values, and an explicit "no consumer repo was touched" line.

HUMAN GATE 2 (only if reached): if the diff contains a brand-direction change (new hue ramp,
accent repoint), stop and escalate — that's a Gate-1/2 call, not a sync.

Also add a one-paragraph note to each consumer repo's CLAUDE.md: "Design tokens come from
https://brand.shokunincrafthouse.com/tokens.css at runtime. Never fork or vendored-copy this
file. Token changes happen in shokunin-brand-identity via /update-design-system."

## Acceptance criteria (map to my goals)

1. ☐ SCDS published as a team library; key recorded; `_Archive` relocated; no trial fonts
   anywhere in the file.
2. ☐ All three site Figma files subscribe to SCDS **and** all three sites runtime-link the one
   hosted tokens.css; the two consumer repos contain a CLAUDE.md note and no token copies.
3. ☐ Zero local duplicate components in any site Figma file (census proof in the report).
4. ☐ "update the design system" in this repo runs: Figma fetch → diff report → code change →
   deploy → live verification, with zero commits/PRs in the consumer repos, Figma as truth,
   easing tier protected.
5. ☐ Agency-site experiential surface untouched; token consumption verified; exemption logged
   as an ADR.
6. ☐ Phase-4 end-to-end cascade test passed and documented in the final report.
7. ☐ ADRs logged: hue, theming, runtime-link architecture, tokens-law/experience-free,
   code-only easing tier. `LEARNINGS.md` + build-log updated via sc-learn at close.

Close-out: final report at the repo root summarising every phase with proof artifacts, update
`SESSION-RESUME.md` to complete, run sc-learn.
