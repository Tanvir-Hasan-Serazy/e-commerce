export const requireFile = (fieldName = "image") => {
  return (req, res, next) => {
    const files = req.files?.length ? req.files : req.file ? [req.file] : null;
    if (!files) {
      return res
        .status(400)
        .json({ success: false, message: `${fieldName} file is required` });
    }
    next();
  };
};
