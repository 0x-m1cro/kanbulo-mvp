import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { NavBar } from "@/components/NavBar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kanbulo | Tender Headless Storefront",
  description:
    "An unhurried, headless Shopify experience that carries the tenderness of Kanbulo from first pixel to checkout.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-shell-50 text-coffee-900 font-sans">
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
