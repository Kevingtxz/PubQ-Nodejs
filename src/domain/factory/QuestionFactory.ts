import QuestionForm from "../form/QuestionForm";
import QuestionAIForm from "../form/question-ai/QuestionAIForm";
import QuestionModel from "../model/QuestionModel";
import QuestionValidator from "../validator/QuestionValidator";
import QuestionPromptFactory from "./QuestionPromptFactory";
import SubtopicFactory from "./SubtopicFactory";
import UserFactory from "./UserFactory";

export default class QuestionFactory {
  static createByAIForm(form: QuestionAIForm) {
    QuestionValidator.formAIValidation(form);
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
      promptId,
    } = form;
    const model = new QuestionModel();
    model.text = text;
    model.a = a;
    model.b = b;
    model.c = c;
    model.d = d;
    model.e = e;
    model.correct = QuestionValidator.correctStrValidation(correct);
    model.explanation = explanation;
    model.difficulty = difficulty;
    model.subtopic = SubtopicFactory.createWithId(subtopicId);
    model.questionPrompt = QuestionPromptFactory.createWithId(promptId);
    return model;
  }

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
      userId,
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
    model.user = UserFactory.createWithId(userId!);
    return model;
  }

  static createWithId(id: number) {
    const model = new QuestionModel();
    model.id = id;
    return model;
  }
}
