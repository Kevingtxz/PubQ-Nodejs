import { difficultMap } from "../enum/difficulty-enum";
import QuestionForm from "../form/QuestionForm";

export default class QuestionValidator {
  static formValidation({
    text,
    a,
    b,
    c,
    d,
    e,
    correct,
    explanation,
    difficulty,
    subtopicId,
  }: QuestionForm): void {
    this.textValidation(text);
    this.textOptionsValidation([a, b, c, d, e]);
    this.correctValidation(correct);
    this.explanationValidator(explanation);
    this.difficultyValidator(difficulty);
    this.subtopicIdValidation(subtopicId);
  }

  static textValidation(text: string) {
    if (text.length < 1) {
      throw new Error("Text is not valid");
    }
  }

  static textOptionsValidation(textOptions: string[]) {
    textOptions.forEach((item) => {
      if (item.length < 1) {
        throw new Error("Text option not valid");
      }
    });
  }

  static correctValidation(correct: number) {
    if (correct < 1 || correct > 5) {
      throw new Error("Correct is not valid");
    }
  }

  static explanationValidator(explanation: string) {
    if (explanation.length > 5000 || explanation.length < 1) {
      throw new Error("Explanation is not valid");
    }
  }

  static difficultyValidator(difficulty: number) {
    if (!difficultMap.get(difficulty)) {
      throw new Error("Difficulty is not valid");
    }
  }

  static subtopicIdValidation(subtopicId: number) {
    if (subtopicId < 1) {
      throw new Error("SubtopicId is not valid");
    }
  }
}
