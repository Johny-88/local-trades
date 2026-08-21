import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { LocalTradeFinderForm } from "./LocalTradeFinderForm";
import type { TradeSlug } from "../lib/affiliateLinks";
import { getLocalAreaProfile } from "../lib/localAreaRegistry";
import {
  LOCAL_TRADES,
  PUBLISHED_LOCAL_PAGES,
  localPagePath,
  type LocalCityKey,
} from "../lib/localPages";
import { createLocalTradePageStructuredData, type BreadcrumbItem } from "../lib/schema";

export type LocalCityPageContent = {
  trade: TradeSlug;
  tradeName: string;
  tradePlural: string;
  breadcrumbLabel: string;
  article: "a" | "an";
  city: string;
  region: string;
  locationKey: LocalCityKey;
  canonicalPath: string;
  title: string;
  webPageDescription: string;
  serviceType: string;
  heroCopy: string;
  workLabel: string;
  localContextHeading: string;
  localContextParagraphs: ReadonlyArray<string>;
  areaIntro: string;
  areaNoteHeading: string;
  areaNote: string;
  jobsHeading: string;
  jobsIntro: string;
  jobs: ReadonlyArray<{ title: string; text: string }>;
  costHeading: string;
  costIntro: string;
  prices: ReadonlyArray<{ value: string; label: string }>;
  sourceNote: string;
  quoteHeading: string;
  quoteIntro: string;
  quoteTips: ReadonlyArray<string>;
  benefits: ReadonlyArray<{ title: string; text: string }>;
  specialists: ReadonlyArray<{ href: string; label: string }>;
  faqIntro: string;
  faqs: ReadonlyArray<{ question: string; answer: string }>;
};

export function LocalTradeLandingPage({ content }: { content: LocalCityPageContent }) {
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: content.breadcrumbLabel, href: `/${content.trade}/` },
    { name: content.city, href: content.canonicalPath },
  ];

  const structuredData = createLocalTradePageStructuredData({
    canonicalPath: content.canonicalPath,
    title: content.title,
    webPageDescription: content.webPageDescription,
    serviceName: `Find ${content.article} ${content.tradeName} in ${content.city}`,
    serviceType: content.serviceType,
    city: content.city,
    region: content.region,
    breadcrumbItems,
  });

  const findAnchor = `find-${content.trade === "painter-decorator" ? "decorator" : content.trade}`;
  const areaProfile = getLocalAreaProfile(content.locationKey);
  const localTradeContent = areaProfile?.tradeContent[content.trade];
  const publishedCitySpecialists = PUBLISHED_LOCAL_PAGES
    .filter((page) => page.city === content.locationKey && page.trade !== content.trade)
    .map((page) => ({
      href: localPagePath(page.trade, page.city),
      label: `Find ${LOCAL_TRADES[page.trade].footerLabel.toLowerCase()} in ${content.city}`,
    }));
  const specialists = publishedCitySpecialists.length > 0
    ? publishedCitySpecialists
    : content.specialists;

  return (
    <>
      <JsonLd data={structuredData} />
      <div className="local-trade-page">
        <Breadcrumbs items={breadcrumbItems} />

        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="container hero-grid">
              <div>
                <p className="eyebrow">{content.tradeName} {content.city}</p>
                <h1 id="hero-title">Find {content.article} {content.tradeName.toLowerCase()} in {content.city}</h1>
                <p className="hero-copy">{content.heroCopy}</p>
              </div>

              <LocalTradeFinderForm
                trade={content.trade}
                tradeName={content.tradeName}
                containerId={findAnchor}
                buttonLabel="Post your job now"
              />
            </div>
          </section>

          <div className="trust-strip" aria-label="Service highlights">
            <div className="container trust-items">
              <div className="trust-item">
                <span className="trust-icon" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                </span>
                Identity-verified partner profiles
              </div>
              <div className="trust-item">
                <span className="trust-icon" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 21s7-4.3 7-10a7 7 0 1 0-14 0c0 5.7 7 10 7 10Z" /><circle cx="12" cy="11" r="2" /></svg>
                </span>
                Up to 3 interested local trades can respond
              </div>
              <div className="trust-item">
                <span className="trust-icon" aria-hidden="true">
                  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16M6 20V10l6-5 6 5v10M9 14h6" /></svg>
                </span>
                You decide who, if anyone, to hire
              </div>
            </div>
          </div>

          <section className="answer-strip" aria-labelledby="near-me-answer">
            <div className="container answer-box">
              <div className="answer-icon" aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg>
              </div>
              <div>
                <h2 id="near-me-answer">Looking for {content.article} {content.tradeName.toLowerCase()} near you in {content.city}?</h2>
                <p>
                  Open the job form, add the postcode where the work needs doing and describe the {content.workLabel}. Relevant local {content.tradePlural.toLowerCase()} can review the request, and up to three who are interested can get in touch. Once they do, you can view their profiles and verified customer reviews before deciding how to proceed.
                </p>
              </div>
            </div>
          </section>

          {areaProfile ? (
            <section className="section section-soft" id="local-context" aria-labelledby="local-context-title">
              <div className="container two-col">
                <div className="content-card">
                  <p className="eyebrow">{content.city} property context</p>
                  <h2 id="local-context-title">{content.localContextHeading}</h2>
                  {content.localContextParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  <p className="source-note">
                    Housing context: <a href={areaProfile.housingSourceUrl} target="_blank" rel="noreferrer">{areaProfile.housingSourceLabel}</a>.
                  </p>
                </div>

                <div className="cost-panel">
                  <p className="eyebrow">Local housing snapshot</p>
                  <h2>What {content.city}&apos;s housing mix looks like</h2>
                  <p>{areaProfile.housingSummary}</p>
                  <div className="price-row">
                    {areaProfile.housingFacts.map((fact) => (
                      <div className="price-card" key={`${fact.value}-${fact.label}`}>
                        <strong>{fact.value}</strong>
                        <span>{fact.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          <section className="section" id={`${content.trade}-jobs`} aria-labelledby="jobs-title">
            <div className="container">
              <div className="section-head">
                <p className="eyebrow">Common {content.workLabel}</p>
                <h2 id="jobs-title">{content.jobsHeading}</h2>
                <p>{content.jobsIntro}</p>
              </div>

              <div className="job-grid">
                {content.jobs.map((job) => (
                  <article className="job-card" key={job.title}>
                    <div className="job-icon" aria-hidden="true">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16M6 20V9l6-5 6 5v11" /><path d="M9 14h6" /></svg>
                    </div>
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
                <h2 id="cost-title">{content.costHeading}</h2>
                <p>{content.costIntro}</p>
                <div className="price-row">
                  {content.prices.map((price) => (
                    <div className="price-card" key={`${price.value}-${price.label}`}>
                      <strong>{price.value}</strong>
                      <span>{price.label}</span>
                    </div>
                  ))}
                </div>
                <p className="source-note">{content.sourceNote}</p>
              </div>

              <div className="content-card">
                <p className="eyebrow">Get a useful quote</p>
                <h2>{content.quoteHeading}</h2>
                <p>{content.quoteIntro}</p>
                <ul className="bullet-list">
                  {content.quoteTips.map((tip) => (
                    <li key={tip}><span className="tick" aria-hidden="true">✓</span><span>{tip}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {localTradeContent ? (
            <section className="section" id="local-trade-context" aria-labelledby="local-trade-context-title">
              <div className="container two-col">
                <div className="content-card">
                  <p className="eyebrow">{localTradeContent.eyebrow}</p>
                  <h2 id="local-trade-context-title">{localTradeContent.heading}</h2>
                  <p>{localTradeContent.intro}</p>
                  <div className="benefit-list">
                    {localTradeContent.points.map((point) => (
                      <div className="benefit" key={point.title}>
                        <div className="benefit-icon" aria-hidden="true">
                          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
                        </div>
                        <div><h3>{point.title}</h3><p>{point.text}</p></div>
                      </div>
                    ))}
                  </div>
                  <p className="source-note">
                    Local research:{" "}
                    {localTradeContent.sources.map((source, index) => (
                      <span key={source.url}>
                        {index > 0 ? " · " : ""}
                        <a href={source.url} target="_blank" rel="noreferrer">{source.label}</a>
                      </span>
                    ))}
                    .
                  </p>
                </div>

                <div className="content-card">
                  <p className="eyebrow">Before you post the job</p>
                  <h2>{localTradeContent.checklistHeading}</h2>
                  <p>{localTradeContent.checklistIntro}</p>
                  <ul className="bullet-list">
                    {localTradeContent.checklist.map((item) => (
                      <li key={item}><span className="tick" aria-hidden="true">✓</span><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          ) : null}

          <section className="section" id="areas" aria-labelledby="areas-title">
            <div className="container local-grid">
              <div>
                <p className="eyebrow">Across {content.city}</p>
                <h2 id="areas-title">Find {content.tradePlural.toLowerCase()} covering your part of {content.city}</h2>
                <p className="local-muted">{content.areaIntro}</p>
                {areaProfile ? (
                  <div className="area-cloud" aria-label={`${content.city} areas`}>
                    {areaProfile.areas.map((area) => <span className="area-pill" key={area}>{area}</span>)}
                  </div>
                ) : null}
              </div>

              <div className="content-card">
                <h2>{content.areaNoteHeading}</h2>
                <p>{content.areaNote}</p>
                <div className="local-note">
                  <strong>Use the exact job postcode.</strong> Local coverage depends on the individual tradesperson, the work and current availability.
                  {areaProfile ? <> Area names are based on <a href={areaProfile.areaSourceUrl} target="_blank" rel="noreferrer">{areaProfile.areaSourceLabel}</a>.</> : null}
                </div>
              </div>
            </div>
          </section>

          <section className="section section-soft" id="how-it-works" aria-labelledby="how-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">How it works</p>
                <h2 id="how-title">Post once. Then interested local {content.tradePlural.toLowerCase()} can come to you.</h2>
                <p>There is no need to work through a directory and contact tradespeople one by one. Describe the job once, then see who is interested in doing it.</p>
              </div>

              <div className="steps">
                <article className="step">
                  <div className="step-number" aria-hidden="true" />
                  <h3>Describe the job</h3>
                  <p>Open the form, add the {content.city} postcode and explain the {content.workLabel} clearly enough for a tradesperson to understand the scope.</p>
                </article>
                <article className="step">
                  <div className="step-number" aria-hidden="true" />
                  <h3>Interested trades get in touch</h3>
                  <p>Relevant local {content.tradePlural.toLowerCase()} can review the job, and up to three who are interested can contact you about the work.</p>
                </article>
                <article className="step">
                  <div className="step-number" aria-hidden="true" />
                  <h3>Check profiles, reviews and quotes</h3>
                  <p>Once a tradesperson responds, review their profile and verified customer feedback, discuss the job and compare the quote before deciding. There is no obligation to hire.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="choose-title">
            <div className="container choice-grid">
              <div>
                <p className="eyebrow">Choose with confidence</p>
                <h2 id="choose-title" className="choice-title">What should you check before hiring {content.article} {content.tradeName.toLowerCase()}?</h2>
                <p className="local-muted">Compare relevant experience, the proposed scope and practical details rather than choosing on price alone.</p>
              </div>

              <div className="benefit-list">
                {content.benefits.map((benefit) => (
                  <div className="benefit" key={benefit.title}>
                    <div className="benefit-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
                    <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-soft" aria-labelledby="specialist-title">
            <div className="container specialist-box">
              <p className="eyebrow">Need a different trade?</p>
              <h2 id="specialist-title">Other {content.city} trades that may fit the job</h2>
              <p className="specialist-intro">If the work falls outside this trade, use the most relevant specialist page instead. These {content.city} guides follow the same job-posting flow.</p>
              <div className="specialist-links">
                {specialists.map((specialist) => (
                  <a className="specialist-link" href={specialist.href} key={specialist.href}><span>{specialist.label}</span><span aria-hidden="true">→</span></a>
                ))}
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="faq-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">Useful answers</p>
                <h2 id="faq-title">{content.tradeName} {content.city} FAQs</h2>
                <p>{content.faqIntro}</p>
              </div>

              <div className="faq-list">
                {content.faqs.map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <div className="faq-answer"><p>{faq.answer}</p></div>
                  </details>
                ))}
              </div>
            </div>
          </section>

          <section className="cta-band">
            <div className="container">
              <div className="cta-box">
                <div>
                  <h2>Need {content.article} {content.tradeName.toLowerCase()} in {content.city}?</h2>
                  <p>Post the job once, let interested local {content.tradePlural.toLowerCase()} come to you and compare your options before deciding who to hire.</p>
                </div>
                <a className="cta-button" href={`#${findAnchor}`}>Post your job now</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
