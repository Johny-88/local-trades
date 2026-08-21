import type { Metadata } from "next";
import { InfoPageShell, InfoSection } from "../../components/InfoPageShell";
import { JsonLd } from "../../components/JsonLd";
import { createInfoPageStructuredData, type BreadcrumbItem } from "../../lib/schema";
import { createPageMetadata } from "../../lib/seo";
import { CONTACT_EMAIL, OPERATOR_NAME } from "../../lib/site";

const title = "Transparency | Local Trades";
const description = "How Local Trades works, who operates it, how referral commissions work, our relationship with MyJobQuote and how we approach reviews, pricing and editorial content.";
const canonicalPath = "/transparency/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "See who operates Local Trades, how the website makes money, how MyJobQuote referrals work and how we approach reviews, prices and editorial information.",
  twitterDescription: "How Local Trades works, who operates it and how referral commissions and third-party services are handled.",
});

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Transparency", href: canonicalPath },
];

export default function TransparencyPage() {
  return (
    <>
      <JsonLd data={createInfoPageStructuredData(canonicalPath, title, description, breadcrumbItems)} />
      <InfoPageShell
        eyebrow="Transparency"
        title="How Local Trades works and how we make money"
        intro="We want homeowners to understand exactly what Local Trades is, who operates it, where the quote service comes from and how the website can earn money from referrals."
        breadcrumbItems={breadcrumbItems}
        summaryTitle="Local Trades is an independent referral website"
        summary={
          <p>
            Local Trades is operated by <strong>{OPERATOR_NAME}</strong>. We publish our own informational pages and connect homeowners with a third-party quote service. We may earn a commission from qualifying partner activity, but we do not employ the professionals, set their prices or control the work they carry out.
          </p>
        }
      >
        <InfoSection
          id="who-operates-local-trades"
          eyebrow="1. Ownership"
          title="Who operates Local Trades?"
          intro="Last updated: 21 August 2026."
        >
          <div className="content-card">
            <p>
              Local Trades is operated by <strong>{OPERATOR_NAME}</strong>. The website is available at <strong>getlocaltrades.uk</strong> and can be contacted at <a href={`mailto:${CONTACT_EMAIL}`}><strong>{CONTACT_EMAIL}</strong></a>.
            </p>
            <p>
              Local Trades is not owned or operated by MyJobQuote and is not a trade contractor, employer or professional-services firm. It is an independent information and referral website for UK homeowners.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="what-we-do"
          eyebrow="2. Our role"
          title="What Local Trades actually provides"
          soft
        >
          <div className="content-card">
            <p>
              We create informational pages about home and property services, including common job types, things homeowners may want to check before hiring, indicative price guidance and location-specific information where relevant.
            </p>
            <p>
              When a homeowner wants to request quotes, Local Trades can open an embedded third-party quote service with the relevant service category already selected. The matching and quote journey is provided by the third party, not by a Local Trades-owned marketplace.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="partner"
          eyebrow="3. Our partner relationship"
          title="How MyJobQuote fits into the website"
        >
          <div className="content-card">
            <p>
              Local Trades currently uses MyJobQuote as the third-party service behind its quote-request journey. When you open a quote form, the form is supplied by MyJobQuote even though it can appear inside a Local Trades page.
            </p>
            <p>
              MyJobQuote is responsible for its own service, matching process, participating professionals, user accounts, personal-data handling, communications and contractual terms. Local Trades does not control those parts of the service.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="how-we-make-money"
          eyebrow="4. How we make money"
          title="Referral and affiliate commissions"
          soft
        >
          <div className="content-card">
            <p>
              Local Trades may earn a commission when a qualifying referral or transaction occurs through a commercial partner relationship. This is how the website can be funded without charging homeowners simply to browse Local Trades content or open the quote journey.
            </p>
            <p>
              A referral commission does not change the price or terms offered by a professional under Local Trades' control, because Local Trades does not set professional prices or contracts. It also does not make us the employer, agent or contractor of the professionals who may respond.
            </p>
            <p>
              We disclose the referral relationship in the site footer and in our legal information rather than presenting Local Trades as if it were the company carrying out the work.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="reviews"
          eyebrow="5. Reviews"
          title="Where the verified reviews come from"
        >
          <div className="content-card">
            <p>
              Local Trades does not currently operate its own homeowner review platform. References on the website to genuine or verified customer reviews relate to review information available through the third-party quote and professional-profile service.
            </p>
            <p>
              We do not independently re-verify every review ourselves. Homeowners should read the profile and review information shown by the relevant third-party service and make their own hiring decision.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="prices"
          eyebrow="6. Price information"
          title="How we use cost guidance"
          soft
        >
          <div className="content-card">
            <p>
              Prices and ranges published on Local Trades are intended as guidance, not fixed prices or guaranteed quotes. Where practical, service and location pages may use current published sources and explain the context of the figures shown.
            </p>
            <p>
              Real prices can vary materially because of property condition, location, access, materials, urgency, project size, specialist requirements and the professional you choose. A real quote for the actual job should take priority over general website guidance.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="local-content"
          eyebrow="7. Local pages"
          title="Why location pages contain local information"
        >
          <div className="content-card">
            <p>
              Local Trades creates location pages to help homeowners understand service-specific issues that can genuinely vary by place, such as housing type, parking and access, local authority rules or other practical considerations.
            </p>
            <p>
              Our intention is not simply to replace one city name with another. Where a page makes a location-specific claim, we aim to base it on relevant published information and keep the amount of local content proportionate to the service.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="privacy"
          eyebrow="8. Privacy"
          title="What Local Trades collects directly"
          soft
        >
          <div className="content-card">
            <p>
              Local Trades does not currently run user accounts, take payments, operate a newsletter sign-up or collect job details through its own job-submission database. The embedded quote form is a third-party service and information entered into it is submitted to that provider.
            </p>
            <p>
              If you voluntarily email us, we receive the information in your email. Normal hosting and security infrastructure can also process limited technical request data needed to deliver and protect the website. See our <a href="/privacy/">Privacy Policy</a> and <a href="/cookies/">Cookie Policy</a> for the full explanation.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="corrections"
          eyebrow="9. Corrections and questions"
          title="Tell us if something needs correcting"
        >
          <div className="content-card">
            <p>
              If you believe a factual statement, source, price range or local detail on Local Trades is wrong or outdated, email <a href={`mailto:${CONTACT_EMAIL}`}><strong>{CONTACT_EMAIL}</strong></a> with the page and the issue you have identified.
            </p>
            <p>
              You can also read our <a href="/terms/">Terms &amp; Conditions</a> for the legal terms governing use of the website.
            </p>
          </div>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
