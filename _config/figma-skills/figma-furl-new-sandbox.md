---
name: figma-furl-new-sandbox
description: >
  Translate a live URL into a Figma Sandbox page when no design system exists yet.
  Builds the design system from scratch using what is found in the URL, then places
  the page layout as instances on the Sandbox page. Use when you want to explore or
  iterate on a design that does not yet have an established Figma system. Sandbox =
  exploration, not locked. Trigger when asked to "build figma from url", "create a
  figma file from this link", "replicate this in figma", "turn this into a figma design"
  and the Figma file has no variables and no components yet.
---

# figma-furl-new-sandbox
## Shokunin Crafthouse — Figma From URL (New Design System → Sandbox)

**Location in project:** `_config/figma-skills/figma-furl-new-sandbox.md`
**Mode:** No existing design system. Target page: Sandbox.
**Core instructions:** `_config/figma-skills/figma-furl-core.md` — read all sections (W, A, B, C, D, E) before proceeding.

---

## When to use this skill

Selection is based ONLY on live Figma state — never on whether `token-map.md` exists. The template ships a populated `token-map.md` scaffold, so its presence says nothing about whether the Figma design system has been built.

| Signal (live Figma state) | Detail |
|---|---|
| `get_variable_defs` returns 0 variables | No variable collection has been built |
| Components page contains 0 components | No components built yet |
| You are in design exploration mode | Changes are not locked — Sandbox is the right target |

If `get_variable_defs` returns 1 or more variables OR the Components page contains 1 or more components, stop and use `figma-furl-sandbox` instead.

---

## How to invoke

In Claude Code or claude.ai project chat:

```
Run the figma-furl-new-sandbox skill from _config/figma-skills/figma-furl-new-sandbox.md.

URL: [paste the URL — localhost, staging, or production]
Figma file URL: [paste the Figma file URL, or say "none — create one"]
Figma plan key: [team::… or organization:: — required only if creating a new file]
```

---

## Step-by-step instructions for Claude

### Step 1 — Read the core file

Read `_config/figma-skills/figma-furl-core.md` in full. Sections W (write mechanism), A, B, C, D, E all apply. In particular, all structured writes use `use_figma` per Section W — `generate_figma_design` only captures.

---

### Step 2 — Confirm no design system exists (live Figma state only)

If a Figma file URL was provided, resolve its `fileKey` and check live state:

```
get_variable_defs — fileKey: [from URL]
```
If this returns 1 or more variables: stop, report what was found, tell Levi to use `figma-furl-sandbox` instead.

```
get_metadata — fileKey: [from URL]   (no nodeId → returns page list)
```
Resolve the Components page node id from the page list (Section W4), then:
```
get_metadata — fileKey: [from URL], nodeId: [Components page id]
```
If the Components page contains 1 or more components: stop, report, tell Levi to use `figma-furl-sandbox` instead.

Proceed only if variables = 0 AND components = 0. "Near-empty" is not a category — the threshold is exactly zero of each.

If no Figma file URL was provided, there is by definition no design system — proceed to Step 3, creating the file in Step 5.

---

### Step 3 — Ingest the URL (capture)

Follow Section B and W3. Confirm reachability and (for external URLs) Playwright MCP availability before capturing.

Document every distinct visual element found from the capture and the live page:
- Color values (every unique hex or rgba)
- Typography (every unique family / size / weight / line-height combination)
- Spacing patterns (gaps, padding values that repeat)
- Interactive elements (buttons, links, inputs, toggles)
- Structural patterns (cards, rows, list items, nav links) — these become components

This step is inventory plus a capture reference. No structured Figma layers are built yet.

---

### Step 4 — Build the variable collection (use_figma)

Load the `figma-use` skill first (W1). All creation below is `use_figma` Plugin API.

Read `_config/design-system/token-map.md` (Spacing section) for the project's spacing scale before creating spacing variables. Do not assume a generic 8pt ladder — use the project scale.

Create a new local variable collection named `Design System`.

**Color variables:**
- Group by role: `color/primitive/`, `color/semantic/`, `color/surface/`
- Name by role, not hex. Example: `color/surface/base`, `color/interactive/primary`, `color/text/body`.
- If a color's role is ambiguous, name it at the primitive level (`color/primitive/slate-900`) and apply its semantic name in this same step once the section it appears in makes the role clear. Do not defer to a later step.
- Every unique color found in Step 3 gets a variable. No raw hex remains on any layer.

**Typography (text styles):**
- Create a text style for every unique type combination found.
- Naming: `type/[role]/[size]`. Example: `type/display/xl`, `type/body/md`, `type/label/sm`.
- Set all five properties: family, size, weight, line-height, letter-spacing.

**Spacing variables:**
- Use the project spacing scale from `token-map.md`.
- If the URL uses a spacing value not on the project scale, round to the nearest scale value and note the discrepancy under "token gaps" in the completion report.
- Add only the values actually present in the design.

---

### Step 5 — Build components (use_figma)

If no Figma file existed, create one now: load `/figma-create-new-file` skill, call `create_new_file` with the provided `planKey`, then add the four standard pages (Sandbox, Brand System, Components, Production — …) via `use_figma`.

For every structural and interactive element from Step 3, on the Components page:

1. Call `search_design_system` first; import and reuse any existing match (C2).
2. Otherwise create the component via `use_figma` following Section C.
3. Apply all five interaction states (A3 — this is a Sandbox run, so all five always).
4. Use only variables/text styles from Step 4. No raw values.
5. Name per `[Category]/[Name]/[Variant]`.

Build order: atoms → interactive primitives → content containers → navigation → section-level patterns. Finish all components before Step 6.

---

### Step 6 — Build the page on the Sandbox page (use_figma)

Resolve the Sandbox page node id (W4). Then via `use_figma`:

1. Create a frame at the appropriate device preset. Desktop 1440px unless the URL is clearly mobile-first.
2. Build each section as a named Auto Layout frame (Section A).
3. Every repeated element is placed as a component instance. Never a flat layer.
4. Apply all Auto Layout rules (A1).
5. All colors reference variables; all type references text styles (Step 4).
6. Name every layer (A6).
7. Refine against the capture via `get_screenshot`, then delete the capture reference (W3 step 5).

The Sandbox page represents the design in exploration state — accurate to the URL but not locked.

---

### Step 7 — Sync token-map.md (clean extraction)

Because this is a genuine first build (no variables existed before Step 4), the existing `token-map.md` is an unfilled scaffold. Run the sync skill in clean-extraction mode:

```
Run the sync-figma-token skill from _config/design-system/sync-figma-token.md.

Figma file URL: [the file]

token-map.md is an unfilled scaffold (color/type cells blank) — treat as no prior map and do a clean extraction without pausing for drift confirmation.
```

The patched sync skill recognizes an unfilled scaffold and clean-extracts without hanging on a drift prompt.

---

### Step 8 — Completion report

Produce the Section D completion report. Print it to the chat.

---

## What this skill does NOT do

- Does not write to any Production page (E1)
- Does not modify existing variables — there should be none; if any exist, see Step 2 (E4)
- Does not publish the library (E3)
- Does not delete layers except the capture reference (E2 / W3)
- Does not skip component creation to save time
- Does not select itself based on token-map.md existence — only live Figma state
