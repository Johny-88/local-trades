import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const PORTSMOUTH_AREAS = [
  "Southsea",
  "Fratton",
  "Copnor",
  "North End",
  "Hilsea",
  "Milton",
  "Eastney",
  "Cosham",
] as const;

export type PortsmouthProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makePortsmouthProfile(service: ServiceSlug, override: PortsmouthProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "portsmouth",
    locationName: "Portsmouth",
    region: "South East England",
    postcodeExample: "PO1 2AL",
    areas: PORTSMOUTH_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
