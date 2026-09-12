import figma from '@figma/code-connect'

import { Button } from './Button'

/**
 * Code Connect — Button · SCDS library mapping.
 *
 * Figma side confirmed 2026-09-11 by an authenticated MCP read of the SCDS
 * library file (`0zVoxaLJQkjHENYJlQk1VT`), page `24:3` → component set `9:438`.
 * This replaces the original placeholder (`node-id=0-1` on the *brand* file
 * `ufNlysCwWz7y2FBk61DxbN`, best-guess property names) — both the file and the
 * node were wrong, and the `Ghost` enum value named a variant that exists on
 * neither side.
 *
 * The component set's real properties:
 *
 *   Variant      VARIANT   Primary | Secondary | Tertiary
 *   State        VARIANT   Default | Hover | Focus | Active | Disabled
 *   Label        TEXT      default "Button"
 *   Show Icon    BOOLEAN   default true
 *   Icon         INSTANCE_SWAP
 *
 * Two code props have no Figma counterpart and are therefore unmapped:
 *
 *   • `variant="destructive"` — the Figma set has no Destructive variant.
 *   • `loading` — the Figma set has no Loading state.
 *
 * Both are tracked in ../CODE-CONNECT.md. `State` is a design-time axis: only
 * `Disabled` has a code prop (Hover/Focus/Active are CSS pseudo-classes, not
 * props), so the other four options intentionally map to nothing.
 *
 * Publishing remains plan-gated — `figma connect publish` needs the
 * `code_connect:write` scope, which Figma offers only on Organization /
 * Enterprise. This account is on Professional (confirmed again 2026-09-11 via
 * the MCP `whoami`: plan "Studio", tier `pro`). `npm run figma:parse` validates
 * the code side without touching Figma and passes today.
 */
figma.connect(
  Button,
  'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=9-438',
  {
    props: {
      // Figma "Variant" → Button.jsx VARIANTS. `destructive` is code-only.
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Tertiary: 'tertiary',
      }),
      // Disabled is a value on the "State" variant axis, not a boolean
      // property — the other four State options leave this undefined.
      disabled: figma.enum('State', {
        Disabled: true,
      }),
      // Trailing arrow toggle.
      arrow: figma.boolean('Show Icon'),
      // Button label text → children.
      label: figma.string('Label'),
    },
    example: ({ variant, disabled, arrow, label }) => (
      <Button variant={variant} disabled={disabled} arrow={arrow}>
        {label}
      </Button>
    ),
  },
)
