import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsBromley, drainageSpecialistsBromley } from "./bromleyWetTradesContent";
import { drivewaySpecialistsBromley, windowSpecialistsBromley } from "./bromleyExteriorContent";
import { kitchenFittersBromley, plasterersBromley } from "./bromleyInteriorsContent";
import { architectsBromley, treeSurgeonsBromley } from "./bromleyPlanningContent";
import { locksmithsBromley, pestControllersBromley } from "./bromleySecurityContent";
import { cleanersBromley, removalCompaniesBromley } from "./bromleyLogisticsContent";
import { heatingEngineersBromley, tilersBromley } from "./bromleySystemsContent";

export const BROMLEY_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesBromley,
  cleanersBromley,
  tilersBromley,
  heatingEngineersBromley,
  locksmithsBromley,
  pestControllersBromley,
  treeSurgeonsBromley,
  architectsBromley,
  plasterersBromley,
  kitchenFittersBromley,
  bathroomSpecialistsBromley,
  drainageSpecialistsBromley,
  drivewaySpecialistsBromley,
  windowSpecialistsBromley,
];

export function getBromleyServiceContent(service: string, city: string) {
  return BROMLEY_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
