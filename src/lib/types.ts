// Data model sketch from the project brief, Section 5.
// These types are the contract every adapter (mock, Supabase, whatever comes next)
// has to satisfy — UI code only ever imports from `lib/data`, never from a specific backend.

export type PickKind = "affiliate" | "merch";

export interface Pick {
  id: string;
  slug: string;
  title: string;
  image: string; // path or URL
  blurb: string;
  kind: PickKind;
  destinationUrl: string;
  network: string; // e.g. "Amazon Associates", "Fourthwall"
  sortOrder: number;
  published: boolean;
  /**
   * Per-link cloaking toggle. Some networks (Amazon Associates in particular)
   * prohibit link cloaking and require direct linking. When false, the UI must
   * render `destinationUrl` directly instead of routing through /go/[slug].
   */
  useRedirect: boolean;
  /**
   * Print mockup: renders text over a blank apparel photo the way a
   * print-on-demand mockup tool would, so a stock photo of a plain garment
   * can stand in for a specific printed design. Position is a CSS
   * top/left percentage tuned per photo.
   */
  printOverlay?: {
    text: string;
    top: string;
    left: string;
    rotate?: string;
    widthClass?: string;
  };
}

export interface ClickEvent {
  pickSlug: string;
  timestamp: string; // ISO 8601
  referrer: string | null;
  coarseGeo: string | null; // e.g. country code only, no precise location
  userAgentFamily: string | null; // e.g. "iOS Safari", no full UA string / no PII
}

export interface Collection {
  id: string;
  slug: string;
  title: string;
  pickSlugs: string[];
}

export type SubscriberStream = "clean" | "links";

export interface Subscriber {
  email: string;
  phone: string | null;
  stream: SubscriberStream;
  consentTimestamp: string;
  confirmToken: string;
  confirmedAt: string | null;
  unsubscribedAt: string | null;
}

// Site B is a bare link list — not "picks" in the merch/affiliate sense.
export interface LinkHubEntry {
  id: string;
  label: string;
  url: string;
  description?: string;
}
