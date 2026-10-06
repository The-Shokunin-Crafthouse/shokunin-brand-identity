import figma from '@figma/code-connect'

import { PlusUnderline } from './PlusUnderline'

/**
 * Code Connect — PlusUnderline · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:6` → component set `459:2206`. The marks are generated from plusField.engine.js by
 * scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 *   Active  VARIANT   true | false
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(PlusUnderline, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=459-2206', {
  props: {
    active: figma.enum('Active', { true: true, false: false }),
  },
  example: ({ active }) => <PlusUnderline active={active} />,
})
