"use client";

import Link from "next/link";
import { BadgeStack } from "@/components/Badge";
import { StatusPill } from "@/components/StatusPill";
import { useTheme } from "@/components/theme/ThemeProvider";
import { Button } from "@/components/ui/Button";
import { SoftImage } from "@/components/ui/SoftImage";
import { type Product, type InventoryStatus, type Badge as BadgeType } from "@/types/catalog";

type ProductCardProps = {
  product: Product & {
    badges: BadgeType[];
    status: InventoryStatus;
  };
};

const accentMap: Record<string, string> = {
  rose: "bg-gradient-to-br from-rose-50 via-white to-amber-50",
  sage: "bg-gradient-to-br from-sage-50 via-white to-rose-50",
  amber: "bg-gradient-to-br from-amber-50 via-white to-rose-50",
};

export function ProductCard({ product }: ProductCardProps) {
  const { motion } = useTheme();
  const accent = accentMap[product.accent ?? "rose"];

  return (
    <article
      className={`group rounded-3xl border border-rose-100/80 p-5 backdrop-blur-sm ${accent} shadow-velvet ${motion.gentle}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <StatusPill status={product.status} />
          <h3 className="font-display text-2xl text-coffee-900">
            {product.name}
          </h3>
          <p className="text-sm text-coffee-700/80">{product.tagline}</p>
        </div>
        <span className="rounded-full bg-white/70 px-3 py-1 text-sm font-semibold text-coffee-900 shadow-velvet">
          ${product.price}
        </span>
      </div>
      <div className="mt-4">
        <SoftImage src={product.image} alt={product.name} className="rounded-2xl" />
      </div>
      <div className="mt-4 space-y-3">
        <BadgeStack badges={product.badges} />
        <p className="text-sm text-coffee-800">{product.description}</p>
        <div className="flex items-center justify-between">
          <Link
            href={`/products/${product.handle}`}
            className="text-sm font-semibold text-coffee-900 soft-underline"
          >
            View the quiet details
          </Link>
          <Button variant="primary">Reserve gently</Button>
        </div>
      </div>
    </article>
  );
}
