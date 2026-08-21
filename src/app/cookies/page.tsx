import type { Metadata } from "next";
import { InfoPageShell, InfoSection } from "../../components/InfoPageShell";
import { JsonLd } from "../../components/JsonLd";
import { createInfoPageStructuredData, type BreadcrumbItem } from "../../lib/schema";
import { createPageMetadata } from "../../lib/seo";

const path = "/cookies/";
const title = "Cookie Policy | Local Trades";
const description = "Cookie information for Local Trades.";

export const metadata: Metadata = createPageMetadata({ title, description, path });

const breadcrumbs: BreadcrumbItem[] = [
  { name: "Home", href: "/" },
  { name: "Cookies", href: path },
];

export default function Page() {
  return (
    <>
      <JsonLd data={createInfoPageStructuredData(path, title, description, breadcrumbs)} />
      <InfoPageShell
        eyebrow="Cookies"
        title="Cookie Policy"
        intro="This page explains the categories of cookies that may be used on Local Trades."
        breadcrumbItems={breadcrumbs}
        summaryTitle="Keep it proportionate"
        summary={<p>Cookies should be limited to those needed for site operation, measurement and any third-party services that a visitor chooses to use.</p>}
      >
        <InfoSection title="Essential cookies">
          <p>Essential cookies may be used where required for security, preferences or basic functionality.</p>
        </InfoSection>
        <InfoSection title="Analytics and third parties" soft>
          <p>If analytics or additional third-party tools are enabled, this policy should be updated to identify them and explain the relevant choices.</p>
        </InfoSection>
      </InfoPageShell>
    </>
  );
}
