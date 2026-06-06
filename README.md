# FW.VISION — Strategic Foresight Website

> Founder-led think tank website for FW.VISION. Built with Astro 6 + Tailwind CSS 4, based on the Phanatik template from Lexington Themes.

## Quick Start

```bash
npm install
npm run dev       # Start dev server at localhost:4321
npm run build     # Build for production
npm run preview   # Preview production build
```

## Tech Stack

- **Framework**: Astro 6.3 (static-first, islands architecture)
- **Styling**: Tailwind CSS 4 (with typography, forms plugins)
- **Content**: MDX-powered content collections
- **Template Base**: Phanatik (Lexington Themes)
- **Fonts**: Inter Display (body), STIX Two Text (headings), League Spartan (brand)
- **Color Theme**: Burgundy red accent on neutral slate base (OKLCH color space)

## Content Collections

| Collection | Path | Purpose |
|-----------|------|---------|
| `posts` | `src/content/posts/` | Research articles and foresight analysis |
| `podcast` | `src/content/podcast/` | Futures Conversations episodes |
| `insights` | `src/content/insights/` | Short-form analysis (planned) |
| `scenarios` | `src/content/scenarios/` | Futures scenarios and design fiction |
| `lexicon` | `src/content/lexicon/` | Proprietary frameworks and concepts |
| `tools` | `src/content/tools/` | Interactive dataviz metadata |
| `challenges` | `src/content/challenges/` | Innovation challenge programs |
| `contributors` | `src/content/contributors/` | Founder + guest researcher profiles |
| `authors` | `src/content/authors/` | Legacy author profiles |
| `legal` | `src/content/legal/` | Legal pages |

## Site Architecture

```
/                   → Homepage (Signals Ticker + Hero + Breaking + Categories)
/blog/              → Insights listing (filterable by category)
/blog/posts/[slug]  → Individual article
/blog/tags/[tag]    → Category filtered view
/podcast/           → Futures Conversations
/scenarios/         → Design fiction & futures scenarios
/lexicon/           → Frameworks & concepts glossary
/tools/             → Interactive dataviz tools
/challenges/        → Innovation challenge programs
/authors/           → Contributors
/about              → Firm story & methodology
/subscribe          → Newsletter & membership
/contact            → Consulting & engagement inquiries
```

## Brand

- **Domain**: fw.vision
- **Logo**: League Spartan custom mark (see `src/images/brand/`)
- **Accent**: Burgundy red (`oklch(32.09% 0.131 27.20)` light / `oklch(66.09% 0.195 37.35)` dark)
- **Brand Context**: See `../../../FCWANG-Perceptiosphere/04_Execute_Efforts/FW.VISION/.brand/context.md`

## Related Repos

- `fw-vision-dataviz/` — Interactive data visualization tools (sibling repo)
- `FCWANG-Perceptiosphere/` — Knowledge vault with brand contexts and effort plans
