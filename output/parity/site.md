<!-- Phase 3 — brand.shokunincrafthouse.com vs tokens/ -->
# Phase 3 — the SITE vs `tokens/`

**Stamp:** `primitives a3d48b48b21c1e8a` · `semantic 662130988070cb6a`
**Read:** 2026-09-18, live, in a real browser at `https://brand.shokunincrafthouse.com/`
**Verified at the destination, never the build** (#45, #235, #237).

Not a bot checkpoint: the page returned `200`, `title` = *Shokunin Crafthouse · Component
Primitives*, six `h2` headings and 5,098 characters of body text.

## 1. Live `tokens.css` vs the fresh build

```
curl -sS https://brand.shokunincrafthouse.com/tokens.css   →  200 · 41,650 bytes · text/css
diff <live> <src/styles/tokens.css after npm run tokens:build>  →  0 lines
```

**Byte-identical.** Zero differing custom properties. The deployed stylesheet is the
stylesheet `tokens/*.json` generates today.

## 2. Every value-printing section, read as a visitor

All 22 routes were walked in the live page and every text node matching a value
shape was collected — 22 of 22 visited, none sampled.

| route | value-printing nodes | renders from | verdict |
|---|---|---|---|
| `#color` | 62 | `--sc-*` via probe | `match` |
| `#type` | 37 | `--sc-*` via probe | `match` |
| `#spacing` | 56 | `--sc-*` via probe | `match` |
| `#motion` | 17 | `--sc-*` via probe | `match` |
| `#mark` | 6 | `--sc-*` via probe | `match` |
| `#button` | 30 | `--sc-*` via probe | `match` |
| `#badge` | 22 | `--sc-*` via probe | `match` |
| `#card` | 20 | `--sc-*` via probe | `match` |
| `#input` | 30 | `--sc-*` via probe | `match` |
| `#alert` | 28 | `--sc-*` via probe | `match` |
| `#switch` | 26 | `--sc-*` via probe | `match` |
| `#avatar` | 18 | `--sc-*` via probe | `match` |
| `#progress` | 42 | `--sc-*` via probe | `match` |
| `#tooltip` | 16 | `--sc-*` via probe | `match` |
| `#divider` | 10 | `--sc-*` via probe | `match` |
| `#navbar` | 22 | `--sc-*` via probe | `match` |
| `#segmented-control` | 24 | `--sc-*` via probe | `match` |
| `#stepper` | 31 | `--sc-*` via probe | `match` |
| `#specimen` | 6 | `--sc-*` via probe | `match` |
| `#register` | 6 | `--sc-*` via probe | `match` |
| `#density` | 11 | `--sc-*` via probe | `match` |
| `#hard-rules` | 5 | `--sc-*` via probe | `match` |

**Source files.** Two renderers print every value on the site:

- [`src/sections/ColorSection.jsx`](../../src/sections/ColorSection.jsx) — states outright
  *"No hex literal appears in this file"*, then resolves each swatch by setting
  `probe.style.color = var(--sc-…)` and reading `getComputedStyle`.
- [`src/sections/_kit/ComponentPage.jsx`](../../src/sections/_kit/ComponentPage.jsx) —
  `resolveOne(probe, token, kind)`, the same trick, for every component token table.

So **no printed value on this site is a literal, and none is transcribed.** Every figure
is the computed value of the `--sc-*` property it names, read at render time. There is no
caption on this site that can drift from its token, because there is no caption — only a
readout.

## 3. Hex sweep of `src/`

```
grep -rnE '#[0-9A-Fa-f]{6}\b' src/  (excluding the generated tokens.css and src/swift/)
→ 1 hit
```

| file | line | text | verdict |
|---|---|---|---|
| `src/components/CODE-CONNECT.md` | 95 | prose describing a *Figma-side* binding defect (`#056268` against a `#038e93` label) | **not a row** — Markdown documentation of a Figma bug, not a styling literal; renders nothing |

Short hex (`#abc`) and CSS named colours: **0 hits**. **No hex leaves `tokens/`.**

## 4. Destination assertion on the thirteen tokens Figma has wrong

Read live, in both modes, from the rendered document:

| token | light (live) | dark (live) | matches `tokens/` |
|---|---|---|---|
| `--sc-p-color-status-error-dark` | `#DD4C4C` | `#DD4C4C` | ✓ |
| `--sc-color-status-error` | `#7F1D1D` | `#DD4C4C` | ✓ |
| `--sc-color-border-default` | `#9A9186` | `#2A2A2A` | ✓ |
| `--sc-color-border-subtle` | `#C4BCB4` | `#1A1A1A` | ✓ |
| `--sc-color-border-focus` | `#1F2024` | `#E8E8EA` | ✓ |
| `--sc-p-color-warm-gray-200` | `#D8D1CC` | `#D8D1CC` | ✓ |
| `--sc-p-color-warm-gray-350` | `#9A9186` | `#9A9186` | ✓ |
| `--sc-p-color-warm-gray-500` | `#5A5750` | `#5A5750` | ✓ |
| `--sc-color-text-tertiary` | `#6B665E` | `#858583` | ✓ |
| `--sc-color-status-info-ink` | `#2D5AD8` | `#517DF3` | ✓ |
| `--sc-color-status-warning-ink` | `#B83E0B` | `#DC5A33` | ✓ |
| `--sc-color-status-success-ink` | `#28724D` | `#3C9366` | ✓ |
| `--sc-color-brand-accent-ink` | `#056268` | `#1C9DA2` | ✓ |

13 of 13 correct. **Every token the Figma file gets wrong, the live site gets right.**

## Result

**The site has nothing to fix.** Zero stale values, zero literals, zero second sources.
Phase 4 step 3 is a no-op and Phase 4 step 4 has no rows to apply.

## Post-deploy read (HUMAN GATE 2)

Not applicable to this pass — no site change is proposed, so there is nothing to
re-verify after a deploy. If Gate 1 rules any `tokens/*.json` row, this section gets
the post-deploy `curl` and live colour re-read appended then.
