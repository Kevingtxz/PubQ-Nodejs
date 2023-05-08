import SubtopicModel from "../domain/model/SubtopicModel";

export default interface ISubtopicService {
  findAllByTopicId(topicId: number): Promise<SubtopicModel[]>;
  find(id: number): Promise<SubtopicModel | null>;
  insert(model: SubtopicModel): Promise<SubtopicModel>;
  insertAll(models: SubtopicModel[]): Promise<SubtopicModel[]>;
}
