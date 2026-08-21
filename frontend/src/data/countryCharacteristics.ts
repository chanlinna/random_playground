import type { CountryCharacteristic } from "../types/countryCharacteristic";
import { CHARACTERISTIC_ID_BY_NAME } from "./characteristics";

// Authoring convenience: [countryId, characteristicName, weight][]
// weight = how strongly the country embodies that trait, 0–3.
const SEED: [number, string, number][] = [
  // Velmoria (1) — orderly bureaucracy
  [1, "orderly", 3],
  [1, "rule_follower", 3],
  [1, "traditional", 2],
  [1, "cautious", 2],
  [1, "introverted", 1],

  // Nortavia (2) — quiet nature nation
  [2, "nature_loving", 3],
  [2, "introverted", 2],
  [2, "traditional", 2],
  [2, "cautious", 1],
  [2, "laid_back", 1],

  // Kestralen (3) — chaotic coastal daredevils
  [3, "chaotic", 3],
  [3, "adventurous", 3],
  [3, "rebellious", 2],
  [3, "competitive", 2],
  [3, "social", 1],
  [3, "nocturnal", 1],

  // Amberholt (4) — tech-optimized city-state
  [4, "tech_savvy", 3],
  [4, "progressive", 3],
  [4, "competitive", 2],
  [4, "orderly", 1],
  [4, "social", 1],

  // Sundrift (5) — laid-back island nation
  [5, "laid_back", 3],
  [5, "indulgent", 3],
  [5, "social", 2],
  [5, "nocturnal", 2],
  [5, "adventurous", 1],
];

export const COUNTRY_CHARACTERISTICS: CountryCharacteristic[] = SEED.map(([countryId, name, weight], i) => ({
  id: i + 1,
  countryId,
  characteristicId: CHARACTERISTIC_ID_BY_NAME[name],
  weight,
}));