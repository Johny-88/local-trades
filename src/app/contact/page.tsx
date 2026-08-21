import type { Metadata } from "next";
import { InfoPageShell, InfoSection } from "../../components/InfoPageShell";
import { JsonLd } from "../../components/JsonLd";
import { createInfoPageStructuredData, type BreadcrumbItem } from "../../lib/schema";
import { createPageMetadata } from "../../lib/seo";
import { CONTACT_EMAIL } from "../../lib/site";

const title = "Contact Local Trades | Help & Enquiries";
const description = "Contact Local Trades by email for website questions, feedback, privacy enquiries, corrections or partnership questions.";
const canonicalPath = "/contact/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Contact Local Trades directly by email for website questions, feedback, corrections, privacy enquiries or partnership questions.",
  twitterDescription: "Contact Local Trades by email for help, feedback, corrections, privacy enquiries or partnership questions.",
});

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Contact", href: canonicalPath },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={createInfoPageStructuredData(canonicalPath, title, description, breadcrumbItems)} />
      <InfoPageShell
        eyebrow="Contact Local Trades"
        title="How can we help?"
        intro="For questions about Local Trades, website feedback, corrections, privacy enquiries or legitimate partnership questions, email us directly. We keep contact simple and do not require an account or contact form."
        breadcrumbItems={breadcrumbItems}
        summaryTitle="The quickest way to reach us is by email"
        summary={
          <p>
            Write to <a href={`mailto:${CONTACT_EMAIL}`}><strong>{CONTACT_EMAIL}</strong></a>.
          </p>
        }
      >
        <InfoSection
          id="email-us"
          eyebrow="Direct contact"
          title="Email Local Trades"
          intro="We use a direct email address rather than an on-site contact form, so your message is sent through your own email service rather than being collected through a Local Trades form."
        >
          <div className="content-card">
            <h3>Contact email</h3>
            <p><a href={`mailto:${CONTACT_EMAIL}`}><strong>{CONTACT_EMAIL}</strong></a></p>
            <p>
              Please include enough detail for us to understand the issue, such as the page you were viewing, the type of question you have and any correction you think is needed. Do not send passwords, payment-card details or unnecessary sensitive information.
            </p>
            <div className="specialist-links" style={{ marginTop: 24 }}>
              <a className="cta-button" href={`mailto:${CONTACT_EMAIL}`}>Email Local Trades</a>
            </div>
          </div>
        </InfoSection>

        <InfoSection
          id="what-we-can-help-with"
          eyebrow="Useful enquiries"
          title="What can you contact us about?"
          soft
        >
          <div className="content-card">
            <ul className="bullet-list">
              <li><span className="tick" aria-hidden="true">✓</span><span><strong>Website questions:</strong> broken links, accessibility issues or something that does not work as expected.</span></li>
              <li><span className="tick" aria-hidden="true">✓</span><span><strong>Corrections:</strong> factual information, pricing guidance or local information that you believe should be reviewed.</span></li>
              <li><span className="tick" aria-hidden="true">✓</span><span><strong>Privacy:</strong> questions about personal information, cookies or data-protection rights.</span></li>
              <li><span className="tick" aria-hidden="true">✓</span><span><strong>Commercial enquiries:</strong> legitimate partnership, affiliate or business questions relating to Local Trades.</span></li>
              <li><span className="tick" aria-hidden="true">✓</span><span><strong>General feedback:</strong> suggestions that could make the site clearer, more useful or easier to use.</span></li>
            </ul>
          </div>
        </InfoSection>

        <InfoSection
          id="job-enquiries"
          eyebrow="Before you email"
          title="Questions about a specific professional or job"
        >
          <div className="content-card">
            <p>
              Local Trades is an independent information and referral website. We do not employ or control the professionals introduced through third-party partner services and we do not manage the contract between a homeowner and a professional.
            </p>
            <p>
              If you have already submitted a job through a partner service or hired someone, questions about that job, quote, booking, payment, workmanship or dispute should normally be raised directly with the relevant professional or the partner service through which the introduction was made.
            </p>
            <p>
              For urgent safety issues, do not rely on email to Local Trades. Contact the appropriate emergency service or a suitably qualified emergency professional for the situation.
            </p>
            <p>
              For more information about how the site works, read our <a href="/transparency/">Transparency page</a>, <a href="/terms/">Terms &amp; Conditions</a>, <a href="/privacy/">Privacy Policy</a> and <a href="/cookies/">Cookie Policy</a>.
            </p>
          </div>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
