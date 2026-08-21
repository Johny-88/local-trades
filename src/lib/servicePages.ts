import type { ServiceSlug } from "./serviceIframe";

export type PublishedLocalServicePage = {
  service: ServiceSlug;
  city: string;
};

/**
 * Add a service slug here only when its top-level SEO landing page exists and is ready to index.
 * The sitemap reads this registry automatically.
 */
export const PUBLISHED_SERVICE_PAGES: readonly ServiceSlug[] = [];

/**
 * Add a location page here only after the route and its researched local content are complete.
 * `city` must be the URL slug used by the page, for example `croydon`.
 */
export const PUBLISHED_LOCAL_SERVICE_PAGES: readonly PublishedLocalServicePage[] = [];

export function servicePagePath(service: ServiceSlug) {
  return `/${service}/`;
}

export function localServicePagePath(service: ServiceSlug, city: string) {
  return `/${service}/${city}/`;
}
