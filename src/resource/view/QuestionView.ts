import QuestionModel from "../../domain/model/QuestionModel";

export default class QuestionView {
  private constructor(
    public readonly id: number,
    public readonly text: string,
    public readonly a: string,
    public readonly b: string,
    public readonly c: string,
    public readonly d: string,
    public readonly e: string,
    public readonly difficulty: number,
    public readonly subtopicId: number
  ) {}

  static toView(model: QuestionModel): QuestionView {
    return {
      id: model.id,
      text: model.text,
      a: model.a,
      b: model.b,
      c: model.c,
      d: model.d,
      e: model.e,
      difficulty: model.difficulty,
      subtopicId: model.subtopic.id,
    };
  }
}
