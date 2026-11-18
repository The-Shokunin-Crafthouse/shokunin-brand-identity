import fs from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";
const [runs, counter, repo] = process.argv.slice(2);
const rows = [];
for (const n of [1, 2, 3, 4, 5]) {
  const d = path.join(runs, `p${n}`), out = path.join(d, "output");
  const row = { prompt: `P${n}` };
  let sum = {};
  try { sum = JSON.parse(fs.readFileSync(path.join(d, "summary.json"), "utf8")); } catch {}
  const files = fs.existsSync(out) ? fs.readdirSync(out, { recursive: true }).length : 0;
  row.output_files = files;
  row.seconds = sum.wall_seconds ?? null;
  row.cost_usd = sum.total_cost_usd == null ? null : Math.round(sum.total_cost_usd * 1e4) / 1e4;
  row.output_tokens = sum.output_tokens ?? null;
  row.total_tokens = sum.input_tokens == null ? null :
    sum.input_tokens + sum.output_tokens + (sum.cache_read_input_tokens ?? 0) + (sum.cache_creation_input_tokens ?? 0);
  if (!files) { row.status = "NO OUTPUT (not graded)"; rows.push(row); continue; }
  const dr = spawnSync("node", [process.env.DRIFT, out, "--format", "json"], { encoding: "utf8" });
  let dj; try { dj = JSON.parse(dr.stdout); } catch { dj = null; }
  const scanned = dj ? Number(((dj.notes || []).join(" ").match(/scanned (\d+) file/) || [])[1] ?? 0) : 0;
  row.drift_scanned_files = scanned;
  if (!dj || dj.error || scanned === 0) { row.status = "DRIFT SCANNED ZERO FILES (not a pass)"; rows.push(row); continue; }
  const cat = {};
  for (const f of dj.findings) cat[f.rule] = (cat[f.rule] ?? 0) + 1;
  row.drift_total = dj.counts.total;
  row.drift_by_rule = Object.fromEntries(Object.entries(cat).sort(([a], [b]) => a.localeCompare(b)));
  const hb = JSON.parse(execFileSync("node", [counter, out, "--repo", repo], { encoding: "utf8" }));
  row.handbuilt_total = hb.total;
  row.handbuilt_by_component = hb.by_component;
  row.status = "graded";
  rows.push(row);
}
const g = rows.filter((r) => r.status === "graded");
const sum = (k) => rows.reduce((a, r) => a + (r[k] ?? 0), 0);
const totals = { drift_total: sum("drift_total"), handbuilt_total: sum("handbuilt_total"), cost_usd: Math.round(sum("cost_usd") * 1e4) / 1e4, total_tokens: sum("total_tokens"), seconds: sum("seconds"), graded: g.length };
fs.writeFileSync(path.join(runs, "results.json"), JSON.stringify({ arm: path.basename(runs), rows, totals }, null, 2) + "\n");
const fmt = (o) => o && Object.keys(o).length ? Object.entries(o).map(([k, v]) => `${k} ${v}`).join(", ") : "none";
let md = `# Results: ${path.basename(runs)}\n\n| Prompt | Status | Drift findings (by rule) | Hand-built (by component) | Total tokens | Cost USD | Seconds |\n|---|---|---|---|---|---|---|\n`;
for (const r of rows)
  md += `| ${r.prompt} | ${r.status} | ${r.status === "graded" ? `${r.drift_total}: ${fmt(r.drift_by_rule)}` : "-"} | ${r.status === "graded" ? `${r.handbuilt_total}: ${fmt(r.handbuilt_by_component)}` : "-"} | ${r.total_tokens ?? "-"} | ${r.cost_usd ?? "-"} | ${r.seconds ?? "-"} |\n`;
md += `| Total | ${g.length}/5 graded | ${totals.drift_total} | ${totals.handbuilt_total} | ${totals.total_tokens} | ${totals.cost_usd} | ${totals.seconds} |\n\nDrift scanned files per run: ${rows.map((r) => `${r.prompt}=${r.drift_scanned_files ?? 0}`).join(", ")}.\nTotal tokens counts input, output, cache read and cache creation.\n`;
fs.writeFileSync(path.join(runs, "results.md"), md);
