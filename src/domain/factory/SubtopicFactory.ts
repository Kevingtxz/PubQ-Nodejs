import SubtopicForm from "../form/SubtopicForm";
import SubtopicModel from "../model/SubtopicModel";
import SubtopicValidator from "../validator/SubtopicValidator";
import TopicFactory from "./TopicFactory";

export default class SubtopicFactory {
  static createByForm({ name, topicId }: SubtopicForm) {
    SubtopicValidator.formValidation({ name, topicId });

    const model = new SubtopicModel();
    model.name = name;
    model.topic = TopicFactory.createWithId(topicId);
    return model;
  }

  static createWithId(id: number) {
    const model = new SubtopicModel();
    model.id = id;
    return model;
  }
}
