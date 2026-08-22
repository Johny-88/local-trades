import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LocalServiceLandingPage } from "../../../components/LocalServiceLandingPage";
import { getLocalServiceContent } from "../../../lib/localServiceLookup";
import {
  PUBLISHED_LOCAL_SERVICE_PAGES,
  localServicePagePath,
  servicePagePath,
} from "../../../lib/servicePages";
import { createPageMetadata } from "../../../lib/seo";
import { createLocalServicePageStructuredData, type BreadcrumbItem } from "../../../lib/schema";

type LocalServiceRouteParams = {
  service: string;
  city: string;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return PUBLISHED_LOCAL_SERVICE_PAGES.map(({ service, city }) => ({ service, city }));
}

function isPublished(service: string, city: string) {
  return PUBLISHED_LOCAL_SERVICE_PAGES.some(
    (page) => page.service === service && page.city === city,
  );
}

function pageTitle(servicePlural: string, locationName: string) {
  return `${servicePlural} ${locationName} | Compare Local Quotes`;
}

function pageDescription(servicePlural: string, locationName: string) {
  return `Find ${servicePlural.toLowerCase()} in ${locationName}. Post your job once, compare up to 3 local responses and verified reviews before you hire.`;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<LocalServiceRouteParams>;
}): Promise<Metadata> {
  const { service, city } = await params;
  if (!isPublished(service, city)) notFound();

  const content = getLocalServiceContent(service, city);
  if (!content) notFound();

  const path = localServicePagePath(content.serviceSlug, content.locationSlug);
  const title = pageTitle(content.servicePlural, content.locationName);
  const description = pageDescription(content.servicePlural, content.locationName);
  const socialDescription = `Need ${content.servicePlural.toLowerCase()} in ${content.locationName}? Post the job once, hear from interested local professionals and compare verified reviews and quotes before you hire.`;

  return createPageMetadata({
    title,
    description,
    path,
    openGraphDescription: socialDescription,
    twitterDescription: socialDescription,
  });
}

export default async function LocalServiceCityPage({
  params,
}: {
  params: Promise<LocalServiceRouteParams>;
}) {
  const { service, city } = await params;
  if (!isPublished(service, city)) notFound();

  const content = getLocalServiceContent(service, city);
  if (!content) notFound();

  const canonicalPath = localServicePagePath(content.serviceSlug, content.locationSlug);
  const parentServicePath = servicePagePath(content.serviceSlug);
  const title = pageTitle(content.servicePlural, content.locationName);
  const description = pageDescription(content.servicePlural, content.locationName);

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: "Home", href: "/" },
    { name: content.servicePlural, href: parentServicePath },
    { name: `${content.servicePlural} ${content.locationName}`, href: canonicalPath },
  ];

  const structuredData = createLocalServicePageStructuredData({
    canonicalPath,
    title,
    description,
    serviceName: `${content.servicePlural} in ${content.locationName}`,
    serviceType: `${content.servicePlural} matching and quote service`,
    city: content.locationName,
    region: content.region,
    breadcrumbItems,
  });

  return (
    <LocalServiceLandingPage
      content={content}
      breadcrumbItems={breadcrumbItems}
      structuredData={structuredData}
    />
  );
}
