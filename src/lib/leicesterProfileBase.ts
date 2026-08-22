import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const LEICESTER_AREAS = [
  "Clarendon Park",
  "Stoneygate",
  "Knighton",
  "Westcotes",
  "Evington",
  "Belgrave",
  "Humberstone",
  "Braunstone",
] as const;

export type LeicesterProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeLeicesterProfile(service: ServiceSlug, override: LeicesterProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "leicester",
    locationName: "Leicester",
    region: "Leicestershire",
    postcodeExample: "LE1 1AA",
    areas: LEICESTER_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
