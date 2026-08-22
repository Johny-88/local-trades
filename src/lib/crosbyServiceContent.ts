import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsCrosby, drainageSpecialistsCrosby } from "./crosbyWetTradesContent";
import { drivewaySpecialistsCrosby, windowSpecialistsCrosby } from "./crosbyExteriorContent";
import { kitchenFittersCrosby, plasterersCrosby } from "./crosbyInteriorsContent";
import { architectsCrosby, treeSurgeonsCrosby } from "./crosbyPlanningContent";
import { locksmithsCrosby, pestControllersCrosby } from "./crosbySecurityContent";
import { cleanersCrosby, removalCompaniesCrosby } from "./crosbyLogisticsContent";
import { heatingEngineersCrosby, tilersCrosby } from "./crosbySystemsContent";

export const CROSBY_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesCrosby,
  cleanersCrosby,
  tilersCrosby,
  heatingEngineersCrosby,
  locksmithsCrosby,
  pestControllersCrosby,
  treeSurgeonsCrosby,
  architectsCrosby,
  plasterersCrosby,
  kitchenFittersCrosby,
  bathroomSpecialistsCrosby,
  drainageSpecialistsCrosby,
  drivewaySpecialistsCrosby,
  windowSpecialistsCrosby,
];

export function getCrosbyServiceContent(service: string, city: string) {
  return CROSBY_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
