import {
  getGeneratorAI,
  GeneratorAIEnum,
} from "../../domain/enum/generator-ai-enum";
import {
  getSubtopicTemplate,
  SubtopicTemplatePromptEnum,
} from "../../domain/enum/subtopic-template-prompt-enum";
import SubtopicFactory from "../../domain/factory/SubtopicFactory";
import SubtopicPromptFactory from "../../domain/factory/SubtopicPromptFactory";
import SubtopicFromCompletionForm from "../../domain/form/subtopic-ai/SubtopicCompletionForm";
import SubtopicToAIForm from "../../domain/form/subtopic-ai/SubtopicToAIForm";
import SubtopicModel from "../../domain/model/SubtopicModel";
import ISubtopicAIService from "../ISubtopicAIService";
import ISubtopicPromptService from "../ISubtopicPromptService";
import SubtopicPromptService from "./SubtopicPromptService";

const subtopicPromptService: ISubtopicPromptService =
  new SubtopicPromptService();

export default class SubtopicAIService implements ISubtopicAIService {
  generatorAI = getGeneratorAI(GeneratorAIEnum.GPT3);
  templatePrompt = getSubtopicTemplate(SubtopicTemplatePromptEnum.PROMPT_1);

  async generateSubtopics(
    formToAI: SubtopicToAIForm
  ): Promise<SubtopicModel[]> {
    const promptStr = this.templatePrompt.getTemplatePrompt(formToAI);
    let completion = await this.generatorAI.getAPIOpenAI(promptStr);
    const prompt = await this.savePrompt(completion);
    completion = this.templatePrompt.preTreatmentCompletion(completion);

    if (this.templatePrompt.validateCompletion(completion)) {
      const subtopicsName =
        this.templatePrompt!.completionJsonParser(completion);

      return this.buildModels({
        subtopicsName,
        topicId: formToAI.topicId,
        promptId: prompt.id,
      });
    }
    return [];
  }

  private buildModels({
    subtopicsName,
    topicId,
    promptId,
  }: {
    subtopicsName: string[];
    topicId: number;
    promptId: number;
  }) {
    return subtopicsName.map((name) =>
      SubtopicFactory.createByAIForm({
        name: name,
        topicId,
        promptId,
      })
    );
  }

  private async savePrompt(completion: string) {
    const promptToSave = SubtopicPromptFactory.create({
      generatorAI: this.generatorAI.cod,
      templatePrompt: this.templatePrompt.cod,
      completion,
    });

    return subtopicPromptService.insert(promptToSave);
  }
}
