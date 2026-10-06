import figma from '@figma/code-connect'

import { PlusThumbnail } from './PlusThumbnail'

/**
 * Code Connect — PlusThumbnail · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:13` → component set `459:2400`. The marks are generated from plusField.engine.js by
 * scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 *   Seed     VARIANT   atlas | kiln | ledger | harbor | orbit | field
 *   Surface  VARIANT   inverse | sunk
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(PlusThumbnail, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=459-2400', {
  props: {
    seed: figma.enum('Seed', { atlas: 'atlas', kiln: 'kiln', ledger: 'ledger', harbor: 'harbor', orbit: 'orbit', field: 'field' }),
    surface: figma.enum('Surface', { inverse: 'inverse', sunk: 'sunk' }),
  },
  example: ({ seed, surface }) => <PlusThumbnail seed={seed} surface={surface} />,
})
