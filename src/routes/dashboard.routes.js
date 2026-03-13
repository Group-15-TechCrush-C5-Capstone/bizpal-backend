import express from "express"
import { fetchDashboard } from "../controllers/dashboard.controller.js"

const router = express.Router()

router.get("/dashboard", fetchDashboard)

export default router