# Local Trades engineering rules

GetTradesmen.uk is the structural reference for this repository. Keep the same Next.js App Router architecture, SEO helpers, schema approach, breadcrumbs, sitemap/robots conventions, shared page templates and route conventions. Local Trades keeps its own branding, copy and MyJobQuote hosted-iframe flow.

Local SEO pages must not be produced by swapping only the place name. Before a new trade × location route is added to `PUBLISHED_LOCAL_PAGES`, add a researched location profile in `src/lib/localAreaContent.ts` and a genuinely location-specific `tradeContent` entry for that trade. Use useful local facts or constraints that can materially affect the job — for example housing type, rental context, conservation/Article 4 controls, protected trees, access, or other authoritative local information — and cite the primary source on the page. Keep generic trade guidance in the shared page structure; keep location × trade substance in the local content layer.

Do not reintroduce Cloudflare Workers, HTMLRewriter, wrangler, a static public/index.html homepage, or injected iframe JavaScript/CSS.
