# Local Trades engineering rules

Local Trades is a separate UK homeowner referral website. GetTradesmen.uk may be used as a structural and SEO-quality reference: preserve the strong Next.js App Router architecture, metadata helpers, schema approach, breadcrumbs, sitemap/robots conventions, responsive layout standards, internal-linking discipline and clean quote-flow patterns, but do not copy GetTradesmen service categories, keyword targets or category content into Local Trades.

## Locked Local Trades homepage categories

The homepage has exactly fourteen direct MyJobQuote service categories, plus an `Other` option that opens the unrestricted hosted iframe:

- Removal Companies — MyJobQuote category 321
- Cleaners — 52
- Tilers — 229
- Heating Engineers — 107
- Locksmiths — 124
- Pest Controllers — 150
- Tree Surgeons — 249
- Architects — 268
- Plasterers — 153
- Kitchen Fitters — 116
- Bathroom Specialists — 8
- Drainage Specialists — 56
- Driveway Specialists — 59
- Window Specialists — 254

These fourteen categories define the Local Trades search market. Do not introduce categories used by GetTradesmen into Local Trades content, metadata, routes, internal links, structured data or SEO pages unless the user explicitly changes this strategy.

Each direct homepage card must open the MyJobQuote hosted iframe with its exact category ID already selected. `Other` must open the base iframe without a category parameter so the homeowner can use the complete service finder.

Keep Local Trades branding, colours and visual language independent while preserving the current design system: warm cream background, deep green, terracotta accent, serif display headings and clean white service cards.

## Locked SEO architecture

Local Trades is now intended to be crawlable and indexable. Keep the following site-wide unless the user explicitly asks to disable indexing again:

- non-www canonical origin: `https://getlocaltrades.uk`
- `trailingSlash: true`
- crawl allowed in `robots.ts` with the sitemap declared
- no site-wide `X-Robots-Tag` noindex header
- no root noindex/nofollow metadata
- `createPageMetadata()` on every indexable page for title, description, self-canonical, index/follow directives, Open Graph and Twitter metadata
- a dedicated service OG path for each of the fourteen Local Trades categories; location pages inherit the OG image for their parent service
- JSON-LD using the shared Organization/WebSite graph and the appropriate WebPage/Service/BreadcrumbList graph for category and local pages
- crawlable breadcrumb links on SEO landing pages
- clean internal links between relevant category/location pages once they are published
- every published indexable page must be included in `sitemap.xml`; use `PUBLISHED_SERVICE_PAGES` and `PUBLISHED_LOCAL_SERVICE_PAGES` in `src/lib/servicePages.ts`
- do not add a route to those published registries before the page exists and its content is ready to index

For future category and location pages, use `servicePagePath()` / `localServicePagePath()`, `createPageMetadata()`, `createServiceCategoryPageStructuredData()` / `createLocalServicePageStructuredData()`, and the published-page registry rather than implementing SEO ad hoc in individual pages.

Future location pages must contain substantial, useful, genuinely researched local information and service-specific local context. Shared layout and shared factual service information are fine, but do not create thin city-name substitutions, doorway pages or fake local filler.

Do not reintroduce the deleted GetTradesmen trade/location routes, old GetTradesmen category registries, old GetTradesmen service keywords, Cloudflare Workers, HTMLRewriter, wrangler, a static public/index.html homepage, or injected iframe JavaScript/CSS.
