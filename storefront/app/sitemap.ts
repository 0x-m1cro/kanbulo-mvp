import { getJournalArticles } from "@/lib/journal";

export default async function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kanbulo.example";
  const journal = await getJournalArticles();

  const staticRoutes = ["/", "/about", "/journal", "/cart", "/products/blush-cloud-wrap"].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date().toISOString(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    }),
  );

  const journalRoutes = journal.map((article) => ({
    url: `${baseUrl}/journal/${article.handle}`,
    lastModified: article.publishedAt,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...journalRoutes];
}
