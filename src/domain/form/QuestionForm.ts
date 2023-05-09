export default interface QuestionForm {
  text: string;
  a: string;
  b: string;
  c: string;
  d: string;
  e: string;
  correct: number;
  explanation: string;
  difficulty: number;
  subtopicId: number;
  userId?: number;
}
