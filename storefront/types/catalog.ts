export type BadgeTone = "warm" | "calm" | "bright";

export type Badge = {
  tag: string;
  label: string;
  tone: BadgeTone;
  helper?: string;
};

export type InventoryStatus = {
  headline: string;
  helper: string;
  mood: "atelier" | "ready";
};

export type ProductStory = {
  whyItMatters: string[];
  softness: string;
  care: string;
};

export type Product = {
  handle: string;
  name: string;
  price: number;
  tagline: string;
  description: string;
  tags: string[];
  inventory: number;
  image: string;
  accent?: string;
  story: ProductStory;
};
