import { PlusField, Button, TextField } from '@the-shokunin-crafthouse/scds';

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
export const CardHeader = () => (
  <Modes side>
    <div style={{ width: 360, background: 'var(--sc-color-surface-raised)', borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
      <div style={{ height: 150 }}><PlusField art="ucardhead" /></div>
      <div style={{ padding: 'var(--sc-space-layout-inset-md)', display: 'grid', gap: 'var(--sc-space-component-gap-sm)' }}>
        <p style={{ font: 'var(--sc-font-text-title-card)', margin: 0 }}>Card title</p>
        <p style={caption}>Category · 2026</p>
      </div>
    </div>
  </Modes>
);

export const CardHover = () => (
  <Modes side>
    <div style={{ position: 'relative', width: 360, height: 220, borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
      <PlusField art="ucard" surface="raised" backdrop />
      <div style={{ position: 'absolute', left: 'var(--sc-space-layout-inset-md)', bottom: 'var(--sc-space-layout-inset-md)', display: 'grid', gap: 'var(--sc-space-component-gap-sm)' }}>
        <p style={{ font: 'var(--sc-font-text-title-card)', margin: 0 }}>Hover this card</p>
        <p style={caption}>Feature grid · link card</p>
      </div>
    </div>
  </Modes>
);

export const CtaBand = () => (
  <Modes>
    <div style={{ position: 'relative', height: 260, borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
      <PlusField art="ucta" backdrop />
      <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 'var(--sc-space-layout-stack-md)' }}>
        <p style={{ font: 'var(--sc-font-text-title-section)', color: 'var(--sc-color-text-on-inverse)', margin: 0 }}>Start a project</p>
        <Button variant="secondary">Get in touch</Button>
      </div>
    </div>
  </Modes>
);

export const EmptyState = () => (
  <Modes side>
    <div style={{ width: 360, boxSizing: 'border-box', background: 'var(--sc-color-surface-sunk)', borderRadius: 'var(--sc-radius-surface)', padding: 'var(--sc-space-layout-inset-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--sc-space-layout-stack-sm)' }}>
      <div style={{ width: 160, height: 120 }}><PlusField art="uempty" surface="none" /></div>
      <p style={{ font: 'var(--sc-font-text-title-card)', margin: 0 }}>No projects yet</p>
      <Button variant="secondary">New project</Button>
    </div>
  </Modes>
);

export const ImagePlaceholder = () => (
  <Modes side>
    <div style={{ position: 'relative', width: 360, aspectRatio: '16 / 9', borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
      <PlusField art="umedia" surface="sunk" backdrop />
      <p style={{ ...caption, position: 'absolute', left: 'var(--sc-space-layout-inset-sm)', bottom: 'var(--sc-space-component-gap-lg)' }}>16:9 · image pending</p>
    </div>
  </Modes>
);

export const Hero = () => (
  <Modes>
    <section style={{ position: 'relative', height: 232, borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
      <PlusField art="uhero" surface="raised" backdrop />
      <div style={{ position: 'relative', height: '100%', maxWidth: '46%', paddingLeft: 'var(--sc-space-layout-inset-lg)', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', gap: 'var(--sc-space-layout-stack-md)' }}>
        <h1 style={{ font: 'var(--sc-font-text-display-sm)', margin: 0 }}>Page headline sits here</h1>
        <Button>View work</Button>
      </div>
    </section>
  </Modes>
);

export const FooterEdge = () => (
  <Modes>
    <footer style={{ position: 'relative', height: 220, borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
      <PlusField art="ufooter" backdrop />
      <div style={{ position: 'absolute', left: 'var(--sc-space-layout-inset-lg)', right: 'var(--sc-space-layout-inset-lg)', bottom: 'var(--sc-space-layout-stack-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', color: 'var(--sc-color-text-on-inverse)' }}>
        <div style={{ display: 'flex', gap: 'var(--sc-space-layout-stack-md)', font: 'var(--sc-font-text-label-ui)' }}><span>Work</span><span>Studio</span><span>Contact</span></div>
        <p style={{ font: 'var(--sc-font-text-mono-caption)', margin: 0 }}>© 2026</p>
      </div>
    </footer>
  </Modes>
);

export const QuoteBracket = () => (
  <Modes side>
    <figure style={{ position: 'relative', width: 360, height: 300, margin: 0 }}>
      <PlusField art="uquote" surface="raised" backdrop />
      <div style={{ position: 'relative', height: '100%', padding: 'var(--sc-space-layout-stack-xl) var(--sc-space-layout-stack-lg)', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'var(--sc-space-layout-stack-sm)' }}>
        <blockquote style={{ margin: 0, font: 'var(--sc-font-text-body-lead)' }}>Pull quotes sit inside the bracket, set in the lead style.</blockquote>
        <figcaption style={caption}>Name, role</figcaption>
      </div>
    </figure>
  </Modes>
);

export const FormCorner = () => (
  <Modes side>
    <div style={{ position: 'relative', width: 360, background: 'var(--sc-color-surface-raised)', borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden' }}>
      <PlusField art="unews" surface="raised" backdrop />
      <div style={{ position: 'relative', padding: 'var(--sc-space-layout-stack-xl) var(--sc-space-layout-inset-md) var(--sc-space-layout-inset-md)', display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
        <p style={{ font: 'var(--sc-font-text-title-card)', margin: 0 }}>Newsletter</p>
        <TextField label="Email" placeholder="you@studio.com" />
        <div><Button>Subscribe</Button></div>
      </div>
    </div>
  </Modes>
);

export const NotFound = () => (
  <Modes>
    <div style={{ background: 'var(--sc-color-surface-inverse)', borderRadius: 'var(--sc-radius-surface)', overflow: 'hidden', display: 'grid', justifyItems: 'center', gap: 'var(--sc-space-layout-stack-sm)', paddingBottom: 'var(--sc-space-layout-stack-md)' }}>
      <div style={{ width: '100%', height: 120 }}><PlusField art="type" text="404" textScale={0.85} /></div>
      <p style={{ font: 'var(--sc-font-text-body-lead)', color: 'var(--sc-color-text-on-inverse)', margin: 0 }}>Page not found</p>
      <Button variant="secondary">Back home</Button>
    </div>
  </Modes>
);

export const Splash = () => (
  <Modes side>
    <div style={{ position: 'relative', width: 270, height: 560, borderRadius: 'var(--sc-radius-surface-large)', overflow: 'hidden' }}>
      <PlusField art="usplash" backdrop label="Loading" />
      <p style={{ position: 'absolute', left: 0, right: 0, bottom: 'var(--sc-space-layout-stack-md)', textAlign: 'center', font: 'var(--sc-font-text-mono-caption)', color: 'var(--sc-color-text-on-inverse)', margin: 0 }}>Loading</p>
    </div>
  </Modes>
);

export const ShapesAndDensity = () => (
  <Modes>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: 'var(--sc-space-component-gap-lg)' }}>
      {[['plus', 1], ['square', 1], ['round', 1], ['plus', 0.6], ['plus', 1.6], ['round', 1.6]].map(([shape, density]) => (
        <div key={`${shape}${density}`} style={{ display: 'grid', gap: 'var(--sc-space-component-gap-sm)' }}>
          <div style={{ height: 96, borderRadius: 'var(--sc-radius-control)', overflow: 'hidden' }}><PlusField art="umedia" surface="sunk" shape={shape} density={density} /></div>
          <p style={caption}>{shape} · density {density}</p>
        </div>
      ))}
    </div>
  </Modes>
);
