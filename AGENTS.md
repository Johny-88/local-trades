# Local Trades engineering rules

Local Trades is a separate UK homeowner referral website. GetTradesmen.uk may be used only as a structural and design-quality reference: keep the strong Next.js App Router architecture, SEO helpers, schema approach, breadcrumbs, responsive layout standards and clean quote-flow patterns, but do not copy GetTradesmen service categories, keyword targets, location-page strategy or category content into Local Trades.

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

The site is intentionally private from search engines at present. Keep the global robots disallow, root noindex/nofollow metadata, site-wide `X-Robots-Tag`, and empty sitemap until the user explicitly asks to make the site indexable. Do not silently restore crawling or indexing while building pages.

Do not reintroduce deleted local trade/location route machinery, old location registries, old category-page generators, old trade-specific OG assets, Cloudflare Workers, HTMLRewriter, wrangler, a static public/index.html homepage, or injected iframe JavaScript/CSS.
