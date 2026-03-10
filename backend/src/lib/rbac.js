export const requireRole = (userRole, allowedRoles) => {
  if (!allowedRoles.includes(userRole)) {
    throw new Error("Access denied: insuffiecent permission");
  }
};
