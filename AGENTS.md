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

## Scalable local-page pattern

The Birmingham Removal Companies page is the first pilot for the new local-service architecture. Until the user approves a different pattern, future service × location pages should use the shared `src/app/[service]/[city]/page.tsx` route and `LocalServiceLandingPage` rather than creating hundreds of hand-coded route components.

Store the service/location content separately from the template. A page must not be added to `PUBLISHED_LOCAL_SERVICE_PAGES` until its content and research are complete.

Every future location page must include meaningful information that is genuinely specific to that location and useful for that particular service. As a minimum, research at least one or two independently localisable topics from authoritative sources — for example local housing/property characteristics, council rules, parking/access, conservation/planning constraints, licensing, protected trees, local infrastructure or another service-relevant factor. Explain why the local fact matters to the homeowner's job; do not paste statistics merely to make the page look unique.

Price guidance must be current, sourced and presented as indicative rather than a guaranteed local quote. Prefer authoritative or established UK sources, state when the guidance was checked, and explain the major factors that can make the actual local price different.

Shared factual service sections, layout and quote flow are fine. Do not create thin city-name substitutions, doorway pages, invented local expertise, fake neighbourhood claims, unsupported local prices or generic filler presented as local research.

Do not reintroduce the deleted GetTradesmen trade/location routes, old GetTradesmen category registries, old GetTradesmen service keywords, Cloudflare Workers, HTMLRewriter, wrangler, a static public/index.html homepage, or injected iframe JavaScript/CSS.
