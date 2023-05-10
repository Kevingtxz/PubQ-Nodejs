import QuestionFromCompletionForm from "../form/question-ai/QuestionFromCompletionForm";
import QuestionToAIForm from "../form/question-ai/QuestionToAIForm";

export interface QuestionTemplatePromptInterface {
  cod: number;
  description: string;
  getTemplatePrompt: (form: any) => string;
  validateCompletion: (str: string) => boolean;
  preTreatmentCompletion: (str: string) => string;
  completionJsonParser: (completion: string) => QuestionFromCompletionForm[];
}

export enum QuestionTemplatePromptEnum {
  PROMPT_1 = 1,
  get,
}

const questionTemplatePromptMap = new Map<
  QuestionTemplatePromptEnum,
  QuestionTemplatePromptInterface
>();
questionTemplatePromptMap.set(QuestionTemplatePromptEnum.PROMPT_1, {
  cod: QuestionTemplatePromptEnum.PROMPT_1,
  description: "Question Prompt",

  getTemplatePrompt({
    qtd,
    topicName,
    subtopicName,
    difficulty,
  }: QuestionToAIForm): string {
    return `need {qtd:${qtd},topic:${topicName},subtopic:${subtopicName},Difficulty:${difficulty}} structured as JSON " +
    "minified [{question,a,b,c,d,e,correct,explanation}], don"t write anything more`;
  },

  validateCompletion(str: string): boolean {
    // template: [{"question":"TEXT","a":"abdapghapgmd","b":"bapdgojhopahdj","c":"cahdgkhppkh","d":"dpk´hskhpfsph*", "e":"ehspmlhlmplhf*","b":"*","explanation":"pkapshpkfhkphkfphf*"},{"question":"TEXT","a":"*","b":"*","c":"*","d":"*", "e":"*","a":"*","explanation":"*"}]
    const regex =
      /\[{"question":".*","a":".*","b":".*","c":".*","d":".*", "e":".*","correct":".*","explanation":".*"}(?:,{"question":".*","a":".*","b":".*","c":".*","d":".*", "e":".*","correct":".*","explanation":".*"})*]$/;
    return regex.test(str);
  },

  preTreatmentCompletion(str: string): string {
    return str;
  },

  completionJsonParser(completion: string): QuestionFromCompletionForm[] {
    return JSON.parse(completion);
  },
});

export { questionTemplatePromptMap };

export function getQuestionTemplate(
  opt: QuestionTemplatePromptEnum
): QuestionTemplatePromptInterface {
  return questionTemplatePromptMap.get(opt) as QuestionTemplatePromptInterface;
}
