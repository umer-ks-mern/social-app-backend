import jwt from "jsonwebtoken";

const loginAuth = (req, res, next) => {
  try {
    let header = req.headers.authorization;
    if (!header) {
      return res.status(401).json({ message: "Authorization header missing" });
    }

    let token = header.replace("Bearer ", "");
    let decoded = jwt.decode(token);
    req.user = decoded.user;
    next();
  } catch (error) {
    if (error.name === "TokenExpired") {
      return res.status(401).json({ message: "Token expired" });
    } else if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid Token" });
    } else {
      return res.status(500).json({ message: "Internal server error" });
    }
  }
};

export default loginAuth;
