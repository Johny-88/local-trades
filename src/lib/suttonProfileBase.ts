import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const SUTTON_AREAS = [
  "Sutton",
  "Carshalton",
  "Cheam",
  "Wallington",
  "Belmont",
  "Worcester Park",
  "Hackbridge",
  "Beddington",
] as const;

export type SuttonProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeSuttonProfile(service: ServiceSlug, override: SuttonProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "sutton",
    locationName: "Sutton",
    region: "Greater London",
    postcodeExample: "SM1 1EA",
    areas: SUTTON_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
