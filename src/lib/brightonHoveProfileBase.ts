import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const BRIGHTON_HOVE_AREAS = [
  "Kemptown",
  "Hanover",
  "Seven Dials",
  "Preston Park",
  "Hove",
  "Portslade",
  "Patcham",
  "Rottingdean",
] as const;

export type BrightonHoveProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeBrightonHoveProfile(service: ServiceSlug, override: BrightonHoveProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "brighton-hove",
    locationName: "Brighton & Hove",
    region: "South East England",
    postcodeExample: "BN1 1AE",
    areas: BRIGHTON_HOVE_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
