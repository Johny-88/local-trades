import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsRomford, drainageSpecialistsRomford } from "./romfordWetTradesContent";
import { drivewaySpecialistsRomford, windowSpecialistsRomford } from "./romfordExteriorContent";
import { kitchenFittersRomford, plasterersRomford } from "./romfordInteriorsContent";
import { architectsRomford, treeSurgeonsRomford } from "./romfordPlanningContent";
import { locksmithsRomford, pestControllersRomford } from "./romfordSecurityContent";
import { cleanersRomford, removalCompaniesRomford } from "./romfordLogisticsContent";
import { heatingEngineersRomford, tilersRomford } from "./romfordSystemsContent";

export const ROMFORD_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesRomford,
  cleanersRomford,
  tilersRomford,
  heatingEngineersRomford,
  locksmithsRomford,
  pestControllersRomford,
  treeSurgeonsRomford,
  architectsRomford,
  plasterersRomford,
  kitchenFittersRomford,
  bathroomSpecialistsRomford,
  drainageSpecialistsRomford,
  drivewaySpecialistsRomford,
  windowSpecialistsRomford,
];

export function getRomfordServiceContent(service: string, city: string) {
  return ROMFORD_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
