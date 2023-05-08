import TopicForm from "../form/TopicForm";
import TopicModel from "../model/TopicModel";
import TopicValidator from "../validator/TopicValidator";

export default class TopicFactory {
  static createByForm({ name }: TopicForm) {
    TopicValidator.formValidation({ name });

    const model = new TopicModel();
    model.name = name;
    return model;
  }

  static createWithId(id: number) {
    const model = new TopicModel();
    model.id = id;
    return model;
  }
}
