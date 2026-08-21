import type { LocalCityKey } from "./localPages";

export type LocalAreaProfile = {
  city: string;
  housingSummary: string;
  housingFacts: ReadonlyArray<{ value: string; label: string }>;
  areas: ReadonlyArray<string>;
  housingSourceLabel: string;
  housingSourceUrl: string;
  areaSourceLabel: string;
  areaSourceUrl: string;
};

const BIRMINGHAM_PROFILE: LocalAreaProfile = {
  city: "Birmingham",
  housingSummary:
    "Birmingham has a genuinely mixed housing stock rather than one dominant property type. Census 2021 data shows semi-detached homes are the largest group, followed by terraced homes and purpose-built flats or tenements. That matters for trade work because access, layout, shared building elements and the likely scope can be very different from one property to another.",
  housingFacts: [
    { value: "35.6%", label: "semi-detached homes" },
    { value: "27.8%", label: "terraced homes" },
    { value: "21.0%", label: "purpose-built flats or tenements" },
    { value: "45.0%", label: "households in 3-bedroom homes" },
  ],
  areas: [
    "Edgbaston",
    "Harborne",
    "Selly Oak",
    "Erdington",
    "Hall Green",
    "Kings Heath",
    "Yardley",
    "Sutton Coldfield",
  ],
  housingSourceLabel: "Birmingham City Observatory — Census 2021 housing facts",
  housingSourceUrl:
    "https://www.cityobservatory.birmingham.gov.uk/explore/dataset/census-2021-factsheets/files/d3acd16ff3a7a90a5882446174cb4d1b/download/",
  areaSourceLabel: "Birmingham City Council — current ward map",
  areaSourceUrl:
    "https://www.birmingham.gov.uk/download/downloads/id/31143/birmingham_ward_map_current_boundaries_since_2018.pdf",
};

export const LOCAL_AREA_PROFILES: Partial<Record<LocalCityKey, LocalAreaProfile>> = {
  birmingham: BIRMINGHAM_PROFILE,
};

export function getLocalAreaProfile(city: LocalCityKey) {
  return LOCAL_AREA_PROFILES[city];
}
