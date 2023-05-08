import { Router } from "express";
import controller from "../controller/UserController";
import { API_USERS_URL } from "../util/constants-util";

const userRouter = Router();
userRouter.get(`${API_USERS_URL}/:id`, controller.get);
userRouter.post(API_USERS_URL, controller.post);

export default userRouter;
