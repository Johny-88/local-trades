import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersNottingham, removalCompaniesNottingham } from "./nottinghamLogisticsContent";
import { heatingEngineersNottingham, tilersNottingham } from "./nottinghamSystemsContent";
import { locksmithsNottingham, pestControllersNottingham } from "./nottinghamSecurityContent";
import { architectsNottingham, treeSurgeonsNottingham } from "./nottinghamPlanningContent";
import { kitchenFittersNottingham, plasterersNottingham } from "./nottinghamInteriorsContent";
import { bathroomSpecialistsNottingham, drainageSpecialistsNottingham } from "./nottinghamWetTradesContent";
import { drivewaySpecialistsNottingham, windowSpecialistsNottingham } from "./nottinghamExteriorContent";

export const NOTTINGHAM_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesNottingham,
  cleanersNottingham,
  tilersNottingham,
  heatingEngineersNottingham,
  locksmithsNottingham,
  pestControllersNottingham,
  treeSurgeonsNottingham,
  architectsNottingham,
  plasterersNottingham,
  kitchenFittersNottingham,
  bathroomSpecialistsNottingham,
  drainageSpecialistsNottingham,
  drivewaySpecialistsNottingham,
  windowSpecialistsNottingham,
];

export function getNottinghamServiceContent(service: string, city: string) {
  return NOTTINGHAM_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
