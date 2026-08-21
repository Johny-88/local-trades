import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersBristol, removalCompaniesBristol } from "./bristolLogisticsContent";
import { heatingEngineersBristol, tilersBristol } from "./bristolSystemsContent";
import { locksmithsBristol, pestControllersBristol } from "./bristolSecurityContent";
import { architectsBristol, treeSurgeonsBristol } from "./bristolPlanningContent";
import { kitchenFittersBristol, plasterersBristol } from "./bristolInteriorsContent";
import { bathroomSpecialistsBristol, drainageSpecialistsBristol } from "./bristolWetTradesContent";
import { drivewaySpecialistsBristol, windowSpecialistsBristol } from "./bristolExteriorContent";

export const BRISTOL_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesBristol,
  cleanersBristol,
  tilersBristol,
  heatingEngineersBristol,
  locksmithsBristol,
  pestControllersBristol,
  treeSurgeonsBristol,
  architectsBristol,
  plasterersBristol,
  kitchenFittersBristol,
  bathroomSpecialistsBristol,
  drainageSpecialistsBristol,
  drivewaySpecialistsBristol,
  windowSpecialistsBristol,
];

export function getBristolServiceContent(service: string, city: string) {
  return BRISTOL_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
