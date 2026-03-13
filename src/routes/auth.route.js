import express from "express";
import { forgotPassword, login, profile, register, resetPassword } from "../controllers/auth.controller.js";

const router = express.Router()

// POST auth/register
router.post("/register", register);

// POST auth/login
router.post("/login", login);

// GET auth/profile
router.get("/profile", profile);

// POST auth/forgot-password
router.post("/forgot-password", forgotPassword)

// POST auth/rest-password/:token
router.post("/reset-password/:token", resetPassword)

export default router;
