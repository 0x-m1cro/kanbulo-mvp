import type { Metadata } from "next";
import Link from "next/link";
import { SoftImage } from "@/components/ui/SoftImage";

export const metadata: Metadata = {
  title: "About Kanbulo | Purpose, Vision, Values",
  description:
    "Learn how Kanbulo weaves tenderness, warmth, and care into every stitch—our purpose, vision, and values.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-12 px-6 py-12 lg:px-10">
      <header className="grid items-center gap-10 rounded-[32px] border border-rose-100/70 bg-white/80 p-8 shadow-velvet backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-coffee-700">
            Purpose · Vision · Values
          </p>
          <h1 className="font-display text-4xl text-coffee-900 lg:text-5xl">
            Made with tenderness, designed for calm routines.
          </h1>
          <p className="text-lg text-coffee-800">
            Kanbulo exists to wrap babies in soft, intentional garments that
            respect their delicate skin and honor a parent’s unhurried rhythm.
            Every detail is chosen to feel like a held whisper.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-coffee-800">
            <span className="rounded-full border border-rose-100/70 bg-white/70 px-3 py-1 shadow-velvet">
              Tenderness-first design
            </span>
            <span className="rounded-full border border-rose-100/70 bg-white/70 px-3 py-1 shadow-velvet">
              Calm, boutique pacing
            </span>
            <span className="rounded-full border border-rose-100/70 bg-white/70 px-3 py-1 shadow-velvet">
              Integrity in every step
            </span>
          </div>
        </div>
        <SoftImage
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1400&q=80"
          alt="Careful, calm craftsmanship"
          aspect="aspect-[4/5]"
        />
      </header>

      <section className="grid gap-6 rounded-[28px] border border-rose-100/80 bg-white/80 p-6 shadow-velvet md:grid-cols-3">
        {pillars.map((pillar) => (
          <div key={pillar.title} className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coffee-700">
              {pillar.title}
            </p>
            <h2 className="font-display text-2xl text-coffee-900">
              {pillar.headline}
            </h2>
            <p className="text-sm text-coffee-800 leading-relaxed">
              {pillar.copy}
            </p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 rounded-[28px] border border-amber-100/80 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/70 p-7 shadow-velvet md:grid-cols-[1fr_1.1fr]">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coffee-700">
            Founder&apos;s elevator pitch
          </p>
          <h3 className="font-display text-2xl text-coffee-900">
            Soft fabrics, mindful pacing, no harsh surprises.
          </h3>
          <p className="text-sm text-coffee-800 leading-relaxed">
            We’re building a boutique experience that keeps manufacturing
            partners behind the velvet curtain while elevating the rituals of
            care. From envelope shoulders to whisper-quiet snaps, every detail
            is tuned for serenity.
          </p>
          <p className="text-sm text-coffee-800 leading-relaxed">
            We speak warmly, never urgently. We ship with clarity, never panic.
            And we design every page to feel like a slow breath—so parents can
            focus on the closeness that matters most.
          </p>
        </div>
        <div className="rounded-3xl border border-rose-100/80 bg-white/80 p-5 shadow-velvet">
          <ul className="space-y-4 text-sm text-coffee-800">
            <li>
              <strong className="text-coffee-900">Purpose:</strong> Offer
              tender essentials that respect skin, routines, and the earth.
            </li>
            <li>
              <strong className="text-coffee-900">Vision:</strong> A calm,
              headless boutique where parents feel guided, not hurried.
            </li>
            <li>
              <strong className="text-coffee-900">Values:</strong> Tenderness,
              Warmth, Care, Integrity—expressed in every interaction and every
              stitch.
            </li>
          </ul>
          <div className="mt-5">
            <Link href="/journal" className="soft-underline text-sm">
              Read the Kanbulo Journal
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const pillars = [
  {
    title: "Purpose",
    headline: "Softness that reassures.",
    copy: "We select fabrics that feel like a gentle embrace and craft silhouettes that protect delicate skin without friction or fuss.",
  },
  {
    title: "Vision",
    headline: "An unhurried boutique journey.",
    copy: "From first pixel to post-purchase, the experience stays calm—no harsh jargon, no rushed prompts, only clear and caring guidance.",
  },
  {
    title: "Values",
    headline: "Tenderness, Warmth, Integrity.",
    copy: "We center empathetic copy, eased motion, and transparent promises. We omit pricing from gifts and shield operational noise from recipients.",
  },
];
