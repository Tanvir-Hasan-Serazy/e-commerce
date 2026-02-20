import express from "express";
import banner from "./home.js";

const rootRouter = express.Router();

rootRouter.use("/home-banner", banner);

export default rootRouter;
