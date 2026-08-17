/**
 * index.js — package entry for @the-shokunin-crafthouse/scds.
 *
 * This repo is the studio's design-system source. It builds two things from
 * the same `src/`:
 *   1. the brand reference SPA (`npm run build` → dist/), deployed to
 *      brand.shokunincrafthouse.com
 *   2. this consumable library (`npm run build:lib` → dist-lib/), published to
 *      GitHub Packages and installed by every branded property
 *
 * Consumers import components from the package root and the stylesheets from
 * the `./styles/*` subpaths:
 *
 *   import { Button, Card } from '@the-shokunin-crafthouse/scds';
 *   import '@the-shokunin-crafthouse/scds/styles/tokens.css';
 *   import '@the-shokunin-crafthouse/scds/styles/components.css';
 *
 * tokens.css is GENERATED from tokens/primitives.json + tokens/semantic.json
 * (see scripts/tokens-to-css.mjs). Never hand-edit it, here or downstream.
 */

export { Alert } from './components/Alert/Alert.jsx';
export { Avatar } from './components/Avatar/Avatar.jsx';
export { Badge } from './components/Badge/Badge.jsx';
export { Button } from './components/Button/Button.jsx';
export { Card } from './components/Card/Card.jsx';
export { Divider } from './components/Divider/Divider.jsx';
export { Icon, IconProvider } from './components/Icon/Icon.jsx';
export { Input } from './components/Input/Input.jsx';
export { NavBar } from './components/NavBar/NavBar.jsx';
export { ProgressIndicator } from './components/ProgressIndicator/ProgressIndicator.jsx';
export { SegmentedControl } from './components/SegmentedControl/SegmentedControl.jsx';
export { Stepper } from './components/Stepper/Stepper.jsx';
export { Switch } from './components/Switch/Switch.jsx';
export { Tooltip } from './components/Tooltip/Tooltip.jsx';
export { TypographySpecimen } from './components/TypographySpecimen/TypographySpecimen.jsx';

export { ThemeProvider, useTheme } from './theme/ThemeProvider.jsx';
