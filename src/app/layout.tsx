import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
