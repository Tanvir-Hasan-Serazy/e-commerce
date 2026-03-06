import { ZodError } from "zod";

export const validate = (schema, source = "body") => {
  return async (req, res, next) => {
    try {
      const data =
        source === "query"
          ? req.query
          : source === "params"
            ? req.params
            : req.body;

      const validated = await schema.parseAsync(data);

      if (source === "query") {
        req.validatedQuery = validated;
      } else if (source === "params") {
        req.validatedParams = validated;
      } else {
        req.body = validated;
      }

      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          success: false,
          message: "Validation failed",
          errors: error.issues.map((issue) => ({
            path: issue.path.join("."),
            message: issue.message,
          })),
        });
      }

      return res.status(500).json({
        success: false,
        message: "Server error during validation",
      });
    }
  };
};
