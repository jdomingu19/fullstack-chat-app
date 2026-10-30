// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> db.js

// ?
import mongoose from "mongoose";

// ?
export const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Successfully Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB Connection Error:", error);
  }
};
