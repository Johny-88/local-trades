import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersEdinburgh, removalCompaniesEdinburgh } from "./edinburghLogisticsContent";
import { heatingEngineersEdinburgh, tilersEdinburgh } from "./edinburghSystemsContent";
import { locksmithsEdinburgh, pestControllersEdinburgh } from "./edinburghSecurityContent";
import { architectsEdinburgh, treeSurgeonsEdinburgh } from "./edinburghPlanningContent";
import { kitchenFittersEdinburgh, plasterersEdinburgh } from "./edinburghInteriorsContent";
import { bathroomSpecialistsEdinburgh, drainageSpecialistsEdinburgh } from "./edinburghWetTradesContent";
import { drivewaySpecialistsEdinburgh, windowSpecialistsEdinburgh } from "./edinburghExteriorContent";

export const EDINBURGH_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesEdinburgh,
  cleanersEdinburgh,
  tilersEdinburgh,
  heatingEngineersEdinburgh,
  locksmithsEdinburgh,
  pestControllersEdinburgh,
  treeSurgeonsEdinburgh,
  architectsEdinburgh,
  plasterersEdinburgh,
  kitchenFittersEdinburgh,
  bathroomSpecialistsEdinburgh,
  drainageSpecialistsEdinburgh,
  drivewaySpecialistsEdinburgh,
  windowSpecialistsEdinburgh,
];

export function getEdinburghServiceContent(service: string, city: string) {
  return EDINBURGH_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
