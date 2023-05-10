import {
  getGeneratorAI,
  GeneratorAIEnum,
} from "../../domain/enum/generator-ai-enum";
import {
  QuestionTemplatePromptEnum,
  getQuestionTemplate,
} from "../../domain/enum/question-template-prompt-enum";
import QuestionFactory from "../../domain/factory/QuestionFactory";
import QuestionPromptFactory from "../../domain/factory/QuestionPromptFactory";
import QuestionFromCompletionForm from "../../domain/form/question-ai/QuestionFromCompletionForm";
import QuestionToAIForm from "../../domain/form/question-ai/QuestionToAIForm";
import QuestionModel from "../../domain/model/QuestionModel";
import IQuestionAIService from "../IQuestionAIService";
import IQuestionPromptService from "../IQuestionPromptService";
import QuestionPromptService from "./QuestionPromptService";

const questionPromptService: IQuestionPromptService =
  new QuestionPromptService();

export default class QuestionAIService implements IQuestionAIService {
  generatorAI = getGeneratorAI(GeneratorAIEnum.GPT3);
  templatePrompt = getQuestionTemplate(QuestionTemplatePromptEnum.PROMPT_1);

  async generateQuestions(
    formToAI: QuestionToAIForm
  ): Promise<QuestionModel[]> {
    const promptStr = this.templatePrompt.getTemplatePrompt(formToAI);
    let completion = await this.generatorAI.getAPIOpenAI(promptStr);
    const prompt = await this.savePrompt(completion);
    completion = this.templatePrompt.preTreatmentCompletion(completion);

    if (true) {
      const forms = this.templatePrompt!.completionJsonParser(completion);

      return this.buildModels({
        forms,
        subtopicId: formToAI.subtopicId,
        difficulty: formToAI.difficulty,
        promptId: prompt.id,
      });
    }

    return [];
  }

  private buildModels({
    forms,
    subtopicId,
    difficulty,
    promptId,
  }: {
    forms: QuestionFromCompletionForm[];
    subtopicId: number;
    difficulty: number;
    promptId: number;
  }) {
    return forms.map((item) =>
      QuestionFactory.createByAIForm(
        Object.assign({}, item, {
          difficulty,
          subtopicId,
          promptId,
        })
      )
    );
  }

  private async savePrompt(completion: string) {
    const promptToSave = QuestionPromptFactory.create({
      generatorAI: this.generatorAI.cod,
      templatePrompt: this.templatePrompt.cod,
      completion,
    });

    return questionPromptService.insert(promptToSave);
  }
}
