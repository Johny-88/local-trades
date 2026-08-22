import { getBirminghamServiceContent } from "./birminghamServiceContent";
import { getBrightonHoveServiceContent } from "./brightonHoveServiceContent";
import { getBristolServiceContent } from "./bristolServiceContent";
import { getCardiffServiceContent } from "./cardiffServiceContent";
import { getEdinburghServiceContent } from "./edinburghServiceContent";
import { getGlasgowServiceContent } from "./glasgowServiceContent";
import { getLocalServiceContent as getPilotLocalServiceContent } from "./localServiceContent";
import { getLeedsServiceContent } from "./leedsServiceContent";
import { getLeicesterServiceContent } from "./leicesterServiceContent";
import { getLiverpoolServiceContent } from "./liverpoolServiceContent";
import { getLondonServiceContent } from "./londonServiceContent";
import { getManchesterServiceContent } from "./manchesterServiceContent";
import { getMiltonKeynesServiceContent } from "./miltonKeynesServiceContent";
import { getNewcastleUponTyneServiceContent } from "./newcastleUponTyneServiceContent";
import { getNottinghamServiceContent } from "./nottinghamServiceContent";
import { getPlymouthServiceContent } from "./plymouthServiceContent";
import { getPortsmouthServiceContent } from "./portsmouthServiceContent";
import { getReadingServiceContent } from "./readingServiceContent";
import { getSheffieldServiceContent } from "./sheffieldServiceContent";
import { getSolihullServiceContent } from "./solihullServiceContent";
import { getSouthamptonServiceContent } from "./southamptonServiceContent";
import { getSuttonColdfieldServiceContent } from "./suttonColdfieldServiceContent";
import { getWolverhamptonServiceContent } from "./wolverhamptonServiceContent";

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
    getMiltonKeynesServiceContent(service, city) ??
    getPortsmouthServiceContent(service, city) ??
    getNewcastleUponTyneServiceContent(service, city) ??
    getBrightonHoveServiceContent(service, city) ??
    getSheffieldServiceContent(service, city) ??
    getLiverpoolServiceContent(service, city) ??
    getGlasgowServiceContent(service, city) ??
    getEdinburghServiceContent(service, city) ??
    getNottinghamServiceContent(service, city) ??
    getLeicesterServiceContent(service, city) ??
    getWolverhamptonServiceContent(service, city) ??
    getPlymouthServiceContent(service, city) ??
    getCardiffServiceContent(service, city) ??
    getSolihullServiceContent(service, city) ??
    getSuttonColdfieldServiceContent(service, city)
  );
}
