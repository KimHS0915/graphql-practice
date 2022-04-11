import { getBooks, getById, addBook, deleteBook } from "./db";

const resolvers = {
  Query: {
    books: () => getBooks(),
    book: (_, { id }) => getById(id),
  },
  Mutation: {
    addBook: (_, { name, author, score }) => addBook(name, author, score),
    deleteBook: (_, { id }) => deleteBook(id),
  },
};

export default resolvers;
