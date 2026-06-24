import figma from '@figma/code-connect'

import { Button } from './Button'

/**
 * Code Connect — Button · proof-of-setup mapping for the SCDS library.
 *
 * The CODE side below (props + example) is wired 1:1 to Button.jsx and is
 * correct as authored. The FIGMA side is NOT yet confirmed:
 *
 *   • node-id is a PLACEHOLDER (`0-1` = canvas root). Replace it with the real
 *     Button component's link — in Figma, right-click the component →
 *     "Copy link to selection" — before running `npm run figma:publish`.
 *   • The Figma property names ("Variant", "Disabled", "Loading", "Label") and
 *     the enum values ("Primary"…) are BEST-GUESS. Align them to the actual
 *     variant/property names on that component once it exists.
 *
 * As of this commit the SCDS React primitives have no 1:1 published Figma
 * masters (the file holds doc/specimen + portal-kit components on different
 * variant axes). See ../CODE-CONNECT.md for the per-component TODO and the
 * publish flow. `npm run figma:parse` validates this file's structure without
 * touching Figma, so it passes with the placeholder URL in place.
 */
figma.connect(
  Button,
  'https://www.figma.com/design/ufNlysCwWz7y2FBk61DxbN/The-Shokunin-Crafthouse?node-id=0-1',
  {
    props: {
      // variant = primary | secondary | ghost | destructive  (Button.jsx VARIANTS)
      variant: figma.enum('Variant', {
        Primary: 'primary',
        Secondary: 'secondary',
        Ghost: 'ghost',
        Destructive: 'destructive',
      }),
      // disabled and loading are independent of variant (Button.jsx)
      disabled: figma.boolean('Disabled'),
      loading: figma.boolean('Loading'),
      // button label text → children
      label: figma.string('Label'),
    },
    example: ({ variant, disabled, loading, label }) => (
      <Button variant={variant} disabled={disabled} loading={loading}>
        {label}
      </Button>
    ),
  },
)
