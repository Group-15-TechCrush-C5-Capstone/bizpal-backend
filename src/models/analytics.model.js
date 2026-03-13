import db from "../config/db.js";

export const getAnalyticsData = async () => {
  // Notes added per day (last 7 days)
  const [notesPerDay] = await db.query(`
    SELECT DATE(created_at) AS date, COUNT(*) AS totalNotes
    FROM notes
    WHERE created_at >= CURDATE() - INTERVAL 7 DAY
    GROUP BY DATE(created_at)
    ORDER BY DATE(created_at) ASC
  `);

  // Completed follow-ups per day (last 7 days)
  const [completedFollowUps] = await db.query(`
    SELECT DATE(completed_at) AS date, COUNT(*) AS totalCompleted
    FROM reminders
    WHERE status = 'completed' AND completed_at >= CURDATE() - INTERVAL 7 DAY
    GROUP BY DATE(completed_at)
    ORDER BY DATE(completed_at) ASC
  `);

  // Customers added per day (last 7 days)
  const [customersPerDay] = await db.query(`
    SELECT DATE(created_at) AS date, COUNT(*) AS totalCustomers
    FROM customers
    WHERE created_at >= CURDATE() - INTERVAL 7 DAY
    GROUP BY DATE(created_at)
    ORDER BY DATE(created_at) ASC
  `);

  return { notesPerDay, completedFollowUps, customersPerDay };
};