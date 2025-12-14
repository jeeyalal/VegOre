import jwt from "jsonwebtoken";

// Basic user auth middleware
export const authUser = (req, res, next) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ success: false, message: "Not Authorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

// Admin-only middleware
export const authAdmin = (req, res, next) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ success: false, message: "Not Authorized" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "admin") return res.status(403).json({ success: false, message: "Admin access only" });
    req.admin = decoded;
    next();
  } catch (error) {
    res.status(401).json({ success: false, message: "Invalid token" });
  }
};

// Optional auth: if token provided, validate and attach user, otherwise continue without error
export const optionalAuth = (req, res, next) => {
  try {
    const token = req.headers.token || req.headers.authorization?.split(' ')[1];
    if (!token) return next();
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    // ignore token errors; continue as guest
    next();
  }
};

export default { authUser, authAdmin };




