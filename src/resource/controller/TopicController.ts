import { Request, Response } from "express";
import TopicFactory from "../../domain/factory/TopicFactory";
import TopicView from "../view/TopicView";
import service from "../../service/impl/TopicService";
import TopicForm from "../../domain/form/TopicForm";

export default {
  async getAll(req: Request, res: Response) {
    const models = await service.findAll();
    const views = models.map((item) => TopicView.toView(item));
    return res.status(200).json(views);
  },

  async post(req: Request, res: Response) {
    const form: TopicForm = req.body;
    form.userId = 1;
    const model = TopicFactory.createByForm(form);
    const modelSaved = await service.insert(model);
    const view = TopicView.toView(modelSaved);
    return res.status(201).json(view);
  },
};
