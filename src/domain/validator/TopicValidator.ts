import TopicForm from "../form/TopicForm";

export default class TopicValidator {
  static formValidation({ name }: TopicForm): void {
    this.nameValidation(name);
  }

  static nameValidation(name: string) {
    if (name.length < 1) {
      throw new Error("Name cannot be empty");
    }
  }
}
