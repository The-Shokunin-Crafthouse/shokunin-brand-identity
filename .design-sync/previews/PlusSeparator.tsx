import { PlusSeparator } from '@the-shokunin-crafthouse/scds';

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
export const Breadcrumb = () => (
  <Modes side>
    <nav aria-label="Breadcrumb" style={{ ...raised, width: 296 }}>
      <ol style={{ display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)', listStyle: 'none', margin: 0, padding: 0, font: 'var(--sc-font-text-label-ui)', color: 'var(--sc-color-text-secondary)' }}>
        <li>Home</li>
        <li aria-hidden="true"><PlusSeparator /></li>
        <li>Work</li>
        <li aria-hidden="true"><PlusSeparator /></li>
        <li aria-current="page" style={{ color: 'var(--sc-color-text-primary)' }}>Case study</li>
      </ol>
    </nav>
  </Modes>
);

export const MutedInDenseRow = () => (
  <Modes side>
    <div style={{ ...raised, width: 296 }}>
      <p style={{ display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-md)', margin: 0, font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)' }}>
        <span>#75</span>
        <PlusSeparator tone="muted" />
        <span>Studio PM shell</span>
        <PlusSeparator tone="muted" />
        <span>2 checks</span>
      </p>
      <p style={caption}>tone="muted"</p>
    </div>
  </Modes>
);
