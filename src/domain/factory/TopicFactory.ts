import TopicForm from "../form/TopicForm";
import TopicModel from "../model/TopicModel";
import TopicValidator from "../validator/TopicValidator";
import UserFactory from "./UserFactory";

export default class TopicFactory {
  static createByForm(form: TopicForm) {
    TopicValidator.formValidation(form);
    const { name, userId } = form;

    const model = new TopicModel();
    model.name = name;
    model.user = UserFactory.createWithId(userId!);
    return model;
  }

  static createWithId(id: number) {
    const model = new TopicModel();
    model.id = id;
    return model;
  }
}
