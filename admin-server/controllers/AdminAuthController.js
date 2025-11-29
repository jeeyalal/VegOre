import jwt from "jsonwebtoken";

export const adminLogin = (req, res) => {
  const { email, password } = req.body;

  if (
    email !== process.env.ADMIN_EMAIL ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { role: "admin" },
    process.env.ADMIN_SECRET,
    { expiresIn: "1d" }
  );

  res.json({
    success: true,
    token,
    message: "Login successful"
  });
};
res.cookie("adminToken", token, {
  httpOnly: true,
  secure: false,
  sameSite: "lax",
});
