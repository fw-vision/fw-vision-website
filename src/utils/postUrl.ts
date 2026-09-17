import type { CollectionEntry } from "astro:content";

type Post = CollectionEntry<"posts">;

/** Resolve public URL for a post by contentType. */
export function postUrl(post: Post): string {
  const id = post.id;
  const type = post.data.contentType ?? "analysis";
  if (type === "signal") return `/signals/${id}`;
  if (type === "column") return `/commentary/${id}`;
  return `/blog/posts/${id}`;
}
