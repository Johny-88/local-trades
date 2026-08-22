import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsEnfield, drainageSpecialistsEnfield } from "./enfieldWetTradesContent";
import { drivewaySpecialistsEnfield, windowSpecialistsEnfield } from "./enfieldExteriorContent";
import { kitchenFittersEnfield, plasterersEnfield } from "./enfieldInteriorsContent";
import { architectsEnfield, treeSurgeonsEnfield } from "./enfieldPlanningContent";
import { locksmithsEnfield, pestControllersEnfield } from "./enfieldSecurityContent";
import { cleanersEnfield, removalCompaniesEnfield } from "./enfieldLogisticsContent";
import { heatingEngineersEnfield, tilersEnfield } from "./enfieldSystemsContent";

export const ENFIELD_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesEnfield,
  cleanersEnfield,
  tilersEnfield,
  heatingEngineersEnfield,
  locksmithsEnfield,
  pestControllersEnfield,
  treeSurgeonsEnfield,
  architectsEnfield,
  plasterersEnfield,
  kitchenFittersEnfield,
  bathroomSpecialistsEnfield,
  drainageSpecialistsEnfield,
  drivewaySpecialistsEnfield,
  windowSpecialistsEnfield,
];

export function getEnfieldServiceContent(service: string, city: string) {
  return ENFIELD_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
