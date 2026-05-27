#!/usr/bin/env python3
"""
build-mark.py — Sprint 2 mark generator.

Emits all SVG lockups for the refined Shokunin mark and drives Chrome
headless to rasterize each to 1x/2x/3x PNG.

The mark is an 11-cross grid (4-3-4 rows, missing top-right of row 2).
The missing cell is the deliberate detail — focal absence, ma.
Refinement direction (Sprint 2 ADR): spacing intention. The rough's
64px column/row gap is tightened to 56px so the eleven crosses cluster
as a unit and the absent twelfth cell reads as designed negative space.

Cross geometry (carried from rough):
  bbox 32×32, stem 10px, arm extension 11px each side

Grid (refined spacing — 56px gap, 24px outer pad for primary):
  col centers x = 48, 104, 160, 216
  row centers y = 48, 104, 160
  missing: (216, 104)

Lockups:
  primary  · 256×200 viewBox · 28px horiz / vert padding · block
  compact  · 232×176 viewBox · 16px horiz / vert padding · block
  icon     · 256×256 square viewBox · centered grid · simplified (no rect)

Modes:
  light · for use on light surfaces · ink rect + cream crosses (block)
        · ink crosses (simplified)
  dark  · for use on dark surfaces · cream rect + ink crosses (block)
        · cream crosses (simplified)

Outputs: assets/logo/mark-{primary,compact,icon}-{light,dark}.{svg,png,@2x.png,@3x.png}
"""

from __future__ import annotations
import os
import subprocess
import sys
import shutil
import tempfile
from pathlib import Path

# ── colors (mirror semantic.json) ────────────────────────────────────────────
INK   = "#1A1815"  # warmGray.800 · ink
CREAM = "#F1EFEB"  # warmGray.50  · lightest cream

# ── grid cell centers · refined 56px spacing ─────────────────────────────────
COL_X_PRIMARY = [48, 104, 160, 216]
ROW_Y_PRIMARY = [48, 104, 160]

# (col, row) → cell present?  Missing: top-right of row 2 = col 4 row 2 (0-indexed col 3 row 1)
PRESENT_CELLS = [
    (0, 0), (1, 0), (2, 0), (3, 0),   # row 0 (top) — 4 crosses
    (0, 1), (1, 1), (2, 1),            # row 1 (middle) — 3 crosses, missing col 3
    (0, 2), (1, 2), (2, 2), (3, 2),    # row 2 (bottom) — 4 crosses
]


def cross_path(cx: int, cy: int) -> str:
    """Cross path centered at (cx, cy). Bbox 32×32, stem 10, arms 11."""
    return (
        f"M{cx+5} {cy-5} H{cx+16} V{cy+5} H{cx+5} V{cy+16} "
        f"H{cx-5} V{cy+5} H{cx-16} V{cy-5} H{cx-5} V{cy-16} "
        f"H{cx+5} V{cy-5} Z"
    )


def crosses_svg(cols: list[int], rows: list[int], fill: str) -> str:
    """Build the <path> set for present cells given col + row centers."""
    paths = []
    for (c, r) in PRESENT_CELLS:
        cx, cy = cols[c], rows[r]
        paths.append(f'  <path d="{cross_path(cx, cy)}" fill="{fill}" />')
    return "\n".join(paths)


def svg_block(width: int, height: int, cols: list[int], rows: list[int],
              rect_fill: str, cross_fill: str, title: str) -> str:
    """Block variant — rect fill behind crosses."""
    return (
f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="{title}">
  <title>{title}</title>
  <rect width="{width}" height="{height}" fill="{rect_fill}" />
{crosses_svg(cols, rows, cross_fill)}
</svg>
'''
    )


def svg_simplified(width: int, height: int, cols: list[int], rows: list[int],
                   cross_fill: str, title: str) -> str:
    """Simplified variant — crosses only, transparent."""
    return (
f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}" role="img" aria-label="{title}">
  <title>{title}</title>
{crosses_svg(cols, rows, cross_fill)}
</svg>
'''
    )


def shift(centers: list[int], delta: int) -> list[int]:
    return [c + delta for c in centers]


# ── lockup definitions ───────────────────────────────────────────────────────

def primary_cols_rows():
    # 256 × 200 viewBox · grid sits with 28 pad horiz, 28 pad vert
    # grid extent: x 32..232 (width 200) → padded into 256 width: offset = (256-200)/2 = 28
    # grid extent: y 32..176 (height 144) → padded into 200 height: offset = (200-144)/2 = 28
    # Note: original COL_X_PRIMARY starts at 48 = 16+32 → for 28 horiz pad, +12 shift
    cols = shift(COL_X_PRIMARY, 28 - 16)   # 48→60 → too much, recompute
    rows = shift(ROW_Y_PRIMARY, 28 - 16)
    return cols, rows


# Simpler: parameterize fresh per lockup.
def make_layout(view_w: int, view_h: int) -> tuple[list[int], list[int]]:
    """
    Given a viewBox width and height, place the 4-column × 3-row grid centered.
    Spacing is fixed at 56px between cell centers (the spacing-intention move).
    """
    n_cols, n_rows = 4, 3
    gap = 56
    cell_half = 16  # cross bbox 32, half = 16
    grid_w = (n_cols - 1) * gap + 32   # 3*56 + 32 = 200
    grid_h = (n_rows - 1) * gap + 32   # 2*56 + 32 = 144
    pad_x = (view_w - grid_w) / 2
    pad_y = (view_h - grid_h) / 2
    if pad_x < cell_half or pad_y < cell_half:
        raise ValueError(f"viewBox {view_w}×{view_h} too small for grid")
    cols = [int(pad_x + cell_half + i * gap) for i in range(n_cols)]
    rows = [int(pad_y + cell_half + i * gap) for i in range(n_rows)]
    return cols, rows


LOCKUPS = {
    "primary": {"w": 256, "h": 200, "variant": "block"},
    "compact": {"w": 232, "h": 176, "variant": "block"},
    "icon":    {"w": 256, "h": 256, "variant": "simplified"},
}

MODES = {
    "light": {"rect": INK,   "cross": CREAM},
    "dark":  {"rect": CREAM, "cross": INK},
}

# Simplified (icon) inverts the cross color per ground:
# light icon: ink crosses (for placing on light surfaces)
# dark icon: cream crosses (for placing on dark surfaces)
SIMPLIFIED_CROSS = {"light": INK, "dark": CREAM}


def build_svgs(out_dir: Path) -> dict[str, Path]:
    """Emit all SVG files. Return {name: path}."""
    out_dir.mkdir(parents=True, exist_ok=True)
    written: dict[str, Path] = {}
    for lockup, spec in LOCKUPS.items():
        cols, rows = make_layout(spec["w"], spec["h"])
        for mode in ("light", "dark"):
            name = f"mark-{lockup}-{mode}"
            title = f"Shokunin Crafthouse · {lockup} mark · {mode} mode"
            if spec["variant"] == "block":
                m = MODES[mode]
                svg = svg_block(spec["w"], spec["h"], cols, rows,
                                rect_fill=m["rect"], cross_fill=m["cross"],
                                title=title)
            else:
                svg = svg_simplified(spec["w"], spec["h"], cols, rows,
                                     cross_fill=SIMPLIFIED_CROSS[mode],
                                     title=title)
            path = out_dir / f"{name}.svg"
            path.write_text(svg)
            written[name] = path
            print(f"  svg → {path.relative_to(out_dir.parent.parent)}")
    return written


# ── PNG rasterization via Chrome headless ────────────────────────────────────

CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"


def html_wrapper(svg_abs_path: Path, width_px: int, height_px: int,
                 bg_alpha: bool = True) -> str:
    bg = "transparent" if bg_alpha else "white"
    return (
f'''<!DOCTYPE html><html><head><meta charset="utf-8"><style>
html, body {{ margin: 0; padding: 0; background: {bg}; width: {width_px}px; height: {height_px}px; overflow: hidden; }}
img {{ display: block; width: {width_px}px; height: {height_px}px; }}
</style></head><body><img src="file://{svg_abs_path}" /></body></html>
'''
    )


def rasterize(svg_path: Path, out_png: Path, width: int, height: int) -> None:
    """Render svg → png at exact width × height via Chrome headless."""
    with tempfile.TemporaryDirectory() as td:
        html_path = Path(td) / "wrap.html"
        html_path.write_text(html_wrapper(svg_path.resolve(), width, height))
        screenshot_path = Path(td) / "shot.png"
        cmd = [
            CHROME,
            "--headless=new",
            "--disable-gpu",
            "--no-sandbox",
            "--hide-scrollbars",
            "--force-device-scale-factor=1",
            "--default-background-color=00000000",
            f"--window-size={width},{height}",
            f"--screenshot={screenshot_path}",
            f"file://{html_path.resolve()}",
        ]
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=60)
        if not screenshot_path.exists():
            raise RuntimeError(
                f"Chrome failed to render {svg_path}:\n"
                f"stdout: {result.stdout}\nstderr: {result.stderr}"
            )
        shutil.copy(screenshot_path, out_png)


def build_pngs(svgs: dict[str, Path]) -> None:
    """For each SVG, emit @1x / @2x / @3x PNG."""
    for name, svg_path in svgs.items():
        # Read viewBox dimensions
        text = svg_path.read_text()
        # Crude width/height extraction from the <svg> attributes
        import re
        w = int(re.search(r'\bwidth="(\d+)"', text).group(1))
        h = int(re.search(r'\bheight="(\d+)"', text).group(1))
        for scale, suffix in [(1, ""), (2, "@2x"), (3, "@3x")]:
            out_png = svg_path.with_name(f"{name}{suffix}.png")
            rasterize(svg_path, out_png, w * scale, h * scale)
            print(f"  png → {out_png.name} ({w*scale}×{h*scale})")


# ── main ─────────────────────────────────────────────────────────────────────

if __name__ == "__main__":
    repo_root = Path(__file__).resolve().parent.parent
    out_dir = repo_root / "assets" / "logo"
    print(f"Building marks into {out_dir.relative_to(repo_root)} …")
    svgs = build_svgs(out_dir)
    print(f"Rasterizing PNGs via Chrome headless …")
    if not Path(CHROME).exists():
        print(f"  ! Chrome not found at {CHROME} — skipping PNG generation")
        sys.exit(1)
    build_pngs(svgs)
    print("Done.")
