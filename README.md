# Dawa Lucknow

A production-oriented Next.js App Router website for a Lucknow-focused medicine and healthcare essentials enquiry flow. The app is WhatsApp-first, prescription-aware, and intentionally conservative about operational claims until real business details are configured.

## Tech Stack

- Next.js 16 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React
- React Hook Form
- Zod
- Optional Supabase client setup

## Mac Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

For a production check:

```bash
npm run lint
npm run build
npm run start
```

## Environment Variables

Configure WhatsApp before launch:

```bash
NEXT_PUBLIC_WHATSAPP_NUMBER=919876543210
```

Use the India country code and digits only. If the value remains `91XXXXXXXXXX`, WhatsApp buttons show a setup message instead of opening an invalid link.

Optional Supabase values:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
```

Never expose a service-role key in client-side code.

## Editable Business Configuration

- Brand, contact placeholders, WhatsApp number, footer links: `src/config/site.ts`
- Demo delivery localities and verified-coverage flag: `src/config/delivery-areas.ts`
- Demo products and categories: `src/data/products.ts`
- Demo testimonials: `src/data/testimonials.ts`
- FAQs: `src/data/faqs.ts`

## Replacing Demo Data

The product catalogue has been populated from `[June 26 Updated] DRUGS and OTC samples.xlsx`. Before launch, verify product details, current pricing, real availability rules, image rights, and supplier/licence information. Prescription medicines must remain gated behind prescription verification and applicable legal requirements.

Delivery locality cards are illustrative. Keep `IS_OPERATIONAL_DATA_VERIFIED = false` until actual service areas are verified. When verified coverage exists, update the locality dataset and messaging accordingly.

## Routes

- `/`
- `/products`
- `/products/[slug]`
- `/categories/[slug]`
- `/cart`
- `/about`
- `/contact`
- `/privacy`
- `/terms`
- `/shipping`
- `/returns`

## Still Required Before Real Launch

- Verified business WhatsApp number
- Verified business email and address, if displayed
- Pharmacy licence and licensed fulfilment details
- Real product catalogue and stock source
- Verified service areas, delivery charges, and delivery policy
- Authentic customer testimonials with permission
- Privacy/legal review for production use
# dawa-24-7
