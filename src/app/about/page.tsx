import type { Metadata } from "next";
import { InfoPageShell, InfoSection } from "../../components/InfoPageShell";
import { JsonLd } from "../../components/JsonLd";
import { createPageMetadata } from "../../lib/seo";
import { aboutPageStructuredData, type BreadcrumbItem } from "../../lib/schema";

const canonicalPath = "/about/";
const title = "About Local Trades | How the Website Works";
const description =
  "Learn how Local Trades helps UK homeowners describe a job, compare local quote options and understand our independent referral model.";

export const metadata: Metadata = createPageMetadata({
  title,
  description,
  path: canonicalPath,
});

const breadcrumbItems: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "About", href: canonicalPath },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutPageStructuredData} />
      <InfoPageShell
        eyebrow="About Local Trades"
        title="A calmer way to find local tradespeople"
        intro="Local Trades is an independent UK information and referral website for homeowners."
        breadcrumbItems={breadcrumbItems}
        summaryTitle="What we do"
        summary={
          <p>
            We help you choose the right trade, describe the job and open a third-party quote service without pretending that Local Trades employs the tradespeople.
          </p>
        }
      >
        <InfoSection title="Our role">
          <p>
            Local Trades provides homeowner guidance and a route to request quotes through our current partner service. We do not carry out the work and we are not a party to the contract between you and a tradesperson.
          </p>
        </InfoSection>
        <InfoSection title="Commercial transparency" soft>
          <p>
            We may earn commission from qualifying referrals. That does not change the price a homeowner pays to post a job.
          </p>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
