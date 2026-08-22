import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const WOLVERHAMPTON_AREAS = [
  "Tettenhall",
  "Penn",
  "Bilston",
  "Wednesfield",
  "Bushbury",
  "Whitmore Reans",
  "Compton",
  "Finchfield",
] as const;

export type WolverhamptonProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeWolverhamptonProfile(
  service: ServiceSlug,
  override: WolverhamptonProfileOverride,
) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "wolverhampton",
    locationName: "Wolverhampton",
    region: "West Midlands",
    postcodeExample: "WV1 1AA",
    areas: WOLVERHAMPTON_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
