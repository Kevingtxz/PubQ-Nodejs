import QuestionForm from "../form/QuestionForm";
import QuestionModel from "../model/QuestionModel";
import QuestionValidator from "../validator/QuestionValidator";
import SubtopicFactory from "./SubtopicFactory";

export default class QuestionFactory {
  static createByForm(form: QuestionForm) {
    QuestionValidator.formValidation(form);
    const {
      text,
      a,
      b,
      c,
      d,
      e,
      correct,
      explanation,
      difficulty,
      subtopicId,
    } = form;

    const model = new QuestionModel();
    model.text = text;
    model.a = a;
    model.b = b;
    model.c = c;
    model.d = d;
    model.e = e;
    model.correct = correct;
    model.explanation = explanation;
    model.difficulty = difficulty;
    model.subtopic = SubtopicFactory.createWithId(subtopicId);
    return model;
  }

  static createWithId(id: number) {
    const model = new QuestionModel();
    model.id = id;
    return model;
  }
}
