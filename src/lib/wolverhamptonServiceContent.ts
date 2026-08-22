import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsWolverhampton, drainageSpecialistsWolverhampton } from "./wolverhamptonWetTradesContent";
import { drivewaySpecialistsWolverhampton, windowSpecialistsWolverhampton } from "./wolverhamptonExteriorContent";
import { kitchenFittersWolverhampton, plasterersWolverhampton } from "./wolverhamptonInteriorsContent";
import { architectsWolverhampton, treeSurgeonsWolverhampton } from "./wolverhamptonPlanningContent";
import { locksmithsWolverhampton, pestControllersWolverhampton } from "./wolverhamptonSecurityContent";
import { cleanersWolverhampton, removalCompaniesWolverhampton } from "./wolverhamptonLogisticsContent";
import { heatingEngineersWolverhampton, tilersWolverhampton } from "./wolverhamptonSystemsContent";

export const WOLVERHAMPTON_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesWolverhampton,
  cleanersWolverhampton,
  tilersWolverhampton,
  heatingEngineersWolverhampton,
  locksmithsWolverhampton,
  pestControllersWolverhampton,
  treeSurgeonsWolverhampton,
  architectsWolverhampton,
  plasterersWolverhampton,
  kitchenFittersWolverhampton,
  bathroomSpecialistsWolverhampton,
  drainageSpecialistsWolverhampton,
  drivewaySpecialistsWolverhampton,
  windowSpecialistsWolverhampton,
];

export function getWolverhamptonServiceContent(service: string, city: string) {
  return WOLVERHAMPTON_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
