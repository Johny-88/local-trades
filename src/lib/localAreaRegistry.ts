import {
  getLocalAreaProfile as getLegacyLocalAreaProfile,
  type LocalAreaProfile,
} from "./localAreaContent";
import { BROMLEY_PROFILE } from "./localAreaProfiles/bromley";
import { CROYDON_PROFILE } from "./localAreaProfiles/croydon";
import { MILTON_KEYNES_PROFILE } from "./localAreaProfiles/miltonKeynes";
import { READING_PROFILE } from "./localAreaProfiles/reading";
import { SOUTHAMPTON_PROFILE } from "./localAreaProfiles/southampton";
import type { LocalCityKey } from "./localPages";

const SCALABLE_LOCAL_AREA_PROFILES: Partial<Record<LocalCityKey, LocalAreaProfile>> = {
  croydon: CROYDON_PROFILE,
  reading: READING_PROFILE,
  "milton-keynes": MILTON_KEYNES_PROFILE,
  southampton: SOUTHAMPTON_PROFILE,
  bromley: BROMLEY_PROFILE,
};

export function getLocalAreaProfile(city: LocalCityKey) {
  return SCALABLE_LOCAL_AREA_PROFILES[city] ?? getLegacyLocalAreaProfile(city);
}
