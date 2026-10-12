import { NavBar, Button } from '@the-shokunin-crafthouse/scds';

export const Desktop = () => (
  <div style={{ width: 760 }}>
    <NavBar
      brand={
        <span style={{ font: 'var(--sc-font-text-label-chrome)', letterSpacing: 'var(--sc-font-text-label-chrome-letter-spacing)', textTransform: 'uppercase', color: 'var(--sc-color-text-primary)' }}>
          Shokunin
        </span>
      }
      links={[
        { href: '#work', label: 'Work', current: true },
        { href: '#studio', label: 'Studio' },
        { href: '#contact', label: 'Contact' },
      ]}
      trailing={<Button variant="secondary">Start a project</Button>}
    />
  </div>
);

export const Compact = () => (
  <div style={{ width: 360 }}>
    <NavBar
      compact
      brand={
        <span style={{ font: 'var(--sc-font-text-label-chrome)', letterSpacing: 'var(--sc-font-text-label-chrome-letter-spacing)', textTransform: 'uppercase', color: 'var(--sc-color-text-primary)' }}>
          Shokunin
        </span>
      }
      links={[
        { href: '#work', label: 'Work', current: true },
        { href: '#studio', label: 'Studio' },
        { href: '#contact', label: 'Contact' },
      ]}
      trailing={<Button variant="primary">Start a project</Button>}
    />
  </div>
);

export const Underline = () => (
  <div style={{ width: 760 }}>
    <NavBar
      underline
      brand={
        <span style={{ font: 'var(--sc-font-text-label-chrome)', letterSpacing: 'var(--sc-font-text-label-chrome-letter-spacing)', textTransform: 'uppercase', color: 'var(--sc-color-text-primary)' }}>
          Shokunin
        </span>
      }
      links={[
        { href: '#work', label: 'Work', current: true },
        { href: '#studio', label: 'Studio' },
        { href: '#contact', label: 'Contact' },
      ]}
      trailing={<Button variant="secondary">Start a project</Button>}
    />
  </div>
);
