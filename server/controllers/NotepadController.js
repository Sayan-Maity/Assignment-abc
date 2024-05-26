const NotepadModel = require("../models/NotepadModel");

// GET
module.exports.getNotepadItems = async (req, res) => {
  try {
    const notepadItems = await NotepadModel.find();
    res.json(notepadItems);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Can't fetch Notepad Items due to server error" });
  }
};

// POST
module.exports.postNotepadItems = async (req, res) => {
  const { content, title } = req.body;
  try {
    const newNotepadItem = new NotepadModel({
      content,
      title,
    });
    await newNotepadItem.save();
    res.json({ message: "Notepad Item saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Notepad Item not added due to server error" });
  }
};

// DELETE
module.exports.deleteNotepadItem = async (req, res) => {
  const { id } = req.params;
  try {
    const notepadItem = await NotepadModel.findById(id);
    if (!notepadItem) {
      return res.status(404).json({ error: "Notepad Item not found" });
    }
    await NotepadModel.findByIdAndDelete(id);
    res.status(200).json({ message: "Notepad Item deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Notepad Item not deleted due to server error" });
  }
};
