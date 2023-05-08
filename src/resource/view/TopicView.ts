import TopicModel from "../../domain/model/TopicModel";

export default class TopicView {
  private constructor(
    public readonly id: number,
    public readonly name: string
  ) {}

  static toView(model: TopicModel): TopicView {
    return {
      id: model.id,
      name: model.name,
    };
  }
}
