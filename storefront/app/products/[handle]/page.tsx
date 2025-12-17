import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductStory } from "@/components/ProductStory";
import { Button } from "@/components/ui/Button";
import { featuredProducts, products } from "@/data/products";

type ProductPageProps = {
  params: { handle: string };
};

export default function ProductPage({ params }: ProductPageProps) {
  const product = featuredProducts.find(
    (item) => item.handle === params.handle,
  );

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-12 lg:px-10">
      <div className="flex items-center justify-between gap-4">
        <Link href="/" className="soft-underline text-sm text-coffee-800">
          Back to the storefront
        </Link>
        <div className="rounded-full bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-coffee-700 shadow-velvet">
          Quiet PDP layout
        </div>
      </div>

      {product && (
        <div className="mt-10 space-y-12 rounded-[28px] border border-rose-100/80 bg-white/80 p-8 shadow-velvet">
          <ProductStory product={product} />

          <div className="grid gap-6 rounded-3xl border border-amber-100/80 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/80 p-6 shadow-velvet md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coffee-700">
                Inventory status abstraction
              </p>
              <h3 className="font-display text-2xl text-coffee-900">
                {product.status.headline}
              </h3>
              <p className="text-sm text-coffee-800">{product.status.helper}</p>
              <p className="text-sm text-coffee-800">
                Shopify inventory stays hidden; we communicate readiness in
                serene language that honors the crafting pace.
              </p>
            </div>
            <div className="space-y-3">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-coffee-700">
                Shipping timeline
              </p>
              <div className="rounded-2xl border border-rose-100/70 bg-white/80 p-4 shadow-velvet">
                <p className="font-semibold text-coffee-900">
                  Created with intention · 3–5 days
                </p>
                <p className="text-sm text-coffee-800">
                  We let parents know their piece is prepared in the studio
                  before it travels—no harsh “out of stock” language.
                </p>
              </div>
              <Button className="w-full">Add to gentle cart</Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export function generateStaticParams() {
  return products.map((product) => ({
    handle: product.handle,
  }));
}
