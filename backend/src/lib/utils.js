// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> utils.js

// ?
import jwt from "jsonwebtoken";

// ?
export const generateToken = (userID, res) => {
  const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7d -> ms
    httpOnly: true, // XSS (cross-site scripting) attacks
    sameSite: "strict", // CSRF (cross-site request forgery) attacks
    secure: process.env.NODE_ENV !== "development",
  });

  return token;
};
