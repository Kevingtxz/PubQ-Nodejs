import { Router } from "express";
import userRouter from "./userRouter";
import topicRouter from "./topicRouter";
import subtopicRouter from "./subtopicRouter";
import questionRouter from "./questionRouter";

const router = Router();
router.use(userRouter);
router.use(topicRouter);
router.use(subtopicRouter);
router.use(questionRouter);

export default router;
