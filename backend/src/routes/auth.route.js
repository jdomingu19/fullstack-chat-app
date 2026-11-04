// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> auth.route.js

// ?
import express from "express";
import {
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

// ?
const router = express.Router();

// ?
router.post("/signup", signup);

// ?
router.post("/login", login);

// ?
router.post("/logout", logout);

// ?
router.put("/update-profile", protectRoute, updateProfile);

// ?
export default router;
