import { getUserReminders, completeReminder, getOverdueReminders } from "../models/reminders.model.js";

// GET /reminders
export const fetchReminders = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const reminders = await getUserReminders(userId);
    res.status(200).json(reminders);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// PUT /reminders/:id/complete
export const markReminderComplete = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const affected = await completeReminder(id, userId);
    if (affected === 0)
      return res.status(404).json({ error: "Reminder not found or no permission" });

    res.status(200).json({ message: "Reminder marked as completed" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET /reminders/overdue
export const fetchOverdueReminders = async (req, res) => {
  try {
    const { userId } = req.query;
    if (!userId) return res.status(400).json({ error: "userId is required" });

    const overdue = await getOverdueReminders(userId);
    res.status(200).json(overdue);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};