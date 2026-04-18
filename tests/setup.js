import app from "../src/app.js";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

beforeAll(async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/taskmanager-test");
    console.log("Test database connected");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
});

afterAll(async () => {
  try {
    await mongoose.disconnect();
    console.log("Test database disconnected");
  } catch (error) {
    console.error("Disconnect failed:", error);
  }
});