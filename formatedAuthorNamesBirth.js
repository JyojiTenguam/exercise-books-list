const { books } = require('./data/library');

const formatedAuthorNamesBirth = () => books
  .map((book) => `${book.author.name} - ${book.author.birthYear}`);

module.exports = { formatedAuthorNamesBirth };
