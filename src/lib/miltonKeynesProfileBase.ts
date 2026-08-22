import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const MILTON_KEYNES_AREAS = [
  "Bletchley",
  "Wolverton",
  "Stony Stratford",
  "Newport Pagnell",
  "Great Linford",
  "Loughton",
  "Shenley Church End",
  "Woughton-on-the-Green",
] as const;

export type MiltonKeynesProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeMiltonKeynesProfile(service: ServiceSlug, override: MiltonKeynesProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "milton-keynes",
    locationName: "Milton Keynes",
    region: "South East England",
    postcodeExample: "MK9 3EJ",
    areas: MILTON_KEYNES_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
