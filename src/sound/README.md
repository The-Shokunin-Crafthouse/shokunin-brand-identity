# SCDS interaction sounds

Six role sounds, one per component. See `decisions/decisions.md` (2026-10-07, scds-ui-sounds).

| Role | Component | File | Source |
| --- | --- | --- | --- |
| `toggle` | Switch | `assets/toggle.wav` | Drams 004 toggle switch |
| `tick` | Stepper | `assets/tick.wav` | Drams 037 |
| `select` | SegmentedControl | `assets/select.wav` | Drams 001 |
| `press` | Button | `assets/press.wav` | Drams 029 |
| `slide` | Slider (keyboard steps only) | `assets/slide.wav` | Drams 009 |
| `reveal` | Tooltip (opens on hover or focus) | `assets/reveal.wav` | Drams 031, pitched to 0.65x, gain 0.2/0.7 |

Sounds by [Drams](https://drams.framer.website/), 1042.Studio (@mrblackstudio, @karimeshrimp). Drams permits personal and commercial use with credit. Any product that ships these sounds credits Drams.

The files are the originals re-encoded to 48 kHz mono 16-bit WAV. Originals: `assets/sounds/drams/`.

`reveal.wav` bakes in the pitch and level from sc-tune record Tooltip 2026-10-08-2007 (0.65x, volume 0.2), because the engine plays every file at 1x and at the master volume (default 0.7):

```bash
ffmpeg -i assets/sounds/drams/drams-031-01.wav -af "asetrate=62400,aresample=48000,volume=0.285714" -ac 1 -ar 48000 -c:a pcm_s16le src/sound/assets/reveal.wav
```

(62400 = the source's 96 kHz x 0.65; 0.285714 = 0.2 / 0.7.)

## Use

Sounds are on by default. To control them app-wide:

```jsx
import { SoundProvider } from '@the-shokunin-crafthouse/scds';

<SoundProvider enabled={settings.sounds} volume={0.6}>
  <App />
</SoundProvider>
```

Opt one instance out with `sound={false}`.
