import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Links",
  description: "All links.",
};

export default function SiteBLayout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen bg-site-b-bg text-site-b-fg">{children}</div>;
}
