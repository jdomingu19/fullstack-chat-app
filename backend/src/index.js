// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> index.js

// ?
import express from "express";

// ?
import dotenv from "dotenv";

// ?
import authRoutes from "./routes/auth.route.js";

// ?
import { connectDatabase } from "./lib/db.js";

// ?
dotenv.config();

// ?
const app = express();

// ?
const PORT = process.env.PORT;

// ?
app.use(express.json());

// ?
app.use("/api/auth", authRoutes);

// ?
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
  connectDatabase();
});
