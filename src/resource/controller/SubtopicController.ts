import { Request, Response } from "express";
import service from "../../service/impl/SubtopicService";
import SubtopicFactory from "../../domain/factory/SubtopicFactory";
import SubtopicView from "../view/SubtopicView";

export default {
  async getAllByTopic(req: Request, res: Response) {
    const topicId = Number.parseInt(req.params.topicId);
    const models = await service.findAllByTopicId(topicId);
    const views = models.map((item) => SubtopicView.toView(item));
    return res.status(200).json(views);
  },

  async post(req: Request, res: Response) {
    const model = SubtopicFactory.createByForm(req.body);
    const modelSaved = await service.insert(model);
    const view = SubtopicView.toView(modelSaved);
    return res.status(201).json(view);
  },
};