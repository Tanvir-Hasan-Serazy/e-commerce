import express from "express";
import { upload } from "../middlewares/upload.js";
import * as productCategoryController from "../controllers/productCategory.controller.js";
import { createCategorySchema } from "../schemas/productCategory.schema.js";
import { requireFile } from "../middlewares/requireFile.js";
import { validate } from "../middlewares/validateMiddleware.js";

const categoryRouter = express.Router();

categoryRouter.get("/", productCategoryController.getCategories);
categoryRouter.get("/:id", productCategoryController.getCategory);
categoryRouter.post(
  "/",
  upload.single("image"),
  requireFile("image"),
  validate(createCategorySchema),
  productCategoryController.createCategory,
);
categoryRouter.put(
  "/:id",
  upload.single("image"),
  validate(createCategorySchema),
  productCategoryController.updateCategory,
);
categoryRouter.delete("/:id", productCategoryController.deleteCategory);

export default categoryRouter;
