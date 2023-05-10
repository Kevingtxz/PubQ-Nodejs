import AppData from "../../config/data/app-data";
import SubtopicModel from "../../domain/model/SubtopicModel";
import ISubtopicService from "../ISubtopicService";
import TopicFactory from "../../domain/factory/TopicFactory";
import ITopicService from "../ITopicService";
import TopicService from "./TopicService";
import ISubtopicAIService from "../ISubtopicAIService";
import SubtopicAIService from "./SubtopicAIService";
import SubtopicToAIForm from "../../domain/form/subtopic-ai/SubtopicToAIForm";

const topicService: ITopicService = new TopicService();
const aiSubtopicService: ISubtopicAIService = new SubtopicAIService();

export default class SubtopicService implements ISubtopicService {
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

  async generateNewSubtopics(topicId: number): Promise<SubtopicModel[]> {
    const topic = await topicService.find(topicId);
    if (!topic) {
      return [];
    }

    const formToAI: SubtopicToAIForm = {
      topicId: topic.id,
      topicName: topic.name,
    };
    const models = await aiSubtopicService.generateSubtopics(formToAI);

    return this.insertAll(models);
  }

  async insert(model: SubtopicModel): Promise<SubtopicModel> {
    return this.repo.save(model);
  }

  async insertAll(models: SubtopicModel[]): Promise<SubtopicModel[]> {
    return this.repo.save(models);
  }
}
