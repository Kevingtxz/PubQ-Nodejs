import SubtopicForm from "../form/SubtopicForm";
import SubtopicModel from "../model/SubtopicModel";
import SubtopicValidator from "../validator/SubtopicValidator";
import TopicFactory from "./TopicFactory";
import UserFactory from "./UserFactory";

export default class SubtopicFactory {
  static createByForm(form: SubtopicForm) {
    SubtopicValidator.formValidation(form);
    const { name, topicId, userId } = form;

    const model = new SubtopicModel();
    model.name = name;
    model.topic = TopicFactory.createWithId(topicId);
    model.user = UserFactory.createWithId(userId!);
    return model;
  }

  static createWithId(id: number) {
    const model = new SubtopicModel();
    model.id = id;
    return model;
  }
}
