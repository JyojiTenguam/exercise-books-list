const { books } = require('./data/library');

const nameAndAge = () => books.map((book) => ({
  author: book.author.name,
  age: book.releaseYear - book.author.birthYear,
})).sort((a, b) => a.age - b.age);

module.exports = { nameAndAge };
