import type { Metadata } from "next";
import { InfoPageShell, InfoSection } from "../../components/InfoPageShell";
import { JsonLd } from "../../components/JsonLd";
import { createInfoPageStructuredData, type BreadcrumbItem } from "../../lib/schema";
import { createPageMetadata } from "../../lib/seo";

const title = "Contact Local Trades | Help & Enquiries";
const description = "Contact Local Trades for website questions, feedback, privacy enquiries, corrections or partnership questions.";
const canonicalPath = "/contact/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Need to contact Local Trades? Get in touch about the website, feedback, corrections, privacy or partnership questions.",
  twitterDescription: "Contact Local Trades about website questions, feedback, corrections, privacy or partnership enquiries.",
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
        intro="Use this page for questions about Local Trades, website feedback, corrections, privacy enquiries or legitimate partnership questions."
        breadcrumbItems={breadcrumbItems}
        summaryTitle="Questions about a quote or a tradesperson?"
        summary={<p>Local Trades is an information and referral website. A specific job, quote, booking, payment or workmanship issue should normally be raised with the relevant tradesperson or the partner service through which the introduction was made.</p>}
      >
        <InfoSection id="website-help" eyebrow="Website enquiries" title="What can you contact Local Trades about?">
          <div className="content-card">
            <ul className="bullet-list">
              <li><strong>Website problems:</strong> broken links, accessibility issues or something that does not work as expected.</li>
              <li><strong>Corrections:</strong> factual information that you believe should be reviewed.</li>
              <li><strong>Privacy:</strong> questions about personal data, cookies or data-protection rights.</li>
              <li><strong>Commercial enquiries:</strong> legitimate partnership or business questions relating to Local Trades.</li>
              <li><strong>General feedback:</strong> suggestions that could make the site clearer or more useful.</li>
            </ul>
          </div>
        </InfoSection>
        <InfoSection id="job-enquiries" eyebrow="Before you contact us" title="Questions about a specific job" soft>
          <div className="content-card">
            <p>Local Trades does not employ the tradespeople introduced through third-party quote services and does not manage the contract between a homeowner and a tradesperson.</p>
            <p>For urgent safety issues, contact the appropriate emergency service or a suitably qualified emergency tradesperson rather than relying on a website enquiry.</p>
            <p>For more information about how the site works, read our <a href="/terms/">Terms &amp; Conditions</a>, <a href="/privacy/">Privacy Policy</a> and <a href="/cookies/">Cookie Policy</a>.</p>
          </div>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
