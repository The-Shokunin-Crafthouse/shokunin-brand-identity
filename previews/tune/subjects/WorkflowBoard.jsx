/*
 * The Studio PM workflow board, as a lab subject (studio-pm ADR-119; Levi,
 * 2026-10-10: "propose 3 different UI options that look more like the
 * images i attached").
 *
 * Not an SCDS component: the board is drawn natively in Studio PM. This is a
 * web model of it, so its looks can be tried and tuned here before one is
 * built in SwiftUI. Every colour, radius, space and type it draws is an SCDS
 * token read through CSS, so the lab's panel tunes them like any component's.
 *
 *   Shipped   the board as built in the app and in Figma section G
 *             (cards in actor rows, rail paths above, gates drawn as the
 *             yellow You cards)
 *   A         Pipeline: status chips, rounded connectors, the travelled path
 *             lit in signal yellow with its labels as pills (reference 1)
 *   B         Swimlane: actor lanes as bands with turned labels, a faint
 *             grid, handoffs between lanes dashed with an event chip
 *             (reference 3)
 *   C         Signal: one line of round nodes with the actor as a glyph,
 *             the flow drawn as a chevron trail, branches as arcs above
 *             (reference 4)
 *
 * Shared rules, all four: the flow runs left to right, one step per column,
 * nine columns at least; a You step is the gate and is yellow with dark teal
 * ink; nothing overlaps; the run's travelled path is the collector's list.
 */

import { useMemo, useState } from 'react';
import { Check, CircleDashed, Gear, Sparkle, User } from '@phosphor-icons/react';
import { WorkingMark } from '../../../src/components/WorkingMark/WorkingMark.jsx';
import { WORKFLOWS } from './workflowData.js';
import s from './WorkflowBoard.module.css';

export const LOOKS = ['A · Pipeline', 'B · Swimlane', 'C · Signal'];
export const WORKFLOW_NAMES = { 'Sprint unit': 'sprint-unit', Stages: 'stages', 'Session harness': 'session-harness' };
export const RUNS = ['sample', 'as read', 'none'];

const W = 1171;
const ROW_NAMES = ['You', 'Claude', 'Automated'];
const LANE = { you: 0, claude: 1, automated: 2 };
const GLYPH = { you: User, claude: Sparkle, automated: Gear };

/* A labelled sample run for a workflow the collector has no run for, so the
   done, now and remaining states can be judged. The page says it is a sample. */
function sampleRun(wf) {
  const ids = wf.steps.map((x) => x.id);
  const cut = Math.min(5, ids.length - 2);
  const steps = {};
  ids.forEach((id, i) => { steps[id] = { state: i < cut ? 'done' : i === cut ? 'current' : 'remaining', proof: i < cut ? 'sample' : null }; });
  const travelled = [];
  for (let i = 0; i < cut; i++) {
    if (wf.steps[i].next.some((n) => n.to === ids[i + 1])) travelled.push({ from: ids[i], to: ids[i + 1] });
  }
  return { repo: 'sample', branch: 'feat/sample', current: ids[cut], counts: { done: cut, unrecorded: 0, remaining: ids.length - cut - 1 }, travelled, steps, sample: true };
}

/* The flow as indices: one edge per `next`, `to` is a step or `n` for End.
   An edge to the next step runs in the gap between columns; every other edge
   rides the rail, the longest outermost, one track per overlapping path. */
function model(wf, runMode) {
  const steps = wf.steps;
  const n = steps.length;
  const at = Object.fromEntries(steps.map((x, i) => [x.id, i]));
  const run = runMode === 'none' ? null : runMode === 'sample' ? (wf.run || sampleRun(wf)) : wf.run;
  const travelled = new Set((run?.travelled || []).map((t) => `${at[t.from]}-${at[t.to]}`));
  const edges = [];
  steps.forEach((step, i) => step.next.forEach((nx) => {
    const to = nx.to === 'end' ? n : at[nx.to];
    if (to === undefined) return;
    edges.push({ from: i, to, label: nx.label, rail: to !== i + 1, travelled: travelled.has(`${i}-${to}`), track: 0 });
  }));
  const rails = edges.filter((e) => e.rail).sort((a, b) => (Math.abs(b.to - b.from) - Math.abs(a.to - a.from)) || a.from - b.from);
  const placed = [];
  for (const e of rails) {
    const lo = Math.min(e.from, e.to), hi = Math.max(e.from, e.to);
    let t = 0;
    while (placed.some((p) => p.track === t && p.lo <= hi && lo <= p.hi)) t++;
    e.track = t; placed.push({ lo, hi, track: t });
  }
  const tracks = Math.max(0, ...rails.map((e) => e.track + 1));
  const lanes = [...new Set(steps.map((x) => LANE[x.actor]))].sort();
  const state = (i) => run?.steps?.[steps[i].id]?.state || null;
  return { steps, n, edges, tracks, lanes, run, state, cols: Math.max(9, n) };
}

const WORD = { done: 'Done', current: 'Now', unrecorded: 'No record' };

/* A polyline with rounded corners. */
function rounded(pts, r) {
  if (pts.length < 3 || !r) return pts.map((p, i) => `${i ? 'L' : 'M'} ${p[0]} ${p[1]}`).join(' ');
  let d = `M ${pts[0][0]} ${pts[0][1]}`;
  for (let i = 1; i < pts.length - 1; i++) {
    const [px, py] = pts[i - 1], [cx, cy] = pts[i], [nx, ny] = pts[i + 1];
    const a = Math.min(r, Math.hypot(cx - px, cy - py) / 2), b = Math.min(r, Math.hypot(nx - cx, ny - cy) / 2);
    const ux = Math.sign(cx - px), uy = Math.sign(cy - py), vx = Math.sign(nx - cx), vy = Math.sign(ny - cy);
    d += ` L ${cx - ux * a} ${cy - uy * a} Q ${cx} ${cy} ${cx + vx * b} ${cy + vy * b}`;
  }
  const last = pts[pts.length - 1];
  return `${d} L ${last[0]} ${last[1]}`;
}

/* ---------- geometry per look ---------- */

function laneGeometry(m, o0) {
  // A labelled path into End needs the label's room in the trailing gutter.
  const o = m.edges.some((e) => e.to === m.n && e.label && !e.rail) ? { ...o0, trail: o0.trail + 64 } : o0;
  const colW = (W - o.lead - o.trail - (m.cols - 1) * o.gap) / m.cols;
  const railTop = o.top;
  const trackY = (t) => railTop + o.label + t * o.trackGap;
  const rowsTop = (m.tracks ? trackY(m.tracks - 1) : railTop) + o.clear;
  const place = (lane) => m.lanes.indexOf(lane);
  const rowY = (lane) => rowsTop + place(lane) * (o.cardH + o.rowGap);
  const card = (i) => {
    if (i >= m.n) {
      const last = card(m.n - 1);
      return { x: W - o.trail + o.gap, y: last.y + last.h / 2 - o.label / 2, w: o.trail - o.gap, h: o.label, end: true };
    }
    const lane = LANE[m.steps[i].actor];
    return { x: o.lead + i * (colW + o.gap), y: rowY(lane), w: colW, h: o.cardH };
  };
  const height = rowsTop + m.lanes.length * o.cardH + (m.lanes.length - 1) * o.rowGap + o.foot;
  return { colW, trackY, rowsTop, rowY, card, height };
}

function edgePoints(m, g, e, o) {
  const A = g.card(e.from), Z = g.card(e.to);
  const midY = (f) => f.y + f.h / 2;
  if (!e.rail) {
    if (Z.end || midY(A) === midY(Z)) return [[A.x + A.w, midY(A)], [Z.x, midY(A)]];
    const up = midY(Z) < midY(A);
    const x = Z.x + Z.w / 2;
    return [[A.x + A.w, midY(A)], [x, midY(A)], [x, up ? Z.y + Z.h : Z.y]];
  }
  const y = g.trackY(e.track);
  const spread = m.edges.filter((x) => x.rail && x.from === e.from);
  const k = spread.indexOf(e) - (spread.length - 1) / 2;
  const x0 = A.x + A.w / 2 - A.w / 4 + k * o.spread;
  const x1 = Z.end ? Z.x + o.spread : Z.x + Z.w / 2 + Z.w / 4;
  return [[x0, A.y], [x0, y], [x1, y], [x1, Z.end ? Z.y : Z.y]];
}

/* ---------- the panel ---------- */

function Panel({ m, i, x, y }) {
  const step = m.steps[i];
  const titles = Object.fromEntries(m.steps.map((t) => [t.id, t.title]));
  const st = m.run?.steps?.[step.id];
  const left = Math.min(Math.max(0, x), W - 264);
  return (
    <div className={s.panel} style={{ left, top: y }} role="group" aria-label={`Details of ${step.title}`}>
      <span className={s.panelTitle}>{step.title}</span>
      <span className={s.panelRow}>{ROW_NAMES[LANE[step.actor]]}{step.gate ? ` · Gate: ${step.gate}` : ''}</span>
      <span className={s.panelLine}>{step.line}</span>
      {step.next.map((n) => (
        <span key={n.to + (n.label || '')} className={s.panelFact}>Next: {n.to === 'end' ? 'End' : titles[n.to]}{n.label ? `, if ${n.label}` : ''}</span>
      ))}
      {st && st.state !== 'remaining' && <span className={s.panelFact}>{st.state === 'done' ? `Done${st.proof ? `: ${st.proof}` : ''}` : st.state === 'current' ? 'Now' : 'No record of this step'}</span>}
      <span className={s.panelActions}><span className={s.link}>Copy</span><span className={s.link}>Open</span></span>
    </div>
  );
}

/* ---------- Shipped: the board as built ---------- */

function Shipped({ m, hover, setHover }) {
  const o = { lead: 64, trail: 44, gap: 12, top: 0, label: 16, trackGap: 20, clear: 28, cardH: 76, rowGap: 24, foot: 40, spread: 8 };
  const g = laneGeometry(m, o);
  return (
    <Frame height={g.height} m={m} hover={hover} g={g}>
      <svg className={s.svg} width={W} height={g.height} aria-hidden="true">
        {m.edges.map((e, k) => (
          <path key={k} d={rounded(edgePoints(m, g, e, o), 0)} className={`${s.lineShipped} ${e.travelled ? s.heavy : ''}`} />
        ))}
      </svg>
      {m.lanes.map((lane) => <span key={lane} className={s.rowName} style={{ top: g.rowY(lane), height: o.cardH, width: o.lead - 8 }}>{ROW_NAMES[lane]}</span>)}
      <EdgeLabels m={m} g={g} o={o} className={s.labelPlain} />
      {m.steps.map((step, i) => {
        const f = g.card(i), st = m.state(i);
        return (
          <button key={step.id} type="button" className={`${s.cardShipped} ${step.actor === 'you' ? s.you : ''} ${hover === i ? s.hovered : ''}`}
            style={{ left: f.x, top: f.y, width: f.w, height: f.h }} onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}>
            <span className={s.titleUi}>{step.title}</span>
            {WORD[st] && <span className={s.word}>{WORD[st]}</span>}
          </button>
        );
      })}
      <End g={g} m={m} />
    </Frame>
  );
}

/* ---------- A · Pipeline ---------- */

function Pipeline({ m, hover, setHover }) {
  const o = { lead: 72, trail: 48, gap: 14, top: 4, label: 22, trackGap: 30, clear: 36, cardH: 82, rowGap: 40, foot: 44, spread: 10 };
  const g = laneGeometry(m, o);
  return (
    <Frame height={g.height} m={m} hover={hover} g={g}>
      <svg className={s.svg} width={W} height={g.height} aria-hidden="true">
        {m.edges.map((e, k) => (
          <path key={k} d={rounded(edgePoints(m, g, e, o), 14)}
            className={`${s.linePipe} ${e.rail ? s.dashed : ''} ${e.travelled ? s.lit : ''}`} />
        ))}
      </svg>
      {m.lanes.map((lane) => <span key={lane} className={s.rowNameQuiet} style={{ top: g.rowY(lane), height: o.cardH, width: o.lead - 12 }}>{ROW_NAMES[lane]}</span>)}
      <EdgeLabels m={m} g={g} o={o} pill />
      {m.steps.map((step, i) => {
        const f = g.card(i), st = m.state(i);
        const Glyph = st === 'done' ? Check : CircleDashed;
        return (
          <button key={step.id} type="button" data-state={st || 'none'}
            className={`${s.chip} ${step.actor === 'you' ? s.you : ''} ${hover === i ? s.hovered : ''}`}
            style={{ left: f.x, top: f.y, width: f.w, height: f.h }} onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}>
            <span className={s.chipHead}>
              {st === 'current' ? <WorkingMark size="xs" label="Working" /> : st ? <Glyph className={s.chipGlyph} weight="bold" aria-hidden="true" /> : null}
              {step.gate && <span className={s.gateTag}>{step.gate}</span>}
            </span>
            <span className={s.titleUi}>{step.title}</span>
          </button>
        );
      })}
      <End g={g} m={m} />
    </Frame>
  );
}

/* ---------- B · Swimlane ---------- */

function Swimlane({ m, hover, setHover }) {
  const o = { lead: 56, trail: 48, gap: 14, top: 4, label: 22, trackGap: 28, clear: 30, cardH: 56, rowGap: 40, foot: 34, spread: 10 };
  const g = laneGeometry(m, o);
  const pad = 16;
  const crosses = (e) => !e.rail && e.to < m.n && LANE[m.steps[e.from].actor] !== LANE[m.steps[e.to].actor];
  const height = g.height + pad;
  return (
    <Frame height={height} m={m} hover={hover} g={g} grid>
      {m.lanes.map((lane) => (
        <div key={lane} className={s.lane} style={{ top: g.rowY(lane) - pad, height: o.cardH + 2 * pad }}>
          <span className={s.laneName} style={{ width: o.lead - 12 }}>{ROW_NAMES[lane]}</span>
        </div>
      ))}
      <svg className={s.svg} width={W} height={height} aria-hidden="true">
        <defs>
          <marker id="wb-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="8" markerHeight="8" orient="auto-start-reverse" markerUnits="userSpaceOnUse">
            <path d="M 0 0 L 8 4 L 0 8 z" className={s.arrowHead} />
          </marker>
        </defs>
        {m.edges.map((e, k) => (
          <path key={k} d={rounded(edgePoints(m, g, e, o), 10)} markerEnd="url(#wb-arrow)"
            className={`${s.lineLane} ${e.rail || crosses(e) ? s.dashed : ''} ${e.travelled ? s.laneLit : ''}`} />
        ))}
      </svg>
      <EdgeLabels m={m} g={g} o={o} chip crosses={crosses} />
      {m.steps.map((step, i) => {
        const f = g.card(i), st = m.state(i);
        return (
          <button key={step.id} type="button" data-state={st || 'none'}
            className={`${s.block} ${step.actor === 'you' ? s.you : ''} ${hover === i ? s.hovered : ''}`}
            style={{ left: f.x, top: f.y, width: f.w, height: f.h }} onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}>
            <span className={s.blockTitle}>{step.title}</span>
            {st === 'done' && <Check className={s.blockCheck} weight="bold" aria-label="Done" />}
          </button>
        );
      })}
      <End g={g} m={m} />
    </Frame>
  );
}

/* ---------- C · Signal ---------- */

function Signal({ m, hover, setHover }) {
  const lead = 24, trail = 56, node = 44;
  const colW = (W - lead - trail) / m.cols;
  const arcH = 40;
  const top = 18 + Math.max(1, m.tracks) * arcH;
  const cx = (i) => lead + i * colW + colW / 2;
  const cy = top + node / 2;
  const height = top + node + 8 + 40 + 34;
  const endX = W - trail + 12;
  const X = (i) => (i >= m.n ? endX : cx(i));
  const chevrons = (x0, x1, lit) => {
    const out = [];
    for (let x = x0 + 6; x < x1 - 8; x += 11) out.push(<path key={x} d={`M ${x} ${cy - 4} L ${x + 5} ${cy} L ${x} ${cy + 4}`} className={`${s.chevron} ${lit ? s.chevronLit : ''}`} />);
    return out;
  };
  return (
    <Frame height={height} m={m} hover={hover} g={{ card: (i) => ({ x: cx(i) - colW / 2 + 4, y: cy + node / 2 + 8, w: colW - 8, h: 40 }) }} grid soft>
      <svg className={s.svg} width={W} height={height} aria-hidden="true">
        {m.edges.map((e, k) => {
          if (!e.rail) return <g key={k}>{chevrons(X(e.from) + node / 2, X(e.to) - (e.to >= m.n ? 0 : node / 2), e.travelled)}</g>;
          const x0 = X(e.from), x1 = X(e.to), y = cy - node / 2 - 6 - (e.track + 1) * arcH + 8;
          const d = `M ${x0} ${cy - node / 2} C ${x0} ${y}, ${x1} ${y}, ${x1} ${e.to >= m.n ? cy - 8 : cy - node / 2}`;
          return <path key={k} d={d} className={`${s.arc} ${e.travelled ? s.chevronLit : ''}`} />;
        })}
      </svg>
      {m.edges.filter((e) => e.label).map((e, k) => {
        // A rail label sits on its arc's apex; a straight run's above the trail.
        const start = cy - node / 2, ctrl = start - 6 - (e.track + 1) * arcH + 8;
        const y = e.rail ? start + 0.75 * (ctrl - start) : cy + node / 2 + 8 + 40 + 14;
        return <span key={k} className={`${s.signalTag} ${e.travelled ? s.pillLit : ''}`} style={{ left: (X(e.from) + X(e.to)) / 2, top: y }}>{e.label}</span>;
      })}
      {m.steps.map((step, i) => {
        const st = m.state(i);
        const Glyph = GLYPH[step.actor];
        return (
          <button key={step.id} type="button" data-state={st || 'none'} className={`${s.nodeWrap} ${hover === i ? s.hovered : ''}`}
            style={{ left: cx(i) - colW / 2, top: cy - node / 2, width: colW }} onPointerEnter={() => setHover(i)} onPointerLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)}>
            <span className={`${s.node} ${step.actor === 'you' ? s.youNode : ''}`} style={{ width: node, height: node }}>
              {st === 'current' ? <WorkingMark size="sm" label="Working" /> : <Glyph weight={st === 'done' ? 'fill' : 'regular'} className={s.nodeGlyph} aria-hidden="true" />}
            </span>
            <span className={s.nodeChip}>{step.title}</span>
          </button>
        );
      })}
      <span className={s.endTag} style={{ left: endX, top: cy - 8 }}>End</span>
    </Frame>
  );
}

/* ---------- shared parts ---------- */

function Frame({ height, m, hover, g, grid, soft, children }) {
  const f = hover != null && hover < m.n ? g.card(hover) : null;
  return (
    <div className={`${s.board} ${grid ? (soft ? s.gridSoft : s.grid) : ''}`} style={{ width: W, height: height + (f ? 220 : 0) }}>
      {children}
      {f && <Panel m={m} i={hover} x={f.x} y={f.y + f.h + 10} />}
    </div>
  );
}

function EdgeLabels({ m, g, o, pill, chip, crosses, className }) {
  return m.edges.filter((e) => e.label || (chip && crosses?.(e))).map((e, k) => {
    const pts = edgePoints(m, g, e, o);
    let x, y, shift = '-50%';
    // A rail label sits on its track at the end it leaves from, so two paths
    // on one track never share a label's place.
    if (e.rail) { const fwd = pts[2][0] >= pts[1][0]; x = pts[1][0] + (fwd ? 8 : -8); y = pts[1][1]; shift = fwd ? '0%' : '-100%'; }
    // A straight run between neighbours has no room on its line: its label
    // sits under the row, centred on the gap, clear of both cards.
    else if (pts.length === 2 && e.to === m.n) { const f = g.card(m.n); x = f.x; y = f.y + f.h + o.label; shift = '0%'; }
    else if (pts.length === 2) { const f = g.card(e.from); x = (pts[0][0] + pts[1][0]) / 2; y = f.y + f.h + o.label; }
    else { x = pts[1][0]; y = (pts[1][1] + pts[2][1]) / 2; }
    const text = e.label || 'handoff';
    const cls = pill ? `${s.pill} ${e.travelled ? s.pillLit : ''}` : chip ? s.eventChip : (className || s.labelPlain);
    return <span key={k} className={cls} style={{ left: x, top: y, transform: `translate(${shift}, -50%)` }}>{text}</span>;
  });
}

function End({ g, m }) {
  const f = g.card(m.n);
  return <span className={s.endTag} style={{ left: f.x, top: f.y }}>End</span>;
}

function RunLine({ m, wf }) {
  const r = m.run;
  if (!r) return <p className={s.runLine}>Not running in any repo</p>;
  const cur = wf.steps.find((x) => x.id === r.current)?.title;
  return (
    <p className={s.runLine}>
      {r.sample ? 'Sample run, not read' : `Running in ${r.repo} on ${r.branch}`} · {r.counts.done} done{cur ? `, on ${cur}` : ''}, {r.counts.remaining} remaining
    </p>
  );
}

export function WorkflowBoardLab({ look, workflow, run, hover: pinned, shipped }) {
  const wf = WORKFLOWS[WORKFLOW_NAMES[workflow]] || WORKFLOWS['sprint-unit'];
  const m = useMemo(() => model(wf, run), [wf, run]);
  const [pointer, setPointer] = useState(null);
  const pinnedIndex = wf.steps.findIndex((x) => x.title === pinned);
  const hover = pointer ?? (pinnedIndex >= 0 ? pinnedIndex : null);
  const Look = shipped ? Shipped : { 'A · Pipeline': Pipeline, 'B · Swimlane': Swimlane, 'C · Signal': Signal }[look] || Pipeline;
  return (
    <div className={s.root}>
      <header className={s.head}>
        <span className={s.headTitle}>{wf.title}</span>
        <span className={s.headMeta}>{shipped ? 'as built' : look}</span>
      </header>
      <RunLine m={m} wf={wf} />
      <Look m={m} hover={hover} setHover={setPointer} />
    </div>
  );
}
