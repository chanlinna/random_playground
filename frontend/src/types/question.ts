export interface Question {
  id: number;
  questionText: string;
  questionType: string; // e.g. "binary" — kept as a free string to match the backend column
  isActive: boolean;
}