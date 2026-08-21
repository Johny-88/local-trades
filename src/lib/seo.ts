import type { Metadata } from "next";
import { SERVICE_CATEGORY_IDS, type ServiceSlug } from "./serviceIframe";
import { DEFAULT_OG_IMAGE, SITE_LOCALE, SITE_NAME, SITE_URL } from "./site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  openGraphDescription?: string;
  twitterDescription?: string;
};

const SERVICE_SLUGS = Object.keys(SERVICE_CATEGORY_IDS) as ServiceSlug[];

function serviceSlugFromPath(path: string): ServiceSlug | undefined {
  const firstSegment = path.split("/").filter(Boolean)[0];
  return SERVICE_SLUGS.find((slug) => slug === firstSegment);
}

export function getOgImage(path: string): string {
  const serviceSlug = serviceSlugFromPath(path);
  if (serviceSlug) {
    return `/og/${serviceSlug}.png`;
  }

  return DEFAULT_OG_IMAGE;
}

export function createPageMetadata({
  title,
  description,
  path,
  ogImage,
  openGraphDescription = description,
  twitterDescription = openGraphDescription,
}: PageMetadataOptions): Metadata {
  const canonical = new URL(path, `${SITE_URL}/`).toString();
  const image = new URL(ogImage ?? getOgImage(path), `${SITE_URL}/`).toString();
  const compactLogoImage = new URL("/og/logo-square.png", `${SITE_URL}/`).toString();

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    robots:
      "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      title,
      description: openGraphDescription,
      url: canonical,
      locale: SITE_LOCALE,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
        {
          url: compactLogoImage,
          width: 512,
          height: 512,
          alt: `${SITE_NAME} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: twitterDescription,
      images: [image],
    },
  };
}
