import db from "../config/db.js"

// Add a note for a customer
export const addNote = async (customerId, userId, note, followUpDate) => {
  const query = `
    INSERT INTO notes (customer_id, user_id, note, follow_up_date)
    VALUES ($1, $2, $3, $4)
    RETURNING *  -- returns the inserted row
  `
  

  const { rows } = await db.query(query, [customerId, userId, note, followUpDate])
  
  return rows[0]
};

// Get all notes for a specific customer
export const getCustomerNotes = async (customerId) => {
  const query = `
    SELECT * FROM notes
    WHERE customer_id = $1
    ORDER BY created_at DESC  -- latest notes first
  `
  
  const { rows } = await db.query(query, [customerId])
  return rows
}