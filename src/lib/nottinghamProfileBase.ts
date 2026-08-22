import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const NOTTINGHAM_AREAS = [
  "The Park",
  "Lenton",
  "Mapperley",
  "Sherwood",
  "Sneinton",
  "Wollaton",
  "Clifton",
  "Radford",
] as const;

export type NottinghamProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeNottinghamProfile(service: ServiceSlug, override: NottinghamProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "nottingham",
    locationName: "Nottingham",
    region: "Nottinghamshire",
    postcodeExample: "NG1 1AA",
    areas: NOTTINGHAM_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
