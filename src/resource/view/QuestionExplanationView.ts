import QuestionModel from "../../domain/model/QuestionModel";

export default class QuestionExplanationView {
  private constructor(
    public readonly id: number,
    public readonly correct: number,
    public readonly explanation: string
  ) {}

  static toView(model: QuestionModel): QuestionExplanationView {
    return {
      id: model.id,
      correct: model.correct,
      explanation: model.explanation,
    };
  }
}
