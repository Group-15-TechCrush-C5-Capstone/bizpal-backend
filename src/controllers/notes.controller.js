import { addNote, getUserNotes } from "../models/notes.model.js";
import db from "../config/db.js"; // needed for PUT and DELETE queries

// POST /api/notes — Create a new note
export const createNote = async (req, res) => {
  try {
    const { customerId, userId, note, followUpDate } = req.body;

    if (!customerId || !userId || !note) {
      return res
        .status(400)
        .json({ error: "customerId, userId, and note are required" });
    }

    const newNote = await addNote(customerId, userId, note, followUpDate);

    // Optional: trigger automatic follow-up reminder here

    res.status(201).json({
      message: "Note added successfully",
      data: newNote,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /api/notes — Fetch all notes for a given user
export const fetchUserNotes = async (req, res) => {
  try {
    const userId = req.query.userId; // pass ?userId=1 in GET request

    if (!userId) {
      return res.status(400).json({ error: "userId is required as query parameter" });
    }

    const notes = await getUserNotes(userId);

    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /api/notes/:id — Update a note
export const updateNote = async (req, res) => {
  try {
    const { id } = req.params; // note id
    const { userId, note, followUpDate } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    if (!note && !followUpDate) {
      return res.status(400).json({ error: "Provide note or followUpDate to update" });
    }

    // Build dynamic update query
    const updates = [];
    const params = [];

    if (note) {
      updates.push("note = ?");
      params.push(note);
    }
    if (followUpDate) {
      updates.push("follow_up_date = ?");
      params.push(followUpDate);
    }

    params.push(id, userId); // WHERE id=? AND user_id=?

    const [result] = await db.query(
      `UPDATE notes SET ${updates.join(", ")} WHERE id = ? AND user_id = ?`,
      params
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Note not found or you don't have permission" });
    }

    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE /api/notes/:id — Delete a note
export const deleteNote = async (req, res) => {
  try {
    const { id } = req.params; // note id
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ error: "userId is required" });
    }

    const [result] = await db.query(
      `DELETE FROM notes WHERE id = ? AND user_id = ?`,
      [id, userId]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Note not found or you don't have permission" });
    }

    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};