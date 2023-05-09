import { Request, Response } from "express";
import TopicFactory from "../../domain/factory/TopicFactory";
import TopicView from "../view/TopicView";
import TopicService from "../../service/impl/TopicService";
import TopicForm from "../../domain/form/TopicForm";
import TopicReportForm from "../../domain/form/TopicReportForm";
import TopicReportFactory from "../../domain/factory/TopicReportFactory";
import TopicReportService from "../../service/impl/TopicReportService";
import TopicReportView from "../view/TopicReportView";
import ITopicService from "../../service/ITopicService";
import ITopicReportService from "../../service/ITopicReportService";

const service: ITopicService = new TopicService();
const topicReportService: ITopicReportService = new TopicReportService();

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

  async postReport(req: Request, res: Response) {
    const id = Number.parseInt(req.params.id);
    const form: TopicReportForm = req.body;
    form.topicId = id;
    form.userId = 1;
    const model = TopicReportFactory.createByForm(form);
    const modelSaved = await topicReportService.insert(model);
    const view = TopicReportView.toView(modelSaved);
    return res.status(201).json(view);
  },
};
