// ---------------------------------------------------------------------------
// Authoring-only file. This is NOT shaped like a backend table — it exists so
// we don't have to hand-assign sequential ids across 30 questions x 2 options
// x effects. `questions.ts`, `questionOptions.ts`, and `optionCharacteristics.ts`
// each derive their properly-shaped, DB-matching flat array from this seed at
// module load and re-export it. Nothing outside src/data/ should import this file.
// ---------------------------------------------------------------------------
import { CHARACTERISTIC_ID_BY_NAME } from "./characteristics";
import type { Question } from "../types/question";
import type { QuestionOption } from "../types/questionOption";
import type { OptionCharacteristic } from "../types/optionCharacteristic";

type Level = "strong" | "moderate" | "neutral" | "mismatch" | "strongMismatch";

interface SeedEffect {
  characteristic: string;
  level: Level;
}

interface SeedOption {
  text: string;
  effects: SeedEffect[];
}

interface SeedQuestion {
  text: string;
  options: [SeedOption, SeedOption];
}

export const SCORE_WEIGHTS: Record<Level, number> = {
  strong: 3,
  moderate: 1,
  neutral: 0,
  mismatch: -1,
  strongMismatch: -2,
};

const opt = (text: string, ...effects: SeedEffect[]): SeedOption => ({ text, effects });
const fx = (characteristic: string, level: Level): SeedEffect => ({ characteristic, level });

const SEED_QUESTIONS: SeedQuestion[] = [
  { text: "Do you alphabetize your spice rack?", options: [opt("Obviously", fx("orderly", "strong")), opt("I don't even own spices", fx("orderly", "strongMismatch"))] },
  { text: "Your GPS says turn left. There is no left. What do you do?", options: [opt("Turn left anyway", fx("chaotic", "strong")), opt("Recalculate and wait", fx("orderly", "moderate"))] },
  { text: "Elevator small talk: yes or no?", options: [opt("I live for it", fx("social", "strong")), opt("We stand in silence", fx("introverted", "strong"))] },
  { text: "Ideal Friday night?", options: [opt("Home, alone, blissful", fx("introverted", "strong")), opt("Wherever the noise is", fx("social", "strong"))] },
  { text: 'A stranger offers you a "shortcut."', options: [opt("Lead the way", fx("adventurous", "strong")), opt("Absolutely not", fx("cautious", "strong"))] },
  { text: "You smell smoke. Faintly. Barely.", options: [opt("Evacuate immediately", fx("cautious", "strong")), opt("Ignore it, probably fine", fx("chaotic", "moderate"))] },
  { text: "Your grandmother's recipe vs. a trending recipe video.", options: [opt("Grandmother wins, always", fx("traditional", "strong")), opt("The video knows best", fx("progressive", "strong"))] },
  { text: "New restaurant with zero reviews yet. In or out?", options: [opt("First in line", fx("progressive", "strong")), opt("I'll wait for reviews", fx("traditional", "moderate"))] },
  { text: "Camping with zero signal for a week.", options: [opt("Sign me up", fx("nature_loving", "strong")), opt("That sounds like a hostage situation", fx("tech_savvy", "moderate"))] },
  { text: "Your smart fridge sends you a notification.", options: [opt("I read it immediately", fx("tech_savvy", "strong")), opt("My fridge does not talk to me", fx("nature_loving", "moderate"))] },
  { text: "Board game night. Someone's about to lose.", options: [opt("I will not be taking it easy", fx("competitive", "strong")), opt("It's just a game, relax", fx("laid_back", "strong"))] },
  { text: "Your flight is delayed three hours.", options: [opt("More time for snacks", fx("laid_back", "strong")), opt("I need updates every five minutes", fx("cautious", "moderate"))] },
  { text: "Dessert menu arrives. What now?", options: [opt("One of everything", fx("indulgent", "strong")), opt("I'm actually fine", fx("rule_follower", "moderate"))] },
  { text: "The crosswalk sign says don't walk. The street is empty.", options: [opt("I wait anyway", fx("rule_follower", "strong")), opt("Street's empty, I'm going", fx("rebellious", "strong"))] },
  { text: 'A sign says "Do Not Touch."', options: [opt("I have to now", fx("rebellious", "strong")), opt("Message received", fx("rule_follower", "strong"))] },
  { text: "It's 2am and you're wide awake. Why?", options: [opt("Best ideas happen at 2am", fx("nocturnal", "strong")), opt("I was asleep hours ago", fx("nocturnal", "strongMismatch"))] },
  { text: "Would you trust a stranger's homemade GPS app?", options: [opt("Weirdly, yes", fx("chaotic", "moderate")), opt("Absolutely not", fx("cautious", "moderate"))] },
  { text: "You're assembling furniture. Instructions?", options: [opt("What instructions", fx("chaotic", "strong")), opt("Step one, obviously", fx("orderly", "strong"))] },
  { text: "A group chat hits 400 unread messages.", options: [opt("I'll read every one", fx("social", "moderate")), opt("Muted forever", fx("introverted", "moderate"))] },
  { text: "Would you try food you can't pronounce?", options: [opt("Every time", fx("adventurous", "strong")), opt("I need a translation first", fx("cautious", "moderate"))] },
  { text: "You get a chain message with a vague warning.", options: [opt("Better forward it, just in case", fx("cautious", "strong")), opt("Straight to trash", fx("progressive", "moderate"))] },
  { text: "Do you still send birthday cards by mail?", options: [opt("Of course", fx("traditional", "strong")), opt("That's what texts are for", fx("tech_savvy", "moderate"))] },
  { text: "Self-checkout or a cashier?", options: [opt("Self-checkout, obviously", fx("progressive", "moderate")), opt("I like the small talk", fx("social", "moderate"))] },
  { text: "A bee lands on your table.", options: [opt("We coexist peacefully", fx("nature_loving", "strong")), opt("I am leaving the table", fx("cautious", "moderate"))] },
  { text: "A new software update just dropped.", options: [opt("Installing before the changelog even loads", fx("tech_savvy", "strong")), opt("I'll deal with it in three months", fx("laid_back", "moderate"))] },
  { text: "You're losing a trivia game badly.", options: [opt("Demand a recount", fx("competitive", "strong")), opt("Honestly, I stopped paying attention", fx("laid_back", "moderate"))] },
  { text: "Your alarm goes off. It's a workday.", options: [opt("Snooze exactly once. Sacred ritual", fx("indulgent", "moderate")), opt("Up immediately, no negotiation", fx("rule_follower", "moderate"))] },
  { text: 'You\'re "borrowing" one office pen.', options: [opt("I'll return it. Eventually", fx("rebellious", "moderate")), opt("I would never", fx("rule_follower", "strong"))] },
  { text: "The team says everyone wears matching shirts.", options: [opt("Absolutely not", fx("rebellious", "strong")), opt("Sure, whatever unites the group", fx("social", "moderate"))] },
  { text: "Final question. Someone hands you an unlabeled potato.", options: [opt("Eating it immediately", fx("adventurous", "strong"), fx("chaotic", "moderate")), opt("Hard pass", fx("cautious", "strong"))] },
];

function build() {
  const questions: Question[] = [];
  const options: QuestionOption[] = [];
  const optionCharacteristics: OptionCharacteristic[] = [];

  let optionId = 1;
  let ocId = 1;

  SEED_QUESTIONS.forEach((sq, qi) => {
    const questionId = qi + 1;
    questions.push({ id: questionId, questionText: sq.text, questionType: "binary", isActive: true });

    sq.options.forEach((so, oi) => {
      const thisOptionId = optionId++;
      options.push({ id: thisOptionId, questionId, optionText: so.text, displayOrder: oi + 1 });

      so.effects.forEach((effect) => {
        optionCharacteristics.push({
          id: ocId++,
          optionId: thisOptionId,
          characteristicId: CHARACTERISTIC_ID_BY_NAME[effect.characteristic],
          weight: SCORE_WEIGHTS[effect.level],
        });
      });
    });
  });

  return { questions, options, optionCharacteristics };
}

export const GENERATED = build();