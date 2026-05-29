/**
 * App.jsx — Living brand reference site · shell.
 *
 * Layout mirrors the Sandbox "Color — DL" design: a sticky left rail
 * (brand lockup, three nav groups, mode toggle, colophon foot) and a
 * hash-routed main column. The Color section is fully built; every
 * other section renders a stub (heading + placeholder, never blank).
 *
 * Theme is owned by ThemeProvider — the mode toggle flips data-theme
 * on <html>; every surface re-resolves from --sc-* without remount.
 */

import { useEffect, useState } from 'react';
import { useTheme } from './theme/ThemeProvider.jsx';
import { Switch } from './components/Switch/Switch.jsx';
import { ColorSection } from './sections/ColorSection.jsx';
import markLight from '../assets/logo/mark-icon-light.svg';
import markDark from '../assets/logo/mark-icon-dark.svg';
import styles from './App.module.css';

const NAV = [
  {
    ord: '01',
    label: 'Foundations',
    items: [
      { id: 'color', label: 'Color', num: '01' },
      { id: 'type', label: 'Type', num: '02' },
      { id: 'spacing', label: 'Spacing', num: '03' },
      { id: 'motion', label: 'Motion', num: '04' },
      { id: 'mark', label: 'Mark', num: '05' },
    ],
  },
  {
    ord: '02',
    label: 'Components',
    items: [
      { id: 'button', label: 'Button', num: '12' },
      { id: 'badge', label: 'Badge' },
      { id: 'card', label: 'Card' },
      { id: 'input', label: 'Input' },
      { id: 'alert', label: 'Alert' },
      { id: 'switch', label: 'Switch' },
      { id: 'avatar', label: 'Avatar' },
      { id: 'progress', label: 'Progress' },
      { id: 'tooltip', label: 'Tooltip' },
      { id: 'divider', label: 'Divider' },
      { id: 'navbar', label: 'NavBar' },
      { id: 'specimen', label: 'Specimen' },
    ],
  },
  {
    ord: '03',
    label: 'Voice',
    items: [
      { id: 'register', label: 'Register' },
      { id: 'density', label: 'Density' },
      { id: 'hard-rules', label: 'Hard rules' },
    ],
  },
];

// id → { groupOrd, groupLabel, label } for stub headers + metabar crumbs.
const SECTION_INDEX = NAV.reduce((acc, group, gi) => {
  group.items.forEach((item, ii) => {
    acc[item.id] = {
      groupOrd: group.ord,
      groupLabel: group.label,
      label: item.label,
      crumb: `${group.ord} / ${String(group.items.length).padStart(2, '0')}`,
      position: `${String(ii + 1).padStart(2, '0')}`,
    };
  });
  return acc;
}, {});

const DEFAULT_SECTION = 'color';

function currentHash() {
  const id = window.location.hash.replace(/^#/, '');
  return SECTION_INDEX[id] ? id : DEFAULT_SECTION;
}

function useHashRoute() {
  const [section, setSection] = useState(currentHash);
  useEffect(() => {
    const onChange = () => setSection(currentHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return section;
}

function Sidebar({ active }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <aside className={styles.sidebar} aria-label="Documentation navigation">
      <a className={styles.brand} href="#color" aria-label="Shokunin Crafthouse — home">
        <img className={styles.brandMark} src={isDark ? markDark : markLight} alt="" width="22" height="22" />
        <span className={styles.brandLockup}>
          <span className={styles.brandName}>Shokunin Crafthouse</span>
          <span className={styles.brandSub}>design system · v1.2</span>
        </span>
      </a>

      <nav className={styles.nav} aria-label="Sections">
        {NAV.map((group) => (
          <div key={group.ord} className={styles.navGroup}>
            <div className={styles.navEyebrow}>
              <span className={styles.navOrd}>{group.ord}</span>
              {group.label}
            </div>
            {group.items.map((item) => {
              const isActive = item.id === active;
              return (
                <a
                  key={item.id}
                  className={`${styles.navLink} ${isActive ? styles.navLinkActive : ''}`}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {item.num && <span className={styles.navNum}>{item.num}</span>}
                </a>
              );
            })}
          </div>
        ))}
      </nav>

      <div className={styles.navSpacer} />

      <div className={styles.modeRow}>
        <span className={styles.modeLabel}>
          Mode <span className={styles.modeState}>{isDark ? 'Dark' : 'Light'}</span>
        </span>
        <Switch checked={isDark} onChange={toggle} label="" className={styles.modeSwitch} />
      </div>

      <div className={styles.sidebarFoot}>
        <span>edition · 2026.05</span>
        <span>SCDS-01</span>
      </div>
    </aside>
  );
}

function StubSection({ id }) {
  const meta = SECTION_INDEX[id];
  return (
    <section className={styles.stub} aria-labelledby={`${id}-title`}>
      <div className={styles.metabar}>
        <div className={styles.crumb}>
          <span className={styles.crumbAccent}>{meta.crumb}</span>
          {meta.groupLabel} · {meta.label}
        </div>
        <div className={styles.metaRight}>
          <span><b>Status</b> stub</span>
          <span><b>Sprint</b> shell</span>
        </div>
      </div>

      <header className={styles.stubHead}>
        <span className={styles.stubEyebrow}>
          {meta.groupLabel} · {meta.label}
        </span>
        <h1 id={`${id}-title`} className={styles.stubTitle}>{meta.label}</h1>
      </header>

      <div className={styles.placeholder} role="note">
        <span className={styles.placeholderMark} aria-hidden="true">◧</span>
        <p className={styles.placeholderLead}>
          <b>{meta.label}</b> is scaffolded — the shell, route, and heading are in place.
        </p>
        <p className={styles.placeholderBody}>
          Built content lands in a later sprint. Color is the fully-built reference; this
          section is intentionally a placeholder, not an empty or broken page.
        </p>
      </div>
    </section>
  );
}

export default function App() {
  const active = useHashRoute();
  return (
    <div className={styles.site}>
      <Sidebar active={active} />
      <main className={styles.main}>
        {active === 'color' ? <ColorSection /> : <StubSection id={active} />}
      </main>
    </div>
  );
}
