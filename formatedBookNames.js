const { books } = require('./data/library');

const formatedBookNames = () => {
  return books.map((book) => {
    return `${book.name} - ${book.genre} - ${book.author.name}`;
  });
}

module.exports = { formatedBookNames };
