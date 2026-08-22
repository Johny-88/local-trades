import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const SOUTHAMPTON_AREAS = [
  "Portswood",
  "Shirley",
  "Bitterne",
  "Woolston",
  "Bassett",
  "Swaythling",
  "Freemantle",
  "Bitterne Park",
] as const;

export type SouthamptonProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeSouthamptonProfile(service: ServiceSlug, override: SouthamptonProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "southampton",
    locationName: "Southampton",
    region: "South East England",
    postcodeExample: "SO15 2GB",
    areas: SOUTHAMPTON_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
