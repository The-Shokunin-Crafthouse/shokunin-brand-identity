/**
 * MotionSection — Foundations · Motion · fully built.
 *
 * Three beats: the easing curves (each a live bezier plot + a dot that
 * travels on that curve when clicked), the duration scale (a race that
 * lets you feel the four tiers against each other), and three real
 * component pairings imported from the Sprint 4 library — the Button
 * press, the Switch thumb, the Tooltip reveal — animating for real.
 * Every duration/easing/scale reads from a --sc-p-motion-* token.
 *
 * Chapter iv (2026-10-07): elastic controls, from kabarza's elastic
 * toggles reel. The settings ship inert; the live panel runs the reel's
 * Balanced preset through token overrides on its own wrapper only.
 */

import { useState } from 'react';
import { Section, Metabar, Hero, Chapter, Accent, Em, Slash, withSlash, kit } from './_kit/Editorial.jsx';
import { Button } from '../components/Button/Button.jsx';
import { Switch } from '../components/Switch/Switch.jsx';
import { Tooltip } from '../components/Tooltip/Tooltip.jsx';
import { SegmentedControl } from '../components/SegmentedControl/SegmentedControl.jsx';
import { PlusUnderline } from '../components/PlusUnderline/PlusUnderline.jsx';
import { springEasing } from '../motion/elastic.js';
import styles from './MotionSection.module.css';

const EASINGS = [
  { key: 'out', token: '--sc-p-motion-easing-out', bezier: [0.22, 1, 0.36, 1], label: 'Quint-out', role: 'Primary',
    durToken: '--sc-p-motion-duration-standard', durMs: '380',
    contexts: 'Hover · state change · most enters and exits',
    principle: 'Fast commit, gentle settle. Mechanical ease-out. The default — reach for this unless there is a reason not to.' },
  { key: 'outStrong', token: '--sc-p-motion-easing-out-strong', bezier: [0.23, 1, 0.32, 1], label: 'Strong quint-out', role: 'Press',
    durToken: '--sc-p-motion-duration-press', durMs: '160',
    contexts: 'Button press and release',
    principle: 'A sharper commit than out. Pairs with the 0.985 press scale so the control reads as physically depressed.' },
  { key: 'inOut', token: '--sc-p-motion-easing-in-out', bezier: [0.65, 0, 0.35, 1], label: 'Symmetric', role: 'Crossfade',
    durToken: '--sc-p-motion-duration-standard', durMs: '380',
    contexts: 'Crossfades · mode switch',
    principle: 'Enters and exits weighted equally. For a change with no direction — light to dark, surface to surface.' },
  { key: 'cinematic', token: '--sc-p-motion-easing-cinematic', bezier: [0.32, 0.08, 0.12, 1], label: 'Long deliberate', role: 'Orchestrated',
    durToken: '--sc-p-motion-duration-orchestrated', durMs: '720',
    contexts: 'Page · route · orchestrated reveal',
    principle: 'Slow lead-in, long settle. Orchestrated only. Anything that uses it justifies the wait in writing.' },
];

const DURATIONS = [
  { token: '--sc-p-motion-duration-press', ms: 160, tier: 'Press feedback', use: 'Press and release. The fastest interval in the system.' },
  { token: '--sc-p-motion-duration-micro', ms: 200, tier: 'Micro feedback', use: 'Hover, tap, state-in. The default micro-interaction.' },
  { token: '--sc-p-motion-duration-standard', ms: 380, tier: 'State transition', use: 'Cross-fade, surface swap, mode change.' },
  { token: '--sc-p-motion-duration-orchestrated', ms: 720, tier: 'Page transition', use: 'Route, choreographed reveal. Justify anything longer.' },
];

// Elastic controls · the reel's Balanced preset (kabarza, instagram.com/reel/DeK0AFcIRhf).
const REEL = { duration: 520, bounce: 0, stretch: 0.45, squash: 0, lean: 0.83, leanMs: 150 };
const ELASTIC = [
  { setting: 'Duration + bounce', suffix: '-travel-duration / -travel-easing', reel: '520ms · bounce 0', shipped: '= reveal: 200ms quint-out',
    does: 'A spring set by how long it takes and how far it overshoots. Bounce 0 reaches rest as fast as it can without passing it; above 0 it passes and swings back.' },
  { setting: 'Stretch', suffix: '-stretch', reel: '0.45', shipped: '0',
    does: 'The pill is as long as it is fast: 0.45 adds 45% of its height at peak speed and it lands round. Two round ends and a bar, never scaleX.' },
  { setting: 'Squash', suffix: '-squash', reel: '0', shipped: '0',
    does: 'Flatter while it is long: 0.22 is the reel\u2019s elastic row, 22% flatter at peak speed.' },
  { setting: 'Press lean', suffix: '-press-lean / -press-lean-duration', reel: '0.83 · 150ms', shipped: '0',
    does: 'On pointer down it leans toward where it will go and holds. Release travels from that pose; drag off and it springs back.' },
];
const ELASTIC_COMPONENTS = [
  { name: 'Switch', prefix: 'switch', moves: 'The knob', press: 'Yes' },
  { name: 'SegmentedControl', prefix: 'segmented-control', moves: 'The indicator', press: 'Yes' },
  { name: 'PlusUnderline', prefix: 'plus-underline', moves: 'The active underline, from the old tab to the new one', press: 'Yes' },
  { name: 'NavBar', prefix: 'nav-bar', moves: 'Its optional underline (underline prop)', press: 'Yes' },
  { name: 'Tooltip', prefix: 'tooltip', moves: 'The bubble on open, scaled from the arrow (it carries text)', press: 'No' },
];
const reelSpring = springEasing({ duration: REEL.duration, bounce: REEL.bounce });
const reelVars = Object.fromEntries(ELASTIC_COMPONENTS.flatMap(({ prefix }) => {
  const t = `--sc-motion-${prefix}`;
  return [
    [`${t}-travel-duration`, `${reelSpring.ms}ms`],
    [`${t}-travel-easing`, reelSpring.easing],
    [`${t}-stretch`, REEL.stretch],
    [`${t}-squash`, REEL.squash],
    [`${t}-press-lean`, REEL.lean],
    [`${t}-press-lean-duration`, `${REEL.leanMs}ms`],
  ];
}));
const TABS = ['Day', 'Week', 'Month'];

const bezierPath = (b) => `M0,100 C${b[0] * 100},${100 - b[1] * 100} ${b[2] * 100},${100 - b[3] * 100} 100,0`;

export function MotionSection() {
  const [runs, setRuns] = useState({});
  const [racing, setRacing] = useState(false);
  const [on, setOn] = useState(false);
  const [elasticOn, setElasticOn] = useState(false);
  const [range, setRange] = useState('day');
  const [tab, setTab] = useState('Day');

  const fire = (key) => setRuns((r) => ({ ...r, [key]: !r[key] }));

  return (
    <Section id="motion" labelledBy="motion-title">
      <Metabar
        ord="01"
        crumb="Foundations / Motion"
        meta={[
          ['Last revised', '2026.10.07'],
          ['Tokens', '19'],
          ['Spec', 'v1.3'],
          ['Status', 'Complete'],
        ]}
      />

      <Hero
        id="motion-title"
        eyebrow={<>Motion<Slash />mechanical, not organic</>}
        title={<>Four curves, four durations. <Accent>Nothing</Accent> in the system <Em>overshoots.</Em></>}
        lead={
          <>The motion language is a precision instrument, not a toy. Curves favour a fast mechanical
          commit and a quiet settle; no control point ever rises above one, so nothing springs or
          bounces. Click any curve to send a dot along it.</>
        }
      />

      {/* i · EASING CURVES */}
      <Chapter
        ord="i"
        eyebrow="Easing / four curves"
        title="Each curve is a velocity decision, plotted."
        premise="The line is the easing function itself — position over time, from rest to rest. The dot beneath travels that exact curve. Click a card to run it; click again to send it back."
        annotations={[
          { title: 'Mechanical, not organic', body: 'The Drams lineage. Interactive states settle like a precision control, not a spring. Ease-out and symmetric only — never elastic, never back.' },
          { title: 'The excluded curve', body: 'No overshoot. No control point sits above 1, so nothing in the system bounces past its mark and returns. Bounce reads as playful; this brand reads as exact.' },
          { title: 'Enter vs exit', body: 'Out leads with speed and settles slow — right for things arriving. Symmetric weights both ends — right for a swap with no direction.' },
        ]}
      >
        <div className={styles.curveGrid}>
          {EASINGS.map((e) => (
            <button key={e.key} type="button" className={styles.curveCard} onClick={() => fire(e.key)}>
              <div className={styles.curveHead}>
                <span className={styles.curveLabel}>{e.label}</span>
                <span className={styles.curveRole}>{e.role}</span>
              </div>
              <div className={styles.curvePlotWrap}>
                <svg className={styles.curvePlot} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                  <line x1="0" y1="100" x2="100" y2="100" className={styles.curveAxis} />
                  <line x1="0" y1="0" x2="0" y2="100" className={styles.curveAxis} />
                  <path d={bezierPath(e.bezier)} className={styles.curveLine} />
                </svg>
              </div>
              <div className={styles.track}>
                <span
                  className={`${styles.dot} ${runs[e.key] ? styles.dotOn : ''}`}
                  style={{ transitionDuration: `var(${e.durToken})`, transitionTimingFunction: `var(${e.token})` }}
                />
              </div>
              <code className={styles.curveBezier}>cubic-bezier({e.bezier.join(', ')})</code>
              <span className={styles.curveContexts}>{withSlash(e.contexts)}</span>
              <p className={styles.curvePrinciple}>{e.principle}</p>
              <span className={styles.curveReplay}>Click to run<Slash />{e.durMs}ms</span>
            </button>
          ))}
        </div>
      </Chapter>

      {/* ii · DURATION SCALE */}
      <Chapter
        ord="ii"
        eyebrow="Duration / four tiers"
        title="Four durations, one ceiling for anything you wait on."
        premise="Press is fastest because a control must answer the finger instantly. Standard is the ceiling for any state the user is waiting through. Orchestrated is for motion the user watches, not waits on. Run the race to feel the gaps."
        annotations={[
          { title: 'The UI ceiling', body: '380ms is the slowest a state change should take when the user is waiting for it. Past that the interface feels sluggish, not considered.' },
          { title: 'Press beats micro', body: 'Press is 160ms, faster than the 200ms hover. The finger gets the quickest answer in the system — feedback you feel before you think.' },
        ]}
      >
        <div className={styles.race}>
          <div className={styles.raceTop}>
            <button type="button" className={styles.playBtn} onClick={() => setRacing((v) => !v)}>
              {racing ? 'Reset' : 'Run the race'}
            </button>
            <span className={styles.raceHint}>All four start together. Watch them arrive apart.</span>
          </div>
          {DURATIONS.map((d) => (
            <div key={d.token} className={styles.lane}>
              <div className={styles.laneMeta}>
                <span className={styles.laneMs}>{d.ms}<span className={styles.laneUnit}>ms</span></span>
                <span className={styles.laneTier}>{d.tier}</span>
              </div>
              <div className={styles.track}>
                <span
                  className={`${styles.dot} ${racing ? styles.dotOn : ''}`}
                  style={{ transitionDuration: `var(${d.token})`, transitionTimingFunction: 'var(--sc-p-motion-easing-in-out)' }}
                />
              </div>
            </div>
          ))}
        </div>
        <div className={kit.tableScroll}>
          <table className={kit.dataTable}>
            <thead><tr><th>Token</th><th>Duration</th><th>Tier</th><th>Use</th></tr></thead>
            <tbody>
              {DURATIONS.map((d) => (
                <tr key={d.token}>
                  <td className={kit.mono}>{d.token}</td>
                  <td className={kit.mono}>{d.ms}ms</td>
                  <td><b>{d.tier}</b></td>
                  <td>{d.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Chapter>

      {/* iii · COMBINATIONS */}
      <Chapter
        ord="iii"
        eyebrow="In context / real pairings"
        title="Three components, three curve-and-duration pairs."
        premise="These are the real Sprint 4 components, not mock-ups. Each pairs a curve with a duration through the semantic motion tokens. Interact with them — the animation is the component's own."
        annotations={[
          { title: 'Semantic, not raw', body: 'Components never name a curve directly. They read --sc-motion-press, --sc-motion-reveal, --sc-motion-mode — roles that bind a duration and an easing together.' },
          { title: 'One language', body: 'Press, reveal, mode. Three roles cover every interaction in the library. A new component picks a role; it does not invent a timing.' },
        ]}
      >
        <div className={styles.pairings}>
          <div className={kit.panel}>
            <div className={kit.panelHead}><span><b>Button</b><Slash />press</span><span>outStrong<Slash />160ms<Slash />×0.985</span></div>
            <div className={styles.pairDemo}>
              <Button variant="primary">Press me</Button>
              <Button variant="secondary">And me</Button>
            </div>
            <p className={styles.pairNote}>Press: <code>--sc-motion-press</code> binds strong quint-out, 160ms, and the 0.985 scale. The control depresses and releases.</p>
          </div>

          <div className={kit.panel}>
            <div className={kit.panelHead}><span><b>Switch</b><Slash />reveal</span><span>out<Slash />200ms</span></div>
            <div className={styles.pairDemo}>
              <Switch checked={on} onChange={() => setOn((v) => !v)} label={on ? 'On' : 'Off'} />
            </div>
            <p className={styles.pairNote}>Thumb slide: <code>--sc-motion-reveal</code> runs quint-out at 200ms. Toggle it — the thumb commits fast and settles.</p>
          </div>

          <div className={kit.panel}>
            <div className={kit.panelHead}><span><b>Tooltip</b><Slash />reveal</span><span>out<Slash />200ms</span></div>
            <div className={styles.pairDemo}>
              <Tooltip content="Reveal: quint-out, 200ms.">
                <span className={styles.tooltipTarget}>Hover for the reveal</span>
              </Tooltip>
            </div>
            <p className={styles.pairNote}>Enter: <code>--sc-motion-reveal</code> fades and lifts the tip in at 200ms. The same role the Switch uses, a different surface.</p>
          </div>
        </div>
      </Chapter>

      {/* iv · ELASTIC CONTROLS */}
      <Chapter
        ord="iv"
        eyebrow="Elastic controls / in tuning"
        title="Things you touch can stretch, lean and spring. None of it ships yet."
        premise="Four settings from kabarza\u2019s elastic toggles: duration and bounce, stretch, squash, press lean. Five components carry them as their own tokens, and every one ships inert, so the library above still never overshoots. Values are chosen in the sc-tune lab and reach a component only through a recorded, applied concept."
        annotations={[
          { title: 'As long as it is fast', body: 'Length follows the speed of the travel curve, so the pill is longest mid-flight and round again by the time it lands. It grows as two round ends and a bar; scaleX would turn it into an egg.' },
          { title: 'Press is a gesture', body: 'A click only counts on release. Leaning on pointer down answers the finger at once, and dragging off before release springs it back, so a change of mind costs nothing.' },
          { title: 'Inert until picked', body: 'Stretch, squash and lean ship at 0 and travel ships equal to reveal. The engine (src/motion/elastic.js) runs only above 0 and never under reduced motion.' },
        ]}
      >
        <div className={kit.tableScroll}>
          <table className={kit.dataTable}>
            <thead><tr><th>Setting</th><th>Token</th><th>Reel · Balanced</th><th>Shipped</th><th>What it does</th></tr></thead>
            <tbody>
              {ELASTIC.map((e) => (
                <tr key={e.setting}>
                  <td><b>{e.setting}</b></td>
                  <td className={kit.mono}>--sc-motion-&lt;component&gt;{e.suffix}</td>
                  <td className={kit.mono}>{e.reel}</td>
                  <td className={kit.mono}>{e.shipped}</td>
                  <td>{e.does}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={kit.tableScroll}>
          <table className={kit.dataTable}>
            <thead><tr><th>Component</th><th>Token prefix</th><th>What moves</th><th>Press lean</th></tr></thead>
            <tbody>
              {ELASTIC_COMPONENTS.map((c) => (
                <tr key={c.name}>
                  <td><b>{c.name}</b></td>
                  <td className={kit.mono}>--sc-motion-{c.prefix}-*</td>
                  <td>{c.moves}</td>
                  <td>{c.press}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={kit.panel}>
          <div className={kit.panelHead}>
            <span><b>Reel preset, live</b><Slash />these demos only</span>
            <span>spring {REEL.duration}ms<Slash />bounce {REEL.bounce}<Slash />stretch {REEL.stretch}<Slash />lean {REEL.lean}</span>
          </div>
          {/* The overrides sit on this wrapper alone; nothing else on the site moves differently. */}
          <div className={styles.elasticDemo} style={reelVars}>
            <Switch checked={elasticOn} onChange={() => setElasticOn((v) => !v)} label={elasticOn ? 'On' : 'Off'} />
            <SegmentedControl
              label="Range"
              value={range}
              onChange={setRange}
              options={[{ value: 'day', label: 'Day' }, { value: 'week', label: 'Week' }, { value: 'month', label: 'Month' }]}
            />
            <div role="tablist" aria-label="Underline demo" className={styles.elasticTabs}>
              {TABS.map((t) => (
                <button key={t} type="button" role="tab" aria-selected={t === tab} className={styles.elasticTab} onClick={() => setTab(t)}>
                  {t}
                  <PlusUnderline active={t === tab} />
                </button>
              ))}
            </div>
            <Tooltip content="Lifted on the reel spring.">
              <span className={styles.tooltipTarget}>Hover for the lift</span>
            </Tooltip>
          </div>
          <p className={styles.pairNote}>Press and hold the switch, a segment or a tab before letting go to feel the lean; drag off to watch it spring back. The spring settles in {reelSpring.ms}ms; reduced motion turns all of it off.</p>
        </div>
      </Chapter>
    </Section>
  );
}
