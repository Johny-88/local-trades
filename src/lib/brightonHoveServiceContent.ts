import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersBrightonHove, removalCompaniesBrightonHove } from "./brightonHoveLogisticsContent";
import { heatingEngineersBrightonHove, tilersBrightonHove } from "./brightonHoveSystemsContent";
import { locksmithsBrightonHove, pestControllersBrightonHove } from "./brightonHoveSecurityContent";
import { architectsBrightonHove, treeSurgeonsBrightonHove } from "./brightonHovePlanningContent";
import { kitchenFittersBrightonHove, plasterersBrightonHove } from "./brightonHoveInteriorsContent";
import { bathroomSpecialistsBrightonHove, drainageSpecialistsBrightonHove } from "./brightonHoveWetTradesContent";
import { drivewaySpecialistsBrightonHove, windowSpecialistsBrightonHove } from "./brightonHoveExteriorContent";

export const BRIGHTON_HOVE_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesBrightonHove,
  cleanersBrightonHove,
  tilersBrightonHove,
  heatingEngineersBrightonHove,
  locksmithsBrightonHove,
  pestControllersBrightonHove,
  treeSurgeonsBrightonHove,
  architectsBrightonHove,
  plasterersBrightonHove,
  kitchenFittersBrightonHove,
  bathroomSpecialistsBrightonHove,
  drainageSpecialistsBrightonHove,
  drivewaySpecialistsBrightonHove,
  windowSpecialistsBrightonHove,
];

export function getBrightonHoveServiceContent(service: string, city: string) {
  return BRIGHTON_HOVE_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
