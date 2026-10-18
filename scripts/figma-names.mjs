/**
 * figma-names — the token path ↔ SCDS library name map. One source.
 *
 * A library name is the token path with "/" for "." (text styles: "text/" +
 * the path after font.text, camelCase segments in kebab), except for the
 * documented, deliberate differences below. Each is a recorded convention,
 * not drift (decisions.md 2026-08-16, 2026-07-28 audit Block 5, 2026-10-03):
 * the values still have to agree.
 *
 * Read by scripts/tune-figma-sync.mjs (sync), scripts/parity/
 * compare-figma-variables.mjs and scripts/parity/figma-plugin-check.mjs
 * (parity), so the three can never disagree on a name. Add a difference here,
 * never in one of them.
 */

/** Variables whose library name is not the token path. */
export const VARIABLE_NAMES = {
  // The -ink tier is flat in Figma, nested in code.
  'color.status.success.ink.light': 'color/status/successInkLight',
  'color.status.success.ink.dark': 'color/status/successInkDark',
  'color.status.warning.ink.light': 'color/status/warningInkLight',
  'color.status.warning.ink.dark': 'color/status/warningInkDark',
  'color.status.info.ink.light': 'color/status/infoInkLight',
  'color.status.info.ink.dark': 'color/status/infoInkDark',
  'color.status.error.ink.light': 'color/status/errorInkLight',
  'color.status.error.ink.dark': 'color/status/errorInkDark',
  'color.interactive.hoverInk.light': 'color/interactive/hoverInkLight',
  // Renamed Figma-side on 2026-07-28 (audit Block 5); the code-side rename was
  // deliberately deferred because --sc-color-text-on-inverse has live consumers.
  'color.text-on-inverse': 'color/text/onInverse',
  'color.surface-inverse': 'color/surface/inverse',
  // Figma's name kept (audit 5.6); the code path nests one level deeper.
  'motion.press.release.duration': 'motion/press/release-duration',
};

/** Text styles whose library name is not the default (keys: path after font.text.). */
export const TEXT_STYLE_NAMES = {
  // Figma splits body styles into regular/bold folders; code has sibling tokens.
  'body.dense': 'text/body/dense/regular',
  'body.default': 'text/body/default/regular',
  'body.lead': 'text/body/lead/regular',
  'body.denseBold': 'text/body/dense/bold',
  'body.defaultBold': 'text/body/default/bold',
  'body.leadBold': 'text/body/lead/bold',
  // Figma keeps the nav styles under body.
  'nav.header': 'text/body/nav/header',
  'nav.node': 'text/body/nav/node',
};

const kebab = (s) => s.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);

/** Library variable name for a token path (collection not included). */
export const variableName = (path) => VARIABLE_NAMES[path] ?? path.replaceAll('.', '/');

/** Library text style name for a font.text.* token path. */
export function textStyleName(path) {
  const rest = path.replace(/^font\.text\./, '');
  return TEXT_STYLE_NAMES[rest] ?? `text/${rest.split('.').map(kebab).join('/')}`;
}
