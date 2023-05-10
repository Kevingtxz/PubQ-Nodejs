import QuestionPromptForm from "../form/question-ai/QuestionPromptForm";
import QuestionPromptModel from "../model/QuestionPromptModel";
import QuestionPromptValidator from "../validator/QuestionPromptValidator";

export default class QuestionPromptFactory {
  static create(form: QuestionPromptForm) {
    QuestionPromptValidator.formValidation(form);
    const { generatorAI, templatePrompt, completion } = form;

    const model = new QuestionPromptModel();
    model.generatorAI = generatorAI;
    model.templatePrompt = templatePrompt;
    model.completion = completion;
    return model;
  }

  static createWithId(id: number) {
    const model = new QuestionPromptModel();
    model.id = id;
    return model;
  }
}
