import type { Metadata } from "next";
import { SITE_LOCALE, SITE_NAME, SITE_URL } from "./site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  openGraphDescription?: string;
  twitterDescription?: string;
};

function getOgImage(path: string): string {
  if (path.startsWith("/handyman/")) return "/og/handyman.jpg";
  if (path.startsWith("/plumber/")) return "/og/plumber.jpg";
  if (path.startsWith("/electrician/")) return "/og/electrician.jpg";
  if (path.startsWith("/roofer/")) return "/og/roofer.jpg";
  if (path.startsWith("/painter-decorator/")) return "/og/painter-decorator.jpg";
  if (path.startsWith("/flooring-fitter/")) return "/og/flooring-fitter.jpg";
  if (path.startsWith("/builder/")) return "/og/builder.jpg";
  if (path.startsWith("/gardener/")) return "/og/gardener.jpg";
  return "/og/home.jpg";
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
