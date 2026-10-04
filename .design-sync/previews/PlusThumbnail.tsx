import { PlusThumbnail } from '@the-shokunin-crafthouse/scds';

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
const SEEDS = [['atlas', 'inverse'], ['kiln', 'sunk'], ['ledger', 'inverse'], ['harbor', 'sunk'], ['orbit', 'inverse'], ['field', 'sunk']];

export const Seeded = () => (
  <Modes side>
    <div style={{ ...raised, width: 400, boxSizing: 'border-box', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', columnGap: 'var(--sc-space-component-gap-lg)' }}>
      {SEEDS.map(([seed, surface]) => (
        <div key={seed} style={{ display: 'grid', gap: 'var(--sc-space-component-gap-sm)' }}>
          <PlusThumbnail seed={seed} surface={surface} />
          <p style={caption}>{seed}</p>
        </div>
      ))}
    </div>
  </Modes>
);

export const SameSeedSameArt = () => (
  <Modes side>
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 'var(--sc-space-component-gap-lg)' }}>
      <div style={{ width: 64 }}><PlusThumbnail seed="kiln" /></div>
      <div style={{ width: 120 }}><PlusThumbnail seed="kiln" /></div>
    </div>
  </Modes>
);
