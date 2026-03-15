import express from "express";
import { forgotPassword, login, profile, register, resetPassword } from "../controllers/auth.controller.js";
import { protect } from "../middleware/auth.middleware.js";

const router = express.Router()

// POST auth/register
router.post("/register", register);

// POST auth/login
router.post("/login", login);

// POST auth/forgot-password
router.post("/forgot-password", forgotPassword)

// POST auth/rest-password/:token
router.post("/reset-password/:token", resetPassword)

// PROTECTED ROUTES

// GET auth/profile - protected.example
router.get("/profile", protect, profile)



export default router;
