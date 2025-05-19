import express from "express";
import User from "../models/userModel.js";

const router = express.Router();

// Endpoint
// POST /api/v1/auth/register
router.post("/register", async (req, res) => {
  try {
    await User.create({ name: req.body.name });
  } catch (error) {
    res.json({ error });
  }
});

// Endpoint
// POST /api/v1/auth/login
router.post("/login", (req, res) => {
  res.send("Login ");
});

// Endpoint
// GET /api/v1/auth/logout
router.get("/logout", (req, res) => {
  res.send("Logout ");
});

// Endpoint
// GET /api/v1/auth/getuser
router.get("/getuser", (req, res) => {
  res.send("Get Current User ");
});

export default router;
