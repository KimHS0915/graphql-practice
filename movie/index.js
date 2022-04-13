import "../env.js";
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "movie/graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql server is running on localhost:4000"));
