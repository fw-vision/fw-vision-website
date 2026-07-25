# FW.VISION — Image Generation Brief

> Prompts for AI image generation (Midjourney, DALL-E, or similar) to replace placeholder/missing images across the site.

## Brand Visual Language

- **Colour palette:** Burgundy red accent (OKLCH hue 27.20) + neutral slate base
- **Mood:** Institutional, architectural, restrained, precise
- **Style:** Abstract geometric, clean lines, minimal. No photorealism. No people.
- **Aspect ratios:** 12:8 (blog cards), 16:11 (hero cards), 1:1 (OG/social square)

---

## Required Images

### 1. Default OG / Social Card (1200x630)

**Purpose:** Default social sharing image when no post-specific image exists.

**Prompt direction:** Dark slate background (#1a1a2e). FW.VISION wordmark in League Spartan Bold centred. Subtle burgundy accent line beneath. Clean, typographic, institutional. No illustrations.

---

### 2. Blog Post: "The Founder-Led Thesis"

**Prompt direction:** Abstract architectural diagram. Single small bright node (burgundy) connected to a constellation of smaller nodes (varying opacity). Clean dark background. Suggests a small core orchestrating a larger network. Geometric, minimal, no text.

---

### 3. Blog Post: "Sovereign Innovation: Canada's Position"

**Prompt direction:** Abstract topographic/geographic lines suggesting northern landscape. Subtle circuit-like overlay. Burgundy accent running through the composition like an energy line. Dark slate tones. Aerial/cartographic feel without being literal.

---

### 4. Blog Post: "The 50-Year Return"

**Prompt direction:** Long horizontal timeline visualised as a single precise line stretching across a dark field. Near end: dense cluster of marks (quarterly). Far end: sparse, deliberate marks decades apart. The visual tension between density and space. Burgundy accent on the far-horizon marker.

---

### 5. Blog Post: "Knowledge as the Next IP"

**Prompt direction:** Abstract knowledge graph. Nodes of varying size connected by thin lines. Some nodes glow (burgundy) indicating structured/curated knowledge. Others are dim/grey (raw data). Layered depth suggesting organised context emerging from noise. Dark background.

---

### 6. About Page Hero (optional, if design needs it)

**Prompt direction:** Abstract architectural blueprint. Clean lines suggesting institutional structure. Four horizontal bands (evoking CITE layers) in varying burgundy-to-slate gradients. Suggests structural clarity and layered governance.

---

### 7. Author Avatar Placeholder

**Purpose:** If no real photo of Francis Wang is available for the author profile.

**Note:** Prefer a real photograph. If generating: professional headshot style, warm lighting, dark background, clean collar/jacket. NOT a cartoon or illustration.

---

## Image Specifications

| Use | Size | Format | Notes |
|-----|------|--------|-------|
| Blog hero (card) | 1600x1200 | WebP/PNG | Astro optimises automatically |
| OG image | 1200x630 | PNG | Placed in `public/og-image.jpg` |
| Author avatar | 800x800 | JPEG | Square, `src/images/authors/` |

---

## Generation Notes

- All images should work without text overlay (titles are rendered by the site)
- Test at small sizes (200x150 thumbnail) — detail should remain legible at card scale
- Prefer images that read well in both light (white bg) and dark contexts
- No stock photo aesthetics (no handshakes, no offices, no screens, no charts)
