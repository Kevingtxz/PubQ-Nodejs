import TopicModel from "../domain/model/TopicModel";

export default interface ITopicService {
  findAll(): Promise<TopicModel[]>;
  find(id: number): Promise<TopicModel | null>;
  insert(model: TopicModel): Promise<TopicModel>;
}
