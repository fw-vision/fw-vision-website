/** Curated primary categories for nav, menu, and footer. Full list: /blog/tags */
export const PRIMARY_CATEGORIES = [
  "sovereignty",
  "investment",
  "governance",
  "innovation",
  "foresight",
  "technology",
] as const;

export type PrimaryCategory = (typeof PRIMARY_CATEGORIES)[number];

export function formatCategoryLabel(tag: string): string {
  return tag.replace(/-/g, " ");
}

/** Primary categories that appear in the given tag set, in curated order. */
export function topCategoriesFrom(tags: Iterable<string>): string[] {
  const available = new Set(tags);
  return PRIMARY_CATEGORIES.filter((tag) => available.has(tag));
}
