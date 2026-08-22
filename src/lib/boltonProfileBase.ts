import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const BOLTON_AREAS = [
  "Bolton",
  "Farnworth",
  "Horwich",
  "Westhoughton",
  "Little Lever",
  "Kearsley",
  "Blackrod",
  "Heaton",
] as const;

export type BoltonProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeBoltonProfile(service: ServiceSlug, override: BoltonProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "bolton",
    locationName: "Bolton",
    region: "Greater Manchester",
    postcodeExample: "BL1 1RU",
    areas: BOLTON_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
