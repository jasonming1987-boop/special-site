import type { Metadata } from "next";
import { Playfair_Display, Inter, Caveat } from "next/font/google";
import "./globals.css";

// Editorial serif for headlines + a clean sans for body text — the pairing
// most beauty/DTC storefronts use. Self-hosted by Next, no runtime request.
const display = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// Playful handwritten font for merch print mockups ("Girl Gang" designs
// overlaid on blank apparel photos) — not used for real UI copy.
const script = Caveat({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Your new site — a first look",
  description: "Take a look and click around — this is what we're building you.",
  // This will get a public URL for review purposes, but it's placeholder
  // content (including literal "OnlyFans"/"X" mentions on Site B) that must
  // never get indexed or show up in search results.
  robots: { index: false, follow: false, nocache: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${script.variable}`}>
      <body className="font-body">{children}</body>
    </html>
  );
}
