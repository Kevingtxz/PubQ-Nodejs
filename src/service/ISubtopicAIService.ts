import SubtopicToAIForm from "../domain/form/subtopic-ai/SubtopicToAIForm";
import SubtopicModel from "../domain/model/SubtopicModel";

export default interface IAISubtopicService {
  generateSubtopics(form: SubtopicToAIForm): Promise<SubtopicModel[]>;
}
