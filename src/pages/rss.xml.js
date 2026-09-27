import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { postUrl } from '@/utils/postUrl';

export async function GET(context) {
  const posts = await getCollection("posts");
  const filteredPosts = posts.filter(post =>
    post.data.editorialStatus === "published" &&
    (post.data.contentType === "signal" || post.data.contentType === "column" || post.data.contentType === "analysis" || post.data.contentType === "research")
  );

  const sortedPosts = [...filteredPosts].sort((a, b) =>
    new Date(b.data.pubDate).getTime() - new Date(a.data.pubDate).getTime()
  );

  return rss({
    title: 'FW.VISION Signals and Commentary',
    description: 'Foresight signals, analysis, and commentary from FW.VISION Futures Thinking Inc.',
    site: context.site,
    items: sortedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description,
      categories: post.data.tags,
      customData: `<contentType>${post.data.contentType}</contentType>`,
      link: postUrl(post),
    })),
  });
}
