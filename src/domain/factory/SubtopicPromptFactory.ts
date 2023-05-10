import SubtopicPromptForm from "../form/subtopic-ai/SubtopicPromptForm";
import SubtopicPromptModel from "../model/SubtopicPromptModel";
import SubtopicPromptValidator from "../validator/SubtopicPromptValidator";

export default class SubtopicPromptFactory {
  static create(form: SubtopicPromptForm) {
    SubtopicPromptValidator.formValidation(form);
    const { generatorAI, templatePrompt, completion } = form;

    const model = new SubtopicPromptModel();
    model.generatorAI = generatorAI;
    model.templatePrompt = templatePrompt;
    model.completion = completion;
    return model;
  }

  static createWithId(id: number) {
    const model = new SubtopicPromptModel();
    model.id = id;
    return model;
  }
}
