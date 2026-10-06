import figma from '@figma/code-connect'

import { PlusProgress } from './PlusProgress'

/**
 * Code Connect — PlusProgress · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:7` → component set `459:2236`. The marks are generated from plusField.engine.js by
 * scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 *   Variant  VARIANT   thin | band
 *   Value    VARIANT   0 | 38 | 64 | 100 (percent; the prop takes 0–1)
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(PlusProgress, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=459-2236', {
  props: {
    variant: figma.enum('Variant', { thin: 'thin', band: 'band' }),
    value: figma.enum('Value', { '0': 0, '38': 0.38, '64': 0.64, '100': 1 }),
  },
  example: ({ variant, value }) => <PlusProgress variant={variant} value={value} label="Upload" />,
})
