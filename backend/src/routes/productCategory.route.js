import express from "express";
import { upload } from "../middleware/upload.js";
import * as productCategoryController from "../controller/productCategory.controller.js";
import { createCategorySchema } from "../schemas/productCategory.schema.js";
import { requireFile } from "../middleware/requireFile.js";
import { validate } from "../middleware/validateMiddleware.js";

const categoryRouter = express.Router();

categoryRouter.get("/", productCategoryController.getCategories);
categoryRouter.get("/:id", productCategoryController.getCategory);
categoryRouter.post(
  "/",
  upload.single("image"),
  requireFile("image"),
  validate(createCategorySchema),
  productCategoryController.postCategory,
);
categoryRouter.put(
  "/:id",
  upload.single("image"),
  validate(createCategorySchema),
  productCategoryController.updateCategory,
);
categoryRouter.delete("/:id", productCategoryController.deleteCategory);

export default categoryRouter;
