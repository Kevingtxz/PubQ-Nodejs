import SubtopicForm from "../form/SubtopicForm";
import SubtopicAIForm from "../form/subtopic-ai/SubtopicAIForm";
import SubtopicModel from "../model/SubtopicModel";
import SubtopicValidator from "../validator/SubtopicValidator";
import SubtopicPromptFactory from "./SubtopicPromptFactory";
import TopicFactory from "./TopicFactory";
import UserFactory from "./UserFactory";

export default class SubtopicFactory {
  static createByAIForm(form: SubtopicAIForm) {
    const { name, topicId, promptId } = form;

    const model = new SubtopicModel();
    model.name = name;
    model.topic = TopicFactory.createWithId(topicId);
    model.subtopicPrompt = SubtopicPromptFactory.createWithId(promptId);
    return model;
  }

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
