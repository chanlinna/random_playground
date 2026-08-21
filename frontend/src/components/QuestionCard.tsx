import type { Question } from "../types/question";
import type { QuestionOption } from "../types/questionOption";

interface QuestionCardProps {
  question: Question;
  options: QuestionOption[];
  onAnswer: (optionId: number) => void;
  isFinal?: boolean;
}

export function QuestionCard({ question, options, onAnswer, isFinal }: QuestionCardProps) {
  const sorted = [...options].sort((a, b) => a.displayOrder - b.displayOrder);
  const twoCol = sorted.length === 2;

  return (
    <div className="flex flex-col items-center text-center animate-fade-up w-full">
      {isFinal && (
        <span className="font-mono text-[13px] uppercase tracking-wider bg-brand-red text-brand-cream px-3.5 py-1 rounded-full mb-4 inline-block">
          Final Question
        </span>
      )}
      <h2 className="font-display text-[clamp(24px,4vw,36px)] leading-tight max-w-[18ch] mx-auto mb-8">
        {question.questionText}
      </h2>
      <div className={`flex ${twoCol ? "flex-row" : "flex-col"} gap-3 w-full max-w-md mx-auto`}>
        {sorted.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onAnswer(opt.id)}
            className={`border-2 border-brand-ink bg-brand-cream text-brand-ink rounded-2xl px-5 py-4 font-bold text-[15.5px] transition-all duration-150 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-brand-ink hover:text-brand-cream hover:-translate-y-1 active:scale-[0.97] ${
              twoCol ? "flex-1 text-center" : "text-left"
            }`}
          >
            {opt.optionText}
          </button>
        ))}
      </div>
    </div>
  );
}