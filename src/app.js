import express from "express";
import authRoutes from "./routes/auth.route.js"
import notesRoutes from "./routes/notes.routes.js"
import remindersRoutes from "./routes/reminders.routes.js"

import { globalErrorHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use("/api/auth", authRoutes);
app.use("/api", notesRoutes);
app.use("/api", remindersRoutes);
app.get("/", (req, res) => {
    res.send("Bizpal API is running");
});

app.use(globalErrorHandler)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});