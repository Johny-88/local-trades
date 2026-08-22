import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsWestBromwich, drainageSpecialistsWestBromwich } from "./westBromwichWetTradesContent";
import { drivewaySpecialistsWestBromwich, windowSpecialistsWestBromwich } from "./westBromwichExteriorContent";
import { kitchenFittersWestBromwich, plasterersWestBromwich } from "./westBromwichInteriorsContent";
import { architectsWestBromwich, treeSurgeonsWestBromwich } from "./westBromwichPlanningContent";
import { locksmithsWestBromwich, pestControllersWestBromwich } from "./westBromwichSecurityContent";
import { cleanersWestBromwich, removalCompaniesWestBromwich } from "./westBromwichLogisticsContent";
import { heatingEngineersWestBromwich, tilersWestBromwich } from "./westBromwichSystemsContent";

export const WEST_BROMWICH_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesWestBromwich,
  cleanersWestBromwich,
  tilersWestBromwich,
  heatingEngineersWestBromwich,
  locksmithsWestBromwich,
  pestControllersWestBromwich,
  treeSurgeonsWestBromwich,
  architectsWestBromwich,
  plasterersWestBromwich,
  kitchenFittersWestBromwich,
  bathroomSpecialistsWestBromwich,
  drainageSpecialistsWestBromwich,
  drivewaySpecialistsWestBromwich,
  windowSpecialistsWestBromwich,
];

export function getWestBromwichServiceContent(service: string, city: string) {
  return WEST_BROMWICH_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
