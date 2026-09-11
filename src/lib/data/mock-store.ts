import type { ClickEvent, LinkHubEntry, Pick, Subscriber, SubscriberStream } from "@/lib/types";
import type { DataAdapter } from "@/lib/data/adapter";

// --- Seed data -------------------------------------------------------------
// Placeholder products/networks/copy only. No real brand, no real affiliate
// links. Replace wholesale once real picks and merch exist.

const picks: Pick[] = [
  {
    id: "1",
    slug: "ring-light",
    title: "Ring Light Kit",
    image: "/placeholder-product.svg",
    blurb: "The one I actually use for filming, not just for the photo.",
    kind: "affiliate",
    destinationUrl: "https://example.com/ring-light",
    network: "Amazon Associates",
    sortOrder: 1,
    published: true,
    // Amazon Associates prohibits cloaked affiliate links — direct link required.
    useRedirect: false,
  },
  {
    id: "2",
    slug: "desk-setup",
    title: "Desk Setup Bundle",
    image: "/placeholder-product.svg",
    blurb: "Everything on my desk, linked in one place.",
    kind: "affiliate",
    destinationUrl: "https://example.com/desk-setup",
    network: "LTK",
    sortOrder: 2,
    published: true,
    useRedirect: true,
  },
  {
    id: "3",
    slug: "logo-hoodie",
    title: "Logo Hoodie",
    image: "/placeholder-product.svg",
    blurb: "Print-on-demand, ships direct, no inventory sitting in a closet.",
    kind: "merch",
    destinationUrl: "https://example.com/store/logo-hoodie",
    network: "Fourthwall",
    sortOrder: 3,
    published: true,
    useRedirect: true,
  },
  {
    id: "4",
    slug: "sticker-pack",
    title: "Sticker Pack",
    image: "/placeholder-product.svg",
    blurb: "Small batch, restocks monthly.",
    kind: "merch",
    destinationUrl: "https://example.com/store/sticker-pack",
    network: "Fourthwall",
    sortOrder: 4,
    published: true,
    useRedirect: true,
  },
];

const linkHubEntries: LinkHubEntry[] = [
  { id: "1", label: "OnlyFans", url: "https://example.com/onlyfans-placeholder" },
  { id: "2", label: "X (Twitter)", url: "https://example.com/x-placeholder" },
  { id: "3", label: "Reddit", url: "https://example.com/reddit-placeholder" },
  { id: "4", label: "Clean site (merch + safe links)", url: "/site-a" },
];

// In-memory only — resets on server restart. This is where a real adapter
// would write to Postgres/Supabase instead.
const clickLog: ClickEvent[] = [];
const subscribers: Subscriber[] = [];

export const mockAdapter: DataAdapter = {
  async getPublishedPicks() {
    return picks.filter((p) => p.published).sort((a, b) => a.sortOrder - b.sortOrder);
  },

  async getPickBySlug(slug) {
    return picks.find((p) => p.slug === slug) ?? null;
  },

  async recordClick(event) {
    clickLog.push(event);
    // eslint-disable-next-line no-console
    console.log("[click_events]", event);
  },

  async getLinkHubEntries() {
    return linkHubEntries;
  },

  async subscribe(email, stream, phone) {
    const existing = subscribers.find((s) => s.email === email && s.stream === stream);
    if (existing) return existing;

    const record: Subscriber = {
      email,
      phone: phone ?? null,
      stream,
      consentTimestamp: new Date().toISOString(),
      confirmToken: Math.random().toString(36).slice(2),
      confirmedAt: null, // double opt-in: not confirmed until they click the email link
      unsubscribedAt: null,
    };
    subscribers.push(record);
    // eslint-disable-next-line no-console
    console.log("[subscribers] new signup, confirmation email would send now:", record);
    return record;
  },
};

// Exposed for the (dev-only) debug view so it's visible that data really is
// being written, not just accepted and dropped.
export function _debugSnapshot() {
  return { clickLog, subscribers };
}
