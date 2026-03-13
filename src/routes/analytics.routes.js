import express from "express";
import { fetchAnalytics } from "../controllers/analytics.controller.js";

const router = express.Router();

router.get("/analytics", fetchAnalytics);

export default router;