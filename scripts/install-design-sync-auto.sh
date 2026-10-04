#!/bin/bash
# ============================================================
# install-design-sync-auto.sh — one-shot installer for the unattended design sync.
# Run this ON YOUR MAC, after the PR that adds it is merged to main:
#   bash ~/Projects/shokunin-crafthouse/shokunin-brand-identity/scripts/install-design-sync-auto.sh
#
# Uninstall:
#   launchctl unload ~/Library/LaunchAgents/com.shokunin.design-sync.plist
#   rm ~/Library/LaunchAgents/com.shokunin.design-sync.plist
# ============================================================
set -uo pipefail
REPO="$HOME/Projects/shokunin-crafthouse/shokunin-brand-identity"
STATE="$HOME/.shokunin/design-sync"
LA="$HOME/Library/LaunchAgents"
PLIST="com.shokunin.design-sync.plist"
LOG="$STATE/design-sync-auto.log"

cat <<'BANNER'
This installs a launchd job that, on every push to main that changes the
design system, starts an UNATTENDED Claude agent with permission prompts OFF
(--dangerously-skip-permissions). The agent can write to the SCDS project in
Claude Design and can open pull requests in this repo. It cannot merge.
Its contract: scripts/design-sync-auto.prompt.md

BANNER

echo "1/5  Preflight"
problems=0
git -C "$REPO" fetch -q origin main 2>/dev/null || { echo "   x cannot fetch origin/main (network or auth)"; problems=1; }
for f in scripts/design-sync-auto.sh scripts/design-sync-auto.prompt.md "scripts/$PLIST" .design-sync/config.json; do
  if git -C "$REPO" cat-file -e "origin/main:$f" 2>/dev/null; then
    echo "   ok origin/main has $f"
  else
    echo "   x origin/main does not have $f. Merge the automation PR first."
    problems=1
  fi
done
if git -C "$REPO" show origin/main:.design-sync/config.json 2>/dev/null | grep -q '"projectId"'; then
  echo "   ok the design project is pinned in .design-sync/config.json"
else
  echo "   x no projectId in .design-sync/config.json on origin/main. Run /design-sync once by hand first."
  problems=1
fi
if [ -x "$HOME/.local/bin/claude" ] || command -v claude >/dev/null 2>&1; then
  echo "   ok claude CLI found"
else
  echo "   x claude CLI not found"; problems=1
fi
if command -v gh >/dev/null 2>&1 && gh auth status >/dev/null 2>&1; then
  echo "   ok gh is installed and signed in"
else
  echo "   x gh is missing or signed out (gh auth login)"; problems=1
fi
if command -v node >/dev/null 2>&1 || ls -d "$HOME"/.nvm/versions/node/*/bin >/dev/null 2>&1; then
  echo "   ok node found"
else
  echo "   x node not found"; problems=1
fi
[ "$problems" = 0 ] || { echo; echo "Fix the lines marked x and run this again. Nothing was installed."; exit 1; }

echo "2/5  State directory"
mkdir -p "$STATE/logs" && echo "   $STATE"
BEFORE_LINES=$(wc -l < "$LOG" 2>/dev/null || echo 0)

echo "3/5  Installing the LaunchAgent (the plist as it is on origin/main)"
mkdir -p "$LA"
git -C "$REPO" show "origin/main:scripts/$PLIST" > "$LA/$PLIST" || { echo "   x could not write $LA/$PLIST"; exit 1; }
launchctl unload "$LA/$PLIST" 2>/dev/null || true
launchctl load "$LA/$PLIST" && echo "   loaded com.shokunin.design-sync (every 5 min, and once right now)"

echo "4/5  Checking the job is loaded (a plist on disk is not a job loaded)"
loaded=0
for i in 1 2 3 4 5; do
  launchctl list com.shokunin.design-sync >/dev/null 2>&1 && { loaded=1; break; }
  sleep 1
done
[ "$loaded" = 1 ] && echo "   ok launchctl lists it" || echo "   ! launchctl does not list it yet. The runtime artifact below is the real proof."

echo "5/5  Waiting for the first firing to write to its log (learning #87)"
for i in 1 2 3 4 5 6 7 8 9 10 11 12; do
  NOW_LINES=$(wc -l < "$LOG" 2>/dev/null || echo 0)
  [ "$NOW_LINES" -gt "$BEFORE_LINES" ] && break
  sleep 5
done
NOW_LINES=$(wc -l < "$LOG" 2>/dev/null || echo 0)
if [ "$NOW_LINES" -gt "$BEFORE_LINES" ]; then
  echo "   ok the first firing ran:"
  tail -n 5 "$LOG" | sed 's/^/     /'
else
  echo "   x nothing in $LOG after 60s. Read $STATE/launchd.err.log"
  exit 1
fi

cat <<DONE

Installed. With no baseline recorded, the first firing runs one full sync
against the project's own anchor. Expect 10 to 40 minutes and one text when
it ends: "done", "needs one repo change", or "FAILED" with the reason.

  Watch:     tail -f $LOG
  State:     cat $STATE/state
  Run logs:  ls -t $STATE/logs | head
  Sync now:  touch $STATE/force
  Pause:     launchctl unload $LA/$PLIST
DONE
