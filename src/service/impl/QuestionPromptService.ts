import AppData from "../../config/data/app-data";
import QuestionPromptModel from "../../domain/model/QuestionPromptModel";
import IQuestionPromptService from "../IQuestionPromptService";

export default class QuestionPromptService implements IQuestionPromptService {
  repo = AppData.getRepository(QuestionPromptModel);

  async insert(model: QuestionPromptModel): Promise<QuestionPromptModel> {
    return await this.repo.save(model);
  }
}
