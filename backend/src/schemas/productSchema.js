import { z } from "zod";

export const createProductSchema = z.object({
  name: z
    .string({ error: "Product Name is required" })
    .min(2, { error: "Name must be at least 2 characters" })
    .max(20, { error: "Name must be at most 20 characters" }),
  description: z
    .string({ error: "Description is required" })
    .min(2, { error: "Description must be at least 2 characters" })
    .max(200, { error: "Description must be at most 200 characters" }),
  stock: z.coerce
    .number({ error: "Stock is required" })
    .min(0, { error: "Stock must be at least 0" })
    .max(1000, { error: "Stock must be at most 100" }),
  originalPrice: z.coerce
    .number({ error: "Original Price is required" })
    .min(0, { error: "Original Price must be at least 0" }),
  salePrice: z.coerce
    .number({ error: "Sale Price is required" })
    .min(0, { error: "Sale Price must be at least 0" }),
  categoryId: z.coerce
    .number({ error: "Category ID is required" })
    .int({ error: "Category ID must be an integer" })
    .min(1, { error: "Category ID must be at least 1" }),
  brand: z
    .string({ error: "Brand is required" })
    .min(2, { error: "Brand must be at least 2 characters" })
    .max(20, { error: "Brand must be at most 20 characters" }),
  warranty: z
    .string({ error: "Warranty is required" })
    .min(2, { error: "Warranty must be at least 2 characters" })
    .max(100, { error: "Warranty must be at most 100 characters" }),
});
