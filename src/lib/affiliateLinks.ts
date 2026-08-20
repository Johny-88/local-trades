export const MJQ_IFRAME_BASE = "https://www.myjobquote.co.uk/iframes/v1/ifr_gaqubieivjwserhvbwhg5kr0dxcf";

export const TRADE_IDS = {
  handyman: 104,
  plumber: 162,
  electrician: 64,
  roofer: 174,
  "painter-decorator": 145,
  "flooring-fitter": 72,
  builder: 18,
  gardener: 87,
} as const;

export type TradeSlug = keyof typeof TRADE_IDS;

export function buildQuoteIframeUrl(tradeSlug?: TradeSlug) {
  if (!tradeSlug) return MJQ_IFRAME_BASE;
  const url = new URL(MJQ_IFRAME_BASE);
  url.searchParams.set("trade", String(TRADE_IDS[tradeSlug]));
  return url.toString();
}
