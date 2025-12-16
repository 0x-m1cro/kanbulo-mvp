import { describe, expect, it } from "vitest";
import { deriveBadgesFromTags, inventoryStatusMessage } from "./catalog";

describe("deriveBadgesFromTags", () => {
  it("maps known tags to compliant badges", () => {
    const badges = deriveBadgesFromTags([
      "made-in-usa",
      "ethical",
      "made-in-usa",
    ]);

    expect(badges).toHaveLength(2);
    expect(badges[0]).toMatchObject({
      label: "Manufactured in the United States",
      tone: "warm",
    });
    expect(badges[1]).toMatchObject({
      label: "Ethically Crafted",
      tone: "calm",
    });
  });

  it("ignores tags without a compliant mapping", () => {
    const badges = deriveBadgesFromTags(["unknown-tag", "organic-cotton"]);
    expect(badges).toHaveLength(1);
    expect(badges[0].label).toContain("Organic Cotton");
  });
});

describe("inventoryStatusMessage", () => {
  it("returns a crafted message for zero inventory", () => {
    const status = inventoryStatusMessage(0);
    expect(status.headline).toBe("Created with Intention");
    expect(status.mood).toBe("atelier");
  });

  it("keeps gentle language for low inventory", () => {
    const status = inventoryStatusMessage(2);
    expect(status.headline).toBe("Finishing Touches");
    expect(status.helper).toContain("resting in our studio");
  });

  it("returns ready messaging for comfortable inventory", () => {
    const status = inventoryStatusMessage(6);
    expect(status.headline).toBe("Thoughtfully Made");
    expect(status.mood).toBe("ready");
  });
});
