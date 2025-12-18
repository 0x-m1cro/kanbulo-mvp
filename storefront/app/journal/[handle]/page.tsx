import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SoftImage } from "@/components/ui/SoftImage";
import { absoluteUrl } from "@/lib/site";
import { getJournalArticleByHandle, getJournalArticles } from "@/lib/journal";

type Props = { params: { handle: string } };

export async function generateStaticParams() {
  const articles = await getJournalArticles();
  return articles.map((article) => ({ handle: article.handle }));
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata | undefined> {
  const article = await getJournalArticleByHandle(params.handle);
  if (!article) return;

  const url = absoluteUrl(`/journal/${article.handle}`);
  const description = article.excerpt || "Tender story from the Kanbulo Journal";

  return {
    title: `${article.title} | Kanbulo Journal`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description,
      url,
      images: article.image
        ? [{ url: article.image.url, alt: article.image.altText || article.title }]
        : undefined,
      type: "article",
    },
  };
}

export default async function JournalArticlePage({ params }: Props) {
  const article = await getJournalArticleByHandle(params.handle);
  if (!article) {
    notFound();
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-4xl flex-col gap-6 px-6 py-12 lg:px-10">
      <Link href="/journal" className="soft-underline text-sm text-coffee-800">
        Back to journal
      </Link>

      <article className="space-y-6 rounded-[28px] border border-rose-100/80 bg-white/80 p-8 shadow-velvet">
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-coffee-700">
            {new Intl.DateTimeFormat("en", {
              month: "long",
              day: "numeric",
              year: "numeric",
            }).format(new Date(article.publishedAt))}
          </p>
          <h1 className="font-display text-4xl text-coffee-900">
            {article.title}
          </h1>
          {article.author?.name && (
            <p className="text-sm text-coffee-700">By {article.author.name}</p>
          )}
        </div>

        {article.image && (
          <SoftImage
            src={article.image.url}
            alt={article.image.altText || article.title}
            aspect="aspect-[16/9]"
            className="rounded-[24px]"
            priority
          />
        )}

        <div
          className="prose prose-lg prose-rose max-w-none text-coffee-900 prose-headings:font-display prose-p:leading-relaxed"
          dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
        />
      </article>
    </main>
  );
}
