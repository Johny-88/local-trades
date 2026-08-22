import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersMiltonKeynes, removalCompaniesMiltonKeynes } from "./miltonKeynesLogisticsContent";
import { heatingEngineersMiltonKeynes, tilersMiltonKeynes } from "./miltonKeynesSystemsContent";
import { locksmithsMiltonKeynes, pestControllersMiltonKeynes } from "./miltonKeynesSecurityContent";
import { architectsMiltonKeynes, treeSurgeonsMiltonKeynes } from "./miltonKeynesPlanningContent";
import { kitchenFittersMiltonKeynes, plasterersMiltonKeynes } from "./miltonKeynesInteriorsContent";
import { bathroomSpecialistsMiltonKeynes, drainageSpecialistsMiltonKeynes } from "./miltonKeynesWetTradesContent";
import { drivewaySpecialistsMiltonKeynes, windowSpecialistsMiltonKeynes } from "./miltonKeynesExteriorContent";

export const MILTON_KEYNES_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesMiltonKeynes,
  cleanersMiltonKeynes,
  tilersMiltonKeynes,
  heatingEngineersMiltonKeynes,
  locksmithsMiltonKeynes,
  pestControllersMiltonKeynes,
  treeSurgeonsMiltonKeynes,
  architectsMiltonKeynes,
  plasterersMiltonKeynes,
  kitchenFittersMiltonKeynes,
  bathroomSpecialistsMiltonKeynes,
  drainageSpecialistsMiltonKeynes,
  drivewaySpecialistsMiltonKeynes,
  windowSpecialistsMiltonKeynes,
];

export function getMiltonKeynesServiceContent(service: string, city: string) {
  return MILTON_KEYNES_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
