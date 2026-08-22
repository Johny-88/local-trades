import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const PLYMOUTH_AREAS = [
  "Barbican",
  "Mutley",
  "Peverell",
  "Stoke",
  "Mannamead",
  "Devonport",
  "Plymstock",
  "Plympton",
] as const;

export type PlymouthProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makePlymouthProfile(service: ServiceSlug, override: PlymouthProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "plymouth",
    locationName: "Plymouth",
    region: "Devon",
    postcodeExample: "PL1 1EA",
    areas: PLYMOUTH_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
