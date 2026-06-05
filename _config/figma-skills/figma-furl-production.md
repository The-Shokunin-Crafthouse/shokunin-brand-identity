---
name: figma-furl-production
description: >
  Translate a locked, merged build URL into a Figma Production page when a design
  system already exists. Uses existing variables, text styles, and components. Creates
  new ones only when the URL contains patterns not yet in the system. Use when the
  build has merged and is final, a Figma variable collection and components already
  exist, and Figma needs to be brought into 1:1 alignment with what shipped.
  Production = locked record, not exploration. Trigger when asked to "sync figma to
  what shipped", "update the production figma page", "figma is out of date with the
  build", or "post-merge figma sync" and the Figma file already has variables and
  components.
---

# figma-furl-production
## Shokunin Crafthouse — Figma From URL (Existing Design System → Production)

**Location in project:** `_config/figma-skills/figma-furl-production.md`
**Mode:** Design system exists. Target page: Production.
**Core instructions:** `_config/figma-skills/figma-furl-core.md` — read all sections (W, A, B, C, D, E) before proceeding.

---

## When to use this skill

Selection is based ONLY on live Figma state.

| Signal (live Figma state) | Detail |
|---|---|
| `get_variable_defs` returns 1+ variables | A variable collection exists |
| Components page contains 1+ components | Components exist |
| The build has merged and is locked | URL points to final, deployed state |
| Goal is 1:1 accuracy | Not exploration — Figma must match what shipped exactly |

If variables = 0 AND components = 0, use `figma-furl-new-production` instead. If still in exploration mode, use `figma-furl-sandbox` instead.

---

## How to invoke

```
Run the figma-furl-production skill from _config/figma-skills/figma-furl-production.md.

URL: [paste the deployed URL — localhost, Hostinger, Vercel, Bluehost]
Figma file URL: [paste the Figma file URL]
Production page name: [e.g. "Production — Homepage"]
```

---

## Step-by-step instructions for Claude

### Step 1 — Read the core file

Read `_config/figma-skills/figma-furl-core.md` in full. All sections apply. Structured writes use `use_figma` (Section W). Note A3-P for Production interactive states.

---

### Step 2 — Read the existing design system

Same as `figma-furl-sandbox` Step 2: read variables via `get_variable_defs`; resolve the Components page node id (W4) and read components via `get_metadata` with that `nodeId`. Cross-reference token-map.md and flag discrepancies; the live Figma collection is the authority. If variables = 0 AND components = 0, switch to `figma-furl-new-production`.

---

### Step 3 — Ingest the URL (capture) and map against the system

Follow Section B and W3. Production precision:

- Desktop 1440px; add 390px mobile if responsive.
- Every section captured top to bottom.
- Map every element against the existing system (same mapping as `figma-furl-sandbox` Step 3, using `search_design_system` for components).
- Flag every value not covered by an existing variable or component.

Complete the inventory and gap list before building.

---

### Step 4 — Resolve gaps (use_figma)

Same as `figma-furl-sandbox` Step 4 (load `figma-use` first; reuse via `search_design_system`; create new only when genuinely new; never modify existing variables — E4). Production state rule A3-P applies to any new interactive component.

**Additional Production constraint:** if a gap looks like a deviation from the system (a spacing value off the project scale, a one-off color override), flag it as a SYSTEM DEVIATION in the completion report in addition to resolving it. Deviations indicate where the build may have drifted from the design system.

Resolve every gap before Step 5. Do not approximate.

---

### Step 5 — Build the page on the Production page (use_figma)

Resolve the Production page node id (W4). The permanent 1:1 record. Via `use_figma`:

1. Frame at the exact build viewport (1440px desktop minimum; 390px mobile if responsive).
2. Every section as a named Auto Layout frame.
3. Every element as a component instance — no flat layers.
4. Layer names match the code structure where identifiable.
5. All variables applied; all type via text styles; clip content on scroll regions.
6. Nothing added that is not in the build; nothing omitted that is in the build.
7. If an existing Production frame for this route exists, archive it per E2 (move to `_archive` at the bottom of the Production page — that is the page where it lives) before building the new frame; note the archive in the report. Do not delete it.
8. Refine against the capture via `get_screenshot`, then delete the capture reference (W3 step 5).

---

### Step 6 — Update token-map.md if new tokens were added (drift detection)

Fires only if Step 4 added new tokens, and only after the build is persisted.

```
Run the sync-figma-token skill from _config/design-system/sync-figma-token.md.

Figma file URL: [the file]

token-map.md is populated — run drift detection. If running unattended, write the proposed map to token-map.proposed.md and continue; otherwise show the diff and wait for confirmation before overwriting token-map.md.
```

Note: the sync skill is page-agnostic — it reads the variable collection directly, so new tokens created in Step 4 are extracted correctly whether they live on Sandbox or Production. No Sandbox round-trip is needed.

If no new tokens were added, skip this step.

---

### Step 7 — Completion report

Produce the Section D report. Append the production sync status line (COMPLETE or INCOMPLETE per `figma-furl-new-production` Step 8 format), and a System Deviations section if any were found:

```
### System Deviations Found
Values in the build that deviate from the established design system.
Informational — Levi decides whether to correct in code or formalize in the system.

| Location | Deviation | Expected Token | Actual Value |
|---|---|---|---|
```

---

## What this skill does NOT do

- Does not write to the Sandbox page for the Production layout (E1)
- Does not make design improvements — records what shipped
- Does not invent unobservable interactive states (A3-P)
- Does not modify existing variable values — only adds new ones (E4)
- Does not publish the library (E3)
- Does not delete existing Production frames — archives them per E2
- Does not delete layers except the capture reference (W3)
- Does not skip system deviation reporting
