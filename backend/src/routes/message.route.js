// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> message.route.js

// ?
import express from "express";

// ?
import { protectRoute } from "../middleware/auth.middleware.js";

// ?
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

// ?
const router = express.Router();

// ?
router.put("/users", protectRoute, getUsersForSidebar);

// ?
router.put("/:id", protectRoute, getMessages);

// ?
router.put("/send/:id", protectRoute, sendMessage);

// ?
export default router;
