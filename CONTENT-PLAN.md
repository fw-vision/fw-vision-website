# fw.vision — Content Gathering Plan

> The FW.VISION think-tank site has a complete visual foundation (Lexington/Phanatik base, burgundy accent, League Spartan / STIX Two Text / Inter Display / Geist Mono typography, a Futures Signals Ticker). This pass enriched it with the recent strategic IP and wired previously-empty pages to their collections. The gaps below are what remains to gather before launch.

Status legend: [ ] to gather · [~] draft exists · [x] done

---

## 1. What this pass added

- **Homepage bands**: tagline hero ("Designing futures worth actualizing"), a frameworks showcase (CITAble Business Index, Hybrid Intelligence, APPETITE, Strategy CITEMap), and a "we think / ventures actualize" constellation band.
- **About**: expanded the frameworks list with the new index IP (CBI, CVI, Agentic Gradient, SRI, Active Futuring); added a "Thinking and Actualizing" section expressing the FW.VISION / operational-partner relationship.
- **Lexicon (4 new)**: CITAble Business Index, Cognitive Vitality Index, Agentic Gradient, Societal Resilience Index, Active Futuring.
- **Posts (2 new strategic)**: "The Four Conditions of a Future-Proof Venture", "Thinking and Actualizing".
- **Scenarios (1)**: "Canada 2075: The Sovereign Innovation Century" (backcast).
- **Tools (2)**: Strategy Map (CITAble bands visual), CITAble Business Index Explorer.
- **Wired** the scenarios and tools index pages to read their collections (they were static "coming soon" placeholders that never surfaced content).

---

## 2. Structural gaps (template)

- [ ] **Detail routes for scenarios, tools, podcast.** Lexicon, blog, challenges, and legal have `[...slug].astro` routes; scenarios/tools/podcast only have `index.astro` listings. Seeded entries show in listings but have no detail page. Add `[...slug].astro` mirroring the lexicon pattern.
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

The template ships ~49 real demo images (numbered blog jpegs, category images). They are generic stock, not on-brand.

- [ ] **Replace generic demo blog images** with on-brand imagery (or intentional abstract/editorial art) for the posts that drive the homepage hero and top-stories.
- [ ] **Post cover images**: the new strategic posts have no `image` frontmatter; add cover art so cards render with visuals.
- [ ] **Podcast cover art** for Futures Conversations.
- [ ] **OG/social images** per the brand (League Spartan mark on burgundy).
- [x] Founder portrait (`francis-wang.jpg`) present.
- [x] Logo (`logo.png`, `logo-square.png`) present.

---

## 5. Data visualisations (fw-vision-dataviz integration)

The tools listing has an "Embed needed" frame. These are the real dataviz integrations:

- [ ] **Strategy Map** (Strategy CITEMap): the visual of the CITAble bands. The `@fw-vision/widgets` package already implements `StrategyMap`. Wire it into `/tools` and into analysis posts via the `datavizEmbed` / `embedComponent` fields.
- [ ] **CITAble Business Index Explorer**: index radar + Resonance Wheel for CVI / Agentic Gradient / SRI. Build on the index-visualisation components.
- [ ] **APPETITE model explorer** for scenarios.

Note: fw-vision-astro is Astro 6; `@fw-vision/widgets` is React 18||19 with an Astro-agnostic build. Embedding the React widgets needs `@astrojs/react` added here (mind the rolldown/react-refresh dev-server issue documented for syncidlabs) OR rendering the widgets as islands. Decide the integration path before wiring.

---

## 6. Functional gaps

- [ ] **Detail routes** (see Structural gaps) so scenarios/tools/podcast entries are linkable.
- [ ] **Subscribe / newsletter** backend for "Subscribe to Signals" (primary CTA).
- [ ] **Deploy**: GitHub Pages workflow + `public/CNAME` (fw.vision) added this pass. Needs: push, Pages enablement (source: GitHub Actions), DNS for the apex domain.
- [ ] **Contact**: currently a mailto (`francis.wang@fw.vision`); confirm that is the intended path.

---

## 7. Notes

- Stack: Astro 6.3.5 + Tailwind 4 + MDX, Lexington/Phanatik base. Build with `bunx astro build` (bun install layout; `node_modules/astro/astro.js` is not the entry).
- The site consumes NO shared web-kit package (Option A): FW.VISION and SyncID Labs are related-but-distinct brands with their own fonts and voice. Only the dataviz components (brand-agnostic) are intended for reuse.
- Voice: editorial-analytical, first-person-plural, The Economist × Stratechery × RAND. Distinct from SyncID's "actualizer" voice and FCWANG's personal-explorer voice.
