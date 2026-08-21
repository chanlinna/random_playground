import type { Country } from "../types/country";
import type { CountryCharacteristic } from "../types/countryCharacteristic";
import type { OptionCharacteristic } from "../types/optionCharacteristic";
import type { Characteristic } from "../types/characteristic";
import type { Answer } from "../types/game";
import { REASON_PHRASES, FILLER_REASONS } from "../data/reasonPhrases";

// Re-exported so anything that wants to display/label a weight (e.g. an
// admin tool later) has one source of truth for what the numbers mean.
export { SCORE_WEIGHTS } from "../data/_questionSeed";

/**
 * score(country) = sum over every answered option's characteristic effects of
 *   optionCharacteristic.weight * countryCharacteristic.weight
 *
 * A country with no CountryCharacteristic row for a given characteristic is
 * treated as weight 0 — that trait simply doesn't move its score, regardless
 * of how strongly the chosen option leaned toward or away from it.
 */
export function calculateScores(
  countries: Country[],
  countryCharacteristics: CountryCharacteristic[],
  answers: Answer[],
  optionCharacteristics: OptionCharacteristic[]
): Record<number, number> {
  const scores: Record<number, number> = {};
  countries.forEach((c) => {
    scores[c.id] = 0;
  });

  answers.forEach((answer) => {
    const effects = optionCharacteristics.filter((oc) => oc.optionId === answer.optionId);

    effects.forEach((effect) => {
      countries.forEach((country) => {
        const relation = countryCharacteristics.find(
          (cc) => cc.countryId === country.id && cc.characteristicId === effect.characteristicId
        );
        const countryWeight = relation?.weight ?? 0;
        scores[country.id] += effect.weight * countryWeight;
      });
    });
  });

  return scores;
}

export function getWinningCountry(countries: Country[], scores: Record<number, number>): Country {
  const bestScore = Math.max(...countries.map((c) => scores[c.id]));
  const leaders = countries.filter((c) => scores[c.id] === bestScore);
  return leaders[Math.floor(Math.random() * leaders.length)];
}

export function getWhyYouBelong(
  country: Country,
  countryCharacteristics: CountryCharacteristic[],
  answers: Answer[],
  optionCharacteristics: OptionCharacteristic[],
  characteristics: Characteristic[]
): string[] {
  const seen = new Set<number>();
  const scored: { text: string; contribution: number }[] = [];

  answers.forEach((answer) => {
    const effects = optionCharacteristics.filter((oc) => oc.optionId === answer.optionId);

    effects.forEach((effect) => {
      if (seen.has(effect.characteristicId)) return;

      const relation = countryCharacteristics.find(
        (cc) => cc.countryId === country.id && cc.characteristicId === effect.characteristicId
      );
      const countryWeight = relation?.weight ?? 0;
      const contribution = effect.weight * countryWeight;
      if (contribution <= 0) return;

      const characteristic = characteristics.find((c) => c.id === effect.characteristicId);
      const phrase = characteristic ? REASON_PHRASES[characteristic.name] : undefined;
      if (!phrase) return;

      seen.add(effect.characteristicId);
      scored.push({ text: phrase, contribution });
    });
  });

  scored.sort((a, b) => b.contribution - a.contribution);
  const reasons = scored.slice(0, 6).map((s) => s.text);

  let i = 0;
  while (reasons.length < 4) {
    reasons.push(FILLER_REASONS[i % FILLER_REASONS.length]);
    i++;
  }
  return reasons;
}