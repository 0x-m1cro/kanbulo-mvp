import { describe, expect, it } from "vitest";
import {
  GIFT_MESSAGE_LIMIT,
  buildCartAttributes,
  buildPrintfulNotes,
  sanitizeGiftMessage,
} from "./gifting";

describe("sanitizeGiftMessage", () => {
  it("trims and caps at the limit", () => {
    const padded = "  hello tenderness  ";
    expect(sanitizeGiftMessage(padded)).toBe("hello tenderness");

    const long = "x".repeat(GIFT_MESSAGE_LIMIT + 10);
    expect(sanitizeGiftMessage(long)).toHaveLength(GIFT_MESSAGE_LIMIT);
  });
});

describe("buildCartAttributes", () => {
  it("includes gift message when present", () => {
    const attrs = buildCartAttributes("soft words", true);
    expect(attrs).toContainEqual({ key: "gift_message", value: "soft words" });
    expect(attrs).toContainEqual({ key: "keepsake_box", value: "yes" });
  });

  it("omits message when empty but keeps keepsake flag", () => {
    const attrs = buildCartAttributes("   ", false);
    expect(attrs).toHaveLength(1);
    expect(attrs[0]).toEqual({ key: "keepsake_box", value: "no" });
  });
});

describe("buildPrintfulNotes", () => {
  it("combines keepsake and message", () => {
    const note = buildPrintfulNotes("Handle with care", true);
    expect(note).toContain("Keepsake Box");
    expect(note).toContain("Handle with care");
  });

  it("falls back to standard packaging text", () => {
    const note = buildPrintfulNotes("", false);
    expect(note).toBe("Standard packaging. No gift message.");
  });
});
