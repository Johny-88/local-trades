import {
  getLocalAreaProfile as getLegacyLocalAreaProfile,
  type LocalAreaProfile,
} from "./localAreaContent";
import { BRIGHTON_PROFILE } from "./localAreaProfiles/brighton";
import { BROMLEY_PROFILE } from "./localAreaProfiles/bromley";
import { CROYDON_PROFILE } from "./localAreaProfiles/croydon";
import { DERBY_PROFILE } from "./localAreaProfiles/derby";
import { EALING_PROFILE } from "./localAreaProfiles/ealing";
import { ENFIELD_PROFILE } from "./localAreaProfiles/enfield";
import { HARROW_PROFILE } from "./localAreaProfiles/harrow";
import { LEICESTER_PROFILE } from "./localAreaProfiles/leicester";
import { MILTON_KEYNES_PROFILE } from "./localAreaProfiles/miltonKeynes";
import { NORTHAMPTON_PROFILE } from "./localAreaProfiles/northampton";
import { NOTTINGHAM_PROFILE } from "./localAreaProfiles/nottingham";
import { OXFORD_PROFILE } from "./localAreaProfiles/oxford";
import { READING_PROFILE } from "./localAreaProfiles/reading";
import { ROMFORD_PROFILE } from "./localAreaProfiles/romford";
import { SOUTHAMPTON_PROFILE } from "./localAreaProfiles/southampton";
import type { LocalCityKey } from "./localPages";

const SCALABLE_LOCAL_AREA_PROFILES: Partial<Record<LocalCityKey, LocalAreaProfile>> = {
  croydon: CROYDON_PROFILE,
  reading: READING_PROFILE,
  "milton-keynes": MILTON_KEYNES_PROFILE,
  southampton: SOUTHAMPTON_PROFILE,
  bromley: BROMLEY_PROFILE,
  brighton: BRIGHTON_PROFILE,
  ealing: EALING_PROFILE,
  enfield: ENFIELD_PROFILE,
  oxford: OXFORD_PROFILE,
  northampton: NORTHAMPTON_PROFILE,
  leicester: LEICESTER_PROFILE,
  nottingham: NOTTINGHAM_PROFILE,
  derby: DERBY_PROFILE,
  romford: ROMFORD_PROFILE,
  harrow: HARROW_PROFILE,
};

export function getLocalAreaProfile(city: LocalCityKey) {
  return SCALABLE_LOCAL_AREA_PROFILES[city] ?? getLegacyLocalAreaProfile(city);
}
