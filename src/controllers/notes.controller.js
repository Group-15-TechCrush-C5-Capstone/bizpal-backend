import { addNote, getCustomerNotes } from "../models/notes.model.js"

// create a new note 
export const createNote = async(req, res) => {
  try{
    const { customerId, userId, note, followUpDate } = req.body
    const newNote = await addNote(customerId, userId, note, followUpDate)

    res.status(201).json({
        message: "Note added successfully",
        data: newNote
    })
  } catch (error){
    res.status(500).json({ error: error.message })
  }
};

// fetch all notes for a customer
export const fetchCustomerNotes = async (req, res) => {
    try {
        const { id } = req.params

const notes = await getCustomerNotes(id)

res.status(200).json(notes)
    } catch (error) { 
      console.log(error)
       res.status(500).json({ error: error.message })
    }
}

