/**
 * uiSound — the SCDS interaction-sound engine.
 *
 * Five role sounds, each owned by one component (decisions.md
 * 2026-10-07 · scds-ui-sounds, Button press and Slider slide added the same day):
 *   toggle  → Switch            (Drams 004 toggle switch)
 *   tick    → Stepper           (Drams 037 short tick)
 *   select  → SegmentedControl  (Drams 001 click)
 *   press   → Button            (Drams 029)
 *   slide   → Slider            (Drams 009, keyboard steps)
 * Sounds by Drams · 1042.Studio (drams.framer.website), used with credit.
 *
 * Playback is Web Audio with pre-decoded buffers: an <audio> element adds
 * tens of ms of start latency, which a 77 ms tick cannot absorb. Browsers
 * only start an AudioContext inside a user gesture, so the engine arms
 * itself on the first pointerdown/keydown anywhere on the page and decodes
 * the sounds then. Each sound is a dynamic import, so a consumer that never
 * mounts a sounding component never downloads one.
 *
 * Nothing here runs on the server: every entry point checks for `window`.
 */

const LOADERS = {
  toggle: () => import('./assets/toggle.wav'),
  tick: () => import('./assets/tick.wav'),
  select: () => import('./assets/select.wav'),
  press: () => import('./assets/press.wav'),
  slide: () => import('./assets/slide.wav'),
};

export const UI_SOUNDS = Object.keys(LOADERS);

let ctx = null;
let armed = false;
const wanted = new Set();
const buffers = new Map();
const pending = new Map();

function context() {
  if (ctx) return ctx;
  const Ctx = window.AudioContext || window.webkitAudioContext;
  if (!Ctx) return null;
  ctx = new Ctx();
  return ctx;
}

function load(name) {
  if (buffers.has(name)) return Promise.resolve(buffers.get(name));
  if (pending.has(name)) return pending.get(name);
  const ac = context();
  if (!ac || !LOADERS[name]) return Promise.resolve(null);
  const job = LOADERS[name]()
    .then((mod) => fetch(mod.default))
    .then((res) => res.arrayBuffer())
    .then((data) => ac.decodeAudioData(data))
    .then((buffer) => {
      buffers.set(name, buffer);
      return buffer;
    })
    .catch(() => null)
    .finally(() => pending.delete(name));
  pending.set(name, job);
  return job;
}

function unlock() {
  const ac = context();
  if (!ac) return;
  if (ac.state === 'suspended') ac.resume();
  wanted.forEach(load);
}

/** Register interest in a sound; the first user gesture decodes it. */
export function preloadUISound(name) {
  if (typeof window === 'undefined' || !LOADERS[name]) return;
  wanted.add(name);
  if (ctx && ctx.state !== 'suspended') {
    load(name);
    return;
  }
  if (armed) return;
  armed = true;
  const opts = { capture: true, passive: true };
  const onGesture = () => {
    window.removeEventListener('pointerdown', onGesture, opts);
    window.removeEventListener('keydown', onGesture, opts);
    unlock();
  };
  window.addEventListener('pointerdown', onGesture, opts);
  window.addEventListener('keydown', onGesture, opts);
}

// The first gesture on a page both arms the engine and fires the control,
// so its sound is usually still decoding. Wait this long for it, then drop
// it: past ~120 ms a click no longer reads as caused by the press.
const LATE_LIMIT_MS = 120;

/**
 * Play a role sound at `volume` (0–1). A sound still decoding plays only
 * if it is ready within LATE_LIMIT_MS; it is never queued past that.
 */
export function playUISound(name, volume = 1) {
  if (typeof window === 'undefined' || volume <= 0) return;
  const ac = context();
  if (!ac) return;
  if (ac.state === 'suspended') ac.resume();
  const buffer = buffers.get(name);
  if (!buffer) {
    const asked = performance.now();
    load(name).then((late) => {
      if (late && performance.now() - asked <= LATE_LIMIT_MS) start(ac, late, volume);
    });
    return;
  }
  start(ac, buffer, volume);
}

function start(ac, buffer, volume) {
  const source = ac.createBufferSource();
  const gain = ac.createGain();
  gain.gain.value = Math.min(1, volume);
  source.buffer = buffer;
  source.connect(gain).connect(ac.destination);
  source.start();
}
