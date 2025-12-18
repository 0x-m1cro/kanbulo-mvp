const DEFAULT_SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://kanbulo.example";

export function absoluteUrl(path: string) {
  if (path.startsWith("http")) return path;
  return `${DEFAULT_SITE_URL}${path.startsWith("/") ? "" : "/"}${path}`;
}
