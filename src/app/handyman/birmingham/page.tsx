import type { Metadata } from "next";
import { Breadcrumbs } from "../../../components/Breadcrumbs";
import { JsonLd } from "../../../components/JsonLd";
import { LocalTradeFinderForm } from "../../../components/LocalTradeFinderForm";
import { createPageMetadata } from "../../../lib/seo";
import {
  createLocalTradePageStructuredData,
  type BreadcrumbItem,
} from "../../../lib/schema";

const title = "Handyman Birmingham | Find Local Handymen Near You";
const description =
  "Need a handyman in Birmingham? Describe the job once and up to 3 interested local handymen can get in touch, so you can compare profiles, reviews and quotes.";
const openGraphDescription =
  "Looking for a handyman in Birmingham? Post the job once, hear from interested local handymen and compare profiles, verified reviews and quotes before you choose.";
const twitterDescription =
  "Find local handymen in Birmingham for repairs, fitting, maintenance, furniture assembly and everyday jobs around the home.";
const canonicalPath = "/handyman/birmingham/";

const baseMetadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription,
  twitterDescription,
});

// Prototype page: keep out of search results until the layout/content is approved.
export const metadata: Metadata = {
  ...baseMetadata,
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Handyman", href: "/handyman/" },
  { name: "Birmingham", href: canonicalPath },
];

const structuredData = createLocalTradePageStructuredData({
  canonicalPath,
  title,
  webPageDescription:
    "Find local handymen in Birmingham for repairs, fitting, maintenance and practical jobs around the home.",
  serviceName: "Find a Handyman in Birmingham",
  serviceType: "Handyman matching service",
  city: "Birmingham",
  region: "West Midlands",
  breadcrumbItems,
});

export default function HandymanBirminghamPage() {
  return (
    <>
      <JsonLd data={structuredData} />
      <div className="local-trade-page">
        <Breadcrumbs items={breadcrumbItems} />

        <main id="main">
          <section className="hero" aria-labelledby="hero-title">
            <div className="container hero-grid">
              <div>
                <p className="eyebrow">Handyman Birmingham</p>
                <h1 id="hero-title">Find a handyman in Birmingham</h1>
                <p className="hero-copy">
                  From shelves and flat-pack furniture to small repairs and general property maintenance, a good handyman can clear the jobs that keep sitting on your list. Describe the work once and suitable local handymen can express interest, so you can see who responds before deciding who to hire.
                </p>

                <ul className="hero-points" aria-label="Handyman service highlights">
                  <li><span className="check" aria-hidden="true">✓</span>Post your job once</li>
                  <li><span className="check" aria-hidden="true">✓</span>Up to 3 interested trades can get in touch</li>
                  <li><span className="check" aria-hidden="true">✓</span>No obligation to hire</li>
                </ul>
              </div>

              <LocalTradeFinderForm
                trade="handyman"
                tradeName="Handyman"
                containerId="find-handyman"
                title="Need a handyman in Birmingham?"
                intro="Start the job request here. Handyman is already selected, so you can go straight into describing what needs doing."
                buttonLabel="Start your job request"
                microcopy="The form opens on this page. Free for homeowners and there is no obligation to hire."
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
                <h2 id="near-me-answer">Looking for a handyman near you in Birmingham?</h2>
                <p>
                  Tell us what needs doing through the job form. Relevant handymen covering your part of Birmingham can review the request, and up to three who are interested can get in touch. Once they do, you can view their profiles and verified customer feedback before choosing how to proceed.
                </p>
              </div>
            </div>
          </section>

          <section className="section" id="handyman-jobs" aria-labelledby="jobs-title">
            <div className="container">
              <div className="section-head">
                <p className="eyebrow">Common handyman jobs</p>
                <h2 id="jobs-title">What can a Birmingham handyman help with?</h2>
                <p>
                  Handymen are useful for the practical household jobs that are too small for a larger contractor but still need someone with the right tools, experience and attention to detail.
                </p>
              </div>

              <div className="job-grid">
                <article className="job-card">
                  <div className="job-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16M6 20V9l6-5 6 5v11" /><path d="M9 14h6" /></svg></div>
                  <h3>Everyday home repairs</h3>
                  <p>Loose fittings, sticking doors, damaged trim, small patch repairs and the general fixes that tend to accumulate around a property.</p>
                </article>

                <article className="job-card">
                  <div className="job-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h16M6 7v10h12V7M9 4v3M15 4v3" /></svg></div>
                  <h3>Furniture &amp; flat-pack assembly</h3>
                  <p>Beds, wardrobes, desks, cabinets and shelving units assembled correctly and put in position without losing your weekend to the instructions.</p>
                </article>

                <article className="job-card">
                  <div className="job-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6h16v12H4z" /><path d="M8 18v2M16 18v2M9 10h6" /></svg></div>
                  <h3>Wall mounting &amp; hanging</h3>
                  <p>TVs, mirrors, curtain poles, pictures and shelves fitted securely where the wall construction and fixing method are suitable.</p>
                </article>

                <article className="job-card">
                  <div className="job-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M5 21h14M7 21V5h10v16M10 9h4M10 13h4" /></svg></div>
                  <h3>Doors, handles &amp; simple fittings</h3>
                  <p>Minor door adjustments, replacement handles, basic hardware fitting and small carpentry-style maintenance around the home.</p>
                </article>

                <article className="job-card">
                  <div className="job-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20h16M7 20V8h10v12M9 8V5h6v3" /><path d="M10 13h4" /></svg></div>
                  <h3>Landlord &amp; property maintenance</h3>
                  <p>A list of smaller repairs completed in one visit for homeowners, landlords or rental properties where several minor issues need attention.</p>
                </article>

                <article className="job-card">
                  <div className="job-icon" aria-hidden="true"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="m14.5 6.5 3-3 3 3-3 3" /><path d="m13 8 3 3L7 20H4v-3l9-9Z" /></svg></div>
                  <h3>Odd jobs &amp; finishing touches</h3>
                  <p>Fresh sealant, small touch-ups, fitting accessories and those awkward little tasks that do not justify bringing in a large contractor.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="section section-soft" id="costs" aria-labelledby="cost-title">
            <div className="container two-col">
              <div className="cost-panel">
                <h2 id="cost-title">How much does a handyman cost?</h2>
                <p>
                  The price depends on the type of work, how long it takes, whether materials are needed and whether the tradesperson has a minimum call-out. Current UK guidance commonly puts handyman labour around these levels:
                </p>
                <div className="price-row">
                  <div className="price-card"><strong>£20–£60</strong><span>typical hourly range cited by MyJobQuote</span></div>
                  <div className="price-card"><strong>£30</strong><span>UK hourly average cited by Checkatrade</span></div>
                </div>
                <p className="source-note">
                  Indicative UK guidance only, checked August 2026. A Birmingham quote may be above or below these figures depending on the actual work, travel, materials and time required.
                </p>
              </div>

              <div className="content-card">
                <p className="eyebrow">Help them quote properly</p>
                <h2>A clear job description makes comparison easier</h2>
                <p>
                  Small jobs are often priced differently depending on whether everything can be completed in one visit. Give enough detail for each tradesperson to understand the same scope before you compare prices.
                </p>
                <ul className="bullet-list">
                  <li><span className="tick" aria-hidden="true">✓</span><span>Put all the small jobs you want done into the same request.</span></li>
                  <li><span className="tick" aria-hidden="true">✓</span><span>Mention stairs, difficult access or parking restrictions where relevant.</span></li>
                  <li><span className="tick" aria-hidden="true">✓</span><span>Say whether you already have the furniture, brackets, fittings or materials.</span></li>
                  <li><span className="tick" aria-hidden="true">✓</span><span>Check whether labour, materials and any minimum call-out are included.</span></li>
                </ul>
              </div>
            </div>
          </section>

          <section className="section" id="areas" aria-labelledby="areas-title">
            <div className="container local-grid">
              <div>
                <p className="eyebrow">Across Birmingham</p>
                <h2 id="areas-title">Find handymen covering your part of the city</h2>
                <p className="local-muted">
                  Birmingham is a large area, so availability can vary from one neighbourhood to another. The location you enter in the job form helps keep the request relevant to tradespeople who actually cover where the work is.
                </p>
                <div className="area-cloud" aria-label="Birmingham areas">
                  <span className="area-pill">Edgbaston</span>
                  <span className="area-pill">Harborne</span>
                  <span className="area-pill">Selly Oak</span>
                  <span className="area-pill">Erdington</span>
                  <span className="area-pill">Hall Green</span>
                  <span className="area-pill">Kings Heath</span>
                  <span className="area-pill">Yardley</span>
                  <span className="area-pill">Sutton Coldfield</span>
                </div>
              </div>

              <div className="content-card">
                <h2>Why local availability matters</h2>
                <p>
                  A useful “handyman near me” result is not a national directory. Travel time, current workload and the size of the job all influence whether someone is interested in taking it on. Posting the actual job gives local tradespeople enough information to decide whether it suits them.
                </p>
                <div className="local-note">
                  <strong>Coverage depends on the individual trade.</strong> Use the address or postcode inside the request form so the job can be matched to the correct part of Birmingham.
                </div>
              </div>
            </div>
          </section>

          <section className="section section-soft" id="how-it-works" aria-labelledby="how-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">How it works</p>
                <h2 id="how-title">Post once. Then interested local handymen can come to you.</h2>
                <p>
                  There is no need to work through a directory and contact people one by one. Tell us about the job once, then see who is interested in doing it.
                </p>
              </div>

              <div className="steps">
                <article className="step">
                  <div className="step-number" aria-hidden="true" />
                  <h3>Describe the job</h3>
                  <p>Open the request form, add the Birmingham location and explain the repairs, fitting or maintenance you need completed.</p>
                </article>
                <article className="step">
                  <div className="step-number" aria-hidden="true" />
                  <h3>Interested trades get in touch</h3>
                  <p>Relevant local handymen can review the job, and up to three who are interested can contact you about the work.</p>
                </article>
                <article className="step">
                  <div className="step-number" aria-hidden="true" />
                  <h3>Review and decide</h3>
                  <p>Once someone responds, view their profile and verified customer reviews, discuss the job and compare the quote before deciding whether to hire.</p>
                </article>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="choose-title">
            <div className="container choice-grid">
              <div>
                <p className="eyebrow">Choose with confidence</p>
                <h2 id="choose-title" className="choice-title">What should you check before hiring a handyman?</h2>
                <p className="local-muted">
                  Handymen often have a broad skill set, but that does not mean every person is right for every job. Look at the work you actually need and compare more than the headline price.
                </p>
              </div>

              <div className="benefit-list">
                <div className="benefit">
                  <div className="benefit-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg></div>
                  <div><h3>Experience that matches the job</h3><p>Check whether the person regularly handles the type of repair or fitting you need, particularly when a specific wall, material or fixing method is involved.</p></div>
                </div>
                <div className="benefit">
                  <div className="benefit-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3 4 7v5c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V7l-8-4Z" /><path d="m9 12 2 2 4-4" /></svg></div>
                  <div><h3>Profile and customer feedback</h3><p>After a tradesperson expresses interest, review their profile and verified customer reviews before you agree to the work.</p></div>
                </div>
                <div className="benefit">
                  <div className="benefit-icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v14H4z" /><path d="m7 9 2 2 3-3M13 10h4M7 15h10" /></svg></div>
                  <div><h3>A quote you understand</h3><p>For anything beyond a tiny fix, make sure the scope, labour, materials and any call-out charge are clear before the work begins.</p></div>
                </div>
              </div>
            </div>
          </section>

          <section className="section section-soft" aria-labelledby="specialist-title">
            <div className="container specialist-box">
              <p className="eyebrow">Handyman or specialist?</p>
              <h2 id="specialist-title">Some work needs a specialist trade</h2>
              <p className="specialist-intro">
                General repairs and maintenance are ideal handyman territory. If the job involves regulated work, specialist certification or deeper trade expertise, start with the appropriate specialist instead.
              </p>
              <div className="specialist-links">
                <a className="specialist-link" href="/plumber/"><span>Find local plumbers</span><span aria-hidden="true">→</span></a>
                <a className="specialist-link" href="/electrician/"><span>Find local electricians</span><span aria-hidden="true">→</span></a>
                <a className="specialist-link" href="/painter-decorator/"><span>Find painters &amp; decorators</span><span aria-hidden="true">→</span></a>
                <a className="specialist-link" href="/flooring-fitter/"><span>Find flooring fitters</span><span aria-hidden="true">→</span></a>
              </div>
            </div>
          </section>

          <section className="section" aria-labelledby="faq-title">
            <div className="container">
              <div className="section-head center">
                <p className="eyebrow">Useful answers</p>
                <h2 id="faq-title">Handyman Birmingham FAQs</h2>
                <p>A few practical answers before you submit your handyman job.</p>
              </div>

              <div className="faq-list">
                <details>
                  <summary>How do I find a handyman near me in Birmingham?</summary>
                  <div className="faq-answer"><p>Start the job request and describe what needs doing. Relevant handymen covering your area can review the request, and up to three who are interested can get in touch. You can then compare their profiles, verified reviews and quotes before deciding whether to hire.</p></div>
                </details>
                <details>
                  <summary>What kind of work can a handyman do?</summary>
                  <div className="faq-answer"><p>Typical handyman work includes small household repairs, furniture assembly, wall mounting, door adjustments, minor maintenance, sealant replacement and practical odd jobs. Skills differ from person to person, so describe the work clearly and check relevant experience.</p></div>
                </details>
                <details>
                  <summary>How much does a handyman charge in Birmingham?</summary>
                  <div className="faq-answer"><p>There is no single Birmingham rate. Current UK guidance commonly places handyman labour around £20–£60 per hour, although minimum call-outs and fixed-job prices are also common. The final price depends on the job, travel, materials and time required.</p></div>
                </details>
                <details>
                  <summary>Can I include several small jobs in one request?</summary>
                  <div className="faq-answer"><p>Yes. If several small jobs need doing, list them together. It gives the handyman a better picture of the likely time involved and can be more efficient than arranging separate visits.</p></div>
                </details>
                <details>
                  <summary>When can I see reviews for the handymen?</summary>
                  <div className="faq-answer"><p>Once a tradesperson expresses interest in your posted job, you can view their profile and customer feedback. That lets you review the person who actually wants the work rather than browsing an unrelated directory beforehand.</p></div>
                </details>
                <details>
                  <summary>Do I have to accept one of the quotes?</summary>
                  <div className="faq-answer"><p>No. Posting the job does not oblige you to hire anyone. Compare the people who respond and proceed only if you are comfortable with the tradesperson, the scope and the price.</p></div>
                </details>
              </div>
            </div>
          </section>

          <section className="cta-band">
            <div className="container">
              <div className="cta-box">
                <div>
                  <h2>Need a handyman in Birmingham?</h2>
                  <p>Describe the job once and let interested local handymen come to you. You can review who responds before deciding whether to hire.</p>
                </div>
                <a className="cta-button" href="#find-handyman">Start your job request</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
