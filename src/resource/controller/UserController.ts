import { NextFunction, Request, Response } from "express";
import UserFactory from "../../domain/factory/UserFactory";
import UserView from "../view/UserView";
import service from "../../service/impl/UserService";

export default {
  async get(req: Request, res: Response, next: NextFunction) {
    const id = Number.parseInt(req.params.id);
    const model = await service.find(id);
    if (!model) {
      return res.status(404).json("User not found");
    }
    const view = UserView.toView(model);
    return res.status(200).json(view);
  },

  async post(req: Request, res: Response) {
    const model = UserFactory.createByForm(req.body);
    const modelSaved = await service.insert(model);
    const view = UserView.toView(modelSaved);
    return res.status(201).json(view);
  },
};
