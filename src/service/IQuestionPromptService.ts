import QuestionPromptModel from "../domain/model/QuestionPromptModel";

export default interface IQuestionPromptService {
  insert(model: QuestionPromptModel): Promise<QuestionPromptModel>;
}
