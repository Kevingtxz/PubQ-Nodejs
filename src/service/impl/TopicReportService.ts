import AppData from "../../config/data/app-data";
import TopicReportModel from "../../domain/model/TopicReportModel";
import ITopicReportService from "../ITopicReportService";

class TopicReportService implements ITopicReportService {
  repo = AppData.getRepository(TopicReportModel);

  async insert(model: TopicReportModel): Promise<TopicReportModel> {
    return await this.repo.save(model);
  }
}

export default new TopicReportService();
