import figma from '@figma/code-connect'

import { PlusSeparator } from './PlusSeparator'

/**
 * Code Connect — PlusSeparator · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:12` → component set `474:56316`, one variant axis:
 *
 *   Tone   VARIANT   Default | Muted   → tone="default" | "muted"
 *
 * The set was made from the original component `459:2370` (now `Tone=Default`), so
 * existing instances kept their link. The marks are generated from plusField.engine.js
 * by scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(PlusSeparator, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=474-56316', {
  props: {
    tone: figma.enum('Tone', {
      Default: 'default',
      Muted: 'muted',
    }),
  },
  example: ({ tone }) => <PlusSeparator tone={tone} />,
})
