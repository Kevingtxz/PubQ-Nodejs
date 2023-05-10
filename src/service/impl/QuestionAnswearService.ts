import AppData from "../../config/data/app-data";
import IQuestionAnswearService from "../IQuestionAnswearService";
import QuestionAnswearModel from "../../domain/model/QuestionAnswearModel";

export default class QuestionAnswearService implements IQuestionAnswearService {
  repo = AppData.getRepository(QuestionAnswearModel);

  async insert(model: QuestionAnswearModel): Promise<QuestionAnswearModel> {
    return this.repo.save(model);
  }
}
