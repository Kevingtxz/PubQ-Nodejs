import { Router } from "express";
import userRouter from "./userRouter";
import topicRouter from "./topicRouter";
import subtopicRouter from "./subtopicRouter";

const router = Router();
router.use(userRouter);
router.use(topicRouter);
router.use(subtopicRouter);

export default router;
