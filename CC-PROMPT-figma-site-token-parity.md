# CC PROMPT — SCDS: bring Figma (variables AND screens) and brand.shokunincrafthouse.com to parity with `tokens/`

> Paste everything below this line into Claude Code, running in the **primary checkout** of
> `~/Projects/shokunin-crafthouse/shokunin-brand-identity` (on `main`, clean, pulled — #42/#44).
> One session should finish it; if it does not, `SESSION-RESUME.md` (#50, #164) carries the
> step table from the first write onward.

---

You are running a parity pass for The Shokunin Crafthouse design system. EXECUTE FIRST applies:
do the work, report what landed, never hand me steps. Two HUMAN GATES are marked; stop at
those and nowhere else.

## Why this exists — the trigger, verbatim

On 2026-09-18 Levi screenshotted the **Error** swatch card in the SCDS Figma file
(`0zVoxaLJQkjHENYJlQk1VT`, node `18-4`). It prints **L 7F1D1D / D 732020**.
`tokens/primitives.json` has carried `color.status.error.dark = #DD4C4C` since the
2026-07-25 audit (P0-4: `#732020` measures 1.79:1 on `dark.surfacePage`, unreadable), and that
file's own note says the Figma **variable** was fixed the same day (VariableID:2:52).

So the variable moved and the **screen that documents it did not**. A documentation frame is a
second source (#178, #34): it reads as authoritative and is wrong. Nobody has checked how many
of them there are, in Figma or on the site. That is the whole job.

## Decisions already made (do not re-litigate)

1. **`tokens/*.json` is the source of truth for every value it carries** (WORKSPACE §4: the
   token file, not Figma). Where `CC-PROMPT-scds-pipeline.md` §Decisions 3 says Figma is the
   source for what it can represent, read the repo's `decisions/decisions.md` for which ADR
   governs today, cite it in your report, and **do not resolve a disagreement between JSON and
   Figma by picking a direction yourself** — list it and stop at Gate 1.
2. `color/status/error/dark` is `#DD4C4C`. Studio PM consumes it as `SCDS.Color.statusError`
   (studio-pm ADR-060, 2026-09-18). Not open.
3. `motion/easing/*` is a code-only tier (audit §4a). Absent from Figma is not drift.
4. Nothing merges in this session. Land every change by PR; merge authority is Levi's
   (ADR-018/029, #43).

## REQUIRED INPUTS

- SCDS Figma file: `0zVoxaLJQkjHENYJlQk1VT`
  (https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/). The Figma MCP must be connected;
  if it is not, stop and say so — this job cannot run on a stale export.
- The live site: `https://brand.shokunincrafthouse.com/` and its `/tokens.css`.
- `SCDS-AUDIT-2026-07-25.md` — read in full first. It has node IDs and variable IDs; do not
  re-derive them.

## Phase 0 — Preflight (no writes)

1. `git status` shows `main`, clean, pulled, primary checkout (no `.claude/worktrees/` in the
   path). Cut `chore/figma-site-token-parity` from `origin/main` **with an empty commit**
   (#239).
2. `npm run tokens:build && npm run tokens:verify && npm run tokens:swift:check` all exit 0.
   Record the hashes of `tokens/primitives.json` and `tokens/semantic.json` — every table
   below is stamped with them.
3. Write `SESSION-RESUME.md` with the five phases as rows.

## Phase 1 — Figma VARIABLES vs `tokens/` (read-only)

For **every** token in both JSON files, both modes: read the Figma variable by ID (audit) or
by name, and produce `output/parity/figma-variables.md`:

| token | mode | JSON | Figma | variable id | verdict |

Verdicts: `match`, `figma-stale` (Figma ≠ JSON), `json-stale` (JSON ≠ Figma — do not assume
which is right; see Decision 1), `missing-in-figma` (allowed only for the code-only tier —
name the tier), `missing-in-json`. Count each. **The count of rows must equal the token count
the generator emits** (`tokens:swift` prints it); a table shorter than that is a table that
skipped something (#173).

## Phase 2 — Figma SCREENS vs the variables (read-only)

This is the phase the trigger is about. Walk every documentation frame in the file that
**prints a value** — swatch cards (like node `18-4`), type specimens with sizes or leading,
spacing rulers, radius and shadow cards, motion cards. For each printed value, resolve the
variable it documents and compare. Produce `output/parity/figma-screens.md`:

| frame | node id | printed | variable | variable value | verdict |

Also record whether the frame's fill/text is **bound** to the variable or hard-set. A card
whose swatch is bound but whose caption is typed by hand is exactly how `D 732020` survived a
variable fix — say so per card. The Error card is row one; the report is not done until every
value-printing frame in the file is a row.

## Phase 3 — the SITE vs `tokens/` (read-only, at the destination)

Verify at the destination, never the build (#45, #235, #237):

1. `curl -sS https://brand.shokunincrafthouse.com/tokens.css` — diff against the freshly built
   `src/styles/tokens.css`. Byte-identical or list every differing custom property.
2. Open the live site in a real browser (Playwright MCP or the in-app browser — a bot
   checkpoint reads as an empty page, #235). Every section that **prints** a token value
   (colour cards, type scale, spacing, radius, motion) is read as a visitor and compared to
   JSON. Produce `output/parity/site.md` with the same columns as Phase 2, plus the source
   file that renders the value (`src/sections/...`) and whether it reads `--sc-*` or a
   literal. A literal that matches today is still a second source — file it.
3. `grep -rnE "#[0-9A-Fa-f]{6}\b|732020" src/` — any hex outside `tokens/` and the generated
   `tokens.css` is a row.

## HUMAN GATE 1 — the three reports, before any write

Stop. Post the three tables' counts and every `figma-stale` / `json-stale` / literal row.
Levi rules on each `json-stale` row (which side is right) and on anything that changes a
value rather than a caption. **Caption-only fixes** (a printed hex that disagrees with a
bound variable) need no ruling — list them as the batch you will apply.

## Phase 4 — apply, in this order

1. **Figma variables** that are `figma-stale`: set them via the Figma MCP (load the
   `figma-use` skill first; it is mandatory before `use_figma`). Re-read each after writing.
2. **Figma screens**: correct every caption to the variable's value and, where a fill or text
   is hard-set, **bind it** to the variable so it cannot drift again (#199 — a fixed caption
   without a binding is a to-do wearing a fix's costume). Re-read each after writing.
3. **Site**: any section that renders a literal is changed to read the `--sc-*` property;
   `tokens.css` is rebuilt; `npm run build` exits 0. No hex leaves `tokens/`.
4. **JSON** changes only for rows Levi ruled `json-stale`; then `tokens:build`, `tokens:verify`,
   `tokens:swift` (the generated Swift file is tracked — commit it), and note in the PR that
   `studio-pm` must re-vendor (`node native/StudioPMTokens/vendor-tokens.mjs`).

Every write is followed by a read of the same thing (#45). Commit per phase, PR from the
branch, **do not merge.**

## HUMAN GATE 2 — before the site deploys

The PR is Levi's to merge; `deploy.yml` deploys `main` to Hostinger. After it lands and
deploys, verify **at the destination again**: `curl` the live `tokens.css` and re-read the
live colour section. Append the post-deploy read to `output/parity/site.md`. Only then is the
site row of the step table `done`.

## Return

`output/parity/README.md`: the three counts (variables, screens, site) before and after, the
list of bindings added in Figma, the PR number, and every row that is still open with who
owns it. Append one entry to `LEARNINGS.md` if a documentation frame drifted for a reason
worth a rule; the candidate sentence is *"a fixed variable is not a fixed system until every
surface that prints its value is bound to it."*
