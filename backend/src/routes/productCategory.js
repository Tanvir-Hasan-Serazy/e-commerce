import express from "express";
import { upload } from "../middleware/upload.js";
import * as productCategoryController from "../controller/productCategory.controller.js";
import { createCategorySchema } from "../schemas/productCategory.schema.js";
import { requireFile } from "../middleware/requireFile.js";
import { validate } from "../middleware/validateMiddleware.js";

const category = express.Router();

category.get("/", productCategoryController.getCategory);
category.post(
  "/",
  upload.single("image"),
  requireFile("image"),
  productCategoryController.postCategory,
  validate(createCategorySchema),
);

export default category;
