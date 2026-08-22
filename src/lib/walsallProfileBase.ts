import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const WALSALL_AREAS = [
  "Walsall",
  "Aldridge",
  "Bloxwich",
  "Willenhall",
  "Darlaston",
  "Brownhills",
  "Pelsall",
  "Streetly",
] as const;

export type WalsallProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeWalsallProfile(service: ServiceSlug, override: WalsallProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "walsall",
    locationName: "Walsall",
    region: "West Midlands",
    postcodeExample: "WS1 1DG",
    areas: WALSALL_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
