import Express from "express";
import * as productController from "../controller/product.controller.js";
import { createProductSchema } from "../schemas/productSchema.js";
import { validate } from "../middleware/validateMiddleware.js";
import { upload } from "../middleware/upload.js";
import { requireFile } from "../middleware/requireFile.js";

const product = Express.Router();
const products = Express.Router();

products.get("/", productController.getProducts);
product.get("/:id", productController.getProduct);

product.post(
  "/",
  upload.array("images", 5),
  requireFile("images"),
  validate(createProductSchema),
  productController.postProduct,
);

product.put(
  "/:id",
  upload.array("images", 5),
  validate(createProductSchema),
  productController.upldateProduct,
);

product.delete("/:id", productController.deleteProduct);

export { product, products };
