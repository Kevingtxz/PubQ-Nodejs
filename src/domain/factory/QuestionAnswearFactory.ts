import QuestionAnswearForm from "../form/QuestionAnswearForm";
import QuestionAnswearModel from "../model/QuestionAnswearModel";
import QuestionAnswearValidator from "../validator/QuestionAnswearValidator";
import QuestionFactory from "./QuestionFactory";
import UserFactory from "./UserFactory";

export default class QuestionAnswearFactory {
  static createByForm(form: QuestionAnswearForm) {
    QuestionAnswearValidator.formValidation(form);
    const { answear, questionId, userId } = form;

    const model = new QuestionAnswearModel();
    model.answear = answear;
    model.question = QuestionFactory.createWithId(questionId);
    model.user = UserFactory.createWithId(userId!);
    return model;
  }

  static createWithId(id: number) {
    const model = new QuestionAnswearModel();
    model.id = id;
    return model;
  }
}
