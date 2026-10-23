#!/bin/bash
# ============================================================
# design-sync-auto.sh — sync SCDS to its claude.ai/design project when main moves.
# ============================================================
# launchd (com.shokunin.design-sync) runs this every 5 minutes on the Mac.
# Installed by scripts/install-design-sync-auto.sh. Decision:
# decisions/decisions.md, 2026-10-04, "design-sync runs unattended on every push".
#
# What one firing does:
#   1. fetch origin/main
#   2. gate: stop unless main moved AND the move touched a path the design
#      project is built from (SYNC_PATHS). A move that touched nothing relevant
#      only advances the baseline. No agent starts, no tokens are spent.
#   3. hold: stop while an agent-opened PR (branch design-sync/auto-*) is open.
#      Its merge moves main and re-triggers this job.
#   4. put a dedicated worktree at origin/main (never the primary checkout,
#      which is routinely parked on a branch)
#   5. run ONE headless `claude -p` there, told to follow the design-sync skill
#      under the contract in scripts/design-sync-auto.prompt.md
#   6. read the agent's result file, check it against the driver's own verdict
#      file, then advance the baseline or text Levi
#
# The agent runs with --dangerously-skip-permissions. The design-sync upload
# asks for an approval that a headless run cannot give, and no narrower
# permission rule clears it (tested 2026-10-04: a DesignSync-only allowlist
# returned no plan). Levi chose this mode on 2026-10-04; it matches the night
# runner. The limits on what the agent may do are in the prompt file, and this
# script is the part that holds on nights nobody reads the log: one agent per
# sha, a turn ceiling, a wall-clock ceiling, and no retry without a new push
# or the force file.
#
# It never merges, never pushes to main, never resets or cleans a tree. A
# dirty worktree stops the run and texts; it is not swept (learning #259).
# The only files it removes are its own: the result file and the driver's
# generated receipt, each by exact path, before a run.
#
# Manual controls:
#   sync now:   touch ~/.shokunin/design-sync/force
#   pause:      launchctl unload ~/Library/LaunchAgents/com.shokunin.design-sync.plist
#   state:      cat ~/.shokunin/design-sync/state
#   event log:  tail ~/.shokunin/design-sync/design-sync-auto.log
#   run logs:   ls ~/.shokunin/design-sync/logs
#
# Bash 3.2 (macOS). Do not name a variable `status` (read-only in zsh, #157).
# ============================================================
set -uo pipefail

REPO_DIR="${DS_REPO_DIR:-$(cd "$(dirname "$0")/.." 2>/dev/null && pwd)}"
STUDIO_DIR="${STUDIO_DIR:-$HOME/Projects/shokunin-crafthouse}"
STATE_DIR="${DS_STATE_DIR:-$HOME/.shokunin/design-sync}"
PENDING_DIR="${PENDING_DIR:-$STUDIO_DIR/ai-site/_pending}"
REMOTE="${DS_REMOTE:-origin}"
BRANCH="${DS_BRANCH:-main}"

# Pinned, never inherited (learning #146). Aliases resolve through the CLI
# binary's own table. The top tier has no path through this script.
DS_MODEL="${DS_MODEL:-opus}"
DS_EFFORT="${DS_EFFORT:-high}"
# Dispatch ceilings (learning #168). A first full sync of 16 components took
# about 120 tool calls; a re-sync of a few changed components takes far fewer.
DS_MAX_TURNS="${DS_MAX_TURNS:-250}"
# The built-ins the 13 unattended runs to 2026-10-23 called, plus Agent for the verifier.
DS_TOOLS="${DS_TOOLS:-Bash,Read,Write,Edit,Glob,Grep,ToolSearch,DesignSync,Agent}"
# The studio's harness kit (studio-memory templates/harness/): guard.py on PreToolUse,
# checkpoint.py on Stop and PreCompact. Copied per run into the state folder.
DS_HARNESS_KIT="${DS_HARNESS_KIT:-$HOME/Projects/shokunin-crafthouse/studio-memory/templates/harness}"
DS_TIMEOUT_SECS="${DS_TIMEOUT_SECS:-5400}"

WT="$STATE_DIR/worktree"
LOG="$STATE_DIR/design-sync-auto.log"
RUN_LOG_DIR="$STATE_DIR/logs"
LOCKDIR="$STATE_DIR/lock"
LOCK_STALE_SECS=$(( DS_TIMEOUT_SECS + 900 ))
LAST_FILE="$STATE_DIR/last-synced-sha"
FAILED_FILE="$STATE_DIR/failed-sha"
FORCE_FILE="$STATE_DIR/force"
STATE_FILE="$STATE_DIR/state"
RESULT="$STATE_DIR/result.json"
PROMPT_REL="scripts/design-sync-auto.prompt.md"
AUTO_PR_PREFIX="design-sync/auto-"

# Paths the design project is built from. A push that touches none of them
# cannot change the bundle. NOTES.md is prose for the next run, not an input.
SYNC_PATHS=(
  src/components src/styles src/fonts src/theme src/index.js
  tokens scripts/tokens-to-css.mjs vite.lib.config.js
  package.json package-lock.json
  .design-sync
  _config/design-system/ui-rules.md _config/design-system/type-system.md
  _config/design-system/brand-elements.md
  _config/voice/brand-voice.md
  ':(exclude).design-sync/NOTES.md'
)

mkdir -p "$STATE_DIR" "$RUN_LOG_DIR" 2>/dev/null || { echo "design-sync-auto: cannot create $STATE_DIR" >&2; exit 1; }

log(){ printf '%s  %s\n' "$(date '+%F %T')" "$*" >> "$LOG"; }

# Log a state only when it changes: this fires 288 times a day and an
# unchanged state is not news. The current state is always in $STATE_FILE.
note(){
  [ -f "$STATE_FILE" ] && [ "$(cat "$STATE_FILE" 2>/dev/null)" = "$1" ] && return 0
  printf '%s\n' "$1" > "$STATE_FILE"
  log "$1"
}

# Two-file iMessage sentinel (studio-memory/templates/imessage-notify.md):
# body in .msg FIRST, the empty trigger LAST. Every text from this job is an
# FYI, so it carries .no-reply (ADR-043). Never fails its caller.
notify(){   # args: <kind> <body>
  local kind="$1" body="$2" base
  base="${PENDING_DIR}/coo.notify-design-sync-${kind}-$(date +%H%M)-$(date +%F)"
  if ! mkdir -p "$PENDING_DIR" 2>/dev/null; then
    log "NOTICE: cannot create $PENDING_DIR, text skipped: $kind"
    return 0
  fi
  printf '%s\n' "$body" > "${base}.msg" 2>/dev/null
  if [ -s "${base}.msg" ]; then
    : > "${base}.no-reply" 2>/dev/null
    : > "${base}" 2>/dev/null
    log "text queued: $(basename "$base")"
  else
    log "NOTICE: could not write ${base}.msg, text skipped"
  fi
  return 0
}

fail(){   # args: <sha or -> <reason> [run log]
  local sha="$1" reason="$2" runlog="${3:-}"
  log "FAILED: $reason"
  printf '%s\n' "failed: $reason" > "$STATE_FILE"
  [ "$sha" != "-" ] && printf '%s\n' "$sha" > "$FAILED_FILE"
  notify "failed" "SCDS design sync FAILED
Reason: ${reason}
Commit: ${sha}
${runlog:+Run log: ${runlog}
}Event log: ${LOG}

The design project is unchanged or un-anchored; nothing silently rots. This commit is not retried by itself.
Retry: touch ${FORCE_FILE}
Or run /design-sync in Claude Code in the repo."
}

# Reads one string field from the agent's result file. The prompt asks for one
# field per line; this takes the first match.
result_field(){
  sed -n 's/.*"'"$1"'"[[:space:]]*:[[:space:]]*"\([^"]*\)".*/\1/p' "$RESULT" 2>/dev/null | head -n 1
}

# ---- single-flight lock --------------------------------------------------
if ! mkdir "$LOCKDIR" 2>/dev/null; then
  lock_age=$(( $(date +%s) - $(stat -f %m "$LOCKDIR" 2>/dev/null || stat -c %Y "$LOCKDIR" 2>/dev/null || echo 0) ))
  if [ "$lock_age" -gt "$LOCK_STALE_SECS" ]; then
    rmdir "$LOCKDIR" 2>/dev/null && mkdir "$LOCKDIR" 2>/dev/null && log "stale lock (${lock_age}s) cleared"
  else
    exit 0
  fi
fi
trap 'rmdir "$LOCKDIR" 2>/dev/null' EXIT

# ---- 1. fetch ------------------------------------------------------------
if [ ! -d "$REPO_DIR/.git" ] && [ ! -f "$REPO_DIR/.git" ]; then
  note "blocked: $REPO_DIR is not a git checkout"
  exit 1
fi
if ! git -C "$REPO_DIR" fetch -q "$REMOTE" "$BRANCH" 2>/dev/null; then
  note "offline: cannot fetch $REMOTE/$BRANCH (network or auth). Will retry next firing."
  exit 0
fi
NEW="$(git -C "$REPO_DIR" rev-parse -q --verify "refs/remotes/$REMOTE/$BRANCH" 2>/dev/null)"
if [ -z "$NEW" ]; then
  note "blocked: $REMOTE/$BRANCH does not resolve"
  exit 1
fi
SHORT="$(printf '%s' "$NEW" | cut -c1-7)"
LAST="$(cat "$LAST_FILE" 2>/dev/null || true)"

FORCED=0
if [ -e "$FORCE_FILE" ]; then
  FORCED=1
  rm -f "$FORCE_FILE"
  log "force file consumed: syncing $SHORT regardless of the gates"
fi

# ---- 2. gate: did anything the bundle is built from change? ---------------
if [ "$FORCED" = 0 ]; then
  if [ -n "$LAST" ] && [ "$NEW" = "$LAST" ]; then
    note "idle: in sync at $SHORT"
    exit 0
  fi
  if [ "$NEW" = "$(cat "$FAILED_FILE" 2>/dev/null || true)" ]; then
    note "parked: the sync of $SHORT failed and is not retried by itself. touch $FORCE_FILE to retry."
    exit 0
  fi
  if [ -n "$LAST" ] && git -C "$REPO_DIR" cat-file -e "${LAST}^{commit}" 2>/dev/null; then
    if CHANGED="$(git -C "$REPO_DIR" diff --name-only "$LAST" "$NEW" -- "${SYNC_PATHS[@]}" 2>/dev/null)"; then
      if [ -z "$CHANGED" ]; then
        printf '%s\n' "$NEW" > "$LAST_FILE"
        note "idle: main moved to $SHORT, nothing sync-relevant changed"
        exit 0
      fi
    fi
    # A diff that errors is treated as relevant: run rather than skip.
  fi
  # No baseline, or a baseline git no longer has: the project's own anchor is
  # the truth, so let the agent diff against it.
fi

# ---- 3. hold while an agent-opened PR is waiting on a merge ---------------
GH_BIN="${DS_GH_BIN:-$(command -v gh 2>/dev/null || true)}"
[ -z "$GH_BIN" ] && [ -x /opt/homebrew/bin/gh ] && GH_BIN=/opt/homebrew/bin/gh
if [ "$FORCED" = 0 ] && [ -n "$GH_BIN" ]; then
  OPEN_AUTO="$(cd "$REPO_DIR" && "$GH_BIN" pr list --state open --json headRefName --jq '.[].headRefName' 2>/dev/null | grep "^${AUTO_PR_PREFIX}" | head -n 1 || true)"
  if [ -n "$OPEN_AUTO" ]; then
    note "holding: PR from $OPEN_AUTO is open. Its merge re-triggers the sync."
    exit 0
  fi
fi

# ---- 4. preflight + worktree ----------------------------------------------
CLAUDE_BIN="${CLAUDE_BIN:-$HOME/.local/bin/claude}"
if [ ! -x "$CLAUDE_BIN" ]; then
  for candidate in "$HOME/.claude/local/claude" /opt/homebrew/bin/claude /usr/local/bin/claude; do
    [ -x "$candidate" ] && { CLAUDE_BIN="$candidate"; break; }
  done
fi
if [ ! -x "$CLAUDE_BIN" ]; then
  fail "$NEW" "claude CLI not found (looked in ~/.local/bin, ~/.claude/local, /opt/homebrew/bin, /usr/local/bin). Set CLAUDE_BIN in the plist."
  exit 1
fi

# node lives under nvm on this Mac, which launchd's PATH does not carry and
# which moves on every upgrade (learning #208). Resolve it, do not pin it.
if ! command -v node >/dev/null 2>&1; then
  NODE_DIR="$(ls -d "$HOME"/.nvm/versions/node/*/bin 2>/dev/null | sort -V 2>/dev/null | tail -n 1)"
  [ -n "$NODE_DIR" ] && [ -x "$NODE_DIR/node" ] && PATH="$NODE_DIR:$PATH"
fi
if ! command -v node >/dev/null 2>&1; then
  fail "$NEW" "node not found on PATH or under ~/.nvm/versions/node. The build cannot run."
  exit 1
fi
export PATH

if [ -e "$WT" ]; then
  if ! git -C "$WT" rev-parse -q --git-dir >/dev/null 2>&1; then
    fail "$NEW" "$WT exists and is not a git worktree. Move it aside by hand; this job does not delete it."
    exit 1
  fi
  DIRTY="$(git -C "$WT" status --porcelain 2>/dev/null | head -n 5)"
  if [ -n "$DIRTY" ]; then
    fail "$NEW" "the sync worktree has uncommitted changes and is left alone: $(printf '%s' "$DIRTY" | tr '\n' ';')"
    exit 1
  fi
  if ! git -C "$WT" checkout -q --detach "$NEW" 2>/dev/null; then
    fail "$NEW" "could not move the sync worktree to $SHORT (git checkout --detach failed in $WT)"
    exit 1
  fi
else
  if ! git -C "$REPO_DIR" worktree add -q --detach "$WT" "$NEW" 2>/dev/null; then
    git -C "$REPO_DIR" worktree prune 2>/dev/null
    if ! git -C "$REPO_DIR" worktree add -q --detach "$WT" "$NEW" 2>/dev/null; then
      fail "$NEW" "could not create the sync worktree at $WT"
      exit 1
    fi
  fi
  log "created the sync worktree at $WT"
fi

if [ ! -s "$WT/$PROMPT_REL" ]; then
  fail "$NEW" "$PROMPT_REL is not on $REMOTE/$BRANCH at $SHORT. Merge the automation PR first."
  exit 1
fi

# ---- 5. one agent ----------------------------------------------------------
TS="$(date +%Y%m%d-%H%M%S)"
RUN_LOG="$RUN_LOG_DIR/${TS}-${SHORT}.log"
VERDICT="$WT/ds-bundle/.resync-verdict.json"
# The driver's receipt from an earlier run must not vouch for this one. It is a
# generated, gitignored file the driver rewrites on every run, so removing
# exactly this path loses nothing. (Not an mtime comparison: bash 3.2's -nt
# resolves to the second.)
rm -f "$RESULT" "$VERDICT"

# The prompt IS the slash command. The design-sync skill is user-invocable
# only (disable-model-invocation): an agent told to "invoke the skill" is
# refused, which is what stopped the first live firing on 2026-10-04. A
# prompt that begins with /design-sync is the user-side invocation, and the
# contract rides along as its arguments.
PROMPT="/design-sync Unattended re-sync. No human is present. The contract below replaces every point where the skill would ask the user.

$(cat "$WT/$PROMPT_REL")

## Run facts (written by design-sync-auto.sh)

- Worktree (your cwd): ${WT}
- Commit to sync: ${NEW}
- Last synced commit: ${LAST:-none recorded}
- Result file (write it last, always): ${RESULT}
- Branch name for a repo-change PR: ${AUTO_PR_PREFIX}${SHORT}
- Turn ceiling: ${DS_MAX_TURNS}. Wall clock: ${DS_TIMEOUT_SECS}s. Stop and write the result file before either.

## Before any upload or pull request

Before you upload (path A step 4) or open the pull request (path B step 3), dispatch one read-only verifier subagent with the Agent tool. Hand it the verdict file and the sheet paths. It checks that every pending component's sheet was read and graded in this run and that the upload list matches the verdict, and returns its disagreements. It edits nothing and uploads nothing. Fix each disagreement, or stop with needs-human."

# Resume (#164): checkpoint.py keeps a hook-written block in run-state.md at every Stop
# and before every compaction. A run of the same commit that stopped part-way is handed
# that block; a state file for any other commit starts over.
RUN_STATE="$STATE_DIR/run-state.md"
if [ -f "$RUN_STATE" ] && grep -q -- "- Sync commit: $NEW" "$RUN_STATE"; then
  PROMPT="$PROMPT

## A previous run of this commit stopped here

$(head -c 6000 "$RUN_STATE")

Check what it finished against the project before you redo any of it."
  log "resuming: run-state.md names $SHORT"
else
  printf -- '# Design-sync run state\n\n- Sync commit: %s\n' "$NEW" > "$RUN_STATE"
fi

DS_SETTINGS=()
if mkdir -p "$STATE_DIR/hooks" && cp "$DS_HARNESS_KIT/guard.py" "$DS_HARNESS_KIT/checkpoint.py" "$STATE_DIR/hooks/" 2>/dev/null; then
  DS_PY="$(command -v python3 2>/dev/null || echo /usr/bin/python3)"
  cat > "$STATE_DIR/settings.json" <<DSJSON
{"hooks":{
 "PreToolUse":[{"matcher":"","hooks":[{"type":"command","command":"$DS_PY $STATE_DIR/hooks/guard.py","timeout":10}]}],
 "Stop":[{"hooks":[{"type":"command","command":"$DS_PY $STATE_DIR/hooks/checkpoint.py","timeout":10}]}],
 "PreCompact":[{"hooks":[{"type":"command","command":"$DS_PY $STATE_DIR/hooks/checkpoint.py","timeout":10}]}]
}}
DSJSON
  DS_SETTINGS=(--settings "$STATE_DIR/settings.json")
  # Writable: the state folder (the worktree lives in it) and temp. The guard also refuses
  # a PR merge, a push to main, a force push and an MCP write (#154).
  export HARNESS_ROOTS="$STATE_DIR:${TMPDIR:-/tmp}:/tmp:/private/tmp"
  export HARNESS_RESUME_FILE="$RUN_STATE"
else
  log "NOTICE: harness kit not found at $DS_HARNESS_KIT; running without guard.py and checkpoint.py"
fi

export DS_RESULT_FILE="$RESULT"
printf '%s\n' "running: syncing $SHORT" > "$STATE_FILE"
log "agent start: $SHORT model=$DS_MODEL effort=$DS_EFFORT max_turns=$DS_MAX_TURNS forced=$FORCED log=$RUN_LOG"
{
  echo "=== $(date -u +%FT%TZ) design-sync-auto sha=$NEW last=${LAST:-none} model=$DS_MODEL claude_bin=$CLAUDE_BIN ==="
} > "$RUN_LOG"

(
  cd "$WT" || exit 97
  exec "$CLAUDE_BIN" -p "$PROMPT" --model "$DS_MODEL" --effort "$DS_EFFORT" \
    --max-turns "$DS_MAX_TURNS" --tools "$DS_TOOLS" "${DS_SETTINGS[@]}" --dangerously-skip-permissions
) >> "$RUN_LOG" 2>&1 &
AGENT_PID=$!
# Keep the Mac awake for exactly as long as the agent lives.
command -v caffeinate >/dev/null 2>&1 && caffeinate -i -w "$AGENT_PID" >/dev/null 2>&1 &
# macOS has no `timeout`. One bounded watchdog, never a poll of the agent.
(
  waited=0
  while [ "$waited" -lt "$DS_TIMEOUT_SECS" ]; do
    kill -0 "$AGENT_PID" 2>/dev/null || exit 0
    sleep 5
    waited=$(( waited + 5 ))
  done
  echo "=== watchdog: ${DS_TIMEOUT_SECS}s wall clock reached, stopping the agent ===" >> "$RUN_LOG"
  kill "$AGENT_PID" 2>/dev/null
  sleep 10
  kill -9 "$AGENT_PID" 2>/dev/null
) &
WATCHDOG_PID=$!
wait "$AGENT_PID" 2>/dev/null
RUN_STATUS=$?
kill "$WATCHDOG_PID" 2>/dev/null
wait "$WATCHDOG_PID" 2>/dev/null
echo "=== $(date -u +%FT%TZ) agent exit=$RUN_STATUS ===" >> "$RUN_LOG"

# Keep the last 30 run logs.
ls -1t "$RUN_LOG_DIR"/*.log 2>/dev/null | tail -n +31 | while IFS= read -r old; do rm -f "$old"; done

# ---- 6. grade the run from artifacts, not from the agent's word ------------
TIMED_OUT=0
grep -q "=== watchdog:" "$RUN_LOG" 2>/dev/null && TIMED_OUT=1

if [ "$TIMED_OUT" = 1 ]; then
  fail "$NEW" "the agent hit the ${DS_TIMEOUT_SECS}s wall clock and was stopped" "$RUN_LOG"
  exit 0
fi
if [ "$RUN_STATUS" -ne 0 ]; then
  fail "$NEW" "claude exited ${RUN_STATUS}. Last line: $(tail -n 3 "$RUN_LOG" 2>/dev/null | head -n 1 | cut -c1-200)" "$RUN_LOG"
  exit 0
fi
if [ ! -s "$RESULT" ]; then
  fail "$NEW" "the agent ended without writing its result file" "$RUN_LOG"
  exit 0
fi

R_STATUS="$(result_field status)"
R_SHA="$(result_field sha)"
R_NOTE="$(result_field note)"
R_PR="$(result_field pr)"
R_COMPONENTS="$(result_field components)"

if [ "$R_SHA" != "$NEW" ]; then
  fail "$NEW" "the result file names commit '${R_SHA}', not the one this run was given" "$RUN_LOG"
  exit 0
fi

LEFT_DIRTY="$(git -C "$WT" status --porcelain 2>/dev/null | head -n 5)"
verdict_fresh_ok(){
  [ -f "$VERDICT" ] && grep -q '"ok"[[:space:]]*:[[:space:]]*true' "$VERDICT" 2>/dev/null
}

case "$R_STATUS" in
  synced|no-change)
    # The agent says the project matches this commit. The driver's verdict
    # file is the one artifact this script can open: it must be from THIS run
    # and it must say ok (learning #224, #226).
    if ! verdict_fresh_ok; then
      fail "$NEW" "the agent reported '${R_STATUS}' but this run wrote no ok ds-bundle/.resync-verdict.json" "$RUN_LOG"
      exit 0
    fi
    if [ -n "$LEFT_DIRTY" ]; then
      fail "$NEW" "the agent reported '${R_STATUS}' but left uncommitted changes in the worktree: $(printf '%s' "$LEFT_DIRTY" | tr '\n' ';')" "$RUN_LOG"
      exit 0
    fi
    printf '%s\n' "$NEW" > "$LAST_FILE"
    rm -f "$FAILED_FILE"
    if [ "$R_STATUS" = "synced" ]; then
      printf '%s\n' "idle: in sync at $SHORT" > "$STATE_FILE"
      log "synced $SHORT: ${R_COMPONENTS:-components not listed}. ${R_NOTE}"
      notify "synced" "SCDS design sync done: ${SHORT}
Updated in Claude Design: ${R_COMPONENTS:-see run log}
${R_NOTE:+Note: ${R_NOTE}
}Run log: ${RUN_LOG}"
    else
      printf '%s\n' "idle: in sync at $SHORT" > "$STATE_FILE"
      log "no change at $SHORT: the project already matched. ${R_NOTE}"
    fi
    ;;
  pr-opened)
    if [ -z "$R_PR" ]; then
      fail "$NEW" "the agent reported 'pr-opened' with no PR link" "$RUN_LOG"
      exit 0
    fi
    if [ -n "$LEFT_DIRTY" ]; then
      fail "$NEW" "the agent opened ${R_PR} but left uncommitted changes in the worktree: $(printf '%s' "$LEFT_DIRTY" | tr '\n' ';')" "$RUN_LOG"
      exit 0
    fi
    # Nothing was uploaded. The baseline still advances: the PR's merge
    # touches .design-sync/, which re-triggers the job, and the hold gate
    # keeps it quiet until then.
    printf '%s\n' "$NEW" > "$LAST_FILE"
    rm -f "$FAILED_FILE"
    printf '%s\n' "holding: waiting on ${R_PR}" > "$STATE_FILE"
    log "pr-opened for $SHORT: ${R_PR}. ${R_NOTE}"
    notify "needs-merge" "SCDS design sync needs one repo change before it can upload.
PR: ${R_PR}
Why: ${R_NOTE:-see the PR}
Nothing was uploaded. Merge the PR and the sync runs by itself.
Run log: ${RUN_LOG}"
    ;;
  needs-human)
    fail "$NEW" "the agent stopped for a human: ${R_NOTE:-no reason given}" "$RUN_LOG"
    ;;
  failed)
    fail "$NEW" "the agent reported a failed sync: ${R_NOTE:-no reason given}" "$RUN_LOG"
    ;;
  *)
    fail "$NEW" "the result file has an unknown status '${R_STATUS}'" "$RUN_LOG"
    ;;
esac
exit 0
