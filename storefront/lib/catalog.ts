import { Badge, InventoryStatus } from "@/types/catalog";

const TAG_BADGES: Record<string, Badge> = {
  "made-in-usa": {
    tag: "made-in-usa",
    label: "Manufactured in the United States",
    tone: "warm",
    helper: "Locally finished for gentle quality control.",
  },
  ethical: {
    tag: "ethical",
    label: "Ethically Crafted",
    tone: "calm",
    helper: "Every step respects people and the planet.",
  },
  "organic-cotton": {
    tag: "organic-cotton",
    label: "Organic Cotton",
    tone: "warm",
    helper: "Certified fibers, free from harsh treatments.",
  },
  hypoallergenic: {
    tag: "hypoallergenic",
    label: "Hypoallergenic",
    tone: "bright",
    helper: "Gentle on delicate, newborn skin.",
  },
  "slow-crafted": {
    tag: "slow-crafted",
    label: "Slow Crafted",
    tone: "warm",
    helper: "Reserved production that honors the process.",
  },
};

export function deriveBadgesFromTags(tags: string[]): Badge[] {
  const seen = new Set<string>();

  return tags
    .map((tag) => tag.toLowerCase())
    .filter((tag) => TAG_BADGES[tag])
    .filter((tag) => {
      if (seen.has(tag)) return false;
      seen.add(tag);
      return true;
    })
    .map((tag) => TAG_BADGES[tag]);
}

export function inventoryStatusMessage(inventory: number): InventoryStatus {
  if (inventory <= 0) {
    return {
      headline: "Created with Intention",
      helper: "We begin crafting your piece as soon as you reserve it.",
      mood: "atelier",
    };
  }

  if (inventory <= 3) {
    return {
      headline: "Finishing Touches",
      helper: "A few are resting in our studio, ready for gentle packaging.",
      mood: "atelier",
    };
  }

  return {
    headline: "Thoughtfully Made",
    helper: "Prepared to ship without rushing the Kanbulo standard.",
    mood: "ready",
  };
}

export function badgeToneToClass(tone: Badge["tone"]): string {
  switch (tone) {
    case "warm":
      return "bg-rose-100 text-rose-900 border-rose-200";
    case "calm":
      return "bg-sage-100 text-sage-900 border-sage-200";
    case "bright":
      return "bg-amber-100 text-amber-900 border-amber-200";
    default:
      return "bg-neutral-100 text-neutral-900 border-neutral-200";
  }
}
