import figma from '@figma/code-connect'

import { Toast } from './Toast'

/**
 * Code Connect — Toast · SCDS library mapping.
 *
 * Figma side read 2026-10-08 (stages/03-build/physical-controls/output/
 * toast-spec-from-figma.md): library file `0zVoxaLJQkjHENYJlQk1VT`, page
 * `24:7` → component set `9:897` (32 variants since 2026-10-10).
 *
 *   Tone       VARIANT   Success | Error | Warning | Info
 *   Glyph      VARIANT   Outline | Fill (Phosphor bold or fill)
 *   Placement  VARIANT   Floating | Inline
 *   Surface    VARIANT   Flat | Glass
 *
 * Every code prop that shapes the design has a Figma axis (Levi, 2026-10-10).
 * Behaviour props stay unmapped: `autoDismiss`, `onDismiss`, `dismissDisabled`.
 *
 * The message is a text layer, not a component property, so the example
 * carries a placeholder. Publishing stays plan-gated (see ../CODE-CONNECT.md);
 * `npm run figma:parse` validates the code side.
 */
figma.connect(
  Toast,
  'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=9-897',
  {
    props: {
      // Figma "Tone" → Toast.jsx TONES.
      tone: figma.enum('Tone', {
        Success: 'success',
        Error: 'error',
        Warning: 'warning',
        Info: 'info',
      }),
      // Figma "Glyph" → Toast.jsx glyph.
      glyph: figma.enum('Glyph', {
        Outline: 'outline',
        Fill: 'fill',
      }),
      placement: figma.enum('Placement', {
        Floating: 'floating',
        Inline: 'inline',
      }),
      surface: figma.enum('Surface', {
        Flat: 'flat',
        Glass: 'glass',
      }),
    },
    example: ({ tone, glyph, placement, surface }) => (
      <Toast tone={tone} glyph={glyph} placement={placement} surface={surface} onDismiss={() => {}}>
        Changes saved.
      </Toast>
    ),
  },
)
