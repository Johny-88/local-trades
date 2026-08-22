import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsBolton, drainageSpecialistsBolton } from "./boltonWetTradesContent";
import { drivewaySpecialistsBolton, windowSpecialistsBolton } from "./boltonExteriorContent";
import { kitchenFittersBolton, plasterersBolton } from "./boltonInteriorsContent";
import { architectsBolton, treeSurgeonsBolton } from "./boltonPlanningContent";
import { locksmithsBolton, pestControllersBolton } from "./boltonSecurityContent";
import { cleanersBolton, removalCompaniesBolton } from "./boltonLogisticsContent";
import { heatingEngineersBolton, tilersBolton } from "./boltonSystemsContent";

export const BOLTON_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesBolton,
  cleanersBolton,
  tilersBolton,
  heatingEngineersBolton,
  locksmithsBolton,
  pestControllersBolton,
  treeSurgeonsBolton,
  architectsBolton,
  plasterersBolton,
  kitchenFittersBolton,
  bathroomSpecialistsBolton,
  drainageSpecialistsBolton,
  drivewaySpecialistsBolton,
  windowSpecialistsBolton,
];

export function getBoltonServiceContent(service: string, city: string) {
  return BOLTON_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
