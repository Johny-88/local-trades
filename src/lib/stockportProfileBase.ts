import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const STOCKPORT_AREAS = [
  "Stockport",
  "Bramhall",
  "Cheadle",
  "Cheadle Hulme",
  "Hazel Grove",
  "Marple",
  "Reddish",
  "Heaton Moor",
] as const;

export type StockportProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeStockportProfile(service: ServiceSlug, override: StockportProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "stockport",
    locationName: "Stockport",
    region: "Greater Manchester",
    postcodeExample: "SK1 3XE",
    areas: STOCKPORT_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
