/**
 * SpecimenSection — Components · Specimen (3.12) · fully built.
 *
 * The whole library on one scroll, grouped by category, as the quick
 * reference a Generator session loads when it starts from this system.
 * Every block renders the real Sprint 4 component; the Typography group
 * embeds the TypographySpecimen primitive itself. Nothing here is a
 * re-build — it imports and composes the twelve.
 */

import { useState } from 'react';
import { Section, Metabar, Hero, Chapter, Accent, Em, Slash, kit } from './_kit/Editorial.jsx';
import { Button } from '../components/Button/Button.jsx';
import { Badge } from '../components/Badge/Badge.jsx';
import { Card } from '../components/Card/Card.jsx';
import { Input } from '../components/Input/Input.jsx';
import { Alert } from '../components/Alert/Alert.jsx';
import { Switch } from '../components/Switch/Switch.jsx';
import { Avatar } from '../components/Avatar/Avatar.jsx';
import { ProgressIndicator } from '../components/ProgressIndicator/ProgressIndicator.jsx';
import { Tooltip } from '../components/Tooltip/Tooltip.jsx';
import { Divider } from '../components/Divider/Divider.jsx';
import { NavBar } from '../components/NavBar/NavBar.jsx';
import { TypographySpecimen } from '../components/TypographySpecimen/TypographySpecimen.jsx';
import styles from './SpecimenSection.module.css';

const noop = () => {};

function Block({ name, count, wide = false, children }) {
  return (
    <div className={`${kit.panel} ${wide ? styles.blockWide : ''}`}>
      <div className={kit.panelHead}><span><b>{name}</b></span>{count && <span>{count}</span>}</div>
      <div className={styles.blockBody}>{children}</div>
    </div>
  );
}

const navLinks = [
  { href: '#specimen', label: 'Work', current: true },
  { href: '#type', label: 'Studio' },
  { href: '#color', label: 'Contact' },
];
const navBrand = { font: 'var(--sc-font-text-label-chrome)', letterSpacing: 'var(--sc-font-text-label-chrome-letter-spacing)', textTransform: 'uppercase', color: 'var(--sc-color-text-primary)' };
const tipTarget = { font: 'var(--sc-font-text-body-default)', color: 'var(--sc-color-text-primary)', borderBottom: 'var(--sc-border-width-default) dashed var(--sc-color-border-strong)', cursor: 'help' };

export function SpecimenSection() {
  const [on, setOn] = useState(true);

  return (
    <Section id="specimen" labelledBy="specimen-title">
      <Metabar
        ord="02"
        crumb="Components / Specimen"
        meta={[['Last revised', '2026.06.05'], ['Tokens', '88'], ['Spec', 'v1.2'], ['Status', 'Complete']]}
      />

      <Hero
        id="specimen-title"
        eyebrow={<>Specimen<Slash />the whole library, one scroll</>}
        title={<>Twelve primitives. <Accent>One page.</Accent> The <Em>quick reference</Em> a build starts from.</>}
        lead={<>This is the proof and the index: every component the system ships, rendered live and grouped by job. A Generator session loads this page to see what already exists before building anything new. If it is not here, it has not been resolved yet.</>}
      />

      {/* i · FEEDBACK */}
      <Chapter
        ord="i"
        eyebrow="Feedback / says something back"
        title="Button, Badge, Alert."
        premise="The components that respond — an action to take, a state to read, a message to answer. All three carry status through the same semantic colour layer."
        annotations={[{ title: 'Shared signal', body: 'Button, Badge, and Alert all read status from the same tokens. A success is the same olive in all three.' }]}
      >
        <div className={styles.blocks}>
          <Block name="Button" count="6 states">
            <div className={styles.row}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Delete</Button>
              <Button disabled>Disabled</Button>
              <Button loading>Saving</Button>
            </div>
          </Block>
          <Block name="Badge" count="5 variants">
            <div className={styles.row}>
              <Badge>Studio</Badge>
              <Badge variant="success">Shipped</Badge>
              <Badge variant="warning">In review</Badge>
              <Badge variant="error">Failed</Badge>
              <Badge variant="neutral">Draft</Badge>
            </div>
          </Block>
          <Block name="Alert" count="4 variants" wide>
            <div className={styles.stack}>
              <Alert variant="info" title="Heads up">The brand site rebuilds on every push to main.</Alert>
              <Alert variant="error" title="Build failed">Token build exited non-zero. The previous deploy is still live.</Alert>
            </div>
          </Block>
        </div>
      </Chapter>

      {/* ii · INPUT */}
      <Chapter
        ord="ii"
        eyebrow="Input / takes something in"
        title="Input, Switch."
        premise="The controls that change state. The field speaks in borders; the switch flips immediately and rests on the accent when on."
        annotations={[{ title: 'Immediate vs deferred', body: 'A switch applies now; an input waits for a submit. Two different contracts, one register.' }]}
      >
        <div className={styles.blocks}>
          <Block name="Input" count="5 states">
            <div className={styles.stack}>
              <Input label="Email" placeholder="you@studio.com" />
              <Input label="Filled" defaultValue="levi@levibahn.com" />
            </div>
          </Block>
          <Block name="Switch" count="3 states">
            <div className={styles.row}>
              <Switch checked={on} onChange={() => setOn((v) => !v)} label={on ? 'On' : 'Off'} />
              <Switch disabled onChange={noop} label="Disabled" />
            </div>
          </Block>
        </div>
      </Chapter>

      {/* iii · DATA DISPLAY */}
      <Chapter
        ord="iii"
        eyebrow="Data display / shows what is"
        title="Card, Avatar, Progress, Divider."
        premise="The components that present. Surfaces, identity, measurement, separation — the structural pieces a layout is assembled from."
        annotations={[{ title: 'Flat by rule', body: 'Card lifts by contrast, Progress fills with the accent, Divider is a single hairline. No shadows anywhere.' }]}
      >
        <div className={styles.blocks}>
          <Block name="Card" count="3 variants">
            <div className={styles.row}>
              <Card><span style={cardBody}>Default · sunk</span></Card>
              <Card variant="elevated"><span style={cardBody}>Elevated · framed</span></Card>
            </div>
          </Block>
          <Block name="Avatar" count="4 sizes">
            <div className={styles.rowEnd}>
              <Avatar size="xs" name="Levi Bahn" />
              <Avatar size="sm" name="Levi Bahn" />
              <Avatar size="md" name="Levi Bahn" />
              <Avatar size="lg" name="Shokunin Crafthouse" />
            </div>
          </Block>
          <Block name="Progress" count="3 variants">
            <div className={styles.progressRow}>
              <div style={{ flex: 1, minWidth: 'var(--sc-p-space-120)' }}><ProgressIndicator variant="bar" value={0.62} label="62 percent" /></div>
              <ProgressIndicator variant="circular" value={0.7} label="70 percent" />
              <ProgressIndicator variant="step" steps={4} current={2} />
            </div>
          </Block>
          <Block name="Divider" count="3 states">
            <div className={styles.stack}>
              <Divider />
              <Divider label="or" />
            </div>
          </Block>
        </div>
      </Chapter>

      {/* iv · NAVIGATION */}
      <Chapter
        ord="iv"
        eyebrow="Navigation / moves you"
        title="NavBar, Tooltip."
        premise="The components that orient. The bar floats on the page ground and marks the current page in shu; the tooltip raises an inverse layer on hover."
        annotations={[{ title: 'Out of the way', body: 'Both recede until needed — the nav until you scan it, the tooltip until you hover.' }]}
      >
        <div className={styles.blocks}>
          <Block name="NavBar" count="desktop + compact" wide>
            <NavBar brand={<span style={navBrand}>Shokunin</span>} links={navLinks} trailing={<Button variant="secondary">Start a project</Button>} />
          </Block>
          <Block name="Tooltip" count="2 states" wide>
            <div className={styles.row}>
              <Tooltip content="Saved to the binder."><span style={tipTarget}>Hover me</span></Tooltip>
              <Tooltip multiline content="A longer note that wraps to two lines to show the readable-measure cap."><span style={tipTarget}>Hover for more</span></Tooltip>
            </div>
          </Block>
        </div>
      </Chapter>

      {/* v · TYPOGRAPHY */}
      <Chapter
        ord="v"
        eyebrow="Typography / the specimen"
        title="The type system, in use."
        premise="The twelfth primitive renders every semantic type role with real copy, each labelled with the token that carries it. The specimen is the map between role and register."
        annotations={[{ title: 'Real copy only', body: 'No Lorem. Every line is studio-register copy, including a git timestamp so the mono is shown doing its job.' }]}
      >
        <div className={kit.panel}>
          <div className={kit.panelHead}><span><b>TypographySpecimen</b><Slash />15 roles</span></div>
          <div className={styles.typeWrap}>
            <TypographySpecimen />
          </div>
        </div>
      </Chapter>
    </Section>
  );
}

const cardBody = { font: 'var(--sc-font-text-body-dense)', color: 'var(--sc-color-text-secondary)' };
