import express from "express";

const router = express.Router();

// Endpoint
// POST /api/v1/auth/register
router.post("/register", (req, res) => {
  res.send("Register ");
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
