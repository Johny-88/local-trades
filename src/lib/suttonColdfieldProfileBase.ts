import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const SUTTON_COLDFIELD_AREAS = [
  "Sutton Coldfield",
  "Four Oaks",
  "Mere Green",
  "Boldmere",
  "Wylde Green",
  "Walmley",
  "Falcon Lodge",
  "Reddicap Heath",
] as const;

export type SuttonColdfieldProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeSuttonColdfieldProfile(
  service: ServiceSlug,
  override: SuttonColdfieldProfileOverride,
) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "sutton-coldfield",
    locationName: "Sutton Coldfield",
    region: "West Midlands",
    postcodeExample: "B72 1UP",
    areas: SUTTON_COLDFIELD_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
