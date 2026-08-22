import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const LIVERPOOL_AREAS = [
  "Wavertree",
  "Aigburth",
  "Mossley Hill",
  "Allerton",
  "Woolton",
  "West Derby",
  "Toxteth",
  "Anfield",
] as const;

export type LiverpoolProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeLiverpoolProfile(service: ServiceSlug, override: LiverpoolProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "liverpool",
    locationName: "Liverpool",
    region: "Merseyside",
    postcodeExample: "L1 8JQ",
    areas: LIVERPOOL_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
