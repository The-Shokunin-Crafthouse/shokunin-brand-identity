/**
 * SettingsPanel · notifications, theme, text size, save.
 *
 * Built from SCDS components: Card, Switch, SegmentedControl, Slider, Button,
 * Toast. No raw values; styles read tokens only (SettingsPanel.module.css).
 *
 * Props:
 *   initial  { notifications: boolean, theme: 'light'|'dark'|'system', textScale: number }
 *   onSave   (settings) => void | Promise<void>. Panel shows a saved Toast after it resolves.
 *
 * Save stays disabled until a setting differs from the last saved state.
 * The saved confirmation is a floating success Toast (nothing for the reader
 * to do), polite `role="status"`, dismissed by hold, button or Escape.
 */

import { useState } from 'react';
import { Card } from '../src/components/Card/Card.jsx';
import { Switch } from '../src/components/Switch/Switch.jsx';
import { SegmentedControl } from '../src/components/SegmentedControl/SegmentedControl.jsx';
import { Slider } from '../src/components/Slider/Slider.jsx';
import { Button } from '../src/components/Button/Button.jsx';
import { Toast } from '../src/components/Toast/Toast.jsx';
import styles from './SettingsPanel.module.css';

const THEMES = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];

const TEXT_MIN = 0.85;
const TEXT_MAX = 1.3;

const DEFAULTS = { notifications: true, theme: 'system', textScale: 1 };

export function SettingsPanel({ initial = DEFAULTS, onSave }) {
  const [saved, setSaved] = useState({ ...DEFAULTS, ...initial });
  const [draft, setDraft] = useState({ ...DEFAULTS, ...initial });
  const [saving, setSaving] = useState(false);
  const [toastKey, setToastKey] = useState(null);

  const set = (patch) => setDraft((d) => ({ ...d, ...patch }));
  const dirty =
    draft.notifications !== saved.notifications ||
    draft.theme !== saved.theme ||
    Math.abs(draft.textScale - saved.textScale) > 0.0001;
  const percent = Math.round(draft.textScale * 100);

  const save = async () => {
    setSaving(true);
    try {
      await onSave?.(draft);
      setSaved(draft);
      setToastKey(Date.now());
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Card as="section" aria-labelledby="settings-title" className={styles.panel}>
        <h2 id="settings-title" className={styles.title}>Settings</h2>

        <div className={styles.rows}>
          <div className={styles.row}>
            <Switch
              label="Notifications"
              checked={draft.notifications}
              onChange={(e) => set({ notifications: e.target.checked })}
            />
            <p className={styles.hint}>
              {draft.notifications ? 'On. You get alerts about your account.' : 'Off. No alerts are sent.'}
            </p>
          </div>

          <div className={styles.row}>
            <span id="theme-label" className={styles.label}>Theme</span>
            <SegmentedControl
              label="Theme"
              options={THEMES}
              value={draft.theme}
              onChange={(theme) => set({ theme })}
            />
            <p className={styles.hint}>System follows your device setting.</p>
          </div>

          <div className={styles.row}>
            <div className={styles.labelLine}>
              <span className={styles.label}>Text size</span>
              <output className={styles.value} aria-hidden="true">{percent}%</output>
            </div>
            <Slider
              label={`Text size, ${percent} percent`}
              min={TEXT_MIN}
              max={TEXT_MAX}
              step={0.05}
              bigStep={0.1}
              value={draft.textScale}
              onChange={(textScale) => set({ textScale })}
            />
            <p
              className={styles.preview}
              style={{ '--settings-preview-scale': draft.textScale }}
            >
              The quick brown fox jumps over the lazy dog.
            </p>
          </div>
        </div>

        <div className={styles.actions}>
          <Button
            variant="primary"
            arrow={false}
            disabled={!dirty}
            loading={saving}
            onClick={save}
          >
            Save settings
          </Button>
        </div>
      </Card>

      <div className={styles.toastRegion}>
        {toastKey && (
          <Toast
            key={toastKey}
            tone="success"
            placement="floating"
            onDismiss={() => setToastKey(null)}
          >
            Settings saved.
          </Toast>
        )}
      </div>
    </>
  );
}

export default SettingsPanel;
