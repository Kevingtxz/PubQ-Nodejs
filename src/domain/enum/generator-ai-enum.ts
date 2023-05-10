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
    // return `["Limits","Derivatives","Integration","Differentiation Techniques","Applications of Derivatives","Optimization Problems","Related Rates","Curve Sketching","Area and Volume","Differential Equations"]`;
    return `[{"text":"What is a Thread in Java?","a":"A part of a computer program that can run concurrently with other parts of the same program","b":"A type of data structure used to store multiple elements of the same type","c":"A method used to convert a primitive type to a reference type","d":"A programming language used to write Java programs", "e":"None of the above","correct":"a","explanation":"A Thread in Java is a part of a computer program that can run concurrently with other parts of the same program."},{"text":"What is the main advantage of using Threads in Java?","a":"Threads allow a program to utilize multiple processors","b":"Threads make it easier to write code in Java","c":"Threads allow a program to perform multiple tasks simultaneously","d":"Threads can be used to store data", "e":"None of the above","correct":"c","explanation":"The main advantage of using Threads in Java is that they allow a program to perform multiple tasks simultaneously."}]`;
  },
});

export { generatorAIMap };

export function getGeneratorAI(opt: GeneratorAIEnum): GeneratorAIInterface {
  return generatorAIMap.get(opt) as GeneratorAIInterface;
}
