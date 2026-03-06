import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";
import { prisma } from "../prisma/client.js";

export const getCategory = async (req, res) => {
  try {
    const data = await prisma.category.findMany({
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching categories", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching categories" });
  }
};

export const postCategory = async (req, res) => {
  try {
    const { name } = req.body;

    // Image uploding to cloudinary
    const uploadResult = await uploadToCloudinary(req.file.buffer, {
      folder: "category",
    });

    // Saving to DB
    const category = await prisma.category.create({
      data: {
        name: name,
        imageURL: uploadResult.secure_url,
        cloudinaryPublicID: uploadResult.public_id,
      },
    });

    res.status(201).json({ success: true, message: "Category Created" });
  } catch (error) {
    console.error("Error creating category", error);
    res
      .status(500)
      .json({ success: false, message: "Error creating category" });
  }
};
