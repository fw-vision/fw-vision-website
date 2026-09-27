# Agents — FW.VISION Astro Website

> Agent instructions for working in this repository.

## Project Context

This is the **FW.VISION** strategic foresight think tank website. It publishes research, frameworks, futures scenarios, and podcast content. The founder is Francis Wang.

- **Stack**: Astro 6 + Tailwind CSS 4 + MDX, developed with Bun (`bun run dev` on `0.0.0.0`)
- **Template base**: Phanatik (Lexington Themes) — adapted
- **Design spec**: `docs/brand/DESIGN.md` ← START HERE for colors, fonts, component rules
- **Brand context** (canonical): `../../../04_Execute/FW.VISION/README.md`, `../../../04_Execute/FW.VISION/indicators-strategy/strategy.md`, and `../../../04_Execute/FW.VISION/brand/voice.md`
- **Workspace manifest**: `../../../04_Execute/FW.VISION/workspace/projects.yaml`
- **Related repositories**: sibling worktrees `../content-backoffice` and `../fw-vision-dataviz`

## Architecture Notes

### Content Flow
- Content is authored as Markdown/MDX in `src/content/{collection}/`
- Collections are defined in `src/content.config.ts`
- Each collection has its own page route in `src/pages/`
- Layouts live in `src/layouts/`, components in `src/components/`

### Key Directories
```
src/
├── components/
│   ├── global/        → Navigation, MegaMenu, Footer, Search, NavTicker
│   ├── fundations/    → Design system primitives (Text, Button, Wrapper, Icons)
│   ├── blog/          → Blog cards (7 variants), landing page sections
│   ├── podcast/       → Podcast player, episode cards
│   ├── cta/           → Call-to-action sections
│   ├── pricing/       → Subscription tier cards
│   ├── advert/        → Promotional banner components
│   └── assets/        → Logo, brand assets
├── content/           → All content collections (see README.md)
├── layouts/           → Page layouts (BaseLayout, BlogLayout, PodcastLayout, etc.)
├── pages/             → Route pages
├── styles/            → global.css (Tailwind config, theme, custom utilities)
└── images/
    └── brand/         → Logo files (logo.png, logo-square.png)
```

### Design Tokens
- **Colors**: Defined in `src/styles/global.css` under `@theme`
  - Accent: Burgundy red scale (OKLCH hue 27.20)
  - Base: Neutral slate scale
- **Fonts**: `--font-sans` (Inter Display), `--font-display` (STIX Two Text), `--font-brand` (League Spartan)
- **Animations**: Marquee keyframes for ticker component

### Component Conventions
- Components use Astro's `.astro` format (HTML-first, zero JS by default)
- Props are typed in the frontmatter `---` block
- Tailwind classes are applied inline (no separate CSS modules)
- The `Text` component standardizes typography variants (textXS, textSM, textBase, etc.)
- The `Wrapper` component handles max-width containers

## Development and testing

- Interactive development uses `bun run dev`, binding Astro to `0.0.0.0` for trusted Tailnet access.
- Reach this dev box at `http://100.71.170.90:4321` or `http://fcwang-elitemini-series.tail0f7891.ts.net:4321`.
- The persistent dev server is user-managed and is not automated verification.
- Run `bun run check`, `bun run test`, and `bun run build` before handoff (or `bun run validate`).
- Private `@fw-vision/*` packages require `GITHUB_TOKEN_FWVISION` (see `.npmrc`).
- Preserve firewall controls and never enable public Funnel access without explicit approval.

## Working Guidelines

1. **Keep the signals ticker** — it's a core brand element (futures wire service feel)
2. **Respect the color system** — use `accent-*` for brand highlights, `base-*` for neutrals
3. **Use `font-brand`** for the FW.VISION wordmark, `font-display` for article headings
4. **Content flags matter** — `isBreaking`, `isTopStory`, `isFeatured`, `isBrief` control homepage layout
5. **No JavaScript unless necessary** — Astro islands pattern; JS only for interactivity
6. **League Spartan** is loaded via `Fonts.astro` (Google Fonts)

## Future Work

- [x] Add League Spartan font loading in BaseLayout head
- [ ] Migrate content schema from `posts` to `insights` collection
- [ ] Create `ScenarioLayout.astro` and `LexiconLayout.astro`
- [ ] Integrate dataviz embeds from `fw-vision-dataviz`
- [ ] Replace demo content with real FW.VISION articles
- [ ] Add category domain colors to tag system
- [ ] Configure RSS feed for insights
- [x] Newsletter: Listmonk Signals form on `/subscribe` (`docs/integrations/listmonk.md`); SMTP confirmation mail still Principal/Admin
- [ ] Dark mode support
