import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersSheffield, removalCompaniesSheffield } from "./sheffieldLogisticsContent";
import { heatingEngineersSheffield, tilersSheffield } from "./sheffieldSystemsContent";
import { locksmithsSheffield, pestControllersSheffield } from "./sheffieldSecurityContent";
import { architectsSheffield, treeSurgeonsSheffield } from "./sheffieldPlanningContent";
import { kitchenFittersSheffield, plasterersSheffield } from "./sheffieldInteriorsContent";
import { bathroomSpecialistsSheffield, drainageSpecialistsSheffield } from "./sheffieldWetTradesContent";
import { drivewaySpecialistsSheffield, windowSpecialistsSheffield } from "./sheffieldExteriorContent";

export const SHEFFIELD_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesSheffield,
  cleanersSheffield,
  tilersSheffield,
  heatingEngineersSheffield,
  locksmithsSheffield,
  pestControllersSheffield,
  treeSurgeonsSheffield,
  architectsSheffield,
  plasterersSheffield,
  kitchenFittersSheffield,
  bathroomSpecialistsSheffield,
  drainageSpecialistsSheffield,
  drivewaySpecialistsSheffield,
  windowSpecialistsSheffield,
];

export function getSheffieldServiceContent(service: string, city: string) {
  return SHEFFIELD_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
