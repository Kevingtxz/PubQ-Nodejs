import SubtopicForm from "../form/SubtopicForm";

export default class SubtopicValidator {
  static formValidation({ name, topicId, userId }: SubtopicForm): void {
    this.nameValidation(name);
    this.topicIdValidation(topicId);
    this.userIdValidation(userId);
  }

  static nameValidation(name: string) {
    if (name.length < 1) {
      throw new Error("Name cannot be empty");
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
}
