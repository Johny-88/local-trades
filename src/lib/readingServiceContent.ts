import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersReading, removalCompaniesReading } from "./readingLogisticsContent";
import { heatingEngineersReading, tilersReading } from "./readingSystemsContent";
import { locksmithsReading, pestControllersReading } from "./readingSecurityContent";
import { architectsReading, treeSurgeonsReading } from "./readingPlanningContent";
import { kitchenFittersReading, plasterersReading } from "./readingInteriorsContent";
import { bathroomSpecialistsReading, drainageSpecialistsReading } from "./readingWetTradesContent";
import { drivewaySpecialistsReading, windowSpecialistsReading } from "./readingExteriorContent";

export const READING_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesReading,
  cleanersReading,
  tilersReading,
  heatingEngineersReading,
  locksmithsReading,
  pestControllersReading,
  treeSurgeonsReading,
  architectsReading,
  plasterersReading,
  kitchenFittersReading,
  bathroomSpecialistsReading,
  drainageSpecialistsReading,
  drivewaySpecialistsReading,
  windowSpecialistsReading,
];

export function getReadingServiceContent(service: string, city: string) {
  return READING_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
