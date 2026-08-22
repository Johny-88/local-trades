import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersPortsmouth, removalCompaniesPortsmouth } from "./portsmouthLogisticsContent";
import { heatingEngineersPortsmouth, tilersPortsmouth } from "./portsmouthSystemsContent";
import { locksmithsPortsmouth, pestControllersPortsmouth } from "./portsmouthSecurityContent";
import { architectsPortsmouth, treeSurgeonsPortsmouth } from "./portsmouthPlanningContent";
import { kitchenFittersPortsmouth, plasterersPortsmouth } from "./portsmouthInteriorsContent";
import { bathroomSpecialistsPortsmouth, drainageSpecialistsPortsmouth } from "./portsmouthWetTradesContent";
import { drivewaySpecialistsPortsmouth, windowSpecialistsPortsmouth } from "./portsmouthExteriorContent";

export const PORTSMOUTH_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesPortsmouth,
  cleanersPortsmouth,
  tilersPortsmouth,
  heatingEngineersPortsmouth,
  locksmithsPortsmouth,
  pestControllersPortsmouth,
  treeSurgeonsPortsmouth,
  architectsPortsmouth,
  plasterersPortsmouth,
  kitchenFittersPortsmouth,
  bathroomSpecialistsPortsmouth,
  drainageSpecialistsPortsmouth,
  drivewaySpecialistsPortsmouth,
  windowSpecialistsPortsmouth,
];

export function getPortsmouthServiceContent(service: string, city: string) {
  return PORTSMOUTH_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
