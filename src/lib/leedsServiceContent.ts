import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersLeeds, removalCompaniesLeeds } from "./leedsLogisticsContent";
import { heatingEngineersLeeds, tilersLeeds } from "./leedsSystemsContent";
import { locksmithsLeeds, pestControllersLeeds } from "./leedsSecurityContent";
import { architectsLeeds, treeSurgeonsLeeds } from "./leedsPlanningContent";
import { kitchenFittersLeeds, plasterersLeeds } from "./leedsInteriorsContent";
import { bathroomSpecialistsLeeds, drainageSpecialistsLeeds } from "./leedsWetTradesContent";
import { drivewaySpecialistsLeeds, windowSpecialistsLeeds } from "./leedsExteriorContent";

export const LEEDS_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesLeeds,
  cleanersLeeds,
  tilersLeeds,
  heatingEngineersLeeds,
  locksmithsLeeds,
  pestControllersLeeds,
  treeSurgeonsLeeds,
  architectsLeeds,
  plasterersLeeds,
  kitchenFittersLeeds,
  bathroomSpecialistsLeeds,
  drainageSpecialistsLeeds,
  drivewaySpecialistsLeeds,
  windowSpecialistsLeeds,
];

export function getLeedsServiceContent(service: string, city: string) {
  return LEEDS_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
