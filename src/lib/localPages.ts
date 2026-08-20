import type { TradeSlug } from "./affiliateLinks";

export const LOCAL_LOCATIONS = {
  birmingham: { name: "Birmingham", region: "West Midlands", postcodeExample: "B15 2TT" },
  london: { name: "London", region: "Greater London", postcodeExample: "SW1A 1AA" },
  manchester: { name: "Manchester", region: "Greater Manchester", postcodeExample: "M1 1AE" },
  worcester: { name: "Worcester", region: "Worcestershire", postcodeExample: "WR1 2EY" },
  warrington: { name: "Warrington", region: "Cheshire", postcodeExample: "WA1 1UH" },
  liverpool: { name: "Liverpool", region: "Merseyside", postcodeExample: "L3 1AH" },
  leeds: { name: "Leeds", region: "West Yorkshire", postcodeExample: "LS1 1UR" },
  "sutton-coldfield": { name: "Sutton Coldfield", region: "West Midlands", postcodeExample: "B73 6DA" },
  solihull: { name: "Solihull", region: "West Midlands", postcodeExample: "B91 3QB" },
  croydon: { name: "Croydon", region: "Greater London", postcodeExample: "CR0 1EA" },
  bromley: { name: "Bromley", region: "Greater London", postcodeExample: "BR1 1LX" },
  stockport: { name: "Stockport", region: "Greater Manchester", postcodeExample: "SK1 3XE" },
  bolton: { name: "Bolton", region: "Greater Manchester", postcodeExample: "BL1 1RU" },
  walsall: { name: "Walsall", region: "West Midlands", postcodeExample: "WS1 1TP" },
  romford: { name: "Romford", region: "Greater London", postcodeExample: "RM1 3BB" },
  southport: { name: "Southport", region: "Merseyside", postcodeExample: "PR8 1DA" },
  "st-helens": { name: "St Helens", region: "Merseyside", postcodeExample: "WA10 1HP" },
  dudley: { name: "Dudley", region: "West Midlands", postcodeExample: "DY1 1HF" },
  sutton: { name: "Sutton", region: "Greater London", postcodeExample: "SM1 1EA" },
  enfield: { name: "Enfield", region: "Greater London", postcodeExample: "EN1 3XA" },
  birkenhead: { name: "Birkenhead", region: "Merseyside", postcodeExample: "CH41 5EU" },
  crosby: { name: "Crosby", region: "Merseyside", postcodeExample: "L23 2TD" },
  bootle: { name: "Bootle", region: "Merseyside", postcodeExample: "L20 7AE" },
  bury: { name: "Bury", region: "Greater Manchester", postcodeExample: "BL9 0SW" },
  oldham: { name: "Oldham", region: "Greater Manchester", postcodeExample: "OL1 1UT" },
  rochdale: { name: "Rochdale", region: "Greater Manchester", postcodeExample: "OL16 1AZ" },
  "west-bromwich": { name: "West Bromwich", region: "West Midlands", postcodeExample: "B70 8DY" },
} as const;

export type LocalCityKey = keyof typeof LOCAL_LOCATIONS;

export const LOCAL_TRADES = {
  handyman: { singular: "Handyman", footerLabel: "Handymen", navJobsLabel: "Handyman jobs", jobsAnchor: "handyman-jobs", ctaLabel: "Find a handyman", findAnchor: "find-handyman" },
  plumber: { singular: "Plumber", footerLabel: "Plumbers", navJobsLabel: "Plumber jobs", jobsAnchor: "plumber-jobs", ctaLabel: "Find a plumber", findAnchor: "find-plumber" },
  electrician: { singular: "Electrician", footerLabel: "Electricians", navJobsLabel: "Electrician jobs", jobsAnchor: "electrician-jobs", ctaLabel: "Find an electrician", findAnchor: "find-electrician" },
  roofer: { singular: "Roofer", footerLabel: "Roofers", navJobsLabel: "Roofing jobs", jobsAnchor: "roofer-jobs", ctaLabel: "Find a roofer", findAnchor: "find-roofer" },
  "painter-decorator": { singular: "Painter & Decorator", footerLabel: "Painters & Decorators", navJobsLabel: "Decorating jobs", jobsAnchor: "decorating-jobs", ctaLabel: "Find a decorator", findAnchor: "find-decorator" },
  "flooring-fitter": { singular: "Flooring Fitter", footerLabel: "Flooring Fitters", navJobsLabel: "Flooring jobs", jobsAnchor: "flooring-jobs", ctaLabel: "Find a floor fitter", findAnchor: "find-flooring-fitter" },
  builder: { singular: "Builder", footerLabel: "Builders", navJobsLabel: "Building projects", jobsAnchor: "building-jobs", ctaLabel: "Find a builder", findAnchor: "find-builder" },
  gardener: { singular: "Gardener", footerLabel: "Gardeners", navJobsLabel: "Gardening jobs", jobsAnchor: "gardening-jobs", ctaLabel: "Find a gardener", findAnchor: "find-gardener" },
} as const;

export type LocalTradeKey = keyof typeof LOCAL_TRADES;

export type LocalPage = {
  tradeSlug: TradeSlug;
  locationSlug: LocalCityKey;
  locationName: string;
  title: string;
  description: string;
  intro: string;
};

const ALL_TRADES = Object.keys(LOCAL_TRADES) as LocalTradeKey[];
const ALL_CITIES = Object.keys(LOCAL_LOCATIONS) as LocalCityKey[];

export const PLANNED_LOCAL_PAGES: ReadonlyArray<{
  trade: LocalTradeKey;
  city: LocalCityKey;
}> = ALL_TRADES.flatMap((trade) => ALL_CITIES.map((city) => ({ trade, city })));

// Keep this list limited to routes that physically exist and are ready to be indexed.
// Add each Local Trades city page here only when its page file and unique content are published.
export const PUBLISHED_LOCAL_PAGES: ReadonlyArray<{
  trade: LocalTradeKey;
  city: LocalCityKey;
}> = [];

export const localPages: LocalPage[] = PLANNED_LOCAL_PAGES.map(({ trade, city }) => {
  const tradeInfo = LOCAL_TRADES[trade];
  const location = LOCAL_LOCATIONS[city];

  return {
    tradeSlug: trade,
    locationSlug: city,
    locationName: location.name,
    title: `${tradeInfo.footerLabel} in ${location.name} | Local Trades`,
    description: `Find local ${tradeInfo.footerLabel.toLowerCase()} in ${location.name}. Describe the job once, compare up to 3 local quotes and use verified customer feedback before you choose.`,
    intro: `Need a local ${tradeInfo.singular.toLowerCase()} in ${location.name}? Tell us what needs doing once and compare local quote options before you decide who to hire.`,
  };
});

export function localPagePath(page: LocalPage): string;
export function localPagePath(trade: LocalTradeKey, city: LocalCityKey): string;
export function localPagePath(first: LocalPage | LocalTradeKey, second?: LocalCityKey) {
  if (typeof first === "object") return `/${first.tradeSlug}/${first.locationSlug}/`;
  return `/${first}/${second}/`;
}

export function getLocalPage(tradeSlug: string, locationSlug: string) {
  return localPages.find(
    (page) => page.tradeSlug === tradeSlug && page.locationSlug === locationSlug,
  );
}

export function isPublishedLocalPage(trade: LocalTradeKey, city: LocalCityKey) {
  return PUBLISHED_LOCAL_PAGES.some((page) => page.trade === trade && page.city === city);
}
