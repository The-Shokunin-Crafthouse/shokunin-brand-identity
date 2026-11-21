import { useState } from 'react';
import { Question } from '@phosphor-icons/react';
import { Button } from '../src/components/Button/Button.jsx';
import { Tooltip } from '../src/components/Tooltip/Tooltip.jsx';
import { Toast } from '../src/components/Toast/Toast.jsx';
import { Icon } from '../src/components/Icon/Icon.jsx';
import styles from './PublishPage.module.css';

export function PublishPage() {
  // Consumer owns the toast list; Toast removes itself after its hold
  // (--sc-motion-toast-hold) and calls onDismiss so we can unmount it.
  const [toasts, setToasts] = useState([]);

  const publish = () => {
    setToasts((list) => [...list, { id: crypto.randomUUID(), message: 'Page published' }]);
  };
  const remove = (id) => setToasts((list) => list.filter((t) => t.id !== id));

  return (
    <main className={styles.screen}>
      <h1 className={styles.title}>Publish page</h1>
      <div className={styles.actions}>
        <Button variant="primary" onClick={publish}>Publish</Button>
        <Tooltip content="Publishing makes this page visible to everyone" placement="top">
          <button type="button" className={styles.help} aria-label="About publishing">
            <Icon glyph={Question} weight="bold" size="sm" />
          </button>
        </Tooltip>
      </div>

      <div className={styles.toasts}>
        {toasts.map((t) => (
          <Toast key={t.id} tone="success" placement="floating" onDismiss={() => remove(t.id)}>
            {t.message}
          </Toast>
        ))}
      </div>
    </main>
  );
}
