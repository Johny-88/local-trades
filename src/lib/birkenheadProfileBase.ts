import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const BIRKENHEAD_AREAS = [
  "Birkenhead",
  "Oxton",
  "Prenton",
  "Tranmere",
  "Claughton",
  "Rock Ferry",
  "Woodside",
  "Birkenhead Park",
] as const;

export type BirkenheadProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeBirkenheadProfile(service: ServiceSlug, override: BirkenheadProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "birkenhead",
    locationName: "Birkenhead",
    region: "Merseyside",
    postcodeExample: "CH41 5EU",
    areas: BIRKENHEAD_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
