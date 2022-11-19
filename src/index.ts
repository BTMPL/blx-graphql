import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { context } from "./context";

import { resolvers } from "./resolvers";
import typeDefs from "./typedefs";

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers,
});

startStandaloneServer(server, {
  listen: { port: 4000 },
  context: context(server),
}).then(() => console.log("App started on port 4000"));
