const typeDefs = `
  type Movie {
    id: Int!
    title: String!
    rating: Float!
    summary: String!
    language: String!
    medium_cover_image: String!
    genres: [String]!
  }

  type Query {
    movies(limit: Int, page: Int, rating: Float, genre: String): [Movie]!
    movie(id: Int!): Movie!
    suggestions(id: Int!): [Movie]!
  }
`;

export default typeDefs;
