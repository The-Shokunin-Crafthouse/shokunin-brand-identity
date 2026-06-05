---
name: figma-furl-sandbox
description: >
  Translate a live URL into a Figma Sandbox page when a design system already exists.
  Uses existing variables, text styles, and components. Creates new ones only when the
  URL contains patterns not yet in the system. Use when you want to explore design
  changes or iterate on a new page/section and the Figma file already has a variable
  collection and components. Sandbox = exploration, not locked. Trigger when asked to
  "add this to figma", "design this in figma", "build out this section in figma",
  "replicate this page in figma sandbox", or "I want to make design changes to this"
  and the Figma file already has variables and components.
---

# figma-furl-sandbox
## Shokunin Crafthouse — Figma From URL (Existing Design System → Sandbox)

**Location in project:** `_config/figma-skills/figma-furl-sandbox.md`
**Mode:** Design system exists. Target page: Sandbox.
**Core instructions:** `_config/figma-skills/figma-furl-core.md` — read all sections (W, A, B, C, D, E) before proceeding.

---

## When to use this skill

Selection is based ONLY on live Figma state.

| Signal (live Figma state) | Detail |
|---|---|
| `get_variable_defs` returns 1+ variables | A variable collection exists |
| Components page contains 1+ components | Components exist |
| You are in design exploration mode | Changes are not locked — Sandbox is the right target |

If `get_variable_defs` returns 0 variables AND the Components page has 0 components, use `figma-furl-new-sandbox` instead. If the build is locked and you need Production accuracy, use `figma-furl-production` instead.

---

## How to invoke

```
Run the figma-furl-sandbox skill from _config/figma-skills/figma-furl-sandbox.md.

URL: [paste the URL — localhost, staging, or production]
Figma file URL: [paste the Figma file URL]
```

---

## Step-by-step instructions for Claude

### Step 1 — Read the core file

Read `_config/figma-skills/figma-furl-core.md` in full. All sections apply. Structured writes use `use_figma` (Section W).

---

### Step 2 — Read the existing design system

Do not capture the URL yet. Read the system first. Figma is the authority — read it directly, do not substitute token-map.md.

**Variables:**
```
get_variable_defs — fileKey: [from URL]
```
Extract every variable name, type, and value.

**Components:**
```
get_metadata — fileKey: [from URL]   (no nodeId → page list)
```
Resolve the Components page node id (W4), then:
```
get_metadata — fileKey: [from URL], nodeId: [Components page id]
```
List every component: name, category, variants present.

**Confirm selection:** if variables = 0 AND components = 0, stop and switch to `figma-furl-new-sandbox`.

**Cross-reference token-map.md:** open `_config/design-system/token-map.md` and compare against the live variable collection. If out of sync, flag the discrepancy in the completion report but do not stop. The live Figma collection is the authority.

---

### Step 3 — Ingest the URL (capture) and map against the system

Follow Section B and W3 (reachability + Playwright check, then capture).

During inventory, map every visual element against the existing system:
- **Each color:** does a variable cover it? Note the name, or flag a token gap.
- **Each type combination:** does a text style cover it? Note the name, or flag a gap.
- **Each structural/interactive element:** does a component cover it (use `search_design_system`)? Note the component + needed variant, or flag a new component needed.

Complete this mapping before building anything.

---

### Step 4 — Resolve gaps (use_figma)

Load `figma-use` first (W1). For each gap:

**New color variable:** confirm it is genuinely new (not a near-match that should be reused). If new, create it in the existing collection using the existing naming convention. Do not create a new collection. Do not modify existing variable values (E4).

**New text style:** confirm genuinely new. If new, create using the existing `type/[role]/[size]` convention.

**New component:** follow Section C — `search_design_system` first, reuse if matched; otherwise build on the Components page from existing atoms, all five states (Sandbox run), properties populated.

Resolve all gaps before Step 5.

---

### Step 5 — Build the page on the Sandbox page (use_figma)

Resolve the Sandbox page node id (W4). Via `use_figma`:

1. Frame at the appropriate viewport (Desktop 1440px unless clearly mobile-first).
2. Each section as a named Auto Layout frame (Section A).
3. Every element placed as a component instance — existing components reused, new ones from Step 4.
4. All colors → variables; all type → text styles. No raw values.
5. Name every layer (A6).
6. Refine against the capture via `get_screenshot`, then delete the capture reference (W3 step 5).

---

### Step 6 — Update token-map.md if new tokens were added (drift detection)

This pause is intentional and only fires when Step 4 added new tokens, and only after the Figma build is already persisted — the expensive artifact is safe before any wait.

If new tokens were added:

```
Run the sync-figma-token skill from _config/design-system/sync-figma-token.md.

Figma file URL: [the file]

token-map.md is populated — run drift detection. If running unattended, write the proposed map to token-map.proposed.md and continue; otherwise show the diff and wait for confirmation before overwriting token-map.md.
```

If Step 4 added no new tokens, skip this step.

---

### Step 7 — Completion report

Produce the Section D report. Print it to the chat.

---

## What this skill does NOT do

- Does not write to any Production page (E1)
- Does not modify existing variable values — only adds new ones (E4)
- Does not modify existing component structures — only adds variants or new components
- Does not publish the library (E3)
- Does not overwrite token-map.md without drift handling (proposed-file when unattended, confirmation when interactive)
- Does not use token-map.md as the variable source — Figma is read directly
