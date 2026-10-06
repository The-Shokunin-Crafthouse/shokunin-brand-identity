import figma from '@figma/code-connect'

import { PlusField } from './PlusField'

/**
 * Code Connect — PlusField · SCDS library mapping.
 *
 * Figma side built 2026-10-05 in the SCDS library file (`0zVoxaLJQkjHENYJlQk1VT`),
 * page `458:3` → component set `459:2771`. The marks are generated from plusField.engine.js by
 * scripts/plusfield-to-figma.mjs, so the variants draw what the code draws.
 *
 *   Art     VARIANT   the 20 arts (ARTS in the engine)
 *   Shape   VARIANT   plus | square | round (square and round exist on umedia only)
 *
 * Surface, density, seed and the art options are fixed per variant at the
 * brand-site tile state; they are code-only props here.
 *
 * Publishing remains plan-gated (see ../CODE-CONNECT.md). `npm run figma:parse`
 * validates the code side.
 */
figma.connect(PlusField, 'https://www.figma.com/design/0zVoxaLJQkjHENYJlQk1VT/SCDS?node-id=459-2771', {
  props: {
    art: figma.enum('Art', {
        udiv: 'udiv',
        ucardhead: 'ucardhead',
        ucard: 'ucard',
        ucta: 'ucta',
        uempty: 'uempty',
        uskel: 'uskel',
        uprog: 'uprog',
        uloader: 'uloader',
        uline: 'uline',
        umedia: 'umedia',
        uhero: 'uhero',
        ufooter: 'ufooter',
        uquote: 'uquote',
        utime: 'utime',
        ubullet: 'ubullet',
        usep: 'usep',
        uthumb: 'uthumb',
        unews: 'unews',
        usplash: 'usplash',
        type: 'type',
    }),
    shape: figma.enum('Shape', { plus: 'plus', square: 'square', round: 'round' }),
  },
  example: ({ art, shape }) => <PlusField art={art} shape={shape} />,
})
