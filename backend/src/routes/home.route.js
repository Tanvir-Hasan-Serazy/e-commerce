import express from "express";
import * as homeBannerController from "../controllers/homeBanner.controller.js";
import { upload } from "../middlewares/upload.js";

const bannerRouter = express.Router();

// banner.post("/");
bannerRouter.get("/", homeBannerController.getBanner);
bannerRouter.post(
  "/",
  upload.single("image"),
  homeBannerController.createBanner,
);

export default bannerRouter;
