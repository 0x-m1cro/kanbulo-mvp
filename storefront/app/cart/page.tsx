 "use client";

import type { Metadata } from "next";
import { useMemo, useState } from "react";
import { SoftImage } from "@/components/ui/SoftImage";
import { Button } from "@/components/ui/Button";
import { featuredProducts } from "@/data/products";
import {
  GIFT_MESSAGE_LIMIT,
  buildCartAttributes,
  buildPrintfulNotes,
} from "@/lib/gifting";

export const metadata: Metadata = {
  title: "Cart | Gift Message & Keepsake",
  description:
    "Add a tender gift message and the Signature Kanbulo Keepsake Box. Attributes map to Shopify cart and Printful notes.",
  alternates: { canonical: "/cart" },
};

export default function CartPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-12 lg:px-10">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-coffee-700">
          Cart & Review
        </p>
        <h1 className="font-display text-4xl text-coffee-900">
          Gifting without the noise.
        </h1>
        <p className="text-lg text-coffee-800">
          Add a soft, concise note (max {GIFT_MESSAGE_LIMIT} characters) and
          choose the Signature Kanbulo Keepsake Box. We hide pricing for gift
          recipients and pass clear notes to fulfillment partners.
        </p>
      </header>

      <GiftCart />
    </main>
  );
}

function GiftCart() {
  const product = featuredProducts[0];
  const [giftMessage, setGiftMessage] = useState("");
  const [keepsakeBox, setKeepsakeBox] = useState(true);
  const [savedPayload, setSavedPayload] = useState<
    { attributes: { key: string; value: string }[]; printfulNotes: string } | undefined
  >(undefined);

  const total = useMemo(() => {
    const base = product.price;
    const keepsake = keepsakeBox ? 18 : 0;
    return base + keepsake;
  }, [product.price, keepsakeBox]);

  const remaining = Math.max(0, GIFT_MESSAGE_LIMIT - giftMessage.trim().length);

  const handleSave = () => {
    const attributes = buildCartAttributes(giftMessage, keepsakeBox);
    const printfulNotes = buildPrintfulNotes(giftMessage, keepsakeBox);
    setSavedPayload({ attributes, printfulNotes });
  };

  return (
    <section className="grid gap-6 rounded-[28px] border border-rose-100/80 bg-white/80 p-8 shadow-velvet md:grid-cols-[1.2fr_0.8fr]">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-coffee-900">Gift details</h2>
          <span className="rounded-full border border-amber-100/80 bg-amber-50/60 px-3 py-1 text-xs text-coffee-800 shadow-velvet">
            Cart attributes → Shopify
          </span>
        </div>

        <label className="space-y-2 text-sm text-coffee-800">
          <span className="flex items-center justify-between">
            <span>Gift message (optional)</span>
            <span className="text-xs text-coffee-700">
              {remaining} characters left
            </span>
          </span>
          <textarea
            value={giftMessage}
            onChange={(e) => setGiftMessage(e.target.value.slice(0, GIFT_MESSAGE_LIMIT))}
            maxLength={GIFT_MESSAGE_LIMIT}
            className="w-full rounded-2xl border border-rose-100/80 bg-white/80 p-3 shadow-inner outline-none focus:border-rose-200"
            rows={4}
            placeholder="A short, heartfelt note without pricing or urgency."
          />
        </label>

        <label className="flex items-center gap-3 text-sm text-coffee-800">
          <input
            type="checkbox"
            checked={keepsakeBox}
            onChange={(e) => setKeepsakeBox(e.target.checked)}
            className="h-4 w-4 rounded border-rose-200 text-coffee-900 focus:ring-coffee-800"
          />
          Add the Signature Kanbulo Keepsake Box (+$18)
        </label>

        <div className="rounded-2xl border border-rose-100/80 bg-white/70 p-4 text-sm text-coffee-800 shadow-velvet">
          <p className="font-semibold text-coffee-900">What we pass along</p>
          <ul className="mt-2 space-y-1 list-disc list-inside">
            <li>Gift message stored as Shopify cart attribute.</li>
            <li>Keepsake selection stored as cart attribute.</li>
            <li>Printful notes combine both, omitting pricing.</li>
          </ul>
        </div>

        <Button className="w-full" onClick={handleSave}>
          Save gift preferences
        </Button>

        {savedPayload && (
          <div className="space-y-3 rounded-2xl border border-amber-100/80 bg-amber-50/50 p-4 text-sm text-coffee-800 shadow-velvet">
            <p className="font-semibold text-coffee-900">Ready for Shopify</p>
            <pre className="overflow-x-auto rounded-xl bg-white/80 p-3 text-xs text-coffee-900">
              {JSON.stringify(savedPayload.attributes, null, 2)}
            </pre>
            <p className="font-semibold text-coffee-900">Printful notes</p>
            <pre className="overflow-x-auto rounded-xl bg-white/80 p-3 text-xs text-coffee-900">
              {savedPayload.printfulNotes}
            </pre>
          </div>
        )}
      </div>

      <aside className="space-y-4 rounded-3xl border border-rose-100/80 bg-gradient-to-br from-rose-50/70 via-white to-amber-50/70 p-5 shadow-velvet">
        <h3 className="font-display text-xl text-coffee-900">Cart preview</h3>
        <div className="flex gap-3">
          <div className="w-32">
            <SoftImage
              src={product.image}
              alt={product.name}
              aspect="aspect-square"
              className="rounded-2xl"
            />
          </div>
          <div className="space-y-1 text-sm text-coffee-800">
            <p className="font-semibold text-coffee-900">{product.name}</p>
            <p>{product.tagline}</p>
            <p className="text-coffee-700">${product.price.toFixed(2)}</p>
            {keepsakeBox && (
              <p className="text-coffee-700">Keepsake box: $18.00</p>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between text-sm font-semibold text-coffee-900">
          <span>Total (simulated)</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <p className="text-xs text-coffee-700">
          Pricing stays hidden from gift recipients. Packing slips omit cost and
          only include gentle notes.
        </p>
      </aside>
    </section>
  );
}
"use client";
