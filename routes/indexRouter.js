const { Router } = require("express");
const bookController = require("./controllers/bookController");
const indexRouter = Router();

indexRouter.get("/books/", bookController.getAllBooks);
indexRouter.post("/books/", bookController.insertBook);
indexRouter.delete("/books/:id", bookController.deleteBookById);
indexRouter.put("/books/:id", bookController.updateBook);
indexRouter.get("/books/:id", bookController.getBookById);

module.exports = indexRouter;