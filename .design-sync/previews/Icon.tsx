import { Icon, IconProvider } from '@the-shokunin-crafthouse/scds';
import { ArrowRight, Gear, MagnifyingGlass, Bell, CheckCircle } from '@phosphor-icons/react';

const row = { display: 'flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-lg)', color: 'var(--sc-color-text-primary)' } as const;

export const Sizes = () => (
  <div style={row}>
    <Icon glyph={Gear} size="sm" />
    <Icon glyph={Gear} size="md" />
    <Icon glyph={Gear} size="lg" />
  </div>
);

export const Weights = () => (
  <div style={row}>
    <Icon glyph={Bell} size="md" weight="regular" />
    <Icon glyph={Bell} size="md" weight="bold" />
    <Icon glyph={Bell} size="md" weight="fill" />
  </div>
);

export const InlineWithText = () => (
  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 'var(--sc-space-component-gap-sm)', font: 'var(--sc-font-text-body-default)', color: 'var(--sc-color-text-primary)' }}>
    <Icon glyph={CheckCircle} weight="fill" label="Done" />
    Deployed to production
    <Icon glyph={ArrowRight} />
  </span>
);

export const ProviderWeight = () => (
  <IconProvider weight="bold">
    <div style={row}>
      <MagnifyingGlass size={24} />
      <Gear size={24} />
      <Bell size={24} />
    </div>
  </IconProvider>
);
