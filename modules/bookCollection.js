const bookList = document.querySelector('#bookList');

class BookCollection {
  constructor() {
    this.bookTitle = document.querySelector('#bookTitle');
    this.bookAuthor = document.querySelector('#authorName');
    this.bookArr = JSON.parse(localStorage.getItem('booklist')) || [];
  }

    setNewBook = () => {
      const bookMaxId = Math.max(...this.bookArr.map((book) => book.id), 0);
      const newBook = {
        title: this.bookTitle.value,
        author: this.bookAuthor.value,
        id: bookMaxId + 1,
      };
      this.bookArr.push(newBook);
      localStorage.setItem('booklist', JSON.stringify(this.bookArr));
      this.displayBook();
    };

    displayBook = () => {
      bookList.innerHTML = '';
      this.bookArr.forEach((book) => {
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
          const indexToRemove = this.bookArr.findIndex((item) => item.id === book.id);
          this.removeBookById(indexToRemove);
        });

        bookCard.appendChild(titleParagraph);
        bookCard.appendChild(authorParagraph);
        bookCard.appendChild(removeButton);
        bookList.appendChild(bookCard);
        if (bookList.innerHTML === '') {
          bookList.classList.add('hide-book-list');
        } else {
          bookList.classList.remove('hide-book-list');
        }
      });
    }

    removeBookById = (id) => {
      if (id !== -1) {
        this.bookArr.splice(id, 1);
        localStorage.setItem('booklist', JSON.stringify(this.bookArr));
        this.displayBook();
      }
    };
}

export default BookCollection;
