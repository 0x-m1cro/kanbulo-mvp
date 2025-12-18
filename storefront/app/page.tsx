import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/Button";
import { SoftImage } from "@/components/ui/SoftImage";
import { featuredProducts } from "@/data/products";

export default function Home() {
  const heroProduct = featuredProducts[0];

  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-16 px-6 py-14 lg:px-10">
      <header className="grid items-center gap-10 rounded-[32px] border border-rose-100/70 bg-white/80 p-8 shadow-velvet backdrop-blur-sm lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-coffee-700">
            Tenderness, Warmth, Care
          </p>
          <h1 className="font-display text-4xl text-coffee-900 lg:text-5xl">
            Made with tenderness, guided by calm routines.
          </h1>
          <p className="text-lg text-coffee-800">
            Each Kanbulo piece begins with soft fabrics and unhurried motion.
            We keep partners behind the velvet curtain so every touchpoint feels
            like a held whisper—from first pixel to the moment it arrives.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button>Reserve a look</Button>
            <Link href="/products/blush-cloud-wrap" className="soft-underline">
              Peek at the product story
            </Link>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-coffee-800">
            <BadgeChip label="Soft fabrics, intentional design" />
            <BadgeChip label="Calm pacing, eased motion" />
            <BadgeChip label="Brand language enforced" />
          </div>
        </div>
        <div className="grid gap-4">
          <SoftImage
            src={heroProduct.image}
            alt={heroProduct.name}
            aspect="aspect-[5/6]"
            className="rounded-[28px]"
          />
          <div className="rounded-3xl bg-gradient-to-br from-rose-50 via-white to-amber-50 p-4 text-sm text-coffee-800 shadow-velvet">
            <p className="font-semibold">The Velvet Curtain</p>
            <p className="mt-1 leading-relaxed">
              Middleware transforms operational language into brand-approved,
              soothing phrasing. No POD terms ever surface—only the care your
              little one will feel.
            </p>
          </div>
        </div>
      </header>

      <section className="grid gap-6 rounded-[28px] border border-rose-100/70 bg-white/80 p-6 shadow-velvet backdrop-blur-sm lg:grid-cols-3">
        {valuePoints.map((value) => (
          <div key={value.title} className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-semibold text-coffee-700">
              <span className="h-2 w-2 rounded-full bg-coffee-900/80" />
              {value.title}
            </div>
            <h3 className="font-display text-2xl text-coffee-900">
              {value.headline}
            </h3>
            <p className="text-sm text-coffee-800">{value.copy}</p>
          </div>
        ))}
      </section>

      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coffee-700">
              Featured pieces
            </p>
            <h2 className="font-display text-3xl text-coffee-900">
              Slow-crafted essentials, compliance ready
            </h2>
          </div>
          <Link href="/products/blush-cloud-wrap" className="soft-underline">
            View a PDP layout
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredProducts.map((product) => (
            <ProductCard key={product.handle} product={product} />
          ))}
        </div>
      </section>

      <section className="grid gap-6 rounded-[28px] border border-rose-100/80 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/60 p-7 shadow-velvet md:grid-cols-[1.3fr_0.7fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coffee-700">
            Shipping promise
          </p>
          <h3 className="font-display text-3xl text-coffee-900">
            Created with intention takes 3–5 days before it travels to you.
          </h3>
          <p className="text-coffee-800">
            We frame lead times positively, spotlighting care over urgency.
            Parents know when their piece leaves the studio—without seeing
            factory jargon or partner names.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-coffee-800">
            <BadgeChip label="Gentle status messaging" />
            <BadgeChip label="Brand-compliant notifications" />
            <BadgeChip label="Shopify checkout branding" />
          </div>
        </div>
        <div className="rounded-3xl border border-amber-100/80 bg-white/80 p-6 shadow-velvet">
          <h4 className="font-display text-xl text-coffee-900">
            “Velvet Curtain” error copy
          </h4>
          <p className="mt-3 text-sm text-coffee-800 leading-relaxed">
            If a fulfillment API ever pauses, customers will see:{" "}
            <strong>
              “We are ensuring the quality of our process; please check back
              soon.”
            </strong>{" "}
            The system shields operational names while keeping parents calmly
            informed.
          </p>
        </div>
      </section>
    </main>
  );
}

function BadgeChip({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-rose-100/70 bg-white/70 px-3 py-1 text-sm shadow-velvet">
      {label}
    </span>
  );
}

const valuePoints = [
  {
    title: "Tenderness",
    headline: "Soft palettes and eased motion.",
    copy: "Warm rose, sage, and amber tones pair with unhurried hover states to reassure parents that nothing is rushed.",
  },
  {
    title: "Care",
    headline: "Compliance baked into the UI.",
    copy: "Tags like made-in-usa become gentle badges, while inventory is framed as mindful crafting—not stock counts.",
  },
  {
    title: "Integrity",
    headline: "Checkout without whiplash.",
    copy: "A branded headless flow keeps Shopify plumbing invisible so every touchpoint speaks with the Kanbulo voice.",
  },
];
