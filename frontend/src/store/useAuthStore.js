// Full-Stack Chat App @jdomingu19
// Web Development Bootcamp @burakorkmez
// Frontend -> useAuthStore.js

// ?
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

// ?
export const useAuthStore = create((set) => ({
  authUser: null,

  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,

  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");

      set({ authUser: res.data });
    } catch (error) {
      console.error("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },
}));
