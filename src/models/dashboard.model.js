import db from "../config/db.js"

export const getDashboardData = async () => {

  const [customers] = await db.query(`
    SELECT COUNT(*) AS totalCustomers
    FROM customers
  `)

  const [notes] = await db.query(`
    SELECT COUNT(*) AS totalNotes
    FROM notes
  `)

  const [pending] = await db.query(`
    SELECT COUNT(*) AS pendingFollowUps
    FROM reminders
    WHERE status = 'pending'
  `)

  const [completed] = await db.query(`
    SELECT COUNT(*) AS completedFollowUps
    FROM reminders
    WHERE status = 'completed'
  `)

  const [recentActivity] = await db.query(`
    SELECT
      notes.id,
      notes.note,
      notes.created_at,
      customers.name AS customer_name
    FROM notes
    JOIN customers ON notes.customer_id = customers.id
    ORDER BY notes.created_at DESC
    LIMIT 5
  `)

  const [upcomingFollowUps] = await db.query(`
    SELECT
      reminders.id,
      reminders.due_date,
      notes.note,
      customers.name AS customer_name
    FROM reminders
    JOIN notes ON reminders.note_id = notes.id
    JOIN customers ON reminders.customer_id = customers.id
    WHERE reminders.status = 'pending'
    ORDER BY reminders.due_date ASC
    LIMIT 5
  `)

  return {
    stats: {
      totalCustomers: customers[0].totalCustomers,
      totalNotes: notes[0].totalNotes,
      pendingFollowUps: pending[0].pendingFollowUps,
      completedFollowUps: completed[0].completedFollowUps
    },
    recentActivity,
    upcomingFollowUps
  }
}