import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsCroydon, drainageSpecialistsCroydon } from "./croydonWetTradesContent";
import { drivewaySpecialistsCroydon, windowSpecialistsCroydon } from "./croydonExteriorContent";
import { kitchenFittersCroydon, plasterersCroydon } from "./croydonInteriorsContent";
import { architectsCroydon, treeSurgeonsCroydon } from "./croydonPlanningContent";
import { locksmithsCroydon, pestControllersCroydon } from "./croydonSecurityContent";
import { cleanersCroydon, removalCompaniesCroydon } from "./croydonLogisticsContent";
import { heatingEngineersCroydon, tilersCroydon } from "./croydonSystemsContent";

export const CROYDON_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesCroydon,
  cleanersCroydon,
  tilersCroydon,
  heatingEngineersCroydon,
  locksmithsCroydon,
  pestControllersCroydon,
  treeSurgeonsCroydon,
  architectsCroydon,
  plasterersCroydon,
  kitchenFittersCroydon,
  bathroomSpecialistsCroydon,
  drainageSpecialistsCroydon,
  drivewaySpecialistsCroydon,
  windowSpecialistsCroydon,
];

export function getCroydonServiceContent(service: string, city: string) {
  return CROYDON_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
