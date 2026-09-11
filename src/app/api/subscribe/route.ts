import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/data";
import type { SubscriberStream } from "@/lib/types";

// Stub for the real send-behind-an-adapter setup in Section 5: two providers
// (Resend for the clean stream, SendX/YNOT for the links stream), never mixed.
// This route just writes the subscriber record; wiring an actual provider is
// infrastructure work (Section 7), not prototype work.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const email = typeof body?.email === "string" ? body.email.trim() : "";
  const stream = body?.stream as SubscriberStream;

  if (!email || (stream !== "clean" && stream !== "links")) {
    return NextResponse.json({ error: "invalid request" }, { status: 400 });
  }

  const subscriber = await db.subscribe(email, stream);
  return NextResponse.json({ ok: true, confirmed: false, stream: subscriber.stream });
}
