import { getBirminghamServiceContent } from "./birminghamServiceContent";
import { getLocalServiceContent as getPilotLocalServiceContent } from "./localServiceContent";

export function getLocalServiceContent(service: string, city: string) {
  return (
    getPilotLocalServiceContent(service, city) ??
    getBirminghamServiceContent(service, city)
  );
}
