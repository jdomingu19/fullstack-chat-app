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
import messageRoutes from "./routes/message.route.js";

// ?
import cors from "cors";

// ?
import { connectDatabase } from "./lib/db.js";

// ?
import cookieParser from "cookie-parser";

// ?
dotenv.config();

// ?
const app = express();

// ?
const PORT = process.env.PORT;

// ?
app.use(express.json());

// ?
app.use(cookieParser());

// ?
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

// ?
app.use("/api/auth", authRoutes);

// ?
app.use("/api/message", messageRoutes);

// ?
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/`);
  connectDatabase();
});
