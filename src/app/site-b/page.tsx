import { db } from "@/lib/data";
import { SignupForm } from "@/components/SignupForm";

export default async function SiteBPage() {
  const links = await db.getLinkHubEntries();

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col items-center gap-6 px-5 pb-16 pt-14">
      <div className="h-16 w-16 rounded-full bg-white/10" aria-hidden />
      <h1 className="text-lg font-semibold">[Persona Handle]</h1>

      <div className="flex w-full flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener"
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-medium transition hover:bg-white/10"
          >
            {link.label}
          </a>
        ))}
      </div>

      <section className="mt-4 flex w-full flex-col items-center gap-2 text-center">
        <p className="text-xs text-white/50">Get notified when links change</p>
        <SignupForm
          stream="links"
          theme="site-b"
          copy={{
            placeholder: "you@email.com",
            button: "Notify me",
            consent: "One list, no spam. Unsubscribe anytime.",
          }}
        />
      </section>
    </main>
  );
}
