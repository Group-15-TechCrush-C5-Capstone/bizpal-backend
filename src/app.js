import express from "express"
import notesRoutes from "./routes/notes.routes.js"
import remindersRoutes from "./routes/reminders.routes.js"

const app = express()

app.use(express.json())

app.use("/api", notesRoutes)
app.use("/api", remindersRoutes)

app.get("/", (req, res) => {
    res.send("Bizpal API is running")
})

const PORT = 5000

app.listen(5000, () => {
    console.log(`Server running on port ${PORT}` )
})