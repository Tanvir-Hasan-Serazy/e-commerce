import express from "express";
import * as userController from "../controllers/user.controller.js";

const userRouter = express.Router();

userRouter.get("/", userController.getUsers);
userRouter.get("/:id", userController.getUser);
userRouter.post("/", userController.createUser);
userRouter.put("/", userController.updateUser);
userRouter.delete("/", userController.deleteUser);

export default userRouter;
