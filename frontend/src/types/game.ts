export type GameScreen = "intro" | "question" | "result";

export interface Answer {
  questionId: number;
  optionId: number;
}