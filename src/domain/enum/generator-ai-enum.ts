export interface GeneratorAIInterface {
  cod: number;
  description: string;
  url: string;
  model?: string;
  messages?: string;
  role?: string;
  content?: string;
  maxTokens?: number;
  topP?: string;
  echo?: string;
  presence_penalty?: number;
  frequency_penalty?: number;
  logit_bias?: string;

  getAPIOpenAI(promptStr: string): Promise<string>;
}

export enum GeneratorAIEnum {
  GPT3 = 1,
}

const generatorAIMap = new Map<GeneratorAIEnum, GeneratorAIInterface>();
generatorAIMap.set(GeneratorAIEnum.GPT3, {
  cod: GeneratorAIEnum.GPT3,
  description: "GPT3D5_TURBO",
  url: "78agd8ga98h",

  async getAPIOpenAI(promptStr: string): Promise<string> {
    console.log(promptStr);
    // implement method
    return `["Limits","Derivatives","Integration","Differentiation Techniques","Applications of Derivatives","Optimization Problems","Related Rates","Curve Sketching","Area and Volume","Differential Equations"]`;
  },
});

export { generatorAIMap };

export function getGeneratorAI(opt: GeneratorAIEnum): GeneratorAIInterface {
  return generatorAIMap.get(opt) as GeneratorAIInterface;
}
