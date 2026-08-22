import type { LocalServicePageContent } from "./localServiceContent";
import { removalCompaniesLeicester, cleanersLeicester } from "./leicesterLogisticsContent";
import { tilersLeicester, heatingEngineersLeicester } from "./leicesterSystemsContent";
import { locksmithsLeicester, pestControllersLeicester } from "./leicesterSecurityContent";
import { treeSurgeonsLeicester, architectsLeicester } from "./leicesterPlanningContent";
import { plasterersLeicester, kitchenFittersLeicester } from "./leicesterInteriorsContent";
import { bathroomSpecialistsLeicester, drainageSpecialistsLeicester } from "./leicesterWetTradesContent";
import { drivewaySpecialistsLeicester, windowSpecialistsLeicester } from "./leicesterExteriorContent";

export const LEICESTER_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesLeicester,
  cleanersLeicester,
  tilersLeicester,
  heatingEngineersLeicester,
  locksmithsLeicester,
  pestControllersLeicester,
  treeSurgeonsLeicester,
  architectsLeicester,
  plasterersLeicester,
  kitchenFittersLeicester,
  bathroomSpecialistsLeicester,
  drainageSpecialistsLeicester,
  drivewaySpecialistsLeicester,
  windowSpecialistsLeicester,
];

export function getLeicesterServiceContent(service: string, city: string) {
  return LEICESTER_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
