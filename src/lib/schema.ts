import { CONTACT_EMAIL, SITE_NAME, SITE_URL } from "./site";

export type BreadcrumbItem = {
  name: string;
  href: string;
};

const organization = {
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  url: `${SITE_URL}/`,
  email: CONTACT_EMAIL,
  description:
    "Independent UK information and referral website helping homeowners find local home and property specialists, describe a job, compare interested professionals and continue to a third-party quote service when they want to request quotes.",
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/assets/logo.svg`,
    width: 512,
    height: 512,
  },
} as const;

const website = {
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-GB",
} as const;

export const homePageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [organization, website],
} as const;

export const aboutPageStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    organization,
    website,
    {
      "@type": "AboutPage",
      "@id": `${SITE_URL}/about/#webpage`,
      url: `${SITE_URL}/about/`,
      name: "About Local Trades",
      description:
        "How Local Trades works, including its independent information and referral role and its relationship with third-party quote services.",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      mainEntity: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-GB",
    },
  ],
} as const;

type ServiceCategoryStructuredDataOptions = {
  canonicalPath: string;
  title: string;
  description: string;
  serviceName: string;
  serviceType: string;
  breadcrumbItems: BreadcrumbItem[];
};

type LocalServiceStructuredDataOptions = {
  canonicalPath: string;
  title: string;
  description: string;
  serviceName: string;
  serviceType: string;
  city: string;
  region: string;
  breadcrumbItems: BreadcrumbItem[];
};

function absoluteUrl(path: string) {
  return new URL(path, `${SITE_URL}/`).toString();
}

function breadcrumbList(breadcrumbId: string, breadcrumbItems: BreadcrumbItem[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

export function createInfoPageStructuredData(
  path: string,
  title: string,
  description: string,
  breadcrumbItems: BreadcrumbItem[],
) {
  const canonical = absoluteUrl(path);
  const breadcrumbId = `${canonical}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      {
        "@type": "WebPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": breadcrumbId },
        inLanguage: "en-GB",
      },
      breadcrumbList(breadcrumbId, breadcrumbItems),
    ],
  };
}

export function createServiceCategoryPageStructuredData({
  canonicalPath,
  title,
  description,
  serviceName,
  serviceType,
  breadcrumbItems,
}: ServiceCategoryStructuredDataOptions) {
  const canonical = absoluteUrl(canonicalPath);
  const pageId = `${canonical}#webpage`;
  const serviceId = `${canonical}#service`;
  const breadcrumbId = `${canonical}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      {
        "@type": "Service",
        "@id": serviceId,
        name: serviceName,
        serviceType,
        areaServed: {
          "@type": "Country",
          name: "United Kingdom",
        },
        url: canonical,
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: canonical,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": serviceId },
        breadcrumb: { "@id": breadcrumbId },
        inLanguage: "en-GB",
      },
      breadcrumbList(breadcrumbId, breadcrumbItems),
    ],
  };
}

export function createLocalServicePageStructuredData({
  canonicalPath,
  title,
  description,
  serviceName,
  serviceType,
  city,
  region,
  breadcrumbItems,
}: LocalServiceStructuredDataOptions) {
  const canonical = absoluteUrl(canonicalPath);
  const pageId = `${canonical}#webpage`;
  const serviceId = `${canonical}#service`;
  const breadcrumbId = `${canonical}#breadcrumb`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      organization,
      website,
      {
        "@type": "Service",
        "@id": serviceId,
        name: serviceName,
        serviceType,
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: region,
          },
        },
        url: canonical,
      },
      {
        "@type": "WebPage",
        "@id": pageId,
        url: canonical,
        name: title,
        description,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@id": serviceId },
        breadcrumb: { "@id": breadcrumbId },
        inLanguage: "en-GB",
      },
      breadcrumbList(breadcrumbId, breadcrumbItems),
    ],
  };
}
