import figma from '@figma/code-connect'

import { Toast } from './Toast'

/**
 * Code Connect — Toast · SCDS library mapping.
 *
 * Figma side read 2026-10-08 (stages/03-build/physical-controls/output/
 * toast-spec-from-figma.md): library file `0zVoxaLJQkjHENYJlQk1VT`, page
 * `24:7` → component set `9:897`.
 *
 *   Tone   VARIANT   Success | Error | Info
 *
 * Code props with no Figma counterpart, unmapped:
 *
 *   • `tone="warning"` — the set has no Warning variant (the tone came from
 *     Alert). The Figma Error variant fills its badge with the warning hue;
 *     code fills error with status.error (decisions 2026-10-10, open with
 *     Levi).
 *   • `placement="inline"` — the set draws the floating toast only, so the
 *     example renders `placement="floating"`.
 *   • `autoDismiss`, `onDismiss`, `dismissDisabled` — behaviour, not design.
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
      // Figma "Tone" → Toast.jsx TONES. `warning` is code-only.
      tone: figma.enum('Tone', {
        Success: 'success',
        Error: 'error',
        Info: 'info',
      }),
    },
    example: ({ tone }) => (
      <Toast tone={tone} placement="floating" onDismiss={() => {}}>
        Changes saved.
      </Toast>
    ),
  },
)
