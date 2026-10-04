import { NavBar, Button } from '@the-shokunin-crafthouse/scds';

const brand = {
  font: 'var(--sc-font-text-label-chrome)',
  letterSpacing: 'var(--sc-font-text-label-chrome-letter-spacing)',
  textTransform: 'uppercase',
  color: 'var(--sc-color-text-primary)',
} as const;

const links = [
  { href: '#work', label: 'Work', current: true },
  { href: '#studio', label: 'Studio' },
  { href: '#contact', label: 'Contact' },
];

export const Desktop = () => (
  <div style={{ width: 760 }}>
    <NavBar
      brand={<span style={brand}>Shokunin</span>}
      links={links}
      trailing={<Button variant="secondary">Start a project</Button>}
    />
  </div>
);

export const Compact = () => (
  <div style={{ width: 360 }}>
    <NavBar
      compact
      brand={<span style={brand}>Shokunin</span>}
      links={links}
      trailing={<Button variant="primary">Start a project</Button>}
    />
  </div>
);
