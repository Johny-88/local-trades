import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const EDINBURGH_AREAS = [
  "Leith",
  "Stockbridge",
  "Marchmont",
  "Morningside",
  "New Town",
  "Portobello",
  "Corstorphine",
  "Bruntsfield",
] as const;

export type EdinburghProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeEdinburghProfile(service: ServiceSlug, override: EdinburghProfileOverride) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "edinburgh",
    locationName: "Edinburgh",
    region: "City of Edinburgh",
    postcodeExample: "EH1 1YJ",
    areas: EDINBURGH_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
