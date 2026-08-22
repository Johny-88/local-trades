import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const SHEFFIELD_AREAS = [
  "Ecclesall",
  "Crookes",
  "Hillsborough",
  "Walkley",
  "Nether Edge",
  "Broomhill",
  "Dore",
  "Meersbrook",
] as const;

export type SheffieldProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeSheffieldProfile(service: ServiceSlug, override: SheffieldProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "sheffield",
    locationName: "Sheffield",
    region: "South Yorkshire",
    postcodeExample: "S1 2SH",
    areas: SHEFFIELD_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
