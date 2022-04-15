const typeDefs = `
  type Book {
    id: Int!
    name: String!
    author: String!
    score: Float!
  }

  type Query {
    books: [Book]!
    book(id: Int!): Book
  }

  type Mutation {
    addBook(name: String!, author: String!, score: Float!): Book!
    deleteBook(id: Int!): Boolean!
  }
`;

export default typeDefs;
