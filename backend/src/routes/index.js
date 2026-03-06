import express from "express";
import banner from "./home.js";
import category from "./productCategory.js";
import { product, products } from "./product.js";

const rootRouter = express.Router();

rootRouter.use("/home-banner", banner);
rootRouter.use("/category", category);
rootRouter.use("/product", product);
rootRouter.use("/products", products);

export default rootRouter;
