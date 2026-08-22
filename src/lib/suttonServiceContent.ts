import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsSutton, drainageSpecialistsSutton } from "./suttonWetTradesContent";
import { drivewaySpecialistsSutton, windowSpecialistsSutton } from "./suttonExteriorContent";
import { kitchenFittersSutton, plasterersSutton } from "./suttonInteriorsContent";
import { architectsSutton, treeSurgeonsSutton } from "./suttonPlanningContent";
import { locksmithsSutton, pestControllersSutton } from "./suttonSecurityContent";
import { cleanersSutton, removalCompaniesSutton } from "./suttonLogisticsContent";
import { heatingEngineersSutton, tilersSutton } from "./suttonSystemsContent";

export const SUTTON_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesSutton,
  cleanersSutton,
  tilersSutton,
  heatingEngineersSutton,
  locksmithsSutton,
  pestControllersSutton,
  treeSurgeonsSutton,
  architectsSutton,
  plasterersSutton,
  kitchenFittersSutton,
  bathroomSpecialistsSutton,
  drainageSpecialistsSutton,
  drivewaySpecialistsSutton,
  windowSpecialistsSutton,
];

export function getSuttonServiceContent(service: string, city: string) {
  return SUTTON_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
