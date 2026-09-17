# FW.VISION — Design Specification

> Actionable design reference for coding agents. For full brand positioning, voice, and strategy, see:
> `FCWANG-Perceptiosphere/04_Execute_Efforts/FW.VISION/.brand/context.md`

---

## Color System

All colors defined in `src/styles/global.css` using OKLCH color space.

### Accent — Burgundy Red (hue 27.20)

Primary brand color. Used for CTAs, links, highlights, active states, and the brand identity.

| Token | Value | Use |
|-------|-------|-----|
| `accent-50` | `oklch(0.971 0.015 27.20)` | Subtle background tints |
| `accent-100` | `oklch(0.935 0.035 27.20)` | Light hover backgrounds |
| `accent-200` | `oklch(0.860 0.070 27.20)` | Borders, dividers (light) |
| `accent-300` | `oklch(0.750 0.110 27.20)` | Icons, secondary elements |
| `accent-400` | `oklch(0.620 0.145 27.20)` | Hover text |
| `accent-500` | `oklch(0.500 0.165 27.20)` | **Primary accent** — buttons, links |
| `accent-600` | `oklch(0.420 0.150 27.20)` | Button hover, active links |
| `accent-700` | `oklch(0.350 0.131 27.20)` | Strong emphasis text |
| `accent-800` | `oklch(0.290 0.110 27.20)` | Dark accent backgrounds |
| `accent-900` | `oklch(0.230 0.085 27.20)` | Very dark accent |
| `accent-950` | `oklch(0.180 0.065 27.20)` | Near-black accent |

> **Shared with findcongwang.com** — this is the brand continuity signal between personal and firm.

### Base — Neutral Slate

Used for text, backgrounds, borders, and all neutral UI elements.

| Token | Role |
|-------|------|
| `base-50` | Page background (light mode) |
| `base-100` – `base-200` | Card backgrounds, subtle separators |
| `base-300` – `base-400` | Borders, disabled states |
| `base-500` – `base-600` | Secondary text, captions, metadata |
| `base-700` – `base-800` | Primary body text |
| `base-900` – `base-950` | Headings, strong text, dark backgrounds (footer) |

### Usage Rules

- **Never use raw hex colors** — always reference the token system
- **Accent for action** — anything clickable or attention-grabbing
- **Base for content** — all reading/navigation surfaces
- **Dark mode**: Not yet implemented; when added, invert base scale and lighten accent

---

## Typography

Defined in `src/styles/global.css` under `@theme`.

| CSS Variable | Font | Role | Tailwind Class |
|-------------|------|------|----------------|
| `--font-sans` | Inter Display | Body text, UI, navigation | `font-sans` (default) |
| `--font-display` | STIX Two Text | Article headings, editorial titles | `font-display` |
| `--font-brand` | League Spartan | Brand wordmark "FW.VISION" only | `font-brand` |

### Hierarchy

| Element | Font | Weight | Class Example |
|---------|------|--------|---------------|
| Site name / Logo | League Spartan | Bold | `font-brand font-bold tracking-tight` |
| Article H1 | STIX Two Text | Normal | `font-display text-3xl` |
| Section headings | STIX Two Text | Normal | `font-display text-xl` |
| Body text | Inter Display | Normal | (default, no class needed) |
| Navigation | Inter Display | Medium | `font-medium text-sm` |
| Metadata / dates | Inter Display | Normal | `text-xs text-base-600` |
| Code / data | Geist Mono (not yet loaded) | Normal | `font-mono` |

### Font Loading (TODO)

League Spartan is referenced but **not yet loaded** in the `<head>`. To fix:
- Add Google Fonts import to `src/layouts/BaseLayout.astro` `<head>`:
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@700&display=swap" rel="stylesheet">
  ```
- Or self-host the WOFF2 in `public/fonts/`

---

## Component Conventions

### Layout

- **Wrapper** component controls max-width containers
  - `variant="standard"` — standard page width with side padding
  - `variant="paddingless"` — full-bleed sections
  - `variant="prose"` — narrow reading width for articles

### Text Component

Standardized typography via `<Text>` component:
- `variant="display2XL"` — Hero headlines
- `variant="displayMD"` — Section headings
- `variant="textBase"` — Body paragraphs
- `variant="textSM"` — Smaller body text
- `variant="textXS"` — Captions, metadata, nav labels

### Spacing

- Section padding: `py-12` (mobile) / `py-24` (desktop via `lg:`)
- Component gaps: `gap-8` (standard) / `gap-12` (major sections)
- Content separation: Use the accent decorative line pattern from Phanatik:
  ```
  relative before:absolute after:absolute before:bg-base-950 after:bg-base-950/10 
  before:top-0 before:left-0 before:h-px before:w-6 after:top-0 after:right-0 
  after:left-8 after:h-px pt-4
  ```

### Content Flags

Homepage and editorial rails use flags + `contentType` together:

- `isFeatured` → Featured hero (`BlogHero1` / `BlogCard4`)
- `isTopStory` → Latest illustration grid (excludes featured)
- `contentType: "signal"` + `editorialStatus: "published"` → Nav ticker + Signals briefs band (`/signals`)
- `tags: innovation` → Sticky Innovation rail (illustration lead + text list)
- `isBreaking` → Reserved for urgent alerts (optional Breaking section)
- `isBrief` → Optional short-form hint; homepage Signals prefer `contentType`
- `isLocked` → Premium content marker (future)

### Imagery

- **Cover style:** Futuristic flat editorial illustration — not photoreal stock or photoreal AI. See [`docs/image-generation-brief.md`](../image-generation-brief.md) for master prompt, palette, and bans.
- Covers live under `src/images/blog/covers/` (CIS + commentary); legacy topical photos may remain on older analyses.
- Use Astro's `<Image>` component for optimization
- Default loading: `loading="lazy"` / `decoding="async"` (eager on above-the-fold cards)
- Blog / signal cards: `aspect-12/8`; hero: `aspect-16/9`
- Author avatars: `aspect-square rounded-full` (prefer real photography)

---

## Category Domain Colors (Future)

For tag-based category differentiation on articles:

| Category | Color Family | Suggested Tailwind |
|----------|-------------|-------------------|
| Technology & Innovation | Red/Burgundy (accent) | `text-accent-600` |
| Futures & Scenarios | Purple/Violet | Custom `--color-domain-futures` |
| Sustainability & ESG | Teal/Green | Custom `--color-domain-sustainability` |
| Health & Biotech | Blue/Cyan | Custom `--color-domain-health` |
| Education & Workforce | Orange/Amber | Custom `--color-domain-education` |
| Policy & Governance | Slate/Steel | Custom `--color-domain-policy` |
| Economics & Finance | Gold/Amber-dark | Custom `--color-domain-economics` |

These are not yet implemented in CSS — add as needed when building category views.

---

## Animation & Interaction

- **Ticker**: `marquee 32s linear infinite` — Signals Ticker scrolls continuously
- **Hover**: Standard `duration-300` transitions on color/opacity
- **Menu**: MegaMenu expands with `max-height` + `opacity` transition (0.5s ease-out)
- **Images**: No grayscale hover effect (that's Rosewood/Arcadia, not FW.VISION)

---

## File Reference

| What | Where |
|------|-------|
| Color/font tokens | `src/styles/global.css` |
| Logo component | `src/components/assets/Logo.astro` |
| Navigation | `src/components/global/Navigation.astro` |
| Mega Menu | `src/components/global/MegaMenu.astro` |
| Footer | `src/components/global/Footer.astro` |
| Base layout | `src/layouts/BaseLayout.astro` |
| Content schemas | `src/content.config.ts` |
| Cover generation brief | `docs/image-generation-brief.md` |
| Flat covers | `src/images/blog/covers/` |
| Logos (source) | `src/images/brand/logo.png`, `logo-square.png` |
| Full brand bible | `FCWANG-Perceptiosphere/04_Execute_Efforts/FW.VISION/.brand/context.md` |
