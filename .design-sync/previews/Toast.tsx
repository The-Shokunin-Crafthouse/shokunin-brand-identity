import { Toast } from '@the-shokunin-crafthouse/scds';

// The floating dismiss sits 18px above and 20px past each plate, so stages
// leave that room, as the brand site's Toast page does.
function Stage({ children, backdrop = false }: { children: React.ReactNode; backdrop?: boolean }) {
  return (
    <div style={{ position: 'relative', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 'var(--sc-space-layout-stack-md)', justifyItems: 'start', width: 560, background: 'var(--sc-color-surface-page)', padding: 'var(--sc-space-layout-stack-md)', borderRadius: 'var(--sc-radius-card)' }}>
      {backdrop ? (
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: '0 55% 0 0', background: 'var(--sc-color-surface-sunk)' }} />
          <div style={{ position: 'absolute', inset: 0, display: 'flex', flexWrap: 'wrap', alignContent: 'center', font: 'var(--sc-font-text-display-xs)', color: 'var(--sc-color-text-primary)', lineHeight: 1, wordBreak: 'break-all', opacity: 0.6 }}>SHOKUNIN CRAFTHOUSE SHOKUNIN CRAFTHOUSE SHOKUNIN</div>
        </div>
      ) : null}
      {children}
    </div>
  );
}

export const Inline = () => (
  <Stage>
    <Toast tone="success">Sprint 5 merged and deployed to the brand site.</Toast>
    <Toast tone="info">The brand site rebuilds on every push to main.</Toast>
    <Toast tone="warning">Two approval gates remain before this can merge.</Toast>
    <Toast tone="error">Token build exited non-zero. The previous deploy is still live.</Toast>
  </Stage>
);

export const Floating = () => (
  <Stage>
    <Toast tone="success" placement="floating" autoDismiss={false}>Update published. Your client sees it now.</Toast>
    <Toast tone="error" placement="floating" autoDismiss={false}>That didn’t save. Check your connection and try again.</Toast>
  </Stage>
);

export const FloatingGlass = () => (
  <Stage backdrop>
    <Toast tone="info" placement="floating" surface="glass" autoDismiss={false}>Draft saved. Only you can see this.</Toast>
    <Toast tone="warning" placement="floating" surface="glass" autoDismiss={false}>Two approval gates remain before this can merge.</Toast>
  </Stage>
);

export const FilledGlyphs = () => (
  <Stage>
    <Toast tone="success" placement="floating" glyph="fill" autoDismiss={false}>Link copied to the clipboard.</Toast>
    <Toast tone="warning" placement="floating" glyph="fill" autoDismiss={false}>Your session ends in five minutes.</Toast>
  </Stage>
);

export const DismissDisabled = () => (
  <Stage>
    <Toast tone="info" placement="floating" autoDismiss={false} dismissDisabled>Sending. You can dismiss this once it lands.</Toast>
  </Stage>
);
