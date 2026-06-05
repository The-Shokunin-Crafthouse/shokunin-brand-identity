# figma-furl-core
## Shokunin Crafthouse — Figma From URL Core Instructions

**Location in project:** `_config/figma-skills/figma-furl-core.md`
**Location in template:** `studio-memory/templates/project-template/_config/figma-skills/figma-furl-core.md`

This file contains the shared build instructions, best practices, write mechanism, and constraints used by all four `figma-furl-*` builder skills. It is never called directly. Each builder skill reads this file in full, then executes its own steps.

---

## SECTION W — Write Mechanism (read before any build step)

Every structured write to Figma in these skills happens through **one tool: `use_figma`**. It runs JavaScript against the Figma Plugin API. `generate_figma_design` does NOT build — it only captures a reference image. Confusing the two is the most common failure. The rules below are mandatory.

### W1 — Load the figma-use skill first

Before the first `use_figma` call in any run, load the `figma-use` guidance: prefer the `/figma-use` skill if available; otherwise read the `skill://figma/figma-use/SKILL.md` MCP resource. Skipping this causes hard-to-debug failures. Pass the skill name in the `skillNames` parameter on `use_figma` calls (e.g. `"figma-use"`, or `"resource:figma-use"` if loaded via the MCP resource).

### W2 — Which tool does what

| Operation | Tool | Notes |
|---|---|---|
| Create a blank Figma file | `create_new_file` | Requires `planKey`; load `/figma-create-new-file` skill first. Only in `new-*` runs when no file exists. |
| Capture a web URL as a pixel-perfect reference | `generate_figma_design` | Capture only. Output is a throwaway reference layer, deleted after the build. External URLs need Playwright MCP. |
| Create variable collections, variables, text styles | `use_figma` | Plugin API. |
| Create components, variants, properties, instances | `use_figma` | Plugin API. |
| Rename layers, apply Auto Layout, set padding/gap | `use_figma` | Plugin API. |
| Swap a flat layer for a component instance | `use_figma` | Plugin API. |
| Read file structure / page list | `get_metadata` | No `nodeId` → returns page list only. |
| Read a specific node's detail | `get_design_context` / `get_metadata` with `nodeId` | Must resolve the node id first. |
| Read variables | `get_variable_defs` | |
| Screenshot a node | `get_screenshot` | Requires `fileKey` + `nodeId`. |

### W3 — The capture-then-build pattern (how a URL becomes a real Figma file)

`generate_figma_design` and `use_figma` run in parallel for web targets. The sequence:

1. **Ensure a file exists.** In `new-*` runs with no Figma file yet, call `create_new_file` (load `/figma-create-new-file` skill first; supply `planKey`). In all other runs, the Figma file URL is provided.
2. **Capture the URL.** Call `generate_figma_design` with the `fileKey`. For external URLs (Hostinger, Vercel, Bluehost, any non-localhost), Playwright MCP must be connected — it drives the capture. The tool returns a capture handshake (a capture script + a `captureId`); poll until the capture completes. The result is a flat, pixel-perfect reference layer. It is NOT editable structured layers and is NOT the deliverable.
3. **Build with `use_figma`.** Construct the real, tokenized, componentized file via `use_figma` Plugin API calls, using the captured reference as a visual target to match against. Before creating any component, variable, or style, call `search_design_system` and import existing matches (`importComponentByKeyAsync` / `importComponentSetByKeyAsync`) rather than recreating.
4. **Refine against the capture.** Compare the `use_figma` build to the captured reference via `get_screenshot`; correct drift.
5. **Delete the capture.** Remove the `generate_figma_design` reference layer once the build matches. It was scaffolding, not output.

### W4 — Resolving a page to a node id

`get_metadata`, `get_design_context`, and `get_screenshot` have **no `page:` parameter.** To target a named page (Sandbox, Production, Components):

1. Call `get_metadata` with `fileKey` and no `nodeId` → returns the list of top-level pages (guid + name).
2. Match the page by name → take its node id.
3. Pass that node id as `nodeId` in subsequent calls.

Never pass a guessed or empty `nodeId`.

### W5 — Plugin API gotchas (apply on every use_figma call)

- For the font "Inter", the style is "Semi Bold" (with a space), not "SemiBold"; "Extra Bold" not "ExtraBold".
- `figma.currentPage = …` is not supported. Use `await figma.setCurrentPageAsync(page)`.
- `getPluginData` / `setPluginData` are not supported here. Use `getSharedPluginData(namespace, key)` / `setSharedPluginData(...)` with a stable namespace.
- Load all fonts with `figma.loadFontAsync` before setting text.

---

## SECTION A — Figma Best Practices (2025)

These are non-negotiable. Every layer created via `use_figma` must comply. This list is the audit baseline — the `figma-furl-audit` skill checks against it.

### A1 — Auto Layout

- Every frame that contains more than one element uses Auto Layout. No exceptions.
- Direction is set explicitly: horizontal, vertical, or wrap. Never left ambiguous.
- Gap between items uses a token value from the spacing system. Never a raw px number.
- Padding uses token values on all four sides. Asymmetric padding is explicit, not accidental.
- Hug contents is the default for components. Fixed dimensions only when the design requires a specific constraint.
- Fill container is used for elements that should grow with their parent. Never use 100% width manually.
- Min/max width constraints are applied to any element with responsive behavior.
- Nested Auto Layout frames replace any use of absolute positioning unless layering is required (overlays, badges, decorative elements).

### A2 — Components

- Every repeated element is a component. If something appears more than once, it is a component before the second instance is placed.
- Components live on the Components page. Pages that contain the UI contain only instances.
- Components use a clear naming convention: `[Category]/[Name]/[Variant]`. Example: `Button/Primary/Default`.
- Variant properties use sentence case. Values use lowercase. Example: `Size: sm`, `State: hover`.
- Boolean properties for toggling visibility of sub-elements (icon, badge, label). Never duplicate components to show/hide a child.
- Instance swap properties for slots that accept interchangeable content (icons, avatars, illustrations).
- Exposed nested instances are enabled for any sub-component that designers will regularly swap at the instance level.
- No magic numbers. Any fixed value in a component that is not token-derived is a bug.
- Before creating any component, call `search_design_system` and import an existing match if one exists.

### A3 — Variants and Component Properties

- Interactive states are defined as variants within the component: `default`, `hover`, `focus`, `active`, `disabled`. All five, for interactive components, on Sandbox runs. (Production runs apply the Production state rule — see A3-P below.)
- Size variants (sm, md, lg) are defined within the component, not as separate components.
- Component properties panel is populated — do not leave it empty on any publishable component.
- Use a text Component Property for labels so instances can override copy without detaching.
- Variant naming is consistent across all components in the file. If `Button` uses `State=hover`, then `Input` uses `State=hover`, not `Hovered`.

### A3-P — Production state rule (supersedes the "all five always" rule on Production runs)

On a Production run, a static URL render exposes only the `default` state. For Production builds:
- Build the `default` (and any other state directly observable in the capture) to exact spec.
- For interactive states that cannot be verified from the URL alone (hover, focus, active, disabled), create the variant slot but do not invent its styling. Mark it in the completion report under "States to manually add."
- This rule explicitly supersedes A3's "all five, always" for Production runs only. Sandbox runs follow A3 in full.

### A4 — Slots and Composition

- Icon slots use an instance swap property pointing to the icon set component.
- Content slots (for cards, list items, modals) are built as nested Auto Layout frames that accept swapped instances.
- Leading and trailing slots in row-type components use instance swap + boolean visibility so the slot can be empty without breaking layout.
- Never hardcode content into a component that is meant to be dynamic. Every variable text node is a component property.

### A5 — Variables and Tokens

- All colors reference a variable from the local variable collection. Raw hex is prohibited on any layer.
- Typography uses text styles defined in the file. No freehand type settings on any layer.
- Spacing values reference spacing variables. The spacing scale is the project's scale as defined in `_config/design-system/token-map.md` (Spacing section) — read it, do not assume a generic 8pt ladder.
- Variable modes are used for light/dark if the project supports both. A layer that appears in both modes uses a single frame with mode-switched variables, never two overlapping frames.
- Variable naming follows the existing convention in the file exactly. Do not invent new naming patterns.

### A6 — Frames and Layers

- Every page frame uses a device or breakpoint frame preset (Desktop 1440, Mobile 390, etc.) unless the design is explicitly abstract (e.g. a component sheet).
- Layers are named. No `Frame 47`, no `Rectangle 12`, no `Auto layout 1`, no `Vector`. Layer names match what the element is.
- Groups are only used when elements truly belong together without layout logic. If layout logic exists, use Auto Layout instead.
- Clip content is enabled on frames that contain scrollable regions or overflow elements.
- Layer order matches visual stacking order. Bottom layer in the list = back of the canvas.

### A7 — Anti-patterns (never do these)

- Do not detach instances to make a one-off change. Override properties first; create a new variant if the override recurs.
- Do not use absolute positioning inside Auto Layout frames to fake spacing. Fix the layout logic instead.
- Do not create a new component on a canvas page — all component creation happens on the Components page first.
- Do not duplicate a component to show a different state — use variants.
- Do not leave hidden layers in a production frame. Hidden layers are moved to an `_archive` section (see E2 for the single archive rule). They are never deleted.
- Do not use opacity to create color variants. Create a new variable value.
- Do not place text outside of a frame. All text lives inside an Auto Layout frame.
- Do not set fixed height on frames that should grow with content. Use Hug.

---

## SECTION B — URL Ingestion

### B1 — Reading the URL

URL ingestion uses the capture-then-build pattern in W3. Before capturing:

1. Confirm the URL is reachable. If it returns a connection error, report the error and stop. Do not attempt to reconstruct from memory.
2. Confirm Playwright MCP is available if the URL is external (anything that is not localhost). If Playwright is not connected, stop and report that external capture requires Playwright MCP.
3. Identify the page scope. If the URL is a root path (`/`), capture the full page. If it is a sub-path (`/work`, `/studio`), capture only that route.
4. Note any dynamic content (carousels, modals, hover states) that will not be visible in a static capture. List these as **STATES TO MANUALLY ADD** in the completion report.

### B2 — What to capture

Capture the final visual state of the page as rendered:

- Desktop viewport at 1440px unless the URL clearly resolves to a mobile layout.
- All visible sections from top to bottom.
- Navigation in its default (non-scrolled, non-open) state unless instructed otherwise.
- Hero in its loaded state (no skeleton, no loading spinner).

### B3 — From capture to structured build

The `generate_figma_design` capture is a flat reference image, not editable structure. The structured file is built separately with `use_figma` (W3 step 3). When building:

- Build each section of the page (nav, hero, features, footer, etc.) as a named Auto Layout frame.
- All renaming, variable application, Auto Layout, and instance placement are `use_figma` Plugin API operations — not things the capture produces.
- Any color used must reference a variable; if a color is not in the collection, flag it as a token gap (do not apply raw hex).
- Any repeated element (card, list item, nav link) is placed as a component instance — never a duplicated flat layer.
- After the build matches the capture (verified via `get_screenshot`), delete the capture reference layer.

---

## SECTION C — Component Creation

### C1 — When to create a new component

Create a new component when:
- The element appears more than once on the page being built.
- The element is interactive (it has states).
- The element is a structural pattern (card, row, pill, badge, input, button).

Do not create a new component when:
- The element is a one-off decorative or layout frame with no recurrence.
- `search_design_system` returns an existing component that covers the need with a variant or property override — import and reuse it instead.

### C2 — New component process

1. Call `search_design_system` for an existing match. If found, import it (`importComponentByKeyAsync` / `importComponentSetByKeyAsync`) and reuse — do not recreate.
2. If an existing component covers it with a variant: add the variant via `use_figma`. Do not create a second component.
3. If no existing component covers it: create it on the Components page via `use_figma`. Build it complete — for Sandbox runs all five states; for Production runs per A3-P. Populate all properties. Do not create a partial component and return to it later.
4. Check the variable collection for all token values used in the new component. If any value is not yet a variable, create the variable first, then apply it.
5. Place an instance of the new component on the page being built. Never the master component.
6. Report every new component created in the completion report.

### C3 — Atoms first

New components are built from existing atoms where possible. An atom is the smallest component in the system: icon, label, avatar, tag, dot indicator. If a new component needs an icon slot, it uses the existing icon component as a nested instance — not a raw SVG.

---

## SECTION D — Completion Report

After every builder skill run, produce this report and print it to the chat before stopping.

```
## Figma Build Completion Report
**Skill:** [which figma-furl-* skill was run]
**URL ingested:** [URL]
**Target page:** [Sandbox or Production]
**Date:** [date]

### Pages touched
- [list every Figma page written to]

### Layers created
- [count of top-level section frames]
- [count of component instances placed]
- [count of new components created on Components page]

### New components created
| Component Name | Category | Variants Added | Atoms Used |
|---|---|---|---|

### Token gaps found
Variables that were needed but did not exist in the variable collection.
These must be resolved before this design is used as a code reference.

| Token Type | Value Found | Suggested Token Name |
|---|---|---|

### States to manually add
Interactive or dynamic states not captured in the static render.

- [ ] [list each one]

### Rule violations found and corrected
Any A1–A7 violation caught and fixed during the build.

- [list each one, or "None"]

### Capture cleanup
- [ ] generate_figma_design reference layer deleted after build matched

### Unresolved issues
Anything that requires Levi's decision before it can be resolved.

- [list each one, or "None"]
```

---

## SECTION E — Constraints

These apply to every builder run regardless of mode.

- **E1 — Page boundary.** Claude never touches the Sandbox page in a Production-mode run, and never touches the Production page in a Sandbox-mode run.
- **E2 — No deletion; single archive rule.** Claude never deletes existing layers. If a layer conflicts with new work or is a stale hidden layer, it is moved to an `_archive` section at the bottom of **the page where that layer lives** (a Sandbox layer archives on Sandbox, a Components-page layer archives on the Components page, a Production layer archives on Production). This is the one archive rule; it overrides any other archive-location wording elsewhere. Every archive action is noted in the completion report. The single exception is the `generate_figma_design` capture reference, which is created by this workflow and deleted by it per W3 step 5.
- **E3 — No publish.** Claude never publishes the library from inside a skill run. Publishing is Levi's action.
- **E4 — No mutation of existing variables.** Claude never changes existing variable values. It may add new variables. It may not modify or rename existing ones.
- **E5 — Fail loud, never silent.** If the URL is unreachable, Playwright is missing for an external capture, or a step cannot complete due to missing information, stop at that step and report what is missing. Do not skip steps and continue with assumptions.
