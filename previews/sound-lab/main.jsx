/**
 * SCDS Sound Lab — dev-only. Run `npm run dev`, open /previews/sound-lab/.
 *
 * Pairs Drams UI sounds (assets/sounds/drams/) with the three SCDS
 * components recommended for sound: Switch, Stepper, SegmentedControl.
 * Each component has three candidate sounds. The candidate toggles are
 * exclusive per component: turning one on turns the other two off;
 * turning the active one off leaves the component silent.
 *
 * The selection persists in localStorage under STORAGE_KEY so the final
 * state can be read back and recorded into the SCDS codebase.
 *
 * Playback uses Web Audio with pre-decoded buffers. An <audio> element
 * adds tens of ms of start latency, which a 70 ms click cannot absorb.
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '../../src/theme/ThemeProvider.jsx';
import { Switch } from '../../src/components/Switch/Switch.jsx';
import { Stepper } from '../../src/components/Stepper/Stepper.jsx';
import { SegmentedControl } from '../../src/components/SegmentedControl/SegmentedControl.jsx';
import { Button } from '../../src/components/Button/Button.jsx';
import '../../src/styles/fonts.css';
import '../../src/styles/tokens.css';
import '../../src/styles/reset.css';
import styles from './SoundLab.module.css';

const SOUND_DIR = '/assets/sounds/drams/';
const STORAGE_KEY = 'scds-sound-lab:v1';
const GAIN = 0.7;

const COMPONENTS = [
  {
    id: 'switch',
    name: 'Switch',
    why: 'Binary state change with a physical analog. One sound per flip, never repeated by hold, so it cannot fatigue.',
    trigger: 'Plays on every on/off change, pointer or keyboard.',
    candidates: [
      { id: 'a', label: 'Drams 005 · toggle switch', note: 'Source switch’s own click', files: { on: 'drams-005-toggle-switch-01.wav' }, seconds: '0.07 s' },
      { id: 'b', label: 'Drams 004 · toggle switch', note: 'Longer slide-and-seat', files: { on: 'drams-004-toggle-switch-01.wav' }, seconds: '0.53 s' },
      { id: 'c', label: 'Drams 031 · on/off pair', note: 'Distinct on and off sounds', files: { on: 'drams-031-01.wav', off: 'drams-031-02.wav' }, seconds: '0.11 / 0.07 s' },
    ],
  },
  {
    id: 'stepper',
    name: 'Stepper',
    why: 'Discrete value steps read as detents. The tick confirms each increment during press-and-hold, where the eye is on the readout.',
    trigger: 'Plays per committed step, including hold-repeat. Silent at min/max, so the bound is audible as absence.',
    candidates: [
      { id: 'a', label: 'Drams 016 · detent knob', note: 'Source knob’s own detent', files: { on: 'drams-016-detent-knob-01.wav' }, seconds: '0.18 s' },
      { id: 'b', label: 'Drams 037 · short tick', note: 'Shortest tail, fits the 80 ms hold interval', files: { on: 'drams-037-01.wav' }, seconds: '0.08 s' },
      { id: 'c', label: 'Drams 007 · click', note: 'Used on three Drams controls', files: { on: 'drams-007-01.wav' }, seconds: '0.12 s' },
    ],
  },
  {
    id: 'segmented',
    name: 'SegmentedControl',
    why: 'One-of-N selection maps to a multi-position switch. SCDS already credits Drams #7, the 3-way switch.',
    trigger: 'Plays when the selected segment changes, pointer or arrow keys. Re-selecting the current segment is silent.',
    candidates: [
      { id: 'a', label: 'Drams 045 · 3-way slide switch', note: 'Source switch’s own sound', files: { on: 'drams-045-three-way-slide-switch-01.wav' }, seconds: '0.43 s' },
      { id: 'b', label: 'Drams 006 · click', note: 'Used on three Drams controls', files: { on: 'drams-006-01.wav' }, seconds: '0.17 s' },
      { id: 'c', label: 'Drams 001 · click', note: 'Most reused sound on Drams', files: { on: 'drams-001-01.wav' }, seconds: '0.18 s' },
    ],
  },
];

const ALL_FILES = [...new Set(COMPONENTS.flatMap((c) => c.candidates.flatMap((k) => Object.values(k.files))))];

function readSelection() {
  const empty = Object.fromEntries(COMPONENTS.map((c) => [c.id, null]));
  try {
    const stored = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}');
    return { ...empty, ...stored.selection };
  } catch {
    return empty;
  }
}

/* ---------- audio ---------- */

function useSoundBank() {
  const ctxRef = useRef(null);
  const buffersRef = useRef({});
  const loadingRef = useRef(null);

  const ensure = useCallback(() => {
    if (!ctxRef.current) {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      ctxRef.current = new Ctx();
    }
    const ctx = ctxRef.current;
    if (ctx.state === 'suspended') ctx.resume();
    if (!loadingRef.current) {
      loadingRef.current = Promise.all(
        ALL_FILES.map(async (file) => {
          const res = await fetch(SOUND_DIR + file);
          const data = await res.arrayBuffer();
          buffersRef.current[file] = await ctx.decodeAudioData(data);
        }),
      );
    }
    return loadingRef.current;
  }, []);

  // Unlock and decode on the first gesture anywhere on the page.
  useEffect(() => {
    const unlock = () => ensure();
    window.addEventListener('pointerdown', unlock, { once: true, capture: true });
    window.addEventListener('keydown', unlock, { once: true, capture: true });
    return () => {
      window.removeEventListener('pointerdown', unlock, { capture: true });
      window.removeEventListener('keydown', unlock, { capture: true });
    };
  }, [ensure]);

  const play = useCallback(async (file) => {
    if (!file) return;
    await ensure();
    const ctx = ctxRef.current;
    const buffer = buffersRef.current[file];
    if (!buffer) return;
    const src = ctx.createBufferSource();
    const gain = ctx.createGain();
    gain.gain.value = GAIN;
    src.buffer = buffer;
    src.connect(gain).connect(ctx.destination);
    src.start();
  }, [ensure]);

  return play;
}

/* ---------- page ---------- */

function CandidateList({ component, selected, onSelect, play }) {
  return (
    <ul className={styles.candidates} aria-label={`${component.name} sound candidates`}>
      {component.candidates.map((cand) => (
        <li key={cand.id} className={styles.candidate}>
          <Switch
            checked={selected === cand.id}
            onChange={(e) => {
              const on = e.target.checked;
              onSelect(on ? cand.id : null);
              if (on) play(cand.files.on);
            }}
            label={cand.label}
          />
          <span className={styles.meta}>
            {cand.note} · {cand.seconds}
          </span>
        </li>
      ))}
    </ul>
  );
}

function SoundLab() {
  const play = useSoundBank();
  const [selection, setSelection] = useState(readSelection);
  const [switchOn, setSwitchOn] = useState(false);
  const [stepValue, setStepValue] = useState(4);
  const [segment, setSegment] = useState('day');
  const [copied, setCopied] = useState(false);

  const record = Object.fromEntries(
    COMPONENTS.map((c) => {
      const cand = c.candidates.find((k) => k.id === selection[c.id]);
      return [c.name, cand ? cand.files : null];
    }),
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ selection, record, updated: new Date().toISOString() }),
      );
    } catch {
      // Private mode or blocked storage: the on-page readout still shows the state.
    }
  }, [selection]); // eslint-disable-line react-hooks/exhaustive-deps

  const fileFor = (componentId, which = 'on') => {
    const c = COMPONENTS.find((x) => x.id === componentId);
    const cand = c.candidates.find((k) => k.id === selection[componentId]);
    if (!cand) return null;
    return cand.files[which] || cand.files.on;
  };

  const select = (componentId) => (candId) =>
    setSelection((prev) => ({ ...prev, [componentId]: candId }));

  const demos = {
    switch: (
      <Switch
        checked={switchOn}
        onChange={(e) => {
          setSwitchOn(e.target.checked);
          play(fileFor('switch', e.target.checked ? 'on' : 'off'));
        }}
        label="Notifications"
      />
    ),
    stepper: (
      <Stepper
        value={stepValue}
        min={0}
        max={12}
        label="Quantity"
        onChange={(v) => {
          setStepValue(v);
          play(fileFor('stepper'));
        }}
      />
    ),
    segmented: (
      <SegmentedControl
        label="Range"
        value={segment}
        options={[
          { value: 'day', label: 'Day' },
          { value: 'week', label: 'Week' },
          { value: 'month', label: 'Month' },
        ]}
        onChange={(v) => {
          if (v !== segment) play(fileFor('segmented'));
          setSegment(v);
        }}
      />
    ),
  };

  const json = JSON.stringify(record, null, 2);

  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>SCDS · dev lab</p>
        <h1 className={styles.title}>Sound pairing</h1>
        <p className={styles.lede}>
          Turn on one candidate per component, then use the live component. The page remembers where you leave it.
        </p>
      </header>

      {COMPONENTS.map((c) => (
        <section key={c.id} className={styles.row} aria-labelledby={`h-${c.id}`}>
          <div className={styles.subject}>
            <h2 id={`h-${c.id}`} className={styles.name}>{c.name}</h2>
            <p className={styles.why}>{c.why}</p>
            <p className={styles.trigger}>{c.trigger}</p>
            <div className={styles.stage}>{demos[c.id]}</div>
          </div>
          <CandidateList component={c} selected={selection[c.id]} onSelect={select(c.id)} play={play} />
        </section>
      ))}

      <section className={styles.record} aria-labelledby="h-record">
        <h2 id="h-record" className={styles.name}>Current selection</h2>
        <pre className={styles.json} aria-live="polite">{json}</pre>
        <Button
          variant="secondary"
          size="sm"
          arrow={false}
          onClick={() => {
            navigator.clipboard?.writeText(json).then(() => {
              setCopied(true);
              setTimeout(() => setCopied(false), 1600);
            });
          }}
        >
          {copied ? 'Copied' : 'Copy selection'}
        </Button>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <SoundLab />
    </ThemeProvider>
  </React.StrictMode>,
);
