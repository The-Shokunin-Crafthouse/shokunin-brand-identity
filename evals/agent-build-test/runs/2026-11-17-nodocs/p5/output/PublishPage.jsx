/**
 * PublishPage — one primary Publish action, a help hint, a self-dismissing
 * confirmation. Built from SCDS Button, Tooltip and Toast; no hand-rolled
 * hint or banner.
 *
 * - Tooltip opens on hover and on keyboard focus of the help trigger, and
 *   Escape dismisses it (WCAG 1.4.13), all inside the component.
 * - Toast (floating, success) holds for --sc-motion-toast-hold (6s), pauses
 *   while hovered or focused, then dismisses itself and calls onDismiss.
 */

import { useState } from 'react';
import { Question } from '@phosphor-icons/react';
import { Button } from '../src/components/Button/Button.jsx';
import { Tooltip } from '../src/components/Tooltip/Tooltip.jsx';
import { Toast } from '../src/components/Toast/Toast.jsx';
import styles from './PublishPage.module.css';

export function PublishPage({ onPublish }) {
  // A key per press: publishing again restarts the toast.
  const [toastKey, setToastKey] = useState(0);

  const handlePublish = () => {
    onPublish?.();
    setToastKey((k) => k + 1);
  };

  return (
    <main className={styles.screen}>
      <h1 className={styles.title}>Publish page</h1>

      <div className={styles.actions}>
        <Button variant="primary" arrow={false} onClick={handlePublish}>
          Publish
        </Button>

        <Tooltip content="Publishing makes this page visible to everyone" placement="top">
          <button type="button" className={styles.help} aria-label="About publishing">
            <Question weight="bold" className={styles.helpIcon} aria-hidden="true" />
          </button>
        </Tooltip>
      </div>

      {toastKey > 0 && (
        <div className={styles.toastRegion}>
          <Toast
            key={toastKey}
            tone="success"
            placement="floating"
            onDismiss={() => setToastKey(0)}
          >
            Page published
          </Toast>
        </div>
      )}
    </main>
  );
}
