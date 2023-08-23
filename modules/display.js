import BookCollection from './bookCollection.js';

const bookList = document.querySelector('#bookList');

const displayBook = () => {
  bookList.innerHTML = '';
  const newbook = new BookCollection();
  newbook.bookArr.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    const titleParagraph = document.createElement('p');
    titleParagraph.textContent = book.title;

    const bookBy = document.createElement('span');
    bookBy.textContent = 'by';
    bookBy.classList.add('book-by');

    titleParagraph.appendChild(bookBy);

    const authorParagraph = document.createElement('p');
    authorParagraph.textContent = book.author;
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('deleteBtn');
    removeButton.addEventListener('click', () => {
      const indexToRemove = newbook.bookArr.findIndex((item) => item.id === book.id);
      newbook.removeBookById(indexToRemove);
    });

    bookCard.appendChild(titleParagraph);
    bookCard.appendChild(authorParagraph);
    bookCard.appendChild(removeButton);
    bookList.appendChild(bookCard);
  });

  if (bookList.innerHTML === '') {
    bookList.classList.add('hide-book-list');
  } else {
    bookList.classList.remove('hide-book-list');
  }
};

export default displayBook;