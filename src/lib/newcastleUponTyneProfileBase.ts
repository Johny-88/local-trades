import type { LocalServicePageContent } from "./localServiceContent";
import { deriveLocationProfile } from "./locationProfileFactory";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import type { ServiceSlug } from "./serviceIframe";

export const NEWCASTLE_UPON_TYNE_AREAS = [
  "Jesmond",
  "Gosforth",
  "Heaton",
  "Sandyford",
  "Fenham",
  "Byker",
  "Walker",
  "Benwell",
] as const;

export type NewcastleUponTyneProfileOverride = {
  heroCopy: string;
  answer: LocalServicePageContent["answer"];
  localContext: LocalServicePageContent["localContext"];
  areaCopy: Omit<LocalServicePageContent["areas"], "title" | "items">;
  faq: LocalServicePageContent["faq"];
  cta: LocalServicePageContent["cta"];
};

export function makeNewcastleUponTyneProfile(
  service: ServiceSlug,
  override: NewcastleUponTyneProfileOverride,
) {
  const base = getManchesterServiceContent(service, "manchester");
  if (!base) {
    throw new Error(`Missing Manchester base profile for ${service}`);
  }

  return deriveLocationProfile(base, {
    locationSlug: "newcastle-upon-tyne",
    locationName: "Newcastle upon Tyne",
    region: "North East England",
    postcodeExample: "NE1 8QH",
    areas: NEWCASTLE_UPON_TYNE_AREAS,
    heroCopy: override.heroCopy,
    answer: override.answer,
    localContext: override.localContext,
    areaCopy: override.areaCopy,
    faq: override.faq,
    cta: override.cta,
  });
}
