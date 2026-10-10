/**
 * VoiceChecker — the interactive voice audit shared by the Register and
 * Hard-rules pages. It scores pasted copy against the seven Shokunin
 * principles and the anti-pattern library from sc-voice-checker.
 *
 * Two paths, one UI:
 *   1. Live — POSTs to https://api.anthropic.com/v1/messages with
 *      claude-sonnet-4-20250514 and no key (the site proxy injects it,
 *      per the Sprint 5 brief). Returns the LLM scorecard.
 *   2. Local — if the API is unreachable (no proxy / offline), a
 *      deterministic scan implements the rubric directly: regex
 *      anti-pattern detection + per-principle heuristics. The feature
 *      always returns a result; it is never a broken control.
 *
 * The active path is labelled so the reader knows which ran.
 */

import { useState } from 'react';
import styles from './voiceChecker.module.css';

const MODEL = 'claude-sonnet-4-20250514';
const API = 'https://api.anthropic.com/v1/messages';

const PRINCIPLES = [
  ['P1', 'Craft baseline'],
  ['P2', 'One point of view'],
  ['P3', 'Function + beauty'],
  ['P4', 'Restraint'],
  ['P5', 'Products, not pages'],
  ['P6', 'Authorship'],
  ['P7', 'Originality'],
];

// Anti-pattern library (subset detectable without an LLM), each mapped to
// the §3 category, the exact pattern name, a directional fix, and which
// principles a hit drags down.
const PATTERNS = [
  { re: /—| -- /, cat: 'Hard Rule', name: 'No em dashes', fix: 'Replace the em dash with a period or a comma; let the clause stand as its own sentence.', hits: ['P1'] },
  { re: /\bat\s+[a-z][\w'’\s]+,\s+we\s+believe\b|\bwe\s+believe\s+(that\s+)?(great|good)\b/i, cat: 'Hard Rule', name: 'Throat-clearing opener', fix: 'Open on a stated position, not a belief. Cut the “we believe” framing.', hits: ['P7', 'P6'] },
  { re: /\b(we\s+think|we\s+feel|might\s+be\s+worth|could\s+consider|we'?d\s+suggest|perhaps\s+we|maybe\s+we)\b/i, cat: 'Hard Rule', name: 'Hedging on creative direction', fix: 'State the call. “The direction is X”, not “we think it might be worth X”.', hits: ['P6'] },
  { re: /\baward[- ]?winning\b|\bwe'?ve\s+won\b|\brecogni[sz]ed\s+at\b|\bisn'?t\s+about\s+awards\b/i, cat: 'Hard Rule', name: 'Awards-as-positioning', fix: 'Cut entirely. Replace with an outcome the work produced for a client.', hits: ['P7'] },
  { re: /\b(leverage|drive\s+value|move\s+the\s+needle|synerg|streamline|circle\s+back)\w*/i, cat: 'Soft Disqualifier', name: 'Corporate filler verbs', fix: 'Name the actual thing done and the actual value delivered.', hits: ['P3'] },
  { re: /\b(impact|elevate|empower|unlock\s+value|transform\s+your)\w*/i, cat: 'Soft Disqualifier', name: 'Vague benefit language', fix: 'Replace with a specific outcome a past client measured.', hits: ['P3'] },
  { re: /\b(scalable|holistic|ecosystem|end-to-end|best-in-class|cutting-edge|world-class|robust|seamless)\b/i, cat: 'Soft Disqualifier', name: 'Empty intensifiers', fix: 'Swap the buzzword for one concrete, earned claim.', hits: ['P4', 'P7'] },
  { re: /\b(we'?re\s+thrilled|we\s+love\s+this|so\s+excited|great\s+opportunity)\b/i, cat: 'Soft Disqualifier', name: 'Hollow enthusiasm', fix: 'Cut. Enthusiasm is implied by the quality of the work.', hits: ['P6'] },
  { re: /\b\w+,\s+\w+,\s+and\s+\w+\s+(design|experience|product|solution|brand)\w*/i, cat: 'AI-Slop', name: 'Adjective stacking', fix: 'One earned, specific adjective beats three generic ones.', hits: ['P4'] },
  { re: /\btogether,?\s+we\s+(can|will)\b|\bbuild\s+something\s+(extraordinary|amazing|great)\b|\blet'?s\s+build\b/i, cat: 'AI-Slop', name: 'Inspirational closer', fix: 'Replace with a concrete next step — a stated outcome or a 30-minute call.', hits: ['P5', 'P7'] },
  { re: /\bwe\s+know\s+how\s+(hard|difficult|frustrating|tough)\b/i, cat: 'AI-Slop', name: 'Generic empathy opener', fix: 'Make the empathy specific, or open on the studio’s position instead.', hits: ['P7'] },
  { re: /\benter\s+(your\s+)?(account|the\s+following|personal)\b|\bplease\s+provide\b/i, cat: 'Net-New', name: 'Instructional microcopy', fix: 'Make it conversational — “Who’s this line for?”, not a system prompt.', hits: ['P5'] },
];

function sentencesOf(text) {
  return text.split(/(?<=[.!?])\s+/).map((s) => s.trim()).filter(Boolean);
}
function lineFor(text, index) {
  // Return the sentence containing character `index`.
  const sents = sentencesOf(text);
  let cursor = 0;
  for (const s of sents) {
    const start = text.indexOf(s, cursor);
    if (index >= start && index <= start + s.length) return s;
    cursor = start + s.length;
  }
  return sents[0] || text.slice(0, 80);
}

// Deterministic rubric scan — the offline path.
function localScan(copy, register) {
  const text = copy.trim();
  const flags = [];
  for (const p of PATTERNS) {
    const m = text.match(p.re);
    if (m) flags.push({ category: p.cat, name: p.name, line: lineFor(text, m.index ?? 0), fix: p.fix, hits: p.hits });
  }

  const sents = sentencesOf(text);
  const words = text.split(/\s+/).filter(Boolean);
  const wps = sents.length ? words.length / sents.length : words.length;

  // Perspective drift (P2): mixing we / I / the studio in one short piece.
  const persp = ['\\bwe\\b', '\\bI\\b', '\\bthe studio\\b'].filter((r) => new RegExp(r, 'i').test(text)).length;

  // Parallel-list fatigue (P2/P4): 3+ sentences opening "We <verb>".
  const weOpens = sents.filter((s) => /^we\s+\w+/i.test(s)).length;

  const scores = {};
  for (const [k] of PRINCIPLES) scores[k] = 5;
  const drop = (k, n, line, why) => {
    scores[k] = Math.max(1, scores[k] - n);
    if (!scores[k + '_ev']) scores[k + '_ev'] = { line, why };
  };

  for (const f of flags) for (const h of f.hits) drop(h, h === 'P1' ? 3 : 2, f.line, `Trips ${f.name}.`);
  if (persp > 1 && words.length < 80) drop('P2', 2, text.slice(0, 90), 'Perspective mixes we / I / the studio in a short piece.');
  if (weOpens >= 3) drop('P2', 1, sents.find((s) => /^we\s/i.test(s)) || '', 'Three openers on the same “We …” pattern.');
  if (wps > 30) drop('P4', 1, sents.find((s) => s.split(/\s+/).length > 30) || '', `Sentences average ${Math.round(wps)} words — past the register ceiling.`);
  if (words.length <= 12) { scores.P4 = Math.max(scores.P4, 4); scores.P7 = Math.max(scores.P7, scores.P7); }

  const avg = PRINCIPLES.reduce((a, [k]) => a + scores[k], 0) / 7;
  const verdict = avg >= 4 ? 'On-voice' : avg >= 2.5 ? 'Needs work' : 'Off-voice';

  const scorecard = PRINCIPLES.map(([k, label]) => ({
    key: k, label, score: scores[k],
    line: scores[k + '_ev']?.line || sents[0] || '',
    rationale: scores[k + '_ev']?.why || (scores[k] >= 5 ? 'No anti-pattern signal against this principle.' : 'Minor signal.'),
  }));

  const priorities = flags.slice(0, 3).map((f) => ({ line: f.line, principle: f.hits[0], fix: f.fix }));

  return { source: 'local', register, average: Number(avg.toFixed(1)), verdict, scorecard, antiPatterns: flags, priorities };
}

function systemPrompt(mode, register) {
  const reg = mode === 'register' && register ? `The copy is in the ${register} register. Weight the register’s posture, density, and perspective.` : 'Identify the register first, then score.';
  return [
    'You are sc-voice-checker for The Shokunin Crafthouse. Score the copy against the seven Shokunin voice principles (P1 Craft baseline, P2 One point of view, P3 Function + beauty, P4 Restraint, P5 Products not pages, P6 Authorship, P7 Originality), 1–5 each with a quoted line and a one-sentence rationale. Then run the zero-tolerance anti-pattern scan (Hard Rules: em dashes, throat-clearing openers, hedging on direction, awards; Soft Disqualifiers: empty intensifiers, corporate filler, vague benefit, hollow enthusiasm; AI-Slop: adjective stacking, inspirational closers, parallel-list fatigue, generic empathy).',
    reg,
    'Respond with ONLY valid JSON, no prose, matching exactly: {"register":string,"average":number,"verdict":"On-voice"|"Needs work"|"Off-voice","scorecard":[{"key":"P1".."P7","label":string,"score":1-5,"line":string,"rationale":string}],"antiPatterns":[{"category":string,"name":string,"line":string,"fix":string}],"priorities":[{"line":string,"principle":string,"fix":string}]}',
  ].join('\n');
}

async function runLLM(copy, register, mode) {
  const res = await fetch(API, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'anthropic-version': '2023-06-01',
      'anthropic-dangerous-direct-browser-access': 'true',
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1200,
      system: systemPrompt(mode, register),
      messages: [{ role: 'user', content: copy }],
    }),
  });
  if (!res.ok) throw new Error('api ' + res.status);
  const data = await res.json();
  const text = data?.content?.[0]?.text || '';
  const json = JSON.parse(text.slice(text.indexOf('{'), text.lastIndexOf('}') + 1));
  return { ...json, source: 'live' };
}

const REGISTERS = ['Case Study', 'Studio / Marketing', 'Client Proposal', 'Product'];
const SAMPLE = 'At The Shokunin Crafthouse, we believe great design is more than just aesthetics — it leverages cutting-edge thinking to drive value. Together, we can build something extraordinary.';

export function VoiceChecker({ mode = 'audit' }) {
  const [copy, setCopy] = useState(SAMPLE);
  const [register, setRegister] = useState(REGISTERS[1]);
  const [result, setResult] = useState(null);
  const [busy, setBusy] = useState(false);

  const run = async () => {
    if (!copy.trim()) return;
    setBusy(true);
    let out;
    try {
      out = await runLLM(copy, register, mode);
      if (!Array.isArray(out.scorecard) || out.scorecard.length !== 7) throw new Error('shape');
    } catch {
      out = localScan(copy, register);
    }
    setResult(out);
    setBusy(false);
  };

  return (
    <div className={styles.checker}>
      <div className={styles.controls}>
        {mode === 'register' && (
          <div className={styles.registerRow} role="group" aria-label="Register">
            {REGISTERS.map((r) => (
              <button key={r} type="button" className={`${styles.regChip} ${r === register ? styles.regChipSel : ''}`} onClick={() => setRegister(r)} aria-pressed={r === register}>{r}</button>
            ))}
          </div>
        )}
        <label className={styles.srLabel} htmlFor="vc-input">Copy to audit</label>
        <textarea
          id="vc-input"
          className={styles.textarea}
          value={copy}
          onChange={(e) => setCopy(e.target.value)}
          rows={4}
          placeholder="Paste any copy. The checker scores it against the seven principles."
        />
        <div className={styles.runRow}>
          <button type="button" className={styles.run} onClick={run} disabled={busy}>
            {busy ? 'Scoring…' : mode === 'register' ? `Score against ${register}` : 'Run the 7-principle audit'}
          </button>
          <button type="button" className={styles.reset} onClick={() => { setCopy(''); setResult(null); }}>Clear</button>
        </div>
      </div>

      {result && (
        <div>
          <div className={styles.resultHead}>
            <span className={`${styles.verdict} ${result.verdict === 'On-voice' ? styles.vGood : result.verdict === 'Off-voice' ? styles.vBad : styles.vMid}`}>{result.verdict}</span>
            <span className={styles.avg}>avg {result.average}<span className={styles.avgMax}> / 5</span></span>
            <span className={styles.source}>{result.source === 'live' ? `Live · ${MODEL}` : 'Local scan · connect the API proxy for the LLM audit'}</span>
          </div>

          <ol className={styles.scorecard}>
            {result.scorecard.map((row) => (
              <li key={row.key} className={styles.scoreRow}>
                <span className={styles.scoreKey}>{row.key}</span>
                <span className={styles.scoreLabel}>{row.label}</span>
                <span className={styles.scoreBar} aria-hidden="true">
                  {[1, 2, 3, 4, 5].map((n) => <span key={n} className={`${styles.pip} ${n <= row.score ? styles.pipOn : ''}`} />)}
                </span>
                <span className={styles.scoreNum}>{row.score}</span>
                <span className={styles.scoreWhy}>{row.rationale}</span>
              </li>
            ))}
          </ol>

          <div className={styles.flags}>
            <div className={styles.flagsHead}>Anti-patterns {result.antiPatterns.length === 0 ? '· none' : `· ${result.antiPatterns.length}`}</div>
            {result.antiPatterns.map((f, i) => (
              <div key={i} className={styles.flag}>
                <span className={styles.flagCat}>{f.category}<span className={styles.flagName}> · {f.name}</span></span>
                <span className={styles.flagLine}>“{f.line}”</span>
                <span className={styles.flagFix}>→ {f.fix}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
