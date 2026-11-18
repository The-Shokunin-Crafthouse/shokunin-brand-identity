#!/usr/bin/env bash
# Agent build test runner (WQ-142 slice 1, ADR-165 decision 1).
# Usage: run.sh [arm-label]   default arm label: 2026-11-17-nodocs
# Arm "nodocs": the session gets only the task text plus "Build it with this
# repo's design system." and no component doc. The docs arm (slice 2) changes
# only the ARM_EXTRA line below and nothing else.
# Each prompt runs in a throwaway `git worktree add --detach` of origin/main
# under /tmp, removed afterwards. The primary checkout is never touched.
set -u
HERE="$(cd "$(dirname "$0")" && pwd)"
REPO="$(git -C "$HERE" rev-parse --show-toplevel)"
ARM="${1:-2026-11-17-nodocs}"
CLAUDE_BIN="${CLAUDE_BIN:-$HOME/.local/bin/claude}"
OUT="$HERE/runs/$ARM"
ARM_EXTRA=""   # nodocs arm: nothing. Slice 2 sets the doc pointer here.
git -C "$REPO" fetch -q origin main
BASE="$(git -C "$REPO" rev-parse origin/main)"
mkdir -p "$OUT"

# Split prompts.md into p1..p5 task bodies (text under each "## P<N>." heading).
node --input-type=module -e '
import fs from "node:fs";
const [src, out] = process.argv.slice(1);
const parts = fs.readFileSync(src, "utf8").split(/^## P(\d)\. .*$/m);
for (let i = 1; i < parts.length; i += 2)
  fs.writeFileSync(`${out}/p${parts[i]}.task.txt`, parts[i + 1].trim() + "\n");
' "$HERE/prompts.md" "$OUT"

run_one() {
  local n="$1" wt="/tmp/wq142-$ARM-p$n" d="$OUT/p$n"
  mkdir -p "$d"
  git -C "$REPO" worktree add -q --detach "$wt" "$BASE" || return 1
  local task; task="$(cat "$OUT/p$n.task.txt")"
  local prompt="$task
Build it with this repo's design system. Write your build into the directory build-output/ (create it) and nowhere else. $ARM_EXTRA"
  local start=$SECONDS
  (cd "$wt" && "$CLAUDE_BIN" -p "$prompt" --model sonnet --effort medium \
      --tools "Read,Write,Edit,Glob,Grep" --strict-mcp-config --mcp-config '{"mcpServers":{}}' \
      --permission-mode acceptEdits --no-session-persistence --max-turns 60 \
      --output-format json) > "$d/raw.json" 2> "$d/stderr.txt"
  local code=$?
  echo "$code $((SECONDS - start))" > "$d/exit-and-seconds.txt"
  mkdir -p "$d/output"
  [ -d "$wt/build-output" ] && cp -R "$wt/build-output/." "$d/output/"
  # summary: small, committed; raw.json is committed only if under 200 KB
  node -e '
const fs=require("fs");const [d,code,secs]=process.argv.slice(1);
let j={};try{j=JSON.parse(fs.readFileSync(d+"/raw.json","utf8"))}catch(e){j={parse_error:String(e)}}
const u=j.usage||{};
const files=[];(function w(p){for(const e of fs.readdirSync(p,{withFileTypes:true})){const q=p+"/"+e.name;e.isDirectory()?w(q):files.push(q.slice(d.length+8))}})(d+"/output");
fs.writeFileSync(d+"/summary.json",JSON.stringify({exit_code:+code,wall_seconds:+secs,is_error:j.is_error??null,num_turns:j.num_turns??null,
 total_cost_usd:j.total_cost_usd??null,input_tokens:u.input_tokens??null,output_tokens:u.output_tokens??null,
 cache_read_input_tokens:u.cache_read_input_tokens??null,cache_creation_input_tokens:u.cache_creation_input_tokens??null,
 output_files:files.sort()},null,2)+"\n");
' "$d" "$code" "$((SECONDS - start))"
  [ "$(wc -c < "$d/raw.json")" -gt 204800 ] && rm -f "$d/raw.json"
  [ -s "$d/stderr.txt" ] || rm -f "$d/stderr.txt"
  rm -f "$d/exit-and-seconds.txt"
  git -C "$REPO" worktree remove --force "$wt"
}

for n in 1 2 3 4 5; do run_one "$n" & done
wait
rm -f "$OUT"/p*.task.txt
echo "done: $OUT"
