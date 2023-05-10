import { generatorAIMap } from "../enum/generator-ai-enum";
import { subtopicTemplatePromptMap } from "../enum/subtopic-template-prompt-enum";
import QuestionPromptForm from "../form/question-ai/QuestionPromptForm";

export default class QuestionPromptValidator {
  static formValidation({
    generatorAI,
    templatePrompt,
    completion,
  }: QuestionPromptForm): void {
    this.generatorAIValidation(generatorAI);
    this.templatePromptValidation(templatePrompt);
    this.completionValidation(completion);
  }

  static generatorAIValidation(generatorAI: number) {
    if (!generatorAIMap.get(generatorAI)) {
      throw new Error("GeneratorAI is not valid");
    }
  }

  static templatePromptValidation(TemplatePrompt: number) {
    if (!subtopicTemplatePromptMap.get(TemplatePrompt)) {
      throw new Error("TemplatePrompt is not valid");
    }
  }

  static completionValidation(completion: string) {
    if (completion.length < 1) {
      throw new Error("Completion is not valid");
    }
  }
}
