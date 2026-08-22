import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersSouthampton, removalCompaniesSouthampton } from "./southamptonLogisticsContent";
import { heatingEngineersSouthampton, tilersSouthampton } from "./southamptonSystemsContent";
import { locksmithsSouthampton, pestControllersSouthampton } from "./southamptonSecurityContent";
import { architectsSouthampton, treeSurgeonsSouthampton } from "./southamptonPlanningContent";
import { kitchenFittersSouthampton, plasterersSouthampton } from "./southamptonInteriorsContent";
import { bathroomSpecialistsSouthampton, drainageSpecialistsSouthampton } from "./southamptonWetTradesContent";
import { drivewaySpecialistsSouthampton, windowSpecialistsSouthampton } from "./southamptonExteriorContent";

export const SOUTHAMPTON_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesSouthampton,
  cleanersSouthampton,
  tilersSouthampton,
  heatingEngineersSouthampton,
  locksmithsSouthampton,
  pestControllersSouthampton,
  treeSurgeonsSouthampton,
  architectsSouthampton,
  plasterersSouthampton,
  kitchenFittersSouthampton,
  bathroomSpecialistsSouthampton,
  drainageSpecialistsSouthampton,
  drivewaySpecialistsSouthampton,
  windowSpecialistsSouthampton,
];

export function getSouthamptonServiceContent(service: string, city: string) {
  return SOUTHAMPTON_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
