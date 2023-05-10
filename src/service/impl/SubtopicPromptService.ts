import AppData from "../../config/data/app-data";
import SubtopicPromptModel from "../../domain/model/SubtopicPromptModel";
import ISubtopicPromptService from "../ISubtopicPromptService";

export default class SubtopicPromptService implements ISubtopicPromptService {
  repo = AppData.getRepository(SubtopicPromptModel);

  async insert(model: SubtopicPromptModel): Promise<SubtopicPromptModel> {
    return this.repo.save(model);
  }
}
