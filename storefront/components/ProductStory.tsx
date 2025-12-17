import { BadgeStack } from "@/components/Badge";
import { StatusPill } from "@/components/StatusPill";
import { SoftImage } from "@/components/ui/SoftImage";
import { type Product, type InventoryStatus, type Badge as BadgeType } from "@/types/catalog";

type ProductStoryProps = {
  product: Product & {
    badges: BadgeType[];
    status: InventoryStatus;
  };
};

export function ProductStory({ product }: ProductStoryProps) {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
      <div className="space-y-6">
        <StatusPill status={product.status} />
        <h1 className="font-display text-4xl text-coffee-900">{product.name}</h1>
        <p className="text-lg text-coffee-800">{product.description}</p>
        <BadgeStack badges={product.badges} />
        <div className="rounded-3xl border border-rose-100/70 bg-white/80 p-6 shadow-velvet">
          <h2 className="font-display text-xl text-coffee-900">
            Why it matters
          </h2>
          <ul className="mt-3 space-y-3 text-coffee-800">
            {product.story.whyItMatters.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-rose-50/60 px-4 py-3 text-sm leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <InfoTile title="Softness" body={product.story.softness} />
          <InfoTile title="Care" body={product.story.care} />
        </div>
      </div>
      <div className="lg:pl-6">
        <SoftImage
          src={product.image}
          alt={product.name}
          aspect="aspect-[3/4]"
          className="rounded-[32px]"
        />
      </div>
    </section>
  );
}

function InfoTile({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl border border-rose-100/80 bg-gradient-to-br from-white via-rose-50/40 to-amber-50/40 p-5 shadow-velvet">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-coffee-700">
        {title}
      </p>
      <p className="mt-2 text-sm text-coffee-900">{body}</p>
    </div>
  );
}
