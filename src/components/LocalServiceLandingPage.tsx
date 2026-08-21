import type { ReactNode } from "react";
import type { LocalServicePageContent } from "../lib/localServiceContent";
import { serviceCategories } from "../lib/serviceCategoryContent";
import {
  PUBLISHED_LOCAL_SERVICE_PAGES,
  localServicePagePath,
} from "../lib/servicePages";
import type { BreadcrumbItem } from "../lib/schema";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { LocalServiceLeadCard } from "./LocalServiceLeadCard";

type LocalServiceLandingPageProps = {
  content: LocalServicePageContent;
  breadcrumbItems: BreadcrumbItem[];
  structuredData: unknown;
};

function LineIcon({ paths, size = 24 }: { paths: readonly string[]; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths.map((d) => <path key={d} d={d} />)}
    </svg>
  );
}

function TrustItem({ children, paths }: { children: ReactNode; paths: readonly string[] }) {
  return (
    <div className="trust-item">
      <span className="trust-icon" aria-hidden="true"><LineIcon size={19} paths={paths} /></span>
      {children}
    </div>
  );
}

export function LocalServiceLandingPage({ content, breadcrumbItems, structuredData }: LocalServiceLandingPageProps) {
  const locationServices = serviceCategories.filter((service) =>
    PUBLISHED_LOCAL_SERVICE_PAGES.some(
      (page) => page.city === content.locationSlug && page.service === service.slug,
    ),
  );

  return (
    <>
      <JsonLd data={structuredData} />
      <div className="local-trade-page">
        <Breadcrumbs items={breadcrumbItems} />
        <main id="top">
          <section className="hero" aria-labelledby="hero-title">
            <div className="container hero-grid">
              <div style={{ textAlign: "center" }}>
                <p
                  className="eyebrow"
                  style={{ display: "flex", width: "fit-content", margin: "0 auto 18px" }}
                >
                  {content.hero.eyebrow}
                </p>
                <h1 id="hero-title" style={{ marginInline: "auto" }}>{content.hero.title}</h1>
                <p className="hero-copy" style={{ margin: "22px auto 0" }}>{content.hero.copy}</p>
              </div>

              <LocalServiceLeadCard
                serviceSlug={content.serviceSlug}
                serviceName={content.serviceName}
                servicePlural={content.servicePlural}
                locationName={content.locationName}
                buttonLabel={content.cta.buttonLabel}
              />
            </div>
          </section>

          <div className="trust-strip" aria-label="Service highlights">
            <div className="container trust-items">
              <TrustItem paths={["M20 6 9 17l-5-5"]}>Genuine verified customer reviews</TrustItem>
              <TrustItem paths={["M12 21s7-4.3 7-10a7 7 0 1 0-14 0c0 5.7 7 10 7 10Z", "M12 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4"]}>Up to 3 local responses</TrustItem>
              <TrustItem paths={["M4 20h16", "M6 20V10l6-5 6 5v10", "M9 14h6"]}>You choose who to hire</TrustItem>
            </div>
          </div>

          <section className="answer-strip" aria-labelledby="near-me-answer">
            <div className="container answer-box">
              <div className="answer-icon"><LineIcon paths={["M18 18l3 3", "M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14"]} /></div>
              <div style={{ textAlign: "center" }}>
                <h2 id="near-me-answer">{content.answer.title}</h2>
                <p style={{ margin: "8px auto 0" }}>{content.answer.copy}</p>
              </div>
            </div>
          </section>

          <section className="section" id="services" aria-labelledby="jobs-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">Common {content.serviceName.toLowerCase()} services</p>
                <h2 id="jobs-title">What can {content.servicePlural.toLowerCase()} in {content.locationName} help with?</h2>
                <p>Choose a professional whose experience matches the scale and practical requirements of your job.</p>
              </div>
              <div className="job-grid">
                {content.jobs.map((job) => (
                  <article className="job-card" key={job.title}>
                    <div className="job-icon"><LineIcon paths={job.paths} /></div>
                    <h3>{job.title}</h3>
                    <p>{job.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-soft" id="costs" aria-labelledby="cost-title">
            <div className="container two-col">
              <div className="cost-panel">
                <h2 id="cost-title">{content.costs.title}</h2>
                <p>{content.costs.intro}</p>
                <div className="price-row">
                  {content.costs.prices.map((price) => (
                    <div className="price-card" key={price.label}>
                      <strong>{price.value}</strong>
                      <span>{price.label}</span>
                    </div>
                  ))}
                </div>
                <p className="source-note">{content.costs.sourceNote}</p>
              </div>

              <div className="content-card">
                <p className="eyebrow">Compare like for like</p>
                <h2>{content.costs.quoteTitle}</h2>
                <p>{content.costs.quoteIntro}</p>
                <ul className="bullet-list">
                  {content.costs.quoteTips.map((tip) => (
                    <li key={tip}><span className="tick" aria-hidden="true">✓</span><span>{tip}</span></li>
                  ))}
                </ul>
                <p style={{ marginTop: 22, fontSize: ".84rem" }}>
                  Cost sources: <a href="https://www.myjobquote.co.uk/costs/removals-cost">MyJobQuote 2026 removal cost guide</a> and <a href="https://www.checkatrade.com/blog/cost-guides/house-removal-costs/">Checkatrade 2026 removal cost guide</a>.
                </p>
              </div>
            </div>
          </section>

          <section className="section" id={`${content.locationSlug}-context`} aria-labelledby="local-context-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">{content.localContext.eyebrow}</p>
                <h2 id="local-context-title">{content.localContext.title}</h2>
                <p>{content.localContext.intro}</p>
              </div>
              <div className="two-col">
                {content.localContext.items.map((item) => (
                  <article className="job-card" key={item.title}>
                    <div className="job-icon"><LineIcon paths={["M12 21s7-4.3 7-10a7 7 0 1 0-14 0c0 5.7 7 10 7 10Z", "M12 9a2 2 0 1 0 0 4 2 2 0 0 0 0-4"]} /></div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                    <p style={{ marginTop: 14, fontSize: ".8rem" }}><a href={item.source.url}>Source: {item.source.label}</a></p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-soft" id="areas" aria-labelledby="areas-title">
            <div className="container local-grid">
              <div style={{ textAlign: "center" }}>
                <p className="eyebrow">Local to {content.locationName}</p>
                <h2 id="areas-title">{content.areas.title}</h2>
                <p className="local-muted">{content.areas.intro}</p>
                <div className="area-cloud" style={{ justifyContent: "center" }} aria-label={`${content.locationName} areas`}>
                  {content.areas.items.map((area) => <span className="area-pill" key={area}>{area}</span>)}
                </div>
              </div>
              <div className="content-card">
                <h2>{content.areas.sideTitle}</h2>
                <p>{content.areas.sideCopy}</p>
                <div className="local-note"><strong>{content.areas.noteLead}</strong> {content.areas.noteText}</div>
              </div>
            </div>
          </section>

          <section className="section" id="how-it-works" aria-labelledby="how-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">How it works</p>
                <h2 id="how-title">{content.how.title}</h2>
                <p>{content.how.intro}</p>
              </div>
              <div className="steps">
                {content.how.steps.map((step) => (
                  <article className="step" key={step.title}>
                    <div className="step-number" aria-hidden="true" />
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-soft" aria-labelledby="choose-title">
            <div className="container choice-grid">
              <div style={{ textAlign: "center" }}>
                <p className="eyebrow">Before you hire</p>
                <h2 id="choose-title" className="choice-title">{content.choose.title}</h2>
                <p className="local-muted">{content.choose.intro}</p>
              </div>
              <div className="benefit-list">
                {content.choose.benefits.map((benefit) => (
                  <div className="benefit" key={benefit.title}>
                    <div className="benefit-icon"><LineIcon size={22} paths={benefit.paths} /></div>
                    <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section" id="faq" aria-labelledby="faq-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">Questions</p>
                <h2 id="faq-title">{content.servicePlural} in {content.locationName}: common questions</h2>
                <p>Useful answers before you post the job.</p>
              </div>
              <div className="faq-list">
                {content.faq.map(([question, answer]) => (
                  <details key={question}>
                    <summary>{question}</summary>
                    <div className="faq-answer"><p>{answer}</p></div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="cta-band">
            <div className="container">
              <div className="cta-box">
                <div>
                  <h2>{content.cta.title}</h2>
                  <p>{content.cta.copy}</p>
                </div>
                <LocalServiceLeadCard
                  serviceSlug={content.serviceSlug}
                  serviceName={content.serviceName}
                  servicePlural={content.servicePlural}
                  locationName={content.locationName}
                  buttonLabel={content.cta.buttonLabel}
                  compact
                />
              </div>
            </div>
          </section>

          <section className="section section-soft" aria-labelledby="location-services-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">More local specialists</p>
                <h2 id="location-services-title">Explore services in {content.locationName}</h2>
                <p>Browse Local Trades service pages available for {content.locationName}.</p>
              </div>
              <nav
                className="area-cloud"
                style={{ justifyContent: "center" }}
                aria-label={`Local Trades services in ${content.locationName}`}
              >
                {locationServices.map((service) => {
                  const href = localServicePagePath(service.slug, content.locationSlug);
                  const current = service.slug === content.serviceSlug;
                  return (
                    <a
                      className="area-pill"
                      href={href}
                      key={service.slug}
                      aria-current={current ? "page" : undefined}
                      style={{
                        textDecoration: "none",
                        background: current ? "#294c3f" : undefined,
                        color: current ? "#fff" : undefined,
                        borderColor: current ? "#294c3f" : undefined,
                      }}
                    >
                      {service.plural} in {content.locationName}
                    </a>
                  );
                })}
              </nav>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
