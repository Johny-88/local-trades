import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersGlasgow, removalCompaniesGlasgow } from "./glasgowLogisticsContent";
import { heatingEngineersGlasgow, tilersGlasgow } from "./glasgowSystemsContent";
import { locksmithsGlasgow, pestControllersGlasgow } from "./glasgowSecurityContent";
import { architectsGlasgow, treeSurgeonsGlasgow } from "./glasgowPlanningContent";
import { kitchenFittersGlasgow, plasterersGlasgow } from "./glasgowInteriorsContent";
import { bathroomSpecialistsGlasgow, drainageSpecialistsGlasgow } from "./glasgowWetTradesContent";
import { drivewaySpecialistsGlasgow, windowSpecialistsGlasgow } from "./glasgowExteriorContent";

export const GLASGOW_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesGlasgow,
  cleanersGlasgow,
  tilersGlasgow,
  heatingEngineersGlasgow,
  locksmithsGlasgow,
  pestControllersGlasgow,
  treeSurgeonsGlasgow,
  architectsGlasgow,
  plasterersGlasgow,
  kitchenFittersGlasgow,
  bathroomSpecialistsGlasgow,
  drainageSpecialistsGlasgow,
  drivewaySpecialistsGlasgow,
  windowSpecialistsGlasgow,
];

export function getGlasgowServiceContent(service: string, city: string) {
  return GLASGOW_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
