/**
 * SettingsPanel — notifications, theme, text size, save.
 *
 * Built only from SCDS components (Card, Switch, SegmentedControl, Stepper,
 * Button, Toast) and semantic tokens. The panel owns a draft; nothing leaves
 * it until Save. `onSave(settings)` may return a promise: Save shows its
 * loading state until it settles, then an inline success Toast confirms
 * (role="status", polite). A rejected save shows an inline error Toast and
 * keeps the draft. Editing after a save clears the confirmation, since the
 * draft no longer matches what was saved.
 *
 * Props
 *   initial   { notifications, theme, textSize }  starting values
 *   onSave    (settings) => void | Promise
 *   className
 *
 * theme is 'light' | 'dark' | 'system'. textSize is a percent, 80 to 150,
 * step 10. The preview line scales with it so the setting is felt before it
 * is saved. Applying the saved theme and size to the app is the consumer's
 * job (onSave), because the panel does not own the app root.
 */

import { useId, useState } from 'react';
import { Card } from '../src/components/Card/Card.jsx';
import { Switch } from '../src/components/Switch/Switch.jsx';
import { SegmentedControl } from '../src/components/SegmentedControl/SegmentedControl.jsx';
import { Stepper } from '../src/components/Stepper/Stepper.jsx';
import { Button } from '../src/components/Button/Button.jsx';
import { Toast } from '../src/components/Toast/Toast.jsx';
import styles from './SettingsPanel.module.css';

const THEMES = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System' },
];
const TEXT_MIN = 80;
const TEXT_MAX = 150;
const TEXT_STEP = 10;
const DEFAULTS = { notifications: true, theme: 'system', textSize: 100 };

export function SettingsPanel({ initial, onSave, className = '' }) {
  const start = { ...DEFAULTS, ...initial };
  const titleId = useId();
  const [draft, setDraft] = useState(start);
  const [saved, setSaved] = useState(start);
  const [status, setStatus] = useState('idle'); // idle | saving | saved | failed

  const dirty = Object.keys(DEFAULTS).some((k) => draft[k] !== saved[k]);
  const change = (patch) => {
    setDraft((d) => ({ ...d, ...patch }));
    setStatus('idle');
  };

  const save = async () => {
    setStatus('saving');
    try {
      await onSave?.(draft);
      setSaved(draft);
      setStatus('saved');
    } catch {
      setStatus('failed');
    }
  };

  return (
    <Card as="section" aria-labelledby={titleId} className={`${styles.panel} ${className}`}>
      <h2 id={titleId} className={styles.title}>Settings</h2>

      <div className={styles.row}>
        <div className={styles.copy}>
          <Switch
            label="Notifications"
            checked={draft.notifications}
            onChange={(e) => change({ notifications: e.target.checked })}
          />
          <span className={styles.hint}>{draft.notifications ? 'On. We will tell you when something needs you.' : 'Off. We stay quiet until you look.'}</span>
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.copy}>
          <span className={styles.name}>Theme</span>
          <span className={styles.hint}>System follows your device.</span>
        </div>
        <SegmentedControl
          label="Theme"
          options={THEMES}
          value={draft.theme}
          onChange={(theme) => change({ theme })}
        />
      </div>

      <div className={styles.row}>
        <div className={styles.copy}>
          <span className={styles.name}>Text size</span>
          <span className={styles.hint}>{draft.textSize}% of the default size.</span>
        </div>
        <Stepper
          label="Text size"
          value={draft.textSize}
          min={TEXT_MIN}
          max={TEXT_MAX}
          step={TEXT_STEP}
          onChange={(textSize) => change({ textSize })}
        />
      </div>

      <p className={styles.preview} style={{ '--text-scale': draft.textSize / 100 }}>
        Small type still has to be read. This line grows and shrinks with your choice.
      </p>

      <div className={styles.footer}>
        <Button onClick={save} loading={status === 'saving'} disabled={!dirty && status !== 'failed'}>
          Save settings
        </Button>
        <div className={styles.confirm}>
          {status === 'saved' && <Toast tone="success">Settings saved.</Toast>}
          {status === 'failed' && <Toast tone="error">Settings did not save. Check your connection and try again.</Toast>}
        </div>
      </div>
    </Card>
  );
}
