import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const GLASGOW_AREAS = [
  "Hillhead",
  "Partick",
  "Shawlands",
  "Dennistoun",
  "Pollokshields",
  "Govan",
  "Maryhill",
  "Cathcart",
] as const;

export type GlasgowProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeGlasgowProfile(service: ServiceSlug, override: GlasgowProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "glasgow",
    locationName: "Glasgow",
    region: "Glasgow City",
    postcodeExample: "G1 1XQ",
    areas: GLASGOW_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
