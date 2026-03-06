export const requireFile = (fieldName = "image") => {
  return (req, res, next) => {
    if (!req.file) {
      return res
        .status(400)
        .json({ success: false, message: `${fieldName} file is required` });
    }
    next();
  };
};
