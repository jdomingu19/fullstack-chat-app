// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> auth.controller.js

// ?
import { generateToken } from "../lib/utils.js";
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
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      fullName,
      email,
      password: hashedPassword,
    });

    if (newUser) {
      // Generated JWT Token
      generateToken(newUser._id, res);
      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ message: "Invalidad user data." });
    }
  } catch (error) {
    console.log("Error is signup controller.", error.message);
    return res.status(500).json({ message: "Internal Server Error." });
  }
};

// ?
export const login = (req, res) => {
  res.send("Login Route");
};

// ?
export const logout = (req, res) => {
  res.send("Logout Route");
};
