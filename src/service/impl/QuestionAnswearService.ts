import AppData from "../../config/data/app-data";
import IQuestionAnswearService from "../IQuestionAnswearService";
import QuestionAnswearModel from "../../domain/model/QuestionAnswearModel";

class QuestionAnswearService implements IQuestionAnswearService {
  repo = AppData.getRepository(QuestionAnswearModel);

  async insert(model: QuestionAnswearModel): Promise<QuestionAnswearModel> {
    return await this.repo.save(model);
  }
}

export default new QuestionAnswearService();
