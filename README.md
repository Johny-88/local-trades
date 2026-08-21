# Local Trades

Local Trades is a standalone UK homeowner information and referral website built with Next.js App Router and TypeScript.

## Current focus

The homepage is built around fourteen dedicated local service categories: removal companies, cleaners, tilers, heating engineers, locksmiths, pest controllers, tree surgeons, architects, plasterers, kitchen fitters, bathroom specialists, drainage specialists, driveway specialists and window specialists. Each category opens the MyJobQuote hosted iframe with the matching category ID already selected. An `Other` option opens the unrestricted service finder.

The current project does not use the previously deleted trade/location routes or their old category and location content.

## SEO architecture

Local Trades is intended to be crawlable and indexable. The project uses:

- the non-www canonical origin `https://getlocaltrades.uk`
- trailing-slash URLs
- shared metadata helpers for titles, descriptions, self-canonicals, robots directives, Open Graph and Twitter cards
- a dedicated OG path for every Local Trades service category
- Organization, WebSite, WebPage, Service and BreadcrumbList structured-data helpers
- crawlable breadcrumbs on SEO information and future landing pages
- a generated `robots.txt` that allows crawling and declares the sitemap
- a generated `sitemap.xml` containing only pages that actually exist and are ready to index
- publication registries for future service and service-by-location pages
- internal-linking and local-content rules for future SEO pages

Future category and location pages should use the shared SEO helpers and publication registries rather than implementing metadata, schema or sitemap behavior independently.

## Development

```bash
npm install
npm run dev
```

Production target: Vercel.
