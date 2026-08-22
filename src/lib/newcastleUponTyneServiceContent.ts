import type { LocalServicePageContent } from "./localServiceContent";
import { cleanersNewcastleUponTyne, removalCompaniesNewcastleUponTyne } from "./newcastleUponTyneLogisticsContent";
import { heatingEngineersNewcastleUponTyne, tilersNewcastleUponTyne } from "./newcastleUponTyneSystemsContent";
import { locksmithsNewcastleUponTyne, pestControllersNewcastleUponTyne } from "./newcastleUponTyneSecurityContent";
import { architectsNewcastleUponTyne, treeSurgeonsNewcastleUponTyne } from "./newcastleUponTynePlanningContent";
import { kitchenFittersNewcastleUponTyne, plasterersNewcastleUponTyne } from "./newcastleUponTyneInteriorsContent";
import { bathroomSpecialistsNewcastleUponTyne, drainageSpecialistsNewcastleUponTyne } from "./newcastleUponTyneWetTradesContent";
import { drivewaySpecialistsNewcastleUponTyne, windowSpecialistsNewcastleUponTyne } from "./newcastleUponTyneExteriorContent";

export const NEWCASTLE_UPON_TYNE_SERVICE_PROFILES: readonly LocalServicePageContent[] = [
  removalCompaniesNewcastleUponTyne,
  cleanersNewcastleUponTyne,
  tilersNewcastleUponTyne,
  heatingEngineersNewcastleUponTyne,
  locksmithsNewcastleUponTyne,
  pestControllersNewcastleUponTyne,
  treeSurgeonsNewcastleUponTyne,
  architectsNewcastleUponTyne,
  plasterersNewcastleUponTyne,
  kitchenFittersNewcastleUponTyne,
  bathroomSpecialistsNewcastleUponTyne,
  drainageSpecialistsNewcastleUponTyne,
  drivewaySpecialistsNewcastleUponTyne,
  windowSpecialistsNewcastleUponTyne,
];

export function getNewcastleUponTyneServiceContent(service: string, city: string) {
  return NEWCASTLE_UPON_TYNE_SERVICE_PROFILES.find(
    (profile) => profile.serviceSlug === service && profile.locationSlug === city,
  );
}
