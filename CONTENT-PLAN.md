# fw.vision — Content Gathering Plan

> The FW.VISION think-tank site has a complete visual foundation (Lexington/Phanatik base, burgundy accent, League Spartan / STIX Two Text / Inter Display / Geist Mono typography, a Futures Signals Ticker). This pass enriched it with the recent strategic IP and wired previously-empty pages to their collections. The gaps below are what remains to gather before launch.

**Launch readiness plan (2026-09-27):** [`docs/plans/2026-09-27-fw-vision-launch-readiness.md`](docs/plans/2026-09-27-fw-vision-launch-readiness.md)  
**Listmonk newsletter:** [`docs/integrations/listmonk.md`](docs/integrations/listmonk.md) · checklist [`docs/plans/2026-09-27-ghost-newsletter-platform.md`](docs/plans/2026-09-27-ghost-newsletter-platform.md)

Status legend: [ ] to gather · [~] draft exists · [x] done

---

## 1. What this pass added

- **Homepage**: news- and signal-oriented editorial wire (featured, latest, signals, sovereignty, categories). Framework showcase removed from the front page; lexicon holds CITAble Business research.
- **About**: expanded the frameworks list with the new index IP (CBI, CVI, Agentic Gradient, SRI, Active Futuring); added a "Thinking and Actualizing" section expressing the FW.VISION / operational-partner relationship.
- **Lexicon (4 new)**: CITAble Business Index, Cognitive Vitality Index, Agentic Gradient, Societal Resilience Index, Active Futuring.
- **Posts (2 new strategic)**: "The Four Conditions of a Future-Proof Venture", "Thinking and Actualizing".
- **Scenarios (1)**: "Canada 2075: The Sovereign Innovation Century" (backcast).
- **Tools**: CITAble Business Explorer (beta); Strategy Map / CITEMap listing retired.
- **Wired** the scenarios and tools index pages to read their collections (they were static "coming soon" placeholders that never surfaced content).

### Ops and imagery pass (2026-09-27)

- [x] Engage location corrected to Toronto / Greater Toronto Area.
- [x] Duplicate nav Subscribe removed; content links (Insights, Signals, Lexicon, Storylines) added; categories row no longer truncates.
- [x] Dead newsletter form and membership URLs removed or retargeted.
- [x] Homepage mission / frameworks / think-actualize bands differentiated to Phanatik patterns (sticky rail, soft cards, dark island).
- [x] Cover system pivoted to editorial photography; flat-vector covers quarantined for homepage posts. Remaining CIS PNGs to replace as republished.
- [x] Default `og:image` at `public/og-image.jpg`.
- [x] Phanatik stock quarantined under `src/images/_quarantine/`.

---

## 2. Structural gaps (template)- [ ] **Detail routes for scenarios, tools, podcast.** Lexicon, blog, challenges, and legal have `[...slug].astro` routes; scenarios/tools/podcast only have `index.astro` listings. Seeded entries show in listings but have no detail page. Add `[...slug].astro` mirroring the lexicon pattern.
- [ ] **Insights collection.** The schema maps the primary article collection to `./src/content/posts` (folder named `insights` in the vault, `posts` in code). Confirm whether a distinct `/insights` route is wanted or whether blog/posts covers it.
- [ ] **Podcast (0 entries)** and **Contributors (only Francis Wang)**: seed when content exists.

---

## 3. Content to write

### Insights / posts (currently 6: 4 original + 2 new)
- [~] Volume is still thin for a magazine layout. Target 10-15 posts so the homepage hero, top-stories, aside, and briefs all populate richly. Candidates: one insight per framework (CVI, Agentic Gradient, SRI), the gap-analysis piece, sovereign-compute and food-sovereignty trajectory pieces.
- [ ] Cross-post candidates from findcongwang.com (lexicon syndication is supported via `canonicalUrl`).

### Scenarios
- [ ] More backcasts/design-fictions per trajectory (food sovereignty, sovereign compute, future of work). Each should run through the APPETITE model.

### Podcast
- [ ] "Futures Conversations" series: even a coming-soon episode 0 with real cover art beats an empty page.

> **Podcast strategy (held in reserve).** We are very unlikely to run full-production podcasts. The realistic model: a weekly touchpoint (solo reflection or interview) discussing trending topics around specific futures, transcribed and cleaned, then rendered as an AI-narrated episode voice-trained on the speakers. Low production, authentic, "AI in the right place." The editorial spine is the FW.VISION Futures Register (`04_Execute/FW.VISION/context/futures-register.md`): each episode reviews which futures moved on the week's signal scans. This same transcript-to-AI-narrated pipeline is a venture candidate, AuthentiCasts (see `04_Execute/FW.VISION/efforts/AuthentiCasts - Venture Concept.md`), and also powers PassiveInfluencer content. Do not build podcast pages out until the touchpoint cadence actually exists.

---

## 4. Imagery to gather

The template shipped ~49 demo images (numbered blog jpegs, category images). Generic stock is now quarantined under `src/images/_quarantine/`.

- [x] **Replace generic demo blog images** for strategic homepage posts with flat-editorial covers (`src/images/blog/covers/`).
- [x] **Post cover images** for the six strategic essays.
- [ ] **Podcast cover art** for Futures Conversations (when episodes exist).
- [x] **OG/social images** — `public/og-image.jpg` + Seo meta.
- [x] Founder portrait (`francis-wang.jpg`) present.
- [x] Logo (`logo.png`, `logo-square.png`) present.

---

## 5. Data visualisations (fw-vision-dataviz integration)

The tools listing has an "Embed needed" frame. These are the real dataviz integrations:

- [x] **Strategy CITEMap / Strategy Map**: retired on-site; superseded by CITAble Business research.
- [ ] **CITAble Business Explorer**: index radar + Resonance Wheel for CVI / Agentic Gradient / SRI. Build on the index-visualisation components.
- [ ] **APPETITE model explorer** for scenarios.

Note: fw-vision-astro is Astro 6; `@fw-vision/widgets` is React 18||19 with an Astro-agnostic build. Embedding the React widgets needs `@astrojs/react` added here (mind the rolldown/react-refresh dev-server issue documented for syncidlabs) OR rendering the widgets as islands. Decide the integration path before wiring.

---

## 6. Functional gaps

- [ ] **Detail routes** (see Structural gaps) so scenarios/tools/podcast entries are linkable.
- [x] **Subscribe / newsletter** — `/subscribe` posts to Listmonk public API (`docs/integrations/listmonk.md`). Confirmation mail still needs Resend SMTP in Listmonk Admin.
- [ ] **Deploy**: GitHub Pages workflow + `public/CNAME` (fw.vision) added this pass. Needs: push, Pages enablement (source: GitHub Actions), DNS for the apex domain.
- [x] **Contact**: mailto (`francis.wang@fw.vision`); location Toronto / GTA.

---

## 7. Notes

- Stack: Astro 6.3.5 + Tailwind 4 + MDX, Lexington/Phanatik base. Build with `bunx astro build` (bun install layout; `node_modules/astro/astro.js` is not the entry).
- The site consumes NO shared web-kit package (Option A): FW.VISION and SyncID Labs are related-but-distinct brands with their own fonts and voice. Only the dataviz components (brand-agnostic) are intended for reuse.
- Voice: editorial-analytical, first-person-plural, The Economist × Stratechery × RAND. Distinct from SyncID's "actualizer" voice and FCWANG's personal-explorer voice.

---

## Trajectory Storylines system (added 2026-07-24)

The foresight model is now live:
- **Lexicon:** Foresight Scope (rewritten to the four P's + Preferable-as-trajectory), Trajectory Storyline, Horizons of Concern, Scenario Off-Ramp, Navigation Logic.
- **Storylines collection** (`src/content/storylines/`): 7 storylines. **Sovereign Canada 2075** is the fully-developed showcase (preferred trajectory + off-ramp + navigation logic + live ForesightScope); the other 6 (Finding Singularity, The Living Planet, The Made Future, First Principles, First Light, Second Light) are coming-soon.
- **Graph layer** (`src/data/foresight-graph/`): typed nodes+edges JSON, precursor to a Postgres graph. `derive.ts` builds ForesightScope data per storyline. See that folder's README for the Postgres path.
- **Pages:** `/storylines` (horizon-searchable index) + `/storylines/[slug]` (detail with ForesightScope island for the showcase). Also embedded on `/tools`.
- **ForesightScope widget** upgraded to @fw-vision/widgets 0.2.0: named preferred/off-ramp trajectory polylines, four-P bands, H1-H4 horizons.
- Canonical vault register: `04_Execute/FW.VISION/context/trajectory-storylines.md`.

### Remaining for storylines
- [ ] Develop the 6 coming-soon storylines to showcase depth (scenarios, off-ramps, graph nodes) as research matures.
- [x] **Navigation gap:** sub-bar now links Insights, Signals, Lexicon, Storylines (in addition to MegaMenu).
- [ ] Wire scenario/driver/signal detail rendering from the graph once volume grows (or migrate to Postgres).
