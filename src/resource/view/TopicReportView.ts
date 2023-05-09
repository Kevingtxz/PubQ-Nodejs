import TopicReportModel from "../../domain/model/TopicReportModel";

export default class TopicReportView {
  private constructor(
    public readonly id: number,
    public readonly text: string,
    public readonly topicId: number
  ) {}

  static toView(model: TopicReportModel): TopicReportView {
    return {
      id: model.id,
      text: model.text,
      topicId: model.topic.id,
    };
  }
}
