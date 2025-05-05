import mongoose from "mongoose";

const connectDB = async () => {
  const mongoURI = process.env.MONGO_URI || "your-default-uri-here";
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};

export default connectDB;
