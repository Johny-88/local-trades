import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { TradeFinderForm } from "./TradeFinderForm";
import type { TradeCategory } from "../lib/tradeCategoryContent";
import { createServicePageStructuredData, type BreadcrumbItem } from "../lib/schema";
import { LOCAL_LOCATIONS, PUBLISHED_LOCAL_PAGES, localPagePath } from "../lib/localPages";

export function TradeCategoryLandingPage({ trade }: { trade: TradeCategory }) {
  const path = `/${trade.slug}/`;
  const breadcrumbs: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: trade.plural, href: path },
  ];
  const schema = createServicePageStructuredData({
    canonicalPath: path,
    title: `Find Local ${trade.plural} Near You | Local Trades`,
    description: trade.hero,
    serviceName: `Local ${trade.name} quote requests`,
    serviceType: trade.name,
    breadcrumbItems: breadcrumbs,
  });
  const locationPages = PUBLISHED_LOCAL_PAGES.filter((page) => page.trade === trade.slug);

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs items={breadcrumbs} />
      <main className="local-trade-page">
        <section className="seo-hero">
          <div className="wrap narrow">
            <span className="smallcap">Local {trade.plural}</span>
            <h1>Find local {trade.plural.toLowerCase()} near you</h1>
            <p>{trade.hero}</p>
          </div>
        </section>

        <section className="seo-section soft">
          <div className="wrap">
            <div className="intro">
              <span className="smallcap">Start your quote request</span>
              <h2>Tell us what needs doing</h2>
              <p>{trade.name} is already selected when you open the quote form.</p>
            </div>
            <TradeFinderForm initialTradeSlug={trade.slug} />
          </div>
        </section>

        <section className="seo-section">
          <div className="wrap narrow">
            <span className="smallcap">Common jobs</span>
            <h2>Jobs a local {trade.name.toLowerCase()} can help with</h2>
            <div className="job-grid">
              {trade.commonJobs.map((job) => (
                <article className="content-card" key={job}>
                  <h3>{job}</h3>
                  <p>Describe the work, add useful details and compare the local tradespeople who respond.</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {locationPages.length > 0 ? (
          <section className="seo-section soft" id="locations" aria-labelledby="locations-title">
            <div className="wrap narrow">
              <span className="smallcap">Local guides</span>
              <h2 id="locations-title">Find {trade.plural.toLowerCase()} by location</h2>
              <p>Explore the Local Trades city guides that are currently published for {trade.plural.toLowerCase()}.</p>
              <div className="area-cloud" aria-label={`${trade.plural} location guides`}>
                {locationPages.map((page) => (
                  <a className="area-pill" href={localPagePath(page.trade, page.city)} key={page.city}>
                    {LOCAL_LOCATIONS[page.city].name}
                  </a>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </main>
    </>
  );
}
