import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersLondon, removalCompaniesLondon } from "./londonLogisticsContent";
import { heatingEngineersLondon, tilersLondon } from "./londonSystemsContent";
import { locksmithsLondon, pestControllersLondon } from "./londonSecurityContent";
import { architectsLondon, treeSurgeonsLondon } from "./londonPlanningContent";
import { kitchenFittersLondon, plasterersLondon } from "./londonInteriorsContent";
import { bathroomSpecialistsLondon, drainageSpecialistsLondon } from "./londonWetTradesContent";
import { drivewaySpecialistsLondon, windowSpecialistsLondon } from "./londonExteriorContent";

export const LONDON_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesLondon,
  cleanersLondon,
  tilersLondon,
  heatingEngineersLondon,
  locksmithsLondon,
  pestControllersLondon,
  treeSurgeonsLondon,
  architectsLondon,
  plasterersLondon,
  kitchenFittersLondon,
  bathroomSpecialistsLondon,
  drainageSpecialistsLondon,
  drivewaySpecialistsLondon,
  windowSpecialistsLondon,
];

export function getLondonServiceContent(service: string, city: string) {
  return LONDON_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
