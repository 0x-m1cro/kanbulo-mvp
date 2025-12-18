import type { Metadata } from "next";
import GiftCart from "./sections/GiftCart";

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
          Add a soft, concise note (max 250 characters) and choose the Signature
          Kanbulo Keepsake Box. We hide pricing for gift recipients and pass
          clear notes to fulfillment partners.
        </p>
      </header>

      <GiftCart />
    </main>
  );
}
