import { prisma } from "../prisma/client.js";
import {
  deleteFromCloudinary,
  uploadToCloudinary,
} from "../utils/cloudinaryUpload.js";

export const getProducts = async (req, res) => {
  try {
    const {
      search,
      categoryId,
      brand,
      minPrice,
      maxPrice,
      sortBy = "CreatedAt",
      sortOrder = "desc",
    } = req.query;

    // Filtering
    const where = {
      ...(search && {
        OR: [
          { name: { contains: search, mode: "insensitive" } },
          { description: { contains: search, mode: "insensitive" } },
        ],
      }),
      ...(categoryId && { categoryId: Number(categoryId) }),
      ...(brand && { brand: { equals: brand, mode: "insensitive" } }),
      ...((minPrice || maxPrice) && {
        salePrice: {
          ...(minPrice && { gte: Number(minPrice) }),
          ...(maxPrice && { lte: Number(maxPrice) }),
        },
      }),
    };

    // Sortable fields
    const allowedSortFields = [
      "createdAt",
      "salePrice",
      "originalPrice",
      "name",
      "stock",
    ];

    const safeSortBy = allowedSortFields.includes(sortBy)
      ? sortBy
      : "createdAt";

    const safeSortOrder = sortOrder === "asc" ? "asc" : "desc";

    const data = await prisma.product.findMany({
      where: where,
      orderBy: [{ [safeSortBy]: safeSortOrder }],
    });

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res
      .status(500)
      .json({ success: false, message: "Failed to fetch products" });
  }
};

export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "product not found" });
    }

    res.status(200).json({ success: true, data: product });
  } catch (error) {
    console.error("Error deleting product", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to fetch product" });
  }
};

export const postProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      stock,
      originalPrice,
      salePrice,
      categoryId,
      category,
      brand,
      warranty,
    } = req.body;

    // Upload to cloudinary
    const uploadResults = await Promise.all(
      req.files.map((file) =>
        uploadToCloudinary(file.buffer, {
          folder: "/products",
        }),
      ),
    );

    const imageURLs = uploadResults.map((r) => r.secure_url);
    const publicIds = uploadResults.map((r) => r.public_id).join(",");

    const product = await prisma.product.create({
      data: {
        name: name,
        description: description,
        stock: stock,
        originalPrice: originalPrice,
        salePrice: salePrice,
        category: category,
        categoryId: categoryId,
        brand: brand,
        warranty: warranty,
        imageURL: imageURLs,
        cloudinaryPublicId: publicIds,
      },
    });

    res
      .status(201)
      .json({ success: true, message: "Product created successfully" });
  } catch (error) {
    console.error("Error creating product", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to create products" });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "product not found" });
    }

    // Deleting image from cloudinary
    if (product.cloudinaryPublicId) {
      await deleteFromCloudinary(product.cloudinaryPublicId);
    }

    await prisma.product.delete({
      where: { id: Number(id) },
    });
    res.status(200).json({
      success: true,
      message: " Product deleted successfully ",
    });
  } catch (error) {
    console.error("Error deleting product", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to delete product" });
  }
};

export const upldateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      description,
      stock,
      originalPrice,
      salePrice,
      categoryId,
      category,
      brand,
      warranty,
    } = req.body;

    // Check if exist
    const product = await prisma.product.findUnique({
      where: { id: Number(id) },
    });

    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    // If new image is uploaded

    let imageURLs = product.imageURL;
    let publicIds = product.cloudinaryPublicId;

    if (req.files?.length) {
      if (product.cloudinaryPublicId) {
        await deleteFromCloudinary(product.cloudinaryPublicId);
      }
      // Upload new image
      const uploadResults = await Promise.all(
        req.files.map((file) =>
          uploadToCloudinary(file.buffer, { folder: "/products" }),
        ),
      );

      imageURLs = uploadResults.map((r) => r.secure_url);
      publicIds = uploadResults.map((r) => r.public_id).join(",");
    }
    const updateProduct = await prisma.product.update({
      where: { id: Number(id) },
      data: {
        name: name,
        description: description,
        stock: stock,
        originalPrice: originalPrice,
        salePrice: salePrice,
        categoryId: categoryId,
        category: category,
        brand: brand,
        warranty: warranty,
        imageURL: imageURLs,
        cloudinaryPublicId: publicIds,
      },
    });

    res
      .status(200)
      .json({ success: true, message: "Product updated successfully" });
  } catch (error) {
    console.error("Error updating products");
    res
      .status(500)
      .json({ success: false, message: "Failed to update product" });
  }
};
