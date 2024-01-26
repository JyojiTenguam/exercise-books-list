const { books } = require('./data/library');

const formatedBookNames = () => books
  .map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);

module.exports = { formatedBookNames };
