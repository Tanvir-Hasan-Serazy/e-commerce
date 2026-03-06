import express from "express";
import banner from "./home.js";
import category from "./productCategory.js";

const rootRouter = express.Router();

rootRouter.use("/home-banner", banner);
rootRouter.use("/category", category);
export default rootRouter;
