const db = requrie("./db/queries.js");
const pool = require("./db/pool.js");

// think about ways to deal with error handling
// maybe install express-async-handler
async function getAllBooks(req, res) {
    const inventory = await db.getAllBooks();
    console.log(inventory);
    // res.render( {}) => render page in views
}

async function getBookById(req, res) {
    const { id } = req.params;
    const book = await db.getBookById(id);
    // res.render(); => render page in views
}

async function insertBook(req, res) {
    // res.render() => render page in views
}

async function updateBook(req, res) {
    // res.render() => render page in views
}

async function deleteBookById(req, res) {
    const { id } = req.params;
    const book = await db.deleteBookById(id);
    // res.json() => render page in views
}

async function searchBook(req, res) {
    const { query } = req.params;
    const book = await db.searchBook(query);
    // res.render() => render page in views
}

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    updateBook,
    deleteBookById,
    searchBook
}