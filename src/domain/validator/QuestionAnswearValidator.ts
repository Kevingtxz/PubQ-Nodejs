import QuestionAnswearForm from "../form/QuestionAnswearForm";

export default class QuestionAnswearValidator {
  static formValidation({
    answear,
    questionId,
    userId,
  }: QuestionAnswearForm): void {
    this.answearValidation(answear);
    this.questionIdValidation(questionId);
    this.userIdValidation(userId);
  }

  static answearValidation(answear: number) {
    if (answear < 1 || answear > 5) {
      throw new Error("Answear is not valid");
    }
  }

  static questionIdValidation(questionId: number) {
    if (questionId < 1) {
      throw new Error("QuestionId is not valid");
    }
  }

  static userIdValidation(userId?: number) {
    if (!userId || userId < 1) {
      throw new Error("UserId is not valid");
    }
  }
}
