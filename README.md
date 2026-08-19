# Arvin Philip Poliga — Portfolio

Freelance portfolio for an automation & data engineer based in Dubai, UAE. Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Before going live

- **Site URL** — set `NEXT_PUBLIC_SITE_URL` in a `.env.local` file to your real domain once you have one. It's used for canonical/OpenGraph metadata and the sitemap.
- **TODO: Contact form delivery** — `app/api/contact/route.ts` validates submissions (name, email, company, what to automate, current process, frequency) but doesn't send them anywhere yet. Wire it up to an email provider (e.g. Resend, Postmark) or a CRM before relying on it in production.

## Structure

- `app/page.tsx` — assembles the home page sections
- `app/projects/[slug]/page.tsx` — project case-study pages
- `components/sections/` — one component per homepage section
- `components/ui/` — shared primitives (buttons, tags, the workflow diagram)
- `lib/site.ts` — name, role, contact links, nav
- `lib/projects.ts` — project case-study content
