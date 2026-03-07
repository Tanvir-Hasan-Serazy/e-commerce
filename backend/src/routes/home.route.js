import express from "express";
import * as homeBannerController from "../controller/homeBanner.controller.js";
import { upload } from "../middleware/upload.js";

const banner = express.Router();

// banner.post("/");
banner.get("/", homeBannerController.getBanner);
banner.post("/", upload.single("image"), homeBannerController.postBanner);

export default banner;
