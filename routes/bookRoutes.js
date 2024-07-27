const express = require("express");
const router = express.Router();
const bookController = require("../controlador/bookController");
const bookRoutes = require("../controlador/bookRoutes");

router.get("/books", bookController.getAllBooks);

router.get("/books/:id", bookRoutes.getBookById);

module.exports = router;
