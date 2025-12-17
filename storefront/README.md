Kanbulo MVP storefront – a headless Shopify-ready Next.js app focused on the \"Tenderness\" UX. The UI uses warm palettes, eased interactions, and compliant language to keep operational details behind the velvet curtain.

## Getting Started

Install dependencies then start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the experience by modifying `app/page.tsx` or the product data in `data/products.ts`. The page auto-updates as you edit the file.

### Journal (Shopify Blog)

The `/journal` and `/journal/[handle]` routes fetch from the Shopify Storefront API when credentials are provided, falling back to local seed stories otherwise.

Set these env variables for live Shopify content:

```
SHOPIFY_STORE_DOMAIN=<your-store>.myshopify.com
SHOPIFY_STOREFRONT_TOKEN=<storefront-access-token>
SHOPIFY_STOREFRONT_API_VERSION=2024-10
SHOPIFY_JOURNAL_HANDLE=kanbulo-journal
NEXT_PUBLIC_SITE_URL=https://your-site.example
```

### Gifting

`/cart` simulates gift message + keepsake box cart attributes and builds the Printful notes string. Message length is capped at 250 characters.

## Testing & linting

```bash
npm run lint
npm test
```

## Design notes

- Tailwind CSS v4 with inline theme tokens (rose, sage, amber, coffee palette).
- ThemeContext enforces typography and motion defaults.
- Badge + status components translate Shopify tags/inventory into brand-compliant language.
- PDP route at `/products/[handle]` demonstrates the \"Why it matters\" layout without exposing vendor terms.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
