# SCDS parity pass — Figma (variables and screens) and the brand site vs `tokens/`

**Branch:** `chore/figma-site-token-parity` · **Date:** 2026-09-18
**Stamp:** `primitives a3d48b48b21c1e8a` · `semantic 662130988070cb6a`
**Preflight:** `tokens:build`, `tokens:verify`, `tokens:swift:check` all exit 0.
116 Swift symbols from 116 semantic tokens.

> **Status: HUMAN GATE 1. Nothing has been written to Figma, to `tokens/`, or to the site.**
> The three reports are below. Phase 4 starts when Levi rules the rows in §4.

---

## Which ADR governs

`CC-PROMPT-scds-pipeline.md` §Decisions 3 says Figma is the source for what it can
represent. `decisions/decisions.md` **2026-08-17 — "token-map.md inverted: generated
mirror, not source of truth"** supersedes that in practice and is the ADR cited here:

> *"`tokens/*.json` is upstream… the authoring surface is `tokens/*.json` plus the Figma
> Primitives collection."*

The precedent is **2026-09-11 — "Button: the Figma library is the stale side; code stands"**,
which settled a Figma-vs-code conflict in code's favour because code implemented a merged
decision and Figma had never received it. **Every one of the 7 value disagreements found
here has that same shape** — see §4. None of them is a genuine two-way question, so the
table carries **`json-stale` 0**, and no row asks Levi to choose a value.

The one live tension worth naming: **2026-08-16 — "Token sync"** contains the sentence
*"Figma is the source of truth for token VALUES"*. Read literally that inverts §4's whole
direction. It is one year-old line inside a sync ADR whose own subject was propagating
Figma→code on a pass that found zero drift, and the 2026-08-17 ADR the next day states the
opposite. **Recommend the 2026-08-16 line be superseded explicitly** rather than left to be
read either way — filed as open row **O-1**.

---

## 1. Counts

| | before | after |
|---|---|---|
| **Variables** — rows compared | 391 | — |
| `match` | 298 | — |
| `figma-stale` | **7** | — |
| `json-stale` | 0 | — |
| `missing-in-figma` | 82 *(73 declared code-only tier, 9 real gaps)* | — |
| `missing-in-json` | 0 | — |
| `documented-exception` | 4 *(`font.family.*`)* | — |
| **Screens** — value captions | 75 | — |
| `match` | 67 | — |
| `caption-stale` | **8** | — |
| **Screens** — alias captions | 60 | — |
| `match` | 56 | — |
| `caption-stale` | **4** | — |
| **Screens** — printed contrast claims | 5 | — |
| supported by measurement | **0** | — |
| **Screens** — captions bound to their variable | **0 of 75** | — |
| **Site** — differing custom properties | **0** | 0 |
| **Site** — literals outside `tokens/` | **0** | 0 |

The variable table's 391 rows equal the token × mode count the emitters enumerate
(159 primitives + 116 semantic = 275 tokens), so nothing was skipped (#173).
All 44 Figma pages were enumerated for Phase 2; the 38 non-foundations pages returned
0 value-printing text nodes, so that table is the population, not a sample.

---

## 2. The trigger, resolved

The Error swatch card (`18:4`, instance `132:41`) prints **`L 7F1D1D` / `D 732020`**.

- The **variable** `color/status/error/dark` (`VariableID:2:52`) reads **`#dd4c4c`** — fixed,
  and equal to `tokens/primitives.json`. Phase 1 marks it `match`.
- The **caption** `D 732020` still prints the value retired on 2026-07-25 for measuring
  1.79:1. Phase 2 marks it `caption-stale`.
- The site prints `#DD4C4C`. Phase 3 marks it correct.

So the premise holds exactly: the variable moved and the screen did not.

**Two things the trigger did not know:**

1. **The Error card's swatch is hard-set, and to the wrong value.** Its three peers bind
   their swatch to `color/status/<hue>/**light**`. The Error swatch is bound to nothing —
   a raw `#dd4c4c` fill, the **dark** hex, sitting where the light one belongs. Someone
   corrected that card by pasting the new hex in rather than binding it. That is #199 —
   a fixed caption without a binding is a to-do wearing a fix's costume.
2. **It is not one card.** 12 captions are stale across the file, and **not one caption in
   the file is bound to anything** — every printed value is hard-typed text.

---

## 3. Reports

| phase | file |
|---|---|
| 1 — Figma variables | [`figma-variables.md`](figma-variables.md) |
| 2 — Figma screens | [`figma-screens.md`](figma-screens.md) |
| 3 — the site | [`site.md`](site.md) |

Regenerate: `node scripts/parity/compare-figma-variables.mjs`,
`node scripts/parity/compare-figma-screens.mjs`. Raw Figma reads in
[`raw/`](raw/). Every table is stamped with the two token hashes.

---

## 4. HUMAN GATE 1 — the rows

### 4a. `figma-stale` — 7 rows, all one shape (needs a ruling only to confirm direction)

Each is a value the code moved on a **dated, merged, logged** decision that Figma never
received. The two dark-mode inks and `text.tertiary` are the same 2026-09-06 re-derivation.

| # | token | mode | `tokens/` | Figma | variable id | why code is current |
|---|---|---|---|---|---|---|
| 1 | `color.dark.textTertiary` | — | `#858583` | `#7c7c7a` | `VariableID:2:43` | ADR 2026-09-06 *"dark `text.tertiary` re-derived to clear AA on the default card ground"* |
| 2 | `color.text.tertiary` | dark | `#858583` | `#7c7c7a` | `VariableID:4:12` | follows #1 |
| 3 | `color.status.info.ink.dark` | — | `#517df3` | `#4a74ea` | `VariableID:211:6` | ADR 2026-09-06 *"the status `*-ink` tiers enter the AA sweep; all three dark inks re-derived"* |
| 4 | `color.status.info-ink` | dark | `#517df3` | `#4a74ea` | `VariableID:211:10` | follows #3 |
| 5 | `color.status.warning.ink.dark` | — | `#dc5a33` | `#d2512a` | `VariableID:211:5` | same ADR |
| 6 | `color.status.warning-ink` | dark | `#dc5a33` | `#d2512a` | `VariableID:211:9` | follows #5 |
| 7 | `color.status.success-ink` | dark | `#3c9366` | `#388f63` | `VariableID:211:8` | same ADR. Figma has no `successInkDark` primitive at all and aliases straight to `status/success/dark`, so this needs the primitive created **and** the alias repointed |

All 7 are guarded by `npm run tokens:verify`, which passes on the code values. Moving
`tokens/` to the Figma values would break AA. **Recommendation: apply Figma-side, no
`tokens/` change.** Ruling needed only to confirm — say *"apply 4a"*.

### 4b. `missing-in-figma`, real gaps — 9 rows (Figma-side additions)

Not composites, so "absent from Figma" is a gap rather than a declared tier.

| token | value(s) | what it needs |
|---|---|---|
| `color.status.success.ink.dark` | `#3c9366` | new primitive (see 4a #7) |
| `color.brand.accentInk` | L `#056268` / D `#1c9da2` | new semantic, both modes |
| `motion.cut.duration` | 380 | new semantic (WQ-038) |
| `motion.entrance.duration` | 720 | new semantic (WQ-038) |
| `size.touch-target` | 48 | new semantic (WQ-038) |

The other 73 `missing-in-figma` rows are the declared code-only tiers and need nothing:
50 `font.text.*` typography composites, 19 `motion.easing.*` cubic-beziers, 4 `shadow.*`.

### 4c. `caption-only` — apply without a ruling, 12 rows

Per the prompt these need no ruling. Listed so the batch is visible.

**Value captions (8)** — all on page `18:4`:

| node | prints | should print | note |
|---|---|---|---|
| `129:21` | `D9D6D2` | `D8D1CC` | warmGray/200 — P2-8 ramp rebuild, 2026-07-28 |
| `129:25` | `D5D2CF` | `C4BCB4` | warmGray/250 — same |
| `129:29` | `CDCAC7` | `B0A69C` | warmGray/300 — same |
| `129:33` | `C5C2BF` | `9A9186` | warmGray/350 — same |
| `129:38` | `9A9388` | `847C71` | warmGray/400 — same |
| `129:46` | `5F5C55` | `5A5750` | warmGray/500 — same |
| `I132:41;84:13` | `D 732020` | `D DD4C4C` | **the trigger** |
| `84:13` | `D 6EE7B7` | `D 388F63` | StatusTile **master** default — a value retired before the status rebuild |

**Alias captions (4)** — the *Semantic — Light / Dark* table:

| node | mode | prints | actual alias | note |
|---|---|---|---|---|
| `134:108` | Light | `warmGray/250` | `warmGray/350` | `border/default` — **swapped with `border/subtle`**; the 2026-07-28 Block 2 swap never reached the caption |
| `134:112` | Light | `warmGray/350` | `warmGray/250` | `border/subtle` — the other half of the swap |
| `134:120` | Light | `teal/500` | `focusRing/light` | `border/focus` — stale since the dedicated off-brand focus-ring token (ADR 2026-06-22, learning #32) |
| `134:270` | Dark | `teal/500` | `focusRing/dark` | same |

### 4d. Bindings to add — 31 frames

31 of 75 value-printing frames do not sit beside a bound swatch: 17 on Space, 7 on Motion,
the 4 StatusTile instances' hard-set/partial swatches, the StatusTile master, and the Error
swatch. **Every** one of the 75 captions is hard-typed regardless. Correcting the text
without binding leaves the exact mechanism that produced the trigger (#199), so Phase 4
step 2 binds the swatch fills and the two hard-set Error/master fills.

Figma has no variable type for text **content**, so a caption cannot be bound to its value.
That is a real platform limit, and it means captions will drift again. **The durable fix is a
checker, not a correction** — filed as open row **O-2**.

### 4e. NEEDS A DECISION — the printed contrast claims (5 rows)

The four StatusTile cards and the master each print an `AA n : 1` figure. **None matches a
measurement, in either mode, and no card states which ground it means.**

| card | node | prints | measured on light page ground | measured on dark page ground |
|---|---|---|---|---|
| Success | `I132:5;84:7` | `AA 4.5 : 1` | **3.69** | 4.82 |
| Warning | `I132:17;84:7` | `AA 5.2 : 1` | **4.21** | 4.20 |
| Info | `I132:29;84:7` | `AA 5.9 : 1` | **4.79** | 3.86 |
| Error | `I132:41;84:7` | `AA 10.0 : 1` | **8.15** | 4.76 |
| MASTER | `84:7` | `AA 4.9 : 1` | **3.69** | 4.82 |

Success at 3.69:1 on the light page ground does **not** clear AA for body text — the token's
own `$description` says so. A card labelled `AA` next to a figure that fails AA is worse
than a stale hex; it asserts a guarantee the value does not carry.

This is **not a caption fix**. Deciding what these cards should say — which ground, which
tier, whether the base status hues carry an `AA` label at all when the `-ink` tiers exist
precisely because they do not — is a Gate-1 call. **Blocked on Levi.**

### 4f. No ruling needed — recorded, no action

- **`font.family.*` (4 rows)** — standing exception, re-affirmed: Figma holds the Trial
  names because the licensed faces will not load there; the repo holds the licensed stacks.
  Syncing either way breaks a side.
- **3 naming differences** — `color.text-on-inverse` ↔ `color/text/onInverse`,
  `color.surface-inverse` ↔ `color/surface/inverse`,
  `motion.press.release.duration` ↔ `motion/press/release-duration`. Values identical; the
  code-side rename was deliberately deferred (ADR 2026-07-28 Block 5) because
  `--sc-color-text-on-inverse` has live consumers.
- **`color/divider/*` (6 rows)** — composed from the channel triplet in code, baked hex8 in
  Figma. Composed down and compared: all six alpha steps agree exactly.

---

## 5. Open rows and who owns them

| # | row | owner | state |
|---|---|---|---|
| **O-1** | Supersede the 2026-08-16 line *"Figma is the source of truth for token VALUES"*, which contradicts the 2026-08-17 ADR | Levi | needs an ADR |
| **O-2** | No checker guards a Figma caption. `verify-contrast.mjs` guards figures in `$description` and has no reach into a Figma text node; captions cannot be variable-bound | Levi | needs a decision — see the learning candidate below |
| **O-3** | §4e contrast claims — which ground, which tier | Levi | **blocking Phase 4 on those 5 rows** |
| **O-4** | Radius and shadow have **no documentation page in Figma at all** | Levi | out of this pass's scope; flagged |
| **O-5** | `_Archive` page (`1:7`, 280 text nodes) still in the live library | Levi | pre-existing, carried from `SESSION-RESUME.md` |

## 6. Phase 4, once Gate 1 clears

1. **Figma variables** — 7 value corrections (4a) + 9 additions (4b), each re-read after writing.
2. **Figma screens** — 12 caption corrections (4c) + 31 bindings (4d), each re-read after writing.
3. **Site** — **no-op.** Phase 3 found nothing.
4. **`tokens/*.json`** — **no rows.** `json-stale` is 0, so `studio-pm` does not need to re-vendor.

Nothing merges from this session. PR only; merge authority is Levi's (ADR-018/029, #43).

## 7. Learning candidate

> *A fixed variable is not a fixed system until every surface that prints its value is
> bound to it — and where the platform cannot bind, a checker stands in for the binding.*

The second clause is what this pass adds to the prompt's candidate sentence. Figma **can**
bind a swatch fill and **cannot** bind text content, so on the caption side "bind it" is not
an available fix. The site solved the same problem a third way — it prints no captions at
all, only probe-computed readouts — which is why it has zero drift across 22 routes while
the Figma file has 12 stale captions. Held for `sc-learn` at sprint close.
