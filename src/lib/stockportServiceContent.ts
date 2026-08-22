import type { LocalServicePageContent } from "./localServiceContent";
import { bathroomSpecialistsStockport, drainageSpecialistsStockport } from "./stockportWetTradesContent";
import { drivewaySpecialistsStockport, windowSpecialistsStockport } from "./stockportExteriorContent";
import { kitchenFittersStockport, plasterersStockport } from "./stockportInteriorsContent";
import { architectsStockport, treeSurgeonsStockport } from "./stockportPlanningContent";
import { locksmithsStockport, pestControllersStockport } from "./stockportSecurityContent";
import { cleanersStockport, removalCompaniesStockport } from "./stockportLogisticsContent";
import { heatingEngineersStockport, tilersStockport } from "./stockportSystemsContent";

export const STOCKPORT_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesStockport,
  cleanersStockport,
  tilersStockport,
  heatingEngineersStockport,
  locksmithsStockport,
  pestControllersStockport,
  treeSurgeonsStockport,
  architectsStockport,
  plasterersStockport,
  kitchenFittersStockport,
  bathroomSpecialistsStockport,
  drainageSpecialistsStockport,
  drivewaySpecialistsStockport,
  windowSpecialistsStockport,
];

export function getStockportServiceContent(service: string, city: string) {
  return STOCKPORT_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
