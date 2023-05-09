import AppData from "../../config/data/app-data";
import TopicModel from "../../domain/model/TopicModel";
import ITopicService from "../ITopicService";

export default class TopicService implements ITopicService {
  repo = AppData.getRepository(TopicModel);

  async findAll(): Promise<TopicModel[]> {
    const list: TopicModel[] = await this.repo.find({
      select: { id: true, name: true },
      where: { active: true },
    });
    return list;
  }

  async find(id: number): Promise<TopicModel | null> {
    const model = await this.repo.findOne({
      select: { id: true, name: true },
      where: { id, active: true },
    });

    return model;
  }

  async insert(model: TopicModel): Promise<TopicModel> {
    return await this.repo.save(model);
  }
}
