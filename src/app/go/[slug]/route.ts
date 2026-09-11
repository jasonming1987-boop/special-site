import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/data";

// Click-tracking redirect. Toggleable per link via `pick.useRedirect` —
// networks like Amazon Associates require direct linking, so those picks
// never point here in the first place (see PickCard.tsx).
export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const pick = await db.getPickBySlug(slug);

  if (!pick || !pick.published) {
    return NextResponse.redirect(new URL("/site-a", req.url));
  }

  await db.recordClick({
    pickSlug: pick.slug,
    timestamp: new Date().toISOString(),
    referrer: req.headers.get("referer"),
    // Coarse only — no precise geo, no full UA string, no PII, per the brief's
    // click_events schema note.
    coarseGeo: req.headers.get("x-vercel-ip-country") ?? null,
    userAgentFamily: simplifyUserAgent(req.headers.get("user-agent")),
  });

  return NextResponse.redirect(pick.destinationUrl);
}

function simplifyUserAgent(ua: string | null): string | null {
  if (!ua) return null;
  if (/iphone|ipad/i.test(ua)) return "iOS";
  if (/android/i.test(ua)) return "Android";
  if (/macintosh/i.test(ua)) return "macOS";
  if (/windows/i.test(ua)) return "Windows";
  return "Other";
}
