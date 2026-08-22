import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsDudley, drainageSpecialistsDudley } from "./dudleyWetTradesContent";
import { drivewaySpecialistsDudley, windowSpecialistsDudley } from "./dudleyExteriorContent";
import { kitchenFittersDudley, plasterersDudley } from "./dudleyInteriorsContent";
import { architectsDudley, treeSurgeonsDudley } from "./dudleyPlanningContent";
import { locksmithsDudley, pestControllersDudley } from "./dudleySecurityContent";
import { cleanersDudley, removalCompaniesDudley } from "./dudleyLogisticsContent";
import { heatingEngineersDudley, tilersDudley } from "./dudleySystemsContent";

export const DUDLEY_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesDudley,
  cleanersDudley,
  tilersDudley,
  heatingEngineersDudley,
  locksmithsDudley,
  pestControllersDudley,
  treeSurgeonsDudley,
  architectsDudley,
  plasterersDudley,
  kitchenFittersDudley,
  bathroomSpecialistsDudley,
  drainageSpecialistsDudley,
  drivewaySpecialistsDudley,
  windowSpecialistsDudley,
];

export function getDudleyServiceContent(service: string, city: string) {
  return DUDLEY_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
