import figma from '@figma/code-connect'

import { PlusSkeleton } from './PlusSkeleton'

/**
 * Code Connect — PlusSkeleton · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:9` → component set `459:2350`. The marks are generated from plusField.engine.js by
 * scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 *   Frame  VARIANT   rest — the reduced-motion state (engine STILL_T). Motion is
 *                    code-only, so the axis maps to no prop.
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(PlusSkeleton, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=459-2350', {
  example: () => <PlusSkeleton label="Loading projects" />,
})
