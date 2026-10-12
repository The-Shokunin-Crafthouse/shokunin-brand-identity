import { useState } from 'react';
import { Input } from '@the-shokunin-crafthouse/scds';
import { CalendarBlank, EnvelopeSimple, MagnifyingGlass } from '@phosphor-icons/react';

// The default field is a light well built for the page ground, so stories
// that show it sit on surface.page.
function Page({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: 352, display: 'grid', gap: 'var(--sc-space-layout-stack-sm)', background: 'var(--sc-color-surface-page)', padding: 'var(--sc-space-component-padding-md)', borderRadius: 'var(--sc-radius-card)' }}>
      {children}
    </div>
  );
}

// Controlled wrapper so a clearable field empties when its clear button is pressed.
function Field({ initial = '', ...props }: { initial?: string; [k: string]: unknown }) {
  const [value, setValue] = useState(initial);
  return <Input {...props} value={value} onChange={(e) => setValue(e.target.value)} onClear={() => setValue('')} />;
}

export const Default = () => (
  <Page>
    <Field label="Full name" placeholder="Your name" />
  </Page>
);

export const WithSubcopy = () => (
  <Page>
    <Field label="Email address" description="We only use it for receipts." icon={EnvelopeSimple} placeholder="you@studio.com" />
  </Page>
);

export const FilledClearable = () => (
  <Page>
    <Field label="Search" icon={MagnifyingGlass} clearable initial="brand reference site" />
  </Page>
);

export const PrefixSuffixTrailing = () => (
  <Page>
    <Field label="Display" prefix="Size" suffix="inches" initial="14" />
    <Field label="Kickoff" trailing={CalendarBlank} initial="9 February 2027" helper="Shown on the proposal cover." />
  </Page>
);

export const OnRaisedSurface = () => (
  <div style={{ width: 352, background: 'var(--sc-color-surface-raised)', padding: 'var(--sc-space-component-padding-md)', borderRadius: 'var(--sc-radius-card)' }}>
    <Field label="Name on card" surface="raised" placeholder="As it appears" />
  </div>
);

export const ErrorAndDisabled = () => (
  <Page>
    <Field label="Email address" icon={EnvelopeSimple} error="That isn’t an email yet." clearable initial="levi@" />
    <Field label="Client" icon={EnvelopeSimple} disabled placeholder="Unavailable" />
  </Page>
);
