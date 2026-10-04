import { PlusProgress } from '@the-shokunin-crafthouse/scds';

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
const Panel = ({ title, pct, children }) => (
  <div style={{ ...raised, width: 296 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <p style={caption}>{title}</p>
      <p style={{ ...caption, color: 'var(--sc-color-text-primary)' }}>{pct}</p>
    </div>
    {children}
  </div>
);

export const Thin = () => (
  <Modes side>
    <Panel title="Upload" pct="64%"><PlusProgress value={0.64} label="Upload" /></Panel>
  </Modes>
);

export const Band = () => (
  <Modes side>
    <Panel title="Reading progress" pct="38%"><PlusProgress variant="band" value={0.38} label="Reading progress" /></Panel>
  </Modes>
);

export const EmptyAndFull = () => (
  <Modes side>
    <div style={{ ...raised, width: 296 }}>
      <PlusProgress value={0} label="Not started" />
      <PlusProgress value={1} label="Complete" />
    </div>
  </Modes>
);
