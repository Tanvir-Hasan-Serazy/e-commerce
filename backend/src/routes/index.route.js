import express from "express";
import banner from "./home.route.js";
import categoryRouter from "./productCategory.route.js";
import productRouter from "./product.route.js";

const rootRouter = express.Router();

rootRouter.use("/home-banner", banner);
rootRouter.use("/categories", categoryRouter);
rootRouter.use("/products", productRouter);

export default rootRouter;
