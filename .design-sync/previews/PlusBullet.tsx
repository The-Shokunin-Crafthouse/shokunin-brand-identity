import { PlusBullet } from '@the-shokunin-crafthouse/scds';

// Every story renders twice: the light theme, then the same content under data-theme="dark".
const Mode = ({ theme, children }) => (
  <div data-theme={theme} style={{ background: 'var(--sc-color-surface-page)', color: 'var(--sc-color-text-primary)', padding: 'var(--sc-space-layout-inset-md)', display: 'grid', gap: 'var(--sc-space-component-gap-md)', alignContent: 'start' }}>
    <p style={{ font: 'var(--sc-font-text-mono-caption)', color: 'var(--sc-color-text-secondary)', margin: 0 }}>{theme === 'dark' ? 'Dark' : 'Light'}</p>
    {children}
  </div>
);
const Modes = ({ children, side = false }) => (
  <div style={{ display: 'grid', gridTemplateColumns: side ? 'repeat(2, max-content)' : 'minmax(0, 1fr)' }}>
    <Mode theme="light">{children}</Mode>
    <Mode theme="dark">{children}</Mode>
  </div>
);
const caption = { font: 'var(--sc-font-text-mono-caption)', color: 'var(--sc-color-text-secondary)', margin: 0 };
const raised = { background: 'var(--sc-color-surface-raised)', borderRadius: 'var(--sc-radius-surface)', padding: 'var(--sc-space-layout-inset-md)', display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' };
const ITEMS = [['Strategy', false], ['Design · current', true], ['Engineering', false]];

export const List = () => (
  <Modes side>
    <ul style={{ ...raised, width: 296, listStyle: 'none', margin: 0 }}>
      {ITEMS.map(([label, current]) => (
        <li key={label} aria-current={current ? 'step' : undefined} style={{ display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)', font: 'var(--sc-font-text-body-default)' }}>
          <PlusBullet accent={current} />
          {label}
        </li>
      ))}
    </ul>
  </Modes>
);
