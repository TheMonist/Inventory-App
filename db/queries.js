const pool = require("./pool");

async function getAllBooks() {
    const { rows } = await pool.query("SELECT * FROM books");
    return rows;
}

async function getBookById(id) {
    await pool.query("SELECT * FROM books WHERE id = $1", [id])
}

async function insertBook(book) {
    await pool.query("INSERT INTO books (title, author_first, author_last, year_pub, publisher, specialty) VALUES())$1, $2, $3, $4, $5, $6",
        [book.title, book.author_first, book.author_last, book.year_pub, book.publisher, book.specialty]
    );
}

async function deleteBookById(id) {
    await pool.query("DELETE FROM books WHERE id = $1", [id]);
}

async function updateBook(book) {
    await pool.query("UPDATE books SET title = $1, author_first = $2, author_last = $3, year_pub = $4, publisher = $5, specialty = $6 WHERE id = $7",
        [book.title, book.author_first, book.author_last, book.year_pub, book.publisher, book.specialty]
    );
}

async function bookSearch(book) {
    await pool.query("SELECT * FROM books WHERE  LIKE $1", [`%${book}%`, `%${book}%`])
}

// You might want to add more queries per values (ex. title, year_pub)

module.exports = {
    getAllBooks,
    getBookById,
    insertBook,
    deleteBookById, 
    updateBook,
    bookSearch
}