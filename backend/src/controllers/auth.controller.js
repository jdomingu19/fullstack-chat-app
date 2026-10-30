// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> auth.controller.js

// ?
import User from "../models/user.model.js";

// ?
import bcrypt from "bcryptjs";

// ?
export const signup = async (req, res) => {
  const { fullName, email, password } = req.body;
  try {
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password must be be at least 6 characters." });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "Email already exists." });
    }

    const salt = await bcrypt.genSalt(10);
  } catch (error) {}
};

// ?
export const login = (req, res) => {
  res.send("Login Route");
};

// ?
export const logout = (req, res) => {
  res.send("Logout Route");
};
