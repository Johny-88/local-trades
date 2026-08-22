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

export const SERVICE_OG_IMAGES: Record<ServiceSlug, string> = {
  "removal-companies": "/og/removal-companies.png",
  cleaners: "/og/cleaners.png",
  tilers: "/og/tilers.png",
  "heating-engineers": "/og/heating-engineers.png",
  locksmiths: "/og/locksmiths.png",
  "pest-controllers": "/og/pest-controllers.png",
  "tree-surgeons": "/og/tree-surgeons.png",
  architects: "/og/architects.png",
  plasterers: "/og/plasterers.png",
  "kitchen-fitters": "/og/kitchen-fitters.png",
  "bathroom-specialists": "/og/bathroom-specialists.png",
  "drainage-specialists": "/og/drainage-specialists.png",
  "driveway-specialists": "/og/driveway-specialists.png",
  "window-specialists": "/og/window-specialists.png",
};

const SERVICE_SLUGS = Object.keys(SERVICE_CATEGORY_IDS) as ServiceSlug[];

function serviceSlugFromPath(path: string): ServiceSlug | undefined {
  const firstSegment = path.split("/").filter(Boolean)[0];
  return SERVICE_SLUGS.find((slug) => slug === firstSegment);
}

export function getOgImage(path: string): string {
  const serviceSlug = serviceSlugFromPath(path);
  if (serviceSlug) {
    return SERVICE_OG_IMAGES[serviceSlug];
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
