import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const read = (file) => fs.readFileSync(path.join(ROOT, file), "utf8");
const exists = (file) => fs.existsSync(path.join(ROOT, file));
const fail = (message) => {
  console.error(`SEO audit failed: ${message}`);
  process.exitCode = 1;
};
const assert = (condition, message) => {
  if (!condition) fail(message);
};
const unique = (items) => [...new Set(items)];
const sameSet = (a, b) => a.length === b.length && a.every((item) => b.includes(item));

function block(source, start, end) {
  const startIndex = source.indexOf(start);
  if (startIndex < 0) throw new Error(`Could not find block start: ${start}`);
  const afterStart = startIndex + start.length;
  const endIndex = source.indexOf(end, afterStart);
  if (endIndex < 0) throw new Error(`Could not find block end after: ${start}`);
  return source.slice(afterStart, endIndex);
}

function serviceSlugsFromIds(source) {
  const body = block(source, "export const SERVICE_CATEGORY_IDS = {", "} as const;");
  const slugs = [];
  for (const line of body.split("\n")) {
    const match = line.match(/^\s*(?:"([^"]+)"|([A-Za-z][\w-]*)):\s*\d+,?\s*$/);
    if (match) slugs.push(match[1] ?? match[2]);
  }
  return slugs;
}

function routeFromPageFile(file) {
  const relative = file.replace(/^src\/app\//, "").replace(/\/page\.tsx$/, "");
  const segments = relative.split("/").filter(Boolean).filter((segment) => !/^\(.+\)$/.test(segment));
  if (segments.some((segment) => segment.startsWith("["))) return null;
  return segments.length ? `/${segments.join("/")}/` : "/";
}

function walk(dir) {
  const absolute = path.join(ROOT, dir);
  return fs.readdirSync(absolute, { withFileTypes: true }).flatMap((entry) => {
    const child = path.posix.join(dir, entry.name);
    return entry.isDirectory() ? walk(child) : [child];
  });
}

function camelFromSlug(slug) {
  const [first, ...rest] = slug.split("-");
  return first + rest.map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
}

function pascalFromSlug(slug) {
  const camel = camelFromSlug(slug);
  return camel.charAt(0).toUpperCase() + camel.slice(1);
}

const BASELINE_LOCATIONS = [
  "london",
  "birmingham",
  "manchester",
  "leeds",
  "liverpool",
  "glasgow",
  "edinburgh",
  "bristol",
  "nottingham",
  "sheffield",
  "leicester",
  "wolverhampton",
  "plymouth",
  "cardiff",
  "newcastle-upon-tyne",
  "southampton",
  "portsmouth",
  "milton-keynes",
  "brighton-hove",
  "reading",
  "solihull",
  "sutton-coldfield",
  "croydon",
  "bromley",
  "stockport",
  "bolton",
  "walsall",
  "romford",
  "southport",
  "st-helens",
  "dudley",
  "sutton",
  "enfield",
  "birkenhead",
  "crosby",
  "bootle",
  "bury",
  "oldham",
  "rochdale",
  "west-bromwich",
];

const idsSource = read("src/lib/serviceIframe.ts");
const categorySource = read("src/lib/serviceCategoryContent.ts");
const pageDetailsSource = read("src/lib/servicePageContent.ts");
const registrySource = read("src/lib/servicePages.ts");
const seoSource = read("src/lib/seo.ts");
const siteSource = read("src/lib/site.ts");
const sitemapSource = read("src/app/sitemap.ts");
const robotsSource = read("src/app/robots.ts");
const layoutSource = read("src/app/layout.tsx");
const nextConfigSource = read("next.config.ts");
const lookupSource = read("src/lib/localServiceLookup.ts");

const services = serviceSlugsFromIds(idsSource);
assert(services.length === 14, `expected 14 service slugs, found ${services.length}`);
assert(unique(services).length === services.length, "SERVICE_CATEGORY_IDS contains duplicate slugs");

const categorySlugs = [...categorySource.matchAll(/\bslug:\s*"([^"]+)"/g)].map((match) => match[1]);
assert(categorySlugs.length === 14, `expected 14 service category definitions, found ${categorySlugs.length}`);
assert(sameSet(services, categorySlugs), "serviceCategories does not match SERVICE_CATEGORY_IDS");

for (const service of services) {
  assert(pageDetailsSource.includes(`"${service}":`) || pageDetailsSource.includes(`${service}:`), `SERVICE_PAGE_DETAILS is missing ${service}`);
}

const publishedServicesBody = block(
  registrySource,
  "export const PUBLISHED_SERVICE_PAGES: readonly ServiceSlug[] = [",
  "];",
);
const publishedServices = [...publishedServicesBody.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
assert(publishedServices.length === 14, `expected 14 published category pages, found ${publishedServices.length}`);
assert(sameSet(services, publishedServices), "PUBLISHED_SERVICE_PAGES does not match the 14 locked services");

const localBody = block(
  registrySource,
  "export const PUBLISHED_LOCAL_SERVICE_PAGES: readonly PublishedLocalServicePage[] = [",
  "];",
);
const localPairs = [...localBody.matchAll(/\{\s*service:\s*"([^"]+)",\s*city:\s*"([^"]+)"\s*\}/g)].map(
  ([, service, city]) => ({ service, city }),
);
const pairKeys = localPairs.map(({ service, city }) => `${service}::${city}`);
assert(unique(pairKeys).length === pairKeys.length, "PUBLISHED_LOCAL_SERVICE_PAGES contains duplicate service/location pairs");

const cities = unique(localPairs.map(({ city }) => city));
for (const city of BASELINE_LOCATIONS) {
  assert(cities.includes(city), `baseline location missing from publication registry: ${city}`);
}
assert(cities.length >= BASELINE_LOCATIONS.length, `expected at least ${BASELINE_LOCATIONS.length} locations, found ${cities.length}`);

for (const city of cities) {
  const cityServices = localPairs.filter((page) => page.city === city).map((page) => page.service);
  assert(cityServices.length === services.length, `${city} has ${cityServices.length} published services instead of ${services.length}`);
  assert(sameSet(services, cityServices), `${city} does not contain the complete 14-service set`);
}
for (const service of services) {
  const serviceCities = localPairs.filter((page) => page.service === service).map((page) => page.city);
  assert(serviceCities.length === cities.length, `${service} has ${serviceCities.length} locations but registry has ${cities.length} cities`);
}

const expectedCurrentPairs = BASELINE_LOCATIONS.length * services.length;
assert(localPairs.length >= expectedCurrentPairs, `expected at least ${expectedCurrentPairs} local pages, found ${localPairs.length}`);

const ogBody = block(seoSource, "export const SERVICE_OG_IMAGES: Record<ServiceSlug, string> = {", "};");
const ogEntries = [...ogBody.matchAll(/(?:"([^"]+)"|([A-Za-z][\w-]*)):\s*"([^"]+)"/g)].map((match) => ({
  service: match[1] ?? match[2],
  image: match[3],
}));
assert(ogEntries.length === 14, `expected 14 explicit category OG paths, found ${ogEntries.length}`);
assert(sameSet(services, ogEntries.map((entry) => entry.service)), "SERVICE_OG_IMAGES does not match the 14 locked services");
for (const { service, image } of ogEntries) {
  assert(image === `/og/${service}.png`, `OG path for ${service} should be /og/${service}.png, found ${image}`);
}
assert(exists("public/og/home.jpg"), "default homepage OG image public/og/home.jpg is missing");
assert(exists("src/app/og/[...slug]/route.tsx"), "dynamic category OG route is missing");
const ogRouteSource = read("src/app/og/[...slug]/route.tsx");
assert(ogRouteSource.includes("getServiceCategory(serviceSlug)"), "OG route is not validating category slugs");
assert(ogRouteSource.includes("width: 1200") && ogRouteSource.includes("height: 630"), "OG route is not 1200x630");

assert(siteSource.includes('SITE_URL = "https://getlocaltrades.uk"'), "canonical SITE_URL is not https://getlocaltrades.uk");
assert(!siteSource.includes("https://www.getlocaltrades.uk"), "www canonical must not be used");
assert(nextConfigSource.includes("trailingSlash: true"), "Next.js trailingSlash must remain true");
assert(layoutSource.includes("metadataBase: new URL(SITE_URL)"), "root metadataBase is missing");
assert(layoutSource.includes("<html lang={SITE_LANGUAGE}>"), "root language metadata is missing");
assert(seoSource.includes("alternates:") && seoSource.includes("canonical,"), "shared metadata helper is missing self-canonical metadata");
assert(seoSource.includes("openGraph:") && seoSource.includes("twitter:"), "shared metadata helper is missing Open Graph or Twitter metadata");
assert(seoSource.includes("index,follow,max-image-preview:large"), "index/follow robots metadata is missing from shared metadata helper");

const sitemapStaticBody = block(sitemapSource, "const STATIC_PATHS = [", "] as const;");
const sitemapStaticPaths = [...sitemapStaticBody.matchAll(/"([^"]+)"/g)].map((match) => match[1]);
const pageFiles = walk("src/app").filter((file) => file.endsWith("/page.tsx"));
const staticPageFiles = pageFiles.filter((file) => routeFromPageFile(file) !== null);
const actualStaticPaths = staticPageFiles.map(routeFromPageFile);
assert(sameSet(sitemapStaticPaths, actualStaticPaths), `sitemap static routes do not match actual static pages: sitemap=${sitemapStaticPaths.join(", ")} actual=${actualStaticPaths.join(", ")}`);

for (const file of pageFiles) {
  const source = read(file);
  assert(source.includes("createPageMetadata"), `${file} does not use the shared metadata helper`);
}
const categoryRouteSource = read("src/app/[service]/page.tsx");
const localRouteSource = read("src/app/[service]/[city]/page.tsx");
assert(categoryRouteSource.includes("dynamicParams = false"), "category pages must keep dynamicParams=false");
assert(localRouteSource.includes("dynamicParams = false"), "local pages must keep dynamicParams=false");
assert(categoryRouteSource.includes("PUBLISHED_SERVICE_PAGES.map"), "category static params are not driven by PUBLISHED_SERVICE_PAGES");
assert(localRouteSource.includes("PUBLISHED_LOCAL_SERVICE_PAGES.map"), "local static params are not driven by PUBLISHED_LOCAL_SERVICE_PAGES");
assert(categoryRouteSource.includes("createServiceCategoryPageStructuredData"), "category Service/WebPage/Breadcrumb schema is missing");
assert(localRouteSource.includes("createLocalServicePageStructuredData"), "local Service/WebPage/Breadcrumb schema is missing");
assert(localRouteSource.includes("servicePagePath(content.serviceSlug)"), "local breadcrumb does not link to its parent category");

assert(robotsSource.includes('userAgent: "*"') && robotsSource.includes('allow: "/"'), "robots.ts does not allow crawling");
assert(robotsSource.includes("${SITE_URL}/sitemap.xml"), "robots.ts does not declare the canonical sitemap");
assert(sitemapSource.includes("PUBLISHED_SERVICE_PAGES.map"), "sitemap is not including published category pages");
assert(sitemapSource.includes("PUBLISHED_LOCAL_SERVICE_PAGES.map"), "sitemap is not including published local pages");

const homepageDirectorySource = read("src/components/HomepageExtraContent.tsx");
const footerSource = read("src/components/SiteFooter.tsx");
const categoryLandingSource = read("src/components/ServiceCategoryLandingPage.tsx");
const localLandingSource = read("src/components/LocalServiceLandingPage.tsx");
assert(homepageDirectorySource.includes("servicePagePath(service.slug)"), "homepage has no crawlable service-directory links");
assert(footerSource.includes("servicePagePath(service.slug)"), "global footer has no crawlable category links");
assert(categoryLandingSource.includes("locationLinks.map") && categoryLandingSource.includes("href={location.href}"), "category pages do not render crawlable location links");
assert(localLandingSource.includes("locationServices.map") && localLandingSource.includes("localServicePagePath(service.slug, content.locationSlug)"), "local pages do not cross-link same-city services");

for (const city of cities) {
  const camel = camelFromSlug(city);
  const pascal = pascalFromSlug(city);
  const modulePath = `src/lib/${camel}ServiceContent.ts`;
  assert(exists(modulePath), `local service registry module is missing for ${city}: ${modulePath}`);
  assert(lookupSource.includes(`get${pascal}ServiceContent`), `localServiceLookup.ts is not wired for ${city}`);
}

if (!process.exitCode) {
  const staticCount = actualStaticPaths.length;
  const categoryCount = publishedServices.length;
  const localCount = localPairs.length;
  console.log(`SEO audit passed: ${staticCount} static + ${categoryCount} category + ${localCount} local = ${staticCount + categoryCount + localCount} indexable HTML pages.`);
  console.log(`SEO audit passed: ${services.length} explicit category OG paths and ${cities.length} complete service/location sets.`);
}
