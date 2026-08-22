import { getBirminghamServiceContent } from "./birminghamServiceContent";
import { getBristolServiceContent } from "./bristolServiceContent";
import { getLocalServiceContent as getPilotLocalServiceContent } from "./localServiceContent";
import { getLeedsServiceContent } from "./leedsServiceContent";
import { getLondonServiceContent } from "./londonServiceContent";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import { getMiltonKeynesServiceContent } from "./miltonKeynesServiceContent";
import { getReadingServiceContent } from "./readingServiceContent";
import { getSouthamptonServiceContent } from "./southamptonServiceContent";

export function getLocalServiceContent(service: string, city: string) {
  return (
    getPilotLocalServiceContent(service, city) ??
    getBirminghamServiceContent(service, city) ??
    getManchesterServiceContent(service, city) ??
    getLondonServiceContent(service, city) ??
    getLeedsServiceContent(service, city) ??
    getBristolServiceContent(service, city) ??
    getSouthamptonServiceContent(service, city) ??
    getReadingServiceContent(service, city) ??
    getMiltonKeynesServiceContent(service, city)
  );
}
