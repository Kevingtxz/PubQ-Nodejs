import { Router } from "express";
import controller from "../controller/QuestionController";
import { API_QUESTIONS_URL } from "../util/constants-util";

const questionRouter = Router();
questionRouter.get(
  `${API_QUESTIONS_URL}/subtopic/:subtopicId/page=:pageNumber`,
  controller.getAllBySubtopic
);
questionRouter.get(
  `${API_QUESTIONS_URL}/topic/:topicId/page=:pageNumber`,
  controller.getAllByTopic
);
questionRouter.get(`${API_QUESTIONS_URL}/page=:pageNumber`, controller.getAll);
questionRouter.get(`${API_QUESTIONS_URL}/:id`, controller.get);
questionRouter.post(API_QUESTIONS_URL, controller.post);
questionRouter.post(`${API_QUESTIONS_URL}/:id/answear`, controller.postAnswear);

export default questionRouter;
