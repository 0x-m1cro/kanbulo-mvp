import type { Metadata } from "next";
import { Suspense } from "react";
import { SoftImage } from "@/components/ui/SoftImage";
import { getJournalArticles } from "@/lib/journal";
import { JournalArticle } from "@/types/journal";
import JournalGrid from "./sections/JournalGrid";

export const metadata: Metadata = {
  title: "Kanbulo Journal | Stories of Tender Craft",
  description:
    "Read the Kanbulo Journal: slow, tender stories about soft fabrics, intentional design, and gifting with care.",
  alternates: {
    canonical: "/journal",
  },
};

export default async function JournalPage() {
  const articles = await getJournalArticles();

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-10 px-6 py-12 lg:px-10">
      <header className="grid items-center gap-8 rounded-[32px] border border-rose-100/70 bg-white/80 p-8 shadow-velvet backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-coffee-700">
            Kanbulo Journal
          </p>
          <h1 className="font-display text-4xl text-coffee-900 lg:text-5xl">
            Stories stitched with tenderness.
          </h1>
          <p className="text-lg text-coffee-800">
            Slow notes from the studio—soft fabrics, intentional design choices,
            and gifting practices that keep pricing hidden while elevating care.
          </p>
        </div>
        <SoftImage
          src="https://images.unsplash.com/photo-1523419400524-4c8c1163c219?auto=format&fit=crop&w=1400&q=80"
          alt="Calm journal workspace"
          aspect="aspect-[5/6]"
        />
      </header>

      <Suspense fallback={<SkeletonGrid />}>
        <JournalGrid articles={articles as JournalArticle[]} />
      </Suspense>
    </main>
  );
}

function SkeletonGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 6 }).map((_, idx) => (
        <div
          key={idx}
          className="h-72 rounded-3xl border border-rose-100/70 bg-white/60 shadow-velvet animate-pulse"
        />
      ))}
    </div>
  );
}
