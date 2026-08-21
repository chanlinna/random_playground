// Keyed by Characteristic.name. Only positive phrasing is needed now — a
// country's weight is a magnitude (0–3), never negative, so "why you belong
// here" only ever surfaces traits the winning country actually embodies.
export const REASON_PHRASES: Record<string, string> = {
  orderly: "You like things alphabetized and labeled",
  chaotic: "You thrive without an instruction manual",
  social: "You talk to strangers in elevators",
  introverted: "You consider silence a personality trait",
  adventurous: "You'll try the shortcut a stranger suggests",
  cautious: "You forward the suspicious message, just in case",
  traditional: "You still trust the old recipe over the new one",
  progressive: "You're first in line for whatever's new",
  nature_loving: "You'd coexist peacefully with a bee on the table",
  tech_savvy: "You install updates before the changelog even loads",
  competitive: "You will not be taking it easy on trivia night",
  laid_back: "A three-hour delay just means more snack time",
  indulgent: "Dessert menu, one of everything",
  rule_follower: "You wait for the crosswalk sign even when the street's empty",
  rebellious: "A 'Do Not Touch' sign is basically a dare",
  nocturnal: "Your best ideas happen at 2am",
};

export const FILLER_REASONS = [
  "You just have that energy.",
  "It matched. We don't question it.",
  "Sometimes the numbers just know.",
];