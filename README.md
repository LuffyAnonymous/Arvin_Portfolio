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
- **Contact form delivery** — `app/api/contact/route.ts` sends a notification email via [Resend](https://resend.com) when someone submits the form. To turn it on:
  1. Sign up at resend.com (free) using `arvinphilippoliga@gmail.com` — no domain setup needed, since we send *to* that same address using Resend's shared test sender.
  2. Create an API key in the Resend dashboard.
  3. Add it as an environment variable named `RESEND_API_KEY`:
     - Locally: create `.env.local` with `RESEND_API_KEY=re_xxx`.
     - On Vercel: Project → Settings → Environment Variables → add `RESEND_API_KEY` for Production (and Preview/Development if you want it there too), then redeploy.
  4. Without the key set, submissions still validate correctly but nothing gets sent — a warning is logged instead, so local dev without Resend configured won't break.
  5. Once a real domain is attached, switch the `from` address in `sendNotification()` (currently `onboarding@resend.dev`) to something on that domain after verifying it in Resend, so you can send to any address, not just your own.

## Structure

- `app/page.tsx` — assembles the home page sections
- `app/projects/[slug]/page.tsx` — project case-study pages
- `components/sections/` — one component per homepage section
- `components/ui/` — shared primitives (buttons, tags, the workflow diagram)
- `lib/site.ts` — name, role, contact links, nav
- `lib/projects.ts` — project case-study content
