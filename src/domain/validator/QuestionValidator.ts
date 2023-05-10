import { difficultMap } from "../enum/difficulty-enum";
import QuestionForm from "../form/QuestionForm";
import QuestionAIForm from "../form/question-ai/QuestionAIForm";

export default class QuestionValidator {
  static formAIValidation({
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
    promptId,
  }: QuestionAIForm) {
    this.textValidation(text);
    this.textOptionsValidation([a, b, c, d, e]);
    this.correctStrValidation(correct);
    this.explanationValidator(explanation);
    this.difficultyValidator(difficulty);
    this.subtopicIdValidation(subtopicId);
    this.promptIdValidation(promptId);
  }

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
    userId,
  }: QuestionForm): void {
    this.textValidation(text);
    this.textOptionsValidation([a, b, c, d, e]);
    this.correctValidation(correct);
    this.explanationValidator(explanation);
    this.difficultyValidator(difficulty);
    this.subtopicIdValidation(subtopicId);
    this.userIdValidation(userId);
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

  static correctStrValidation(correct: string): number {
    switch (correct) {
      case "a":
        return 1;
      case "b":
        return 2;
      case "c":
        return 3;
      case "d":
        return 4;
      case "e":
        return 5;
    }

    throw new Error("Correct is not valid");
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

  static userIdValidation(userId?: number) {
    if (!userId || userId < 1) {
      throw new Error("UserId is not valid");
    }
  }

  static promptIdValidation(promptId: number) {
    if (promptId < 1) {
      throw new Error("PromptId is not valid");
    }
  }
}
