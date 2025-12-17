import { fallbackJournalArticles } from "@/data/journal";
import { fetchBlogArticles } from "./shopify";
import { JournalArticle } from "@/types/journal";

const BLOG_HANDLE = process.env.SHOPIFY_JOURNAL_HANDLE || "kanbulo-journal";

function mapShopifyArticle(node: {
  handle: string;
  title: string;
  excerpt: string;
  contentHtml: string;
  publishedAt: string;
  tags: string[];
  image?: { altText: string | null; url: string } | null;
  authorV2?: { name: string } | null;
}): JournalArticle {
  return {
    handle: node.handle,
    title: node.title,
    excerpt: node.excerpt,
    bodyHtml: node.contentHtml,
    publishedAt: node.publishedAt,
    tags: node.tags,
    image: node.image
      ? { url: node.image.url, altText: node.image.altText }
      : null,
    author: node.authorV2 ? { name: node.authorV2.name } : null,
  };
}

export async function getJournalArticles(): Promise<JournalArticle[]> {
  try {
    const articles = await fetchBlogArticles(BLOG_HANDLE, 24);
    if (!articles.length) return fallbackJournalArticles;
    return articles.map(mapShopifyArticle);
  } catch (error) {
    console.warn("Falling back to local journal data:", error);
    return fallbackJournalArticles;
  }
}

export async function getJournalArticleByHandle(
  handle: string,
): Promise<JournalArticle | undefined> {
  const articles = await getJournalArticles();
  return articles.find((article) => article.handle === handle);
}
