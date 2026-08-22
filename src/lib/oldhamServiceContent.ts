import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsOldham, drainageSpecialistsOldham } from "./oldhamWetTradesContent";
import { drivewaySpecialistsOldham, windowSpecialistsOldham } from "./oldhamExteriorContent";
import { kitchenFittersOldham, plasterersOldham } from "./oldhamInteriorsContent";
import { architectsOldham, treeSurgeonsOldham } from "./oldhamPlanningContent";
import { locksmithsOldham, pestControllersOldham } from "./oldhamSecurityContent";
import { cleanersOldham, removalCompaniesOldham } from "./oldhamLogisticsContent";
import { heatingEngineersOldham, tilersOldham } from "./oldhamSystemsContent";

export const OLDHAM_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesOldham,
  cleanersOldham,
  tilersOldham,
  heatingEngineersOldham,
  locksmithsOldham,
  pestControllersOldham,
  treeSurgeonsOldham,
  architectsOldham,
  plasterersOldham,
  kitchenFittersOldham,
  bathroomSpecialistsOldham,
  drainageSpecialistsOldham,
  drivewaySpecialistsOldham,
  windowSpecialistsOldham,
];

export function getOldhamServiceContent(service: string, city: string) {
  return OLDHAM_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
