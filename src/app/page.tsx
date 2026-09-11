import Link from "next/link";

export default function DemoIndex() {
  return (
    <main className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center gap-8 px-6 py-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-neutral-400">
          Prototype — not the production architecture
        </p>
        <h1 className="mt-2 text-2xl font-bold text-neutral-900">
          Two sites, one repo, for now
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-neutral-600">
          In production, Site A and Site B are separate domains on separate hosting
          accounts, so a problem on one can never take down the other — that separation
          is the entire point of the project. This prototype bundles both under one
          local dev server purely so you can click through what each one does and how it
          feels, without needing real domain names or brand names yet. Nothing here talks
          to a real payment processor, email provider, or database — signups and clicks
          are logged in memory so you can see them working, but nothing sends or persists
          beyond this session.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/site-a"
          className="rounded-2xl border border-black/10 bg-site-a-bg p-6 transition hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-site-a-accent">
            Site A
          </p>
          <h2 className="mt-1 text-lg font-semibold text-site-a-fg">The clean site</h2>
          <p className="mt-2 text-sm text-neutral-600">
            SFW. Merch, affiliate picks, Instagram/TikTok/YouTube, email signup. This is
            what goes in her Instagram and TikTok bios.
          </p>
        </Link>

        <Link
          href="/site-b"
          className="rounded-2xl border border-white/10 bg-site-b-bg p-6 text-site-b-fg transition hover:shadow-md"
        >
          <p className="text-xs font-semibold uppercase tracking-wide text-site-b-accent">
            Site B
          </p>
          <h2 className="mt-1 text-lg font-semibold">The link hub</h2>
          <p className="mt-2 text-sm text-white/60">
            Everything, including X and OnlyFans. Posted only on X and Reddit, and
            emailed to the links-stream subscriber list.
          </p>
        </Link>
      </div>

      <p className="text-xs text-neutral-400">
        Try clicking a pick on Site A — the terminal running `npm run dev` will print the
        click event and any signup, so you can see the data model from Section 5 of the
        brief actually capturing something.
      </p>
    </main>
  );
}
