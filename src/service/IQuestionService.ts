import QuestionAnswearModel from "../domain/model/QuestionAnswearModel";
import QuestionModel from "../domain/model/QuestionModel";

export default interface IQuestionService {
  find(id: number): Promise<QuestionModel | null>;
  findPageAll(page: number): Promise<QuestionModel[]>;
  findPageAllBySubtopic(
    subtopicId: number,
    page: number
  ): Promise<QuestionModel[]>;
  findPageAllByTopic(topicId: number, page: number): Promise<QuestionModel[]>;
  generateNewQuestions(subtopicId: number): Promise<QuestionModel[]>;
  insert(model: QuestionModel): Promise<QuestionModel>;
  insertAll(models: QuestionModel[]): Promise<QuestionModel[]>;
  insertAnswear(model: QuestionAnswearModel): Promise<QuestionModel | null>;
}
