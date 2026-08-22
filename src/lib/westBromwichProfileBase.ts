import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getBirminghamServiceContent } from "./birminghamServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const WEST_BROMWICH_AREAS = [
  "West Bromwich",
  "Charlemont",
  "Great Barr",
  "Yew Tree",
  "Greets Green",
  "Lyng",
  "Hateley Heath",
  "Newton",
] as const;

export type WestBromwichProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeWestBromwichProfile(service: ServiceSlug, override: WestBromwichProfileOverride) {
  const base = getBirminghamServiceContent(service, "birmingham");
  if (!base) {
    throw new Error(`Missing Birmingham base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "west-bromwich",
    locationName: "West Bromwich",
    region: "West Midlands",
    postcodeExample: "B70 8DJ",
    areas: WEST_BROMWICH_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
