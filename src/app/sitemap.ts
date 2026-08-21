import type { MetadataRoute } from "next";
import {
  PUBLISHED_LOCAL_SERVICE_PAGES,
  PUBLISHED_SERVICE_PAGES,
  localServicePagePath,
  servicePagePath,
} from "../lib/servicePages";
import { SITE_URL } from "../lib/site";

const STATIC_PATHS = [
  "/",
  "/about/",
  "/contact/",
  "/privacy/",
  "/cookies/",
  "/terms/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_PATHS.map((path) => ({
      url: `${SITE_URL}${path}`,
    })),
    ...PUBLISHED_SERVICE_PAGES.map((service) => ({
      url: `${SITE_URL}${servicePagePath(service)}`,
    })),
    ...PUBLISHED_LOCAL_SERVICE_PAGES.map((page) => ({
      url: `${SITE_URL}${localServicePagePath(page.service, page.city)}`,
    })),
  ];
}
