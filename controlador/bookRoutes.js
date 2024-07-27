const { Book } = require("../models");

exports.getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findByPk(id);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
