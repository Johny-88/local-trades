import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const CROSBY_AREAS = [
  "Crosby",
  "Blundellsands",
  "Waterloo",
  "Brighton-le-Sands",
  "Little Crosby",
  "Thornton",
  "Hightown",
  "Seaforth",
] as const;

export type CrosbyProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeCrosbyProfile(service: ServiceSlug, override: CrosbyProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "crosby",
    locationName: "Crosby",
    region: "Merseyside",
    postcodeExample: "L23 3DP",
    areas: CROSBY_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
