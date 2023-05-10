import { Repository } from "typeorm";
import SubtopicPromptModel from "../domain/model/SubtopicPromptModel";

export default interface IPromptService {
  repo: Repository<SubtopicPromptModel>;

  insert(model: SubtopicPromptModel): Promise<SubtopicPromptModel>;
}
