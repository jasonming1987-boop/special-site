import type { Metadata } from "next";

// This title/description is what renders as the link preview when this URL
// is pasted into an Instagram bio or a DM — the brief calls this out
// explicitly as part of "clean in more than imagery". Keep the copy boring
// on purpose: no "exclusive", "spicy", "VIP", "unlock".
export const metadata: Metadata = {
  title: "Shop & Links — [Brand Name]",
  description: "Merch, favorite picks, and where to find [Brand Name] online.",
};

export default function SiteALayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-site-a-bg text-site-a-fg">{children}</div>;
}
