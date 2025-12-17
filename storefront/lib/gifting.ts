export const GIFT_MESSAGE_LIMIT = 250;

export function sanitizeGiftMessage(message: string): string {
  if (!message) return "";
  return message.trim().slice(0, GIFT_MESSAGE_LIMIT);
}

export function buildCartAttributes(
  message: string,
  keepsakeBox: boolean,
): { key: string; value: string }[] {
  const attributes: { key: string; value: string }[] = [];
  const sanitized = sanitizeGiftMessage(message);

  if (sanitized) {
    attributes.push({ key: "gift_message", value: sanitized });
  }

  attributes.push({
    key: "keepsake_box",
    value: keepsakeBox ? "yes" : "no",
  });

  return attributes;
}

export function buildPrintfulNotes(
  message: string,
  keepsakeBox: boolean,
): string {
  const sanitized = sanitizeGiftMessage(message);
  const lines: string[] = [];

  if (keepsakeBox) {
    lines.push("Include Signature Kanbulo Keepsake Box.");
  }

  if (sanitized) {
    lines.push(`Gift message: ${sanitized}`);
  }

  if (!lines.length) {
    return "Standard packaging. No gift message.";
  }

  return lines.join(" ");
}
