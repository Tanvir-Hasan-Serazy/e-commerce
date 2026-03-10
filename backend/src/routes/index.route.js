import express from "express";
import bannerRouter from "./home.route.js";
import categoryRouter from "./productCategory.route.js";
import productRouter from "./product.route.js";
import userRouter from "./user.route.js";

const rootRouter = express.Router();

rootRouter.use("/home-banner", bannerRouter);
rootRouter.use("/categories", categoryRouter);
rootRouter.use("/products", productRouter);
rootRouter.use("/users", userRouter);

export default rootRouter;
