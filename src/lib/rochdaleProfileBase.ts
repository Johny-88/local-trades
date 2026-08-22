import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const ROCHDALE_AREAS = [
  "Rochdale",
  "Heywood",
  "Middleton",
  "Littleborough",
  "Milnrow",
  "Castleton",
  "Norden",
  "Wardle",
] as const;

export type RochdaleProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeRochdaleProfile(service: ServiceSlug, override: RochdaleProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "rochdale",
    locationName: "Rochdale",
    region: "Greater Manchester",
    postcodeExample: "OL16 1XU",
    areas: ROCHDALE_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
