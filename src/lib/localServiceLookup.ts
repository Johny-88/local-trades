import { getBirminghamServiceContent } from "./birminghamServiceContent";
import { getLocalServiceContent as getPilotLocalServiceContent } from "./localServiceContent";
import { getLondonServiceContent } from "./londonServiceContent";
import { getManchesterServiceContent } from "./manchesterServiceContent";

export function getLocalServiceContent(service: string, city: string) {
  return (
    getPilotLocalServiceContent(service, city) ??
    getBirminghamServiceContent(service, city) ??
    getManchesterServiceContent(service, city) ??
    getLondonServiceContent(service, city)
  );
}
