import express from "express"

const router = express.Router()

router.post("/customers", () => {})
router.get("/customers", () => {})
router.get("/customers/:id", () => {})
router.put("/customers/:id", () => {})
router.delete("/customers/:id", () => {})

export default router