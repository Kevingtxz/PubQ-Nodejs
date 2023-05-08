import SubtopicModel from "../../domain/model/SubtopicModel";

export default class SubtopicView {
  private constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly topicId: number
  ) {}

  static toView(model: SubtopicModel): SubtopicView {
    return {
      id: model.id,
      name: model.name,
      topicId: model.topic.id,
    };
  }
}
