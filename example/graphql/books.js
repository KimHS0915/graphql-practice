export let books = [
  {
    id: 0,
    name: "C Programming Language",
    author: "Brian W. Kernighan",
    score: 4.7,
  },
  {
    id: 1,
    name: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    score: 4.7,
  },
  {
    id: 2,
    name: "Code: The Hidden Language of Computer Hardware and Software",
    author: "Charles Petzold",
    score: 4.6,
  },
  {
    id: 3,
    name: "Operating System Concepts",
    author: "Abraham Silberschatz",
    score: 4.3,
  },
  {
    id: 4,
    name: "Deep Learning with Python",
    author: " Francois Chollet",
    score: 4.5,
  },
];

let newId = books.length;

export const getBooks = () => books;

export const getById = (id) => {
  const filtered = books.filter((book) => id === book.id);
  return filtered[0];
};

export const deleteBook = (id) => {
  const cleanedBooks = books.filter((book) => book.id !== id);
  if (books.length > cleanedBooks.length) {
    books = cleanedBooks;
    return true;
  } else {
    return false;
  }
};

export const addBook = (name, author, score) => {
  const newBook = {
    id: newId++,
    name,
    author,
    score,
  };
  books.push(newBook);
  return newBook;
};
