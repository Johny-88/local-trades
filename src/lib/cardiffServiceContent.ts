import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsCardiff, drainageSpecialistsCardiff } from "./cardiffWetTradesContent";
import { drivewaySpecialistsCardiff, windowSpecialistsCardiff } from "./cardiffExteriorContent";
import { kitchenFittersCardiff, plasterersCardiff } from "./cardiffInteriorsContent";
import { architectsCardiff, treeSurgeonsCardiff } from "./cardiffPlanningContent";
import { locksmithsCardiff, pestControllersCardiff } from "./cardiffSecurityContent";
import { cleanersCardiff, removalCompaniesCardiff } from "./cardiffLogisticsContent";
import { heatingEngineersCardiff, tilersCardiff } from "./cardiffSystemsContent";

export const CARDIFF_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesCardiff,
  cleanersCardiff,
  tilersCardiff,
  heatingEngineersCardiff,
  locksmithsCardiff,
  pestControllersCardiff,
  treeSurgeonsCardiff,
  architectsCardiff,
  plasterersCardiff,
  kitchenFittersCardiff,
  bathroomSpecialistsCardiff,
  drainageSpecialistsCardiff,
  drivewaySpecialistsCardiff,
  windowSpecialistsCardiff,
];

export function getCardiffServiceContent(service: string, city: string) {
  return CARDIFF_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
