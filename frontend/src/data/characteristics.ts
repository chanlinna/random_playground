import type { Characteristic } from "../types/characteristic";

export const CHARACTERISTICS: Characteristic[] = [
  { id: 1, name: "orderly", description: "Prefers structure, rules, and things in their place" },
  { id: 2, name: "chaotic", description: "Comfortable without a plan" },
  { id: 3, name: "social", description: "Energized by other people" },
  { id: 4, name: "introverted", description: "Prefers solitude and quiet" },
  { id: 5, name: "adventurous", description: "Seeks out risk and novelty" },
  { id: 6, name: "cautious", description: "Prefers safety and predictability" },
  { id: 7, name: "traditional", description: "Values the old ways" },
  { id: 8, name: "progressive", description: "Embraces what's new" },
  { id: 9, name: "nature_loving", description: "Drawn to the outdoors" },
  { id: 10, name: "tech_savvy", description: "Comfortable with technology" },
  { id: 11, name: "competitive", description: "Likes to win" },
  { id: 12, name: "laid_back", description: "Takes things slow" },
  { id: 13, name: "indulgent", description: "Enjoys life's pleasures freely" },
  { id: 14, name: "rule_follower", description: "Respects the rules" },
  { id: 15, name: "rebellious", description: "Bends or breaks the rules" },
  { id: 16, name: "nocturnal", description: "Comes alive at night" },
];

// Lookup used only when authoring mock data (seed files) — never needed once
// real data arrives from the API, since the API will send characteristicId directly.
export const CHARACTERISTIC_ID_BY_NAME: Record<string, number> = CHARACTERISTICS.reduce(
  (acc, c) => ({ ...acc, [c.name]: c.id }),
  {} as Record<string, number>
);