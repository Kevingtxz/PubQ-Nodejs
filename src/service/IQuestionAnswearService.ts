import QuestionAnswearModel from "../domain/model/QuestionAnswearModel";

export default interface IQuestionAnswearService {
  insert(model: QuestionAnswearModel): Promise<QuestionAnswearModel>;
}
