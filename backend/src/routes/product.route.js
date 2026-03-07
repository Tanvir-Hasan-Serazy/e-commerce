import Express from "express";
import * as productController from "../controller/product.controller.js";
import { createProductSchema } from "../schemas/productSchema.js";
import { validate } from "../middleware/validateMiddleware.js";
import { upload } from "../middleware/upload.js";
import { requireFile } from "../middleware/requireFile.js";

const productRouter = Express.Router();

productRouter.get("/", productController.getProducts);
productRouter.get("/:id", productController.getProduct);

productRouter.post(
  "/",
  upload.array("images", 5),
  requireFile("images"),
  validate(createProductSchema),
  productController.postProduct,
);

productRouter.put(
  "/:id",
  upload.array("images", 5),
  validate(createProductSchema),
  productController.upldateProduct,
);

productRouter.delete("/:id", productController.deleteProduct);

export default productRouter;
