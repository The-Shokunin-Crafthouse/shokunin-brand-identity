import { PlusUnderline } from '@the-shokunin-crafthouse/scds';

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
const TABS = ['Overview', 'Work', 'Studio', 'Contact'];

const Tabs = ({ active }) => (
  <nav aria-label="Sections" style={{ background: 'var(--sc-color-surface-raised)', borderRadius: 'var(--sc-radius-surface)', padding: 'var(--sc-space-layout-inset-md) var(--sc-space-layout-inset-md) 0' }}>
    <ul style={{ display: 'flex', gap: 'var(--sc-space-layout-stack-md)', listStyle: 'none', margin: 0, padding: 0 }}>
      {TABS.map((t) => (
        <li key={t}>
          <a href={`#${t.toLowerCase()}`} aria-current={t === active ? 'page' : undefined} style={{ display: 'grid', gap: 'var(--sc-space-component-gap-md)', font: 'var(--sc-font-text-label-ui)', color: t === active ? 'var(--sc-color-text-primary)' : 'var(--sc-color-text-secondary)', textDecoration: 'none' }}>
            {t}
            <PlusUnderline active={t === active} />
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export const TabRow = () => (
  <Modes side>
    <Tabs active="Work" />
  </Modes>
);

export const SecondTabActive = () => (
  <Modes side>
    <Tabs active="Contact" />
  </Modes>
);
