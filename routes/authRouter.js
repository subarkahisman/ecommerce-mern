import express from "express";
import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from "../controllers/authController.js";
import { protectedMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

// Endpoint
// POST /api/v1/auth/register
router.post("/register", registerUser);

// Endpoint
// POST /api/v1/auth/login
router.post("/login", loginUser);

// Endpoint
// GET /api/v1/auth/logout
router.get("/logout", protectedMiddleware, logoutUser);

// Endpoint
// GET /api/v1/auth/getuser
router.get("/getuser", protectedMiddleware, getCurrentUser);

export default router;
