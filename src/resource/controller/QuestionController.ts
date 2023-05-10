import { Request, Response } from "express";
import QuestionService from "../../service/impl/QuestionService";
import QuestionFactory from "../../domain/factory/QuestionFactory";
import QuestionView from "../view/QuestionView";
import QuestionForm from "../../domain/form/QuestionForm";
import QuestionAnswearForm from "../../domain/form/QuestionAnswearForm";
import QuestionAnswearFactory from "../../domain/factory/QuestionAnswearFactory";
import QuestionExplanationView from "../view/QuestionExplanationView";
import IQuestionService from "../../service/IQuestionService";

const service: IQuestionService = new QuestionService();

export default {
  async getAllBySubtopic(req: Request, res: Response) {
    const pageNumber = Number.parseInt(req.params.pageNumber);
    const subtopicId = Number.parseInt(req.params.subtopicId);
    let models = await service.findPageAllBySubtopic(subtopicId, pageNumber);
    if (models.length === 0) {
      models = await service.generateNewQuestions(subtopicId);
    }
    const views = models.map((item) => QuestionView.toView(item));
    return res.status(200).json(views);
  },

  async getAllByTopic(req: Request, res: Response) {
    const pageNumber = Number.parseInt(req.params.pageNumber);
    const topicId = Number.parseInt(req.params.topicId);
    const models = await service.findPageAllByTopic(topicId, pageNumber);
    const views = models.map((item) => QuestionView.toView(item));
    return res.status(200).json(views);
  },

  async getAll(req: Request, res: Response) {
    const pageNumber = Number.parseInt(req.params.pageNumber);
    const models = await service.findPageAll(pageNumber);
    const views = models.map((item) => QuestionView.toView(item));
    return res.status(200).json(views);
  },

  async get(req: Request, res: Response) {
    const id = Number.parseInt(req.params.id);
    const model = await service.find(id);
    if (!model) {
      return res.status(404).json({ message: "Not found question" });
    }
    const view = QuestionView.toView(model);
    return res.status(200).json(view);
  },

  async post(req: Request, res: Response) {
    const form: QuestionForm = req.body;
    form.userId = 1;
    const model = QuestionFactory.createByForm(form);
    const modelSaved = await service.insert(model);
    const view = QuestionView.toView(modelSaved);
    return res.status(201).json(view);
  },

  async postAnswear(req: Request, res: Response) {
    const form: QuestionAnswearForm = req.body;
    form.userId = 1;
    const model = await QuestionAnswearFactory.createByForm(form);
    const questionModel = await service.insertAnswear(model);
    if (!questionModel) {
      return res.status(404).json({ message: "Not found question" });
    }
    const view = QuestionExplanationView.toView(questionModel);
    return res.status(201).json(view);
  },
};
