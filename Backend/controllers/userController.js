



// import userModel from "../models/userModel.js";
// import jwt from "jsonwebtoken";
// import axios from "axios";

// const createToken = (id) => {
//   return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" });
// };

// const googleAuth = async (req, res) => {
//   const { credential } = req.body;

//   try {
//     const googleRes = await axios.get(
//       `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${credential}`
//     );

//     const { email, name, sub, picture } = googleRes.data;

//     console.log("Google Data:", { email, name, sub, picture });

//     let user = await userModel.findOne({ email });

//     if (!user) {
//       // Create new user with picture
//       user = await userModel.create({
//         name,
//         email,
//         googleId: sub,
//         picture,
//       });
//       console.log("New user created:", user);
//     } else {
//       // Update existing user's picture if it's missing or different
//       if (!user.picture || user.picture !== picture) {
//         user.picture = picture;
//         await user.save();
//         console.log("User picture updated:", user);
//       }
//     }

//     const token = createToken(user._id);

//     // Explicitly return user data with picture
//     const userData = {
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       picture: user.picture,
//       googleId: user.googleId
//     };

//     console.log("Sending user data:", userData);

//     res.json({ 
//       success: true, 
//       token, 
//       user: userData 
//     });

//   } catch (err) {
//     console.error("GOOGLE AUTH ERROR:", err.response?.data || err.message);
//     res.status(400).json({ 
//       success: false, 
//       message: "Google login failed",
//       error: err.message 
//     });
//   }
// };

// export { googleAuth };








import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import axios from "axios";
import bcrypt from "bcrypt";

// ============================
// ✅ TOKEN GENERATOR
// ============================
const createToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// ============================
// ✅ GOOGLE LOGIN (NORMAL USERS)
// ============================
const googleAuth = async (req, res) => {
  const { credential } = req.body;

  try {
    const googleRes = await axios.get(
      `https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${credential}`
    );

    const { email, name, sub, picture } = googleRes.data;

    let user = await userModel.findOne({ email });

    if (!user) {
      user = await userModel.create({
        name,
        email,
        googleId: sub,
        picture,
        role: "user",
      });
    } else {
      if (!user.picture || user.picture !== picture) {
        user.picture = picture;
        await user.save();
      }
    }

    const token = createToken(user._id, user.role);

    res.json({
      success: true,
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        picture: user.picture,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("GOOGLE AUTH ERROR:", err.message);
    res.status(400).json({
      success: false,
      message: "Google login failed",
    });
  }
};

// ============================
// ✅ ADMIN REGISTER (RUN ONCE)
// ============================
const registerAdmin = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "Admin already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await userModel.create({
      name,
      email,
      password: hashedPassword,
      role: "admin",
    });

    res.json({
      success: true,
      message: "Admin registered successfully",
      admin: {
        id: admin._id,
        email: admin.email,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// ============================
// ✅ ADMIN LOGIN
// ============================
const loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await userModel.findOne({ email, role: "admin" });
    if (!admin) {
      return res.json({ success: false, message: "Admin not found" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid password" });
    }

    const token = createToken(admin._id, admin.role);

    res.json({
      success: true,
      token,
      message: "Admin login successful",
      admin: {
        id: admin._id,
        email: admin.email,
        role: admin.role,
      },
    });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export { googleAuth, registerAdmin, loginAdmin };
