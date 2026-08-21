import type { Metadata } from "next";
import { InfoPageShell, InfoSection } from "../../components/InfoPageShell";
import { JsonLd } from "../../components/JsonLd";
import { createInfoPageStructuredData, type BreadcrumbItem } from "../../lib/schema";
import { createPageMetadata } from "../../lib/seo";
import { CONTACT_EMAIL } from "../../lib/site";

const title = "Terms & Conditions | Local Trades";
const description = "Read the Local Trades Terms & Conditions, including our independent referral role, third-party quote services, professionals, prices and user responsibilities.";
const canonicalPath = "/terms/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "Terms for using Local Trades, including our independent referral role, third-party quote services, professionals, prices and website information.",
  twitterDescription: "Read the Local Trades Terms & Conditions for using the website and third-party quote services.",
});

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Terms & Conditions", href: canonicalPath },
];

export default function TermsPage() {
  return (
    <>
      <JsonLd data={createInfoPageStructuredData(canonicalPath, title, description, breadcrumbItems)} />
      <InfoPageShell
        eyebrow="Terms & Conditions"
        title="Terms for using Local Trades"
        intro="These terms explain what Local Trades provides, what we do not provide, how third-party quote and referral services work and the responsibilities that remain with you when you contact or hire a professional."
        breadcrumbItems={breadcrumbItems}
        summaryTitle="Local Trades is an independent information and referral website"
        summary={
          <p>
            We help UK homeowners understand services, find relevant local options and access third-party quote services. We do not employ the professionals, carry out the work, set their prices or become a party to the contract between you and a professional.
          </p>
        }
      >
        <InfoSection
          id="using-the-site"
          eyebrow="1. Using the website"
          title="Agreement to these terms"
          intro="Last updated: 21 August 2026. By using Local Trades, you agree to use the site lawfully and in accordance with these terms."
        >
          <div className="content-card">
            <p>
              Local Trades is intended primarily for people in the United Kingdom who are researching home and property services or looking for a route to request quotes through a third-party partner. If you do not agree with these terms, you should not use the website.
            </p>
            <p>
              We may update these terms when the website, commercial arrangements or applicable requirements change. The version published on this page applies to your use of the site at that time.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="our-role"
          eyebrow="2. Our role"
          title="What Local Trades does — and does not do"
          soft
        >
          <div className="content-card">
            <p>
              We publish information about home and property services, common jobs, local considerations and indicative price guidance. We also provide embedded or linked third-party services through which you can submit a job and potentially receive responses or quotes from professionals.
            </p>
            <p>
              Local Trades is not the professional, contractor, employer, agent, insurer, surveyor, architect, engineer or professional adviser for any job. We do not supervise work, inspect completed work, guarantee availability or guarantee that any particular number of professionals will respond.
            </p>
            <p>
              Statements such as “up to 3 local responses” describe the intended partner journey and do not guarantee that three suitable professionals will always be available in every area, for every service or at every time.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="partner-services"
          eyebrow="3. Partner services"
          title="MyJobQuote and other third-party services"
        >
          <div className="content-card">
            <p>
              Local Trades currently uses MyJobQuote as a third-party quote and matching service. The quote form may be displayed within a Local Trades page, but the form itself is supplied and operated by MyJobQuote.
            </p>
            <p>
              Information you enter into that form is submitted to the third-party service and is subject to its own terms, privacy information and service rules. Local Trades does not control the partner's matching process, professional membership, pricing, availability, communications or handling of personal information.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="commercial-relationships"
          eyebrow="4. Commercial relationships"
          title="Affiliate and referral commissions"
          soft
        >
          <div className="content-card">
            <p>
              Some services and links on Local Trades are commercial referral arrangements. If a qualifying action or transaction occurs through a partner relationship, Local Trades may receive a commission or referral payment from that partner.
            </p>
            <p>
              This does not increase our control over the professional or make Local Trades the provider of the partner service. Our commercial relationship is explained more fully on the <a href="/transparency/">Transparency page</a>.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="quotes-and-contracts"
          eyebrow="5. Hiring decisions"
          title="Professionals, quotes and contracts"
        >
          <div className="content-card">
            <p>
              You are responsible for deciding whether a professional is suitable for your job. Before hiring, consider relevant experience, qualifications where required, insurance where appropriate, reviews, written scope, exclusions, timing and price.
            </p>
            <p>
              Any quote, booking, payment arrangement, warranty or contract for work is between you and the relevant professional or third-party service, as applicable. Local Trades is not a party to that agreement unless we expressly state otherwise in writing for a specific service.
            </p>
            <p>
              Regulated or specialist work may require appropriately qualified or registered professionals. It is your responsibility to check the requirements that apply to your property and project.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="site-information"
          eyebrow="6. Website information"
          title="Local guidance and indicative prices"
          soft
        >
          <div className="content-card">
            <p>
              We work to keep Local Trades content useful and accurate, but costs, availability and local requirements can change. Prices shown on the website are indicative only and may be based on third-party market data, published guidance or local benchmarks available when a page was reviewed.
            </p>
            <p>
              A real quote can vary because of property condition, access, materials, labour, location, urgency, design, approvals and the exact scope of work. Local planning, parking, conservation, licensing or other requirements may also differ from one property or location to another.
            </p>
            <p>
              Website content is general information and is not a substitute for project-specific professional, legal, planning, structural, technical, financial or other specialist advice.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="acceptable-use"
          eyebrow="7. Your responsibilities"
          title="Acceptable use of Local Trades"
        >
          <div className="content-card">
            <p>You must not use the website to:</p>
            <ul className="bullet-list">
              <li><span className="tick" aria-hidden="true">✓</span><span>break the law, infringe another person's rights or submit deliberately false or misleading information;</span></li>
              <li><span className="tick" aria-hidden="true">✓</span><span>attempt to interfere with, damage, overload, scrape at unreasonable scale or gain unauthorised access to the website or its infrastructure;</span></li>
              <li><span className="tick" aria-hidden="true">✓</span><span>misrepresent your identity or relationship with Local Trades, a partner or a professional; or</span></li>
              <li><span className="tick" aria-hidden="true">✓</span><span>use site content in a way that infringes copyright, trade marks or other intellectual-property rights.</span></li>
            </ul>
          </div>
        </InfoSection>

        <InfoSection
          id="intellectual-property"
          eyebrow="8. Content ownership"
          title="Intellectual property"
          soft
        >
          <div className="content-card">
            <p>
              Unless stated otherwise, the Local Trades brand, original website copy, page design, graphics, code and other original site materials are owned by or licensed to Local Trades and are protected by applicable intellectual-property laws.
            </p>
            <p>
              You may view and use the website for normal personal use. You may not reproduce, republish, sell, systematically extract or commercially exploit substantial parts of the site without permission, except where the law allows it.
            </p>
            <p>
              Third-party names, logos, data and materials remain the property of their respective owners and are used only where appropriate to identify or reference those third parties.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="availability"
          eyebrow="9. Website operation"
          title="Availability, links and changes"
        >
          <div className="content-card">
            <p>
              We may change, improve, suspend or remove parts of the website without notice. We do not promise that the site will always be available, error-free or free from every security issue, although we take reasonable steps to maintain it.
            </p>
            <p>
              Third-party services and links are provided for convenience or as part of our referral model. We do not control those services and are not responsible for their content, availability, security, privacy practices or contractual terms.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="liability"
          eyebrow="10. Responsibility and legal rights"
          title="Liability and statutory rights"
          soft
        >
          <div className="content-card">
            <p>
              Nothing in these terms excludes or limits any liability that cannot lawfully be excluded or limited, including liability for fraud or fraudulent misrepresentation, or any mandatory rights you have under consumer law.
            </p>
            <p>
              To the extent permitted by law, Local Trades is not responsible for the acts or omissions of independent professionals or third-party services, including workmanship, delays, property damage, disputes, pricing, missed appointments, statements made by a professional or the outcome of a job.
            </p>
            <p>
              We are also not responsible for losses caused by reliance on general website guidance where the matter reasonably requires project-specific professional advice or verification.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="privacy-and-contact"
          eyebrow="11. Privacy and contact"
          title="Privacy, cookies and questions"
        >
          <div className="content-card">
            <p>
              Our <a href="/privacy/">Privacy Policy</a> explains how information is handled, and our <a href="/cookies/">Cookie Policy</a> explains the current use of cookies and similar technologies.
            </p>
            <p>
              If you have a question about these terms, email <a href={`mailto:${CONTACT_EMAIL}`}><strong>{CONTACT_EMAIL}</strong></a> or visit the <a href="/contact/">Contact page</a>.
            </p>
          </div>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
