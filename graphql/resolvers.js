import { getBooks, getById } from "./db";

const resolvers = {
  Query: {
    books: () => getBooks(),
    book: (_, { id }) => getById(id),
  },
};

export default resolvers;
