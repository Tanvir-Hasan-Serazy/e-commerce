import z from "zod";

export const userSchema = z.object({
  firstName: z.string().min(2, "First name should be at least 2 characters"),
  lastName: z.string().min(2, "Last name should be at least 2 characters"),
  email: z.email({ message: "Invalid email format" }),
  userName: z
    .string()
    .min(5, "Username/email must be at least 5 characters.")
    .max(20, "Bug title must be at most 20 characters."),
  dateOfBirth: z.string(),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters.")
    .max(32, "Password must be at most 32 characters."),
});
