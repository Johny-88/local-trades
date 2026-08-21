import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceCategoryLandingPage } from "../../components/ServiceCategoryLandingPage";
import { getServiceCategory } from "../../lib/serviceCategoryContent";
import { getLocalServiceContent } from "../../lib/localServiceLookup";
import { SERVICE_PAGE_DETAILS } from "../../lib/servicePageContent";
import {
  PUBLISHED_LOCAL_SERVICE_PAGES,
  PUBLISHED_SERVICE_PAGES,
  localServicePagePath,
  servicePagePath,
} from "../../lib/servicePages";
import { createPageMetadata } from "../../lib/seo";
import { createServiceCategoryPageStructuredData, type BreadcrumbItem } from "../../lib/schema";
import type { ServiceSlug } from "../../lib/serviceIframe";

type Params = { service: string };

export const dynamicParams = false;

export function generateStaticParams() {
  return PUBLISHED_SERVICE_PAGES.map((service) => ({ service }));
}

function isPublished(service: string): service is ServiceSlug {
  return PUBLISHED_SERVICE_PAGES.includes(service as ServiceSlug);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { service: slug } = await params;
  if (!isPublished(slug)) notFound();
  const service = getServiceCategory(slug);
  if (!service) notFound();

  const path = servicePagePath(slug);
  const title = `Find Local ${service.plural} Near You | Local Trades`;
  const description = `Find local ${service.plural.toLowerCase()} near you. Post your job once, compare up to 3 interested local responses and verified reviews before choosing who to hire.`;
  const socialDescription = `Need ${service.plural.toLowerCase()}? Post the job once, hear from interested local professionals and compare verified reviews and quotes before you hire.`;

  return createPageMetadata({
    title,
    description,
    path,
    openGraphDescription: socialDescription,
    twitterDescription: socialDescription,
  });
}

export default async function ServicePage({ params }: { params: Promise<Params> }) {
  const { service: slug } = await params;
  if (!isPublished(slug)) notFound();
  const service = getServiceCategory(slug);
  if (!service) notFound();

  const details = SERVICE_PAGE_DETAILS[slug];
  const canonicalPath = servicePagePath(slug);
  const title = `Find Local ${service.plural} Near You | Local Trades`;
  const description = `Find local ${service.plural.toLowerCase()} near you. Post your job once, compare interested local professionals, verified reviews and quotes before choosing who to hire.`;
  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: service.plural, href: canonicalPath },
  ];

  const locationLinks = PUBLISHED_LOCAL_SERVICE_PAGES
    .filter((page) => page.service === slug)
    .map((page) => {
      const localContent = getLocalServiceContent(page.service, page.city);
      if (!localContent) return null;

      return {
        name: `${localContent.servicePlural} ${localContent.locationName}`,
        href: localServicePagePath(page.service, page.city),
      };
    })
    .filter((link): link is { name: string; href: string } => Boolean(link));

  const structuredData = createServiceCategoryPageStructuredData({
    canonicalPath,
    title,
    description,
    serviceName: `Find Local ${service.plural}`,
    serviceType: `${service.plural} matching and quote service`,
    breadcrumbItems,
  });

  return (
    <ServiceCategoryLandingPage
      service={service}
      details={details}
      breadcrumbItems={breadcrumbItems}
      structuredData={structuredData}
      locationLinks={locationLinks}
    />
  );
}
