/**
 * App.jsx — Living brand reference site · shell.
 *
 * Layout mirrors the Sandbox "Color — DL" design: a sticky left rail
 * (brand lockup, four nav groups, mode toggle, colophon foot) and a
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
import { TypeSection } from './sections/TypeSection.jsx';
import { SpacingSection } from './sections/SpacingSection.jsx';
import { MotionSection } from './sections/MotionSection.jsx';
import { MarkSection } from './sections/MarkSection.jsx';
import {
  ButtonPage, BadgePage, CardPage, InputPage, AlertPage, SwitchPage,
  AvatarPage, ProgressPage, TooltipPage, DividerPage, NavBarPage,
  SegmentedControlPage, StepperPage, WorkingMarkPage,
} from './sections/ComponentSections.jsx';
import {
  PlusFieldPage, SectionDividerPage, HeadingRulePage, PlusUnderlinePage, PlusProgressPage,
  PlusLoaderPage, PlusSkeletonPage, PlusTimelinePage, PlusBulletPage, PlusSeparatorPage,
  PlusThumbnailPage,
} from './sections/BrandElementSections.jsx';
import { SpecimenSection } from './sections/SpecimenSection.jsx';
import { RegisterSection } from './sections/RegisterSection.jsx';
import { DensitySection } from './sections/DensitySection.jsx';
import { HardRulesSection } from './sections/HardRulesSection.jsx';
import markLight from '../assets/logo/mark-icon-light.svg';
import markDark from '../assets/logo/mark-icon-dark.svg';
import styles from './App.module.css';

// Slash separator — always lighter than adjacent text per design rule.
function Slash() { return <span className={styles.slash}> / </span>; }

// Per-character slot-machine layers for nav-link labels.
// On link hover, every char's top layer slides up out of its overflow:hidden
// container; an identical-but-teal-colored bottom layer slides up into view.
// Per-character transition-delay creates the slot stagger.
function NavChars({ label }) {
  const chars = Array.from(label);
  return (
    <>
      {chars.map((ch, i) => (
        <span
          key={i}
          className={styles.navChar}
          style={{ '--nav-char-delay': `${i * 24}ms` }}
          aria-hidden="true"
        >
          <span className={styles.navCharLayer}>{ch === ' ' ? ' ' : ch}</span>
          <span className={`${styles.navCharLayer} ${styles.navCharLayerHover}`}>
            {ch === ' ' ? ' ' : ch}
          </span>
        </span>
      ))}
      <span className={styles.navLabelSr}>{label}</span>
    </>
  );
}

const NAV = [
  {
    ord: '01',
    label: 'Foundations',
    items: [
      { id: 'color', label: 'Color' },
      { id: 'type', label: 'Type' },
      { id: 'spacing', label: 'Spacing' },
      { id: 'motion', label: 'Motion' },
      { id: 'mark', label: 'Mark' },
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
      { id: 'segmented-control', label: 'Segmented Control' },
      { id: 'stepper', label: 'Stepper' },
      { id: 'working-mark', label: 'Working Mark' },
      { id: 'specimen', label: 'Specimen' },
    ],
  },
  {
    ord: '03',
    label: 'Brand elements',
    items: [
      { id: 'plus-field', label: 'Plus Field' },
      { id: 'section-divider', label: 'Section Divider' },
      { id: 'heading-rule', label: 'Heading Rule' },
      { id: 'plus-underline', label: 'Plus Underline' },
      { id: 'plus-progress', label: 'Plus Progress' },
      { id: 'plus-loader', label: 'Plus Loader' },
      { id: 'plus-skeleton', label: 'Plus Skeleton' },
      { id: 'plus-timeline', label: 'Plus Timeline' },
      { id: 'plus-bullet', label: 'Plus Bullet' },
      { id: 'plus-separator', label: 'Plus Separator' },
      { id: 'plus-thumbnail', label: 'Plus Thumbnail' },
    ],
  },
  {
    ord: '04',
    label: 'Voice',
    items: [
      { id: 'register', label: 'Register' },
      { id: 'density', label: 'Density' },
      { id: 'hard-rules', label: 'Hard rules' },
    ],
  },
];

// Chapter list per page id — drives the mobile slide-up menu.
const CHAPTERS = {
  color: [
    { id: 'ramp', label: 'The room', sub: 'warm-gray ladder', count: 13 },
    { id: 'shu', label: 'The signal', sub: 'teal', count: 10 },
    { id: 'status', label: 'Outside the band', sub: 'status', count: 4 },
    { id: 'tiers', label: 'Resolution', sub: 'three tiers', count: 4 },
    { id: 'contrast', label: 'Contrast', sub: 'measurement', count: 4 },
  ],
};

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

// Built sections render their own component; every id not present here
// still falls through to the StubSection placeholder (never blank).
const SECTIONS = {
  color: ColorSection,
  type: TypeSection,
  spacing: SpacingSection,
  motion: MotionSection,
  mark: MarkSection,
  button: ButtonPage,
  badge: BadgePage,
  card: CardPage,
  input: InputPage,
  alert: AlertPage,
  switch: SwitchPage,
  avatar: AvatarPage,
  progress: ProgressPage,
  tooltip: TooltipPage,
  divider: DividerPage,
  navbar: NavBarPage,
  'segmented-control': SegmentedControlPage,
  stepper: StepperPage,
  'working-mark': WorkingMarkPage,
  specimen: SpecimenSection,
  'plus-field': PlusFieldPage,
  'section-divider': SectionDividerPage,
  'heading-rule': HeadingRulePage,
  'plus-underline': PlusUnderlinePage,
  'plus-progress': PlusProgressPage,
  'plus-loader': PlusLoaderPage,
  'plus-skeleton': PlusSkeletonPage,
  'plus-timeline': PlusTimelinePage,
  'plus-bullet': PlusBulletPage,
  'plus-separator': PlusSeparatorPage,
  'plus-thumbnail': PlusThumbnailPage,
  register: RegisterSection,
  density: DensitySection,
  'hard-rules': HardRulesSection,
};

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
                  <span className={styles.navLabel}><NavChars label={item.label} /></span>
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

      <div className={styles.versionRow}>design system<Slash />v1.2</div>

      <div className={styles.sidebarFoot}>
        <span>edition<Slash />2026.05</span>
        <span>SCDS-01</span>
      </div>
    </aside>
  );
}

function MobileHeader({ active, isDark }) {
  const meta = SECTION_INDEX[active];
  return (
    <header className={styles.mobileHeader}>
      <div className={styles.mobileCrumb}>
        <span className={styles.mobileCrumbOrd}>{meta.groupOrd}</span>
        {meta.groupLabel}<Slash />{meta.label}
      </div>
      <div className={styles.mobileMeta}>
        <span>Spec<Slash />v1.2</span>
        <img className={styles.mobileMark} src={isDark ? markDark : markLight} alt="" />
      </div>
    </header>
  );
}

function MobileMenu({ active, open, onClose, onNav }) {
  const isOpen = open !== null;
  const chapters = CHAPTERS[active] || [];
  return (
    <>
      <div
        className={`${styles.mobileOverlay} ${isOpen ? styles.mobileOverlayOpen : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ''}`}
        role="dialog"
        aria-modal={isOpen}
        aria-hidden={!isOpen}
      >
        {open === 'pages' ? (
          <ul className={styles.mobileMenuList}>
            {NAV.flatMap((group) =>
              group.items.map((item) => (
                <li
                  key={item.id}
                  className={item.id === active ? styles.mobileMenuItemActive : undefined}
                >
                  <button
                    type="button"
                    className={styles.mobileMenuLink}
                    onClick={() => onNav(item.id)}
                  >
                    <span className={styles.mobileMenuLabel}>
                      {group.label}<Slash />{item.label}
                    </span>
                  </button>
                </li>
              ))
            )}
          </ul>
        ) : (
          <ul className={styles.mobileMenuList}>
            {chapters.length === 0 && <li className={styles.mobileMenuEmpty}>No chapters yet.</li>}
            {chapters.map((c, i) => (
              <li key={c.id}>
                <button type="button" className={styles.mobileMenuLink} onClick={onClose}>
                  <span className={styles.mobileMenuLabel}>
                    <span className={styles.mobileMenuStep}>{String(i + 1).padStart(2, '0')}</span>
                    {c.label}<Slash />{c.sub}
                  </span>
                  <span className={styles.mobileMenuCount}>{c.count}</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

function MobileBottomNav({ active, open, setOpen }) {
  const meta = SECTION_INDEX[active];
  const toggle = (id) => setOpen(open === id ? null : id);
  return (
    <nav className={styles.mobileBottomNav} aria-label="Mobile navigation">
      <button
        type="button"
        className={`${styles.mobileTab} ${open === 'crumb' ? styles.mobileTabActive : ''}`}
        onClick={() => toggle('crumb')}
      >
        {meta.groupLabel}<Slash />{meta.label}
      </button>
      <button
        type="button"
        className={`${styles.mobileTab} ${open === 'chapters' ? styles.mobileTabActive : ''}`}
        onClick={() => toggle('chapters')}
      >
        Chapters
      </button>
      <button
        type="button"
        className={`${styles.mobileTab} ${open === 'pages' ? styles.mobileTabActive : ''}`}
        onClick={() => toggle('pages')}
      >
        Pages
      </button>
    </nav>
  );
}

export default function App() {
  const active = useHashRoute();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [mobileOpen, setMobileOpen] = useState(null);
  const isMobileOpen = mobileOpen !== null;
  const goTo = (id) => {
    window.location.hash = id;
    setMobileOpen(null);
  };
  return (
    <div className={styles.site}>
      <Sidebar active={active} />
      <MobileHeader active={active} isDark={isDark} />
      <main className={`${styles.main} ${isMobileOpen ? styles.mainBlurred : ''}`}>
        {(() => {
          const Active = SECTIONS[active] || SECTIONS[DEFAULT_SECTION];
          return <Active />;
        })()}
      </main>
      <MobileMenu
        active={active}
        open={mobileOpen}
        onClose={() => setMobileOpen(null)}
        onNav={goTo}
      />
      <MobileBottomNav active={active} open={mobileOpen} setOpen={setMobileOpen} />
    </div>
  );
}
