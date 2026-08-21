import { ProgressBar } from "../components/ProgressBar";
import { QuestionCard } from "../components/QuestionCard";
import type { Question } from "../types/question";
import type { QuestionOption } from "../types/questionOption";

interface QuestionScreenProps {
  question: Question;
  options: QuestionOption[];
  qNumber: number;
  total: number;
  isFinal: boolean;
  onAnswer: (optionId: number) => void;
}

export function QuestionScreen({ question, options, qNumber, total, isFinal, onAnswer }: QuestionScreenProps) {
  return (
    <div>
      <ProgressBar current={qNumber} total={total} />
      <div className="min-h-[55vh] flex items-center justify-center py-10">
        <QuestionCard question={question} options={options} onAnswer={onAnswer} isFinal={isFinal} />
      </div>
    </div>
  );
}