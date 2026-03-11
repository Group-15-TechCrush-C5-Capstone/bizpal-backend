import express from "express";
import {
  createNote,
  fetchUserNotes,
  updateNote,
  deleteNote
} from "../controllers/notes.controller.js";

const router = express.Router();

// Create a new note
router.post("/notes", createNote);

// Get all notes for a specific user
router.get("/notes", fetchUserNotes);

// Update a note (only if it belongs to the user)
router.put("/notes/:id", updateNote);

// Delete a note (only if it belongs to the user)
router.delete("/notes/:id", deleteNote);

export default router;