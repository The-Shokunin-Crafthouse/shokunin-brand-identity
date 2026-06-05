---
name: figma-furl-new-production
description: >
  Translate a locked, merged build URL into a Figma Production page when no design
  system exists yet. Builds the design system from scratch using what is found in
  the URL, creates all components, and places the final layout as instances on the
  Production page as a 1:1 representation of what shipped. Use when the build is
  already merged and final and Figma needs to catch up to it from scratch.
  Production = locked, not exploratory. Trigger when asked to "sync figma to the
  build", "create a production figma file", "make figma match what shipped", or
  "figma has nothing and the build is done" and the Figma file has no variables and
  no components yet.
---

# figma-furl-new-production
## Shokunin Crafthouse — Figma From URL (New Design System → Production)

**Location in project:** `_config/figma-skills/figma-furl-new-production.md`
**Mode:** No existing design system. Target page: Production.
**Core instructions:** `_config/figma-skills/figma-furl-core.md` — read all sections (W, A, B, C, D, E) before proceeding.

---

## When to use this skill

Selection is based ONLY on live Figma state — never on whether `token-map.md` exists.

| Signal (live Figma state) | Detail |
|---|---|
| `get_variable_defs` returns 0 variables | No variable collection built |
| Components page contains 0 components | No components built |
| The build has merged and is locked | URL points to the final, deployed state |
| Goal is 1:1 accuracy | Not exploration — Figma must match what shipped exactly |

If you are still in design exploration mode, use `figma-furl-new-sandbox` instead.
If `get_variable_defs` returns 1+ variables OR the Components page has 1+ components, use `figma-furl-production` instead.

---

## How to invoke

```
Run the figma-furl-new-production skill from _config/figma-skills/figma-furl-new-production.md.

URL: [paste the deployed URL — localhost, Hostinger, Vercel, Bluehost]
Figma file URL: [paste the Figma file URL, or say "none — create one"]
Figma plan key: [team::… or organization:: — required only if creating a new file]
Production page name: [e.g. "Production — Homepage"]
```

---

## Step-by-step instructions for Claude

### Step 1 — Read the core file

Read `_config/figma-skills/figma-furl-core.md` in full. All sections apply. All structured writes use `use_figma` (Section W). Note A3-P: Production runs do not invent unobservable interactive states.

---

### Step 2 — Confirm no design system exists (live Figma state only)

Same as `figma-furl-new-sandbox` Step 2: resolve `fileKey`, run `get_variable_defs`, resolve the Components page node id (W4) and check it via `get_metadata` with that `nodeId`. Proceed only if variables = 0 AND components = 0. Otherwise switch to `figma-furl-production`.

If no Figma file URL was provided, proceed; the file is created in Step 5.

---

### Step 3 — Ingest the URL (capture)

Follow Section B and W3. This is a Production build — the URL is the locked, final state. Capture with precision:

- Every section top to bottom at 1440px desktop (add 390px mobile if responsive).
- Every interactive element in its default state.
- Navigation in default, non-scrolled state.
- Loading states / skeletons noted as STATES TO MANUALLY ADD, not blocked on.

Document the full inventory of colors, type, spacing, and elements. The goal is zero discrepancy between the URL and Figma. If anything is ambiguous, note it — do not approximate.

---

### Step 4 — Build the variable collection (use_figma)

Same process as `figma-furl-new-sandbox` Step 4 (load `figma-use` first; read the project spacing scale from `token-map.md`). One difference: this is the production token set, so names are final, not exploratory. If a color's semantic role is genuinely unclear from the build, flag it in the completion report rather than guessing.

---

### Step 5 — Build components (use_figma)

If no file existed, create it now (load `/figma-create-new-file`, `create_new_file` with `planKey`, add the four standard pages).

Same process as `figma-furl-new-sandbox` Step 5 with the Production state rule (A3-P): build the observable `default` state to exact spec; create slots for hover/focus/active/disabled but do not invent their styling — list them under "States to manually add." Accuracy over speed.

Build order: atoms → interactive primitives → content containers → navigation → section-level patterns.

---

### Step 6 — Build the page on the Production page (use_figma)

Resolve the Production page node id (W4). The Production page is the 1:1 record of what shipped. Via `use_figma`:

1. Frame at the exact build viewport (1440px desktop; add 390px mobile if responsive).
2. Every section as a named Auto Layout frame.
3. Every element is a component instance — no flat layers.
4. Layer names match the code structure where identifiable.
5. All variables applied; clip content on scroll regions.
6. Refine against the capture via `get_screenshot`, then delete the capture reference.

Add nothing not present in the build. This is a record, not an interpretation.

---

### Step 7 — Sync token-map.md (clean extraction)

This is a genuine first build, so `token-map.md` is an unfilled scaffold. The sync skill is page-agnostic — it reads the variable collection directly (file-scoped), the file's text styles, and the Components page, so it extracts correctly from a Production build with no Sandbox involvement.

Run:

```
Run the sync-figma-token skill from _config/design-system/sync-figma-token.md.

Figma file URL: [the file]

token-map.md is an unfilled scaffold — treat as no prior map and clean-extract without pausing.
```

The sync recognizes the unfilled scaffold and clean-extracts without hanging on a drift prompt. Its Phase 1 will scan the design page named in its own default (Sandbox); on a Production-only build there will be no loose elements there, so Phase 1 reports "nothing to do" and extraction proceeds from the variable collection.

---

### Step 8 — Completion report

Produce the Section D report. Append:

```
**Production sync status:** COMPLETE — Figma Production page now reflects the merged build at [URL] as of [date].
```

Or, if unresolved issues remain:

```
**Production sync status:** INCOMPLETE — [N] unresolved issues listed above must be resolved before this can be used as a code reference.
```

---

## What this skill does NOT do

- Does not write to the Sandbox page for the layout (E1) — but note Step 7's token-extraction caveat
- Does not make design improvements or add elements not in the build
- Does not invent unobservable interactive states (A3-P)
- Does not publish the library (E3)
- Does not delete layers except the capture reference (E2 / W3)
- Does not select itself based on token-map.md existence — only live Figma state
