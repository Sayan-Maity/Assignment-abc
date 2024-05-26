const express = require("express")
const { getNotepadItems, postNotepadItems, deleteNotepadItem } = require("../controllers/NotepadController")

const router = express.Router()

router.get("/getNotepadItems", getNotepadItems)
router.post("/postNotepadItems", postNotepadItems)
router.delete("/deleteNotepadItem/:id", deleteNotepadItem)

module.exports = router