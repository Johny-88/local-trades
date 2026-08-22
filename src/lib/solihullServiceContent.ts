import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsSolihull, drainageSpecialistsSolihull } from "./solihullWetTradesContent";
import { drivewaySpecialistsSolihull, windowSpecialistsSolihull } from "./solihullExteriorContent";
import { kitchenFittersSolihull, plasterersSolihull } from "./solihullInteriorsContent";
import { architectsSolihull, treeSurgeonsSolihull } from "./solihullPlanningContent";
import { locksmithsSolihull, pestControllersSolihull } from "./solihullSecurityContent";
import { cleanersSolihull, removalCompaniesSolihull } from "./solihullLogisticsContent";
import { heatingEngineersSolihull, tilersSolihull } from "./solihullSystemsContent";

export const SOLIHULL_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesSolihull,
  cleanersSolihull,
  tilersSolihull,
  heatingEngineersSolihull,
  locksmithsSolihull,
  pestControllersSolihull,
  treeSurgeonsSolihull,
  architectsSolihull,
  plasterersSolihull,
  kitchenFittersSolihull,
  bathroomSpecialistsSolihull,
  drainageSpecialistsSolihull,
  drivewaySpecialistsSolihull,
  windowSpecialistsSolihull,
];

export function getSolihullServiceContent(service: string, city: string) {
  return SOLIHULL_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
