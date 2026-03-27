// for the tests, do not modify this array of books
const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780465050659.jpg",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    bookCoverImage:
      "https://images-na.ssl-images-amazon.com/images/I/41m1rQjm5tL._SX322_BO1,204,203,200_.jpg",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    bookCoverImage: "https://blackwells.co.uk/jacket/l/9780135957059.jpg",
  },
];

// Render list of books: title, author and image and a background colour on whether we have read the book or not.
const readingList = document.getElementById("reading-list")

// loop through arr, each obj => add to readingItem
books.forEach((e) => {
  const readingItem = document.createElement("li")
  readingList.appendChild(readingItem);

  readingItem.innerHTML = `<div>
  <b>${e.title}</b> by ${e.author}
  <img src=${e.bookCoverImage}>
  </div>`

  if (e.alreadyRead) {
    readingItem.classList.add("green")
  } else {
    readingItem.classList.add("red")
  }
})
