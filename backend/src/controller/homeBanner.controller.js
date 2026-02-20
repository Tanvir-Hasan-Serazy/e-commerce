import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";
import { prisma } from "../prisma/client.js";

export const getBanner = async (req, res) => {
  try {
    const data = await prisma.homeBanner.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json({ success: true, data });
  } catch (error) {}
};

export const postBanner = async (req, res) => {
  try {
    const { title, subtitle } = req.body;

    // Image Uploding to Cloudinary
    const uploadResult = await uploadToCloudinary(req.file.buffer);

    // Saving to DB
    const banners = await prisma.homeBanner.create({
      data: {
        title: title,
        subtitle: subtitle,
        imageURL: uploadResult?.secure_url,
        cloudinaryPublicId: uploadResult?.public_id,
      },
    });

    res.status(201).json({ success: true, message: "Home Banner Created" });
  } catch (error) {
    console.error(error, "Error Creating Home Banner");
    res.status(500).json(error, { error: "Failed to create Home Banner" });
  }
};
export const putBanner = async (req, res) => {};
