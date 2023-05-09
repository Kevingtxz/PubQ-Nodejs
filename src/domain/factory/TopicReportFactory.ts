import TopicReportForm from "../form/TopicReportForm";
import TopicReportModel from "../model/TopicReportModel";
import TopicReportValidator from "../validator/TopicReportValidator";
import TopicFactory from "./TopicFactory";
import UserFactory from "./UserFactory";

export default class TopicReportFactory {
  static createByForm(form: TopicReportForm) {
    TopicReportValidator.formValidation(form);
    const { text, topicId, userId } = form;

    const model = new TopicReportModel();
    model.text = text;
    model.topic = TopicFactory.createWithId(topicId);
    model.user = UserFactory.createWithId(userId!);
    return model;
  }

  static createWithId(id: number) {
    const model = new TopicReportModel();
    model.id = id;
    return model;
  }
}
