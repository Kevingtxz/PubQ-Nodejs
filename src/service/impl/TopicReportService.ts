import AppData from "../../config/data/app-data";
import TopicReportModel from "../../domain/model/TopicReportModel";
import ITopicReportService from "../ITopicReportService";

export default class TopicReportService implements ITopicReportService {
  repo = AppData.getRepository(TopicReportModel);

  async insert(model: TopicReportModel): Promise<TopicReportModel> {
    return this.repo.save(model);
  }
}
