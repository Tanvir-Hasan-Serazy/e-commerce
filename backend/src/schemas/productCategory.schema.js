import { z } from "zod";

export const createCategorySchema = z.object({
  name: z
    .string({ error: "Name is required" })
    .trim()
    .min(2, { error: "Name must be at least 2 characters" })
    .max(20, { error: "Name must be at most 50 characters" }),
});
