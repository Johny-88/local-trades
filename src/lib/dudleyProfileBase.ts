import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const DUDLEY_AREAS = [
  "Dudley",
  "Sedgley",
  "Upper Gornal",
  "Lower Gornal",
  "Netherton",
  "Woodsetton",
  "Coseley",
  "Brierley Hill",
] as const;

export type DudleyProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeDudleyProfile(service: ServiceSlug, override: DudleyProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "dudley",
    locationName: "Dudley",
    region: "West Midlands",
    postcodeExample: "DY1 1HF",
    areas: DUDLEY_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
