import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsBootle, drainageSpecialistsBootle } from "./bootleWetTradesContent";
import { drivewaySpecialistsBootle, windowSpecialistsBootle } from "./bootleExteriorContent";
import { kitchenFittersBootle, plasterersBootle } from "./bootleInteriorsContent";
import { architectsBootle, treeSurgeonsBootle } from "./bootlePlanningContent";
import { locksmithsBootle, pestControllersBootle } from "./bootleSecurityContent";
import { cleanersBootle, removalCompaniesBootle } from "./bootleLogisticsContent";
import { heatingEngineersBootle, tilersBootle } from "./bootleSystemsContent";

export const BOOTLE_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesBootle,
  cleanersBootle,
  tilersBootle,
  heatingEngineersBootle,
  locksmithsBootle,
  pestControllersBootle,
  treeSurgeonsBootle,
  architectsBootle,
  plasterersBootle,
  kitchenFittersBootle,
  bathroomSpecialistsBootle,
  drainageSpecialistsBootle,
  drivewaySpecialistsBootle,
  windowSpecialistsBootle,
];

export function getBootleServiceContent(service: string, city: string) {
  return BOOTLE_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
