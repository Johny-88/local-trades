import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsStHelens, drainageSpecialistsStHelens } from "./stHelensWetTradesContent";
import { drivewaySpecialistsStHelens, windowSpecialistsStHelens } from "./stHelensExteriorContent";
import { kitchenFittersStHelens, plasterersStHelens } from "./stHelensInteriorsContent";
import { architectsStHelens, treeSurgeonsStHelens } from "./stHelensPlanningContent";
import { locksmithsStHelens, pestControllersStHelens } from "./stHelensSecurityContent";
import { cleanersStHelens, removalCompaniesStHelens } from "./stHelensLogisticsContent";
import { heatingEngineersStHelens, tilersStHelens } from "./stHelensSystemsContent";

export const ST_HELENS_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesStHelens,
  cleanersStHelens,
  tilersStHelens,
  heatingEngineersStHelens,
  locksmithsStHelens,
  pestControllersStHelens,
  treeSurgeonsStHelens,
  architectsStHelens,
  plasterersStHelens,
  kitchenFittersStHelens,
  bathroomSpecialistsStHelens,
  drainageSpecialistsStHelens,
  drivewaySpecialistsStHelens,
  windowSpecialistsStHelens,
];

export function getStHelensServiceContent(service: string, city: string) {
  return ST_HELENS_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
