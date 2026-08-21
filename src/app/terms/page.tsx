import type { Metadata } from "next";
import { InfoPageShell, InfoSection } from "../../components/InfoPageShell";
import { JsonLd } from "../../components/JsonLd";
import { createInfoPageStructuredData, type BreadcrumbItem } from "../../lib/schema";
import { createPageMetadata } from "../../lib/seo";

const path = "/terms/";
const title = "Terms & Conditions | Local Trades";
const description = "Terms for using Local Trades and its homeowner referral pages.";

export const metadata: Metadata = createPageMetadata({ title, description, path });

const breadcrumbs: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Terms", href: path },
];

export default function Page() {
  return (
    <>
      <JsonLd data={createInfoPageStructuredData(path, title, description, breadcrumbs)} />
      <InfoPageShell
        eyebrow="Terms"
        title="Terms & Conditions"
        intro="These terms describe the role of Local Trades as an information and referral website."
        breadcrumbItems={breadcrumbs}
        summaryTitle="Local Trades is not the contractor"
        summary={<p>Tradespeople remain independent third parties. Any quote, contract, payment and work arrangement is between the relevant parties, not Local Trades.</p>}
      >
        <InfoSection title="Using the website">
          <p>Information is provided for general homeowner guidance. You remain responsible for checking the suitability, qualifications, insurance and terms of any tradesperson you consider hiring.</p>
        </InfoSection>
        <InfoSection title="Partner services" soft>
          <p>Quote forms and matching services may be supplied by third parties and are subject to their own terms.</p>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
