import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

// ─── Legal ───────────────────────────────────────────────────────────────────
const legal = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legal" }),
  schema: z.object({
    page: z.string(),
    pubDate: z.coerce.date(),
  }),
});

// ─── Contributors (formerly "authors") ──────────────────────────────────────
const authors = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/authors" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      role: z.string().optional(),
      bio: z.string().optional(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      socials: z
        .object({
          twitter: z.string().optional(),
          website: z.string().optional(),
          linkedin: z.string().optional(),
          email: z.string().optional(),
        })
        .optional(),
    }),
});

// ─── Posts / Insights ────────────────────────────────────────────────────────
// Primary article collection: foresight analysis, research commentary, signals
const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }).optional(),
      tags: z.array(z.string()),
      // Content flags for homepage layout
      isBreaking: z.boolean().optional(),   // Signal Alert — urgent foresight signal
      isTopStory: z.boolean().optional(),   // Featured Analysis — promoted to hero
      isFeatured: z.boolean().optional(),   // Editor's Pick
      isBrief: z.boolean().optional(),      // Signal Brief — short-form ticker content
      isLocked: z.boolean().optional(),     // Premium/Subscriber content (future)
      // Optional dataviz integration
      datavizEmbed: z.string().optional(),  // URL or component ID for embedded visualization
    }),
});

// ─── Podcast ─────────────────────────────────────────────────────────────────
// Futures Conversations — audio/video futures content
const podcast = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/podcast" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.coerce.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: image(),
        alt: z.string(),
      }),
      episodeNumber: z.number().optional(),
      duration: z.string().optional(),
      audioSrc: z.string().optional(),
      tags: z.array(z.string()),
      isFeatured: z.boolean().optional(),
      isGuest: z.boolean().optional(),
      isSeries: z.boolean().optional(),
      isLocked: z.boolean().optional(),
    }),
});

// ─── Scenarios ───────────────────────────────────────────────────────────────
// Futures scenarios, design fiction, what-if explorations
const scenarios = defineCollection({
  loader: glob({ pattern: "**/[!_]*.{md,mdx}", base: "./src/content/scenarios" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    description: z.string(),
    author: z.string().default("Francis Wang"),
    tags: z.array(z.string()).default([]),
    // Scenario-specific fields
    timeHorizon: z.string().optional(),          // e.g. "2035", "2050", "2075"
    scenarioType: z.string().optional(),         // e.g. "design-fiction", "backcasting", "wild-card"
    geographicFocus: z.string().optional(),      // e.g. "Canada", "Global", "East Asia"
    isFeatured: z.boolean().optional(),
  }),
});

// ─── Lexicon ─────────────────────────────────────────────────────────────────
// Proprietary frameworks and concept definitions
const lexicon = defineCollection({
  loader: glob({ pattern: "**/[!_]*.{md,mdx}", base: "./src/content/lexicon" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    originatedDate: z.coerce.date().optional(),  // When the concept was first developed
    author: z.string().default("Francis Wang"),
    tags: z.array(z.string()).default([]),
    // Cross-reference with FCWANG blog
    canonicalUrl: z.string().optional(),          // If mirrored from findcongwang.com
    relatedFrameworks: z.array(z.string()).optional(), // Links to other lexicon entries
  }),
});

// ─── Tools ───────────────────────────────────────────────────────────────────
// Interactive dataviz applications and strategic canvases
const tools = defineCollection({
  loader: glob({ pattern: "**/[!_]*.{md,mdx}", base: "./src/content/tools" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    // Tool-specific fields
    toolUrl: z.string().optional(),              // External URL if hosted separately
    embedComponent: z.string().optional(),       // Astro component name for inline embed
    status: z.enum(["live", "beta", "planned"]).default("planned"),
  }),
});

// ─── Challenges ──────────────────────────────────────────────────────────────
// Innovation challenge programs
const challenges = defineCollection({
  loader: glob({ pattern: "**/[!_]*.{md,mdx}", base: "./src/content/challenges" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Challenge-specific fields
    status: z.enum(["open", "closed", "upcoming"]).default("upcoming"),
    deadline: z.coerce.date().optional(),
    partners: z.array(z.string()).optional(),     // Collaborating organizations
    prizes: z.string().optional(),
  }),
});

// Trajectory Storylines: named preferred trajectories through scenario sequences (long-form editorials)
const storylines = defineCollection({
  loader: glob({ pattern: "**/[!_]*.{md,mdx}", base: "./src/content/storylines" }),
  schema: z.object({
    title: z.string(),
    slogan: z.string(),
    description: z.string(),
    pubDate: z.coerce.date().optional(),
    author: z.string().default("Francis Wang"),
    domainSeries: z.array(z.string()).default([]),
    horizons: z.array(z.string()).default([]),
    status: z.enum(["showcase", "active", "coming-soon"]).default("coming-soon"),
    graphId: z.string().optional(),
    tags: z.array(z.string()).default([]),
  }),
});

// ─── Export ──────────────────────────────────────────────────────────────────
export const collections = {
  authors,
  legal,
  posts,
  podcast,
  scenarios,
  lexicon,
  tools,
  challenges,
  storylines,
};
