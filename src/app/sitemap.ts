import type { MetadataRoute } from "next";
import { PUBLISHED_LOCAL_PAGES, localPagePath } from "../lib/localPages";
import { SITE_URL } from "../lib/site";

const STATIC_PATHS = [
  "/",
  "/about/",
  "/handyman/",
  "/plumber/",
  "/electrician/",
  "/roofer/",
  "/painter-decorator/",
  "/flooring-fitter/",
  "/builder/",
  "/gardener/",
  "/contact/",
  "/privacy/",
  "/cookies/",
  "/terms/",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...STATIC_PATHS.map((path) => ({ url: `${SITE_URL}${path}` })),
    ...PUBLISHED_LOCAL_PAGES.map((page) => ({
      url: `${SITE_URL}${localPagePath(page.trade, page.city)}`,
    })),
  ];
}
