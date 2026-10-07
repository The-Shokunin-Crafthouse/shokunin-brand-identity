# SCDS interaction sounds

Three role sounds, one per component. See `decisions/decisions.md` (2026-10-07, scds-ui-sounds).

| Role | Component | File | Source |
| --- | --- | --- | --- |
| `toggle` | Switch | `assets/toggle.wav` | Drams 004 toggle switch |
| `tick` | Stepper | `assets/tick.wav` | Drams 037 |
| `select` | SegmentedControl | `assets/select.wav` | Drams 001 |

Sounds by [Drams](https://drams.framer.website/), 1042.Studio (@mrblackstudio, @karimeshrimp). Drams permits personal and commercial use with credit. Any product that ships these sounds credits Drams.

The files are the originals re-encoded to 48 kHz mono 16-bit WAV. Originals: `assets/sounds/drams/`.

## Use

Sounds are on by default. To control them app-wide:

```jsx
import { SoundProvider } from '@the-shokunin-crafthouse/scds';

<SoundProvider enabled={settings.sounds} volume={0.6}>
  <App />
</SoundProvider>
```

Opt one instance out with `sound={false}`.
