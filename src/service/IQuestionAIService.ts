import QuestionToAIForm from "../domain/form/question-ai/QuestionToAIForm";
import QuestionModel from "../domain/model/QuestionModel";

export default interface IQuestionAIService {
  generateQuestions(form: QuestionToAIForm): Promise<QuestionModel[]>;
}
