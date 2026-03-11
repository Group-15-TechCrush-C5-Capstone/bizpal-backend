import db from "../config/db.js";

// Add a note for a customer
export const addNote = async (customerId, userId, note, followUpDate) => {
  const [result] = await db.query(
    `INSERT INTO notes (customer_id, user_id, note, follow_up_date) VALUES (?, ?, ?, ?)`,
    [customerId, userId, note, followUpDate]
  );

  return {
    id: result.insertId,
    customerId,
    userId,
    note,
    followUpDate,
  };
};

// Get all notes for a specific user
export const getUserNotes = async (userId) => {
  const [rows] = await db.query(
    `SELECT n.id, n.note, n.follow_up_date, n.created_at, 
            c.name AS customer_name
     FROM notes n
     JOIN customers c ON n.customer_id = c.id
     WHERE n.user_id = ?
     ORDER BY n.created_at DESC`,
    [userId]
  );

  return rows;
};