// import jwt from "jsonwebtoken";

// // Basic user auth middleware
// export const authUser = (req, res, next) => {
//   try {
//     const token = req.headers.token || req.headers.authorization?.split(" ")[1];
//     if (!token) return res.status(401).json({ success: false, message: "Not Authorized" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ success: false, message: "Invalid token" });
//   }
// };

// // Admin-only middleware
// export const authAdmin = (req, res, next) => {
//   try {
//     const token = req.headers.token || req.headers.authorization?.split(" ")[1];
//     if (!token) return res.status(401).json({ success: false, message: "Not Authorized" });

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     if (decoded.role !== "admin") return res.status(403).json({ success: false, message: "Admin access only" });
//     req.admin = decoded;
//     next();
//   } catch (error) {
//     res.status(401).json({ success: false, message: "Invalid token" });
//   }
// };

// // Optional auth: if token provided, validate and attach user, otherwise continue without error
// export const optionalAuth = (req, res, next) => {
//   try {
//     const token = req.headers.token || req.headers.authorization?.split(' ')[1];
//     if (!token) return next();
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     req.user = decoded;
//     next();
//   } catch (error) {
//     // ignore token errors; continue as guest
//     next();
//   }
// };

// export default { authUser, authAdmin };





import jwt from "jsonwebtoken";

const getToken = (req) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) return null;
  return header.split(" ")[1];
};

export const authAdmin = (req, res, next) => {
  try {
    const token = getToken(req);
    if (!token) {
      return res.status(401).json({ message: "No token" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin" && decoded.isAdmin !== true) {
      return res.status(403).json({ message: "Admin only" });
    }

    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
};
