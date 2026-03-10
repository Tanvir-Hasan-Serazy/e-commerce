import Express from "express";
import * as productController from "../controllers/product.controller.js";
import { createProductSchema } from "../schemas/productSchema.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { upload } from "../middlewares/upload.js";
import { requireFile } from "../middlewares/requireFile.js";

const productRouter = Express.Router();

productRouter.get("/", productController.getProducts);
productRouter.get("/:id", productController.getProduct);

productRouter.post(
  "/",
  upload.array("images", 5),
  requireFile("images"),
  validate(createProductSchema),
  productController.createProduct,
);

productRouter.put(
  "/:id",
  upload.array("images", 5),
  validate(createProductSchema),
  productController.upldateProduct,
);

productRouter.delete("/:id", productController.deleteProduct);

export default productRouter;
