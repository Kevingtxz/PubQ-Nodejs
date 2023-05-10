import SubtopicToAIForm from "../form/subtopic-ai/SubtopicToAIForm";

export interface SubtopicTemplatePromptInterface {
  cod: number;
  description: string;
  getTemplatePrompt: (form: any) => string;
  validateCompletion: (str: string) => boolean;
  preTreatmentCompletion: (str: string) => string;
  completionJsonParser: (completion: string) => string[];
}

export enum SubtopicTemplatePromptEnum {
  PROMPT_1 = 1,
}

const subtopicTemplatePromptMap = new Map<
  SubtopicTemplatePromptEnum,
  SubtopicTemplatePromptInterface
>();
subtopicTemplatePromptMap.set(SubtopicTemplatePromptEnum.PROMPT_1, {
  cod: SubtopicTemplatePromptEnum.PROMPT_1,
  description: "Subtopic Prompt",

  getTemplatePrompt({ topicName }: SubtopicToAIForm): string {
    return `return 10 subtopics for ${topicName}`;
  },

  validateCompletion(str: string): boolean {
    // template: [{"subtopic":"subtopic"}]
    const regex = /\[".*?"+,".*?"\]$/;
    return regex.test(str);
  },

  preTreatmentCompletion(str: string): string {
    return str.substring(str.indexOf("["), str.indexOf("]") + 1);
  },

  completionJsonParser(completion: string): string[] {
    return JSON.parse(completion);
  },
});

export { subtopicTemplatePromptMap };

export function getSubtopicTemplate(
  opt: SubtopicTemplatePromptEnum
): SubtopicTemplatePromptInterface {
  return subtopicTemplatePromptMap.get(opt) as SubtopicTemplatePromptInterface;
}
