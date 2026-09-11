import type { ClickEvent, LinkHubEntry, Pick, Subscriber, SubscriberStream } from "@/lib/types";

/**
 * Everything the UI needs from a backend. Swap `mockAdapter` for a
 * `supabaseAdapter` implementing the same interface once Supabase is
 * provisioned — nothing above this line should need to change.
 */
export interface DataAdapter {
  getPublishedPicks(): Promise<Pick[]>;
  getPickBySlug(slug: string): Promise<Pick | null>;
  recordClick(event: ClickEvent): Promise<void>;
  getLinkHubEntries(): Promise<LinkHubEntry[]>;
  subscribe(email: string, stream: SubscriberStream, phone?: string): Promise<Subscriber>;
}
