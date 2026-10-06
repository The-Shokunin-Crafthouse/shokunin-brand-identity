import figma from '@figma/code-connect'

import { PlusBullet } from './PlusBullet'

/**
 * Code Connect — PlusBullet · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:11` → component set `459:4`. The marks are generated from plusField.engine.js by
 * scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 *   Accent  VARIANT   false | true
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(PlusBullet, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=459-4', {
  props: {
    accent: figma.enum('Accent', { false: false, true: true }),
  },
  example: ({ accent }) => <PlusBullet accent={accent} />,
})
