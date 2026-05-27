/**
 * App.jsx — Sprint 4 component-primitives showcase.
 *
 * One section per component (12 total). Each section shows all
 * documented states (per sc-brand-system-spec.md §2 Tier 3) plus a
 * mono caption listing the tokens the component consumes. Real copy
 * throughout — voice register: studio/marketing.
 *
 * Theme toggle in the header flips data-theme on <html>; every
 * component re-resolves from --sc-* semantic vars without remount.
 */

import { useState } from 'react';
import { useTheme } from './theme/ThemeProvider.jsx';
import { Alert } from './components/Alert/Alert.jsx';
import { Avatar } from './components/Avatar/Avatar.jsx';
import { Badge } from './components/Badge/Badge.jsx';
import { Button } from './components/Button/Button.jsx';
import { Card } from './components/Card/Card.jsx';
import { Divider } from './components/Divider/Divider.jsx';
import { Input } from './components/Input/Input.jsx';
import { NavBar } from './components/NavBar/NavBar.jsx';
import { ProgressIndicator } from './components/ProgressIndicator/ProgressIndicator.jsx';
import { Switch } from './components/Switch/Switch.jsx';
import { Tooltip } from './components/Tooltip/Tooltip.jsx';
import { TypographySpecimen } from './components/TypographySpecimen/TypographySpecimen.jsx';
import styles from './App.module.css';

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      className={styles.toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
    >
      <span className={styles.toggleIcon} aria-hidden="true">◐</span>
      <span className={styles.toggleLabel}>{theme} mode</span>
    </button>
  );
}

function Section({ id, n, title, tokens, children }) {
  return (
    <section id={id} className={styles.section} aria-labelledby={`${id}-title`}>
      <header className={styles.sectionHeader}>
        <span className={styles.sectionNumber}>{n}</span>
        <div className={styles.sectionMeta}>
          <h2 id={`${id}-title`} className={styles.sectionTitle}>{title}</h2>
          <p className={styles.sectionTokens}>tokens · {tokens}</p>
        </div>
      </header>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

function StateGrid({ children }) {
  return <div className={styles.stateGrid}>{children}</div>;
}

function StateCell({ label, children }) {
  return (
    <div className={styles.stateCell}>
      <div className={styles.stateLabel}>{label}</div>
      <div className={styles.stateVisual}>{children}</div>
    </div>
  );
}

export default function App() {
  const [switchOn, setSwitchOn] = useState(true);
  const [switchOff, setSwitchOff] = useState(false);
  const [inputFilled] = useState('levi@levibahn.com');

  return (
    <div className={styles.page}>
      <header className={styles.masthead}>
        <div className={styles.mastheadInner}>
          <div className={styles.brand}>
            <span className={styles.brandMark} aria-hidden="true">⌬</span>
            <span className={styles.brandLockup}>
              <span className={styles.brandTitle}>Shokunin Crafthouse</span>
              <span className={styles.brandSubtitle}>Sprint 4 · Component primitives</span>
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <main className={styles.main}>
        <section className={styles.intro}>
          <h1 className={styles.heroTitle}>Twelve components, built from tokens.</h1>
          <p className={styles.heroLead}>
            Every value on this page resolves to a semantic token in <code>tokens/semantic.json</code>.
            Component code references <code>var(--sc-*)</code> only — never a hex, never a magic number.
            Toggle the theme above; every component re-resolves from the cascade without remount.
          </p>
        </section>

        <Section id="button" n="3.1" title="Button"
          tokens="--sc-color-interactive-* · --sc-color-brand-accent · --sc-space-component-padding-* · --sc-radius-surface · --sc-motion-press-*">
          <StateGrid>
            <StateCell label="primary"><Button variant="primary">Open the system</Button></StateCell>
            <StateCell label="secondary"><Button variant="secondary">Read the brief</Button></StateCell>
            <StateCell label="ghost"><Button variant="ghost">Skip ahead</Button></StateCell>
            <StateCell label="destructive"><Button variant="destructive">Discard changes</Button></StateCell>
            <StateCell label="disabled"><Button variant="primary" disabled>Awaiting approval</Button></StateCell>
            <StateCell label="loading"><Button variant="primary" loading>Building specimen</Button></StateCell>
          </StateGrid>
        </Section>

        <Section id="badge" n="3.2" title="Badge"
          tokens="--sc-color-brand-accent · --sc-color-status-* · --sc-radius-control · --sc-font-text-mono-chrome-*">
          <StateGrid>
            <StateCell label="default"><Badge>Sprint 4</Badge></StateCell>
            <StateCell label="success"><Badge variant="success">Shipped</Badge></StateCell>
            <StateCell label="warning"><Badge variant="warning">In review</Badge></StateCell>
            <StateCell label="error"><Badge variant="error">Blocked</Badge></StateCell>
            <StateCell label="neutral"><Badge variant="neutral">Draft</Badge></StateCell>
          </StateGrid>
        </Section>

        <Section id="card" n="3.3" title="Card"
          tokens="--sc-color-surface-sunk · --sc-color-surface-deep-sunk · --sc-color-surface-page · --sc-radius-surface · --sc-border-width-default">
          <StateGrid>
            <StateCell label="default">
              <Card>
                <strong>Token Architecture</strong>
                <p className={styles.cardBody}>One primitive layer. One semantic layer. Every component reads from semantic — primitives stay invisible to surfaces.</p>
              </Card>
            </StateCell>
            <StateCell label="interactive">
              <Card variant="interactive" onClick={() => {}}>
                <strong>Type System</strong>
                <p className={styles.cardBody}>Neue Haas Grotesk · twelve scale steps · per-step composition tokens. Hover this card.</p>
              </Card>
            </StateCell>
            <StateCell label="elevated">
              <Card variant="elevated">
                <strong>Voice Framework</strong>
                <p className={styles.cardBody}>Four registers, seven principles, a checker skill that scores both. Resolved in Sprint 3.</p>
              </Card>
            </StateCell>
          </StateGrid>
        </Section>

        <Section id="input" n="3.4" title="Input"
          tokens="--sc-color-surface-page · --sc-color-border-* · --sc-color-status-error · --sc-font-text-body-default · --sc-font-text-caption">
          <StateGrid>
            <StateCell label="default">
              <Input label="Project name" placeholder="Living brand reference site" />
            </StateCell>
            <StateCell label="filled">
              <Input label="Contact" defaultValue={inputFilled} helper="We reply within one working day." />
            </StateCell>
            <StateCell label="error">
              <Input label="Domain" defaultValue="not a domain" error="Use a fully qualified domain — e.g. brand.shokunincrafthouse.com" />
            </StateCell>
            <StateCell label="disabled">
              <Input label="Lead" defaultValue="Levi Bahn" disabled helper="Locked while the engagement is active." />
            </StateCell>
          </StateGrid>
        </Section>

        <Section id="divider" n="3.5" title="Divider"
          tokens="--sc-color-border-default · --sc-border-width-default · --sc-font-text-mono-chrome-*">
          <StateGrid>
            <StateCell label="horizontal">
              <div className={styles.dividerExample}>
                <p>Above the line — preceding section.</p>
                <Divider />
                <p>Below the line — following section.</p>
              </div>
            </StateCell>
            <StateCell label="vertical">
              <div className={styles.verticalRow}>
                <span>Stage 02</span>
                <Divider orientation="vertical" />
                <span>Design</span>
                <Divider orientation="vertical" />
                <span>Approved</span>
              </div>
            </StateCell>
            <StateCell label="with label">
              <div className={styles.dividerExample}>
                <p>Above the labelled rule.</p>
                <Divider label="Sprint break" />
                <p>Below the labelled rule.</p>
              </div>
            </StateCell>
          </StateGrid>
        </Section>

        <Section id="avatar" n="3.6" title="Avatar"
          tokens="--sc-size-avatar-* · --sc-radius-pill · --sc-color-surface-sunk · --sc-font-text-label-chrome-*">
          <StateGrid>
            <StateCell label="xs"><Avatar size="xs" name="Levi Bahn" /></StateCell>
            <StateCell label="sm"><Avatar size="sm" name="Levi Bahn" /></StateCell>
            <StateCell label="md"><Avatar size="md" name="Shokunin Crafthouse" /></StateCell>
            <StateCell label="lg"><Avatar size="lg" name="Asuka Tanaka" /></StateCell>
            <StateCell label="image (md)"><Avatar size="md" src="/assets/logo/mark-icon-light.svg" name="Studio mark" /></StateCell>
            <StateCell label="initials fallback"><Avatar size="md" name="" /></StateCell>
          </StateGrid>
        </Section>

        <Section id="navbar" n="3.7" title="NavBar"
          tokens="--sc-color-surface-page · --sc-color-border-default · --sc-color-interactive-hover · --sc-color-brand-accent · --sc-font-text-body-dense-*">
          <div className={styles.navbarStack}>
            <div className={styles.navbarFrame}>
              <span className={styles.navbarLabel}>desktop</span>
              <NavBar
                brand="Shokunin"
                links={[
                  { href: '#button', label: 'Components', current: true },
                  { href: '#typography', label: 'Type' },
                  { href: '#alert', label: 'Voice' },
                  { href: '#avatar', label: 'Mark' },
                ]}
                trailing={<Button variant="ghost">Sign in</Button>}
              />
            </div>
            <div className={styles.navbarFrame}>
              <span className={styles.navbarLabel}>compact</span>
              <NavBar
                compact
                brand="Shokunin"
                links={[
                  { href: '#button', label: 'Components', current: true },
                  { href: '#typography', label: 'Type' },
                  { href: '#alert', label: 'Voice' },
                  { href: '#avatar', label: 'Mark' },
                ]}
              />
            </div>
          </div>
        </Section>

        <Section id="tooltip" n="3.8" title="Tooltip"
          tokens="--sc-color-surface-inverse · --sc-color-text-on-inverse · --sc-radius-control · --sc-motion-reveal-*">
          <StateGrid>
            <StateCell label="single-line">
              <Tooltip content="Anchored to the brand mark">
                <Button variant="secondary">Hover here</Button>
              </Tooltip>
            </StateCell>
            <StateCell label="multi-line">
              <Tooltip
                multiline
                content="Multi-line tooltips wrap at a token-derived max-width and keep the same arrow, padding, and inverted ground as the single-line variant."
              >
                <Button variant="secondary">Hover the long one</Button>
              </Tooltip>
            </StateCell>
          </StateGrid>
        </Section>

        <Section id="switch" n="3.9" title="Switch"
          tokens="--sc-size-switch-* · --sc-color-brand-accent · --sc-color-surface-deep-sunk · --sc-radius-pill">
          <StateGrid>
            <StateCell label="on">
              <Switch checked={switchOn} onChange={() => setSwitchOn((v) => !v)} label="Reveal tokens panel" />
            </StateCell>
            <StateCell label="off">
              <Switch checked={switchOff} onChange={() => setSwitchOff((v) => !v)} label="Auto-publish on green CI" />
            </StateCell>
            <StateCell label="disabled">
              <Switch checked disabled label="Locked while engagement is active" />
            </StateCell>
          </StateGrid>
        </Section>

        <Section id="progress" n="3.10" title="ProgressIndicator"
          tokens="--sc-size-progress-* · --sc-color-brand-accent · --sc-color-surface-deep-sunk · --sc-radius-pill">
          <StateGrid>
            <StateCell label="bar">
              <div className={styles.progressBlock}>
                <ProgressIndicator variant="bar" value={0.62} label="Sprint 4 build progress" />
                <p className={styles.progressCaption}>Sprint 4 · 62% complete</p>
              </div>
            </StateCell>
            <StateCell label="circular">
              <ProgressIndicator variant="circular" value={0.78} label="Token coverage" />
            </StateCell>
            <StateCell label="step">
              <ProgressIndicator variant="step" steps={6} current={3} />
            </StateCell>
          </StateGrid>
        </Section>

        <Section id="alert" n="3.11" title="Alert"
          tokens="--sc-color-surface-sunk · --sc-color-status-* · --sc-border-width-accent · --sc-font-text-title-card · --sc-font-text-body-dense">
          <div className={styles.stack}>
            <Alert variant="info" title="Theme toggle is live.">
              The toggle at the top swaps every component to its dark-mode resolution without remount. Click it, then come back here.
            </Alert>
            <Alert variant="success" title="Token gap closed.">
              All 65 semantic + 3 primitive additions landed in tokens.css. Component build resumes against the expanded layer.
            </Alert>
            <Alert variant="warning" title="Shadow tokens deferred.">
              Card elevated state uses surface + border contrast instead of a drop shadow. Reasoning lives in Card.tokens.md.
            </Alert>
            <Alert variant="error" title="Lorem ipsum on staging.">
              No lorem reaches staging. This alert is here so the variant ships its real copy register, not as a live error.
            </Alert>
          </div>
        </Section>

        <Section id="typography" n="3.12" title="TypographySpecimen"
          tokens="--sc-font-text-display-* · --sc-font-text-title-* · --sc-font-text-body-* · --sc-font-text-caption · --sc-font-text-label-* · --sc-font-text-mono-*">
          <TypographySpecimen />
        </Section>
      </main>

      <footer className={styles.footer}>
        <p className={styles.footerLine}>
          Sprint 4 · Component primitives · branch <code>feat/sprint-4-components</code>
        </p>
        <p className={styles.footerLine}>
          Token CSS · {/* counts surface below via the cascade */}<code>365 root · 158 dark</code>
        </p>
      </footer>
    </div>
  );
}
