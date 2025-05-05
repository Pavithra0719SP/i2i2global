import express from "express";
import connectDB from "./db";
import dotenv from "dotenv";
import userRoutes from "./models/user/userRoutes";
import noteRoutes from "./models/notes/noteRoutes";
import cors from "cors";


const app = express();
const PORT = 4000;
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);
app.use("/api", noteRoutes);


const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
