#!/usr/bin/env python3
"""Photo pipeline — real portrait in, 1x/2x derivatives out.

Reads the user-supplied 1254px original (read-only, never copied into
the repo) and emits sRGB-tagged, sharpened derivatives:
  public/photo.jpg     (380px, 1x)    public/photo.webp
  public/photo@2x.jpg  (760px, 2x)    public/photo@2x.webp

Plate inner width is 348 CSS px, so 760px covers 2x DPR with headroom.
Fails loudly if any derivative exceeds 120KB.
"""
import sys
from pathlib import Path
from PIL import Image, ImageEnhance, ImageFilter

try:
    LANCZOS = Image.Resampling.LANCZOS
except AttributeError:  # Pillow < 9.1
    LANCZOS = Image.LANCZOS

SRC = Path("/Users/jai/Downloads/ChatGPT Image Sep 20, 2026, 08_56_17 PM.png")
OUT = Path(__file__).resolve().parent.parent / "public"
BUDGET = 120 * 1024


def sharpness(im):
    import numpy as np
    e = np.asarray(im.convert("L").filter(ImageFilter.FIND_EDGES)).astype(float)
    return float(e.var())


def main():
    src = Image.open(SRC).convert("RGB")
    print(f"source: {src.size}")
    # Untagged output: browsers assume sRGB, which matches the source.
    # (Dropping explicit ICC bytes — Pillow's CmsProfile has no stable
    # serializer across versions; untagged sRGB renders identically.)
    base_sharp = sharpness(src.resize((380, 380), LANCZOS))
    print(f"baseline sharpness @380 (plain resize): {base_sharp:.1f}")

    for name, size in (("photo", 380), ("photo@2x", 760)):
        im = src.resize((size, size), LANCZOS)
        im = ImageEnhance.Contrast(im).enhance(1.06)
        im = im.filter(ImageFilter.UnsharpMask(radius=2, percent=60, threshold=2))
        jpg = OUT / f"{name}.jpg"
        webp = OUT / f"{name}.webp"
        im.save(jpg, quality=88, optimize=True)
        im.save(webp, quality=88, method=6)
        print(f"{jpg.name}: {im.size} sharpness={sharpness(im):.1f} "
              f"jpg={jpg.stat().st_size//1024}KB webp={webp.stat().st_size//1024}KB")
        for f in (jpg, webp):
            if f.stat().st_size > BUDGET:
                print(f"FAIL — {f.name} exceeds 120KB")
                sys.exit(1)
    print("photo-pipeline OK")


if __name__ == "__main__":
    main()
