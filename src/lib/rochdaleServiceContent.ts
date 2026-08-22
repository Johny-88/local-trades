import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsRochdale, drainageSpecialistsRochdale } from "./rochdaleWetTradesContent";
import { drivewaySpecialistsRochdale, windowSpecialistsRochdale } from "./rochdaleExteriorContent";
import { kitchenFittersRochdale, plasterersRochdale } from "./rochdaleInteriorsContent";
import { architectsRochdale, treeSurgeonsRochdale } from "./rochdalePlanningContent";
import { locksmithsRochdale, pestControllersRochdale } from "./rochdaleSecurityContent";
import { cleanersRochdale, removalCompaniesRochdale } from "./rochdaleLogisticsContent";
import { heatingEngineersRochdale, tilersRochdale } from "./rochdaleSystemsContent";

export const ROCHDALE_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesRochdale,
  cleanersRochdale,
  tilersRochdale,
  heatingEngineersRochdale,
  locksmithsRochdale,
  pestControllersRochdale,
  treeSurgeonsRochdale,
  architectsRochdale,
  plasterersRochdale,
  kitchenFittersRochdale,
  bathroomSpecialistsRochdale,
  drainageSpecialistsRochdale,
  drivewaySpecialistsRochdale,
  windowSpecialistsRochdale,
];

export function getRochdaleServiceContent(service: string, city: string) {
  return ROCHDALE_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
