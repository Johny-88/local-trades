import type { ServiceSlug } from "./serviceIframe";

export type PublishedLocalServicePage = {
  service: ServiceSlug;
  city: string;
};

/**
 * Add a service slug here only when its top-level SEO landing page exists and is ready to index.
 * The sitemap reads this registry automatically.
 */
export const PUBLISHED_SERVICE_PAGES: readonly ServiceSlug[] = [
  "removal-companies",
  "cleaners",
  "tilers",
  "heating-engineers",
  "locksmiths",
  "pest-controllers",
  "tree-surgeons",
  "architects",
  "plasterers",
  "kitchen-fitters",
  "bathroom-specialists",
  "drainage-specialists",
  "driveway-specialists",
  "window-specialists",
];

/**
 * Add a location page here only after the route and its researched local content are complete.
 * `city` must be the URL slug used by the page, for example `croydon`.
 */
export const PUBLISHED_LOCAL_SERVICE_PAGES: readonly PublishedLocalServicePage[] = [
  { service: "removal-companies", city: "birmingham" },
  { service: "cleaners", city: "birmingham" },
  { service: "tilers", city: "birmingham" },
  { service: "heating-engineers", city: "birmingham" },
  { service: "locksmiths", city: "birmingham" },
  { service: "pest-controllers", city: "birmingham" },
  { service: "tree-surgeons", city: "birmingham" },
  { service: "architects", city: "birmingham" },
  { service: "plasterers", city: "birmingham" },
  { service: "kitchen-fitters", city: "birmingham" },
  { service: "bathroom-specialists", city: "birmingham" },
  { service: "drainage-specialists", city: "birmingham" },
  { service: "driveway-specialists", city: "birmingham" },
  { service: "window-specialists", city: "birmingham" },
  { service: "removal-companies", city: "manchester" },
  { service: "cleaners", city: "manchester" },
  { service: "tilers", city: "manchester" },
  { service: "heating-engineers", city: "manchester" },
  { service: "locksmiths", city: "manchester" },
  { service: "pest-controllers", city: "manchester" },
  { service: "tree-surgeons", city: "manchester" },
  { service: "architects", city: "manchester" },
  { service: "plasterers", city: "manchester" },
  { service: "kitchen-fitters", city: "manchester" },
  { service: "bathroom-specialists", city: "manchester" },
  { service: "drainage-specialists", city: "manchester" },
  { service: "driveway-specialists", city: "manchester" },
  { service: "window-specialists", city: "manchester" },
];

export function servicePagePath(service: ServiceSlug) {
  return `/${service}/`;
}

export function localServicePagePath(service: ServiceSlug, city: string) {
  return `/${service}/${city}/`;
}
