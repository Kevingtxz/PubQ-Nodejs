import TopicReportModel from "../domain/model/TopicReportModel";

export default interface ITopicReportService {
  insert(model: TopicReportModel): Promise<TopicReportModel>;
}
