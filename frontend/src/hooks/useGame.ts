import { useMemo, useState } from "react";
import { COUNTRIES } from "../data/countries";
import { CHARACTERISTICS } from "../data/characteristics";
import { COUNTRY_CHARACTERISTICS } from "../data/countryCharacteristics";
import { QUESTIONS } from "../data/questions";
import { QUESTION_OPTIONS } from "../data/questionOptions";
import { OPTION_CHARACTERISTICS } from "../data/optionCharacteristics";
import { calculateScores, getWinningCountry, getWhyYouBelong } from "../utils/scoring";
import type { Answer, GameScreen } from "../types/game";

export function useGame() {
  const [screen, setScreen] = useState<GameScreen>("intro");
  const [qIndex, setQIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const activeQuestions = useMemo(() => QUESTIONS.filter((q) => q.isActive), []);
  const totalQuestions = activeQuestions.length;
  const currentQuestion = activeQuestions[qIndex];
  const currentOptions = useMemo(
    () => (currentQuestion ? QUESTION_OPTIONS.filter((o) => o.questionId === currentQuestion.id) : []),
    [currentQuestion]
  );

  function startGame() {
    setQIndex(0);
    setAnswers([]);
    setScreen("question");
  }

  function answerQuestion(optionId: number) {
    const nextAnswers = [...answers, { questionId: currentQuestion.id, optionId }];
    setAnswers(nextAnswers);
    if (qIndex + 1 >= totalQuestions) {
      setScreen("result");
    } else {
      setQIndex(qIndex + 1);
    }
  }

  function playAgain() {
    setQIndex(0);
    setAnswers([]);
    setScreen("intro");
  }

  // Scores stay internal — computed only at the end, never exposed to the UI mid-game.
  const scores = useMemo(() => {
    if (screen !== "result") return {};
    return calculateScores(COUNTRIES, COUNTRY_CHARACTERISTICS, answers, OPTION_CHARACTERISTICS);
  }, [screen, answers]);

  const resultCountry = useMemo(() => {
    if (screen !== "result") return null;
    return getWinningCountry(COUNTRIES, scores);
  }, [screen, scores]);

  const whyReasons = useMemo(() => {
    if (!resultCountry) return [];
    return getWhyYouBelong(resultCountry, COUNTRY_CHARACTERISTICS, answers, OPTION_CHARACTERISTICS, CHARACTERISTICS);
  }, [resultCountry, answers]);

  return {
    screen,
    qIndex,
    totalQuestions,
    currentQuestion,
    currentOptions,
    startGame,
    answerQuestion,
    playAgain,
    resultCountry,
    whyReasons,
  };
}