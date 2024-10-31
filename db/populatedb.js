const { Client } = require("pg");
const dotenv = require("dotenv").config();

const SQL = `
   CREATE TABLE IF NOT EXISTS books (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        title TEXT,
        author_first TEXT,
        author_last TEXT,
        year_pub INT,
        publisher TEXT,
        specialty TEXT
    );

    INSERT INTO books (title, author_first, author_last, year_pub, publisher, specialty) VALUES
        ('A Theory of Justice', 'John', 'Rawls', 1971, 'Harvard University Press', 'Political Philosophy'),
        ('How to Do Things with Words', 'J.L.', 'Austin', 1962, 'Oxford University Press', 'Philosophy of Language'),
        ('Reasons and Persons', 'Derek', 'Parfit', 1984, 'Oxford University Press', 'Ethics', 'Philosophy of Mind'),
        ('The Conscious Mind', 'David', 'Chalmers', 1996, 'Oxford University Press','Metaphysics'),
        ('On the Plurality of Worlds', 'David', 'Lewis', 1986, 'Wiley-Blackwell', ),
        ('The Scientific Image', 'Bas', 'van Frassen', 1980, 'Oxford University Press', 'Philosophy of Science'),
        ('Epistemology and Cognition', 'Alvin', 'Goldman', 1986, 'Oxford University Press', 'Epistemology');
`; 

async function main() {
    console.group("seeding...");
    const client = new Client({
        connectionString: process.env.URL,
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();