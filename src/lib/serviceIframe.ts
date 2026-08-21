export const MJQ_IFRAME_BASE = "https://www.myjobquote.co.uk/iframes/v1/ifr_gaqubieivjwserhvbwhg5kr0dxcf";

export const SERVICE_CATEGORY_IDS = {
  "removal-companies": 321,
  cleaners: 52,
  tilers: 229,
  "heating-engineers": 107,
  locksmiths: 124,
  "pest-controllers": 150,
  "tree-surgeons": 249,
  architects: 268,
  plasterers: 153,
  "kitchen-fitters": 116,
  "bathroom-specialists": 8,
  "drainage-specialists": 56,
  "driveway-specialists": 59,
  "window-specialists": 254,
} as const;

export type ServiceSlug = keyof typeof SERVICE_CATEGORY_IDS;

export function buildServiceIframeUrl(serviceSlug?: ServiceSlug) {
  if (!serviceSlug) return MJQ_IFRAME_BASE;

  const url = new URL(MJQ_IFRAME_BASE);
  url.searchParams.set("trade", String(SERVICE_CATEGORY_IDS[serviceSlug]));
  return url.toString();
}
