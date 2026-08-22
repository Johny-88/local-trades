import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsBury, drainageSpecialistsBury } from "./buryWetTradesContent";
import { drivewaySpecialistsBury, windowSpecialistsBury } from "./buryExteriorContent";
import { kitchenFittersBury, plasterersBury } from "./buryInteriorsContent";
import { architectsBury, treeSurgeonsBury } from "./buryPlanningContent";
import { locksmithsBury, pestControllersBury } from "./burySecurityContent";
import { cleanersBury, removalCompaniesBury } from "./buryLogisticsContent";
import { heatingEngineersBury, tilersBury } from "./burySystemsContent";

export const BURY_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesBury,
  cleanersBury,
  tilersBury,
  heatingEngineersBury,
  locksmithsBury,
  pestControllersBury,
  treeSurgeonsBury,
  architectsBury,
  plasterersBury,
  kitchenFittersBury,
  bathroomSpecialistsBury,
  drainageSpecialistsBury,
  drivewaySpecialistsBury,
  windowSpecialistsBury,
];

export function getBuryServiceContent(service: string, city: string) {
  return BURY_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
