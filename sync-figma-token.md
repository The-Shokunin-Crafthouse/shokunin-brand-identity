# /sync-figma-token
## Shokunin Crafthouse Design Token Sync Skill

**Location in project:** `_config/design-system/sync-figma-token.md`
**Location in template:** `studio-memory/templates/project-template/_config/design-system/sync-figma-token.md`

This skill reads the Figma Sandbox page, extracts all design tokens, and syncs them to `_config/design-system/token-map.md`. On first run it does a clean extraction. On subsequent runs it performs drift detection — surfaces what changed before overwriting.

---

## When to run this skill

| Trigger | Mode |
|---|---|
| Brand system approved for the first time (Step 7C) | Clean extraction — no existing token-map.md |
| You've changed colors, type, or spacing in Figma mid-project | Drift detection — token-map.md exists |
| Evaluator flags a token mismatch between Figma and code | Drift detection |

---

## How to invoke

In Claude Code, paste one of these prompts:

**First-time extraction:**
```
Run the sync-figma-token skill from _config/design-system/sync-figma-token.md.

Figma file URL: [paste Figma file URL]

No existing token-map.md — skip drift detection and do a clean extraction.
```

**Drift detection (token-map.md already exists):**
```
Run the sync-figma-token skill from _config/design-system/sync-figma-token.md.

Figma file URL: [paste Figma file URL]

token-map.md exists — run drift detection before updating. Show me what's changed before overwriting.
```

---

## Step-by-step instructions for Claude

### Step 1 — Read the Figma file

Use the Figma MCP to read the file at the URL provided. Target: **Sandbox page only**. Do not read Brand System, Components, or Production pages.

Extract all of the following:

**Color styles:**
- Token name (exactly as named in Figma — do not rename or slugify)
- Hex value
- Opacity if not 100%

**Text styles:**
- Token name (exactly as named in Figma)
- Font family
- Size in px
- Weight (numeric: 400, 500, 700, etc.)
- Line height in px or %
- Letter spacing in px or em

**Spacing tokens** (if defined as styles or variables):
- Token name
- Value in px

**Component variants** (components defined on the Sandbox page):
- Component name
- Variant property names and their possible values

**Rule:** Do not infer or guess missing values. If a token has no value in the MCP response, mark it as `MISSING — verify in Figma` rather than estimating.

---

### Step 2 — Drift detection (only if token-map.md exists)

Open `_config/design-system/token-map.md` and compare it against the extraction from Step 1.

Report three lists before making any changes:

**ADDED** — tokens present in Figma that are not in token-map.md (new tokens since last sync)

**REMOVED** — tokens present in token-map.md that no longer exist in Figma (deleted or renamed)

**CHANGED** — tokens present in both but with different values (e.g. a color hex changed, a font size changed)

Print this report and stop. Wait for confirmation to proceed with the update. Do not overwrite token-map.md until the user confirms.

If there is no existing token-map.md, skip this step entirely and proceed directly to Step 3.

---

### Step 3 — Write token-map.md

Write the complete, updated token-map.md to `_config/design-system/token-map.md`.

Use this exact format:

```markdown
# Design Token Map — [Project Name]
# Source: Figma Sandbox page
# Last synced: [date]
# Synced by: sync-figma-token skill

---

## Color Tokens

| Token Name | Hex | Opacity | Notes |
|---|---|---|---|
| color-primary-500 | #1A1A2E | 100% | |
| color-surface-base | #FFFFFF | 100% | |

---

## Typography Tokens

| Token Name | Family | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| type-display-xl | "Inter", sans-serif | 72px | 700 | 80px | -0.02em |
| type-body-md | "Inter", sans-serif | 16px | 400 | 24px | 0 |

---

## Spacing Tokens

| Token Name | Value |
|---|---|
| space-4 | 4px |
| space-8 | 8px |

---

## Component Variants

| Component | Variant Property | Values |
|---|---|---|
| Button | size | sm, md, lg |
| Button | variant | primary, secondary, ghost |

---

## Removed Tokens (kept for reference)

Tokens that were in a previous sync but no longer exist in Figma.
Do not use these in code.

| Token Name | Last Known Value | Removed Date |
|---|---|---|
```

**Rules:**
- Token names must match Figma style names exactly — no renaming, no slugification
- No raw hex values may appear in code — only token names
- If a token was in the REMOVED list, move it to the "Removed Tokens" section with a removal date — do not delete it entirely until you confirm it's unused in code
- This file is the single source of truth for all implementation values
- No color, font, or spacing value gets used in code unless it's in this file

---

### Step 4 — Commit and confirm

After writing token-map.md:

```bash
git add _config/design-system/token-map.md
git commit -m "chore: sync design tokens from Figma [date]"
```

Print the commit hash and the first 30 lines of token-map.md so the user can verify the format is correct.

---

## What this skill does NOT do

- Does not read Production, Brand System, or Components pages — Sandbox only
- Does not create or modify Figma styles — the Figma file is read-only in this step
- Does not change any code files — only token-map.md
- Does not rename tokens to a different convention — Figma names are canonical
- Does not make judgment calls about token naming — reports MISSING and stops

---

## Companion skill

After tokens are extracted and code is built, use `generate_figma_design` to sync the Production page in Figma with what shipped. See Section 18 of the Business Runbook for the prompt.
