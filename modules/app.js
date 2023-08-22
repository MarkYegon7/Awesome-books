import BookCollection from './bookCollection.js';
import { displayBook } from './display.js';
import time from './liveTime.js';

const addBook = document.querySelector('#addBook');
const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#authorName');

addBook.addEventListener('click', (e) => {
  e.preventDefault();
  const newbook = new BookCollection();

  if (bookTitle.value.trim() !== '' && bookAuthor.value.trim() !== '') {
    newbook.setNewBook();
  }

  bookTitle.value = '';
  bookAuthor.value = '';

  addBook.disabled = bookTitle.value.trim() === '' || bookAuthor.value.trim() === '';
});

[bookTitle, bookAuthor].forEach((input) => {
  input.addEventListener('input', () => {
    addBook.disabled = bookTitle.value.trim() === '' || bookAuthor.value.trim() === '';
  });
});

displayBook();

const list = document.getElementById('list');
const formContainer = document.getElementById('formContainer');
const bookList = document.getElementById('bookList');
const contactContainer = document.getElementById('contactContainer');

list.addEventListener('click', () => {
  formContainer.style.display = 'none';
  bookList.style.display = 'block';
  contactContainer.style.display = 'none';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'All Awesome Book Lists';
});

const addNew = document.getElementById('addNew');

addNew.addEventListener('click', () => {
  formContainer.style.display = 'block';
  bookList.style.display = 'none';
  contactContainer.style.display = 'none';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'Add New Book';
});

const contact = document.getElementById('contact');

contact.addEventListener('click', () => {
  formContainer.style.display = 'none';
  bookList.style.display = 'none';
  contactContainer.style.display = 'flex';
  const heading = document.getElementById('mainTitle');
  heading.textContent = 'Contact Information';
  heading.style.margin = '4rem 0';
});

time();