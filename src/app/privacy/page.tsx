import type { Metadata } from "next";
import { InfoPageShell, InfoSection } from "../../components/InfoPageShell";
import { JsonLd } from "../../components/JsonLd";
import { createInfoPageStructuredData, type BreadcrumbItem } from "../../lib/schema";
import { createPageMetadata } from "../../lib/seo";
import { CONTACT_EMAIL, OPERATOR_NAME } from "../../lib/site";

const title = "Privacy Policy | Local Trades";
const description = "Read the Local Trades Privacy Policy, including direct data collection, email enquiries, technical website data, third-party quote services and your UK privacy rights.";
const canonicalPath = "/privacy/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "How Local Trades handles privacy, direct email enquiries, technical website data and third-party quote services.",
  twitterDescription: "Read how Local Trades handles privacy, email enquiries, technical data and third-party referral services.",
});

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: canonicalPath },
];

export default function PrivacyPage() {
  return (
    <>
      <JsonLd data={createInfoPageStructuredData(canonicalPath, title, description, breadcrumbItems)} />
      <InfoPageShell
        eyebrow="Privacy Policy"
        title="How Local Trades handles personal information"
        intro="Local Trades is intentionally simple. We do not require accounts, take payments or provide our own job-submission form. This notice explains the limited situations in which information may still be processed when you browse the site, email us or choose to use an embedded third-party quote service."
        breadcrumbItems={breadcrumbItems}
        summaryTitle="Local Trades does not collect job details through its own forms"
        summary={
          <p>
            Job details entered into the embedded MyJobQuote service are submitted to MyJobQuote, not to a Local Trades database. Local Trades itself does not currently run user accounts, payment collection, marketing sign-up forms or its own job-submission system.
          </p>
        }
      >
        <InfoSection
          id="who-we-are"
          eyebrow="1. Who is responsible"
          title="Local Trades and privacy enquiries"
          intro={`Last updated: 21 August 2026. ${OPERATOR_NAME} operates Local Trades and is responsible for personal information processed by Local Trades for the website's own purposes.`}
        >
          <div className="content-card">
            <p>
              <strong>Operator:</strong> {OPERATOR_NAME}. For privacy questions or requests, email <a href={`mailto:${CONTACT_EMAIL}`}><strong>{CONTACT_EMAIL}</strong></a>.
            </p>
            <p>
              This notice applies to information processed by Local Trades for its own purposes. When you use an embedded or linked third-party service, that third party is responsible for the information it collects through its own service.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="information-we-process"
          eyebrow="2. Information"
          title="What information may be processed?"
          soft
        >
          <div className="content-card">
            <h3>No Local Trades accounts or on-site job forms</h3>
            <p>
              Local Trades does not currently provide user accounts, take payments, collect card details, operate a newsletter sign-up or collect job details through a Local Trades-owned form. We also do not currently use Google Analytics or advertising trackers on the site.
            </p>

            <h3>Email enquiries</h3>
            <p>
              If you choose to email us, we receive the email address and name shown by your email service, the contents of your message and anything you attach. This is information you voluntarily send to us. Please do not send passwords, payment-card details or unnecessary sensitive information.
            </p>

            <h3>Technical website data</h3>
            <p>
              As with most websites, hosting, delivery and security infrastructure may process limited technical request information such as an IP address, browser or device details, requested URLs, timestamps and diagnostic or security events. This can be necessary to deliver the site, prevent abuse and investigate technical problems. Local Trades does not use that information to build advertising profiles.
            </p>

            <h3>Embedded MyJobQuote service</h3>
            <p>
              When you open a quote form on Local Trades, the form is provided by MyJobQuote inside an embedded frame. Information you enter into that form is sent to MyJobQuote rather than being submitted to a Local Trades database. MyJobQuote processes that information under its own privacy information and terms.
            </p>
            <p>
              Local Trades may receive limited referral or commission reporting connected with its commercial relationship, such as whether a qualifying referral occurred. We do not need or intend to receive the full contents of a homeowner's job submission simply to operate the referral relationship.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="why-we-use-data"
          eyebrow="3. Why information is used"
          title="Purposes and lawful bases"
        >
          <div className="content-card">
            <p>Where Local Trades processes personal information, it may do so to:</p>
            <ul className="bullet-list">
              <li><span className="tick" aria-hidden="true">✓</span><span>respond to genuine enquiries, corrections, privacy requests or business communications;</span></li>
              <li><span className="tick" aria-hidden="true">✓</span><span>operate, secure, troubleshoot and protect the website and its infrastructure;</span></li>
              <li><span className="tick" aria-hidden="true">✓</span><span>reconcile legitimate partner referrals or commission records where necessary; and</span></li>
              <li><span className="tick" aria-hidden="true">✓</span><span>meet legal, regulatory or record-keeping requirements where they apply.</span></li>
            </ul>
            <p>
              Our usual lawful basis for ordinary website administration, security and genuine enquiries is legitimate interests, because those activities are reasonably necessary to run and protect the website and communicate with people who contact us. We may rely on legal obligation where the law requires processing.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="third-parties"
          eyebrow="4. Service providers and third parties"
          title="Who may receive information?"
          soft
        >
          <div className="content-card">
            <h3>Email provider</h3>
            <p>
              Email sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> is handled through Gmail/Google services in order to deliver and store the message.
            </p>

            <h3>Hosting and infrastructure providers</h3>
            <p>
              Local Trades is hosted using third-party infrastructure. Those providers may process limited technical request, security and diagnostic data as necessary to host, deliver and protect the website.
            </p>

            <h3>MyJobQuote and other partner services</h3>
            <p>
              When you intentionally open or use a third-party quote service, that provider may collect information from you under its own privacy policy. The fact that the service is embedded within a Local Trades page does not make Local Trades the controller of information you submit directly to that provider.
            </p>

            <h3>Legal and professional recipients</h3>
            <p>
              Information may also be disclosed where reasonably necessary to comply with law, protect legal rights, investigate fraud or abuse, or obtain professional advice.
            </p>
            <p><strong>Local Trades does not sell personal-information lists to advertisers.</strong></p>
          </div>
        </InfoSection>

        <InfoSection
          id="cookies"
          eyebrow="5. Cookies"
          title="Cookies and similar technologies"
        >
          <div className="content-card">
            <p>
              Local Trades does not currently intentionally set analytics, advertising or personalisation cookies of its own. Normal hosting and security systems may use strictly necessary technologies to provide and protect the website.
            </p>
            <p>
              The embedded MyJobQuote service is a third-party service and may use its own cookies or similar technologies when you choose to open and use it. Those technologies are controlled by the third party and are described in that provider's own privacy and cookie information. See our <a href="/cookies/">Cookie Policy</a> for more detail.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="retention"
          eyebrow="6. Retention and security"
          title="How long information is kept"
          soft
        >
          <div className="content-card">
            <p>
              Because Local Trades does not currently run accounts or its own job-submission database, there is no Local Trades customer-account or job database to retain.
            </p>
            <p>
              Email enquiries may be retained while the conversation is active and for a reasonable period afterwards so we can understand previous correspondence, deal with follow-up questions or maintain appropriate business records. Older messages may be deleted when there is no longer a reason to keep them.
            </p>
            <p>
              Technical hosting and security logs are generally controlled by the relevant infrastructure provider and retained according to its service configuration and operational requirements.
            </p>
            <p>
              No internet service can promise absolute security, but we intentionally minimise the amount of personal information handled directly by Local Trades and use reputable hosted services.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="your-rights"
          eyebrow="7. Your rights"
          title="UK data-protection rights"
        >
          <div className="content-card">
            <p>
              Depending on the circumstances and legal basis involved, UK data-protection law may give you rights to ask for access to personal information, correction, deletion, restriction, objection and data portability. These rights are not absolute in every situation.
            </p>
            <p>
              To make a request concerning information held by Local Trades, email <a href={`mailto:${CONTACT_EMAIL}`}><strong>{CONTACT_EMAIL}</strong></a>. We may need reasonable information to confirm your identity and understand the request before acting on it.
            </p>
            <p>
              If you are unhappy with how personal information has been handled, you can also complain to the UK Information Commissioner's Office. Visit <a href="https://ico.org.uk/make-a-complaint/" rel="external">the ICO complaints information</a> for current guidance.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="external-services"
          eyebrow="8. Third-party responsibility"
          title="Information submitted to MyJobQuote"
          soft
        >
          <div className="content-card">
            <p>
              If your request concerns information you entered directly into the MyJobQuote form, the relevant privacy request may need to be directed to MyJobQuote because that information is submitted to and processed by its service rather than stored in a Local Trades job database.
            </p>
            <p>
              You should review the privacy information displayed by the third-party service before submitting personal details.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="changes-and-contact"
          eyebrow="9. Updates"
          title="Changes to this Privacy Policy"
        >
          <div className="content-card">
            <p>
              We may update this notice if the website, service providers, partner arrangements or legal requirements change. If Local Trades later introduces analytics, accounts, its own forms, advertising or other new data collection, this policy will be updated to reflect that change.
            </p>
            <p>
              Questions can be sent to <a href={`mailto:${CONTACT_EMAIL}`}><strong>{CONTACT_EMAIL}</strong></a>. You can also read our <a href="/transparency/">Transparency page</a>, <a href="/terms/">Terms &amp; Conditions</a> and <a href="/cookies/">Cookie Policy</a>.
            </p>
          </div>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
