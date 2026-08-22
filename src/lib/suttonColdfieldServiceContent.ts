import type { LocalServicePageContent } from "./localServiceContent";
import {
  bathroomSpecialistsSuttonColdfield,
  drainageSpecialistsSuttonColdfield,
} from "./suttonColdfieldWetTradesContent";
import {
  drivewaySpecialistsSuttonColdfield,
  windowSpecialistsSuttonColdfield,
} from "./suttonColdfieldExteriorContent";
import {
  kitchenFittersSuttonColdfield,
  plasterersSuttonColdfield,
} from "./suttonColdfieldInteriorsContent";
import {
  architectsSuttonColdfield,
  treeSurgeonsSuttonColdfield,
} from "./suttonColdfieldPlanningContent";
import {
  locksmithsSuttonColdfield,
  pestControllersSuttonColdfield,
} from "./suttonColdfieldSecurityContent";
import {
  cleanersSuttonColdfield,
  removalCompaniesSuttonColdfield,
} from "./suttonColdfieldLogisticsContent";
import {
  heatingEngineersSuttonColdfield,
  tilersSuttonColdfield,
} from "./suttonColdfieldSystemsContent";

export const SUTTON_COLDFIELD_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesSuttonColdfield,
  cleanersSuttonColdfield,
  tilersSuttonColdfield,
  heatingEngineersSuttonColdfield,
  locksmithsSuttonColdfield,
  pestControllersSuttonColdfield,
  treeSurgeonsSuttonColdfield,
  architectsSuttonColdfield,
  plasterersSuttonColdfield,
  kitchenFittersSuttonColdfield,
  bathroomSpecialistsSuttonColdfield,
  drainageSpecialistsSuttonColdfield,
  drivewaySpecialistsSuttonColdfield,
  windowSpecialistsSuttonColdfield,
];

export function getSuttonColdfieldServiceContent(service: string, city: string) {
  return SUTTON_COLDFIELD_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
