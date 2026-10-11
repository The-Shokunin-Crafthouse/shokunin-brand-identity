The one SCDS notification: a capsule plate with a tone badge and the message. It replaces Alert (decisions 2026-10-08). Two placements: `inline` sits in the flow and stays, `floating` rises in, carries a dismiss button and leaves on its own.

## Rules

- **Pick the placement by what the reader must do.** Nothing to do: `floating` (saved, sent, copied, a non-blocking error). Something to read before going on, or a state that holds: `inline` (a form error summary, a read-only notice, a failed build). A floating toast never holds a required action; anything the reader must act on belongs inline or in a dialog.
- **The message states the fact and the way forward** in one or two short sentences, two lines at most (longer copy is clipped with an ellipsis; assistive tech still reads it all). No title: the badge names the tone, and assistive tech hears a tone word first ("Error: …").
- **Tone follows urgency.** `error` and `warning` interrupt a screen reader (`role="alert"`); `info` and `success` wait (`role="status"`). A polite success that interrupts is a bug.
- **The consumer owns the stack.** The component positions nothing. Put floating toasts in one fixed region (one corner, newest nearest the edge), keep the list in state, and remove a toast in `onDismiss`, which fires after the exit has played.
- **Timing.** A floating toast holds for `--sc-motion-toast-hold` (6s), pauses while the pointer or focus is inside it, and Escape dismisses it. `autoDismiss={false}` keeps it until dismissed.
- **Flat or glass.** Flat is the default. Glass is frosted glass over whatever sits behind the toast; use it over imagery or busy content, never glass on glass. It turns opaque under reduced transparency or more contrast.
- **Leave room for the dismiss.** It sits on each floating toast's top-right corner, 18px above and 20px past the plate. Space a stack by at least 24px and keep that much margin in the region.
- Boxes are fills, never strokes; no status LED.

## Use

```jsx
import { Toast } from '@the-shokunin-crafthouse/scds';

<Toast tone="error">Token build exited non-zero. The previous deploy is still live.</Toast>

<div style={{ position: 'fixed', insetBlockEnd: 'var(--sc-space-layout-inset-md)', insetInlineEnd: 'var(--sc-space-layout-inset-md)', display: 'grid', gap: 'var(--sc-space-layout-stack-sm)' }}>
  {toasts.map((t) => (
    <Toast key={t.id} tone={t.tone} placement="floating" onDismiss={() => remove(t.id)}>{t.message}</Toast>
  ))}
</div>
```

## Props

| Prop | Values | Default |
|---|---|---|
| `tone` | `success`, `error`, `warning`, `info` | `info` |
| `placement` | `inline`, `floating` | `inline` |
| `surface` | `flat`, `glass` | `flat` |
| `glyph` | `outline` (Phosphor bold), `fill` | `outline` |
| `autoDismiss` | floating only: dismiss after the hold | `true` |
| `onDismiss` | floating only: called after the exit has played | none |
| `dismissLabel` | accessible name of the dismiss button | `Dismiss notification` |
| `dismissDisabled` | floating only: disables the dismiss button and Escape | `false` |
| `toneLabel` | the hidden word read before the message | the tone (`Error`) |
