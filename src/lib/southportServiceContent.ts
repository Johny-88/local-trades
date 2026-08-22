import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsSouthport, drainageSpecialistsSouthport } from "./southportWetTradesContent";
import { drivewaySpecialistsSouthport, windowSpecialistsSouthport } from "./southportExteriorContent";
import { kitchenFittersSouthport, plasterersSouthport } from "./southportInteriorsContent";
import { architectsSouthport, treeSurgeonsSouthport } from "./southportPlanningContent";
import { locksmithsSouthport, pestControllersSouthport } from "./southportSecurityContent";
import { cleanersSouthport, removalCompaniesSouthport } from "./southportLogisticsContent";
import { heatingEngineersSouthport, tilersSouthport } from "./southportSystemsContent";

export const SOUTHPORT_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesSouthport,
  cleanersSouthport,
  tilersSouthport,
  heatingEngineersSouthport,
  locksmithsSouthport,
  pestControllersSouthport,
  treeSurgeonsSouthport,
  architectsSouthport,
  plasterersSouthport,
  kitchenFittersSouthport,
  bathroomSpecialistsSouthport,
  drainageSpecialistsSouthport,
  drivewaySpecialistsSouthport,
  windowSpecialistsSouthport,
];

export function getSouthportServiceContent(service: string, city: string) {
  return SOUTHPORT_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
