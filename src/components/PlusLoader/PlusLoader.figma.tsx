import figma from '@figma/code-connect'

import { PlusLoader } from './PlusLoader'

/**
 * Code Connect — PlusLoader · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:8` → component set `459:2329`. The marks are generated from plusField.engine.js by
 * scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 *   Frame  VARIANT   still — the reduced-motion frame (engine STILL_T). Motion is
 *                    code-only, so the axis maps to no prop.
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(PlusLoader, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=459-2329', {
  example: () => <PlusLoader label="Loading" />,
})
