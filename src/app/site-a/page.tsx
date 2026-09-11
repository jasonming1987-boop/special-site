import { db } from "@/lib/data";
import { PickCard } from "@/components/PickCard";
import { SignupForm } from "@/components/SignupForm";

const SOCIALS = [
  { label: "Instagram", url: "https://instagram.com/example-placeholder" },
  { label: "TikTok", url: "https://tiktok.com/@example-placeholder" },
  { label: "YouTube", url: "https://youtube.com/@example-placeholder" },
  // Deliberately no X here — not even a footer icon. See Section 5 of the brief.
];

export default async function SiteAPage() {
  const picks = await db.getPublishedPicks();
  const merchPicks = picks.filter((p) => p.kind === "merch");
  const affiliatePicks = picks.filter((p) => p.kind === "affiliate");

  return (
    <div className="relative overflow-hidden">
      {/* Soft decorative blobs — purely visual, sit behind everything */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-site-a-blush opacity-60 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-64 -left-28 h-64 w-64 rounded-full bg-site-a-blush2 opacity-70 blur-3xl"
      />

      <main className="relative mx-auto flex max-w-md flex-col gap-12 pb-20 sm:max-w-2xl">
        <header className="flex flex-col items-center gap-4 text-center">
          <div className="relative w-full px-5 pt-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/3630339/pexels-photo-3630339.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt=""
              className="h-40 w-full rounded-3xl object-cover shadow-[0_12px_32px_-12px_rgba(43,31,28,0.35)] sm:h-56"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.pexels.com/photos/5052701/pexels-photo-5052701.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt=""
              className="absolute -bottom-12 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border-4 border-site-a-bg object-cover shadow-[0_8px_24px_-8px_rgba(232,112,156,0.45)]"
            />
          </div>
          <div className="mt-12 px-5">
            <h1 className="font-display text-3xl text-site-a-fg">Margarita Smith</h1>
            <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-site-a-muted">
              Skincare &amp; makeup favorites, curated for you. New drops announced by
              email first.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2 px-5 text-sm">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener"
                className="rounded-full border border-site-a-gold/35 bg-white/70 px-4 py-1.5 text-site-a-fg transition hover:border-site-a-accent hover:text-site-a-accent"
              >
                {s.label}
              </a>
            ))}
          </div>
        </header>

        <section className="mx-5 flex flex-col items-center gap-3 rounded-3xl border border-site-a-gold/20 bg-site-a-blush/50 px-6 py-8 text-center">
          <h2 className="font-display text-xl text-site-a-fg">Get new drops first</h2>
          <p className="max-w-xs text-sm text-site-a-muted">
            Join the list for early access to restocks and new picks.
          </p>
          <SignupForm
            stream="clean"
            theme="site-a"
            copy={{
              placeholder: "you@email.com",
              button: "Sign up",
              consent: "Unsubscribe anytime. We never sell your info.",
            }}
          />
        </section>

        {merchPicks.length > 0 && (
          <section className="mx-5 flex flex-col gap-5">
            <div className="flex items-center gap-4">
              <h2 className="whitespace-nowrap font-display text-xl text-site-a-fg">
                Shop the Merch
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-site-a-gold/60 to-transparent" />
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              {merchPicks.map((pick) => (
                <PickCard key={pick.id} pick={pick} />
              ))}
            </div>
          </section>
        )}

        {affiliatePicks.length > 0 && (
          <section className="mx-5 flex flex-col gap-5">
            <div>
              <div className="flex items-center gap-4">
                <h2 className="whitespace-nowrap font-display text-xl text-site-a-fg">
                  My Picks
                </h2>
                <div className="h-px flex-1 bg-gradient-to-r from-site-a-gold/60 to-transparent" />
              </div>
              <p className="mt-2 text-xs text-site-a-muted">
                Products I actually use and recommend. These are affiliate links — I may
                earn a commission at no extra cost to you.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              {affiliatePicks.map((pick) => (
                <PickCard key={pick.id} pick={pick} />
              ))}
            </div>
          </section>
        )}

        <footer className="mx-5 pt-4 text-center text-xs text-site-a-muted">
          © Margarita Smith. Some links above are affiliate links.
        </footer>
      </main>
    </div>
  );
}
