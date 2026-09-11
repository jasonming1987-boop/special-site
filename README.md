# Creator storefront — prototype

This is a **functional prototype**, not the production build. It exists so the client
can see how the two-site model behaves before any real names, domains, or accounts
exist. See `creatorstorefrontbrief.md` for the full project brief this implements.

## What's real vs. mocked

| Piece | In this prototype | In production |
|---|---|---|
| Site A / Site B split | Two route paths (`/site-a`, `/site-b`) in one Next.js app | Two separate repos, two separate domains, two separate hosting accounts (Section 7) |
| Database | In-memory arrays (`src/lib/data/mock-store.ts`) | Supabase, behind the same `DataAdapter` interface — swap one file |
| Email sending | Logged to the server console, never sent | Resend (clean stream) + SendX/YNOT (links stream), behind an adapter |
| Click tracking (`/go/[slug]`) | Real — logs to the in-memory store, actually redirects | Same logic, writes to `click_events` table instead |
| Brand name / domain | Placeholder `[Brand Name]` / `[Persona Handle]` | Pending client decision (open item, brief Section 6) |
| Affiliate/merch links | Placeholder URLs | Real destinations once affiliate programs are approved and Fourthwall (or fallback) is set up |

## Running it

```bash
npm install
npm run dev
```

Then open `http://localhost:3000` — it lands on a demo index explaining the split,
with links into `/site-a` and `/site-b`. Click a pick or submit a signup form and
watch the terminal: both are logged so you can see the data model actually working.

## What to look at

- `src/lib/types.ts` — the data model from the brief (`picks`, `click_events`,
  `subscribers`, `collections`) as TypeScript types.
- `src/lib/data/adapter.ts` — the interface every backend (mock now, Supabase later)
  implements. UI code never imports Supabase directly, so swapping backends later
  doesn't touch a single page or component.
- `src/components/PickCard.tsx` — affiliate disclosure is part of the card, and the
  Amazon-safe "no cloaking" toggle (`useRedirect`) is respected per link.
- `src/app/go/[slug]/route.ts` — the click-tracking redirect.
- `src/app/site-a/` — the clean site. Note the placeholder metadata title/description:
  that's what renders as the link preview in an Instagram bio or DM.
- `src/app/site-b/` — the link hub. No affiliate disclosure needed here, no merch,
  just links plus a lightweight opt-in tagged to the "links" subscriber stream.
