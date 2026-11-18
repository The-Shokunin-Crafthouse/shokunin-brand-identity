#!/usr/bin/env bash
# Grade an arm: drift.mjs + count-handbuilt.mjs over each run's output/.
# Usage: grade.sh [runs-dir]   default: runs/2026-11-17-nodocs
# Writes results.md and results.json into the runs dir. Deterministic: no
# timestamps, no elapsed times, sorted keys; same inputs give identical bytes.
# DRIFT overrides the drift.mjs path; the repo at the grader's checkout supplies
# src/components/ for the hand-built counter.
set -eu
HERE="$(cd "$(dirname "$0")" && pwd)"
RUNS="$(cd "${1:-$HERE/runs/2026-11-17-nodocs}" && pwd)"
export DRIFT="${DRIFT:-/Users/bahnfiya/.shokunin/runner-worktrees/night-runner-2026-11-17/plugins/sc-hygiene/skills/sc-hygiene/scripts/drift.mjs}"
exec node "$HERE/grade.mjs" "$RUNS" "$HERE/count-handbuilt.mjs" "$(cd "$HERE/../.." && pwd)"
