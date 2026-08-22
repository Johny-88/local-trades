import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const CARDIFF_AREAS = [
  "Cathays",
  "Roath",
  "Canton",
  "Pontcanna",
  "Grangetown",
  "Llandaff",
  "Whitchurch",
  "Llanishen",
] as const;

export type CardiffProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeCardiffProfile(service: ServiceSlug, override: CardiffProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "cardiff",
    locationName: "Cardiff",
    region: "South Wales",
    postcodeExample: "CF10 1EP",
    areas: CARDIFF_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
