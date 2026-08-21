# Local Trades

Local Trades is a UK homeowner information and referral website built with Next.js App Router and TypeScript.

## Current focus

The homepage is built around fourteen dedicated local service categories: removal companies, cleaners, tilers, heating engineers, locksmiths, pest controllers, tree surgeons, architects, plasterers, kitchen fitters, bathroom specialists, drainage specialists, driveway specialists and window specialists. Each category opens the MyJobQuote hosted iframe with the matching category ID already selected. An `Other` option opens the unrestricted service finder.

## Architecture

The project uses reusable components, SEO/schema helpers, information/legal pages, dynamic robots and sitemap outputs, trailing-slash canonical URLs and a Vercel deployment target. Local Trades has its own service set, copy, branding and hosted-iframe flow.

The site is currently intentionally blocked from crawling and indexing while it is being rebuilt.

## Development

```bash
npm install
npm run dev
```

Production target: Vercel.
