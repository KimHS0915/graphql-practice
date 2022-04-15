import { createServer } from "@graphql-yoga/node";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";

const server = createServer({
  schema: {
    typeDefs,
    resolvers,
  },
});

server.start();
