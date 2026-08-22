import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const ENFIELD_AREAS = [
  "Enfield Town",
  "Edmonton",
  "Southgate",
  "Palmers Green",
  "Winchmore Hill",
  "Bush Hill Park",
  "Ponders End",
  "Enfield Lock",
] as const;

export type EnfieldProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeEnfieldProfile(service: ServiceSlug, override: EnfieldProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "enfield",
    locationName: "Enfield",
    region: "Greater London",
    postcodeExample: "EN2 6SN",
    areas: ENFIELD_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
