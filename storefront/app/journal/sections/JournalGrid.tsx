"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { SoftImage } from "@/components/ui/SoftImage";
import { JournalArticle } from "@/types/journal";

type Props = {
  articles: JournalArticle[];
};

const PAGE_SIZE = 6;

export default function JournalGrid({ articles }: Props) {
  const [tagFilter, setTagFilter] = useState<string>("all");
  const [page, setPage] = useState(1);

  const tags = useMemo(() => {
    const set = new Set<string>();
    articles.forEach((a) => a.tags.forEach((t) => set.add(t)));
    return Array.from(set);
  }, [articles]);

  const filtered = useMemo(() => {
    if (tagFilter === "all") return articles;
    return articles.filter((article) => article.tags.includes(tagFilter));
  }, [articles, tagFilter]);

  const paginated = filtered.slice(0, PAGE_SIZE * page);
  const canLoadMore = paginated.length < filtered.length;

  return (
    <section className="space-y-6">
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => {
            setTagFilter("all");
            setPage(1);
          }}
          className={chipClass(tagFilter === "all")}
        >
          All
        </button>
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => {
              setTagFilter(tag);
              setPage(1);
            }}
            className={chipClass(tagFilter === tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {paginated.map((article) => (
          <Link
            key={article.handle}
            href={`/journal/${article.handle}`}
            className="group space-y-3 rounded-[24px] border border-rose-100/70 bg-white/80 p-4 shadow-velvet transition hover:-translate-y-0.5 hover:border-rose-200"
          >
            {article.image && (
              <SoftImage
                src={article.image.url}
                alt={article.image.altText || article.title}
                aspect="aspect-[4/3]"
                className="rounded-2xl"
              />
            )}
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-coffee-700">
              {new Intl.DateTimeFormat("en", {
                month: "short",
                day: "numeric",
                year: "numeric",
              }).format(new Date(article.publishedAt))}
            </p>
            <h3 className="font-display text-xl text-coffee-900">
              {article.title}
            </h3>
            <p className="text-sm text-coffee-800 leading-relaxed">
              {article.excerpt}
            </p>
            <div className="flex flex-wrap gap-2 text-xs text-coffee-700">
              {article.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-rose-100/80 bg-rose-50/60 px-3 py-1 shadow-velvet"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>

      {canLoadMore && (
        <div className="flex justify-center">
          <button
            type="button"
            className="rounded-full border border-rose-100/80 bg-white/80 px-4 py-2 text-sm text-coffee-800 shadow-velvet hover:border-rose-200"
            onClick={() => setPage((p) => p + 1)}
          >
            Load more stories
          </button>
        </div>
      )}
    </section>
  );
}

function chipClass(active: boolean) {
  return [
    "rounded-full border px-3 py-1 text-sm shadow-velvet transition",
    active
      ? "border-coffee-200 bg-coffee-50 text-coffee-900"
      : "border-rose-100/80 bg-white/70 text-coffee-800 hover:border-rose-200",
  ].join(" ");
}
