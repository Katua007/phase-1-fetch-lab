function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((books) => {
      renderBooks(books);
      return books;
    });
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

// Make renderBooks available on window for testing
if (typeof window !== 'undefined') {
  window.renderBooks = renderBooks;
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks().then(renderBooks);
});
