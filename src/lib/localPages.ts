import type { TradeSlug } from "./affiliateLinks";

export type LocalPage = {
  tradeSlug: TradeSlug;
  locationSlug: string;
  locationName: string;
  title: string;
  description: string;
  intro: string;
};

// Local Trades uses the same local-page data architecture as GetTradesmen.
// Pages are added only when Local Trades has genuinely useful location-specific content.
export const localPages: LocalPage[] = [];

export function localPagePath(page: LocalPage) {
  return `/${page.tradeSlug}/${page.locationSlug}/`;
}

export function getLocalPage(tradeSlug: string, locationSlug: string) {
  return localPages.find((page) => page.tradeSlug === tradeSlug && page.locationSlug === locationSlug);
}
