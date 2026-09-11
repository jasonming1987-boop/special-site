import Link from "next/link";

export default function DemoIndex() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-8 px-6 py-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
          A first look
        </p>
        <h1 className="mt-2 text-2xl font-bold text-neutral-900">
          Here's what we built you
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          You get two links instead of one. Tap into each one below and click around —
          it already works, so this is a real feel for what you'll be sending people. The
          name and products you see are just placeholders for now, so don't worry about
          those yet — we'll make it official once we've picked your brand name together.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/site-a"
          className="rounded-2xl border border-black/10 bg-site-a-bg p-6 transition hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-site-a-accent">
            For Instagram &amp; TikTok
          </p>
          <h2 className="mt-1 text-lg font-semibold text-site-a-fg">Your safe link</h2>
          <p className="mt-2 text-sm text-neutral-600">
            Put this one in your Instagram and TikTok bios. It's totally clean, so it
            can never get those accounts in trouble. It's got your merch, your
            favorite picks, and all your socials in one place.
          </p>
        </Link>

        <Link
          href="/site-b"
          className="rounded-2xl border border-white/10 bg-site-b-bg p-6 text-site-b-fg transition hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-site-b-accent">
            For X &amp; Reddit
          </p>
          <h2 className="mt-1 text-lg font-semibold">Your everything link</h2>
          <p className="mt-2 text-sm text-white/60">
            This one has all your links, OnlyFans included. Only post this one on X and
            Reddit — never on Instagram or TikTok.
          </p>
        </Link>
      </div>

      <p className="text-xs leading-relaxed text-neutral-400">
        Why two links instead of one? Instagram and TikTok can permanently ban an
        account just for linking to adult content, even once, even by accident. Keeping
        your safe link separate means that can never happen to you.
      </p>
    </main>
  );
}
