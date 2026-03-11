import express from "express";
import {
  fetchReminders,
  markReminderComplete,
  fetchOverdueReminders
} from "../controllers/reminders.controller.js";

const router = express.Router();

// Get all reminders for a user
router.get("/reminders", fetchReminders);

// Mark a reminder complete
router.put("/reminders/:id/complete", markReminderComplete);

// Get overdue reminders
router.get("/reminders/overdue", fetchOverdueReminders);

export default router;