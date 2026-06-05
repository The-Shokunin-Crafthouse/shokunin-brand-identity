---
name: figma-furl-audit
description: >
  Audit a Figma file against a live URL to verify 1:1 accuracy, design system
  compliance, and structural quality. Runs independently of the builder skills —
  has no context from the build session. Blocks on failures and requires fixes
  before issuing a PASS. Reports AI slop patterns, structural violations, and
  visual deviations with specific locations and recommended alternatives. Trigger
  when asked to "audit the figma", "check figma against the build", "evaluate
  the figma accuracy", "does figma match what shipped", or after any figma-furl-*
  builder skill completes and you want a quality gate.
---

# figma-furl-audit
## Shokunin Crafthouse — Figma Quality Audit

**Location in project:** `_config/figma-skills/figma-furl-audit.md`
**Runs independently.** Does not read builder session context, WORKSPACE.md, or sprint CONTEXT.md.
**Reference:** `_config/figma-skills/figma-furl-core.md` — Sections A (best practices), B (ingestion), and W4 (node-id resolution). Also reads `_config/design-system/token-map.md` for the project's real spacing scale.

---

## When to run this skill

| Trigger | Detail |
|---|---|
| After any `figma-furl-*` builder skill completes | Verify the build meets quality standards |
| Figma is suspected out of sync with the build | Confirm before using Figma as a code reference |
| Design changes were made manually in Figma | Confirm the file still complies |
| Pre-handoff check before a design goes to Claude Code | Ensure Claude Code receives a clean, accurate file |

---

## How to invoke

```
Run the figma-furl-audit skill from _config/figma-skills/figma-furl-audit.md.

URL: [paste the live URL to compare against]
Figma file URL: [paste the Figma file URL]
Target page: [Sandbox or Production — name the specific page]
```

---

## What this skill checks

Five categories. Each produces findings. Overall result is PASS or FAIL. A single blocking failure in any category = FAIL.

---

## Step-by-step instructions for Claude

### Step 1 — Read the reference material

Read `_config/figma-skills/figma-furl-core.md` Sections A, B, W4. Read `_config/design-system/token-map.md` and extract the project's actual Spacing scale values — these are the allowed spacing values for CHECK 5 Pattern 7. Do not use a hardcoded ladder.

Do not read any sprint CONTEXT.md, WORKSPACE.md, or builder session output. This audit runs blind to the build session by design.

---

### Step 2 — Read the Figma file (resolve node ids first)

Resolve `fileKey` from the Figma file URL.

```
get_metadata — fileKey: [from URL]   (no nodeId → returns page list)
```

From the page list (W4), resolve the node ids for BOTH the **target page** AND the **Components page**. CHECK 4 audits components, so the Components page must be read — not just the target page.

```
get_metadata — fileKey, nodeId: [target page id]
get_design_context — fileKey, nodeId: [target page id]
get_screenshot — fileKey, nodeId: [target page id]
get_metadata — fileKey, nodeId: [Components page id]
get_design_context — fileKey, nodeId: [Components page id]
get_variable_defs — fileKey
```

Capture: full layer tree of the target page, full component list + structure from the Components page, all variable names/values, all text style settings, and a screenshot of the target page.

---

### Step 3 — Read the live URL

Follow Section B to capture the current state of the URL (reachability + Playwright for external URLs). Note every section top to bottom, all colors, all type, all interactive elements in default state, and overall proportions/spacing.

---

### Step 4 — Run the five audit checks

#### CHECK 1 — Visual Accuracy (vs. the URL)

Compare the target-page screenshot against the live URL. Per section, score MATCH / DRIFT / MISSING / EXTRA.

Blocking: any MISSING section; any DRIFT in a primary element (hero, nav, primary CTA); three or more DRIFT findings anywhere.
Non-blocking: minor shadow/gradient/anti-aliasing differences.

#### CHECK 2 — Design System Compliance

Every layer on the target page:
- **Color:** every color references a variable. Flag raw hex. Flag ghost references (variable used but not in the collection).
- **Typography:** every text node uses a named text style. Flag freehand type.
- **Spacing:** all gaps/padding reference spacing variables or fall on the project spacing scale from token-map.md (Step 1). Flag arbitrary values not on that scale.

Blocking: any raw hex; any freehand type on a primary text node; three or more spacing violations.

#### CHECK 3 — Structural Quality

Every frame on the target page:
- **Auto Layout:** every multi-element frame uses it. Flag groups that should be Auto Layout. Flag unresolved values.
- **Components:** every repeated element is an instance. Flag flat duplicated layers. Flag any master component on a canvas page.
- **Naming:** flag every unnamed/auto-named layer (`Frame 47`, `Auto layout 1`, `Vector`, etc.).
- **Hidden layers:** flag any in production frames.

Blocking: any master component on a canvas page; more than three unnamed layers; any repeated element that is a flat layer.

#### CHECK 4 — Component Quality

Uses the Components-page data read in Step 2. For each component used on the target page:
- **State coverage:** verify states exist. On a Sandbox target, expect all five (default, hover, focus, active, disabled). On a Production target, expect `default` plus any state slot the build exposed — per A3-P, unobservable states may be empty slots and are not failures if listed as "to manually add."
- **Property coverage:** properties panel populated; text labels are component properties; icon slots use instance swap.
- **Atom usage:** icon slots use the icon component as a nested instance, not a raw SVG.

Blocking (Sandbox target): any interactive component missing hover or focus. Blocking (any target): any component with zero properties; any raw SVG in an icon slot.

If Step 2 did not successfully read the Components page, CHECK 4 cannot run — report this as a FAIL (cannot verify), not a PASS.

#### CHECK 5 — AI Slop Detection (blocking)

Patterns a skilled designer at Pentagram, Rally, or Clay would reject. Each found pattern is a blocking failure.

1. **Generic proportions** — more than 60% of sections share the same vertical padding value.
2. **Uniform card grids** — every card same size/padding/weight, no hierarchy signal.
3. **Centered everything** — every text block center-aligned.
4. **Gradient abuse** — a gradient not defined as a variable serving no structural purpose.
5. **Detached instances** — more than 10% of instances detached; report the ratio.
6. **Flat color with no token** — any fill not referencing a variable.
7. **Off-scale spacing** — any spacing value not on the project spacing scale read from token-map.md in Step 1. (Do not use a hardcoded list; the project scale is the authority, and the builder rounds to it.)
8. **No typographic hierarchy** — adjacent text nodes within insufficient size contrast (less than the project type scale ratio).
9. **Placeholder naming** — auto-generated layer names (`Group 3`, `Ellipse 2`, `Vector`).
10. **Missing states passed as complete** — an interactive component with only `default` on a Sandbox target (on Production, only blocking if the state was observable in the build and omitted).

For each found: name the pattern, identify the specific layer(s), explain why it is a problem, recommend the specific correction.

---

### Step 5 — Produce the audit report

```
## Figma Audit Report
**Skill:** figma-furl-audit
**URL audited:** [URL]
**Figma file:** [Figma file URL]
**Target page:** [page name]
**Spacing scale source:** _config/design-system/token-map.md ([list the values])
**Date:** [date]

---

## Overall Result: [PASS / FAIL]

[FAIL: "N blocking failure(s) found. Figma file must not be used as a code
reference until all blocking failures are resolved. See findings below."]
[PASS: "All checks passed. Figma is accurate to the build and meets quality standards."]

---

## CHECK 1 — Visual Accuracy — [PASS/FAIL]
| Section | Status | Notes |
|---|---|---|
Blocking failures: [list or None]

## CHECK 2 — Design System Compliance — [PASS/FAIL]
Raw hex: [layer — value — suggested variable]
Freehand type: [layer — settings]
Spacing violations: [layer — value — nearest scale value]
Blocking failures: [list or None]

## CHECK 3 — Structural Quality — [PASS/FAIL]
Auto Layout / Component / Naming / Hidden-layer violations: [lists or None]
Blocking failures: [list or None]

## CHECK 4 — Component Quality — [PASS/FAIL]
| Component | Missing States | Missing Properties | Raw SVG |
|---|---|---|---|
Components page read: [YES / NO — if NO, result is FAIL]
Blocking failures: [list or None]

## CHECK 5 — AI Slop Detection — [PASS/FAIL]
### [Pattern Name]
Where: [layer(s)]
Why this is a problem: [explanation]
Recommended correction: [fix]
Total slop patterns found: [N]
Blocking failures: [list or None]

---

## Required Fixes Before PASS
[Only if FAIL.]
| # | Check | Location | Required Action |
|---|---|---|---|

After all fixes, re-run this audit to confirm PASS.
```

---

## What this skill does NOT do

- Does not modify the Figma file — read only
- Does not read sprint context or session history — runs blind by design
- Does not issue a PASS with unresolved blocking failures
- Does not issue a PASS if the Components page could not be read (CHECK 4 unverifiable = FAIL)
- Does not use a hardcoded spacing scale — reads the project scale from token-map.md
- Does not make subjective aesthetic judgments beyond the defined slop patterns
- Does not skip any of the five checks — all five run every time
