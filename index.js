function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch('https://anapioficeandfire.com/api/books')
  .then(response => response.json())
  .then((json) => renderBooks(json));

  
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });

  const bookFive = books[4];
  console.log("title of book five is: ", bookFive["name"])

  //use .map to store the value of number of pages into a new array
  const pageNumSummary = books.map(   (book) => { console.log(`number of pages in ${book["name"]}`, book["numberOfPages"]); }  );

}

//show the fifth book in the series
// function fifthBook(books) {
// //
// const bookFive = books[4];
// console.log("title of book five is: ", bookFive["name"])
// }

// function totalPages(books) {
//   //use .map to store the value of number of pages into a new array
//   books.map(   (book) => { cosole.log("\n", book["numberOfPages"]); }  );
// }



document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
