import type { Metadata } from "next";
import { InfoPageShell, InfoSection } from "../../components/InfoPageShell";
import { JsonLd } from "../../components/JsonLd";
import { createInfoPageStructuredData, type BreadcrumbItem } from "../../lib/schema";
import { createPageMetadata } from "../../lib/seo";
import { CONTACT_EMAIL } from "../../lib/site";

const title = "Cookie Policy | Local Trades";
const description = "Read the Local Trades Cookie Policy, including essential website technologies and cookies that may be used by embedded third-party quote services.";
const canonicalPath = "/cookies/";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
  openGraphDescription: "How Local Trades uses essential website technologies and how embedded third-party quote services may use their own cookies.",
  twitterDescription: "Read the Local Trades Cookie Policy for essential site technologies and embedded third-party services.",
});

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Cookie Policy", href: canonicalPath },
];

export default function CookiesPage() {
  return (
    <>
      <JsonLd data={createInfoPageStructuredData(canonicalPath, title, description, breadcrumbItems)} />
      <InfoPageShell
        eyebrow="Cookie Policy"
        title="Cookies and similar technologies on Local Trades"
        intro="Local Trades currently keeps its own tracking deliberately minimal. This page explains the essential technologies that may be involved in delivering the website and what can happen when you choose to open an embedded third-party quote service."
        breadcrumbItems={breadcrumbItems}
        summaryTitle="No Local Trades analytics or advertising cookies are currently enabled"
        summary={
          <p>
            Local Trades does not currently intentionally set analytics, advertising or personalisation cookies of its own. The site may rely on strictly necessary hosting and security technologies, while embedded third-party services can operate under their own cookie rules when you choose to use them.
          </p>
        }
      >
        <InfoSection
          id="what-are-cookies"
          eyebrow="1. About cookies"
          title="What are cookies and similar technologies?"
          intro="Last updated: 21 August 2026. Cookies are small pieces of information a website or online service can store on your device and read again later. Similar technologies can include local storage, scripts, tags and security tokens."
        >
          <div className="content-card">
            <p>
              Some technologies are necessary to deliver a requested feature, remember a basic preference, keep a service secure or prevent abuse. Others are optional and can be used for analytics, advertising or personalisation.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="current-use"
          eyebrow="2. Current Local Trades setup"
          title="What Local Trades intentionally uses"
          soft
        >
          <div className="content-card">
            <h3>Essential hosting and security</h3>
            <p>
              The website is delivered using third-party hosting and infrastructure. Those systems may use strictly necessary cookies or similar technical mechanisms where needed to deliver pages, route requests, protect the service, prevent abuse or maintain security.
            </p>

            <h3>No Local Trades analytics cookies</h3>
            <p>
              Local Trades does not currently use Google Analytics or another analytics platform on the live site, and we do not intentionally set advertising or personalised-marketing cookies of our own.
            </p>

            <h3>No Local Trades account or preference cookies</h3>
            <p>
              The site does not currently provide user accounts, saved job profiles, shopping baskets or other Local Trades features that require persistent account or preference cookies.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="third-party-forms"
          eyebrow="3. Embedded services"
          title="MyJobQuote quote forms"
        >
          <div className="content-card">
            <p>
              Local Trades uses an embedded MyJobQuote quote service. The form is supplied by MyJobQuote and is opened when you choose to request quotes. Because it is a third-party service, MyJobQuote may use cookies or similar technologies within that service for functionality, security, fraud prevention, measurement or other purposes described in its own policies.
            </p>
            <p>
              Those technologies are controlled by MyJobQuote rather than Local Trades. Information you enter into the embedded form is submitted to the third-party service, not to a Local Trades-owned job database.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="external-sites"
          eyebrow="4. External websites"
          title="What happens when you visit another service"
          soft
        >
          <div className="content-card">
            <p>
              Local Trades may also link to third-party websites. Once you use a separate website or service, that provider may use its own cookies, analytics, security tools, advertising technologies or consent controls under its own privacy and cookie information.
            </p>
            <p>
              Your browser settings can also be used to view, block or delete cookies and local site data. Blocking strictly necessary technologies can sometimes prevent a requested feature from working correctly.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="future-changes"
          eyebrow="5. Future changes"
          title="If Local Trades introduces analytics or advertising"
        >
          <div className="content-card">
            <p>
              If we later introduce analytics, advertising, personalisation or another non-essential tracking technology, we will review the legal and technical requirements before enabling it, update this policy and add an appropriate consent mechanism where consent is required.
            </p>
          </div>
        </InfoSection>

        <InfoSection
          id="contact"
          eyebrow="6. Questions"
          title="Questions about cookies or privacy"
          soft
        >
          <div className="content-card">
            <p>
              If you have a question about this policy or believe the live site is using a technology that is not described here, email <a href={`mailto:${CONTACT_EMAIL}`}><strong>{CONTACT_EMAIL}</strong></a>.
            </p>
            <p>
              For information about personal information more generally, read our <a href="/privacy/">Privacy Policy</a>. You can also review our <a href="/transparency/">Transparency page</a> and <a href="/terms/">Terms &amp; Conditions</a>.
            </p>
          </div>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
