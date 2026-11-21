# Agent build test (WQ-142 slice 1, ADR-165 decision 1)

## What it measures

How well a fresh agent session builds common branded surfaces with SCDS when it has to find the components itself. Five fixed prompts (`prompts.md`, one named TRAP) are each built by a separate headless session. Each build is scored two ways:

- `drift.mjs` (sc-hygiene): raw hex, off-grid spacing, inline shadows and radii, by rule. The scanned-file count must be above zero or the run is not graded as a pass.
- `count-handbuilt.mjs`: lowercase HTML elements where an SCDS component exists (raw `<button>`, hand-rolled toast wrapper, raw `<svg>` icon). The component list is read from `src/components/` at run time; the matching rules are in the script header.

Plus cost, total tokens and wall seconds per run.

## How to run

- No-docs arm (baseline): `bash evals/agent-build-test/run.sh` runs the five prompts in parallel, each in a throwaway `git worktree add --detach` of `origin/main` under `/tmp`, removed afterwards. Model and effort are pinned (`--model sonnet --effort medium`), tools are `Read,Write,Edit,Glob,Grep` only, MCP is empty. Output goes to `runs/<arm>/p<N>/output/` with a `summary.json` per run.
- Grade: `bash evals/agent-build-test/grade.sh [runs-dir]` writes `results.md` and `results.json` next to the runs. Running it twice gives identical bytes.
- Docs arm (slice 2): run `run.sh 2026-MM-DD-docs` with exactly one change, the `ARM_EXTRA` line in `run.sh`, which points the session at the component docs. Prompts, model, effort, tools, graders and base commit stay as they are. Compare `results.json` of the two arms.

## Rules

- `prompts.md` is frozen once any run exists under `runs/`. Change a prompt and every earlier result is void; add new prompts in a new file instead.
- The counter's rules were refined once after the first no-docs run was read (class words `hint` and `tip` dropped, layout exemption added) because two hits were wrappers or field help text. Any later rule change needs a re-grade of every arm.
- Single sample per prompt per arm. A difference smaller than run-to-run noise proves nothing; repeat before claiming one.

## Result: no-docs vs docs (single sample each, 2026-11-17 and 2026-11-18)

| Arm | Drift findings | Hand-built | Tokens | Cost USD | Seconds |
|---|---|---|---|---|---|
| no-docs | 0 | 2 (P1 TextField, P5 Button) | 2609602 | 2.0493 | 274 |
| docs (`AGENT-INDEX.md` pointer only) | 0 | 2 (same two) | 2400905 | 1.7123 | 232 |

The docs arm changed nothing the test counts: both arms reached Button, Tooltip and Toast on the TRAP prompt unaided, and both hand-built the same help-icon `<button>` as the Tooltip trigger (SCDS has no icon-button). Cost is 16% lower with the index, one sample each, so that is inside run-to-run noise (see Rules). Under ADR-165 consequence "Not yet measured", docs that do not lower the escape-hatch count are an ablation candidate and do not ship as always-loaded text. `AGENT-INDEX.md` and `scripts/scds-component.mjs` stay lookup-only (loaded on demand, never imported into CLAUDE.md).

Docs-arm limits: session tools have no Bash, so the arm points at the generated index only; the `scds-component.mjs` section lookup was built but not exercised by the sessions. The baseline is already near the floor (2 hits in 5 builds), so this prompt set cannot show a gain; a harder set (new prompts file, never an edit of `prompts.md`) is the next step if a gain is still wanted.
