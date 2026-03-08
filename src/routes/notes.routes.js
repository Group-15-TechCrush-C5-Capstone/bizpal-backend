import express from "express"
import  { createNote, fetchCustomerNotes } from "../controllers/notes.controller.js"

const router = express.Router()

// creates a new note
router.post("/notes", createNote)

// fetch notes for a specific customer
router.get("/customers/:id/notes", fetchCustomerNotes)

export default router