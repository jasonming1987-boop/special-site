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
    <main className="mx-auto flex max-w-md flex-col gap-8 px-5 pb-16 pt-10 sm:max-w-2xl">
      <header className="flex flex-col items-center gap-3 text-center">
        <div className="h-20 w-20 rounded-full bg-neutral-200" aria-hidden />
        <h1 className="text-xl font-bold">[Brand Name]</h1>
        <p className="max-w-xs text-sm text-neutral-600">
          Merch and my favorite picks, all in one place. New drops announced by email.
        </p>
        <div className="flex flex-wrap justify-center gap-3 text-sm">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener"
              className="rounded-full border border-black/10 px-3 py-1 text-site-a-fg transition hover:border-site-a-accent"
            >
              {s.label}
            </a>
          ))}
        </div>
      </header>

      <section className="flex flex-col items-center gap-3 rounded-2xl bg-white/60 p-5 text-center">
        <h2 className="text-sm font-semibold">Get new drops first</h2>
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
        <section className="flex flex-col gap-4">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
            Merch
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            {merchPicks.map((pick) => (
              <PickCard key={pick.id} pick={pick} />
            ))}
          </div>
        </section>
      )}

      {affiliatePicks.length > 0 && (
        <section className="flex flex-col gap-4">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wide text-neutral-500">
              Affiliates
            </h2>
            <p className="mt-1 text-xs text-neutral-400">
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

      <footer className="pt-4 text-center text-xs text-neutral-400">
        © [Brand Name]. Some links above are affiliate links.
      </footer>
    </main>
  );
}
