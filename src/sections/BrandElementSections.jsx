/**
 * BrandElementSections — the eleven brand-element pages (PlusField and its
 * ten wrappers). Each renders ComponentPage under the "Brand elements" group:
 * the real component in every documented state, the token table resolved
 * live, and the usage rules. Copy follows _config/design-system/brand-elements.md.
 * Decision: decisions/decisions.md 2026-10-04 · plus-field.
 */

import { ComponentPage } from './_kit/ComponentPage.jsx';
import { Slash, Accent, Em } from './_kit/Editorial.jsx';
import { PlusField } from '../components/PlusField/PlusField.jsx';
import { SectionDivider } from '../components/SectionDivider/SectionDivider.jsx';
import { HeadingRule } from '../components/HeadingRule/HeadingRule.jsx';
import { PlusUnderline } from '../components/PlusUnderline/PlusUnderline.jsx';
import { PlusProgress } from '../components/PlusProgress/PlusProgress.jsx';
import { PlusLoader } from '../components/PlusLoader/PlusLoader.jsx';
import { PlusSkeleton } from '../components/PlusSkeleton/PlusSkeleton.jsx';
import { PlusTimeline } from '../components/PlusTimeline/PlusTimeline.jsx';
import { PlusBullet } from '../components/PlusBullet/PlusBullet.jsx';
import { PlusSeparator } from '../components/PlusSeparator/PlusSeparator.jsx';
import { PlusThumbnail } from '../components/PlusThumbnail/PlusThumbnail.jsx';
import styles from './BrandElementSections.module.css';

const PAGE = { ord: '03', group: 'Brand elements', revised: '2026.10.04' };

/** One art in a 4:3 tile, filling it as a backdrop. */
function Tile(props) {
  return <div className={styles.tile}><PlusField backdrop {...props} /></div>;
}

/* ── Plus Field ──────────────────────────────────────────── */
export function PlusFieldPage() {
  return (
    <ComponentPage
      {...PAGE}
      id="plus-field" label="Plus Field"
      eyebrow={<>Plus Field<Slash />one mark, every slot</>}
      title={<>Every mark is a <Accent>plus.</Accent> The slot decides the <Em>shape.</Em></>}
      lead={<>One canvas primitive draws every brand element in the system. Name an art and it fills its box: crisp grids where the layout needs structure, loose ribbons where a page needs a hand. Colour comes from the tokens at draw time, so dark mode costs nothing. The ten pages that follow are this field with the decisions already made.</>}
      statesTitle="Eleven expressive arts. No wrapper, one prop."
      statesPremise="Each tile is the real PlusField drawing one art from the approved set (Brand Elements, turn 2). Flip the mode in the rail and every tile redraws from the dark tokens."
      callouts={[
        { title: 'Crisp for structure, loose for expression', body: 'Dividers, progress and tabs sit on an exact grid with no jitter. Heroes, CTAs and cards get offset rows and soft edges. A loose divider stops dividing; a crisp hero reads as a chart.' },
        { title: 'Teal is a guard, not a guideline', body: 'A drawer gets no accent colour. It asks for teal by naming progress, active or current, and any other request throws. Nobody has to remember the rule for it to hold.' },
        { title: 'One loop for the whole page', body: 'The three animated arts share one frame loop and drop out of it when they scroll away. Under reduced motion each holds the frame that reads as finished.' },
      ]}
      states={[
        { name: 'Card header · 2c', token: 'ucardhead', render: <Tile art="ucardhead" /> },
        { name: 'Card hover · 2d', token: 'ucard · hover the tile', render: <Tile art="ucard" surface="raised" /> },
        { name: 'CTA band · 2e', token: 'ucta', render: <Tile art="ucta" /> },
        { name: 'Empty state · 2f', token: 'uempty', render: <Tile art="uempty" surface="sunk" /> },
        { name: 'Image placeholder · 2k', token: 'umedia', render: <Tile art="umedia" surface="sunk" /> },
        { name: 'Hero background · 2l', token: 'uhero', render: <Tile art="uhero" surface="raised" /> },
        { name: 'Footer edge · 2m', token: 'ufooter', render: <Tile art="ufooter" /> },
        { name: 'Pull-quote bracket · 2n', token: 'uquote', render: <Tile art="uquote" surface="raised" /> },
        { name: 'Form card corner · 2s', token: 'unews', render: <Tile art="unews" surface="raised" /> },
        { name: '404 · 2q', token: 'type', render: <Tile art="type" text="404" textScale={0.85} /> },
        { name: 'App splash · 2t', token: 'usplash · animated', render: <Tile art="usplash" /> },
        { name: 'Shape · square', token: 'shape="square"', render: <Tile art="umedia" surface="sunk" shape="square" /> },
        { name: 'Shape · round', token: 'shape="round"', render: <Tile art="umedia" surface="sunk" shape="round" /> },
        { name: 'Density · 1.6', token: 'density={1.6}', render: <Tile art="umedia" surface="sunk" density={1.6} /> },
        { name: 'Density · 0.6', token: 'density={0.6}', render: <Tile art="umedia" surface="sunk" density={0.6} /> },
      ]}
      tokenRows={[
        { prop: 'Ground · inverse (default)', token: '--sc-color-surface-inverse' },
        { prop: 'Ground · raised', token: '--sc-color-surface-raised' },
        { prop: 'Ground · page', token: '--sc-color-surface-page' },
        { prop: 'Ground · sunk', token: '--sc-color-surface-sunk' },
        { prop: 'Marks on inverse', token: '--sc-color-text-on-inverse' },
        { prop: 'Marks on any other ground', token: '--sc-color-text-primary' },
        { prop: 'Teal · progress, active, current', token: '--sc-color-brand-accent' },
        { prop: 'Halftone type face', token: '--sc-font-text-display-md', light: 'display face · drawn at 500' },
      ]}
      rulesTitle="Four rules that keep the field one system."
      rulesPremise="These protect the system, not any one art. Each has a home in the brand-elements guideline the design agent reads."
      rules={[
        { name: 'One loose field per view', text: 'A hero and a CTA band on the same screen compete for the same glance. Keep the one at the decision point and let the other go.' },
        { name: 'Never behind body copy', text: 'Loose fields sit behind headlines, buttons and captions. Paragraphs, form fields and data get a clean ground.' },
        { name: 'Give it a box', text: 'The field has no size of its own. Set the parent’s height, or pass backdrop inside a positioned host. A 0×0 box draws nothing, on purpose.' },
        { name: 'Plus fields come from PlusField', text: 'A hand-built CSS or SVG halftone drifts from the system on its first theme change. The primitive keeps density, shape, theme and motion in one place.' },
      ]}
    />
  );
}

/* ── Section Divider · 2a ────────────────────────────────── */
export function SectionDividerPage() {
  return (
    <ComponentPage
      {...PAGE}
      id="section-divider" label="Section Divider" statesVariant="stack"
      eyebrow={<>Section Divider<Slash />three weights of pause</>}
      title={<>A pause you can <Accent>measure</Accent> in <Em>rows.</Em></>}
      lead={<>One row between paragraphs, three between sections, five with square ends for a chapter break. The grid is crisp because a divider is structure. It draws in primary ink on whatever surface holds it and never brings a background of its own.</>}
      statesTitle="Three weights, one rule."
      callouts={[
        { title: 'Rows, not thickness', body: 'A thicker line reads as louder. More rows read as longer. The weights stretch the pause without raising the volume.' },
        { title: 'Square ends mean an ending', body: 'Hairline and band fade at both ends, so they read as a breath. Block stops square, so it reads as a stop.' },
        { title: 'Heights on the grid', body: 'The prototype drew 20, 28 and 40. These hold the 8pt scale at 16, 24 and 32, and every row still fits.' },
      ]}
      states={[
        { name: 'Hairline · 1 row', token: '--sc-space-layout-stack-sm', render: <div className={styles.fill}><SectionDivider weight="hairline" /></div> },
        { name: 'Band · 3 rows', token: '--sc-space-layout-stack-md', render: <div className={styles.fill}><SectionDivider weight="band" /></div> },
        { name: 'Block · 5 rows, square ends', token: 'calc(--sc-space-layout-stack-sm × 2)', render: <div className={styles.fill}><SectionDivider weight="block" /></div> },
        { name: 'Band · own ground', token: 'surface="sunk"', render: <div className={styles.fill}><SectionDivider weight="band" surface="sunk" /></div> },
      ]}
      tokenRows={[
        { prop: 'Marks', token: '--sc-color-text-primary' },
        { prop: 'Hairline height', token: '--sc-space-layout-stack-sm' },
        { prop: 'Band height', token: '--sc-space-layout-stack-md' },
        { prop: 'Block height', token: '--sc-space-layout-stack-sm', light: '32px (× 2)' },
      ]}
      rulesTitle="Three rules for a pause that means something."
      rules={[
        { name: 'One weight per boundary', text: 'Choose hairline for paragraphs and band for sections once, then hold it for the whole page. Two weights at the same level read as a mistake.' },
        { name: 'Block is for chapters', text: 'Five square rows is the loudest structural mark in the set. Once or twice a page, and never between cards.' },
        { name: 'Divider stays for dense UI', text: 'Forms, menus and tables keep the plain Divider. The plus rule belongs to page rhythm, not to controls.' },
      ]}
    />
  );
}

/* ── Heading Rule · 2b ───────────────────────────────────── */
export function HeadingRulePage() {
  return (
    <ComponentPage
      {...PAGE}
      id="heading-rule" label="Heading Rule" statesVariant="stack"
      eyebrow={<>Heading Rule<Slash />the section opener</>}
      title={<>The heading names it. The rule <Accent>carries it</Accent> to the <Em>edge.</Em></>}
      lead={<>A heading, then a plus rule that fills the rest of the line and thins out as it goes. Title opens a section with a three-row band. Eyebrow labels a run of content with a single row. The heading is real text in a real heading element; the rule is decoration.</>}
      statesTitle="Two variants, one line."
      callouts={[
        { title: 'It fades away from the words', body: 'The rule starts dense beside the heading and thins toward the margin, so the eye finishes the line and comes back to the words.' },
        { title: 'The rule never pushes', body: 'It takes the width the heading leaves and nothing more. A long heading wraps before the row overflows.' },
        { title: 'The outline stays honest', body: 'Title renders an h2 and eyebrow a p. Pass as to put it at the right level of the outline.' },
      ]}
      states={[
        { name: 'Title', token: '--sc-font-text-title-section', render: <div className={styles.fill}><HeadingRule as="p">Selected work</HeadingRule></div> },
        { name: 'Eyebrow', token: '--sc-font-text-mono-caption', render: <div className={styles.fill}><HeadingRule variant="eyebrow">02 / Services</HeadingRule></div> },
        { name: 'Title · narrow column', token: 'flex: 1 · min-width: 0', render: <div className={styles.narrow}><HeadingRule as="p">Studio notes</HeadingRule></div> },
      ]}
      tokenRows={[
        { prop: 'Title type', token: '--sc-font-text-title-section', light: 'title-section' },
        { prop: 'Eyebrow type', token: '--sc-font-text-mono-caption', light: 'mono-caption' },
        { prop: 'Heading ink', token: '--sc-color-text-primary' },
        { prop: 'Eyebrow ink', token: '--sc-color-text-secondary' },
        { prop: 'Title gap and rule height', token: '--sc-space-layout-stack-md' },
        { prop: 'Eyebrow gap and rule height', token: '--sc-space-layout-stack-sm' },
      ]}
      rulesTitle="Three rules for opening a section."
      rules={[
        { name: 'Keep the heading short', text: 'Two to four words. The rule needs room on the line to read as a rule and not as an underline.' },
        { name: 'Never under a divider', text: 'The heading rule already marks the boundary. A section divider directly above it doubles the pause.' },
        { name: 'Eyebrow above title, not instead of it', text: 'Use eyebrow to label a run of content, then a title to name it. Two titles in a row is one too many.' },
      ]}
    />
  );
}

/* ── Plus Underline · 2j ─────────────────────────────────── */
function TabRow({ active }) {
  const tabs = ['Overview', 'Work', 'Studio', 'Contact'];
  return (
    <ul className={styles.tabs}>
      {tabs.map((t) => (
        <li key={t}>
          <a className={styles.tab} href="#plus-underline" aria-current={t === active ? 'page' : undefined} onClick={(e) => e.preventDefault()}>
            {t}
            <PlusUnderline active={t === active} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export function PlusUnderlinePage() {
  return (
    <ComponentPage
      {...PAGE}
      id="plus-underline" label="Plus Underline"
      eyebrow={<>Plus Underline<Slash />where you are</>}
      title={<>Two rows of <Accent>teal</Accent> under the tab you are <Em>on.</Em></>}
      lead={<>The active-tab indicator for nav links and segmented tabs. Every tab gets one and only the current one draws. Inactive underlines keep their height, so the labels never jump when the selection moves.</>}
      statesTitle="Active, inactive, and the row they live in."
      callouts={[
        { title: 'Teal earns this one', body: 'Active state is one of the three jobs teal is allowed. The engine paints the underline through the active role and nothing else.' },
        { title: 'Same height, on or off', body: 'An inactive underline reserves its 12 and draws nothing. Selection moves, labels stay level.' },
        { title: 'The state lives on the tab', body: 'The underline is aria-hidden. aria-current or aria-selected on the tab tells assistive tech what the marks show.' },
      ]}
      states={[
        { name: 'Nav row · Work', token: 'aria-current="page"', render: <TabRow active="Work" /> },
        { name: 'Nav row · Contact', token: 'selection moved', render: <TabRow active="Contact" /> },
        { name: 'Active alone', token: '--sc-color-brand-accent', render: <div className={styles.small}><PlusUnderline /></div> },
      ]}
      tokenRows={[
        { prop: 'Marks', token: '--sc-color-brand-accent' },
        { prop: 'Height', token: '--sc-space-component-gap-lg' },
        { prop: 'Active label', token: '--sc-color-text-primary' },
        { prop: 'Inactive label', token: '--sc-color-text-secondary' },
      ]}
      rulesTitle="Three rules for the mark that says where you are."
      rules={[
        { name: 'One active tab per row', text: 'Two teal underlines in one row is no selection at all. If two things are current, they belong in two rows.' },
        { name: 'Inside the tab, as wide as the label', text: 'Put the underline inside the tab element, under the label. It takes the label’s width, so short tabs get short marks.' },
        { name: 'Not a hover state', text: 'Hover moves the label colour. The underline moves only when the selection does.' },
      ]}
    />
  );
}

/* ── Plus Progress · 2h ──────────────────────────────────── */
export function PlusProgressPage() {
  return (
    <ComponentPage
      {...PAGE}
      id="plus-progress" label="Plus Progress"
      eyebrow={<>Plus Progress<Slash />how far along</>}
      title={<>Teal fills the row as the work <Accent>moves.</Accent> The rest waits in <Em>faint ink.</Em></>}
      lead={<>A row of plus marks that fills with teal from the left. Thin is one row for an upload or a scroll position. Band is three rows for reading or task progress. A hidden progressbar carries the value, so a screen reader hears the number the marks show.</>}
      statesTitle="Thin, band, and both ends of the range."
      callouts={[
        { title: 'Progress is current state', body: 'Teal marks how far the work has come right now. That keeps it inside the rule: teal for state, never for decoration.' },
        { title: 'Display, not control', body: 'Nothing here takes a drag or a key press. For a value the user sets, use Slider.' },
        { title: 'Always labelled', body: 'The label names the hidden progressbar. Without one, a screen reader announces a number with no subject.' },
      ]}
      states={[
        { name: 'Thin · 64%', token: 'variant="thin"', render: <div className={styles.fill}><PlusProgress value={0.64} label="Upload" /></div> },
        { name: 'Band · 38%', token: 'variant="band"', render: <div className={styles.fill}><PlusProgress variant="band" value={0.38} label="Reading progress" /></div> },
        { name: 'Empty and complete', token: 'value={0} · value={1}', render: (
          <div className={`${styles.fill} ${styles.stack}`}>
            <PlusProgress value={0} label="Not started" />
            <PlusProgress value={1} label="Complete" />
          </div>
        ) },
      ]}
      tokenRows={[
        { prop: 'Fill', token: '--sc-color-brand-accent' },
        { prop: 'Track (20%)', token: '--sc-color-text-primary' },
        { prop: 'Thin height', token: '--sc-space-layout-stack-sm' },
        { prop: 'Band height', token: '--sc-space-layout-stack-md' },
      ]}
      rulesTitle="Three rules for showing how far."
      rules={[
        { name: 'Pair it with the number', text: 'The marks show the shape of the progress; text shows the value. Put the percentage beside the row.' },
        { name: 'Unknown length gets a loader', text: 'If nothing knows how far along the work is, a filling row is a guess. Use PlusLoader.' },
        { name: 'Pass a label every time', text: '“Upload” or “Reading progress”, never empty. It is the only name the progressbar has.' },
      ]}
    />
  );
}

/* ── Plus Loader · 2i ────────────────────────────────────── */
export function PlusLoaderPage() {
  return (
    <ComponentPage
      {...PAGE}
      id="plus-loader" label="Plus Loader"
      eyebrow={<>Plus Loader<Slash />the page is coming</>}
      title={<>It draws, it holds, it <Em>fades.</Em> Then it <Accent>starts again.</Accent></>}
      lead={<>The page loader. A zigzag of marks draws itself in, holds, fades and repeats every 2.8 seconds on the inverse ground. It says “Loading” once to assistive tech, stops while it is offscreen, and holds the finished drawing under reduced motion.</>}
      statesTitle="Running, still, and smaller."
      callouts={[
        { title: 'Why 2.8 seconds', body: 'Long enough to read as calm, short enough that the next pass arrives before anyone wonders. Continuous motion is the one category the motion rules let run past 600ms.' },
        { title: 'Offscreen, it stops', body: 'A loader nobody can see still costs frames. It drops out of the shared loop the moment it leaves the viewport.' },
        { title: 'Still means finished', body: 'Under reduced motion it shows the zigzag fully drawn. The shape still says loading; only the movement goes.' },
      ]}
      states={[
        { name: 'Running', token: '2.8s loop', render: <PlusLoader /> },
        { name: 'Still', token: 'animate={false}', render: <PlusLoader animate={false} /> },
        { name: 'Smaller', token: 'width from the container', render: <div className={styles.small}><PlusLoader /></div> },
      ]}
      tokenRows={[
        { prop: 'Ground', token: '--sc-color-surface-inverse' },
        { prop: 'Marks', token: '--sc-color-text-on-inverse' },
        { prop: 'Size', token: '--sc-space-layout-stack-xl', light: '240px (× 3)' },
        { prop: 'Corners', token: '--sc-radius-surface' },
      ]}
      rulesTitle="Three rules for the wait."
      rules={[
        { name: 'One loader per view', text: 'Two loaders on one screen say two things are loading and leave the reader to work out which matters.' },
        { name: 'Content in place gets a skeleton', text: 'When the layout is known and only the data is late, PlusSkeleton holds the space. The loader is for a page that does not exist yet.' },
        { name: 'Say what is loading', text: '“Loading the project” beats “Loading”. “Please wait” says nothing at all.' },
      ]}
    />
  );
}

/* ── Plus Skeleton · 2g ──────────────────────────────────── */
export function PlusSkeletonPage() {
  return (
    <ComponentPage
      {...PAGE}
      id="plus-skeleton" label="Plus Skeleton"
      eyebrow={<>Plus Skeleton<Slash />the card before the card</>}
      title={<>The shape of the card, <Accent>before</Accent> the <Em>card.</Em></>}
      lead={<>An avatar, a title, three lines of body and a media block, drawn in faint marks, with a highlight sweeping across while the data loads. It holds the space the card will take, so nothing jumps when the content lands.</>}
      statesTitle="Sweeping, at rest, and on a quieter ground."
      callouts={[
        { title: 'It holds the layout', body: 'The skeleton is the card’s height before the card exists. Content arriving swaps one for the other with no shift.' },
        { title: 'One status for many', body: 'Give a label to one skeleton in a grid, or to none if the page already announces the wait. Six “Loading” messages is noise.' },
        { title: 'At rest under reduced motion', body: 'The sweep stops and the shapes stay at their faint value. The page still reads as loading.' },
      ]}
      states={[
        { name: 'Sweeping', token: '--sc-color-surface-raised', render: <div className={styles.fill}><PlusSkeleton /></div> },
        { name: 'At rest', token: 'animate={false}', render: <div className={styles.fill}><PlusSkeleton animate={false} /></div> },
        { name: 'Sunk ground', token: 'surface="sunk"', render: <div className={styles.fill}><PlusSkeleton surface="sunk" /></div> },
      ]}
      tokenRows={[
        { prop: 'Ground', token: '--sc-color-surface-raised' },
        { prop: 'Marks (16% to 76%)', token: '--sc-color-text-primary' },
        { prop: 'Height', token: '--sc-space-layout-stack-xl', light: '240px (× 3)' },
        { prop: 'Corners', token: '--sc-radius-surface' },
      ]}
      rulesTitle="Three rules for the space you are holding."
      rules={[
        { name: 'Put it where the card lands', text: 'Same column, same width. A skeleton in the wrong place shifts the page twice.' },
        { name: 'Label one, not all', text: 'One status message per wait. The rest of the skeletons stay quiet.' },
        { name: 'Swap, do not stack', text: 'Remove the skeleton when the card renders. A skeleton left under real content flickers through it.' },
      ]}
    />
  );
}

/* ── Plus Timeline · 2o ──────────────────────────────────── */
export function PlusTimelinePage() {
  return (
    <ComponentPage
      {...PAGE}
      id="plus-timeline" label="Plus Timeline"
      eyebrow={<>Plus Timeline<Slash />done, now, next</>}
      title={<>Done is solid. Now is <Accent>teal.</Accent> Next is <Em>faint.</Em></>}
      lead={<>A vertical stepper. The rail and the nodes are drawn; the labels are a real ordered list, and each one sits level with its node because both share one row pitch. The current step carries aria-current, so the list says what the colour shows.</>}
      statesTitle="Mid-project, first step, last step."
      callouts={[
        { title: 'Labels are text', body: 'They stay selectable, translatable and readable by a screen reader. The canvas only draws the connector and the nodes.' },
        { title: 'Spacing follows the steps', body: 'Each node sits at the centre of an equal row. Add a step and every node moves with its label.' },
        { title: 'Teal on one node', body: 'Only the current step is teal. Done steps go solid in primary ink; the rest stay faint.' },
      ]}
      states={[
        { name: 'In progress', token: 'current={2}', render: <PlusTimeline label="Project stages" steps={['Brief', 'Design', 'Build · in progress', 'Launch']} current={2} /> },
        { name: 'First step', token: 'current={0}', render: <PlusTimeline label="Onboarding" steps={['Account · now', 'Workspace', 'Invite']} current={0} /> },
        { name: 'Last step', token: 'current={steps.length - 1}', render: <PlusTimeline label="Release" steps={['Build', 'Review', 'Ship · now']} current={2} /> },
      ]}
      tokenRows={[
        { prop: 'Current node', token: '--sc-color-brand-accent' },
        { prop: 'Done nodes and connector', token: '--sc-color-text-primary' },
        { prop: 'Upcoming label', token: '--sc-color-text-tertiary' },
        { prop: 'Label type', token: '--sc-font-text-label-ui', light: 'label-ui' },
        { prop: 'Row pitch', token: '--sc-space-layout-stack-xl' },
        { prop: 'Rail width', token: '--sc-space-layout-stack-lg' },
      ]}
      rulesTitle="Three rules for a path with a you-are-here."
      rules={[
        { name: 'One line per label', text: 'Each row is 80 tall. A label that wraps drifts off its node.' },
        { name: 'Say it in the words too', text: '“Build · in progress” tells everyone. Teal alone tells only the people who can see it.' },
        { name: 'Horizontal counts use the step bar', text: 'For a compact count of steps across the top of a form, use Progress step. The timeline is for stages that need names.' },
      ]}
    />
  );
}

/* ── Plus Bullet · 2p ────────────────────────────────────── */
export function PlusBulletPage() {
  return (
    <ComponentPage
      {...PAGE}
      id="plus-bullet" label="Plus Bullet"
      eyebrow={<>Plus Bullet<Slash />a list in the brand’s hand</>}
      title={<>Nine marks per item. <Accent>Teal</Accent> for the one you are <Em>on.</Em></>}
      lead={<>A 3×3 block of plus marks, icon-sized, for short lists that carry the brand. accent turns the current item teal. The bullet is decoration; the list is a real list.</>}
      statesTitle="Resting, current, and in a list."
      callouts={[
        { title: 'Current, not important', body: 'A teal bullet means “this one is happening now”. It is not a highlight for the item you most want read.' },
        { title: 'A real list underneath', body: 'Use it inside ul or ol with list-style none. The bullet is aria-hidden; the list structure does the announcing.' },
        { title: 'Icon-sized on purpose', body: 'At 16 it sits on the same scale as every icon in the system and lines up with body text.' },
      ]}
      states={[
        { name: 'Resting', token: '--sc-color-text-primary', render: <PlusBullet /> },
        { name: 'Current', token: '--sc-color-brand-accent', render: <PlusBullet accent /> },
        { name: 'In a list', token: 'aria-current="step"', render: (
          <ul className={styles.list}>
            {[['Strategy', false], ['Design · current', true], ['Engineering', false]].map(([label, current]) => (
              <li key={label} className={styles.item} aria-current={current ? 'step' : undefined}><PlusBullet accent={current} />{label}</li>
            ))}
          </ul>
        ) },
      ]}
      tokenRows={[
        { prop: 'Marks', token: '--sc-color-text-primary' },
        { prop: 'Current marks', token: '--sc-color-brand-accent' },
        { prop: 'Size', token: '--sc-size-icon-sm' },
      ]}
      rulesTitle="Two rules for nine small marks."
      rules={[
        { name: 'At most one teal bullet', text: 'Teal marks the current item. Two of them means neither is current.' },
        { name: 'Short lists only', text: 'Long-form copy keeps plain bullets. The plus bullet is for short, scannable lists where each item is a stage or a service.' },
      ]}
    />
  );
}

/* ── Plus Separator · 2p ─────────────────────────────────── */
function Crumbs({ shape }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className={styles.crumbs}>
        <li>Home</li>
        <li aria-hidden="true"><PlusSeparator shape={shape} /></li>
        <li>Work</li>
        <li aria-hidden="true"><PlusSeparator shape={shape} /></li>
        <li aria-current="page">Case study</li>
      </ol>
    </nav>
  );
}

export function PlusSeparatorPage() {
  return (
    <ComponentPage
      {...PAGE}
      id="plus-separator" label="Plus Separator"
      eyebrow={<>Plus Separator<Slash />the step between crumbs</>}
      title={<>Three marks <Accent>climbing</Accent> from one crumb to the <Em>next.</Em></>}
      lead={<>The breadcrumb separator. Three plus marks on a rising diagonal, sized under the label’s cap height so they read as punctuation. Assistive tech skips them; the current page is marked on its own item.</>}
      statesTitle="In a trail, and on its own."
      callouts={[
        { title: 'Punctuation, not a glyph', body: 'At 12 it sits below the cap height of the label. It separates without competing with the words.' },
        { title: 'It climbs', body: 'The diagonal rises left to right, the direction the trail reads: from where you came to where you are.' },
        { title: 'Silent by design', body: 'Separators are aria-hidden. A screen reader hears “Home, Work, Case study, current page”, not the marks between them.' },
      ]}
      states={[
        { name: 'Breadcrumb', token: 'aria-current="page"', render: <Crumbs /> },
        { name: 'Breadcrumb · round', token: 'shape="round"', render: <Crumbs shape="round" /> },
        { name: 'On its own', token: '--sc-size-icon-sm × 0.75', render: <PlusSeparator /> },
        { name: 'Muted · in a dense row', token: 'tone="muted" → --sc-color-text-disabled', render: <PlusSeparator tone="muted" /> },
      ]}
      tokenRows={[
        { prop: 'Marks (60%)', token: '--sc-color-text-primary' },
        { prop: 'Size', token: '--sc-size-icon-sm', light: '12px (× 0.75)' },
      ]}
      rulesTitle="Two rules for the smallest mark in the set."
      rules={[
        { name: 'Breadcrumbs only', text: 'It means “one level down”. Between unrelated items it says something false.' },
        { name: 'Mark the current page on the item', text: 'aria-current="page" goes on the last crumb. The separator carries no state of its own.' },
      ]}
    />
  );
}

/* ── Plus Thumbnail · 2r ─────────────────────────────────── */
const SEEDS = [['atlas', 'inverse'], ['kiln', 'sunk'], ['ledger', 'inverse'], ['harbor', 'sunk'], ['orbit', 'inverse'], ['field', 'sunk']];

export function PlusThumbnailPage() {
  return (
    <ComponentPage
      {...PAGE}
      id="plus-thumbnail" label="Plus Thumbnail"
      eyebrow={<>Plus Thumbnail<Slash />a picture from a name</>}
      title={<>Same seed, <Accent>same</Accent> <Em>picture.</Em></>}
      lead={<>A generated thumbnail for any item that has no image yet. The project’s slug seeds every choice the drawing makes, so “kiln” looks like kiln on every page and at every size. A placeholder with a point of view, not a grey box.</>}
      statesTitle="Six seeds, one seed at two sizes, and one on its own."
      callouts={[
        { title: 'Deterministic', body: 'The slug is hashed into the random source. Every bend, width and orientation comes from it, so one seed is one picture.' },
        { title: 'Stable seeds only', body: 'Seed with the slug or id, never the list position. Re-sort the list and an index-seeded thumbnail changes face.' },
        { title: 'Two grounds, alternated', body: 'Inverse and sunk side by side keep a grid of placeholders from reading as one block.' },
      ]}
      states={[
        { name: 'Seeded grid', token: 'seed={slug}', render: (
          <div className={styles.thumbs}>
            {SEEDS.map(([seed, surface]) => (
              <div key={seed}><PlusThumbnail seed={seed} surface={surface} /><p className={styles.thumbCaption}>{seed}</p></div>
            ))}
          </div>
        ) },
        { name: 'Same seed · two sizes', token: 'seed="kiln"', render: (
          <>
            <div className={styles.small}><PlusThumbnail seed="kiln" /></div>
            <div className={styles.tiny}><PlusThumbnail seed="kiln" /></div>
          </>
        ) },
        { name: 'Standing alone', token: 'label · role="img"', render: <div className={styles.small}><PlusThumbnail seed="harbor" surface="sunk" label="Harbor, no image yet" /></div> },
      ]}
      tokenRows={[
        { prop: 'Ground', token: '--sc-color-surface-inverse' },
        { prop: 'Quiet ground', token: '--sc-color-surface-sunk' },
        { prop: 'Marks on inverse', token: '--sc-color-text-on-inverse' },
        { prop: 'Corners', token: '--sc-radius-control' },
      ]}
      rulesTitle="Three rules for a picture nobody drew."
      rules={[
        { name: 'Seed with the slug', text: 'An item keeps its picture for life. Never seed with an index, a timestamp or anything that changes.' },
        { name: 'Replace it when the real image exists', text: 'The thumbnail stands in. Once a photo or a render is ready, it takes the slot.' },
        { name: 'Label it only when it stands alone', text: 'Beside a visible title it is decoration. On its own, pass label so it is announced as an image.' },
      ]}
    />
  );
}
