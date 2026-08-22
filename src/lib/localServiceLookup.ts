import { getBirminghamServiceContent } from "./birminghamServiceContent";
import { getBoltonServiceContent } from "./boltonServiceContent";
import { getBrightonHoveServiceContent } from "./brightonHoveServiceContent";
import { getBristolServiceContent } from "./bristolServiceContent";
import { getBromleyServiceContent } from "./bromleyServiceContent";
import { getCardiffServiceContent } from "./cardiffServiceContent";
import { getCroydonServiceContent } from "./croydonServiceContent";
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
import { getRomfordServiceContent } from "./romfordServiceContent";
import { getSheffieldServiceContent } from "./sheffieldServiceContent";
import { getSolihullServiceContent } from "./solihullServiceContent";
import { getSouthamptonServiceContent } from "./southamptonServiceContent";
import { getStockportServiceContent } from "./stockportServiceContent";
import { getSuttonColdfieldServiceContent } from "./suttonColdfieldServiceContent";
import { getWalsallServiceContent } from "./walsallServiceContent";
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
    getSuttonColdfieldServiceContent(service, city) ??
    getCroydonServiceContent(service, city) ??
    getBromleyServiceContent(service, city) ??
    getStockportServiceContent(service, city) ??
    getBoltonServiceContent(service, city) ??
    getWalsallServiceContent(service, city) ??
    getRomfordServiceContent(service, city)
  );
}
