# FW.VISION — Image Generation Brief

> Prompts for AI image generation (or SVG illustration) to produce post covers across the site.
> Covers must read as intentional brand art — never photoreal stock or photoreal AI photos.

## Cover style (locked)

**Style:** Futuristic flat editorial illustration. Vector-like shapes, limited depth, hard edges or soft geometric planes — not soft photoreal lighting.

**Mood:** Institutional foresight — restrained, precise, architectural. Diagrams, horizons, infrastructure glyphs, orbital/grid motifs, abstract Canada/governance symbols — still **non-literal**.

**Palette:**
- Burgundy accent (approx `#7A1F2B` / OKLCH hue 27.20)
- Cool slate neutrals (`#1a1a2e`, `#2a2a3a`, `#94a3b8`)
- Optional one cool secondary for depth (muted steel blue) — never purple-glow AI defaults

**Composition:** One clear focal motif; ample negative space; legible at thumbnail (`BlogCard1` ~1/3 width) and hero (`BlogCard4`).

### Hard bans

- Photoreal people, hands, faces
- Offices, handshakes, skylines-as-photos
- Stock charts, glossy 3D CGI, neon cyberpunk glow
- Illegible micro-text, logos, or wordmarks inside the art

### Master prompt (paste before every subject)

```
Flat futuristic editorial illustration for FW.VISION strategic foresight. Vector-like shapes, limited color palette of burgundy red and cool slate neutrals, clean geometric planes, restrained institutional mood, no photorealism, no people, no stock photo aesthetics, no text, no logos. Works as a magazine cover thumbnail.
```

### Aspect ratios & output

| Use | Ratio | Size | Format | Path |
|-----|-------|------|--------|------|
| Blog / signal cards | 12:8 (≈3:2) | 1600×1200 | WebP/PNG | `src/images/blog/covers/` |
| Hero cards | 16:9 | 1600×900 | WebP/PNG | `src/images/blog/covers/` |
| OG / social | 1.91:1 | 1200×630 | PNG | `public/og-image.jpg` |
| Author avatar | 1:1 | 800×800 | JPEG | `src/images/authors/` |

---

## Required images

### 1. Default OG / Social Card (1200×630)

**Purpose:** Default social sharing image when no post-specific image exists.

**Prompt direction:** Dark slate background (#1a1a2e). FW.VISION wordmark in League Spartan Bold centred. Subtle burgundy accent line beneath. Clean, typographic, institutional. (Exception: wordmark allowed only on OG default.)

---

### 2–6. Analysis covers (existing subjects)

Use master prompt + subject:

| Post | Motif |
|------|--------|
| The Founder-Led Thesis | Small burgundy node connected to a constellation of smaller nodes — core orchestrating a network |
| Sovereign Innovation: Canada's Position | Abstract topographic lines + circuit overlay; burgundy energy line; cartographic without being literal |
| The 50-Year Return | Single precise timeline; dense marks near, sparse far; burgundy on far-horizon marker |
| Knowledge as the Next IP | Knowledge graph; burgundy nodes = curated knowledge, dim nodes = raw data |
| About / CITE bands (optional) | Four horizontal bands in burgundy-to-slate gradients — layered governance |

---

### 7. Commentary: Patient Capital (`cis-patient-capital`)

**Motif:** Long horizontal capital flow as layered geometric bands stretching into a distant horizon marker (burgundy). Suggests patient time, not money stacks.

---

### 8–17. CIS Signals

| Signal | Motif |
|--------|--------|
| Summit direction | Compass / radial rays from a single burgundy origin on slate field |
| Meeting transparency | Open geometric lattice / overlapping transparent planes |
| Trusted partnership | Two interlocking geometric frames sharing a burgundy hinge |
| US reliance | Twin vertical columns with asymmetric burgundy bridge between them |
| Comparative advantage | Layered resource strata (abstract bands) with one highlighted vein |
| Energy superpower | Abstract energy arc / horizon power line in burgundy on slate |
| Defence industrial strategy | Shield-like geometric plane + industrial grid overlay (non-military literal) |
| Airport governance | Abstract runway / converging perspective lines into a governance node |
| Project approvals | Stacked approval gates as flat rectangles with one burgundy unlocked gate |
| RBC investor interest | Rising geometric steps / capital staircase toward a burgundy apex |

---

### Author avatar placeholder

Prefer a real photograph. If generating: professional headshot style — **not** the flat cover system.

---

## Generation notes

- All covers work without text overlay (titles are rendered by the site)
- Test at ~200×150 thumbnail — motif must remain legible at card scale
- Prefer images that read on white page backgrounds (homepage cards)
- No stock photo aesthetics
- Prefer `src/images/blog/covers/{slug}.png` naming aligned to post id
