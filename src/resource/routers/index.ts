import { Router } from "express";
import userRouter from "./userRouter";
import topicRouter from "./topicRouter";

const router = Router();
router.use(userRouter);
router.use(topicRouter);

export default router;
