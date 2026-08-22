import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsWalsall, drainageSpecialistsWalsall } from "./walsallWetTradesContent";
import { drivewaySpecialistsWalsall, windowSpecialistsWalsall } from "./walsallExteriorContent";
import { kitchenFittersWalsall, plasterersWalsall } from "./walsallInteriorsContent";
import { architectsWalsall, treeSurgeonsWalsall } from "./walsallPlanningContent";
import { locksmithsWalsall, pestControllersWalsall } from "./walsallSecurityContent";
import { cleanersWalsall, removalCompaniesWalsall } from "./walsallLogisticsContent";
import { heatingEngineersWalsall, tilersWalsall } from "./walsallSystemsContent";

export const WALSALL_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesWalsall,
  cleanersWalsall,
  tilersWalsall,
  heatingEngineersWalsall,
  locksmithsWalsall,
  pestControllersWalsall,
  treeSurgeonsWalsall,
  architectsWalsall,
  plasterersWalsall,
  kitchenFittersWalsall,
  bathroomSpecialistsWalsall,
  drainageSpecialistsWalsall,
  drivewaySpecialistsWalsall,
  windowSpecialistsWalsall,
];

export function getWalsallServiceContent(service: string, city: string) {
  return WALSALL_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
