import SubtopicForm from "../form/SubtopicForm";
import SubtopicAIForm from "../form/subtopic-ai/SubtopicAIForm";

export default class SubtopicValidator {
  static formIAValidation({ name, topicId, promptId }: SubtopicAIForm) {
    this.nameValidation(name);
    this.topicIdValidation(topicId);
    this.promptIdValidation(promptId);
  }

  static formValidation({ name, topicId, userId }: SubtopicForm): void {
    this.nameValidation(name);
    this.topicIdValidation(topicId);
    this.userIdValidation(userId);
  }

  static nameValidation(name: string) {
    if (name.length < 1) {
      throw new Error("Name is not valid");
    }
  }

  static topicIdValidation(topicId: number) {
    if (topicId < 1) {
      throw new Error("TopicId is not valid");
    }
  }

  static userIdValidation(userId?: number) {
    if (!userId || userId < 1) {
      throw new Error("UserId is not valid");
    }
  }

  static promptIdValidation(promptId: number) {
    if (promptId < 1) {
      throw new Error("PromptId is not valid");
    }
  }
}
