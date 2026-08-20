# Local Trades SEO conventions

Local Trades follows the same SEO architecture and publishing discipline as GetTradesmen.uk, adapted to static HTML on Cloudflare.

## Canonical URL rules

- Production origin: `https://getlocaltrades.uk`
- Non-www is canonical.
- HTTPS is canonical.
- `/index.html` redirects to `/`.
- Future extensionless pages use trailing slashes, for example `/plumber/` and `/plumber/birmingham/`.
- Every indexable HTML page must contain one self-referencing absolute canonical URL.

## Metadata required on every indexable page

Every page must have a unique:

- `<title>`
- meta description
- canonical URL
- `robots` directive: `index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1`
- Open Graph title, description, URL, locale and large image
- Twitter/X large-image card metadata

Social images live under `/og/`. The homepage uses `/og/home.jpg`. Future trade pages should use trade-specific images such as `/og/plumber.jpg`, `/og/electrician.jpg`, and so on.

## Structured data

The homepage carries an `Organization` + `WebSite` JSON-LD graph.

Future trade-category pages should mirror GetTradesmen with:

- `Organization`
- `WebSite`
- `Service`
- `WebPage`
- `BreadcrumbList`

Future local trade pages should use the same graph, with `Service.areaServed` describing the real city/region represented by the page.

Visible breadcrumbs and BreadcrumbList structured data must agree exactly.

## Future URL structure

Preferred structure:

- `/plumber/`
- `/electrician/`
- `/roofer/`
- `/handyman/`
- `/painter-decorator/`
- `/flooring-fitter/`
- `/builder/`
- `/gardener/`
- `/plumber/birmingham/`
- `/electrician/manchester/`

Do not publish thin doorway pages. Location pages should only be added when they contain genuinely useful, differentiated local content and a clear search intent.

## Sitemap and robots

- `robots.txt` must point to `https://getlocaltrades.uk/sitemap.xml`.
- Only canonical, indexable, published URLs belong in the sitemap.
- Update `sitemap.xml` whenever an SEO page is published or removed.

## Affiliate/iframe SEO rule

The MyJobQuote iframe is a conversion mechanism, not the SEO content of the page. Each SEO landing page must contain useful first-party HTML content outside the iframe. The iframe can be preselected by trade, but it must not be relied upon for indexable page relevance.
