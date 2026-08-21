import type { ServiceCategory } from "../lib/serviceCategoryContent";
import type { ServicePageDetails } from "../lib/servicePageContent";
import type { BreadcrumbItem } from "../lib/schema";
import { Breadcrumbs } from "./Breadcrumbs";
import { JsonLd } from "./JsonLd";
import { ServiceCategoryLeadCard } from "./ServiceCategoryLeadCard";

type Props = {
  service: ServiceCategory;
  details: ServicePageDetails;
  breadcrumbItems: BreadcrumbItem[];
  structuredData: unknown;
};

export function ServiceCategoryLandingPage({ service, details, breadcrumbItems, structuredData }: Props) {
  const pluralLower = service.plural.toLowerCase();
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="local-trade-page">
        <Breadcrumbs items={breadcrumbItems} />
        <main id="top">
          <section className="hero" aria-labelledby="service-hero-title">
            <div className="container hero-grid">
              <div className="category-hero-copy">
                <p className="eyebrow">Local {pluralLower}</p>
                <h1 id="service-hero-title">Find {pluralLower} near you</h1>
                <p className="hero-copy">{details.intro}</p>
              </div>
              <ServiceCategoryLeadCard
                serviceSlug={service.slug}
                serviceName={service.name}
                servicePlural={service.plural}
                buttonLabel={`Find local ${pluralLower}`}
              />
            </div>
          </section>

          <section className="section" aria-labelledby="category-jobs-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">Common jobs</p>
                <h2 id="category-jobs-title">What can {pluralLower} help with?</h2>
                <p>{details.jobsIntro}</p>
              </div>
              <div className="job-grid category-job-grid">
                {details.jobs.map((job) => (
                  <article className="job-card" key={job.title}>
                    <h3>{job.title}</h3>
                    <p>{job.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className="section section-soft" aria-labelledby="category-check-title">
            <div className="container choice-grid">
              <div>
                <p className="eyebrow">Before you request quotes</p>
                <h2 id="category-check-title" className="choice-title">Make the job easier to understand</h2>
                <p className="local-muted">A clear brief helps local professionals judge whether the job suits them and makes the responses easier for you to compare.</p>
              </div>
              <div className="benefit-list">
                {details.checks.map((check, index) => (
                  <div className="benefit" key={check.title}>
                    <div className="benefit-icon" aria-hidden="true">{index + 1}</div>
                    <div><h3>{check.title}</h3><p>{check.text}</p></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="category-how-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">How it works</p>
                <h2 id="category-how-title">Post the job once, then compare your options</h2>
                <p>Choose {service.plural}, add the postcode and describe the work. Suitable local professionals can then express interest.</p>
              </div>
              <div className="steps">
                <article className="step"><div className="step-number" aria-hidden="true" /><h3>Describe the job</h3><p>Give the postcode and enough practical detail for professionals to understand what you need.</p></article>
                <article className="step"><div className="step-number" aria-hidden="true" /><h3>Hear from interested professionals</h3><p>Up to three suitable local professionals can respond about the work.</p></article>
                <article className="step"><div className="step-number" aria-hidden="true" /><h3>Check reviews and choose</h3><p>Compare profiles, genuine verified reviews and quotes. There is no obligation to hire.</p></article>
              </div>
            </div>
          </section>

          <section className="section section-soft" id="faq" aria-labelledby="category-faq-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">Questions</p>
                <h2 id="category-faq-title">Finding {pluralLower}: common questions</h2>
              </div>
              <div className="faq-list">
                <details><summary>How do I find {pluralLower} near me?</summary><div className="faq-answer"><p>Open the quote form, enter the postcode where the work is needed and describe the job. Suitable local professionals can then express interest.</p></div></details>
                <details><summary>What should I include in the job description?</summary><div className="faq-answer"><p>Explain what you need done, when you would like it completed and any access, property or product details that could affect the work. Useful photos can help where relevant.</p></div></details>
                <details><summary>How many professionals can respond?</summary><div className="faq-answer"><p>Up to three interested local professionals can get in touch about the same job.</p></div></details>
                <details><summary>Do I have to hire someone who responds?</summary><div className="faq-answer"><p>No. Posting the job is free for homeowners and there is no obligation to hire. Compare your options and proceed only if one suits you.</p></div></details>
              </div>
            </div>
          </section>

          <section className="cta-band">
            <div className="container">
              <div className="cta-box">
                <div>
                  <h2>Ready to find {pluralLower} near you?</h2>
                  <p>Post the job once, hear from interested local professionals and compare your options before deciding who to hire.</p>
                </div>
                <ServiceCategoryLeadCard
                  serviceSlug={service.slug}
                  serviceName={service.name}
                  servicePlural={service.plural}
                  buttonLabel={`Find local ${pluralLower}`}
                  compact
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
