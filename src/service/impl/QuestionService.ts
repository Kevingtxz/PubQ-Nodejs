import AppData from "../../config/data/app-data";
import QuestionModel from "../../domain/model/QuestionModel";
import UserFactory from "../../domain/factory/UserFactory";
import IQuestionService from "../IQuestionService";
import QuestionAnswearModel from "../../domain/model/QuestionAnswearModel";
import QuestionAnswearService from "./QuestionAnswearService";
import IQuestionAnswearService from "../IQuestionAnswearService";

const questionAnswearService: IQuestionAnswearService =
  new QuestionAnswearService();

export default class QuestionService implements IQuestionService {
  repo = AppData.getRepository(QuestionModel);
  PAGE_SIZE = 5;

  async findPageAllBySubtopic(
    subtopicId: number,
    page: number
  ): Promise<QuestionModel[]> {
    const list = await this.repo.find({
      select: {
        id: true,
        text: true,
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        correct: true,
        explanation: true,
        difficulty: true,
        created_at: true,
      },
      relations: { subtopic: true },
      where: {
        subtopic: { topic: UserFactory.createWithId(subtopicId) },
        active: true,
      },
      skip: (page - 1) * this.PAGE_SIZE,
      take: this.PAGE_SIZE,
      order: {
        created_at: "DESC",
      },
    });

    return list;
  }

  async findPageAllByTopic(
    topicId: number,
    page: number
  ): Promise<QuestionModel[]> {
    const list = await this.repo.find({
      skip: (page - 1) * this.PAGE_SIZE,
      take: this.PAGE_SIZE,
      select: {
        id: true,
        text: true,
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        correct: true,
        explanation: true,
        difficulty: true,
        created_at: true,
      },
      relations: { subtopic: true },
      where: {
        subtopic: { topic: UserFactory.createWithId(topicId) },
        active: true,
      },
      order: {
        created_at: "DESC",
      },
    });
    return list;
  }

  async findPageAll(page: number): Promise<QuestionModel[]> {
    const list = await this.repo.find({
      select: {
        id: true,
        text: true,
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        correct: true,
        explanation: true,
        difficulty: true,
        created_at: true,
      },
      relations: { subtopic: true },
      where: { active: true },
      skip: (page - 1) * this.PAGE_SIZE,
      take: this.PAGE_SIZE,
      order: {
        created_at: "DESC",
      },
    });

    return list;
  }

  async find(id: number): Promise<QuestionModel | null> {
    const model = await this.repo.findOne({
      select: {
        id: true,
        text: true,
        a: true,
        b: true,
        c: true,
        d: true,
        e: true,
        correct: true,
        explanation: true,
        difficulty: true,
      },
      relations: { subtopic: true },
      where: { id, active: true },
    });
    return model;
  }

  async insert(model: QuestionModel): Promise<QuestionModel> {
    return await this.repo.save(model);
  }

  async insertAnswear(
    model: QuestionAnswearModel
  ): Promise<QuestionModel | null> {
    await questionAnswearService.insert(model);
    const questionModel = await this.find(model.user.id);

    return questionModel;
  }

  async insertAll(models: QuestionModel[]): Promise<QuestionModel[]> {
    return await this.repo.save(models);
  }
}
