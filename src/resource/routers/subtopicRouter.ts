import { Router } from "express";
import controller from "../controller/SubtopicController";
import { API_SUBTOPICS } from "../util/constants-util";

const subtopicRouter = Router();
subtopicRouter.get(`${API_SUBTOPICS}/topic=:topicId`, controller.getAllByTopic);
subtopicRouter.post(API_SUBTOPICS, controller.post);

export default subtopicRouter;
