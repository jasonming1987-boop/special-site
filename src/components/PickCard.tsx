import type { Pick } from "@/lib/types";

/**
 * Affiliate disclosure lives here, inside the card, so it is structurally
 * impossible to publish a pick without it. Required in Australia (Australian
 * Consumer Law / ACCC guidance on influencer disclosure) and the US (FTC).
 */
export function PickCard({ pick }: { pick: Pick }) {
  // Amazon-style "no cloaking" links go straight to destinationUrl.
  // Everything else routes through /go/[slug] for click tracking.
  const href = pick.useRedirect ? `/go/${pick.slug}` : pick.destinationUrl;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener sponsored"
      className="group flex flex-col overflow-hidden rounded-2xl border border-black/5 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="aspect-square w-full bg-neutral-100">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pick.image}
          alt={pick.title}
          className="h-full w-full object-cover transition group-hover:scale-[1.02]"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1 p-4">
        <span className="text-xs font-medium uppercase tracking-wide text-site-a-accent">
          {pick.kind === "merch" ? "Merch" : "Pick"}
        </span>
        <h3 className="text-base font-semibold text-site-a-fg">{pick.title}</h3>
        <p className="text-sm text-neutral-600">{pick.blurb}</p>
        {pick.kind === "affiliate" && (
          <p className="mt-2 text-xs text-neutral-400">
            Affiliate link — I may earn a commission at no extra cost to you.
          </p>
        )}
      </div>
    </a>
  );
}
