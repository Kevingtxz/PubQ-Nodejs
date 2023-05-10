import SubtopicModel from "../domain/model/SubtopicModel";

export default interface ISubtopicService {
  findAllByTopicId(topicId: number): Promise<SubtopicModel[]>;
  find(id: number): Promise<SubtopicModel | null>;
  generateNewSubtopics(topicId: number): Promise<SubtopicModel[]>;
  insert(model: SubtopicModel): Promise<SubtopicModel>;
  insertAll(models: SubtopicModel[]): Promise<SubtopicModel[]>;
}
