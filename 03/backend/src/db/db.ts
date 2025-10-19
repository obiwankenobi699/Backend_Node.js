import mongoose from "mongoose";
import { DB_NAME } from "../constants.ts"; // ensure correct path

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}` // ✅ actual URI
    );

    console.log(
      `\n✅ MongoDB connected! Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error("❌ MongoDB connection ERROR:", error);
    process.exit(1);
  }
};

export default connectDB;
