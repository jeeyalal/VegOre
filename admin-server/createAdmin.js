import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.log(err));

const adminSchema = new mongoose.Schema({
  email: String,
  password: String
});

const Admin = mongoose.model("Admin", adminSchema);

async function createAdmin() {
  const hashedPwd = await bcrypt.hash("admin123", 10);

  const admin = new Admin({
    email: "admin@vegore.com",
    password: hashedPwd
  });

  await admin.save();
  console.log("Admin created successfully!");
  mongoose.disconnect();
}

createAdmin();
