import { deriveBadgesFromTags, inventoryStatusMessage } from "@/lib/catalog";
import { Product } from "@/types/catalog";

export const products: Product[] = [
  {
    handle: "blush-cloud-wrap",
    name: "Blush Cloud Wrap",
    price: 64,
    tagline: "Featherlight organic cotton, brushed for dreamlike softness.",
    description:
      "A cocooning wrap for quiet mornings and unhurried stroller walks.",
    tags: ["made-in-usa", "organic-cotton", "hypoallergenic"],
    inventory: 2,
    image:
      "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=1400&q=80",
    accent: "rose",
    story: {
      whyItMatters: [
        "Softness: Brushed organic cotton with an aloe rinse that feels like a held whisper.",
        "Care: Breathable weave that regulates temperature during naps and cuddle time.",
        "Ethical Production: Cut and finished in a small US studio with mindful pacing.",
      ],
      softness: "Aloevera-rinsed organic cotton, double gauze for cloud loft.",
      care: "Machine wash cold on delicate, lay flat to dry for a lasting drape.",
    },
  },
  {
    handle: "sage-harbor-onesie",
    name: "Sage Harbor Onesie",
    price: 42,
    tagline: "Everyday ease with heirloom-level finishing.",
    description:
      "A gentle base layer with envelope shoulders and nickel-free closures.",
    tags: ["ethical", "slow-crafted", "hypoallergenic"],
    inventory: 0,
    image:
      "https://images.unsplash.com/photo-1478145046317-39f10e56b5e9?auto=format&fit=crop&w=1400&q=80",
    accent: "sage",
    story: {
      whyItMatters: [
        "Softness: Combed cotton interlock that moves like a lullaby.",
        "Care: Reinforced seams that stay smooth after every wash.",
        "Ethical Production: Crafted in limited batches to honor the maker's pace.",
      ],
      softness: "Combed cotton interlock with micro-brushed interior.",
      care: "Wash on gentle, tumble low, cuddle often.",
    },
  },
  {
    handle: "amber-dawn-cardigan",
    name: "Amber Dawn Cardigan",
    price: 78,
    tagline: "A soft-shell layer with whisper-quiet snaps.",
    description:
      "Layered warmth for twilight walks, finished with hand-tacked hems.",
    tags: ["made-in-usa", "ethical", "slow-crafted"],
    inventory: 6,
    image:
      "https://images.unsplash.com/photo-1471286242750-106ef31bb0de?auto=format&fit=crop&w=1400&q=80",
    accent: "amber",
    story: {
      whyItMatters: [
        "Softness: Italian spun cotton-cashmere blend that never itches.",
        "Care: Double-knit placket keeps its shape without stiffness.",
        "Ethical Production: Finished in small batches with transparent sourcing.",
      ],
      softness: "Cotton-cashmere blend, finished for a matte, buttery handfeel.",
      care: "Hand wash cold, reshape, and dry flat to keep the drape intact.",
    },
  },
];

export const featuredProducts = products.map((product) => ({
  ...product,
  badges: deriveBadgesFromTags(product.tags),
  status: inventoryStatusMessage(product.inventory),
}));

export function getProductByHandle(handle: string): (typeof featuredProducts)[0] | undefined {
  return featuredProducts.find((product) => product.handle === handle);
}
