import { Router } from "express";
import controller from "../controller/TopicController";
import { API_TOPICS } from "../util/constants-util";

const topicRouter = Router();
topicRouter.get(API_TOPICS, controller.getAll);
topicRouter.post(API_TOPICS, controller.post);

export default topicRouter;
