import { useGame } from "../hooks/useGame";
import { IntroScreen } from "./IntroScreen";
import { QuestionScreen } from "./QuestionScreen";
import { ResultScreen } from "./ResultScreen";

export function FindYourCountry() {
  const {
    screen,
    currentQuestion,
    currentOptions,
    qIndex,
    totalQuestions,
    startGame,
    answerQuestion,
    playAgain,
    resultCountry,
    whyReasons,
  } = useGame();

  return (
    <div className="max-w-[900px] mx-auto px-6">
      {screen === "intro" && <IntroScreen onStart={startGame} />}

      {screen === "question" && currentQuestion && (
        <QuestionScreen
          key={currentQuestion.id}
          question={currentQuestion}
          options={currentOptions}
          qNumber={qIndex + 1}
          total={totalQuestions}
          isFinal={qIndex === totalQuestions - 1}
          onAnswer={answerQuestion}
        />
      )}

      {screen === "result" && resultCountry && (
        <ResultScreen country={resultCountry} reasons={whyReasons} onPlayAgain={playAgain} />
      )}
    </div>
  );
}