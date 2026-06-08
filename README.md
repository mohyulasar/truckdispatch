# Global Dispatch Services

Marketing website for **Global Dispatch Services** — a truck dispatch service for owner-operators and small fleets.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- React Hook Form + Zod
- Resend (contact form emails)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.example` to `.env.local` and fill in:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for sending emails |
| `CONTACT_EMAIL` | Inbox for quote request notifications |
| `RESEND_FROM_EMAIL` | Verified sender address in Resend |

Without `RESEND_API_KEY`, form submissions log to the server console (dev mode) and still return success.

## Pages

- `/` — Home
- `/services` — Dispatch services
- `/how-it-works` — Onboarding process
- `/pricing` — Pricing and comparison
- `/about` — About the company
- `/faq` — Frequently asked questions
- `/contact` — Quote request form
- `/privacy` — Privacy policy
- `/terms` — Terms of service

## Customization

Update business info, phone, email, and copy in [`lib/constants.ts`](lib/constants.ts).

## Deploy

Deploy to [Vercel](https://vercel.com) and set environment variables in the project settings. Connect your domain (`globaldispatchservices.com`).

```bash
npm run build
```

## License

Private — Global Dispatch Services.
