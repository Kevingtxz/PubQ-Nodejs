export default interface QuestionForm {
  readonly text: string;
  readonly a: string;
  readonly b: string;
  readonly c: string;
  readonly d: string;
  readonly e: string;
  readonly correct: number;
  readonly explanation: string;
  readonly difficulty: number;
  readonly subtopicId: number;
  userId?: number;
}
