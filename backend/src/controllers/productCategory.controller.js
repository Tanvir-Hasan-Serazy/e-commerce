import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from "../utils/cloudinaryUpload.js";
import { prisma } from "../prisma/client.js";

export const getCategories = async (req, res) => {
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

export const getCategory = async (req, res) => {
  const { id } = req.params;

  try {
    const category = await prisma.category.findUnique({
      where: { id: Number(id) },
    });

    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category is not found" });
    }

    res.status(200).json({ success: true, data: category });
  } catch (error) {
    console.error("Error fetching category");
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch category" });
  }
};

export const createCategory = async (req, res) => {
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
        cloudinaryPublicId: uploadResult.public_id,
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

export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const { name } = req.body;

    const category = await prisma.category.findUnique({
      where: { id: Number(id) },
    });

    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }
    let imageURL = category.imageURL;
    let publicId = category.cloudinaryPublicId;

    // Delete previous image
    if (req?.file) {
      if (category.cloudinaryPublicId) {
        await deleteFromCloudinary(category.cloudinaryPublicId);
      }
      const uploadResult = await uploadToCloudinary(req.file.buffer, {
        folder: "category",
      });

      imageURL = uploadResult.secure_url;
      publicId = uploadResult.public_id;
    }

    const updateProductCategory = await prisma.category.update({
      where: { id: Number(id) },
      data: {
        name: name,
        imageURL: imageURL,
        cloudinaryPublicId: publicId,
      },
    });

    res
      .status(201)
      .json({ success: true, message: "Category successfully updated" });
  } catch (error) {
    console.error("Error updating category", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to update category" });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    const category = await prisma.category.findUnique({
      where: { id: Number(id) },
    });

    if (!category) {
      return res
        .status(404)
        .json({ success: false, message: "Category not found" });
    }

    // Deleting Image
    if (category.cloudinaryPublicId) {
      deleteFromCloudinary(category.cloudinaryPublicId);
    }

    await prisma.category.delete({
      where: { id: Number(id) },
    });

    res
      .status(200)
      .json({ success: true, message: "Category deleted successfully" });
  } catch (error) {
    console.error("Error deleting categories");
    res
      .status(500)
      .json({ success: false, message: "Failed to delete category" });
  }
};
