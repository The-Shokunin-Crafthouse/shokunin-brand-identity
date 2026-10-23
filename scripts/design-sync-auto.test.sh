#!/bin/bash
# ============================================================
# design-sync-auto.test.sh — hermetic tests for design-sync-auto.sh.
#   bash scripts/design-sync-auto.test.sh
# ============================================================
# Runs the real script against a synthetic origin, a synthetic checkout, a
# scratch state directory and a STUB `claude` that only writes the files a
# real run would write. No agent starts, nothing leaves the temp directory,
# no text is sent (the pending directory is scratch too).
#
# What it proves: the gates, the baseline, the failure memo, the hold, the
# worktree guard, the watchdog, and the artifact check on the agent's result.
# What it cannot prove: that a real agent follows the prompt, or that bypass
# mode clears the upload approval. Only a live first run shows those.
set -uo pipefail

HERE="$(cd "$(dirname "$0")" && pwd)"
SCRIPT="$HERE/design-sync-auto.sh"
T="$(mktemp -d "${TMPDIR:-/tmp}/design-sync-auto-test.XXXXXX")"
trap 'rm -rf "$T"' EXIT

PASS=0
FAIL=0
ok(){   # args: <name> ; reads the exit code of the previous command
  if [ "$1" = 0 ]; then PASS=$(( PASS + 1 )); printf '  ok    %s\n' "$2"
  else FAIL=$(( FAIL + 1 )); printf '  FAIL  %s\n' "$2"; fi
}
check(){ local name="$1"; shift; "$@" >/dev/null 2>&1; ok "$?" "$name"; }

G="git -c user.name=test -c user.email=test@example.test -c commit.gpgsign=false"

# ---- synthetic origin + checkout -------------------------------------------
git init -q --bare -b main "$T/origin.git"
git init -q -b main "$T/seed"
mkdir -p "$T/seed/src/components/Button" "$T/seed/.design-sync" "$T/seed/scripts" "$T/seed/tokens"
printf 'ds-bundle/\n' > "$T/seed/.gitignore"
printf 'export function Button() {}\n' > "$T/seed/src/components/Button/Button.jsx"
printf '{ "projectId": "test-project" }\n' > "$T/seed/.design-sync/config.json"
printf 'notes\n' > "$T/seed/.design-sync/NOTES.md"
printf 'readme\n' > "$T/seed/README.md"
printf 'stub prompt\n' > "$T/seed/scripts/design-sync-auto.prompt.md"
( cd "$T/seed" && $G add -A && $G commit -q -m seed && git remote add origin "$T/origin.git" && git push -q origin main )
git clone -q "$T/origin.git" "$T/repo"

push(){   # args: <path> <content> ; commits one change to origin/main
  mkdir -p "$(dirname "$T/seed/$1")"
  printf '%s\n' "$2" >> "$T/seed/$1"
  ( cd "$T/seed" && $G add -A && $G commit -q -m "change $1" && git push -q origin main )
}
head_sha(){ git -C "$T/seed" rev-parse HEAD; }

# ---- stubs -----------------------------------------------------------------
mkdir -p "$T/bin" "$T/stub" "$T/state" "$T/pending"
cat > "$T/bin/claude" <<'STUB'
#!/bin/bash
# Stub agent. cwd is the sync worktree. Writes what a real run would write.
echo x >> "$STUB_DIR/calls"
# argv: -p <prompt> --model ... ; keep the prompt's first line for the test.
printf '%s\n' "$2" | head -n 1 > "$STUB_DIR/prompt-head"
printf '%s\n' "$*" > "$STUB_DIR/argv"
printf '%s\n' "${HARNESS_ROOTS:-unset}" > "$STUB_DIR/env-roots"; printf '%s\n' "${HARNESS_RESUME_FILE:-unset}" > "$STUB_DIR/env-resume"
mode="$(cat "$STUB_DIR/mode" 2>/dev/null || echo synced)"
sha="$(git rev-parse HEAD)"
verdict(){ mkdir -p ds-bundle; printf '{\n  "ok": true\n}\n' > ds-bundle/.resync-verdict.json; }
result(){ printf '{\n  "sha": "%s",\n  "status": "%s",\n  "components": "%s",\n  "pr": "%s",\n  "note": "%s"\n}\n' "$1" "$2" "$3" "$4" "$5" > "$DS_RESULT_FILE"; }
case "$mode" in
  synced)            verdict; result "$sha" synced "Button" "" "stub upload" ;;
  no-change)         verdict; result "$sha" no-change "" "" "already matched" ;;
  synced-no-verdict) result "$sha" synced "Button" "" "claims an upload, wrote no verdict" ;;
  crash)             echo "boom: stub crash"; exit 1 ;;
  silent)            exit 0 ;;
  pr)                result "$sha" pr-opened "" "https://example.test/pr/7" "new component needs a preview" ;;
  needs-human)       result "$sha" needs-human "" "" "chromium is missing" ;;
  dirty)             verdict; echo stray > stray.txt; result "$sha" synced "Button" "" "left a file behind" ;;
  wrong-sha)         verdict; result "0000000000000000000000000000000000000000" synced "Button" "" "wrong commit" ;;
  hang)              exec sleep 120 ;;
esac
exit 0
STUB
cat > "$T/bin/gh" <<'STUB'
#!/bin/bash
# Stub gh: prints the open PR head branches the test planted, if any.
cat "$STUB_DIR/open-prs" 2>/dev/null
exit 0
STUB
chmod +x "$T/bin/claude" "$T/bin/gh"
# The harness kit (studio-memory templates/harness/); the stub never runs it, so stand-ins do.
mkdir -p "$T/kit"; printf '# guard\n' > "$T/kit/guard.py"; printf '# checkpoint\n' > "$T/kit/checkpoint.py"
settings_of(){ sed -n 's/.*--settings \([^ ]*\).*/\1/p' "$T/stub/argv"; }

run(){
  DS_REPO_DIR="$T/repo" DS_STATE_DIR="$T/state" PENDING_DIR="$T/pending" \
  CLAUDE_BIN="$T/bin/claude" DS_GH_BIN="$T/bin/gh" STUB_DIR="$T/stub" \
  DS_TIMEOUT_SECS="${TIMEOUT:-60}" DS_REMOTE="${REMOTE_NAME:-origin}" DS_HARNESS_KIT="$T/kit" \
  bash "$SCRIPT" >/dev/null 2>&1
}
mode(){ printf '%s\n' "$1" > "$T/stub/mode"; }
calls(){ if [ -f "$T/stub/calls" ]; then wc -l < "$T/stub/calls" | tr -d ' '; else echo 0; fi; }
last(){ cat "$T/state/last-synced-sha" 2>/dev/null; }
failed_sha(){ cat "$T/state/failed-sha" 2>/dev/null; }
state(){ cat "$T/state/state" 2>/dev/null; }
clear_texts(){ rm -f "$T/pending"/* 2>/dev/null; }
text(){ cat "$T/pending"/coo.notify-design-sync-"$1"-*.msg 2>/dev/null; }
has_packet(){   # a complete FYI packet: .msg, .no-reply and the empty trigger
  local m; m="$(ls "$T/pending"/coo.notify-design-sync-"$1"-*.msg 2>/dev/null | head -n 1)"
  [ -n "$m" ] && [ -s "$m" ] && [ -f "${m%.msg}.no-reply" ] && [ -f "${m%.msg}" ] && [ ! -s "${m%.msg}" ]
}

echo "1. first firing, no baseline: the agent runs and the baseline is recorded"
mode synced; clear_texts; run
check "agent ran once" [ "$(calls)" = 1 ]
check "baseline is origin/main" [ "$(last)" = "$(head_sha)" ]
check "sync worktree exists at that commit" [ "$(git -C "$T/state/worktree" rev-parse HEAD)" = "$(head_sha)" ]
check "done text is a complete no-reply packet" has_packet synced
check "primary checkout untouched" [ -z "$(git -C "$T/repo" status --porcelain)" ]
# The skill is user-invocable only. A prompt that asks the agent to invoke it
# is refused (first live firing, 2026-10-04); the prompt must BE the command.
check "the prompt is the /design-sync command" grep -q "^/design-sync " "$T/stub/prompt-head"
check "the contract and run facts ride along" grep -q "Result file (write it last, always)" "$T/stub/argv"
check "model and ceilings are pinned on the command line" grep -q -- "--model opus --effort high --max-turns 250" "$T/stub/argv"
check "the built-in tools are scoped to what 13 past runs used, plus Agent" grep -q -- "--tools Bash,Read,Write,Edit,Glob,Grep,ToolSearch,DesignSync,Agent" "$T/stub/argv"
check "guard.py runs on PreToolUse and checkpoint.py on Stop and PreCompact" python3 -c "import json,sys; h=json.load(open(sys.argv[1]))['hooks']; assert 'guard.py' in h['PreToolUse'][0]['hooks'][0]['command']; assert all('checkpoint.py' in h[e][0]['hooks'][0]['command'] for e in ('Stop','PreCompact','SessionStart')); assert h['SessionStart'][0]['matcher']=='compact'" "$(settings_of)"
check "the run may write only under its state folder and temp" grep -q "^$T/state:" "$T/stub/env-roots"
check "the checkpoint writes the run's state file" [ "$(cat "$T/stub/env-resume")" = "$T/state/run-state.md" ]
check "a fenced read-only verifier checks the work before any upload or PR" grep -q "dispatch one read-only verifier subagent" "$T/stub/argv"

echo "2. same commit again: nothing runs"
run
check "no second agent" [ "$(calls)" = 1 ]

echo "3. a push that touches nothing sync-relevant: baseline moves, no agent"
push README.md "more"; run
check "no agent for README" [ "$(calls)" = 1 ]
check "baseline advanced" [ "$(last)" = "$(head_sha)" ]

echo "4. a NOTES.md-only push: excluded from the gate"
push .design-sync/NOTES.md "a note"; run
check "no agent for NOTES.md" [ "$(calls)" = 1 ]
check "baseline advanced" [ "$(last)" = "$(head_sha)" ]

echo "5. a component change, project already matched: agent runs, no text"
mode no-change; clear_texts; sleep 1; push src/components/Button/Button.jsx "// edit"; run
check "agent ran" [ "$(calls)" = 2 ]
check "baseline advanced" [ "$(last)" = "$(head_sha)" ]
check "no done text for no-change" [ -z "$(text synced)" ]

echo "6. the agent crashes: failure text, baseline held, commit parked"
BEFORE="$(last)"; mode crash; clear_texts; push tokens/primitives.json "{}"; run
check "agent ran" [ "$(calls)" = 3 ]
check "baseline NOT advanced" [ "$(last)" = "$BEFORE" ]
check "failed commit recorded" [ "$(failed_sha)" = "$(head_sha)" ]
check "failure text is a complete packet" has_packet failed
check "failure text names the exit" grep -q "claude exited 1" <<< "$(text failed)"

echo "7. the parked commit is not retried by itself"
run; run
check "no retry" [ "$(calls)" = 3 ]
check "state says parked" grep -q "^parked" <<< "$(state)"

echo "8. the force file retries it"
mode synced; touch "$T/state/force"; sleep 1; run
check "agent ran" [ "$(calls)" = 4 ]
check "baseline advanced" [ "$(last)" = "$(head_sha)" ]
check "failure memo cleared" [ -z "$(failed_sha)" ]
check "force file consumed" [ ! -e "$T/state/force" ]

echo "9. the agent claims an upload but wrote no fresh verdict (a stale one exists)"
BEFORE="$(last)"; mode synced-no-verdict; clear_texts; sleep 1; push src/components/Button/Button.jsx "// edit 2"; run
check "agent ran" [ "$(calls)" = 5 ]
check "the earlier run's verdict was removed, not trusted" [ ! -f "$T/state/worktree/ds-bundle/.resync-verdict.json" ]
check "baseline NOT advanced" [ "$(last)" = "$BEFORE" ]
check "failure names the verdict" grep -q "resync-verdict" <<< "$(text failed)"

echo "10. the agent opens a PR: baseline moves, needs-merge text carries the link"
mode pr; clear_texts; push src/components/Button/Button.jsx "// edit 3"; run
check "agent ran" [ "$(calls)" = 6 ]
check "baseline advanced" [ "$(last)" = "$(head_sha)" ]
check "needs-merge text is a complete packet" has_packet needs-merge
check "text carries the PR link" grep -q "https://example.test/pr/7" <<< "$(text needs-merge)"

echo "11. an agent-opened PR is still open: hold"
printf 'feat/other\ndesign-sync/auto-abc1234\n' > "$T/stub/open-prs"
mode synced; push src/components/Button/Button.jsx "// edit 4"; run
check "no agent while holding" [ "$(calls)" = 6 ]
check "state says holding" grep -q "^holding" <<< "$(state)"
rm -f "$T/stub/open-prs"

echo "12. the agent leaves the worktree dirty: failure, baseline held"
BEFORE="$(last)"; mode dirty; clear_texts; sleep 1; run
check "agent ran" [ "$(calls)" = 7 ]
check "baseline NOT advanced" [ "$(last)" = "$BEFORE" ]
check "failure names the stray file" grep -q "stray.txt" <<< "$(text failed)"

echo "13. a dirty worktree blocks the next run and is not cleaned"
mode synced; clear_texts; push src/components/Button/Button.jsx "// edit 5"; run
check "no agent" [ "$(calls)" = 7 ]
check "stray file still there" [ -f "$T/state/worktree/stray.txt" ]
check "failure says left alone" grep -q "left alone" <<< "$(text failed)"
rm -f "$T/state/worktree/stray.txt"

echo "14. the agent hangs: the watchdog stops it"
BEFORE="$(last)"; mode hang; clear_texts; push src/components/Button/Button.jsx "// edit 6"
START=$(date +%s); TIMEOUT=5 run; ELAPSED=$(( $(date +%s) - START ))
check "agent ran" [ "$(calls)" = 8 ]
check "stopped near the ceiling (${ELAPSED}s)" [ "$ELAPSED" -lt 40 ]
check "baseline NOT advanced" [ "$(last)" = "$BEFORE" ]
check "failure names the wall clock" grep -q "wall clock" <<< "$(text failed)"

echo "15. the result names a different commit"
BEFORE="$(last)"; mode wrong-sha; clear_texts; sleep 1; push src/components/Button/Button.jsx "// edit 7"; run
check "agent ran" [ "$(calls)" = 9 ]
check "baseline NOT advanced" [ "$(last)" = "$BEFORE" ]
check "failure names the commit mismatch" grep -q "not the one this run was given" <<< "$(text failed)"

echo "16. the agent stops for a human"
BEFORE="$(last)"; mode needs-human; clear_texts; push src/components/Button/Button.jsx "// edit 8"; run
check "baseline NOT advanced" [ "$(last)" = "$BEFORE" ]
check "failure carries the agent's reason" grep -q "chromium is missing" <<< "$(text failed)"

echo "17. the agent exits 0 with no result file"
BEFORE="$(last)"; mode silent; clear_texts; push src/components/Button/Button.jsx "// edit 9"; run
check "baseline NOT advanced" [ "$(last)" = "$BEFORE" ]
check "failure names the missing result" grep -q "without writing its result file" <<< "$(text failed)"

echo "18. the prompt file is not on main: no agent, clear reason"
N="$(calls)"; mode synced; clear_texts
( cd "$T/seed" && git rm -q scripts/design-sync-auto.prompt.md && printf '// edit 10\n' >> src/components/Button/Button.jsx && $G add -A && $G commit -q -m "drop prompt" && git push -q origin main )
run
check "no agent" [ "$(calls)" = "$N" ]
check "failure says merge the PR" grep -q "Merge the automation PR" <<< "$(text failed)"

echo "19. the remote cannot be fetched: quiet, no agent, no text"
N="$(calls)"; clear_texts; REMOTE_NAME=nope run
check "no agent" [ "$(calls)" = "$N" ]
check "state says offline" grep -q "^offline" <<< "$(state)"
check "no text" [ -z "$(ls "$T/pending" 2>/dev/null)" ]

echo "20. another firing holds the lock: this one leaves"
N="$(calls)"; mkdir "$T/state/lock"; touch "$T/state/force"; run
check "no agent" [ "$(calls)" = "$N" ]
check "force file kept for the firing that holds the lock" [ -e "$T/state/force" ]
rmdir "$T/state/lock"; rm -f "$T/state/force"

echo "21. a run that stopped mid-sync hands its checkpoint to the next run of that commit"
mode synced; clear_texts; push scripts/design-sync-auto.prompt.md "stub prompt"; push src/components/Button/Button.jsx "// edit again"
printf -- '- Sync commit: %s\n- Last line: halfway through the uploads\n' "$(head_sha)" > "$T/state/run-state.md"
rm -f "$T/state/failed-sha"; run
check "the prompt carries the previous run's checkpoint" grep -q "halfway through the uploads" "$T/stub/argv"
push src/components/Button/Button.jsx "// a different commit"
printf -- '- Sync commit: deadbeef\n- Last line: an older commit\n' > "$T/state/run-state.md"; run
check "a checkpoint for another commit is not handed over" bash -c "! grep -q 'an older commit' '$T/stub/argv'"

echo
echo "passed: $PASS   failed: $FAIL"
[ "$FAIL" = 0 ]
