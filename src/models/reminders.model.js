import db from "../config/db.js";

// Get all reminders for a user
export const getUserReminders = async (userId) => {
  const [rows] = await db.query(
    `SELECT r.id, r.due_date, r.status, r.completed_at, n.note, c.name AS customer_name
     FROM reminders r
     JOIN notes n ON r.note_id = n.id
     JOIN customers c ON r.customer_id = c.id
     WHERE r.user_id = ?
     ORDER BY r.due_date ASC`,
    [userId]
  );
  return rows;
};

// Mark a reminder as completed
export const completeReminder = async (reminderId, userId) => {
  const [result] = await db.query(
    `UPDATE reminders
     SET status = 'completed', completed_at = NOW()
     WHERE id = ? AND user_id = ?`,
    [reminderId, userId]
  );
  return result.affectedRows;
};

// Get overdue reminders
export const getOverdueReminders = async (userId) => {
  const [rows] = await db.query(
    `SELECT r.id, r.due_date, r.status, r.completed_at, n.note, c.name AS customer_name
     FROM reminders r
     JOIN notes n ON r.note_id = n.id
     JOIN customers c ON r.customer_id = c.id
     WHERE r.user_id = ? AND r.status != 'completed' AND r.due_date < CURDATE()
     ORDER BY r.due_date ASC`,
    [userId]
  );
  return rows;
};