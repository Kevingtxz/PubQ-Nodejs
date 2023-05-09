import QuestionModel from "../domain/model/QuestionModel";

export default interface IQuestionService {
  findPageAllBySubtopic(
    subtopicId: number,
    page: number
  ): Promise<QuestionModel[]>;
  findPageAllByTopic(topicId: number, page: number): Promise<QuestionModel[]>;
  findPageAll(page: number): Promise<QuestionModel[]>;
  find(id: number): Promise<QuestionModel | null>;
  insert(model: QuestionModel): Promise<QuestionModel>;
  insertAll(models: QuestionModel[]): Promise<QuestionModel[]>;
}
