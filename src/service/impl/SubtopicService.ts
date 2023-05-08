import AppData from "../../config/data/app-data";
import SubtopicModel from "../../domain/model/SubtopicModel";
import ISubtopicService from "../ISubtopicService";
import TopicFactory from "../../domain/factory/TopicFactory";

class SubtopicService implements ISubtopicService {
  repo = AppData.getRepository(SubtopicModel);

  async findAllByTopicId(topicId: number): Promise<SubtopicModel[]> {
    const list = await this.repo.find({
      select: { id: true, name: true },
      relations: { topic: true },
      where: { active: true, topic: TopicFactory.createWithId(topicId) },
    });

    return list;
  }

  async find(id: number): Promise<SubtopicModel | null> {
    const model = await this.repo.findOne({
      select: { id: true, name: true },
      relations: { topic: true },
      where: { id, active: true },
    });

    return model;
  }

  async insert(model: SubtopicModel): Promise<SubtopicModel> {
    return await this.repo.save(model);
  }

  async insertAll(models: SubtopicModel[]): Promise<SubtopicModel[]> {
    return await this.repo.save(models);
  }
}

export default new SubtopicService();
