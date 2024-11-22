const db = requrie("./db/queries.js");
const pool = require("./db/pool.js");

// think about ways to deal with error handling
// maybe install express-async-handler
async function getAllBooks(req, res) {
    const inventory = await db.getAllBooks();
    console.log(inventory);
    res.render("books", {inventory: inventory});
} 

async function getBookById(req, res) {
    const { id } = req.params;
    const book = await db.getBookById(id);
    res.json(book);
}

async function insertBook(req, res) {
    const newBook = await db.insertBook({
        title: req.body.title, 
        author_first: req.body.author_first, 
        author_last: req.body.author_last, 
        year_pub: req.body.year_pub, 
        publisher: req.body.publisher, 
        specialty: req.body.specialty
    });
    res.redirect("/books"); 
}

async function updateBook(req, res) {
    const { id } = req.params;
    const { title, author_first, author_last, year_pub, publisher, specialty } = req.body;
    const updateBook = await db.updateBook(id, { title, author_first, author_last, year_pub, publisher, specialty });
    res.json(updateBook); 
}

async function deleteBookById(req, res) {
    const { id } = req.params;
    const book = await db.deleteBookById(id);
    res.json({ message: "Book was successfully deleted" }); 
}

async function searchBook(req, res) {
    const { query } = req.params;
    const book = await db.searchBook(query);
    res.json(book); 
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    updateBook,
    deleteBookById,
    searchBook
}