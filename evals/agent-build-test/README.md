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
