// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> axios.js

// ?
import axios from "axios";

// ?
export const axiosInstance = axios.create({
  baseURL: "http://localhost:5001/api",
  withCredentials: true,
});
