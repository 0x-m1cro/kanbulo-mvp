import { JournalArticle } from "@/types/journal";

export const fallbackJournalArticles: JournalArticle[] = [
  {
    handle: "held-softly",
    title: "Held Softly: Why Tenderness Guides Every Stitch",
    excerpt:
      "A look inside the Kanbulo studio, where slowed pacing and gentle fabrics shape every garment.",
    bodyHtml: `<p>In the Kanbulo studio, tenderness is a practice. We pick fabrics that feel like a reassuring hand on a newborn's back and work in unhurried rhythms that respect the maker and the wearer alike.</p>
<p>Every seam is finished to rest softly against delicate skin, and every silhouette is tested during quiet moments—not under fluorescent urgency. This is how we ensure each piece feels like a held whisper.</p>`,
    publishedAt: "2025-12-01T10:00:00Z",
    tags: ["studio", "tenderness"],
    image: {
      url: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1400&q=80",
      altText: "Soft fabrics folded gently",
    },
    author: { name: "Kanbulo Atelier" },
  },
  {
    handle: "intentional-design",
    title: "Intentional Design for Slow Parenting",
    excerpt:
      "Design choices that honor calm routines, from envelope shoulders to whisper-quiet closures.",
    bodyHtml: `<p>Our garments are shaped by the pace of slow parenting: envelope shoulders that slip on without fuss, nickel-free closures that never startle, and silhouettes that move with your baby—not against her.</p>
<p>We avoid harsh labels and prioritize breathable linings so nothing distracts from the closeness between caregiver and child.</p>`,
    publishedAt: "2025-12-03T12:00:00Z",
    tags: ["design", "care"],
    image: {
      url: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=80",
      altText: "Minimal, calm textile workspace",
    },
    author: { name: "Founder's Desk" },
  },
  {
    handle: "keepsakes-of-care",
    title: "Keepsakes of Care: Packaging Without the Noise",
    excerpt:
      "How we prepare gifts that feel intimate—omitting pricing, keeping notes graceful, and honoring the reveal.",
    bodyHtml: `<p>Gifting is sacred in our world. We prepare keepsake boxes that arrive without pricing, wrap garments in breathable tissue, and include only the gentlest wording. Printful sees the operational note; your loved one only feels the care.</p>
<p>Every handwritten-style message is capped to keep it heartfelt and concise, and each parcel opens quietly—no crinkling plastic, no glaring logos.</p>`,
    publishedAt: "2025-12-06T09:00:00Z",
    tags: ["gifting", "packaging"],
    image: {
      url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1400&q=80",
      altText: "Softly wrapped gift box",
    },
    author: { name: "Care Team" },
  },
];
