import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsBirkenhead, drainageSpecialistsBirkenhead } from "./birkenheadWetTradesContent";
import { drivewaySpecialistsBirkenhead, windowSpecialistsBirkenhead } from "./birkenheadExteriorContent";
import { kitchenFittersBirkenhead, plasterersBirkenhead } from "./birkenheadInteriorsContent";
import { architectsBirkenhead, treeSurgeonsBirkenhead } from "./birkenheadPlanningContent";
import { locksmithsBirkenhead, pestControllersBirkenhead } from "./birkenheadSecurityContent";
import { cleanersBirkenhead, removalCompaniesBirkenhead } from "./birkenheadLogisticsContent";
import { heatingEngineersBirkenhead, tilersBirkenhead } from "./birkenheadSystemsContent";

export const BIRKENHEAD_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesBirkenhead,
  cleanersBirkenhead,
  tilersBirkenhead,
  heatingEngineersBirkenhead,
  locksmithsBirkenhead,
  pestControllersBirkenhead,
  treeSurgeonsBirkenhead,
  architectsBirkenhead,
  plasterersBirkenhead,
  kitchenFittersBirkenhead,
  bathroomSpecialistsBirkenhead,
  drainageSpecialistsBirkenhead,
  drivewaySpecialistsBirkenhead,
  windowSpecialistsBirkenhead,
];

export function getBirkenheadServiceContent(service: string, city: string) {
  return BIRKENHEAD_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
