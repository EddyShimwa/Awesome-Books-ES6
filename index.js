import BooksClass from './modules/Books.js';
import dateTime from './modules/dateTime.js';
import displayError from './modules/errorMessage.js';

dateTime();
setInterval(dateTime, 1000);

const addBtn = document.querySelector('#add');

addBtn.addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title === '' || author === '') {
    displayError('Please fill the required Fields!');
  } else {
    const bookAd = new BooksClass();
    bookAd.add();
  }
});

const booksh = new BooksClass();
booksh.showBooks();

const allBtns = document.querySelectorAll('.remove');
allBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let temp = e.currentTarget.dataset;
    temp = +temp.id[temp.id.length - 1];
    const remBook = new BooksClass();
    remBook.del(temp);
    window.location.reload();
  });
});