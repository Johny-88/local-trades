import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersLiverpool, removalCompaniesLiverpool } from "./liverpoolLogisticsContent";
import { heatingEngineersLiverpool, tilersLiverpool } from "./liverpoolSystemsContent";
import { locksmithsLiverpool, pestControllersLiverpool } from "./liverpoolSecurityContent";
import { architectsLiverpool, treeSurgeonsLiverpool } from "./liverpoolPlanningContent";
import { kitchenFittersLiverpool, plasterersLiverpool } from "./liverpoolInteriorsContent";
import { bathroomSpecialistsLiverpool, drainageSpecialistsLiverpool } from "./liverpoolWetTradesContent";
import { drivewaySpecialistsLiverpool, windowSpecialistsLiverpool } from "./liverpoolExteriorContent";

export const LIVERPOOL_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesLiverpool,
  cleanersLiverpool,
  tilersLiverpool,
  heatingEngineersLiverpool,
  locksmithsLiverpool,
  pestControllersLiverpool,
  treeSurgeonsLiverpool,
  architectsLiverpool,
  plasterersLiverpool,
  kitchenFittersLiverpool,
  bathroomSpecialistsLiverpool,
  drainageSpecialistsLiverpool,
  drivewaySpecialistsLiverpool,
  windowSpecialistsLiverpool,
];

export function getLiverpoolServiceContent(service: string, city: string) {
  return LIVERPOOL_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
