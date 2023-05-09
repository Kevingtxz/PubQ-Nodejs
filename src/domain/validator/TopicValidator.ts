import TopicForm from "../form/TopicForm";

export default class TopicValidator {
  static formValidation({ name, userId }: TopicForm): void {
    this.nameValidation(name);
    this.userIdValidation(userId);
  }

  static nameValidation(name: string) {
    if (name.length < 1) {
      throw new Error("Name cannot be empty");
    }
  }

  static userIdValidation(userId?: number) {
    if (!userId || userId < 1) {
      throw new Error("UserId is not valid");
    }
  }
}
