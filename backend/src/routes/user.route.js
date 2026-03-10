import express from "express";
import * as userController from "../controllers/user.controller.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { userSchema } from "../schemas/user.schema.js";

const userRouter = express.Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/", validate(userSchema), userController.createUser);
userRouter.put("/:id", validate(userSchema), userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

export default userRouter;
