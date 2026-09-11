import { db } from "@/lib/data";
import { SignupForm } from "@/components/SignupForm";

export default async function SiteBPage() {
  const links = await db.getLinkHubEntries();

  return (
    <main className="mx-auto flex min-h-screen max-w-sm flex-col items-center gap-8 pb-16">
      <header className="flex w-full flex-col items-center gap-4 text-center">
        <div className="relative w-full px-5 pt-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/6141905/pexels-photo-6141905.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt=""
            className="h-36 w-full rounded-3xl object-cover shadow-[0_12px_32px_-12px_rgba(0,0,0,0.6)]"
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://images.pexels.com/photos/2732096/pexels-photo-2732096.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
            className="absolute -bottom-11 left-1/2 h-[5.5rem] w-[5.5rem] -translate-x-1/2 rounded-full border-4 border-site-b-bg object-cover shadow-[0_8px_24px_-8px_rgba(205,163,85,0.4)]"
          />
        </div>
        <h1 className="mt-8 font-display text-2xl text-site-b-fg">[Persona Handle]</h1>
      </header>

      <div className="flex w-full flex-col gap-3 px-5">
        {links.map((link) => (
          <a
            key={link.id}
            href={link.url}
            target="_blank"
            rel="noopener"
            className="w-full rounded-full border border-site-b-accent/30 bg-site-b-surface px-4 py-3 text-center text-sm font-medium tracking-wide text-site-b-fg transition hover:border-site-b-accent hover:bg-white/5"
          >
            {link.label}
          </a>
        ))}
      </div>

      <section className="mt-2 flex w-full flex-col items-center gap-2 px-5 text-center">
        <p className="text-xs text-site-b-muted">Get notified when links change</p>
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
