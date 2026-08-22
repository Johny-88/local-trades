import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsPlymouth, drainageSpecialistsPlymouth } from "./plymouthWetTradesContent";
import { drivewaySpecialistsPlymouth, windowSpecialistsPlymouth } from "./plymouthExteriorContent";
import { kitchenFittersPlymouth, plasterersPlymouth } from "./plymouthInteriorsContent";
import { architectsPlymouth, treeSurgeonsPlymouth } from "./plymouthPlanningContent";
import { locksmithsPlymouth, pestControllersPlymouth } from "./plymouthSecurityContent";
import { cleanersPlymouth, removalCompaniesPlymouth } from "./plymouthLogisticsContent";
import { heatingEngineersPlymouth, tilersPlymouth } from "./plymouthSystemsContent";

export const PLYMOUTH_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesPlymouth,
  cleanersPlymouth,
  tilersPlymouth,
  heatingEngineersPlymouth,
  locksmithsPlymouth,
  pestControllersPlymouth,
  treeSurgeonsPlymouth,
  architectsPlymouth,
  plasterersPlymouth,
  kitchenFittersPlymouth,
  bathroomSpecialistsPlymouth,
  drainageSpecialistsPlymouth,
  drivewaySpecialistsPlymouth,
  windowSpecialistsPlymouth,
];

export function getPlymouthServiceContent(service: string, city: string) {
  return PLYMOUTH_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
