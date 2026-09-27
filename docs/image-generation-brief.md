# FW.VISION — Image Generation Brief

> Prompts for AI image generation to produce post covers across the site.
> Covers must read as intentional brand art for a printed design journal — not stock collage, not neon AI defaults, and not thin-vector diagrams on black.

## Cover style (locked — revised 2026-09-27)

**Direction:** Editorial photography as punctuation (Constellation / Eindhoven Design District reference). Atmospheric stills of infrastructure, architecture, paper, and horizon — cropped tightly, used like a design journal uses a single photograph on a spread.

**Why the previous system was retired:** Dark slate canvases with thin burgundy vector glyphs (grids, bars, topography lines) read as generic “AI foresight diagrams.” They fail the brand test: remove the wordmark and the cards could belong to any tech newsletter.

**Mood:** Institutional foresight on white paper. Quiet, precise, material. Photography carries atmosphere; typography on the page carries the argument.

**Palette grade:**
- Prefer light paper, mist, concrete, steel, and cool daylight
- Burgundy (`#7A1F2B` / OKLCH hue 27.20) only as a scarce accent in the frame (a mark, edge, filament) — never a full neon field
- Avoid near-black full-bleed backgrounds except for rare night/industrial shots

**Composition:** One clear subject; ample negative space; legible at thumbnail (~200×150) and hero (`BlogCard7` aspect-16/11).

### Hard bans

- Thin-line “data viz” diagrams on solid dark navy/black
- Photoreal people, faces, handshakes, office stock
- Neon cyberpunk glow, purple gradients, glossy 3D CGI
- Illegible micro-text, logos, or wordmarks inside the art (exception: default OG card)

### Master prompt (paste before every subject)

```
Editorial photograph for FW.VISION strategic foresight, printed design journal aesthetic. Atmospheric institutional still life or architecture/infrastructure detail. Soft daylight or paper-white negative space, restrained burgundy accent only if needed, no people, no stock handshake photos, no neon cyberpunk, no thin-line diagrams on black, no text, no logos. Quiet, precise, material. Works as a magazine cover thumbnail on a white webpage.
```

### Aspect ratios & output

| Use | Ratio | Size | Format | Path |
|-----|-------|------|--------|------|
| Blog / signal cards | 12:8 (≈3:2) | 1600×1200 | WebP/PNG/JPEG | `src/images/blog/covers/` |
| Hero (`BlogCard7`) | 16:11 | 1600×1100 | WebP/JPEG | `src/images/blog/covers/` |
| OG / social | 1.91:1 | 1200×630 | JPG | `public/og-image.jpg` |
| Author avatar | 1:1 | 800×800 | JPEG | `src/images/authors/` |

---

## Subject motifs (photography, not glyphs)

| Post / signal | Photographic motif |
|---------------|-------------------|
| Patient capital / featured | Long concrete corridor or horizon road receding; patient distance |
| Founder-led thesis | Single architectural node / atrium intersection suggesting orchestration |
| Sovereign innovation | Power infrastructure or computing hall detail, Canadian-cold light, non-literal |
| 50-year return | Weathered timeline material: stacked archival boxes, or a long pier into mist |
| Knowledge as IP | Open folio / annotated papers / library stacks as texture (no readable text) |
| Four conditions | Four structural bays / columns in a building facade |
| Thinking and actualizing | Split still: blank paper / drafting table vs finished built detail |
| CIS signals | Infrastructure details matching each signal (runway lines as real tarmac, energy transmission, approval stamp texture, etc.) |

---

## Default OG / Social Card (1200×630)

Dark slate or paper ground. FW.VISION wordmark centred (League Spartan). Thin burgundy accent line beneath. Typographic only — exception to the no-wordmark rule.

---

## Generation notes

- Prefer real photographic texture over flat illustration
- Test at ~200×150 — motif must remain readable
- Prefer images that sit on white page backgrounds (homepage cards)
- Naming: `src/images/blog/covers/{slug}.jpg` preferred for photo covers; keep `.png` only if the asset is already PNG
- Archive retired flat-vector covers under `src/images/_quarantine/covers-flat-vector/` when replaced
