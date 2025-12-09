// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ MongoDB Connected Successfully");
//   } catch (error) {
//     console.log("❌ MongoDB Connection Error:", error.message);
//     process.exit(1);
//   }
// };

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("DEBUG MONGO_URI =>", process.env.MONGO_URI); // ✅ must print your URI

    await mongoose.connect(process.env.MONGO_URI);

    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.log("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};
