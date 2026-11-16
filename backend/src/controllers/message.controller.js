// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Backend -> message.controller.js

// ?
import User from "../models/user.model.js";

// ?
import Message from "../models/message.model.js";

// ?
import cloudinary from "../lib/cloudinary.js";

// ?
export const getUsersForSidebar = async (req, res) => {
  try {
    const loggedInUserID = req.user._id;
    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserID },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar controller.", error.message);
    return res.status(500).json({ message: "Internal Server Error." });
  }
};

// ?
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatID } = req.params;
    const myID = req.user._id;

    const messages = await Message.find({
      $or: [
        { senderID: myID, receiverID: userToChatID },
        { senderID: userToChatID, receiverID: myID },
      ],
    });

    res.status(200).json(messages);
  } catch (error) {
    console.error("Error in getMessages controller.", error.message);
    return res.status(500).json({ message: "Internal Server Error." });
  }
};

// ?
export const sendMessage = async (req, res) => {
  try {
    const { text, image } = req.body;
    const { id: receiverID } = req.params;
    const senderID = req.user._id;

    let imageURL;

    if (image) {
      // Upload base64 image to Cloudinary Service
      const uploadResponse = await cloudinary.uploader.upload(image);
      imageURL = uploadResponse.secure_url;
    }

    const newMessage = new Message({
      senderID,
      receiverID,
      text,
      image: imageURL,
    });

    await newMessage.save();

    // todo: realtime functionality goes here => socket.io

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("Error in sendMessage controller.", error.message);
    return res.status(500).json({ message: "Internal Server Error." });
  }
};
