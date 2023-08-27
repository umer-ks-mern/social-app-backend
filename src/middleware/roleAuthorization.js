const roleAuth = (req, res, next) => {
  try {
    const role = req.user.role;
    console.log(role);
    if (!role || role !== "admin") {
      return res.status(401).json({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    if (error.name === "TokenExpired") {
      return res.status(401).json({ message: "Token Expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid Token" });
    } else {
      return res
        .status(500)
        .json({ message: "Internal server error and Unauthorized" });
    }
  }
};

export default roleAuth;
