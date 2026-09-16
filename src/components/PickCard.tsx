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
      className="group flex flex-col overflow-hidden rounded-3xl border border-site-a-gold/25 bg-site-a-surface shadow-[0_1px_2px_rgba(43,31,28,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-site-a-gold/50 hover:shadow-[0_18px_36px_-14px_rgba(232,112,156,0.35)]"
    >
      <div className="relative aspect-square w-full overflow-hidden bg-site-a-blush2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={pick.image}
          alt={pick.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {pick.printOverlay && (
          <span
            aria-hidden
            className={`pointer-events-none absolute text-center font-script leading-none text-site-a-accent drop-shadow-[0_1px_1px_rgba(255,255,255,0.6)] ${pick.printOverlay.widthClass ?? "w-24 text-2xl"}`}
            style={{
              top: pick.printOverlay.top,
              left: pick.printOverlay.left,
              transform: `translate(-50%, -50%) rotate(${pick.printOverlay.rotate ?? "0deg"})`,
            }}
          >
            {pick.printOverlay.text}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1.5 p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-site-a-accent">
          {pick.kind === "merch" ? "Merch" : "My Pick"}
        </span>
        <h3 className="font-display text-lg leading-snug text-site-a-fg">{pick.title}</h3>
        <p className="text-sm leading-relaxed text-site-a-muted">{pick.blurb}</p>
        {pick.kind === "affiliate" && (
          <p className="mt-2 text-xs text-site-a-muted/70">
            Affiliate link — I may earn a commission at no extra cost to you.
          </p>
        )}
      </div>
    </a>
  );
}
