import { getMovie, getMovies, getSuggestions } from "./db";

const resolvers = {
  Query: {
    movies: (_, { limit, page, rating, genre }) =>
      getMovies(limit, page, rating, genre),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;
