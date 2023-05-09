import { Request, Response } from "express";
import service from "../../service/impl/QuestionService";
import QuestionFactory from "../../domain/factory/QuestionFactory";
import QuestionView from "../view/QuestionView";

export default {
  async getAllBySubtopic(req: Request, res: Response) {
    const pageNumber = Number.parseInt(req.params.pageNumber);
    const subtopicId = Number.parseInt(req.params.subtopicId);
    const models = await service.findPageAllBySubtopic(subtopicId, pageNumber);
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
    const model = QuestionFactory.createByForm(req.body);
    const modelSaved = await service.insert(model);
    const view = QuestionView.toView(modelSaved);
    return res.status(201).json(view);
  },
};
